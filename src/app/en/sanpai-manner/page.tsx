import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Card from "@/components/ui/Card";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Complete Guide to Shrine & Temple Etiquette | Worship Manners in Japan",
  description:
    "Learn proper shrine and temple etiquette in Japan. Step-by-step guide covering torii gates, temizu purification, bowing, offerings, goshuin stamps, and common mistakes to avoid.",
  keywords: [
    "shrine etiquette",
    "temple etiquette",
    "Japanese worship manners",
    "temizu",
    "goshuin",
    "shrine visit guide",
    "how to pray at shrine",
    "Japan travel tips",
  ],
  alternates: {
    canonical: `${SITE_URL}/en/sanpai-manner`,
    languages: { ja: `${SITE_URL}/sanpai-manner`, en: `${SITE_URL}/en/sanpai-manner` },
  },
  openGraph: {
    title: "Complete Guide to Shrine & Temple Etiquette | Worship Manners in Japan",
    description:
      "Learn proper shrine and temple etiquette in Japan with illustrated step-by-step instructions.",
    url: `${SITE_URL}/en/sanpai-manner`,
    type: "article",
    locale: "en_US",
  },
};

/* Step data */
const shrineSteps = [
  {
    num: 1,
    title: "Bow at the Torii Gate",
    body: "The torii marks the boundary between the sacred and secular worlds. Bow lightly (a slight nod) before passing through. It is polite to remove hats and sunglasses.",
    tip: "The center of the approach path is called seichu (正中) and is considered the pathway of the gods. Walk along the left or right side instead.",
  },
  {
    num: 2,
    title: "Temizu (手水) — Hand Purification",
    body: "Purify your hands and mouth before worship. Hold the ladle in your right hand and rinse your left hand, switch hands and rinse your right hand, then pour water into your left palm to rinse your mouth, and finally tilt the ladle upright to let water cleanse the handle.",
    tip: "Never put your lips directly on the ladle. Complete the entire sequence with a single scoop of water.",
  },
  {
    num: 3,
    title: "Make an Offering (Osaisen)",
    body: "Stand before the offering box and gently place your coin inside. Rather than tossing or throwing it, place it carefully with both hands if possible.",
    tip: "There is no set amount, but 5 yen (go-en, a homophone for 'good fortune / connection') is a popular choice. 15 yen and 25 yen are also considered auspicious.",
  },
  {
    num: 4,
    title: "Ring the Bell (Suzu)",
    body: "If there is a bell, shake the rope to ring it after making your offering. The sound is believed to ward off evil spirits and signal the deity that you have arrived.",
    tip: "Not all shrines have bells. If there is none, simply proceed to the prayer.",
  },
  {
    num: 5,
    title: "Nihai-Nihakushu-Ichihai (Two Bows, Two Claps, One Bow)",
    body: "This is the standard prayer etiquette at shrines: (1) Bow deeply twice. (2) Clap your hands twice at chest height. (3) Press your palms together and pray silently. (4) Bow deeply once more.",
    tip: "Some shrines, such as Izumo Taisha, follow a different pattern (e.g., two bows, four claps, one bow). Check local customs.",
  },
  {
    num: 6,
    title: "Bow Again When Leaving the Torii",
    body: "When you exit through the torii gate, turn back toward the main hall and give a light bow. Express your gratitude in your heart.",
    tip: null,
  },
];

