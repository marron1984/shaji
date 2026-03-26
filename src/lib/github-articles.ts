import fs from "fs";
import path from "path";

const ARTICLES_BASE = path.join(process.cwd(), "public", "articles");

export interface CategoryInfo {
  slug: string;
  name: string;
  articleCount: number;
}

export interface ArticleSummary {
  slug: string;
  number: string;
  title: string;
  category: string;
  categoryName: string;
  excerpt: string;
  publishAt: string | null; // ISO string or null (即時公開)
}

export interface ArticleFull extends ArticleSummary {
  sections: { heading: string; body: string }[];
  raw: string;
}

/** カテゴリフォルダ名からカテゴリ名を抽出 */
function parseCategoryName(dirName: string): string {
  const parts = dirName.split("_");
  return parts.slice(1).join("・");
}

/**
 * ファイル名パーサー
 * 対応形式:
 *   001_タイトル.txt                    → 即時公開
 *   001_2026-03-27-0900_タイトル.txt    → 予約投稿
 */
function parseFilename(
  filename: string
): { number: string; title: string; publishAt: string | null } | null {
  // 予約投稿: 番号_日時_タイトル.txt
  const scheduled = filename.match(
    /^(\d+)_(\d{4}-\d{2}-\d{2}-\d{4})_(.+)\.txt$/
  );
  if (scheduled) {
    const [, num, dateStr, title] = scheduled;
    // "2026-03-27-0900" → "2026-03-27T09:00:00+09:00"
    const iso = `${dateStr.slice(0, 10)}T${dateStr.slice(11, 13)}:${dateStr.slice(13, 15)}:00+09:00`;
    return { number: num, title, publishAt: iso };
  }

  // 即時公開: 番号_タイトル.txt
  const immediate = filename.match(/^(\d+)_(.+)\.txt$/);
  if (immediate) {
    return { number: immediate[1], title: immediate[2], publishAt: null };
  }

  return null;
}

/** 記事が公開中かどうか */
function isPublished(publishAt: string | null): boolean {
  if (!publishAt) return true; // 日時なし = 即時公開
  return new Date(publishAt).getTime() <= Date.now();
}

