import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Card from "@/components/ui/Card";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";
import { getAllBandoTemples } from "@/data/bando-data";

export const metadata: Metadata = {
  title: "Bando 33 Kannon Pilgrimage Guide | Kanto Region",
  description:
    "Complete guide to the Bando 33 Temples pilgrimage across the Kanto region. Discover all 33 sacred Kannon temples, pilgrimage routes, goshuin, costs, and recommended itineraries.",
  keywords: ["Bando 33 Temples", "Bando pilgrimage", "Kannon temples", "Kanto", "goshuin", "pilgrimage"],
  alternates: {
    canonical: `${SITE_URL}/en/bando`,
    languages: { ja: `${SITE_URL}/bando`, en: `${SITE_URL}/en/bando` },
  },
  openGraph: {
    title: "Bando 33 Kannon Pilgrimage Guide",
    description: "Complete guide to the Bando 33 Kannon pilgrimage across the Kanto region.",
    url: `${SITE_URL}/en/bando`,
    type: "article",
    locale: "en_US",
  },
};

const prefGroups = [
  { pref: "Kanagawa", prefJa: "神奈川県", nums: [1, 2, 3, 4, 5, 6, 7, 8, 14], color: "var(--color-shrine)" },
  { pref: "Saitama", prefJa: "埼玉県", nums: [9, 10, 11, 12], color: "var(--color-temple)" },
  { pref: "Tokyo", prefJa: "東京都", nums: [13], color: "var(--color-gold)" },
  { pref: "Gunma", prefJa: "群馬県", nums: [15, 16], color: "var(--color-shrine)" },
  { pref: "Tochigi", prefJa: "栃木県", nums: [17, 18, 19, 20], color: "var(--color-temple)" },
  { pref: "Ibaraki", prefJa: "茨城県", nums: [21, 22, 23, 24, 25, 26], color: "var(--color-gold)" },
  { pref: "Chiba", prefJa: "千葉県", nums: [27, 28, 29, 30, 31, 32, 33], color: "var(--color-shrine)" },
];

