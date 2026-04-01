import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Card from "@/components/ui/Card";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Shikoku 88 Temple Pilgrimage Guide | Routes, Costs & Essentials",
  description:
    "Complete guide to the Shikoku 88 Temple Pilgrimage (Ohenro). Compare walking, driving, and bus tour options. Learn about etiquette, costs, what to bring, and recommended routes for this 1,200km spiritual journey.",
  keywords: [
    "Ohenro",
    "Shikoku pilgrimage",
    "88 temples",
    "Shikoku 88",
    "Kobo Daishi",
    "Kukai",
    "walking pilgrimage",
    "henro",
  ],
  alternates: {
    canonical: `${SITE_URL}/en/ohenro`,
    languages: { ja: `${SITE_URL}/ohenro`, en: `${SITE_URL}/en/ohenro` },
  },
  openGraph: {
    title: "Shikoku 88 Temple Pilgrimage Guide",
    description:
      "Complete guide to the Shikoku 88 Temple Pilgrimage. Routes, costs, and essentials explained.",
    url: `${SITE_URL}/en/ohenro`,
    type: "article",
  },
};

/* ===== Data Definitions ===== */

const dojos = [
  {
    name: "Dojo of Awakening",
    nameJa: "発心の道場",
    pref: "Tokushima",
    range: "Temples #1 - #23",
    color: "var(--color-shrine)",
    meaning: "Setting the intention for pilgrimage",
    temples: [
      { num: 1, name: "Ryozen-ji (霊山寺)", note: "Starting point of the pilgrimage. Pilgrimage supplies available here" },
      { num: 6, name: "Anraku-ji (安楽寺)", note: "Popular temple lodging (shukubo). Hot spring on the grounds" },
      { num: 11, name: "Fujii-dera (藤井寺)", note: "Famous wisteria trellises. Start of the grueling trail to Shosan-ji" },
      { num: 12, name: "Shosan-ji (焼山寺)", note: "At 700m elevation. The most challenging stretch, known as 'henro korogashi'" },
      { num: 17, name: "Ido-ji (井戸寺)", note: "Well said to have been dug by Kukai. Legend of the 'reflection well'" },
      { num: 23, name: "Yakuo-ji (薬王寺)", note: "Famous for warding off bad luck. Final temple of the Awakening dojo" },
    ],
  },
  {
    name: "Dojo of Training",
    nameJa: "修行の道場",
    pref: "Kochi",
    range: "Temples #24 - #39",
    color: "var(--color-temple)",
    meaning: "Training and strengthening body and mind",
    temples: [
      { num: 24, name: "Hotsumisakiji (最御崎寺)", note: "At the tip of Cape Muroto. Where Kukai attained enlightenment" },
      { num: 28, name: "Dainichi-ji (大日寺)", note: "Famous for the claw-carved Yakushi Buddha in the inner sanctuary" },
      { num: 31, name: "Chikurin-ji (竹林寺)", note: "Celebrated in the Yosakoi folk song. Renowned temple of Tosa" },
      { num: 36, name: "Shoryu-ji (青龍寺)", note: "Origin of yokozuna Asashoryu's ring name" },
      { num: 37, name: "Iwamoto-ji (岩本寺)", note: "Stunning ceiling with 575 painted panels" },
      { num: 38, name: "Kongofuku-ji (金剛福寺)", note: "At Cape Ashizuri. One of the most remote temples" },
    ],
  },
  {
    name: "Dojo of Enlightenment",
    nameJa: "菩提の道場",
    pref: "Ehime",
    range: "Temples #40 - #65",
    color: "var(--color-gold)",
    meaning: "Approaching spiritual enlightenment",
    temples: [
      { num: 44, name: "Daiho-ji (大寶寺)", note: "Center of Shikoku. Beginning of the Enlightenment dojo" },
      { num: 45, name: "Iwaya-ji (岩屋寺)", note: "Mountain temple built into sheer cliff faces" },
      { num: 51, name: "Ishite-ji (石手寺)", note: "Near Dogo Onsen. Legend of Emon Saburo, the first pilgrim" },
      { num: 52, name: "Taizan-ji (太山寺)", note: "Main hall is a National Treasure. Kamakura-era architecture" },
      { num: 58, name: "Senyu-ji (仙遊寺)", note: "Temple lodging with spectacular views of the Seto Inland Sea" },
      { num: 65, name: "Sankaku-ji (三角寺)", note: "Final temple of the Enlightenment dojo. Triangular fire altar" },
    ],
  },
  {
    name: "Dojo of Nirvana",
    nameJa: "涅槃の道場",
    pref: "Kagawa",
    range: "Temples #66 - #88",
    color: "var(--color-shrine)",
    meaning: "Completing the path to enlightenment",
    temples: [
      { num: 66, name: "Unpen-ji (雲辺寺)", note: "Highest temple on the pilgrimage at 927m elevation" },
      { num: 75, name: "Zentsu-ji (善通寺)", note: "Birthplace of Kukai. One of the five great mountains" },
      { num: 82, name: "Nego-ji (根香寺)", note: "Mountain temple with the legend of the ushi-oni (ox demon)" },
      { num: 84, name: "Yashima-ji (屋島寺)", note: "Site of the Genpei War battles. Atop Mount Yashima" },
      { num: 85, name: "Yakuri-ji (八栗寺)", note: "On the slopes of Mt. Goken. Accessed by cable car" },
      { num: 88, name: "Okuboji (大窪寺)", note: "The final temple. The goal of the Ohenro pilgrimage" },
    ],
  },
];

