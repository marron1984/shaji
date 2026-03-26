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

// 丸ごと除去するセクション（見出しキーワード）
const REMOVE_SECTIONS = [
  /^導入/,
  /^結論/,
  /^CTA/,
  /^行動を促す/,
  /^次の一歩/,
  /^次のアクション/,
  /^今日からできる第一歩$/,
  /^今日からできるアクション$/,
  /^今日からできる一歩$/,
  /^今日からできる最初の一歩$/,
  /^今日からできること$/,
  /^今日の一歩$/,
  /^今すぐできるアクション$/,
  /^今すぐできる最初の一歩$/,
  /^今すぐできること$/,
  /^今すぐ始めよう$/,
  /^最初の一歩/,
  /^まずはここから/,
];

// 見出しから除去する接頭ラベル
const HEADING_LABELS_TO_STRIP = [
  /^原因・背景[｜|]/,
  /^具体的な方法[｜|]/,
  /^実践ステップ[｜|：:]/,
  /^まとめ[｜|]/,
  /^結論[｜| ]*──?\s*/,
  /^導入[｜| ]*──?\s*/,
  /^CTA[｜| ]*──?\s*/,
];

function shouldRemoveSection(heading) {
  return REMOVE_SECTIONS.some(pattern => pattern.test(heading));
}

function cleanHeading(heading) {
  let cleaned = heading;
  for (const pattern of HEADING_LABELS_TO_STRIP) {
    cleaned = cleaned.replace(pattern, "");
  }
  // （共感＋問題提起）等のメタ注釈を除去
  cleaned = cleaned.replace(/[（(][^）)]*(?:共感|問題提起|行動を促す)[^）)]*[）)]/g, "");
  return cleaned.trim();
}

function cleanBody(body) {
  // 「いかがでしたか」「最後までお読み」等の定型フレーズを除去
  return body
    .replace(/いかがでしたか[？?。]?\s*/g, "")
    .replace(/最後までお読みいただき[、,]?ありがとうございます[。.]?\s*/g, "")
    .replace(/ぜひ[、,]?今日から[^。]*試してみてください[。.]?\s*/g, "")
    .replace(/この記事では[、,][^。]*お伝えします[。.]\s*/g, "")
    .replace(/この記事では[、,][^。]*ご紹介します[。.]\s*/g, "")
    .replace(/この記事では[、,][^。]*解説します[。.]\s*/g, "")
    .trim();
}

function parseSections(content) {
  const lines = content.split("\n");
  const rawSections = [];
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
        if (introText) rawSections.push({ heading: "はじめに", body: introText });
      }
      foundFirstHeading = true;
      if (currentHeading) {
        rawSections.push({ heading: currentHeading, body: currentBody.join("\n").trim() });
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
    rawSections.push({ heading: currentHeading, body: currentBody.join("\n").trim() });
  }
  if (rawSections.length === 0) {
    const body = lines.slice(startIndex).join("\n").trim();
    if (body) rawSections.push({ heading: "本文", body });
  }

  // フィルタリング＆クリーニング
  const sections = [];
  for (const sec of rawSections) {
    if (shouldRemoveSection(sec.heading)) continue;
    if (!sec.body.trim()) continue;

    const heading = cleanHeading(sec.heading);
    const body = cleanBody(sec.body);
    if (!body) continue;

    sections.push({ heading: heading || sec.heading, body });
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
