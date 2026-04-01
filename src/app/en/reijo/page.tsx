import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Guide to Sacred Pilgrimage Sites | Shikoku, Saigoku, Bando, Chichibu",
  description:
    "A complete guide to Japan's four great pilgrimages: Shikoku 88 Temples, Saigoku 33 Temples, Bando 33 Temples, and Chichibu 34 Temples. Includes information on the 100 Kannon Pilgrimage.",
  keywords: ["pilgrimage", "sacred sites", "100 Kannon", "Shikoku pilgrimage", "Saigoku 33", "Bando 33", "Chichibu 34"],
  alternates: {
    canonical: `${SITE_URL}/en/reijo`,
    languages: { ja: `${SITE_URL}/reijo`, en: `${SITE_URL}/en/reijo` },
  },
  openGraph: {
    title: "Guide to Sacred Pilgrimage Sites",
    description: "A complete guide to Japan's four great pilgrimages.",
    url: `${SITE_URL}/en/reijo`,
    type: "website",
  },
};

const pilgrimages = [
  {
    slug: "ohenro",
    title: "Shikoku 88 Temples",
    titleJa: "四国八十八箇所",
    subtitle: "Ohenro Pilgrimage",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=640&q=80",
    temples: 88,
    distance: "Approx. 1,200 km",
    area: "4 prefectures of Shikoku (Tokushima, Kochi, Ehime, Kagawa)",
    founder: "Kobo Daishi Kukai",
    desc: "Japan's largest pilgrimage route, visiting 88 temples associated with Kobo Daishi Kukai. With the spirit of 'dogyou ninin' (walking together with Kukai), this pilgrimage has a history of over 1,200 years.",
    color: "var(--color-shrine)",
  },
  {
    slug: "saigoku",
    title: "Saigoku 33 Temples",
    titleJa: "西国三十三所",
    subtitle: "Japan's Oldest Pilgrimage Route",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=640&q=80",
    temples: 33,
    distance: "Approx. 1,000 km",
    area: "Kinki region (2 prefectures, 4 provinces) + Gifu",
    founder: "Priest Tokudo (revived by Emperor Kazan)",
    desc: "Japan's oldest pilgrimage route, founded in 718. Pilgrims visit 33 Kannon sacred sites, praying for paradise. This route has approximately 1,300 years of history.",
    color: "var(--color-gold)",
  },
  {
    slug: "bando",
    title: "Bando 33 Temples",
    titleJa: "坂東三十三観音",
    subtitle: "Kannon Pilgrimage of Kanto",
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=640&q=80",
    temples: 33,
    distance: "Approx. 1,300 km",
    area: "Kanto region (1 metropolis, 6 prefectures)",
    founder: "Inspired by Minamoto no Yoritomo's devotion to Kannon",
    desc: "Founded in the Kamakura period, inspired by Minamoto no Yoritomo's deep devotion to Kannon. The route visits renowned temples across the Kanto region, including Kamakura, Nikko, Tsukuba, and Boso.",
    color: "var(--color-temple)",
  },
  {
    slug: "chichibu",
    title: "Chichibu 34 Temples",
    titleJa: "秩父三十四箇所",
    subtitle: "Completing the 100 Kannon",
    image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=640&q=80",
    temples: 34,
    distance: "Approx. 100 km",
    area: "Chichibu area, Saitama Prefecture",
    founder: "Founded in 1234",
    desc: "34 Kannon sacred sites concentrated in the Chichibu area. Together with Saigoku and Bando, they form the '100 Kannon of Japan,' making Chichibu the final destination to complete the full 100 Kannon pilgrimage.",
    color: "var(--color-shrine)",
  },
];