const methods = [
  {
    name: "Walking Pilgrimage",
    icon: "🚶",
    days: "30-60 days",
    cost: "300,000-500,000 yen",
    pros: ["Considered the most spiritually rewarding", "Go at your own pace", "Immerse yourself in Shikoku's nature", "Unparalleled sense of achievement"],
    cons: ["Requires stamina and time", "Weather-dependent", "Need to arrange accommodation", "Foot injuries are common"],
  },
  {
    name: "Driving Pilgrimage",
    icon: "🚗",
    days: "8-12 days",
    cost: "150,000-250,000 yen",
    pros: ["Efficient route planning", "Leave luggage in the car", "Less affected by weather", "Great for families and groups"],
    cons: ["Some temples have limited parking", "Driver fatigue", "Easy to get lost without GPS", "Less sense of achievement than walking"],
  },
  {
    name: "Bus Tour",
    icon: "🚌",
    days: "4-8 days (can be split)",
    cost: "100,000-200,000 yen",
    pros: ["Guided tours for peace of mind", "No need to arrange accommodation", "Make friends along the way", "Ideal for beginners"],
    cons: ["Fixed schedule", "Limited time at each temple", "Less freedom", "Can feel rushed during busy periods"],
  },
];

const items = [
  { name: "Hakue (白衣) - White vest", desc: "The pilgrim's garment. Inscribed with 'Namu Daishi Henjo Kongo' on the back", essential: true },
  { name: "Sugegasa (菅笠) - Sedge hat", desc: "Conical hat inscribed with 'Dogyo Ninin'. Protects from sun and rain", essential: true },
  { name: "Kongotsue (金剛杖) - Walking staff", desc: "Regarded as the embodiment of Kobo Daishi. Never use it on bridges", essential: true },
  { name: "Wagesa (輪袈裟) - Stole", desc: "A simplified Buddhist stole worn around the neck as a mark of pilgrimage", essential: true },
  { name: "Nokyocho (納経帳) - Stamp book", desc: "A book to collect the vermillion seal (goshuin) at each temple", essential: true },
  { name: "Osame-fuda (納め札) - Offering slips", desc: "Paper slips deposited at the main hall and Daishi hall. Write your name, address, and prayer", essential: true },
  { name: "Juzu (数珠) - Prayer beads", desc: "Held in hands during prayer", essential: true },
  { name: "Kyohon (経本) - Sutra book", desc: "Used for chanting the Heart Sutra and other prayers", essential: false },
  { name: "Candles & Incense", desc: "Offered at each temple for light and purification", essential: false },
  { name: "Lighter", desc: "For lighting candles and incense", essential: false },
];

