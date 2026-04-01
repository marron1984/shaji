import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Card from "@/components/ui/Card";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";
import { getAllKojikiStories } from "@/data/kojiki-data";

export const metadata: Metadata = {
  title: "Kojiki Mythology | From the Creation of Japan to Emperor Jimmu",
  description:
    "Explore the myths of the Kojiki, Japan's oldest historical text. Twelve epic tales from the creation of heaven and earth to the legendary first emperor, with related shrine information.",
  keywords: [
    "Kojiki",
    "Japanese mythology",
    "Amaterasu",
    "Susanoo",
    "Okuninushi",
    "Izanagi",
    "Izanami",
    "Ama-no-Iwato",
    "Yamata no Orochi",
    "Tenson Korin",
    "Emperor Jimmu",
  ],
  alternates: {
    canonical: `${SITE_URL}/en/kojiki`,
    languages: { ja: `${SITE_URL}/kojiki`, en: `${SITE_URL}/en/kojiki` },
  },
  openGraph: {
    title: "Kojiki Mythology | From the Creation of Japan to Emperor Jimmu",
    description:
      "Twelve mythological tales from the Kojiki with related shrine information.",
    url: `${SITE_URL}/en/kojiki`,
    type: "article",
  },
};

const stories = getAllKojikiStories();

const kamiyoStories = stories.filter((s) => s.era === "kamiyo");
const chuukanStories = stories.filter((s) => s.era === "chuukan");

/** English era labels */
const eraLabelEn: Record<string, string> = {
  "上巻（神代）": "Volume 1 (Age of the Gods)",
  "中巻": "Volume 2",
};

function getEraLabelEn(label: string) {
  return eraLabelEn[label] ?? label;
}

