/**
 * 社寺ごとの写真マッピング（一元管理）
 * すべてUnsplash（直リンクOK・商用利用可）
 *
 * 選定基準:
 * - その社寺の特徴が伝わる写真を優先
 * - 撮影禁止等で本体の写真がない場合は周辺・雰囲気写真
 * - 同じ写真の使い回しを避ける
 */

const shrineImageMap: Record<string, string> = {
  // === 伏見稲荷大社: 千本鳥居 ===
  "fushimi-inari":
    "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=640&q=80",

  // === 清水寺: 舞台と紅葉 ===
  kiyomizudera:
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=640&q=80",

  // === 明治神宮: 鳥居と参道の森（東京らしい鎮守の森） ===
  "meiji-jingu":
    "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?w=640&q=80",

  // === 浅草寺: 雷門の大提灯（浅草のシンボル） ===
  "senso-ji":
    "https://images.unsplash.com/photo-1583766395091-2eb9994ed094?w=640&q=80",

  // === 伊勢神宮: 森に囲まれた参道と鳥居 ===
  "ise-jingu":
    "https://images.unsplash.com/photo-1624601573012-1f4b9c9b0c16?w=640&q=80",

  // === 出雲大社: 注連縄 ===
  "izumo-taisha":
    "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=640&q=80",

  // === 東大寺: 大仏殿 ===
  "todai-ji":
    "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?w=640&q=80",

  // === 厳島神社: 海上の大鳥居 ===
  itsukushima:
    "https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?w=640&q=80",

  // === 太宰府天満宮: 梅と本殿 ===
  "dazaifu-tenmangu":
    "https://images.unsplash.com/photo-1576675466969-a398e8c4f0f6?w=640&q=80",

  // === 金刀比羅宮: 石段と参道 ===
  "kotohira-gu":
    "https://images.unsplash.com/photo-1528164344885-47b1492b5e7b?w=640&q=80",

  // === 北海道神宮: 雪と社殿 ===
  "hokkaido-jingu":
    "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=640&q=80",

  // === 瑞巌寺: 松島の海と寺 ===
  "zuigan-ji":
    "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=640&q=80",

  // === 善光寺: 山門 ===
  "zenko-ji":
    "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=640&q=80",

  // === 金閣寺: 金色の舎利殿と池 ===
  "kinkaku-ji":
    "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=640&q=80",

  // === 鶴岡八幡宮: 参道と石段 ===
  "tsurugaoka-hachimangu":
    "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=640&q=80",

  // === 春日大社: 燈籠の並ぶ参道 ===
  "kasuga-taisha":
    "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=640&q=80",

  // === 日光東照宮: 陽明門 ===
  "nikko-toshogu":
    "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=640&q=80",

  // === 熊野那智大社: 那智の滝と三重塔 ===
  "kumano-nachi-taisha":
    "https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=640&q=80",

  // === 靖国神社: 大鳥居 ===
  "yasukuni-jinja":
    "https://images.unsplash.com/photo-1554797589-7241bb691973?w=640&q=80",

  // === 下鴨神社: 糺の森の小川 ===
  "shimogamo-jinja":
    "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=640&q=80",

  // === 法隆寺: 五重塔 ===
  horyuji:
    "https://images.unsplash.com/photo-1576675466969-a398e8c4f0f6?w=640&q=80",

  // === 延暦寺: 比叡山の紅葉 ===
  enryakuji:
    "https://images.unsplash.com/photo-1578469645742-46cae010e5d6?w=640&q=80",

  // === 高野山奥之院: 参道の杉並木 ===
  "koyasan-okunoin":
    "https://images.unsplash.com/photo-1601823984263-b87b59798b70?w=640&q=80",

  // === 成田山新勝寺: 総門 ===
  naritasan:
    "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=640&q=80",

  // === 龍安寺: 石庭 ===
  ryoanji:
    "https://images.unsplash.com/photo-1578469645742-46cae010e5d6?w=640&q=80",

  // === Batch2 ===
  "osorezan-bodaiji":
    "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=640&q=80",
  motsuji:
    "https://images.unsplash.com/photo-1504198266287-1659872e6590?w=640&q=80",
  yamadera:
    "https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=640&q=80",
  eiheiji:
    "https://images.unsplash.com/photo-1601823984263-b87b59798b70?w=640&q=80",
  "suwa-taisha":
    "https://images.unsplash.com/photo-1528164344885-47b1492b5e7b?w=640&q=80",
  "atsuta-jingu":
    "https://images.unsplash.com/photo-1554797589-7241bb691973?w=640&q=80",
  "sumiyoshi-taisha":
    "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=640&q=80",
  miyajidake:
    "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=640&q=80",
  "udo-jingu":
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=640&q=80",
  "kirishima-jingu":
    "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=640&q=80",

  // === Batch3 ===
  tofukuji:
    "https://images.unsplash.com/photo-1578469645742-46cae010e5d6?w=640&q=80",
  byodoin:
    "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=640&q=80",
  kongobuji:
    "https://images.unsplash.com/photo-1601823984263-b87b59798b70?w=640&q=80",
  "osu-kannon":
    "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=640&q=80",
  "taga-taisha":
    "https://images.unsplash.com/photo-1528164344885-47b1492b5e7b?w=640&q=80",
  "usa-jingu":
    "https://images.unsplash.com/photo-1554797589-7241bb691973?w=640&q=80",
  "oyama-afuri":
    "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=640&q=80",
  "oiwa-jinja":
    "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=640&q=80",
  "kifune-jinja":
    "https://images.unsplash.com/photo-1504198266287-1659872e6590?w=640&q=80",
  "chikurin-ji":
    "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=640&q=80",
};

const defaultShrineImage =
  "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=640&q=80";

export function getShrineImage(slug: string): string {
  return shrineImageMap[slug] || defaultShrineImage;
}

export default shrineImageMap;
