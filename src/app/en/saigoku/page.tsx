import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Card from "@/components/ui/Card";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Saigoku 33 Kannon Pilgrimage Guide | Japan's Oldest Pilgrimage",
  description:
    "Complete guide to the Saigoku 33 Temples pilgrimage across the Kansai region and Gifu. Discover all 33 sacred Kannon temples, routes, goshuin, costs, and history.",
  keywords: [
    "Saigoku 33 Temples",
    "Saigoku pilgrimage",
    "Kannon temples",
    "Kansai pilgrimage",
    "goshuin",
    "Japanese pilgrimage",
  ],
  alternates: {
    canonical: `${SITE_URL}/en/saigoku`,
    languages: { ja: `${SITE_URL}/saigoku`, en: `${SITE_URL}/en/saigoku` },
  },
  openGraph: {
    title: "Saigoku 33 Kannon Pilgrimage Guide",
    description: "Complete guide to Japan's oldest pilgrimage route — the Saigoku 33 Kannon Temples.",
    url: `${SITE_URL}/en/saigoku`,
    type: "article",
    locale: "en_US",
  },
};

const temples = [
  { num: 1, name: "Seiganto-ji", nameJa: "青岸渡寺", pref: "Wakayama", honzon: "Nyoirin Kannon", note: "Overlooking Nachi Falls. Starting point of the pilgrimage" },
  { num: 2, name: "Kimii-dera", nameJa: "紀三井寺", pref: "Wakayama", honzon: "Juichimen Kannon", note: "Famous cherry blossoms. 231 stone steps" },
  { num: 3, name: "Kokawa-dera", nameJa: "粉河寺", pref: "Wakayama", honzon: "Senju Kannon", note: "One of Saigoku's largest main halls" },
  { num: 4, name: "Sefuku-ji", nameJa: "施福寺", pref: "Osaka", honzon: "Senju Kannon", note: "Atop Mt. Makio. One of the most challenging temples" },
  { num: 5, name: "Fujii-dera", nameJa: "葛井寺", pref: "Osaka", honzon: "Senju Kannon", note: "National treasure with 1,041 actual hands" },
  { num: 6, name: "Tsubosaka-dera", nameJa: "南法華寺（壷阪寺）", pref: "Nara", honzon: "Senju Kannon", note: "Known for healing eye diseases" },
  { num: 7, name: "Oka-dera", nameJa: "岡寺（龍蓋寺）", pref: "Nara", honzon: "Nyoirin Kannon", note: "Japan's largest clay Kannon statue" },
  { num: 8, name: "Hase-dera", nameJa: "長谷寺", pref: "Nara", honzon: "Juichimen Kannon", note: "\"Temple of Flowers\" with 399-step corridor" },
  { num: 9, name: "Kofuku-ji Nan'endo", nameJa: "興福寺 南円堂", pref: "Nara", honzon: "Fukikenjaku Kannon", note: "Fujiwara clan temple. National treasure statue" },
  { num: 10, name: "Mimuroto-ji", nameJa: "三室戸寺", pref: "Kyoto", honzon: "Senju Kannon", note: "\"Hydrangea Temple\" with 10,000 flowers" },
  { num: 11, name: "Daigo-ji Juntei-do", nameJa: "上醍醐 准胝堂", pref: "Kyoto", honzon: "Juntei Kannon", note: "On Mt. Daigo. Rebuilt after 2008 fire" },
  { num: 12, name: "Shohoji (Iwama-dera)", nameJa: "正法寺（岩間寺）", pref: "Shiga", honzon: "Senju Kannon", note: "Setting of Basho's famous \"Old Pond\" haiku" },
  { num: 13, name: "Ishiyama-dera", nameJa: "石山寺", pref: "Shiga", honzon: "Nyoirin Kannon", note: "Where Murasaki Shikibu began writing The Tale of Genji" },
  { num: 14, name: "Mii-dera (Onjo-ji)", nameJa: "三井寺（園城寺）", pref: "Shiga", honzon: "Nyoirin Kannon", note: "Head temple of Tendai Jimon. Benkei's bell legend" },
  { num: 15, name: "Imakumano Kannon-ji", nameJa: "今熊野観音寺", pref: "Kyoto", honzon: "Juichimen Kannon", note: "Protection against headaches. Autumn leaves" },
  { num: 16, name: "Kiyomizu-dera", nameJa: "清水寺", pref: "Kyoto", honzon: "Senju Kannon", note: "UNESCO World Heritage. Famous wooden stage" },
  { num: 17, name: "Rokuharamitsu-ji", nameJa: "六波羅蜜寺", pref: "Kyoto", honzon: "Juichimen Kannon", note: "Kuya Shonin statue with Buddhas emerging from his mouth" },
  { num: 18, name: "Rokkaku-do Choho-ji", nameJa: "六角堂 頂法寺", pref: "Kyoto", honzon: "Nyoirin Kannon", note: "Birthplace of ikebana. The \"navel of Kyoto\"" },
  { num: 19, name: "Kodo Gyogan-ji", nameJa: "革堂 行願寺", pref: "Kyoto", honzon: "Senju Kannon", note: "Legend of the Leather Saint. A local favorite" },
  { num: 20, name: "Yoshimine-dera", nameJa: "善峯寺", pref: "Kyoto", honzon: "Senju Kannon", note: "Dragon Pine (natural monument). Panoramic Kyoto views" },
  { num: 21, name: "Anao-ji", nameJa: "穴太寺", pref: "Kyoto", honzon: "Sho Kannon", note: "Substitute Kannon legend. Touch the reclining Buddha" },
  { num: 22, name: "Soji-ji", nameJa: "総持寺", pref: "Osaka", honzon: "Senju Kannon", note: "Turtle gratitude legend. Knife ceremony offerings" },
  { num: 23, name: "Katsuoji", nameJa: "勝尾寺", pref: "Osaka", honzon: "Senju Kannon", note: "Temple of victory. Daruma dolls throughout the grounds" },
  { num: 24, name: "Nakayama-dera", nameJa: "中山寺", pref: "Hyogo", honzon: "Juichimen Kannon", note: "Famous for safe childbirth prayers. Japan's first Kannon site" },
  { num: 25, name: "Banshu Kiyomizu-dera", nameJa: "播州清水寺", pref: "Hyogo", honzon: "Senju Kannon", note: "At 552m elevation. Famous for autumn leaves and sea of clouds" },
  { num: 26, name: "Ichijo-ji", nameJa: "一乗寺", pref: "Hyogo", honzon: "Sho Kannon", note: "National treasure three-story pagoda" },
  { num: 27, name: "Engyo-ji", nameJa: "圓教寺", pref: "Hyogo", honzon: "Nyoirin Kannon", note: "Mt. Shosha. Filming location of \"The Last Samurai\"" },
  { num: 28, name: "Nariai-ji", nameJa: "成相寺", pref: "Kyoto", honzon: "Sho Kannon", note: "Overlooking Amanohashidate. Substitute Kannon" },
  { num: 29, name: "Matsunoo-dera", nameJa: "松尾寺", pref: "Kyoto", honzon: "Bato Kannon", note: "Only temple with Horse-headed Kannon as principal image" },
  { num: 30, name: "Hogonji", nameJa: "宝厳寺", pref: "Shiga", honzon: "Senju Kannon", note: "Chikubu Island in Lake Biwa. Sacred island" },
  { num: 31, name: "Chomei-ji", nameJa: "長命寺", pref: "Shiga", honzon: "Senju Kannon", note: "808 stone steps. Temple of longevity" },
  { num: 32, name: "Kannonshoji", nameJa: "観音正寺", pref: "Shiga", honzon: "Senju Kannon", note: "On Mt. Kinugasa. Founded by Prince Shotoku" },
  { num: 33, name: "Kegonji", nameJa: "華厳寺", pref: "Gifu", honzon: "Juichimen Kannon", note: "Final temple. Affectionately called \"Tanigumi-san\"" },
];