const steps = [
  { num: 1, title: "Bow at the main gate", desc: "Put your palms together and bow. Step over the threshold without stepping on it" },
  { num: 2, title: "Purify at the water basin", desc: "Cleanse in order: left hand, right hand, mouth, then the ladle handle" },
  { num: 3, title: "Ring the bell at the belfry", desc: "Only if permitted. Ringing on your way out is called 'modori-gane' and considered bad luck" },
  { num: 4, title: "Pray at the main hall", desc: "Light candles, then incense, deposit offering slip, make a monetary offering, then chant sutras (Heart Sutra, etc.)" },
  { num: 5, title: "Pray at the Daishi hall", desc: "Follow the same steps as the main hall. Offer prayers to Kobo Daishi" },
  { num: 6, title: "Receive the temple seal", desc: "Have your stamp book inscribed with calligraphy and vermillion seal (300 yen)" },
  { num: 7, title: "Bow and exit at the gate", desc: "Turn back and bow toward the main hall before leaving" },
];

export default function OhenroEnPage() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: "Shikoku 88 Temple Pilgrimage (Ohenro)",
          description: "A 1,200km pilgrimage visiting 88 temples associated with Kobo Daishi Kukai across the island of Shikoku",
          touristType: "Pilgrimage",
          inLanguage: "en",
          itinerary: {
            "@type": "ItemList",
            numberOfItems: 88,
            itemListElement: dojos.flatMap((d) =>
              d.temples.map((t) => ({
                "@type": "ListItem",
                position: t.num,
                name: `#${t.num} ${t.name}`,
              }))
            ),
          },
        }}
      />

      {/* Hero */}
      <section className="relative h-[380px] sm:h-[440px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1400&q=80"
          alt="Pilgrimage trail in Shikoku"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[var(--color-background)]" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <p className="mb-3 text-xs font-semibold tracking-[0.4em] uppercase text-[var(--color-gold)]">
            Shikoku Pilgrimage
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Shikoku 88 Temple
            <br />
            <span className="text-gradient">Pilgrimage Guide</span>
          </h1>
          <p className="mt-4 max-w-lg text-base text-white/60">
            A 1,200km spiritual journey following the path of Kobo Daishi Kukai
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb
          items={[
            { label: "Home", href: "/en" },
            { label: "Ohenro Guide" },
          ]}
        />

        {/* Language Switch */}
        <div className="mt-4 flex justify-end">
          <Link
            href="/ohenro"
            className="text-sm text-gray-500 hover:text-[var(--color-gold)] transition-colors"
          >
            🇯🇵 日本語
          </Link>
        </div>

        {/* Table of Contents */}
        <Card className="mt-8">
          <div className="p-6">
            <h2 className="text-lg font-bold text-[var(--color-foreground)] mb-4">📋 Contents</h2>
            <nav className="space-y-2">
              {[
                { href: "#about", label: "🙏 What is Ohenro?" },
                { href: "#dojos", label: "⛩️ The Four Dojos & Key Temples" },
                { href: "#methods", label: "🚶 Pilgrimage Methods Compared" },
                { href: "#items", label: "🎒 Attire & What to Bring" },
                { href: "#manner", label: "📿 Pilgrimage Etiquette" },
                { href: "#cost", label: "💰 Cost Guide" },
                { href: "#route", label: "🗺️ Pilgrimage Routes & Duration" },
              ].map((item) => (
                <a key={item.href} href={item.href} className="block text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors pl-2">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </Card>

        {/* What is Ohenro? */}
        <section id="about" className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🙏</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">What is Ohenro?</h2>
          </div>
          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
            <p>
              The Ohenro (Shikoku 88 Temple Pilgrimage) is a roughly 1,200km journey visiting 88 temples associated with Kobo Daishi Kukai, one of Japan&apos;s most revered Buddhist monks. Dating back to the Heian period, this pilgrimage has a history of over 1,200 years and is one of Japan&apos;s most iconic spiritual routes.
            </p>
            <p>
              The 88 temples span all four prefectures of Shikoku, each representing a stage of spiritual development: &ldquo;Awakening&rdquo; (Tokushima), &ldquo;Training&rdquo; (Kochi), &ldquo;Enlightenment&rdquo; (Ehime), and &ldquo;Nirvana&rdquo; (Kagawa). It is believed that by visiting all 88 temples &mdash; a number matching the Buddhist count of earthly desires &mdash; one&apos;s worldly attachments are purified and wishes granted.
            </p>
            <p>
              Pilgrims walk with the spirit of &ldquo;Dogyo Ninin&rdquo; (two traveling together), meaning Kobo Daishi is always by your side. The pilgrimage welcomes everyone regardless of religious affiliation or belief.
            </p>
          </div>
        </section>

        {/* The Four Dojos */}
        <section id="dojos" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">⛩️</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">The Four Dojos &amp; Key Temples</h2>
          </div>
          <div className="space-y-8">
            {dojos.map((dojo) => (
              <Card key={dojo.name}>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="w-3 h-3 rounded-full" style={{ background: dojo.color }} />
                    <h3 className="text-lg font-bold text-[var(--color-foreground)]">{dojo.name}</h3>
                  </div>
                  <p className="text-sm text-[var(--color-muted)] mb-1">
                    {dojo.nameJa}
                  </p>
                  <p className="text-sm text-[var(--color-muted)] mb-4">
                    {dojo.pref} | {dojo.range} | {dojo.meaning}
                  </p>
                  <div className="space-y-3">
                    {dojo.temples.map((t) => (
                      <div key={t.num} className="flex items-start gap-3">
                        <span className="shrink-0 w-10 h-6 rounded text-center text-xs font-bold leading-6" style={{ background: dojo.color, color: "#fff" }}>
                          {t.num}
                        </span>
                        <div>
                          <span className="font-medium text-[var(--color-foreground)]">{t.name}</span>
                          <span className="ml-2 text-sm text-[var(--color-muted)]">{t.note}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Pilgrimage Methods Compared */}
        <section id="methods" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🚶</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">Pilgrimage Methods Compared</h2>
          </div>
          <div className="space-y-5">
            {methods.map((m) => (
              <Card key={m.name}>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{m.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold text-[var(--color-foreground)]">{m.name}</h3>
                      <p className="text-sm text-[var(--color-muted)]">
                        Duration: {m.days} | Cost: {m.cost}
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold text-[var(--color-gold)] mb-2">Pros</p>
                      <ul className="space-y-1">
                        {m.pros.map((p) => (
                          <li key={p} className="text-sm text-[var(--color-muted)] flex items-start gap-2">
                            <span className="text-[var(--color-gold)] shrink-0">✓</span>{p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[var(--color-shrine)] mb-2">Cons</p>
                      <ul className="space-y-1">
                        {m.cons.map((c) => (
                          <li key={c} className="text-sm text-[var(--color-muted)] flex items-start gap-2">
                            <span className="text-[var(--color-shrine)] shrink-0">△</span>{c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Attire & What to Bring */}
        <section id="items" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🎒</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">Attire &amp; What to Bring</h2>
          </div>
          <div className="space-y-3">
            {items.map((item) => (
              <Card key={item.name}>
                <div className="p-4 flex items-start gap-3">
                  <span className={`shrink-0 mt-0.5 text-sm ${item.essential ? "text-[var(--color-shrine)]" : "text-[var(--color-muted)]"}`}>
                    {item.essential ? "Essential" : "Recommended"}
                  </span>
                  <div>
                    <span className="font-bold text-[var(--color-foreground)]">{item.name}</span>
                    <p className="text-sm text-[var(--color-muted)] mt-0.5">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Pilgrimage Etiquette */}
        <section id="manner" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">📿</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">Pilgrimage Etiquette</h2>
          </div>
          <div className="space-y-0">
            {steps.map((s) => (
              <div key={s.num} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white bg-[var(--color-temple)]">
                  {s.num}
                </div>
                <div className="flex-1 pb-8 border-l border-[var(--color-border)] pl-6 -ml-5 mt-5">
                  <h3 className="text-lg font-bold text-[var(--color-foreground)]">{s.title}</h3>
                  <p className="mt-1 text-[var(--color-muted)]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link href="/en/sanpai-manner" className="text-sm font-medium text-[var(--color-gold)] hover:underline">
              → See detailed worship etiquette guide
            </Link>
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
                  <th className="px-4 py-3 text-right text-[var(--color-muted)] font-medium">Walking</th>
                  <th className="px-4 py-3 text-right text-[var(--color-muted)] font-medium">Driving</th>
                  <th className="px-4 py-3 text-right text-[var(--color-muted)] font-medium">Bus Tour</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {[
                  ["Accommodation", "200,000-350,000 yen", "80,000-150,000 yen", "Included"],
                  ["Food", "50,000-100,000 yen", "30,000-50,000 yen", "Included"],
                  ["Transport", "Nearly free", "50,000-80,000 yen", "100,000-200,000 yen"],
                  ["Temple seal fees", "~27,000 yen", "~27,000 yen", "~27,000 yen"],
                  ["Attire & supplies", "10,000-20,000 yen", "10,000-20,000 yen", "10,000-20,000 yen"],
                  ["Estimated total", "300,000-500,000 yen", "150,000-250,000 yen", "100,000-200,000 yen"],
                ].map(([item, walk, car, bus]) => (
                  <tr key={item} className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 font-medium text-[var(--color-foreground)]">{item}</td>
                    <td className="px-4 py-3 text-right text-[var(--color-muted)]">{walk}</td>
                    <td className="px-4 py-3 text-right text-[var(--color-muted)]">{car}</td>
                    <td className="px-4 py-3 text-right text-[var(--color-muted)]">{bus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-[var(--color-muted)]">
            * Temple seal fee is 300 yen per temple x 88 temples = 26,400 yen. Add 6,000 yen if including the 20 supplementary sacred sites.
          </p>
        </section>

        {/* Pilgrimage Routes */}
        <section id="route" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🗺️</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">Pilgrimage Routes &amp; Duration</h2>
          </div>
          <div className="space-y-5">
            {[
              {
                title: "Toshi-uchi (Complete circuit)",
                desc: "Walking: 30-60 days / Driving: 8-12 days. The most rewarding approach, visiting all temples in one continuous journey. Best for those with extended time off. Spring (March-May) and autumn (September-November) are the ideal seasons.",
              },
              {
                title: "Kugiri-uchi (Split into multiple trips)",
                desc: "Visit temples in stages over weekends and holidays. Possible even while working. Most people complete 5-10 temples per trip and finish in 1-2 years.",
              },
              {
                title: "Gyaku-uchi (Reverse pilgrimage, #88 to #1)",
                desc: "Travel in reverse order from temple 88 to temple 1. Doing a reverse pilgrimage in a leap year is said to bring triple the spiritual merit. It is more challenging since trail markers point the other way, but legend says you may encounter Kobo Daishi himself.",
              },
            ].map((route) => (
              <Card key={route.title}>
                <div className="p-5">
                  <h3 className="font-bold text-[var(--color-foreground)]">{route.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">{route.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-[var(--color-muted)] mb-4">
            Learn proper temple etiquette and begin your pilgrimage journey
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/en/sanpai-manner" className="group relative rounded-full px-8 py-3.5 text-sm font-bold overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-shrine)] to-[var(--color-gold)] opacity-90 group-hover:opacity-100 transition-opacity" />
              <span className="relative text-white">Worship Etiquette Guide</span>
            </Link>
            <Link href="/en/shrines" className="rounded-full border border-[var(--color-border)] px-8 py-3.5 text-sm font-bold text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:border-[var(--color-gold)]/40 transition-all">
              Find Shrines &amp; Temples
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
