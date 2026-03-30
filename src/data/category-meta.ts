/** カテゴリごとのビジュアル情報（絵文字アイコン・フリー写真） */

export interface CategoryMeta {
  emoji: string;
  image: string;
  description: string;
  featured?: boolean;
}

const categoryMeta: Record<string, CategoryMeta> = {
  "01": {
    emoji: "🏠",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=640&q=80",
    description: "お部屋の配置や色使いで運気アップ",
    featured: true,
  },
  "02": {
    emoji: "💰",
    image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=640&q=80",
    description: "お金に好かれる習慣と開運術",
    featured: true,
  },
  "03": {
    emoji: "💼",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=640&q=80",
    description: "仕事運を味方にする開運テクニック",
    featured: true,
  },
  "04": {
    emoji: "💕",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=640&q=80",
    description: "素敵な出会いと恋愛成就の秘訣",
    featured: true,
  },
  "05": {
    emoji: "🌿",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=640&q=80",
    description: "心身の健康を守る開運の知恵",
    featured: true,
  },
  "06": {
    emoji: "🤝",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=640&q=80",
    description: "良縁を引き寄せる人間関係の整え方",
  },
  "07": {
    emoji: "✨",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=640&q=80",
    description: "空間を整えて運気を上げる",
  },
  "08": {
    emoji: "⛩️",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=640&q=80",
    description: "正しい参拝作法と神社の楽しみ方",
    featured: true,
  },
  "09": {
    emoji: "🎍",
    image: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=640&q=80",
    description: "季節の行事で運気をリセット",
  },
  "10": {
    emoji: "🧠",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=640&q=80",
    description: "言葉と心の持ち方で人生を変える",
  },
  "11": {
    emoji: "👗",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=640&q=80",
    description: "装いから運気を高める",
  },
  "12": {
    emoji: "🎯",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=640&q=80",
    description: "多彩な開運テーマを総合的に",
  },
  "13": {
    emoji: "🌅",
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=640&q=80",
    description: "朝の習慣で一日の運気を決める",
  },
  "14": {
    emoji: "📊",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=640&q=80",
    description: "お金の管理で金運を呼び込む",
  },
  "15": {
    emoji: "👨‍👩‍👧",
    image: "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=640&q=80",
    description: "家庭の運気を高める子育て術",
  },
  "16": {
    emoji: "🗺️",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=640&q=80",
    description: "パワースポット巡りで開運旅行",
    featured: true,
  },
  "17": {
    emoji: "🍱",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=640&q=80",
    description: "食で運気を整える開運レシピ",
    featured: true,
  },
  "18": {
    emoji: "🔮",
    image: "https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=640&q=80",
    description: "占いで運勢を味方につける",
  },
  "19": {
    emoji: "🚀",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&q=80",
    description: "ビジネスと起業の開運戦略",
  },
  "20": {
    emoji: "🌳",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=640&q=80",
    description: "自然の力で心と運気をリフレッシュ",
  },
  "21": {
    emoji: "🏡",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=640&q=80",
    description: "住まい選びと引っ越しの開運術",
  },
  "22": {
    emoji: "🐾",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=640&q=80",
    description: "ペットがもたらす開運パワー",
  },
  "23": {
    emoji: "🎂",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=640&q=80",
    description: "年代に合わせた開運アドバイス",
  },
  "24": {
    emoji: "🏮",
    image: "https://images.unsplash.com/photo-1528164344885-47b1492b5e7b?w=640&q=80",
    description: "毎日の暮らしに開運を取り入れる",
  },
  "25": {
    emoji: "🧘",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=640&q=80",
    description: "心の健康が開運の基盤",
  },
  "26": {
    emoji: "😴",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=640&q=80",
    description: "質の良い睡眠で運気を充電",
  },
  "27": {
    emoji: "📚",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=640&q=80",
    description: "学びと資格で運気を開く",
  },
  "28": {
    emoji: "🎁",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238f839?w=640&q=80",
    description: "お祝いと贈り物の開運マナー",
  },
  "29": {
    emoji: "🏯",
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=640&q=80",
    description: "和の伝統に宿る開運の知恵",
  },
  "30": {
    emoji: "📱",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=640&q=80",
    description: "デジタル時代の開運活用術",
  },
  "31": {
    emoji: "⚽",
    image: "https://images.unsplash.com/photo-1461896836934-bd45ba6343b4?w=640&q=80",
    description: "運動で運気と活力をアップ",
  },
  "32": {
    emoji: "🎵",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=640&q=80",
    description: "音楽と芸術で感性と運気を磨く",
  },
  "33": {
    emoji: "💬",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=640&q=80",
    description: "コミュニケーションで運を引き寄せる",
  },
  "34": {
    emoji: "⏰",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=640&q=80",
    description: "時間管理で運気の流れを整える",
  },
  "35": {
    emoji: "📈",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=640&q=80",
    description: "資産を増やす開運マインド",
  },
  "36": {
    emoji: "🎯",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=640&q=80",
    description: "夢と目標達成を叶える開運法",
  },
  "37": {
    emoji: "🌟",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=640&q=80",
    description: "人生を豊かにする開運哲学",
  },
  "38": {
    emoji: "🌸",
    image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=640&q=80",
    description: "四季を楽しむ開運の過ごし方",
  },
  "39": {
    emoji: "🎨",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=640&q=80",
    description: "色の力で運気をコントロール",
  },
  "40": {
    emoji: "🕯️",
    image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?w=640&q=80",
    description: "香りで空間と心を浄化",
  },
  "41": {
    emoji: "📷",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=640&q=80",
    description: "写真の力で運気を記録する",
  },
  "42": {
    emoji: "🤚",
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=640&q=80",
    description: "手相・人相から読む開運サイン",
  },
  "43": {
    emoji: "🔢",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=640&q=80",
    description: "数字の持つ開運パワーを活用",
  },
  "44": {
    emoji: "💎",
    image: "https://images.unsplash.com/photo-1551122102-63c0d4f10117?w=640&q=80",
    description: "パワーストーンで運気を引き寄せる",
  },
  "45": {
    emoji: "✏️",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=640&q=80",
    description: "文房具選びで運気を上げる",
  },
  "46": {
    emoji: "🚗",
    image: "https://images.unsplash.com/photo-1449965408869-ecd309edee60?w=640&q=80",
    description: "車と乗り物の開運カスタマイズ",
  },
  "47": {
    emoji: "📜",
    image: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=640&q=80",
    description: "言い伝えに隠された開運の真実",
  },
  "48": {
    emoji: "⭐",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=640&q=80",
    description: "星座と天体が示す運命のメッセージ",
  },
  "49": {
    emoji: "🐉",
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=640&q=80",
    description: "干支で読み解く開運の流れ",
  },
  "50": {
    emoji: "💑",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=640&q=80",
    description: "夫婦・カップルの開運術",
  },
  "51": {
    emoji: "🧑",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=640&q=80",
    description: "ソロライフを楽しむ開運スタイル",
  },
  "52": {
    emoji: "📖",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=640&q=80",
    description: "開運の知識を総まとめ",
  },
  "54": { emoji: "📕", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=640&q=80", description: "読書で心と運気を磨く" },
  "55": { emoji: "🎬", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=640&q=80", description: "映画・ドラマから開運のヒント" },
  "56": { emoji: "📲", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=640&q=80", description: "SNS発信で運気を広げる" },
  "60": { emoji: "♻️", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=640&q=80", description: "エコな暮らしで開運" },
  "63": { emoji: "🌙", image: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=640&q=80", description: "夜の過ごし方で運気を整える" },
  "64": { emoji: "🏖️", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=640&q=80", description: "週末の過ごし方で運気チャージ" },
  "65": { emoji: "🎉", image: "https://images.unsplash.com/photo-1549465220-1a8b9238f839?w=640&q=80", description: "記念日とイベントの開運活用" },
  "67": { emoji: "🎩", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=640&q=80", description: "マナーと礼儀で運気アップ" },
  "69": { emoji: "🏆", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=640&q=80", description: "開運の集大成" },
  "71": { emoji: "♨️", image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=640&q=80", description: "温泉で心身と運気を癒す" },
  "72": { emoji: "☕", image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=640&q=80", description: "カフェ時間で運気を整える" },
  "73": { emoji: "🍽️", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=640&q=80", description: "外食で運気を上げる選び方" },
  "75": { emoji: "🌱", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=640&q=80", description: "ハーブと薬草の開運パワー" },
  "76": { emoji: "🌤️", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=640&q=80", description: "天気と気象の開運活用" },
  "77": { emoji: "🐶", image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=640&q=80", description: "動物占いで自分を知る" },
  "78": { emoji: "💤", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=640&q=80", description: "夢から読み解く開運メッセージ" },
  "85": { emoji: "🐱", image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=640&q=80", description: "ペットケアで運気を高める" },
  "86": { emoji: "🌻", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=640&q=80", description: "ガーデニングで開運" },
  "87": { emoji: "💧", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=640&q=80", description: "水の力で運気を浄化" },
  "88": { emoji: "🧘", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=640&q=80", description: "呼吸法と瞑想で開運" },
  "89": { emoji: "💍", image: "https://images.unsplash.com/photo-1551122102-63c0d4f10117?w=640&q=80", description: "ジュエリーで運気を纏う" },
  "90": { emoji: "🍡", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=640&q=80", description: "和菓子とスイーツの開運効果" },
  "91": { emoji: "🧹", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=640&q=80", description: "掃除道具の選び方で運気アップ" },
  "93": { emoji: "📦", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=640&q=80", description: "片付け・収納で運気を整える" },
  "94": { emoji: "✨", image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=640&q=80", description: "引き寄せの法則で願望実現" },
};

export function getCategoryMeta(categoryId: string): CategoryMeta {
  return (
    categoryMeta[categoryId] || {
      emoji: "🔮",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=640&q=80",
      description: "開運の知恵をお届け",
    }
  );
}

export default categoryMeta;
