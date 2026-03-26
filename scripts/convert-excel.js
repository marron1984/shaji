const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");

// 地域マッピング
const prefectureToRegion = {
  北海道: "hokkaido",
  青森県: "tohoku", 岩手県: "tohoku", 宮城県: "tohoku", 秋田県: "tohoku", 山形県: "tohoku", 福島県: "tohoku",
  東京都: "kanto", 神奈川県: "kanto", 埼玉県: "kanto", 千葉県: "kanto", 茨城県: "kanto", 栃木県: "kanto", 群馬県: "kanto",
  新潟県: "chubu", 富山県: "chubu", 石川県: "chubu", 福井県: "chubu", 山梨県: "chubu", 長野県: "chubu", 岐阜県: "chubu", 静岡県: "chubu", 愛知県: "chubu",
  大阪府: "kinki", 京都府: "kinki", 兵庫県: "kinki", 奈良県: "kinki", 三重県: "kinki", 滋賀県: "kinki", 和歌山県: "kinki",
  広島県: "chugoku", 岡山県: "chugoku", 山口県: "chugoku", 鳥取県: "chugoku", 島根県: "chugoku",
  愛媛県: "shikoku", 香川県: "shikoku", 高知県: "shikoku", 徳島県: "shikoku",
  福岡県: "kyushu", 佐賀県: "kyushu", 長崎県: "kyushu", 熊本県: "kyushu", 大分県: "kyushu", 宮崎県: "kyushu", 鹿児島県: "kyushu", 沖縄県: "kyushu",
};

function slugify(name, index) {
  return `temple-${index}`;
}

function readExcel(filePath) {
  const wb = XLSX.readFile(filePath);
  const ws = wb.Sheets[wb.SheetNames[0]];
  return XLSX.utils.sheet_to_json(ws, { header: 1 }).slice(2); // Skip header rows
}

const rootDir = path.join(__dirname, "..");
const eastRows = readExcel(path.join(rootDir, "日本寺院総鑑Ver6_1東日本版.xls"));
const westRows = readExcel(path.join(rootDir, "日本寺院総鑑Ver6_1西日本版.xls"));
const allRows = [...eastRows, ...westRows];

const temples = [];

for (const row of allRows) {
  const no = row[0];
  const sect = row[1];
  const name = row[2];
  const zip = row[3];
  const prefecture = row[4];
  const address = row[5];
  const phone = row[6];
  const fax = row[7];
  const priest = row[8];
  const vicePriest = row[9];
  const concurrent = row[10];
  const mainDeity = row[11];
  const url = row[12];
  const returned = row[13];

  if (!name || !prefecture) continue;
  if (returned === "*") continue; // 不着マークはスキップ

  const regionId = prefectureToRegion[prefecture];
  if (!regionId) continue;

  temples.push({
    id: no || temples.length + 1,
    name: String(name).trim(),
    sect: sect ? String(sect).trim() : "",
    zip: zip ? String(zip).trim() : "",
    prefecture: String(prefecture).trim(),
    address: address ? String(address).trim() : "",
    phone: phone ? String(phone).trim() : "",
    mainDeity: mainDeity ? String(mainDeity).trim() : "",
    url: url ? String(url).trim() : "",
    regionId,
  });
}

console.log(`Total valid temples: ${temples.length}`);

// 都道府県ごとの件数
const byPref = {};
for (const t of temples) {
  byPref[t.prefecture] = (byPref[t.prefecture] || 0) + 1;
}
console.log("By prefecture:", JSON.stringify(byPref, null, 2));

// JSONファイルとして出力
const outPath = path.join(rootDir, "src", "data", "temples.json");
fs.writeFileSync(outPath, JSON.stringify(temples, null, 0)); // minified
const stats = fs.statSync(outPath);
console.log(`Output: ${outPath} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