const templeSteps = [
  {
    num: 1,
    title: "Bow at the Sanmon (Mountain Gate)",
    body: "Bow before entering the temple's main gate (sanmon). Step over the threshold rather than stepping on it — stepping on the threshold is considered disrespectful to the Buddha.",
    tip: "If you are asked to remove your shoes, place them neatly to the side.",
  },
  {
    num: 2,
    title: "Temizu (手水) — Hand Purification",
    body: "The process is the same as at a shrine: right hand holds the ladle, rinse left hand, then right hand, then mouth, then the ladle handle.",
    tip: "Some temples may not have a temizu basin.",
  },
  {
    num: 3,
    title: "Offer Incense & Candles",
    body: "If there is a jokoro (incense burner), light a stick of incense and waft the smoke over yourself for purification. The smoke is said to heal whichever part of your body you direct it toward.",
    tip: "Do not light your incense from someone else's flame — this is believed to transfer their negative karma to you.",
  },
  {
    num: 4,
    title: "Make an Offering & Press Palms Together (Gassho)",
    body: "Place your offering in the box, then press your palms together quietly and pray. Unlike at shrines, you should NOT clap your hands at temples. Simply hold your hands together in silent prayer.",
    tip: "Silence is the rule at temples — clapping is a shrine custom only.",
  },
  {
    num: 5,
    title: "Bow and Step Back",
    body: "When you finish praying, bow deeply. It is considered polite to take a few steps backward before turning away from the main hall.",
    tip: null,
  },
  {
    num: 6,
    title: "Bow When Leaving the Sanmon",
    body: "Turn back toward the main hall and bow once before passing through the gate to leave.",
    tip: null,
  },
];

const goshuinSteps = [
  {
    title: "Get a Goshuincho (Stamp Book)",
    body: "Goshuincho books are available at shrine and temple gift shops, stationery stores, and online. They come in accordion-fold and bound styles.",
  },
  {
    title: "Always Worship First",
    body: "A goshuin is proof of worship — it is considered rude to collect a stamp without praying first. Always complete your visit before requesting one.",
  },
  {
    title: "Visit the Stamp Office (Juyosho / Nokyosho)",
    body: "Say 'Goshuin wo onegai shimasu' (I'd like a goshuin, please) and hand over your open stamp book to the page you'd like inscribed.",
  },
  {
    title: "Pay the Fee (Hatsuhoryo)",
    body: "The typical fee is 300–500 yen. If they say 'as you wish,' 300 yen or more is a good guideline. Having exact change ready is a thoughtful gesture.",
  },
  {
    title: "Receive Your Goshuincho",
    body: "Accept the book with both hands and say 'Arigatou gozaimasu' (thank you very much).",
  },
];

const ngList = [
  {
    icon: "🚫",
    title: "Walking Down the Center of the Path",
    body: "The center (seichu) is the gods' pathway. Walk on the left or right side instead.",
  },
  {
    icon: "🚫",
    title: "Clapping at a Temple",
    body: "Hand-clapping (kashiwade) is a shrine ritual. At temples, simply press your palms together in silence.",
  },
  {
    icon: "🚫",
    title: "Skipping the Bow at the Gate",
    body: "Bowing at the torii or sanmon when entering and leaving is basic etiquette. Don't skip it, even if you're in a hurry.",
  },
  {
    icon: "🚫",
    title: "Photographing Forbidden Areas",
    body: "Some sacred objects, Buddha statues, and marked areas prohibit photography. Always check for signs before taking pictures.",
  },
  {
    icon: "🚫",
    title: "Throwing Your Offering",
    body: "Place your coin gently into the offering box. Tossing it from a distance is considered disrespectful.",
  },
  {
    icon: "🚫",
    title: "Drinking Directly from the Ladle",
    body: "At the temizu basin, pour water from the ladle into your hand, then rinse your mouth from your hand. Never put your lips on the ladle.",
  },
];

