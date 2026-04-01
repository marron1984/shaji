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
  naritasan: {
    name: "Naritasan Shinshoji Temple",
    description:
      "A major temple of the Shingon sect dedicated to Fudo Myoo (the Immovable Wisdom King), and one of Japan's most visited temples during New Year. Approximately 10 million worshippers visit annually, drawn by its powerful prayers and the charming Naritasan Park.",
    highlights: [
      "Great Main Hall (Daihondo)",
      "Three-storied pagoda (Important Cultural Property)",
      "Naritasan Park with gardens",
      "One of Japan's top New Year pilgrimage sites",
    ],
  },
  "nikko-toshogu": {
    name: "Nikko Toshogu",
    description:
      "A UNESCO World Heritage shrine dedicated to Tokugawa Ieyasu, renowned for its lavishly decorated buildings with over 500 colorful carvings. The ornate Yomeimon Gate and the famous trio of wise monkeys make it one of Japan's most visually stunning sacred sites.",
    highlights: [
      "Yomeimon Gate (National Treasure)",
      "Three wise monkeys carving",
      "Sleeping cat (Nemuri-neko) carving",
      "UNESCO World Heritage Site",
    ],
  },
  "oiwa-jinja": {
    name: "Oiwa Jinja",
    description:
      "A sacred site nestled on the slopes of Mount Oiwa in Toyama Prefecture, venerating Fudo Myoo in a tradition blending Shinto and Buddhism. The massive sacred boulder at its heart has drawn worshippers seeking healing and protection from illness for centuries.",
    highlights: [
      "Fudo Myoo (Immovable Wisdom King)",
      "Sacred boulder as the shrine's deity",
      "Natural forest of Mount Oiwa",
      "Prayers for healing and protection",
    ],
  },
  "osorezan-bodaiji": {
    name: "Osorezan Bodaiji",
    description:
      "A Soto Zen temple situated on Mount Osore, one of Japan's three most sacred places. Its desolate volcanic landscape of sulfurous steam and barren rock evokes images of the afterlife, and it is widely known for its itako spirit mediums.",
    highlights: [
      "Lake Usori and Paradise Beach",
      "Sulfurous volcanic landscape",
      "Jizo Hall (Jizoden)",
      "One of Japan's three great sacred sites",
    ],
  },
  "osu-kannon": {
    name: "Osu Kannon",
    description:
      "Formally known as Kitanosan Shinpukuji Hoshoin, this is counted among Japan's three great Kannon temples. Located in the heart of Nagoya's downtown, it thrives alongside the lively Osu Shopping Street as a beloved center of local culture.",
    highlights: [
      "Main hall with Kannon statue",
      "Osu Library (houses National Treasure Kojiki manuscript)",
      "Bustling Osu Shopping Street",
      "Free admission",
    ],
  },
  "oyama-afuri": {
    name: "Oyama Afuri Jinja",
    description:
      "A mountain shrine with over 2,200 years of history, revered as the guardian of the entire Kanto region. During the Edo period, pilgrimages to Mount Oyama became hugely popular among commoners, and the tradition is now recognized as a Japan Heritage site.",
    highlights: [
      "Panoramic views of Sagami Bay from the lower shrine",
      "Oyama Cable Car ride",
      "Futae-no-taki waterfall",
      "Japan Heritage mountain pilgrimage tradition",
    ],
  },
  ryoanji: {
    name: "Ryoan-ji",
    description:
      "A UNESCO World Heritage Zen temple world-famous for its karesansui rock garden, considered the masterpiece of Japanese garden design. Fifteen stones are arranged on white gravel in a composition that embodies the essence of Zen meditation and simplicity.",
    highlights: [
      "Karesansui rock garden (dry landscape)",
      "Kyoyochi mirror pond",
      "Tsukubai water basin inscribed 'I learn only to be contented'",
      "UNESCO World Heritage Site",
    ],
  },
  "shimogamo-jinja": {
    name: "Shimogamo Jinja",
    description:
      "Formally known as Kamomioya Jinja, this UNESCO World Heritage shrine is surrounded by the primeval Tadasu no Mori forest. It hosts beloved seasonal events including the Aoi Matsuri, one of Kyoto's three great festivals.",
    highlights: [
      "Tadasu no Mori primeval forest",
      "Romon Gate (Important Cultural Property)",
      "Kawai Shrine (prayers for beauty)",
      "UNESCO World Heritage Site",
    ],
  },
  "sumiyoshi-taisha": {
    name: "Sumiyoshi Taisha",
    description:
      "The head shrine of approximately 2,300 Sumiyoshi shrines across Japan and the oldest shrine in Osaka. Its main halls are designated National Treasures for their unique Sumiyoshi-zukuri architectural style, and the arched Sorihashi bridge is an iconic Osaka landmark.",
    highlights: [
      "Sorihashi (arched drum bridge)",
      "National Treasure main halls",
      "Gosho Gozen sacred stones",
      "Hatsutatsu festival charms",
    ],
  },
  "suwa-taisha": {
    name: "Suwa Taisha",
    description:
      "The head shrine of approximately 25,000 Suwa shrines nationwide, comprising four sanctuaries across Upper and Lower Shrines. The Onbashira Festival, held once every seven years, is counted among Japan's three most extraordinary festivals.",
    highlights: [
      "Onbashira sacred pillars",
      "Four-shrine pilgrimage",
      "Onbashira Festival (every 7 years)",
      "Shinano Province premier shrine",
    ],
  },
  "taga-taisha": {
    name: "Taga Taisha",
    description:
      "Affectionately known as 'Otaga-san,' this shrine is dedicated to Izanagi and Izanami and revered for longevity and matchmaking. An old saying goes, 'If you visit Ise, visit Taga too,' reflecting its deep-rooted faith.",
    highlights: [
      "Taikobashi (drum bridge)",
      "Jumyoseki longevity stone",
      "Okushoin garden",
      "Longevity and matchmaking prayers",
    ],
  },
  tofukuji: {
    name: "Tofuku-ji",
    description:
      "A head temple of the Rinzai Tofuku-ji school and one of Kyoto's Five Great Zen Temples. In autumn, around 2,000 maple trees fill the valley below the Tsutenkyo bridge with breathtaking crimson foliage.",
    highlights: [
      "Tsutenkyo bridge autumn foliage",
      "Hojo garden by Shigemori Mirei",
      "Sanmon gate (National Treasure)",
      "One of Kyoto's Five Great Temples",
    ],
  },
  "udo-jingu": {
    name: "Udo Jingu",
    description:
      "A rare shrine whose main hall sits inside a cave on a cliff facing the Pacific Ocean. Known for blessings of matchmaking and safe childbirth, visitors enjoy tossing lucky 'undama' stones into the hollow of a turtle-shaped rock.",
    highlights: [
      "Main hall inside a sea cave",
      "Undama lucky stone toss",
      "Dramatic coastal rock formations",
      "Safe childbirth prayers",
    ],
  },
  "usa-jingu": {
    name: "Usa Jingu",
    description:
      "The head shrine of approximately 44,000 Hachiman shrines throughout Japan, enshrining the great deity Hachiman. Its main hall, built in the distinctive Hachiman-zukuri style, is designated a National Treasure.",
    highlights: [
      "National Treasure main hall",
      "Kurehashi vermillion bridge",
      "Upper and Lower Shrine pilgrimage",
      "Head of all Hachiman shrines",
    ],
  },
  yamadera: {
    name: "Yamadera (Risshaku-ji)",
    description:
      "A Tendai temple immortalized by Matsuo Basho's famous haiku about the sound of cicadas seeping into the rocks. After climbing 1,015 stone steps, the Godaido hall rewards visitors with sweeping views of the Yamagata countryside.",
    highlights: [
      "Godaido hall panoramic views",
      "1,015 stone steps to the summit",
      "Basho's haiku monument",
      "Mountain temple atmosphere",
    ],
  },
  "yasukuni-jinja": {
    name: "Yasukuni Jinja",
    description:
      "Founded in 1869, this shrine in Tokyo's Kudanshita district honors those who gave their lives for Japan. The grounds are home to roughly 500 cherry trees, including the reference tree used to announce Tokyo's official cherry blossom bloom.",
    highlights: [
      "Grand steel torii gate",
      "Yushukan museum",
      "Cherry blossom reference tree",
      "Scenic springtime grounds",
    ],
  },
  "kifune-jinja": {
    name: "Kifune Shrine",
    description:
      "Head shrine of roughly 500 Kifune shrines across Japan, dedicated to the deity of water. Also celebrated as a god of matchmaking, Kifune Shrine is beloved for its water fortune-telling slips that reveal their messages when floated on the sacred stream.",
    highlights: [
      "Vermillion lantern-lined stone steps",
      "Water fortune-telling (Mizu-ura Mikuji)",
      "Boat-shaped stone at the inner shrine",
      "Scenic Kibune valley setting",
    ],
  },
  "kirishima-jingu": {
    name: "Kirishima Jingu",
    description:
      "An ancient shrine at the foot of the Kirishima mountain range, revered as the site where the gods descended from heaven. Its vermillion halls have earned it the nickname 'Nikko of the West,' and the main hall is designated a National Treasure.",
    highlights: [
      "National Treasure main hall",
      "Vermillion shrine buildings",
      "Sacred cedar tree",
      "Tenson Korin (divine descent) legends",
    ],
  },
  kongobuji: {
    name: "Kongobu-ji",
    description:
      "The head temple of Koyasan Shingon Buddhism, founded by Kobo Daishi Kukai in 816 AD. Sitting atop Mount Koya, it anchors a sacred mountain-top temple town of 117 monasteries, all inscribed as a UNESCO World Heritage Site.",
    highlights: [
      "Banryutei rock garden (Japan's largest)",
      "Danjo Garan sacred precinct",
      "Konpon Daito Great Pagoda",
      "UNESCO World Heritage Site",
    ],
  },
  "koyasan-okunoin": {
    name: "Koyasan Okunoin",
    description:
      "The most sacred site on Mount Koya, where Kobo Daishi Kukai is believed to rest in eternal meditation. A two-kilometer forest path lined with over 200,000 memorial stones and towering cedars leads to the mausoleum in an atmosphere of profound tranquility.",
    highlights: [
      "Kobo Daishi mausoleum",
      "Cedar-lined path with 200,000+ graves",
      "Torodo Hall of Lanterns",
      "Mystical nighttime pilgrimage",
    ],
  },
  "kumano-nachi-taisha": {
    name: "Kumano Nachi Taisha",
    description:
      "One of the three great Kumano shrines, enshrining the sacred Nachi Falls as its deity. Part of the UNESCO-listed 'Sacred Sites and Pilgrimage Routes in the Kii Mountain Range,' it has drawn pilgrims along the Kumano Kodo trails for over a thousand years.",
    highlights: [
      "Nachi Falls (Japan's tallest single-drop waterfall)",
      "Vermillion hall with three-story pagoda",
      "Kumano Kodo pilgrimage trail & Daimon-zaka",
      "Yatagarasu (three-legged crow) symbol",
    ],
  },
  miyajidake: {
    name: "Miyajidake Shrine",
    description:
      "A Fukuoka shrine famed for the 'Path of Light,' a phenomenon occurring twice a year when the setting sun aligns perfectly with the approach road to the sea. It also boasts Japan's largest shimenawa rope, taiko drum, and bell.",
    highlights: [
      "Path of Light sunset alignment",
      "Japan's largest shimenawa rope",
      "Okunomiya eight-shrine pilgrimage",
      "Panoramic view toward the sea",
    ],
  },
  motsuji: {
    name: "Motsu-ji",
    description:
      "A UNESCO World Heritage temple in Hiraizumi preserving a rare Heian-period Pure Land garden. Centered on the Oizumi-ga-Ike pond, the garden is one of the finest surviving examples of classical Japanese landscape design from the 12th century.",
    highlights: [
      "Oizumi-ga-Ike Pure Land garden",
      "Gokusui-no-En poetry festival",
      "Jogyodo hall",
      "UNESCO World Heritage Site",
    ],
  },
  "atsuta-jingu": {
    name: "Atsuta Jingu",
    description:
      "One of Japan's most revered Shinto shrines, home to the legendary Kusanagi no Tsurugi sword — one of the three Imperial Regalia. Set within a tranquil forested precinct in the heart of Nagoya, it draws over six million visitors each year.",
    highlights: [
      "Houses one of three Imperial Regalia",
      "2,000+ year history",
      "Serene forest in central Nagoya",
      "Popular Hatsumode destination",
    ],
  },
  byodoin: {
    name: "Byodo-in",
    description:
      "A stunning UNESCO World Heritage temple in Uji, best known for its Phoenix Hall depicted on the Japanese 10-yen coin. Originally an aristocrat's villa, it was converted into a temple in 1052 to represent the Buddhist Pure Land paradise on earth.",
    highlights: [
      "Phoenix Hall on the 10-yen coin",
      "UNESCO World Heritage Site",
      "Beautiful pond garden reflection",
      "National treasure Amida Buddha statue",
    ],
  },
  "chikurin-ji": {
    name: "Chikurin-ji",
    description:
      "A historic temple perched atop Mount Godai in Kochi, known for its five-story pagoda and lush botanical garden setting. As the 31st temple on the Shikoku 88-temple pilgrimage, it has welcomed pilgrims and visitors for over 1,200 years.",
    highlights: [
      "Five-story pagoda",
      "Shikoku 88-temple pilgrimage stop",
      "Makino Botanical Garden nearby",
      "Panoramic views from Mount Godai",
    ],
  },
  eiheiji: {
    name: "Eihei-ji",
    description:
      "One of two head temples of Soto Zen Buddhism, founded by Dogen in 1244 deep in the mountains of Fukui Prefecture. Visitors can experience the rigorous daily life of Zen monks and walk through its serene cedar-lined grounds connecting over 70 temple buildings.",
    highlights: [
      "Active Soto Zen training monastery",
      "70+ connected temple buildings",
      "Towering cedar forest setting",
      "Zen meditation experiences available",
    ],
  },
  enryakuji: {
    name: "Enryaku-ji",
    description:
      "The grand headquarters of Tendai Buddhism, sprawling across the entirety of sacred Mount Hiei between Kyoto and Shiga. Founded by the monk Saicho in 788, this UNESCO World Heritage Site is revered as the mother mountain of Japanese Buddhism, having nurtured founders of nearly every major Japanese Buddhist sect.",
    highlights: [
      "Konpon Chudo hall (National Treasure)",
      "Eternal flame burning for 1,200+ years",
      "UNESCO World Heritage Site",
      "Birthplace of many Buddhist sects",
    ],
  },
  horyuji: {
    name: "Horyu-ji",
    description:
      "Home to the world's oldest surviving wooden structures, this temple was founded by Prince Shotoku and became Japan's very first UNESCO World Heritage Site. Its treasure trove of Asuka-period Buddhist art and architecture offers a window into Japan's earliest centuries of Buddhist civilization.",
    highlights: [
      "World's oldest wooden buildings",
      "Five-story pagoda (National Treasure)",
      "Japan's first UNESCO World Heritage Site",
      "Yumedono (Hall of Dreams)",
    ],
  },
  "kasuga-taisha": {
    name: "Kasuga Taisha",
    description:
      "A UNESCO World Heritage shrine draped in vermillion, famous for its enchanting collection of roughly 3,000 stone and bronze lanterns. Founded over 1,300 years ago as the tutelary shrine of the Fujiwara clan, it sits at the edge of Nara's primeval Kasugayama forest.",
    highlights: [
      "Vermillion-lacquered main shrine (National Treasure)",
      "Approximately 3,000 stone & bronze lanterns",
      "Magical Mantoro lantern festivals",
      "UNESCO World Heritage Site",
    ],
  },
};

export function getShrineEn(slug: string) {
  return shrineEnData[slug] || null;
}
