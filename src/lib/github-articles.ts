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
}

export interface ArticleFull extends ArticleSummary {
  sections: { heading: string; body: string }[];
  raw: string;
}

/** カテゴリフォルダ名からカテゴリ名を抽出 */
function parseCategoryName(dirName: string): string {
  // "01_風水_インテリア" → "風水・インテリア"
  const parts = dirName.split("_");
  return parts.slice(1).join("・");
}

/** ファイル名からナンバーとタイトルを抽出 */
function parseFilename(filename: string): { number: string; title: string } | null {
  const match = filename.match(/^(\d+)_(.+)\.txt$/);
  if (!match) return null;
  return { number: match[1], title: match[2] };
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

  // 1行目がタイトルならスキップ
  let startIndex = 0;
  if (lines[0]?.trim() && !lines[0].startsWith("■") && !lines[0].startsWith("##")) {
    startIndex = 1;
  }
  // 区切り線 (===) スキップ
  while (
    startIndex < lines.length &&
    (lines[startIndex].trim() === "" || /^[=\-]{3,}$/.test(lines[startIndex].trim()))
  ) {
    startIndex++;
  }

  for (let i = startIndex; i < lines.length; i++) {
    const line = lines[i];
    const isHeading =
      line.startsWith("## ") || line.startsWith("■ ") || line.startsWith("■");

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
      // 見出しの直後の区切り線もスキップ
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

  // セクションがない場合は全文を1セクションに
  if (sections.length === 0) {
    const body = lines.slice(startIndex).join("\n").trim();
    if (body) {
      sections.push({ heading: "本文", body });
    }
  }

  return sections;
}

/** 抜粋を生成 */
function makeExcerpt(sections: { heading: string; body: string }[]): string {
  const firstBody = sections[0]?.body || "";
  return firstBody.replace(/\n/g, " ").slice(0, 160);
}

// ─── Public API ───────────────────────────────────────

/** カテゴリ一覧を取得 */
export function getCategories(): CategoryInfo[] {
  if (!fs.existsSync(ARTICLES_BASE)) return [];

  return fs
    .readdirSync(ARTICLES_BASE, { withFileTypes: true })
    .filter((d) => d.isDirectory() && /^\d+_/.test(d.name))
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((d) => {
      const articles = fs
        .readdirSync(path.join(ARTICLES_BASE, d.name))
        .filter((f) => f.endsWith(".txt"));
      return {
        slug: d.name,
        name: parseCategoryName(d.name),
        articleCount: articles.length,
      };
    });
}

/** カテゴリ内の記事一覧を取得 */
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

      const content = fs.readFileSync(path.join(dir, f), "utf-8");
      const sections = parseSections(content);

      return {
        slug: parsed.number,
        number: parsed.number,
        title: parsed.title,
        category,
        categoryName,
        excerpt: makeExcerpt(sections),
      };
    })
    .filter((a): a is ArticleSummary => a !== null);
}

/** 記事全文を取得 */
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
    raw: content,
  };
}

/** 全カテゴリの全記事をフラットに取得 */
export function getAllArticlesFlat(): ArticleSummary[] {
  const categories = getCategories();
  return categories.flatMap((c) => getArticlesByCategory(c.slug));
}