function StepCard({
  num,
  title,
  body,
  tip,
  color,
}: {
  num: number;
  title: string;
  body: string;
  tip: string | null;
  color: string;
}) {
  return (
    <div className="flex gap-4">
      <div
        className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
        style={{ background: `var(--color-${color})` }}
      >
        {num}
      </div>
      <div className="flex-1 pb-8 border-l border-[var(--color-border)] pl-6 -ml-5 mt-5">
        <h3 className="text-lg font-bold text-[var(--color-foreground)]">
          {title}
        </h3>
        <p className="mt-2 text-[var(--color-muted)] leading-relaxed">{body}</p>
        {tip && (
          <div className="mt-3 rounded-lg bg-[var(--color-gold-light)] border border-[var(--color-gold)]/20 px-4 py-3">
            <p className="text-sm text-[var(--color-gold)]">
              <span className="font-bold">💡 Tip: </span>
              {tip}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SanpaiMannerEnPage() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to Visit a Japanese Shrine",
          description:
            "Step-by-step guide to proper shrine worship etiquette in Japan",
          inLanguage: "en",
          step: shrineSteps.map((s) => ({
            "@type": "HowToStep",
            position: s.num,
            name: s.title,
            text: s.body,
          })),
        }}
      />

      {/* Hero */}
      <section className="relative h-[360px] sm:h-[420px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=1400&q=80"
          alt="Torii gate at a Japanese shrine"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[var(--color-background)]" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <p className="mb-3 text-xs font-semibold tracking-[0.4em] uppercase text-[var(--color-gold)]">
            Worship Etiquette
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Complete Guide to{" "}
            <span className="text-gradient">Shrine &amp; Temple Etiquette</span>
          </h1>
          <p className="mt-4 max-w-lg text-base text-white/60">
            Learn proper worship manners at Japanese
            <br className="sm:hidden" /> shrines and temples, step by step
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb
          items={[
            { label: "Home", href: "/en" },
            { label: "Worship Etiquette Guide" },
          ]}
        />

        {/* Language Switch */}
        <div className="mt-4 flex justify-end">
          <Link
            href="/sanpai-manner"
            className="text-sm text-gray-500 hover:text-[var(--color-gold)] transition-colors"
          >
            🇯🇵 日本語
          </Link>
        </div>

        {/* Table of Contents */}
        <Card className="mt-8">
          <div className="p-6">
            <h2 className="text-lg font-bold text-[var(--color-foreground)] mb-4">
              📋 Table of Contents
            </h2>
            <nav className="space-y-2">
              {[
                { href: "#shrine", label: "⛩️ How to Visit a Shrine — 6 Steps" },
                { href: "#temple", label: "🏯 How to Visit a Temple — 6 Steps" },
                { href: "#diff", label: "🔍 Differences Between Shrines and Temples" },
                { href: "#goshuin", label: "📕 How to Collect Goshuin (Temple Stamps)" },
                { href: "#ng", label: "🚫 Common Mistakes to Avoid" },
                { href: "#seasonal", label: "🎍 Seasonal & Event Worship Guide" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors pl-2"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </Card>

        {/* ===== How to Visit a Shrine ===== */}
        <section id="shrine" className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">⛩️</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              How to Visit a Shrine (Jinja)
            </h2>
          </div>
          <div className="space-y-0">
            {shrineSteps.map((step) => (
              <StepCard key={step.num} {...step} color="shrine" />
            ))}
          </div>
        </section>

        {/* ===== How to Visit a Temple ===== */}
        <section id="temple" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🏯</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              How to Visit a Temple (Otera)
            </h2>
          </div>
          <div className="space-y-0">
            {templeSteps.map((step) => (
              <StepCard key={step.num} {...step} color="temple" />
            ))}
          </div>
        </section>

        {/* ===== Differences Between Shrines and Temples ===== */}
        <section id="diff" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🔍</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              Differences Between Shrines and Temples
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="px-4 py-3 text-left text-[var(--color-muted)] font-medium">
                    Category
                  </th>
                  <th className="px-4 py-3 text-left text-[var(--color-shrine)] font-bold">
                    ⛩️ Shrine (Jinja)
                  </th>
                  <th className="px-4 py-3 text-left text-[var(--color-temple)] font-bold">
                    🏯 Temple (Otera)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {[
                  ["Religion", "Shinto", "Buddhism"],
                  ["Clergy", "Kannushi (priest) & Miko (shrine maiden)", "Soryo (monk) & Jushoku (head priest)"],
                  ["Entrance", "Torii (gate)", "Sanmon (mountain gate)"],
                  ["Prayer style", "Two bows, two claps, one bow", "Gassho only (palms together, no clapping)"],
                  ["Purification", "Temizu (water basin)", "Temizu & Jokoro (incense burner)"],
                  ["Enshrined", "Kami (Shinto deities)", "Hotoke (Buddha statues)"],
                  ["Graves", "Rarely found", "Often present"],
                  ["Omikuji (fortune slips)", "Tie or take home", "Tie or take home"],
                ].map(([item, shrine, temple]) => (
                  <tr
                    key={item}
                    className="hover:bg-white/5 transition-colors"
                  >
                    <td className="px-4 py-3 font-medium text-[var(--color-foreground)]">
                      {item}
                    </td>
                    <td className="px-4 py-3 text-[var(--color-muted)]">
                      {shrine}
                    </td>
                    <td className="px-4 py-3 text-[var(--color-muted)]">
                      {temple}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== How to Collect Goshuin ===== */}
        <section id="goshuin" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">📕</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              How to Collect Goshuin (Temple Stamps)
            </h2>
          </div>
          <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
            Goshuin (御朱印) are calligraphic ink stamps with a red seal, given
            as proof of your visit to a shrine or temple. In recent years,
            colorful designs and seasonal limited editions have made them popular
            as collectibles.
          </p>
          <div className="space-y-4">
            {goshuinSteps.map((step, i) => (
              <Card key={i}>
                <div className="p-5 flex gap-4">
                  <span
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-black"
                    style={{ background: "var(--color-gold)" }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-[var(--color-foreground)]">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--color-muted)] leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* ===== Common Mistakes ===== */}
        <section id="ng" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🚫</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              Common Mistakes to Avoid
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {ngList.map((item, i) => (
              <Card key={i}>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{item.icon}</span>
                    <h3 className="font-bold text-[var(--color-shrine)]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* ===== Seasonal & Event Guide ===== */}
        <section id="seasonal" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🎍</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              Seasonal &amp; Event Worship Guide
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                season: "🌸 Spring (March – May)",
                events: "Hana Matsuri / Flower Festival (Apr 8), Spring Grand Festivals",
                tips: "Many shrines and temples are famous cherry blossom spots. If combining hanami (flower viewing) with worship, complete your prayers before enjoying the blossoms.",
              },
              {
                season: "🌻 Summer (June – August)",
                events: "Nagoshi no Oharae (Jun 30), Obon (August), Summer Festivals",
                tips: "At Nagoshi no Oharae, walk through the chinowa (reed ring) to purify yourself of the first half of the year's impurities. Obon is centered on temple visits. Stay hydrated in the heat.",
              },
              {
                season: "🍂 Autumn (September – November)",
                events: "Shichi-Go-San (around Nov 15), Autumn Grand Festivals, Fall Foliage",
                tips: "The Shichi-Go-San season can be crowded — weekdays and early mornings are recommended. Famous autumn foliage temples may hold special viewings.",
              },
              {
                season: "❄️ Winter (December – February)",
                events: "Hatsumode / New Year's Visit (Jan 1–3), Setsubun (Feb 3), Year-End Oharae (Dec 31)",
                tips: "Hatsumode draws huge crowds during the first three days of January, but visiting anytime within matsu-no-uchi (through Jan 7) still counts. Bundle up against the cold.",
              },
            ].map((item) => (
              <Card key={item.season}>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[var(--color-foreground)]">
                    {item.season}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-gold)]">
                    Key events: {item.events}
                  </p>
                  <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">
                    {item.tips}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-[var(--color-muted)] mb-4">
            Now that you know the etiquette, explore shrines and temples to visit
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/en/shrines"
              className="group relative rounded-full px-8 py-3.5 text-sm font-bold overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-shrine)] to-[var(--color-gold)] opacity-90 group-hover:opacity-100 transition-opacity" />
              <span className="relative text-white">
                Find Shrines &amp; Temples
              </span>
            </Link>
            <Link
              href="/en/guide"
              className="rounded-full border border-[var(--color-border)] px-8 py-3.5 text-sm font-bold text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:border-[var(--color-gold)]/40 transition-all"
            >
              Read the Good Fortune Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
