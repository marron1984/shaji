import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllButsuDeities, getButsuDeity } from "@/data/butsu-data";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import SectionHeading from "@/components/ui/SectionHeading";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllButsuDeities().map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const deity = getButsuDeity(slug);
  if (!deity) return {};

  const url = `${SITE_URL}/en/butsu-jiten/${slug}`;
  const title = `${deity.name} (${deity.sanskrit}) - Buddhist Deity Encyclopedia | ${SITE_NAME}`;

  return {
    title,
    description: deity.summary,
    keywords: deity.keywords,
    alternates: {
      canonical: url,
      languages: {
        ja: `${SITE_URL}/butsu-jiten/${slug}`,
        en: url,
      },
    },
    openGraph: {
      type: "article",
      title: `${deity.name} (${deity.sanskrit}) - Buddhist Deity Encyclopedia`,
      description: deity.summary,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
    },
  };
}

const categoryVariant: Record<string, "gold" | "shrine" | "temple" | "gray"> = {
  nyorai: "gold",
  bosatsu: "temple",
  myoo: "shrine",
  tenbu: "gray",
};

export default async function ButsuDetailEnPage({ params }: PageProps) {
  const { slug } = await params;
  const deity = getButsuDeity(slug);
  if (!deity) notFound();

  const all = getAllButsuDeities();
  const idx = all.findIndex((d) => d.slug === slug);
  const prev = idx > 0 ? all[idx - 1] : undefined;
  const next = idx < all.length - 1 ? all[idx + 1] : undefined;

  const url = `${SITE_URL}/en/butsu-jiten/${slug}`;

  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          name: deity.name,
          headline: `${deity.name} (${deity.sanskrit}) - Buddhist Deity Encyclopedia`,
          description: deity.summary,
          url,
          inLanguage: "en",
          publisher: { "@type": "Organization", name: SITE_NAME },
          mainEntityOfPage: url,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en` },
            { "@type": "ListItem", position: 2, name: "Buddhist Deity Encyclopedia", item: `${SITE_URL}/en/butsu-jiten` },
            { "@type": "ListItem", position: 3, name: deity.name },
          ],
        }}
      />

      {/* Hero */}
      <section className="relative h-[280px] sm:h-[340px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-temple)]/30 via-black/50 to-[var(--color-background)]" />
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <span className="text-[200px] select-none">{deity.emoji}</span>
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <p className="mb-2 text-xs font-semibold tracking-[0.3em] uppercase text-[var(--color-gold)]">
            {deity.categoryLabel} · {deity.sanskrit}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            {deity.name}
          </h1>
          <p className="mt-2 text-lg text-white/60">{deity.yomikata}</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/en" },
            { label: "Buddhist Deity Encyclopedia", href: "/en/butsu-jiten" },
            { label: deity.name },
          ]}
        />

        {/* Language Switch */}
        <div className="mt-4 flex justify-center">
          <Link
            href={`/butsu-jiten/${slug}`}
            className="text-sm text-gray-500 hover:text-[var(--color-gold)] transition-colors"
          >
            🇯🇵 日本語
          </Link>
        </div>

        {/* Tags + Summary */}
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-2">
            <Tag label={deity.categoryLabel} variant={categoryVariant[deity.category]} />
            <Tag label={deity.sanskrit} variant="gray" />
          </div>
          <p className="mt-3 text-[var(--color-muted)] leading-relaxed">
            {deity.summary}
          </p>
        </div>

        {/* Table of Contents */}
        <Card className="mt-8">
          <div className="p-5">
            <h2 className="text-sm font-bold text-[var(--color-foreground)] mb-3">
              📋 Contents
            </h2>
            <nav className="space-y-1.5">
              {[
                { href: "#description", label: "Description" },
                { href: "#iconography", label: "Iconography" },
                { href: "#goriyaku", label: "Benefits" },
                { href: "#mantras", label: "Mantra" },
                { href: "#temples", label: "Famous Temples" },
                { href: "#related", label: "Related Deities" },
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

        <div className="mt-10 space-y-10">
          {/* Description */}
          <div id="description">
            <SectionHeading>Description</SectionHeading>
            <div className="mt-4 text-[var(--color-muted)] leading-relaxed whitespace-pre-line">
              {deity.description}
            </div>
          </div>

          {/* Iconography */}
          <div id="iconography">
            <SectionHeading>Iconography</SectionHeading>
            <Card className="mt-4">
              <div className="p-5 flex gap-4">
                <span className="shrink-0 text-4xl">{deity.emoji}</span>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  {deity.iconography}
                </p>
              </div>
            </Card>
          </div>

          {/* Benefits */}
          <div id="goriyaku">
            <SectionHeading>Benefits</SectionHeading>
            <div className="mt-4 rounded-xl bg-[var(--color-gold-light)] border border-[var(--color-gold)]/20 px-5 py-4">
              <p className="text-sm text-[var(--color-gold)]">
                <span className="font-bold">🙏 Spiritual Benefits: </span>
                {deity.goriyaku}
              </p>
            </div>
          </div>

          {/* Mantra */}
          <div id="mantras">
            <SectionHeading>Mantra</SectionHeading>
            <div className="mt-4 space-y-3">
              {deity.mantras.map((mantra, i) => (
                <Card key={i}>
                  <div className="p-4 text-center">
                    <p className="text-lg font-bold text-[var(--color-foreground)] tracking-wider">
                      {mantra}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Famous Temples */}
          <div id="temples">
            <SectionHeading>Famous Temples</SectionHeading>
            <div className="mt-4 space-y-3">
              {deity.famousTemples.map((temple, i) => (
                <Card key={i}>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-[var(--color-foreground)]">
                        🏛️ {temple.name}
                      </h3>
                    </div>
                    <p className="text-xs text-[var(--color-temple)]">
                      {temple.location}
                    </p>
                    <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">
                      {temple.note}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Related Deities */}
          <div id="related">
            <SectionHeading>Related Deities</SectionHeading>
            <div className="mt-4 flex flex-wrap gap-2">
              {deity.relatedDeities.map((name) => {
                const related = all.find((d) => d.name === name);
                return related ? (
                  <Link
                    key={name}
                    href={`/en/butsu-jiten/${related.slug}`}
                    className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] hover:border-[var(--color-gold)]/40 transition-all"
                  >
                    {name}
                  </Link>
                ) : (
                  <span
                    key={name}
                    className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-muted)]"
                  >
                    {name}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Prev/Next Navigation */}
          <div className="flex items-center justify-between pt-6 border-t border-[var(--color-border)]">
            {prev ? (
              <Link
                href={`/en/butsu-jiten/${prev.slug}`}
                className="text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors"
              >
                ← {prev.name}
              </Link>
            ) : (
              <span />
            )}
            <Link
              href="/en/butsu-jiten"
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors"
            >
              Back to List
            </Link>
            {next ? (
              <Link
                href={`/en/butsu-jiten/${next.slug}`}
                className="text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors"
              >
                {next.name} →
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
