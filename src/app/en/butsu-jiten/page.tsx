import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";
import {
  getAllButsuDeities,
  getButsuByCategory,
  BUTSU_CATEGORIES,
} from "@/data/butsu-data";

const categoryNameEn: Record<string, string> = {
  nyorai: "Nyorai (Tathagata)",
  bosatsu: "Bosatsu (Bodhisattva)",
  myoo: "Myoo (Wisdom Kings)",
  tenbu: "Tenbu (Heavenly Beings)",
};

const categoryDescEn: Record<string, string> = {
  nyorai: "Fully enlightened Buddhas of the highest rank",
  bosatsu: "Compassionate beings who practice to save all sentient beings",
  myoo: "Wrathful protectors who destroy worldly desires",
  tenbu: "Heavenly deities who guard the Buddhist dharma",
};

export const metadata: Metadata = {
  title: "Buddhist Deity Encyclopedia | Nyorai, Bosatsu, Myoo & Tenbu",
  description:
    "A comprehensive guide to Buddhist deities in Japanese Buddhism. Learn about Nyorai (Tathagata), Bosatsu (Bodhisattva), Myoo (Wisdom Kings), and Tenbu (Heavenly Beings) — their iconography, benefits, mantras, and famous temples.",
  keywords: [
    "Buddhist deities",
    "Japanese Buddhism",
    "Nyorai",
    "Bosatsu",
    "Myoo",
    "Tenbu",
    "Tathagata",
    "Bodhisattva",
    "Wisdom Kings",
    "Fudo Myoo",
    "Amida",
    "Kannon",
  ],
  alternates: {
    canonical: `${SITE_URL}/en/butsu-jiten`,
    languages: {
      ja: `${SITE_URL}/butsu-jiten`,
      en: `${SITE_URL}/en/butsu-jiten`,
    },
  },
  openGraph: {
    title: "Buddhist Deity Encyclopedia | Nyorai, Bosatsu, Myoo & Tenbu",
    description:
      "A comprehensive guide to Buddhist deities in Japanese Buddhism. Iconography, benefits, mantras & famous temples.",
    url: `${SITE_URL}/en/butsu-jiten`,
    type: "article",
    locale: "en_US",
  },
};

const categoryVariant = {
  nyorai: "gold",
  bosatsu: "temple",
  myoo: "shrine",
  tenbu: "gray",
} as const;

