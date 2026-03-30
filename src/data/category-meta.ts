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
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=640",
    description: "お部屋の配置や色使いで運気アップ",
    featured: true,
  },
  "02": {
    emoji: "💰",
    image: "https://cdn.pixabay.com/photo/2016/10/09/19/19/coins-1726618_640.jpg",
    description: "お金に好かれる習慣と開運術",
    featured: true,
  },
  "03": {
    emoji: "💼",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=640",
    description: "仕事運を味方にする開運テクニック",
    featured: true,
  },
  "04": {
    emoji: "💕",
    image: "https://cdn.pixabay.com/photo/2017/01/04/21/00/cherry-blossoms-1953365_640.jpg",
    description: "素敵な出会いと恋愛成就の秘訣",
    featured: true,
  },
  "05": {
    emoji: "🌿",
    image: "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=640",
    description: "心身の健康を守る開運の知恵",
    featured: true,
  },
  "06": {
    emoji: "🤝",
    image: "https://cdn.pixabay.com/photo/2017/06/23/02/35/handshake-2433812_640.jpg",
    description: "良縁を引き寄せる人間関係の整え方",
  },
  "07": {
    emoji: "✨",
    image: "https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=640",
    description: "空間を整えて運気を上げる",
  },
  "08": {
    emoji: "⛩️",
    image: "https://cdn.pixabay.com/photo/2019/07/21/07/12/torii-4352005_640.jpg",
    description: "正しい参拝作法と神社の楽しみ方",
    featured: true,
  },
  "09": {
    emoji: "🎍",
    image: "https://images.pexels.com/photos/5765820/pexels-photo-5765820.jpeg?auto=compress&cs=tinysrgb&w=640",
    description: "季節の行事で運気をリセット",
  },
  "10": {
    emoji: "🧠",
    image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
    description: "言葉と心の持ち方で人生を変える",
  },
  "11": {
    emoji: "👗",
    image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=640",
    description: "装いから運気を高める",
  },
  "12": {
    emoji: "🎯",
    image: "https://cdn.pixabay.com/photo/2020/08/09/12/23/nature-5475488_640.jpg",
    description: "多彩な開運テーマを総合的に",
  },
  "13": {
    emoji: "🌅",
    image: "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=640",
    description: "朝の習慣で一日の運気を決める",
  },
  "14": {
    emoji: "📊",
    image: "https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241_640.jpg",
    description: "お金の管理で金運を呼び込む",
  },
  "15": {
    emoji: "👨‍👩‍👧",
    image: "https://images.pexels.com/photos/1128317/pexels-photo-1128317.jpeg?auto=compress&cs=tinysrgb&w=640",
    description: "家庭の運気を高める子育て術",
  },
  "16": {
    emoji: "🗺️",
    image: "https://cdn.pixabay.com/photo/2020/01/20/20/36/fushimi-inari-4781536_640.jpg",
    description: "パワースポット巡りで開運旅行",
    featured: true,
  },
  "17": {
    emoji: "🍱",
    image: "https://images.pexels.com/photos/884596/pexels-photo-884596.jpeg?auto=compress&cs=tinysrgb&w=640",
    description: "食で運気を整える開運レシピ",
    featured: true,
  },
  "18": {
    emoji: "🔮",
    image: "https://cdn.pixabay.com/photo/2018/09/24/20/09/crystal-ball-3700758_640.jpg",
    description: "占いで運勢を味方につける",
  },
  "19": {
    emoji: "🚀",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=640",
    description: "ビジネスと起業の開運戦略",
  },
  "20": {
    emoji: "🌳",
    image: "https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_640.jpg",
    description: "自然の力で心と運気をリフレッシュ",
  },
  "21": {
    emoji: "🏡",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=640",
    description: "住まい選びと引っ越しの開運術",
  },
  "22": {
    emoji: "🐾",
    image: "https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_640.jpg",
    description: "ペットがもたらす開運パワー",
  },
  "23": {
    emoji: "🎂",
    image: "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=640",
    description: "年代に合わせた開運アドバイス",
  },
  "24": {
    emoji: "🏮",
    image: "https://cdn.pixabay.com/photo/2017/12/12/18/41/lanterns-3015436_640.jpg",
    description: "毎日の暮らしに開運を取り入れる",
  },
  "25": {
    emoji: "🧘",
    image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=640",
    description: "心の健康が開運の基盤",
  },
  "26": {
    emoji: "😴",
    image: "https://cdn.pixabay.com/photo/2018/01/24/19/49/bed-3104355_640.jpg",
    description: "質の良い睡眠で運気を充電",
  },
  "27": {
    emoji: "📚",
    image: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=640",
    description: "学びと資格で運気を開く",
  },
  "28": {
    emoji: "🎁",
    image: "https://cdn.pixabay.com/photo/2017/12/25/17/55/gift-3038830_640.jpg",
    description: "お祝いと贈り物の開運マナー",
  },
  "29": {
    emoji: "🏯",
    image: "https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=640",
    description: "和の伝統に宿る開運の知恵",
  },
  "30": {
    emoji: "📱",
    image: "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_640.jpg",
    description: "デジタル時代の開運活用術",
  },
  "31": {
    emoji: "⚽",
    image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=640",
    description: "運動で運気と活力をアップ",
  },
  "32": {
    emoji: "🎵",
    image: "https://cdn.pixabay.com/photo/2016/11/19/11/39/concert-1838412_640.jpg",
    description: "音楽と芸術で感性と運気を磨く",
  },
  "33": {
    emoji: "💬",
    image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=640",
    description: "コミュニケーションで運を引き寄せる",
  },
  "34": {
    emoji: "⏰",
    image: "https://cdn.pixabay.com/photo/2018/01/08/16/27/hourglass-3070096_640.jpg",
    description: "時間管理で運気の流れを整える",
  },
  "35": {
    emoji: "📈",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=640",
    description: "資産を増やす開運マインド",
  },
  "36": {
    emoji: "🎯",
    image: "https://cdn.pixabay.com/photo/2018/03/22/02/37/background-3249063_640.jpg",
    description: "夢と目標達成を叶える開運法",
  },
  "37": {
    emoji: "🌟",
    image: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=640",
    description: "人生を豊かにする開運哲学",
  },
  "38": {
    emoji: "🌸",
    image: "https://cdn.pixabay.com/photo/2018/04/05/14/09/cherry-blossoms-3292763_640.jpg",
    description: "四季を楽しむ開運の過ごし方",
  },
  "39": {
    emoji: "🎨",
    image: "https://images.pexels.com/photos/1545505/pexels-photo-1545505.jpeg?auto=compress&cs=tinysrgb&w=640",
    description: "色の力で運気をコントロール",
  },
  "40": {
    emoji: "🕯️",
    image: "https://cdn.pixabay.com/photo/2016/11/29/01/10/candle-1866137_640.jpg",
    description: "香りで空間と心を浄化",
  },
  "41": {
    emoji: "📷",
    image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=640",
    description: "写真の力で運気を記録する",
  },
  "42": {
    emoji: "🤚",
    image: "https://cdn.pixabay.com/photo/2016/11/29/05/11/hands-1867423_640.jpg",
    description: "手相・人相から読む開運サイン",
  },
  "43": {
    emoji: "🔢",
    image: "https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg?auto=compress&cs=tinysrgb&w=640",
    description: "数字の持つ開運パワーを活用",
  },
  "44": {
    emoji: "💎",
    image: "https://cdn.pixabay.com/photo/2017/08/03/17/54/amethyst-2577394_640.jpg",
    description: "パワーストーンで運気を引き寄せる",
  },
  "45": {
    emoji: "✏️",
    image: "https://images.pexels.com/photos/159752/pencils-crayons-colourful-rainbow-159752.jpeg?auto=compress&cs=tinysrgb&w=640",
    description: "文房具選びで運気を上げる",
  },
  "46": {
    emoji: "🚗",
    image: "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2178220_640.jpg",
    description: "車と乗り物の開運カスタマイズ",
  },
  "47": {
    emoji: "📜",
    image: "https://images.pexels.com/photos/6913311/pexels-photo-6913311.jpeg?auto=compress&cs=tinysrgb&w=640",
    description: "言い伝えに隠された開運の真実",
  },
  "48": {
    emoji: "⭐",
    image: "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_640.jpg",
    description: "星座と天体が示す運命のメッセージ",
  },
  "49": {
    emoji: "🐉",
    image: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=640",
    description: "干支で読み解く開運の流れ",
  },
  "50": {
    emoji: "💑",
    image: "https://cdn.pixabay.com/photo/2017/09/25/13/14/couple-2785992_640.jpg",
    description: "夫婦・カップルの開運術",
  },
  "51": {
    emoji: "🧑",
    image: "https://images.pexels.com/photos/3771836/pexels-photo-3771836.jpeg?auto=compress&cs=tinysrgb&w=640",
    description: "ソロライフを楽しむ開運スタイル",
  },
  "52": {
    emoji: "📖",
    image: "https://cdn.pixabay.com/photo/2015/11/19/21/14/glasses-1052023_640.jpg",
    description: "開運の知識を総まとめ",
  },
};

export function getCategoryMeta(categoryId: string): CategoryMeta {
  return (
    categoryMeta[categoryId] || {
      emoji: "🔮",
      image: "https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=640",
      description: "開運の知恵をお届け",
    }
  );
}

export default categoryMeta;
