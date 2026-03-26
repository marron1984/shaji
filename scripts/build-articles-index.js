const fs = require("fs");
const path = require("path");

const ARTICLES_DIR = path.join(__dirname, "..", "public", "articles");
const OUTPUT_FILE = path.join(__dirname, "..", "src", "data", "articles-index.json");

function parseCategoryName(dirName) {
  const parts = dirName.split("_");
  return parts.slice(1).join("・");
}

function parseFilename(filename) {
  const scheduled = filename.match(/^(\d+)_(\d{4}-\d{2}-\d{2}-\d{4})_(.+)\.txt$/);
  if (scheduled) {
    const [, num, dateStr, title] = scheduled;
    const iso = `${dateStr.slice(0, 10)}T${dateStr.slice(11, 13)}:${dateStr.slice(13, 15)}:00+09:00`;
    return { number: num, title, publishAt: iso };
  }
  const immediate = filename.match(/^(\d+)_(.+)\.txt$/);
  if (immediate) {
    return { number: immediate[1], title: immediate[2], publishAt: null };
  }
  return null;
}

function parseSections(content) {
  const lines = content.split("\n");
  const sections = [];
  let currentHeading = "";
  let currentBody = [];
  let introLines = [];
  let foundFirstHeading = false;

  let startIndex = 0;
  if (lines[0]?.trim() && !lines[0].startsWith("■") && !lines[0].startsWith("##")) {
    startIndex = 1;
  }
  while (startIndex < lines.length && (lines[startIndex]?.trim() === "" || /^[=\-]{3,}$/.test(lines[startIndex]?.trim() || ""))) {
    startIndex++;
  }

  for (let i = startIndex; i < lines.length; i++) {
    const line = lines[i];
    const isHeading = line.startsWith("## ") || line.startsWith("■ ") || line.startsWith("■");
    if (isHeading) {
      if (!foundFirstHeading && introLines.length > 0) {
        const introText = introLines.join("\n").trim();
        if (introText) sections.push({ heading: "はじめに", body: introText });
      }
      foundFirstHeading = true;
      if (currentHeading) {
        sections.push({ heading: currentHeading, body: currentBody.join("\n").trim() });
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
    sections.push({ heading: currentHeading, body: currentBody.join("\n").trim() });
  }
  if (sections.length === 0) {
    const body = lines.slice(startIndex).join("\n").trim();
    if (body) sections.push({ heading: "本文", body });
  }
  return sections;
}

// Build index
const categories = [];
const dirs = fs.readdirSync(ARTICLES_DIR, { withFileTypes: true })
  .filter(d => d.isDirectory() && /^\d+_/.test(d.name))
  .sort((a, b) => a.name.localeCompare(b.name));

let totalArticles = 0;
let globalIndex = 0;
const IMMEDIATE_PUBLISH_COUNT = 600; // 最初の600記事は即時公開

for (const dir of dirs) {
  const catName = parseCategoryName(dir.name);
  const articles = [];
  const files = fs.readdirSync(path.join(ARTICLES_DIR, dir.name))
    .filter(f => f.endsWith(".txt"))
    .sort();

  for (const file of files) {
    const parsed = parseFilename(file);
    if (!parsed) continue;

    globalIndex++;
    const content = fs.readFileSync(path.join(ARTICLES_DIR, dir.name, file), "utf-8");
    const sections = parseSections(content);
    const excerpt = (sections[0]?.body || "").replace(/\n/g, " ").slice(0, 160);

    // 最初の600記事は即時公開、それ以降は予約日時を維持
    const publishAt = globalIndex <= IMMEDIATE_PUBLISH_COUNT ? null : parsed.publishAt;

    articles.push({
      slug: parsed.number,
      number: parsed.number,
      title: parsed.title,
      publishAt,
      excerpt,
      sections,
    });
    totalArticles++;
  }

  categories.push({
    slug: dir.name,
    name: catName,
    articles,
  });
}

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(categories));
const size = fs.statSync(OUTPUT_FILE).size;
console.log(`Generated: ${OUTPUT_FILE}`);
console.log(`Categories: ${categories.length}, Articles: ${totalArticles}`);
console.log(`Size: ${(size / 1024 / 1024).toFixed(2)} MB`);
