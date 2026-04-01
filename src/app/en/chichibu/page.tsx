import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Card from "@/components/ui/Card";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";
import { getAllChichibuTemples } from "@/data/chichibu-data";

export const metadata: Metadata = {
  title: "Chichibu 34 Kannon Pilgrimage Guide | Completing the 100 Kannon",
  description:
    "Complete guide to the Chichibu 34 Temples pilgrimage. Explore all 34 sacred Kannon sites concentrated in the Chichibu region of Saitama Prefecture. The final leg of Japan's 100 Kannon Pilgrimage.",
  keywords: ["Chichibu 34 Temples", "Chichibu pilgrimage", "100 Kannon", "Kannon temples", "goshuin", "Chichibu"],
  alternates: {
    canonical: `${SITE_URL}/en/chichibu`,
    languages: { ja: `${SITE_URL}/chichibu`, en: `${SITE_URL}/en/chichibu` },
  },
  openGraph: {
    title: "Chichibu 34 Kannon Pilgrimage Guide",
    description: "Complete guide to the Chichibu 34 Temples — the final leg of Japan's 100 Kannon Pilgrimage.",
    url: `${SITE_URL}/en/chichibu`,
    type: "article",
  },
};

export default function ChichibuEnPage() {
  const temples = getAllChichibuTemples();

  return (
    <div>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "TouristTrip", name: "Chichibu 34 Kannon Pilgrimage", description: "A pilgrimage journey of approximately 100 km visiting 34 sacred Kannon sites in the Chichibu region of Saitama Prefecture", touristType: "Pilgrimage", inLanguage: "en", itinerary: { "@type": "ItemList", numberOfItems: 34, itemListElement: temples.map((t) => ({ "@type": "ListItem", position: t.num, name: `Temple #${t.num} ${t.name}` })) } }} />

      {/* Hero */}
      <section className="relative h-[380px] sm:h-[440px] overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1400&q=80" alt="Chichibu landscape" fill className="object-cover brightness-[0.5]" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[var(--color-background)]" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.4em] uppercase text-[var(--color-gold)] drop-shadow">Chichibu Pilgrimage</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white drop-shadow-lg">Chichibu 34 Temples<br /><span className="text-gradient">Pilgrimage Guide</span></h1>
          <p className="mt-4 max-w-lg text-base text-white/70 drop-shadow">A 100 km journey of prayer through Chichibu — the final destination of Japan&apos;s 100 Kannon Pilgrimage</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb items={[{ label: "Home", href: "/en" }, { label: "Pilgrimages", href: "/en/reijo" }, { label: "Chichibu 34 Temples" }]} />

        {/* Language Switch */}
        <div className="mt-4 flex justify-end">
          <Link href="/chichibu" className="text-sm text-gray-500 hover:text-[var(--color-gold)] transition-colors">
            🇯🇵 日本語
          </Link>
        </div>

        {/* Table of Contents */}
        <Card className="mt-8"><div className="p-6">
          <h2 className="text-lg font-bold text-[var(--color-foreground)] mb-4">📋 Contents</h2>
          <nav className="space-y-2">
            {[
              { href: "#about", label: "🙏 About the Chichibu 34 Temples" },
              { href: "#all34", label: "⛩️ Complete List of All 34 Temples" },
              { href: "#method", label: "🚶 How to Visit & Duration" },
              { href: "#history", label: "📜 History & Origins" },
            ].map((item) => (
              <a key={item.href} href={item.href} className="block text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors pl-2">{item.label}</a>
            ))}
          </nav>
        </div></Card>

        {/* About */}
        <section id="about" className="mt-16">
          <div className="flex items-center gap-3 mb-6"><span className="text-3xl">🙏</span><h2 className="text-2xl font-bold text-[var(--color-foreground)]">About the Chichibu 34 Temples</h2></div>
          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
            <p>The Chichibu 34 Temples is a pilgrimage route visiting 34 sacred Kannon (Goddess of Mercy) sites concentrated in the Chichibu region of Saitama Prefecture. With a total distance of approximately 100 km, it is relatively compact and can be completed on foot in 5 to 7 days.</p>
            <p>Said to have been established in 1234 (Bunreki 1), the route combines with the Saigoku 33 Temples (33) and the Bando 33 Kannon (33) to form a total of 100 sites, completing the &quot;100 Kannon of Japan.&quot; Chichibu holds a special position as the &quot;place of completion&quot; for the 100 Kannon Pilgrimage.</p>
            <p>The humble temples scattered throughout the Chichibu mountains offer a warmth that differs from the grand temples of urban areas, and interacting with local people is one of the joys of this pilgrimage. Walking through Chichibu&apos;s rich natural landscape makes for a truly healing journey.</p>
          </div>
        </section>

        {/* All 34 Temples */}
        <section id="all34" className="mt-20">
          <div className="flex items-center gap-3 mb-8"><span className="text-3xl">⛩️</span><h2 className="text-2xl font-bold text-[var(--color-foreground)]">Complete List of All 34 Temples</h2></div>
          <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)]">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-[var(--color-border)]">
                <th className="px-3 py-3 text-left text-[var(--color-muted)] font-medium w-12">No.</th>
                <th className="px-3 py-3 text-left text-[var(--color-muted)] font-medium">Temple Name</th>
                <th className="px-3 py-3 text-left text-[var(--color-muted)] font-medium hidden sm:table-cell">Principal Image</th>
                <th className="px-3 py-3 text-left text-[var(--color-muted)] font-medium hidden md:table-cell">Sect</th>
              </tr></thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {temples.map((t) => (
                  <tr key={t.num} className="hover:bg-white/5 transition-colors">
                    <td className="px-3 py-2.5 font-bold text-[var(--color-gold)]">{t.num}</td>
                    <td className="px-3 py-2.5 font-medium"><Link href={`/en/chichibu/${t.num}`} className="text-[var(--color-foreground)] hover:text-[var(--color-gold)] transition-colors">{t.name}</Link></td>
                    <td className="px-3 py-2.5 text-[var(--color-muted)] hidden sm:table-cell">{t.honzon}</td>
                    <td className="px-3 py-2.5 text-[var(--color-muted)] hidden md:table-cell">{t.shuha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {temples.length < 34 && <p className="mt-3 text-xs text-[var(--color-muted)]">* Details for {temples.length} temples are currently available. The remaining temples will be added soon.</p>}
        </section>

        {/* How to Visit */}
        <section id="method" className="mt-20">
          <div className="flex items-center gap-3 mb-8"><span className="text-3xl">🚶</span><h2 className="text-2xl font-bold text-[var(--color-foreground)]">How to Visit & Duration</h2></div>
          <div className="space-y-5">
            {[
              { icon: "🚶", name: "Walking Pilgrimage", days: "5-7 days", cost: "50,000-100,000 yen", desc: "A compact 100 km route. A fulfilling experience walking through Chichibu's mountain paths. Accommodation is available at hotels and inns in central Chichibu." },
              { icon: "🚗", name: "By Car", days: "2-3 days", cost: "30,000-50,000 yen", desc: "Since the temples are concentrated in the Chichibu area, driving is very efficient. You can visit 10-15 temples per day. Parking is mostly free." },
              { icon: "🚃", name: "Train + Walking", days: "3-5 days", cost: "50,000-80,000 yen", desc: "Many temples are along the Seibu Chichibu Line and Chichibu Railway. Temples in mountainous areas require longer walks from stations." },
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
          <div className="flex items-center gap-3 mb-8"><span className="text-3xl">📜</span><h2 className="text-2xl font-bold text-[var(--color-foreground)]">History & Origins</h2></div>
          <div className="space-y-5">
            {[
              { era: "1234 (Bunreki 1)", title: "Founding of the Chichibu Pilgrimage", desc: "A disciple of the monk Shoku Shonin from Harima Province is said to have established the Kannon sacred sites in Chichibu. Originally there were 33 temples, but one was added during the Muromachi period to make 34." },
              { era: "Muromachi to Edo Period", title: "Popularization & Establishment of the 100 Kannon", desc: "During the Edo period, the concept of 'Saigoku 33 + Bando 33 + Chichibu 34 = Japan's 100 Kannon' was established. Chichibu was designated as the 'place of completion' for the 100 Kannon, attracting many pilgrims." },
              { era: "Modern Era", title: "A New Pilgrimage Culture", desc: "In recent years, the walking boom and goshuin (temple seal) trend have brought younger pilgrims. The compact distance and Chichibu's nature and local cuisine (waraji katsudon, Chichibu soba, miso potato) add to its appeal." },
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
          <p className="text-[var(--color-muted)] mb-4">Explore more pilgrimage guides</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/en/reijo" className="group relative rounded-full px-8 py-3.5 text-sm font-bold overflow-hidden"><span className="absolute inset-0 bg-gradient-to-r from-[var(--color-shrine)] to-[var(--color-gold)] opacity-90 group-hover:opacity-100 transition-opacity" /><span className="relative text-white">All Pilgrimages</span></Link>
            <Link href="/en/sanpai-manner" className="rounded-full border border-[var(--color-border)] px-8 py-3.5 text-sm font-bold text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:border-[var(--color-gold)]/40 transition-all">Worship Etiquette Guide</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