export default function BandoEnPage() {
  const temples = getAllBandoTemples();

  return (
    <div>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "TouristTrip", name: "Bando 33 Kannon Pilgrimage", description: "A pilgrimage visiting 33 sacred Kannon temples across the Kanto region of Japan", touristType: "Pilgrimage", inLanguage: "en", itinerary: { "@type": "ItemList", numberOfItems: 33, itemListElement: temples.map((t) => ({ "@type": "ListItem", position: t.num, name: `Temple #${t.num} ${t.name}` })) } }} />

      {/* Hero */}
      <section className="relative h-[380px] sm:h-[440px] overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1400&q=80" alt="Temples in the Kanto region" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[var(--color-background)]" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <p className="mb-3 text-xs font-semibold tracking-[0.4em] uppercase text-[var(--color-gold)]">Bando Pilgrimage</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Bando 33 Kannon<br /><span className="text-gradient">Pilgrimage Guide</span></h1>
          <p className="mt-4 max-w-lg text-base text-white/60">A historic pilgrimage route spanning approx. 1,300 km across the Kanto region, inspired by Minamoto no Yoritomo&apos;s devotion to Kannon</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Language Switch */}
        <div className="flex justify-end mb-4">
          <Link href="/bando" className="text-sm text-gray-500 hover:text-[var(--color-gold)] transition-colors">
            🇯🇵 日本語
          </Link>
        </div>

        <Breadcrumb items={[{ label: "Home", href: "/en" }, { label: "Bando 33 Temples" }]} />

        {/* Table of Contents */}
        <Card className="mt-8"><div className="p-6">
          <h2 className="text-lg font-bold text-[var(--color-foreground)] mb-4">📋 Contents</h2>
          <nav className="space-y-2">
            {[
              { href: "#about", label: "🙏 About the Bando Pilgrimage" },
              { href: "#all33", label: "⛩️ All 33 Temples" },
              { href: "#pref", label: "🗺️ Guide by Prefecture" },
              { href: "#method", label: "🚗 How to Travel & Duration" },
              { href: "#history", label: "📜 History & Origins" },
            ].map((item) => (
              <a key={item.href} href={item.href} className="block text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors pl-2">{item.label}</a>
            ))}
          </nav>
        </div></Card>

        {/* About */}
        <section id="about" className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🙏</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">About the Bando Pilgrimage</h2>
          </div>
          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
            <p>The Bando 33 Kannon Pilgrimage is a sacred route visiting 33 Kannon (Goddess of Mercy) temples spread across the Kanto region, spanning seven prefectures: Kanagawa, Saitama, Tokyo, Gunma, Tochigi, Ibaraki, and Chiba. The total distance covers approximately 1,300 km.</p>
            <p>The pilgrimage was established in the early Kamakura period, inspired by Minamoto no Yoritomo&apos;s deep devotion to Kannon. Modeled after the Saigoku 33 Temples pilgrimage in western Japan, it brought the tradition of Kannon worship to the Kanto region. Together with the Chichibu 34 Temples, these three pilgrimages form the &quot;100 Kannon of Japan.&quot;</p>
            <p>The route takes pilgrims through famous temples in Kamakura, Nikko, Tsukuba, Boso, and beyond. The course is remarkably diverse, ranging from urban temples to remote mountain sanctuaries.</p>
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
              <thead><tr className="border-b border-[var(--color-border)]">
                <th className="px-3 py-3 text-left text-[var(--color-muted)] font-medium w-12">#</th>
                <th className="px-3 py-3 text-left text-[var(--color-muted)] font-medium">Temple Name</th>
                <th className="px-3 py-3 text-left text-[var(--color-muted)] font-medium hidden sm:table-cell">Prefecture</th>
                <th className="px-3 py-3 text-left text-[var(--color-muted)] font-medium hidden md:table-cell">Principal Image</th>
              </tr></thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {temples.map((t) => (
                  <tr key={t.num} className="hover:bg-white/5 transition-colors">
                    <td className="px-3 py-2.5 font-bold text-[var(--color-gold)]">{t.num}</td>
                    <td className="px-3 py-2.5 font-medium"><Link href={`/en/bando/${t.num}`} className="text-[var(--color-foreground)] hover:text-[var(--color-gold)] transition-colors">{t.name}</Link></td>
                    <td className="px-3 py-2.5 text-[var(--color-muted)] hidden sm:table-cell">{t.pref}</td>
                    <td className="px-3 py-2.5 text-[var(--color-muted)] hidden md:table-cell">{t.honzon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {temples.length < 33 && (
            <p className="mt-3 text-xs text-[var(--color-muted)]">* Currently showing details for {temples.length} temples. More will be added soon.</p>
          )}
        </section>

        {/* Guide by Prefecture */}
        <section id="pref" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🗺️</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">Guide by Prefecture</h2>
          </div>
          <div className="space-y-6">
            {prefGroups.map((g) => {
              const available = g.nums.filter((n) => temples.some((t) => t.num === n));
              if (available.length === 0) return (
                <Card key={g.pref}><div className="p-5">
                  <div className="flex items-center gap-3"><span className="w-3 h-3 rounded-full" style={{ background: g.color }} /><h3 className="text-lg font-bold text-[var(--color-foreground)]">{g.pref}</h3><span className="text-sm text-[var(--color-muted)]">{g.nums.length} temples</span></div>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">Details coming soon</p>
                </div></Card>
              );
              return (
                <Card key={g.pref}><div className="p-6">
                  <div className="flex items-center gap-3 mb-4"><span className="w-3 h-3 rounded-full" style={{ background: g.color }} /><h3 className="text-lg font-bold text-[var(--color-foreground)]">{g.pref}</h3><span className="text-sm text-[var(--color-muted)]">{g.nums.length} temples</span></div>
                  <div className="space-y-3">
                    {available.map((num) => {
                      const t = temples.find((x) => x.num === num)!;
                      return (
                        <div key={num} className="flex items-start gap-3">
                          <span className="shrink-0 w-8 h-6 rounded text-center text-xs font-bold leading-6 text-white" style={{ background: g.color }}>{num}</span>
                          <div><Link href={`/en/bando/${num}`} className="font-medium text-[var(--color-foreground)] hover:text-[var(--color-gold)] transition-colors">{t.name}</Link></div>
                        </div>
                      );
                    })}
                  </div>
                </div></Card>
              );
            })}
          </div>
        </section>

        {/* How to Travel */}
        <section id="method" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🚗</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">How to Travel & Duration</h2>
          </div>
          <div className="space-y-5">
            {[
              { icon: "🚗", name: "By Car", days: "5-10 days", cost: "100,000-200,000 yen", desc: "The most efficient way to visit temples scattered across the Kanto region. Using expressways, aim for 3-5 temples per day. Most temples have parking available." },
              { icon: "🚃", name: "Train & Bus", days: "10-20 days", cost: "100,000-150,000 yen", desc: "Temples in urban areas are easily accessible, but mountain temples and those in the Boso area of Chiba have limited bus services and require more time." },
              { icon: "🚶", name: "Walking Pilgrimage", days: "40-60 days", cost: "300,000-500,000 yen", desc: "Walk the full 1,300 km route. The Kanto Plain offers mostly flat terrain, but mountain areas around Nikko and Boso require good fitness. Securing accommodation can be challenging." },
            ].map((m) => (
              <Card key={m.name}><div className="p-5">
                <div className="flex items-center gap-3 mb-2"><span className="text-2xl">{m.icon}</span><div><h3 className="font-bold text-[var(--color-foreground)]">{m.name}</h3><p className="text-xs text-[var(--color-muted)]">Duration: {m.days} | Cost: {m.cost}</p></div></div>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{m.desc}</p>
              </div></Card>
            ))}
          </div>
        </section>

        {/* History */}
        <section id="history" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">📜</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">History & Origins</h2>
          </div>
          <div className="space-y-5">
            {[
              { era: "Early Kamakura Period (13th century)", title: "Born from Yoritomo's devotion to Kannon", desc: "Minamoto no Yoritomo, founder of the Kamakura shogunate, sought to establish a Kannon pilgrimage in the Kanto region, modeled after the Saigoku 33 Temples in western Japan. Starting from Kamakura, sacred Kannon temples were selected across the entire Kanto area. The current 33 temples are believed to have been finalized during the era of Shogun Sanetomo." },
              { era: "Muromachi to Sengoku Period", title: "Spread among warriors and commoners", desc: "Kanto warriors made pilgrimages to pray for victory in battle and for their ancestors' souls. The practice gradually spread to ordinary people, and each temple became a center of local faith." },
              { era: "Edo Period", title: "The golden age of pilgrimage", desc: "As road networks improved, pilgrimage flourished. The concept of the '100 Kannon of Japan' combining Saigoku, Bando, and Chichibu was established. Sacred hymns (go-eika) were composed, completing the pilgrimage tradition as it is known today." },
            ].map((item) => (
              <Card key={item.era}><div className="p-5">
                <p className="text-xs font-semibold text-[var(--color-gold)]">{item.era}</p>
                <h3 className="mt-1 font-bold text-[var(--color-foreground)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">{item.desc}</p>
              </div></Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-[var(--color-muted)] mb-4">Explore other pilgrimage guides</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/en/saigoku" className="group relative rounded-full px-8 py-3.5 text-sm font-bold overflow-hidden"><span className="absolute inset-0 bg-gradient-to-r from-[var(--color-shrine)] to-[var(--color-gold)] opacity-90 group-hover:opacity-100 transition-opacity" /><span className="relative text-white">Saigoku 33 Temples Guide</span></Link>
            <Link href="/en/ohenro" className="rounded-full border border-[var(--color-border)] px-8 py-3.5 text-sm font-bold text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:border-[var(--color-gold)]/40 transition-all">Shikoku 88 Temples Guide</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