/** テキスト本文をセクション分割 */
function parseSections(
  content: string
): { heading: string; body: string }[] {
  const lines = content.split("\n");
  const sections: { heading: string; body: string }[] = [];
  let currentHeading = "";
  let currentBody: string[] = [];
  let introLines: string[] = [];
  let foundFirstHeading = false;

  let startIndex = 0;
  if (
    lines[0]?.trim() &&
    !lines[0].startsWith("■") &&
    !lines[0].startsWith("##")
  ) {
    startIndex = 1;
  }
  while (
    startIndex < lines.length &&
    (lines[startIndex].trim() === "" ||
      /^[=\-]{3,}$/.test(lines[startIndex].trim()))
  ) {
    startIndex++;
  }

  for (let i = startIndex; i < lines.length; i++) {
    const line = lines[i];
    const isHeading =
      line.startsWith("## ") ||
      line.startsWith("■ ") ||
      line.startsWith("■");

    if (isHeading) {
      if (!foundFirstHeading && introLines.length > 0) {
        const introText = introLines.join("\n").trim();
        if (introText) {
          sections.push({ heading: "はじめに", body: introText });
        }
      }
      foundFirstHeading = true;
      if (currentHeading) {
        sections.push({
          heading: currentHeading,
          body: currentBody.join("\n").trim(),
        });
      }
      currentHeading = line.replace(/^(##\s*|■\s*)/, "").trim();
      currentBody = [];
    } else if (!foundFirstHeading) {
      introLines.push(line);
    } else {
      currentBody.push(line);
    }
  }

  if (currentHeading) {
    sections.push({
      heading: currentHeading,
      body: currentBody.join("\n").trim(),
    });
  }

  if (sections.length === 0) {
    const body = lines.slice(startIndex).join("\n").trim();
    if (body) {
      sections.push({ heading: "本文", body });
    }
  }

  return sections;
}

function makeExcerpt(sections: { heading: string; body: string }[]): string {
  const firstBody = sections[0]?.body || "";
  return firstBody.replace(/\n/g, " ").slice(0, 160);
}

// ─── Public API ───────────────────────────────────────

/** カテゴリ一覧（公開済み記事のみカウント） */
export function getCategories(): CategoryInfo[] {
  if (!fs.existsSync(ARTICLES_BASE)) return [];

  return fs
    .readdirSync(ARTICLES_BASE, { withFileTypes: true })
    .filter((d) => d.isDirectory() && /^\d+_/.test(d.name))
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((d) => {
      const articles = getArticlesByCategory(d.name);
      return {
        slug: d.name,
        name: parseCategoryName(d.name),
        articleCount: articles.length,
      };
    })
    .filter((c) => c.articleCount > 0);
}

/** カテゴリ内の公開済み記事一覧 */
export function getArticlesByCategory(category: string): ArticleSummary[] {
  const dir = path.join(ARTICLES_BASE, category);
  if (!fs.existsSync(dir)) return [];

  const categoryName = parseCategoryName(category);

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".txt"))
    .sort()
    .map((f) => {
      const parsed = parseFilename(f);
      if (!parsed) return null;
      if (!isPublished(parsed.publishAt)) return null; // 未来の記事は非表示

      const content = fs.readFileSync(path.join(dir, f), "utf-8");
      const sections = parseSections(content);

      return {
        slug: parsed.number,
        number: parsed.number,
        title: parsed.title,
        category,
        categoryName,
        excerpt: makeExcerpt(sections),
        publishAt: parsed.publishAt,
      };
    })
    .filter((a): a is ArticleSummary => a !== null);
}

/** 記事全文を取得（公開済みのみ） */
export function getArticle(
  category: string,
  slug: string
): ArticleFull | null {
  const dir = path.join(ARTICLES_BASE, category);
  if (!fs.existsSync(dir)) return null;

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".txt"));
  const file = files.find((f) => f.startsWith(`${slug}_`));
  if (!file) return null;

  const parsed = parseFilename(file);
  if (!parsed) return null;
  if (!isPublished(parsed.publishAt)) return null; // 未来の記事は非表示

  const content = fs.readFileSync(path.join(dir, file), "utf-8");
  const sections = parseSections(content);
  const categoryName = parseCategoryName(category);

  return {
    slug: parsed.number,
    number: parsed.number,
    title: parsed.title,
    category,
    categoryName,
    sections,
    excerpt: makeExcerpt(sections),
    publishAt: parsed.publishAt,
    raw: content,
  };
}

/** 全カテゴリの公開済み記事をフラットに取得 */
export function getAllArticlesFlat(): ArticleSummary[] {
  const categories = getCategories();
  return categories.flatMap((c) => getArticlesByCategory(c.slug));
}

/** 統計情報（管理用） */
export function getStats(): {
  published: number;
  scheduled: number;
  categories: number;
} {
  if (!fs.existsSync(ARTICLES_BASE)) {
    return { published: 0, scheduled: 0, categories: 0 };
  }

  let published = 0;
  let scheduled = 0;

  const dirs = fs
    .readdirSync(ARTICLES_BASE, { withFileTypes: true })
    .filter((d) => d.isDirectory() && /^\d+_/.test(d.name));

  for (const d of dirs) {
    const files = fs
      .readdirSync(path.join(ARTICLES_BASE, d.name))
      .filter((f) => f.endsWith(".txt"));

    for (const f of files) {
      const parsed = parseFilename(f);
      if (!parsed) continue;
      if (isPublished(parsed.publishAt)) {
        published++;
      } else {
        scheduled++;
      }
    }
  }

  return { published, scheduled, categories: dirs.length };
}