const prefGroups = [
  { pref: "Wakayama", prefJa: "和歌山県", nums: [1, 2, 3], color: "var(--color-shrine)" },
  { pref: "Osaka", prefJa: "大阪府", nums: [4, 5, 22, 23], color: "var(--color-temple)" },
  { pref: "Nara", prefJa: "奈良県", nums: [6, 7, 8, 9], color: "var(--color-gold)" },
  { pref: "Kyoto", prefJa: "京都府", nums: [10, 11, 15, 16, 17, 18, 19, 20, 21, 28, 29], color: "var(--color-shrine)" },
  { pref: "Shiga", prefJa: "滋賀県", nums: [12, 13, 14, 30, 31, 32], color: "var(--color-temple)" },
  { pref: "Hyogo", prefJa: "兵庫県", nums: [24, 25, 26, 27], color: "var(--color-gold)" },
  { pref: "Gifu", prefJa: "岐阜県", nums: [33], color: "var(--color-shrine)" },
];

export default function SaigokuEnPage() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: "Saigoku 33 Kannon Pilgrimage",
          description: "Japan's oldest pilgrimage route spanning 33 sacred Kannon temples across the Kansai region and Gifu.",
          touristType: "Pilgrimage",
          inLanguage: "en",
          itinerary: {
            "@type": "ItemList",
            numberOfItems: 33,
            itemListElement: temples.map((t) => ({
              "@type": "ListItem",
              position: t.num,
              name: `#${t.num} ${t.name} (${t.nameJa})`,
            })),
          },
        }}
      />

      {/* Hero */}
      <section className="relative h-[380px] sm:h-[440px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1400&q=80"
          alt="Saigoku Kannon Pilgrimage"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[var(--color-background)]" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <p className="mb-3 text-xs font-semibold tracking-[0.4em] uppercase text-[var(--color-gold)]">
            Saigoku Pilgrimage
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Saigoku 33 Temples
            <br />
            <span className="text-gradient">Pilgrimage Guide</span>
          </h1>
          <p className="mt-4 max-w-lg text-base text-white/60">
            Japan&apos;s oldest pilgrimage route &mdash; a 1,000km journey through 33 sacred Kannon temples
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb
          items={[
            { label: "Home", href: "/en" },
            { label: "Saigoku 33 Temples" },
          ]}
        />

        {/* Language Switch */}
        <div className="mt-4 text-right">
          <Link href="/saigoku" className="text-sm text-gray-500 hover:text-[var(--color-gold)] transition-colors">
            🇯🇵 日本語
          </Link>
        </div>

        {/* Table of Contents */}
        <Card className="mt-8">
          <div className="p-6">
            <h2 className="text-lg font-bold text-[var(--color-foreground)] mb-4">📋 Contents</h2>
            <nav className="space-y-2">
              {[
                { href: "#about", label: "🙏 About the Saigoku Pilgrimage" },
                { href: "#all33", label: "⛩️ All 33 Temples" },
                { href: "#pref", label: "🗺️ Guide by Prefecture" },
                { href: "#method", label: "🚶 How to Travel & Duration" },
                { href: "#goshuin", label: "📕 Goshuin (Temple Stamps)" },
                { href: "#cost", label: "💰 Cost Guide" },
                { href: "#history", label: "📜 History & Origins" },
              ].map((item) => (
                <a key={item.href} href={item.href} className="block text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors pl-2">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </Card>

        {/* About */}
        <section id="about" className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🙏</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">About the Saigoku Pilgrimage</h2>
          </div>
          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
            <p>
              The Saigoku 33 Temples (Saigoku Sanjusan-sho) is Japan&apos;s oldest pilgrimage route, spanning 33 sacred Kannon temples across the Kansai region (2 prefectures, 4 provinces) and Gifu Prefecture. With a history of over 1,300 years, it stands alongside the Shikoku 88 Temples as one of Japan&apos;s most important pilgrimages.
            </p>
            <p>
              According to tradition, in 718 CE, Tokudo Shonin, founder of Hase-dera temple, had a near-death experience in which King Enma (the Buddhist judge of the dead) told him to spread the pilgrimage of 33 Kannon sacred sites to the people, granting him 33 sacred seals. The route was later revived by Emperor Kazan, establishing the pilgrimage as we know it today.
            </p>
            <p>
              The number &ldquo;33&rdquo; derives from Kannon Bodhisattva&apos;s ability to manifest in 33 different forms to save sentient beings. Completing all 33 temples is believed to absolve one&apos;s sins and ensure passage to the Pure Land.
            </p>
          </div>
        </section>

        {/* All 33 Temples */}
        <section id="all33" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">⛩️</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">All 33 Temples</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="px-3 py-3 text-left text-[var(--color-muted)] font-medium w-12">No.</th>
                  <th className="px-3 py-3 text-left text-[var(--color-muted)] font-medium">Temple Name</th>
                  <th className="px-3 py-3 text-left text-[var(--color-muted)] font-medium hidden sm:table-cell">Prefecture</th>
                  <th className="px-3 py-3 text-left text-[var(--color-muted)] font-medium hidden md:table-cell">Principal Image</th>
                  <th className="px-3 py-3 text-left text-[var(--color-muted)] font-medium hidden lg:table-cell">Highlights</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {temples.map((t) => (
                  <tr key={t.num} className="hover:bg-white/5 transition-colors">
                    <td className="px-3 py-2.5 font-bold text-[var(--color-gold)]">{t.num}</td>
                    <td className="px-3 py-2.5 font-medium">
                      <Link href={`/en/saigoku/${t.num}`} className="text-[var(--color-foreground)] hover:text-[var(--color-gold)] transition-colors">
                        {t.name}
                        <span className="ml-1 text-xs text-[var(--color-muted)]">({t.nameJa})</span>
                      </Link>
                    </td>
                    <td className="px-3 py-2.5 text-[var(--color-muted)] hidden sm:table-cell">{t.pref}</td>
                    <td className="px-3 py-2.5 text-[var(--color-muted)] hidden md:table-cell">{t.honzon}</td>
                    <td className="px-3 py-2.5 text-[var(--color-muted)] hidden lg:table-cell">{t.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Guide by Prefecture */}
        <section id="pref" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🗺️</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">Guide by Prefecture</h2>
          </div>
          <div className="space-y-6">
            {prefGroups.map((g) => (
              <Card key={g.pref}>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-3 h-3 rounded-full" style={{ background: g.color }} />
                    <h3 className="text-lg font-bold text-[var(--color-foreground)]">{g.pref}</h3>
                    <span className="text-xs text-[var(--color-muted)]">({g.prefJa})</span>
                    <span className="text-sm text-[var(--color-muted)]">{g.nums.length} temples</span>
                  </div>
                  <div className="space-y-3">
                    {g.nums.map((num) => {
                      const t = temples.find((x) => x.num === num)!;
                      return (
                        <div key={num} className="flex items-start gap-3">
                          <span className="shrink-0 w-8 h-6 rounded text-center text-xs font-bold leading-6 text-white" style={{ background: g.color }}>
                            {num}
                          </span>
                          <div>
                            <Link href={`/en/saigoku/${num}`} className="font-medium text-[var(--color-foreground)] hover:text-[var(--color-gold)] transition-colors">
                              {t.name} ({t.nameJa})
                            </Link>
                            <span className="ml-2 text-sm text-[var(--color-muted)]">{t.note}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* How to Travel */}
        <section id="method" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🚶</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">How to Travel &amp; Duration</h2>
          </div>
          <div className="space-y-5">
            {[
              {
                icon: "🚗", name: "By Car",
                days: "4-7 days", cost: "¥80,000-150,000",
                desc: "Most efficient option. Some temples have small parking lots or are on mountaintops, so plan your route in advance. Aim for 5-6 temples per day.",
              },
              {
                icon: "🚌", name: "Bus Tour",
                days: "5-8 days (can be split)", cost: "¥100,000-180,000",
                desc: "Guided tours are great for beginners. Guides explain the history and highlights of each temple. Tours split into 2-3 trips are popular.",
              },
              {
                icon: "🚶", name: "Walking",
                days: "30-40 days", cost: "¥250,000-400,000",
                desc: "Walk approximately 1,000km. More urban areas than the Shikoku pilgrimage, but mountain temples require good fitness.",
              },
              {
                icon: "🚃", name: "Train & Bus",
                days: "7-14 days", cost: "¥100,000-200,000",
                desc: "Travel by public transport. Urban temples are easily accessible, but rural mountain temples have limited service — plan carefully.",
              },
            ].map((m) => (
              <Card key={m.name}>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{m.icon}</span>
                    <div>
                      <h3 className="font-bold text-[var(--color-foreground)]">{m.name}</h3>
                      <p className="text-xs text-[var(--color-muted)]">Duration: {m.days} | Cost: {m.cost}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">{m.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Goshuin */}
        <section id="goshuin" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">📕</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">Goshuin (Temple Stamps)</h2>
          </div>
          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
            <p>
              At each of the Saigoku 33 temples, you can receive a goshuin (sacred stamp and calligraphy) in your nokyocho (stamp book). Dedicated Saigoku stamp books are available at temples and online. In 2020, special commemorative stamps were offered for the 1,300th anniversary.
            </p>
            <div className="rounded-xl bg-[var(--color-gold-light)] border border-[var(--color-gold)]/20 px-5 py-4">
              <p className="text-sm text-[var(--color-gold)]">
                <span className="font-bold">💡 Tip: </span>
                Each goshuin costs ¥300. The total for all 33 temples is ¥9,900 (¥10,800 including 3 extra temples). Always worship first, then visit the stamp office.
              </p>
            </div>
          </div>
        </section>

        {/* Cost Guide */}
        <section id="cost" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">💰</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">Cost Guide</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="px-4 py-3 text-left text-[var(--color-muted)] font-medium">Item</th>
                  <th className="px-4 py-3 text-right text-[var(--color-muted)] font-medium">Car</th>
                  <th className="px-4 py-3 text-right text-[var(--color-muted)] font-medium">Bus Tour</th>
                  <th className="px-4 py-3 text-right text-[var(--color-muted)] font-medium">Train</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {[
                  ["Accommodation", "¥30,000-60,000", "Included", "¥50,000-100,000"],
                  ["Transportation", "¥30,000-50,000", "¥100,000-180,000", "¥30,000-70,000"],
                  ["Admission Fees", "~¥5,000", "~¥5,000", "~¥5,000"],
                  ["Goshuin Fees", "~¥10,000", "~¥10,000", "~¥10,000"],
                  ["Meals", "¥20,000-40,000", "Included", "¥30,000-50,000"],
                  ["Total Estimate", "¥80,000-150,000", "¥100,000-180,000", "¥100,000-200,000"],
                ].map(([item, car, bus, train]) => (
                  <tr key={item} className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 font-medium text-[var(--color-foreground)]">{item}</td>
                    <td className="px-4 py-3 text-right text-[var(--color-muted)]">{car}</td>
                    <td className="px-4 py-3 text-right text-[var(--color-muted)]">{bus}</td>
                    <td className="px-4 py-3 text-right text-[var(--color-muted)]">{train}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* History */}
        <section id="history" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">📜</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">History &amp; Origins</h2>
          </div>
          <div className="space-y-5">
            {[
              {
                era: "718 CE (Yoro 2)",
                title: "Founded by Tokudo Shonin",
                desc: "Tokudo Shonin, founder of Hase-dera, experienced a near-death vision in which King Enma told him to spread the pilgrimage of 33 Kannon sacred sites. He received sacred seals but the people were not yet ready, so he buried the seals at Nakayama-dera.",
              },
              {
                era: "Late 10th Century",
                title: "Revival by Emperor Kazan",
                desc: "While practicing austerities at Mt. Nachi, Emperor Kazan discovered the sacred seals buried at Nakayama-dera and revived the 33-temple pilgrimage. He is revered as the \"restorer\" of the Saigoku pilgrimage.",
              },
              {
                era: "Muromachi to Edo Period",
                title: "Spread Among Common People",
                desc: "During the Muromachi period, the pilgrimage became popular among commoners. By the Edo period, it was one of the great pilgrimages alongside Ise and Shikoku, with post towns developing around each temple.",
              },
              {
                era: "2018 (Heisei 30)",
                title: "1,300th Anniversary",
                desc: "Special viewings and commemorative goshuin were offered at each temple to celebrate 1,300 years since the pilgrimage's founding. Today, hundreds of thousands visit annually, keeping this pilgrimage tradition alive.",
              },
            ].map((item) => (
              <Card key={item.era}>
                <div className="p-5">
                  <p className="text-xs font-semibold text-[var(--color-gold)]">{item.era}</p>
                  <h3 className="mt-1 font-bold text-[var(--color-foreground)]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-[var(--color-muted)] mb-4">
            Explore more pilgrimage guides
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/en/ohenro" className="group relative rounded-full px-8 py-3.5 text-sm font-bold overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-shrine)] to-[var(--color-gold)] opacity-90 group-hover:opacity-100 transition-opacity" />
              <span className="relative text-white">Shikoku 88 Temples Guide</span>
            </Link>
            <Link href="/en/sanpai-manner" className="rounded-full border border-[var(--color-border)] px-8 py-3.5 text-sm font-bold text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:border-[var(--color-gold)]/40 transition-all">
              Worship Etiquette Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