export default function ReijoEnPage() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Guide to Sacred Pilgrimage Sites",
          description: "A complete guide to Japan's four great pilgrimages",
          url: `${SITE_URL}/en/reijo`,
          inLanguage: "en",
          publisher: { "@type": "Organization", name: SITE_NAME },
        }}
      />

      {/* Hero */}
      <section className="relative h-[380px] sm:h-[440px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=1400&q=80"
          alt="Sacred pilgrimage sites in Japan"
          fill
          className="object-cover brightness-[0.5]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[var(--color-background)]" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.4em] uppercase text-[var(--color-gold)] drop-shadow">
            Sacred Pilgrimage
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white drop-shadow-lg">
            Guide to <span className="text-gradient">Sacred Pilgrimage Sites</span>
          </h1>
          <p className="mt-4 max-w-lg text-base text-white/70 drop-shadow">
            Shikoku, Saigoku, Bando &amp; Chichibu — A complete guide to Japan&apos;s four great pilgrimages
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <Breadcrumb items={[{ label: "Home", href: "/en" }, { label: "Sacred Pilgrimage Sites" }]} />

        {/* Language Switch */}
        <div className="mt-4 flex justify-end">
          <Link
            href="/reijo"
            className="text-sm text-gray-500 hover:text-[var(--color-gold)] transition-colors"
          >
            🇯🇵 日本語
          </Link>
        </div>

        {/* What is the 100 Kannon Pilgrimage? */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">What is the 100 Kannon Pilgrimage?</h2>
          <p className="text-[var(--color-muted)] leading-relaxed">
            Saigoku 33 Temples (33) + Bando 33 Temples (33) + Chichibu 34 Temples (34) = a total of 100 sites,
            collectively known as the &quot;100 Kannon of Japan&quot; (Nihon Hyaku Kannon).
            Completing all of them is called &quot;Hyaku Kannon Mangan&quot; (fulfillment of the 100 Kannon pilgrimage),
            which is said to bring the highest spiritual merit.
            While the Shikoku 88 Temples is an independent Shingon Buddhist pilgrimage, it is presented here together
            as one of Japan&apos;s four great pilgrimages.
          </p>
        </section>

        {/* Four Great Pilgrimages Cards */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-8">The Four Great Pilgrimages</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {pilgrimages.map((p) => (
              <Link
                key={p.slug}
                href={`/en/${p.slug}`}
                className="group block overflow-hidden rounded-2xl bg-[var(--color-background-card)] border border-[var(--color-border)] hover:border-white/15 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 brightness-[0.7]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background-card)] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5">
                    <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: p.color }}>{p.subtitle}</p>
                    <h3 className="text-xl font-bold text-white drop-shadow mt-1">{p.title}</h3>
                    <p className="text-xs text-white/60 mt-0.5">{p.titleJa}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-[var(--color-muted)]">
                    <span>{p.temples} temples</span>
                    <span>•</span>
                    <span>{p.distance}</span>
                    <span>•</span>
                    <span>{p.area}</span>
                  </div>
                  <p className="mt-3 text-sm font-medium" style={{ color: p.color }}>
                    View detailed guide →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-6">Comparison of the Four Pilgrimages</h2>
          <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="px-4 py-3 text-left text-[var(--color-muted)] font-medium">Category</th>
                  <th className="px-4 py-3 text-left text-[var(--color-shrine)] font-bold">Shikoku</th>
                  <th className="px-4 py-3 text-left text-[var(--color-gold)] font-bold">Saigoku</th>
                  <th className="px-4 py-3 text-left text-[var(--color-temple)] font-bold">Bando</th>
                  <th className="px-4 py-3 text-left text-[var(--color-shrine)] font-bold">Chichibu</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {[
                  ["Number of temples", "88", "33", "33", "34"],
                  ["Total distance", "Approx. 1,200 km", "Approx. 1,000 km", "Approx. 1,300 km", "Approx. 100 km"],
                  ["Region", "4 Shikoku pref.", "Kinki + Gifu", "Kanto (7 pref.)", "Saitama (Chichibu)"],
                  ["Walking duration", "30–60 days", "30–40 days", "40–60 days", "5–7 days"],
                  ["By car", "8–12 days", "4–7 days", "5–10 days", "2–3 days"],
                  ["Est. cost (JPY)", "¥300k–500k", "¥80k–150k", "¥100k–200k", "¥50k–100k"],
                  ["Founded", "Heian period", "718 CE", "Kamakura period", "1234 CE"],
                  ["Sect", "Shingon", "Mixed sects", "Mixed sects", "Mixed sects"],
                ].map(([item, shikoku, saigoku, bando, chichibu]) => (
                  <tr key={item} className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-2.5 font-medium text-[var(--color-foreground)]">{item}</td>
                    <td className="px-4 py-2.5 text-[var(--color-muted)]">{shikoku}</td>
                    <td className="px-4 py-2.5 text-[var(--color-muted)]">{saigoku}</td>
                    <td className="px-4 py-2.5 text-[var(--color-muted)]">{bando}</td>
                    <td className="px-4 py-2.5 text-[var(--color-muted)]">{chichibu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Related Links */}
        <section className="mt-16 text-center">
          <p className="text-[var(--color-muted)] mb-4">Learn the proper etiquette for visiting shrines and temples</p>
          <Link
            href="/en/sanpai-manner"
            className="group relative inline-block rounded-full px-8 py-3.5 text-sm font-bold overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-shrine)] to-[var(--color-gold)] opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="relative text-white">Worship Etiquette Guide</span>
          </Link>
        </section>
      </div>
    </div>
  );
}
