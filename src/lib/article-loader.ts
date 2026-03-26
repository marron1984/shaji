import fs from "fs";
import path from "path";

export interface LoadedArticle {
  slug: string;
  number: number;
  title: string;
  body: string;
  sections: { heading: string; body: string }[];
}

const ARTICLES_DIR = path.join(process.cwd(), "public", "articles");

function parseArticle(filename: string, content: string): LoadedArticle | null {
  const match = filename.match(/^(\d+)_(.+)\.txt$/);
  if (!match) return null;

  const number = parseInt(match[1], 10);
  const title = match[2];
  const slug = `${match[1]}-${encodeURIComponent(title)}`;

  const lines = content.split("\n");

  // 最初の行がタイトルの場合スキップ
  let startIndex = 0;
  if (lines[0]?.trim() && !lines[0].startsWith("##")) {
    startIndex = 1;
    // 空行もスキップ
    while (startIndex < lines.length && lines[startIndex].trim() === "") {
      startIndex++;
    }
  }

  const sections: { heading: string; body: string }[] = [];
  let currentHeading = "";
  let currentBody: string[] = [];

  // イントロ部分（最初の##の前）
  let introLines: string[] = [];
  let foundFirstHeading = false;

  for (let i = startIndex; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith("## ")) {
      if (!foundFirstHeading && introLines.length > 0) {
        sections.push({
          heading: "はじめに",
          body: introLines.join("\n").trim(),
        });
      }
      foundFirstHeading = true;
      if (currentHeading) {
        sections.push({
          heading: currentHeading,
          body: currentBody.join("\n").trim(),
        });
      }
      currentHeading = line.replace(/^## /, "").trim();
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

  return {
    slug,
    number,
    title,
    body: content,
    sections,
  };
}

export function getAllLoadedArticles(): LoadedArticle[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];

  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".txt"));
  const articles: LoadedArticle[] = [];

  for (const file of files) {
    const content = fs.readFileSync(path.join(ARTICLES_DIR, file), "utf-8");
    const article = parseArticle(file, content);
    if (article) {
      articles.push(article);
    }
  }

  return articles.sort((a, b) => a.number - b.number);
}

export function getLoadedArticleBySlug(
  slug: string
): LoadedArticle | undefined {
  return getAllLoadedArticles().find((a) => a.slug === slug);
}