export default function KojikiEnPage() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Kojiki Mythology",
          description:
            "Twelve mythological tales from the Kojiki with related shrine information",
          url: `${SITE_URL}/en/kojiki`,
          inLanguage: "en",
          publisher: { "@type": "Organization", name: SITE_NAME },
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: stories.length,
            itemListElement: stories.map((s) => ({
              "@type": "ListItem",
              position: s.num,
              name: s.title,
              url: `${SITE_URL}/en/kojiki/${s.slug}`,
            })),
          },
        }}
      />

      {/* Hero */}
      <section className="relative h-[380px] sm:h-[440px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=1400&q=80"
          alt="The mythological world of the Kojiki"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[var(--color-background)]" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <p className="mb-3 text-xs font-semibold tracking-[0.4em] uppercase text-[var(--color-gold)]">
            Kojiki Mythology
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Myths of the{" "}
            <span className="text-gradient">Kojiki</span>
          </h1>
          <p className="mt-4 max-w-lg text-base text-white/60">
            From the dawn of heaven and earth to the founding of Japan &mdash; twelve epic tales from the nation&apos;s oldest chronicle
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Language Switch */}
        <div className="flex justify-end mb-4">
          <Link
            href="/kojiki"
            className="text-sm text-gray-500 hover:text-[var(--color-gold)] transition-colors"
          >
            🇯🇵 日本語
          </Link>
        </div>

        <Breadcrumb
          items={[
            { label: "Home", href: "/en" },
            { label: "Kojiki Mythology" },
          ]}
        />

        {/* About the Kojiki */}
        <section className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">📜</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              What is the Kojiki?
            </h2>
          </div>
          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
            <p>
              The Kojiki (古事記, &ldquo;Record of Ancient Matters&rdquo;) is Japan&apos;s oldest surviving historical text, compiled in 712 CE by O no Yasumaro at the command of Emperor Tenmu. It records myths, legends, and songs memorized by Hieda no Are, and is organized into three volumes.
            </p>
            <p>
              Spanning from the creation of the universe to the reign of the first emperor, Jimmu, it is a grand epic that forms the spiritual foundation of Japanese culture &mdash; its view of nature, life, and death. The deities who appear in these stories are still enshrined at shrines across Japan today.
            </p>
          </div>
        </section>

        {/* Table of Contents */}
        <Card className="mt-10">
          <div className="p-6">
            <h2 className="text-lg font-bold text-[var(--color-foreground)] mb-4">
              📋 All {stories.length} Mythological Tales
            </h2>
            <nav className="space-y-2">
              {stories.map((s) => (
                <a
                  key={s.slug}
                  href={`#story-${s.num}`}
                  className="block text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors pl-2"
                >
                  {s.emoji} Tale {s.num}: {s.title}({s.subtitle})
                </a>
              ))}
            </nav>
          </div>
        </Card>

        {/* Volume 1 — Age of the Gods */}
        <section className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🌅</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              Volume 1 (Kamiyo) &mdash; The Age of the Gods
            </h2>
          </div>
          <p className="text-[var(--color-muted)] leading-relaxed mb-8">
            From the beginning of heaven and earth, through Izanagi and Izanami&apos;s creation of the land, Amaterasu&apos;s retreat into the cave, Susanoo&apos;s heroic exploits, to Okuninushi&apos;s nation-building &mdash; the grand saga of how Japan and its gods were born.
          </p>
          <div className="space-y-4">
            {kamiyoStories.map((s) => (
              <div key={s.slug} id={`story-${s.num}`}>
                <Link href={`/en/kojiki/${s.slug}`}>
                  <Card>
                    <div className="p-5 flex gap-4">
                      <span className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg"
                        style={{ background: "var(--color-gold-light)", border: "1px solid var(--color-gold)" }}>
                        {s.emoji}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium text-[var(--color-gold)]">
                            Tale {s.num}
                          </span>
                          <span className="text-xs text-[var(--color-muted)]">
                            {getEraLabelEn(s.eraLabel)}
                          </span>
                        </div>
                        <h3 className="font-bold text-[var(--color-foreground)]">
                          {s.title}
                          <span className="ml-2 text-sm font-normal text-[var(--color-muted)]">
                            {s.subtitle}
                          </span>
                        </h3>
                        <p className="mt-1 text-sm text-[var(--color-muted)] leading-relaxed line-clamp-2">
                          {s.summary}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {s.deities.slice(0, 3).map((d) => (
                            <span
                              key={d.name}
                              className="inline-block rounded-full bg-white/5 border border-[var(--color-border)] px-2 py-0.5 text-xs text-[var(--color-muted)]"
                            >
                              {d.name.split("（")[0]}
                            </span>
                          ))}
                          {s.deities.length > 3 && (
                            <span className="text-xs text-[var(--color-muted)]">
                              +{s.deities.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Volume 2 — From Heavenly Gods to Earthly Kings */}
        <section className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">⚔️</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              Volume 2 &mdash; From Heavenly Gods to Earthly Kings
            </h2>
          </div>
          <p className="text-[var(--color-muted)] leading-relaxed mb-8">
            After the transfer of the land, the heavenly grandson Ninigi descends to Takachiho. Through the tale of the Sea and Mountain brothers, the story reaches the founding of the Yamato dynasty by Japan&apos;s first emperor, Jimmu.
          </p>
          <div className="space-y-4">
            {chuukanStories.map((s) => (
              <div key={s.slug} id={`story-${s.num}`}>
                <Link href={`/en/kojiki/${s.slug}`}>
                  <Card>
                    <div className="p-5 flex gap-4">
                      <span className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg"
                        style={{ background: "var(--color-shrine-light)", border: "1px solid var(--color-shrine)" }}>
                        {s.emoji}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium text-[var(--color-shrine)]">
                            Tale {s.num}
                          </span>
                          <span className="text-xs text-[var(--color-muted)]">
                            {getEraLabelEn(s.eraLabel)}
                          </span>
                        </div>
                        <h3 className="font-bold text-[var(--color-foreground)]">
                          {s.title}
                          <span className="ml-2 text-sm font-normal text-[var(--color-muted)]">
                            {s.subtitle}
                          </span>
                        </h3>
                        <p className="mt-1 text-sm text-[var(--color-muted)] leading-relaxed line-clamp-2">
                          {s.summary}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {s.deities.slice(0, 3).map((d) => (
                            <span
                              key={d.name}
                              className="inline-block rounded-full bg-white/5 border border-[var(--color-border)] px-2 py-0.5 text-xs text-[var(--color-muted)]"
                            >
                              {d.name.split("（")[0]}
                            </span>
                          ))}
                          {s.deities.length > 3 && (
                            <span className="text-xs text-[var(--color-muted)]">
                              +{s.deities.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Related Shrines */}
        <section className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">⛩️</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              Major Shrines Connected to the Kojiki
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "Ise Jingu", nameJa: "伊勢神宮", deity: "Amaterasu", pref: "Mie" },
              { name: "Izumo Taisha", nameJa: "出雲大社", deity: "Okuninushi", pref: "Shimane" },
              { name: "Atsuta Jingu", nameJa: "熱田神宮", deity: "Kusanagi Sword", pref: "Aichi" },
              { name: "Sumiyoshi Taisha", nameJa: "住吉大社", deity: "Sumiyoshi Sanjin", pref: "Osaka" },
              { name: "Kashima Jingu", nameJa: "鹿島神宮", deity: "Takemikazuchi", pref: "Ibaraki" },
              { name: "Suwa Taisha", nameJa: "諏訪大社", deity: "Takeminakata", pref: "Nagano" },
              { name: "Kirishima Jingu", nameJa: "霧島神宮", deity: "Ninigi no Mikoto", pref: "Kagoshima" },
              { name: "Kashihara Jingu", nameJa: "橿原神宮", deity: "Emperor Jimmu", pref: "Nara" },
            ].map((shrine) => (
              <Card key={shrine.name}>
                <div className="p-4">
                  <h3 className="font-bold text-[var(--color-foreground)]">
                    {shrine.name}
                  </h3>
                  <p className="text-xs text-[var(--color-muted)] mt-0.5">
                    {shrine.nameJa}
                  </p>
                  <p className="text-xs text-[var(--color-muted)] mt-1">
                    {shrine.pref} | {shrine.deity}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-[var(--color-muted)] mb-4">
            Explore more of Japanese culture
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/en/shrines"
              className="group relative rounded-full px-8 py-3.5 text-sm font-bold overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-shrine)] to-[var(--color-gold)] opacity-90 group-hover:opacity-100 transition-opacity" />
              <span className="relative text-white">Shrines &amp; Temples</span>
            </Link>
            <Link
              href="/en/guide"
              className="rounded-full border border-[var(--color-border)] px-8 py-3.5 text-sm font-bold text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:border-[var(--color-gold)]/40 transition-all"
            >
              Good Fortune Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
