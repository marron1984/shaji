/** 神社の英語名・英語説明のマッピング */
export const shrineEnData: Record<
  string,
  { name: string; description: string; highlights: string[] }
> = {
  "fushimi-inari": {
    name: "Fushimi Inari Taisha",
    description:
      "Famous for its thousands of vermillion torii gates forming tunnels up the sacred Mount Inari. Dedicated to Inari, the god of rice and business prosperity.",
    highlights: [
      "Senbon Torii (Thousands of Gates)",
      "Business prosperity prayers",
      "Open 24 hours",
      "Free admission",
    ],
  },
  kiyomizudera: {
    name: "Kiyomizu-dera",
    description:
      "UNESCO World Heritage temple known for its wooden stage jutting out from the hillside, offering breathtaking views of Kyoto. Founded in 778 AD.",
    highlights: [
      "Wooden stage with panoramic views",
      "Otowa Waterfall for wishes",
      "Cherry blossom & autumn colors",
      "UNESCO World Heritage Site",
    ],
  },
  "meiji-jingu": {
    name: "Meiji Jingu",
    description:
      "Tokyo's most famous Shinto shrine set in a lush forest, dedicated to Emperor Meiji and Empress Shoken. A peaceful oasis in the heart of the city.",
    highlights: [
      "Forested approach in central Tokyo",
      "Traditional wedding ceremonies",
      "New Year's first visit (Hatsumode)",
      "Meiji Jingu Gaien nearby",
    ],
  },
  "ise-jingu": {
    name: "Ise Jingu (Grand Shrine)",
    description:
      "Japan's most sacred Shinto shrine, dedicated to Amaterasu, the sun goddess. Rebuilt every 20 years following ancient traditions for over 2,000 years.",
    highlights: [
      "Most sacred shrine in Japan",
      "Rebuilt every 20 years",
      "Okage Yokocho shopping street",
      "2,000+ year history",
    ],
  },
  itsukushima: {
    name: "Itsukushima Shrine",
    description:
      "Famous for its floating torii gate in the sea, this UNESCO World Heritage shrine on Miyajima island is one of Japan's most iconic views.",
    highlights: [
      "Floating torii gate",
      "UNESCO World Heritage Site",
      "Miyajima island deer",
      "Spectacular at high tide",
    ],
  },
  "izumo-taisha": {
    name: "Izumo Taisha",
    description:
      "One of Japan's oldest and most important shrines, dedicated to Okuninushi, the god of relationships and marriage. Features the unique shimenawa rope.",
    highlights: [
      "God of relationships & marriage",
      "Giant shimenawa rope",
      "One of Japan's oldest shrines",
      "Unique worship clapping style",
    ],
  },
  "senso-ji": {
    name: "Senso-ji",
    description:
      "Tokyo's oldest and most visited temple, famous for the iconic Kaminarimon gate with its giant red lantern and the bustling Nakamise shopping street.",
    highlights: [
      "Kaminarimon Gate & giant lantern",
      "Nakamise shopping street",
      "Tokyo's oldest temple (645 AD)",
      "Illuminated at night",
    ],
  },
  "todai-ji": {
    name: "Todai-ji",
    description:
      "Home to the world's largest bronze Buddha statue (Daibutsu), this UNESCO World Heritage temple in Nara is one of Japan's most impressive landmarks.",
    highlights: [
      "World's largest bronze Buddha",
      "UNESCO World Heritage Site",
      "Nara deer in the park",
      "Massive wooden Great Buddha Hall",
    ],
  },
  "kinkaku-ji": {
    name: "Kinkaku-ji (Golden Pavilion)",
    description:
      "Kyoto's iconic golden pavilion covered in gold leaf, reflecting beautifully in the surrounding pond. A UNESCO World Heritage Site and Zen temple.",
    highlights: [
      "Gold leaf covered pavilion",
      "Mirror-like pond reflection",
      "UNESCO World Heritage Site",
      "Beautiful in every season",
    ],
  },
  "kotohira-gu": {
    name: "Kotohira-gu (Kompira-san)",
    description:
      "Famous for its long stone staircase of 1,368 steps leading to the main shrine. Dedicated to seafaring and travel safety on Shikoku island.",
    highlights: [
      "1,368 stone steps to the top",
      "God of seafaring safety",
      "Panoramic views from summit",
      "Shikoku's most famous shrine",
    ],
  },
  "tsurugaoka-hachimangu": {
    name: "Tsurugaoka Hachimangu",
    description:
      "Kamakura's most important shrine, founded by Minamoto Yoritomo in 1180. Features a long approach from the sea and seasonal festivals.",
    highlights: [
      "Kamakura's main shrine",
      "800+ year history",
      "Yabusame horseback archery",
      "Beautiful approach from beach",
    ],
  },
  "dazaifu-tenmangu": {
    name: "Dazaifu Tenmangu",
    description:
      "Dedicated to the god of learning, Sugawara no Michizane. Students flock here to pray for academic success, especially before exams.",
    highlights: [
      "God of learning & exams",
      "6,000 plum trees",
      "Popular with students",
      "Umegae mochi rice cakes",
    ],
  },
  "zuigan-ji": {
    name: "Zuigan-ji",
    description:
      "One of the Tohoku region's most famous Zen temples, associated with the legendary samurai lord Date Masamune. Features beautiful rock caves.",
    highlights: [
      "Date Masamune's temple",
      "Rock-carved meditation caves",
      "Matsushima Bay views",
      "National treasure buildings",
    ],
  },
  "zenko-ji": {
    name: "Zenko-ji",
    description:
      "One of Japan's most important temples housing the first Buddha statue ever brought to Japan. Open to all Buddhist sects and denominations.",
    highlights: [
      "First Buddha statue in Japan",
      "Non-sectarian temple",
      "Okaidan underground passage",
      "1,400+ year history",
    ],
  },
  "hokkaido-jingu": {
    name: "Hokkaido Jingu",
    description:
      "Hokkaido's premier shrine, set in the beautiful Maruyama Park. A peaceful retreat known for cherry blossoms in spring and autumn foliage.",
    highlights: [
      "Hokkaido's main shrine",
      "Maruyama Park setting",
      "Cherry blossom spot",
      "Wildlife encounters",
    ],
  },
};

export function getShrineEn(slug: string) {
  return shrineEnData[slug] || null;
}