export default function ButsuJitenEnPage() {
  const allDeities = getAllButsuDeities();

  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Buddhist Deity Encyclopedia",
          description:
            "A comprehensive encyclopedia of Buddhist deities in Japanese Buddhism",
          url: `${SITE_URL}/en/butsu-jiten`,
          inLanguage: "en",
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: allDeities.length,
            itemListElement: allDeities.map((d, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: d.name,
              url: `${SITE_URL}/en/butsu-jiten/${d.slug}`,
            })),
          },
        }}
      />

      {/* Hero */}
      <section className="relative h-[380px] sm:h-[440px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-temple)]/20 via-black/60 to-[var(--color-background)]" />
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <span className="text-[300px] select-none">☸</span>
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <p className="mb-3 text-xs font-semibold tracking-[0.4em] uppercase text-[var(--color-gold)]">
            Buddhist Deity Encyclopedia
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="text-gradient">Buddhist Deities</span>
          </h1>
          <p className="mt-4 max-w-lg text-base text-white/60">
            Nyorai, Bosatsu, Myoo &amp; Tenbu — A complete guide to the deities
            of Japanese Buddhism
          </p>
          <p className="mt-2 text-sm text-white/40">
            {allDeities.length} deities catalogued
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb
          items={[
            { label: "Home", href: "/en" },
            { label: "Buddhist Deity Encyclopedia" },
          ]}
        />

        {/* Language Switch */}
        <div className="mt-4 flex justify-center">
          <Link
            href="/butsu-jiten"
            className="text-sm text-gray-500 hover:text-[var(--color-gold)] transition-colors"
          >
            🇯🇵 日本語
          </Link>
        </div>

        {/* Introduction */}
        <section className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">☸</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              What Are Buddhist Deities?
            </h2>
          </div>
          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
            <p>
              When visiting a temple in Japan, you may have placed your hands
              together before a statue enshrined in the main hall. But do you
              know what kind of being that deity is or what blessings it
              bestows?
            </p>
            <p>
              Buddhism features a rich pantheon of deities, broadly divided into
              four ranks: <strong>Nyorai</strong> (Tathagata) — fully
              enlightened Buddhas of the highest rank;{" "}
              <strong>Bosatsu</strong> (Bodhisattva) — compassionate beings who
              practice to save all sentient beings; <strong>Myoo</strong>{" "}
              (Wisdom Kings) — wrathful protectors who destroy worldly desires;
              and <strong>Tenbu</strong> (Heavenly Beings) — heavenly deities
              who guard the Buddhist dharma. Each has a distinctive appearance
              and unique blessings to offer.
            </p>
            <p>
              This encyclopedia introduces the major deities you can encounter
              at temples across Japan. It covers their iconography, spiritual
              benefits, mantras, and associated temples — a perfect companion
              for your temple pilgrimage.
            </p>
          </div>
        </section>

        {/* Four Categories */}
        <section className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">📖</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              The Four Ranks of Buddhist Deities
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {BUTSU_CATEGORIES.map((cat) => (
              <Card key={cat.key}>
                <a href={`#${cat.key}`} className="block p-5 group">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{cat.emoji}</span>
                    <h3 className="text-lg font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-gold)] transition-colors">
                      {categoryNameEn[cat.key]}
                    </h3>
                    <span className="ml-auto text-xs text-[var(--color-muted)]">
                      {getButsuByCategory(cat.key).length} deities
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-muted)]">
                    {categoryDescEn[cat.key]}
                  </p>
                </a>
              </Card>
            ))}
          </div>
        </section>

        {/* Category Lists */}
        {BUTSU_CATEGORIES.map((cat) => {
          const deities = getButsuByCategory(cat.key);
          if (deities.length === 0) return null;
          return (
            <section key={cat.key} id={cat.key} className="mt-20">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">{cat.emoji}</span>
                <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
                  {categoryNameEn[cat.key]}
                </h2>
                <span className="text-sm text-[var(--color-muted)]">
                  ({deities.length} deities)
                </span>
              </div>
              <div className="space-y-4">
                {deities.map((deity) => (
                  <Link
                    key={deity.slug}
                    href={`/en/butsu-jiten/${deity.slug}`}
                  >
                    <Card>
                      <div className="p-5 flex gap-4 group">
                        <span className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl bg-[var(--color-background-elevated)]">
                          {deity.emoji}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-gold)] transition-colors">
                              {deity.name}
                            </h3>
                            <Tag
                              label={deity.categoryLabel}
                              variant={categoryVariant[deity.category]}
                            />
                          </div>
                          <p className="text-xs text-[var(--color-temple)] mb-1">
                            {deity.yomikata} · {deity.sanskrit}
                          </p>
                          <p className="text-sm text-[var(--color-muted)] line-clamp-2">
                            {deity.summary}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-[var(--color-muted)] mb-4">
            Learn about the deities and enrich your temple visits
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/en/temples"
              className="group relative rounded-full px-8 py-3.5 text-sm font-bold overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-temple)] to-[var(--color-gold)] opacity-90 group-hover:opacity-100 transition-opacity" />
              <span className="relative text-white">Search Temples</span>
            </Link>
            <Link
              href="/en/sanpai-manner"
              className="rounded-full border border-[var(--color-border)] px-8 py-3.5 text-sm font-bold text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:border-[var(--color-gold)]/40 transition-all"
            >
              Temple Visit Etiquette
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
