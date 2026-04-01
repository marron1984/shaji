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

  const url = `${SITE_URL}/butsu-jiten/${slug}`;
  const title = `${deity.name}（${deity.yomikata}）- 仏様辞典｜${SITE_NAME}`;

  return {
    title,
    description: deity.summary,
    keywords: deity.keywords,
    alternates: {
      canonical: url,
      languages: { ja: `${SITE_URL}/butsu-jiten/${slug}`, en: `${SITE_URL}/en/butsu-jiten/${slug}` },
    },
    openGraph: {
      type: "article",
      title: `${deity.name} - 仏様辞典`,
      description: deity.summary,
      url,
      siteName: SITE_NAME,
      locale: "ja_JP",
    },
  };
}

const categoryVariant: Record<string, "gold" | "shrine" | "temple" | "gray"> = {
  nyorai: "gold",
  bosatsu: "temple",
  myoo: "shrine",
  tenbu: "gray",
};

export default async function ButsuDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const deity = getButsuDeity(slug);
  if (!deity) notFound();

  const all = getAllButsuDeities();
  const idx = all.findIndex((d) => d.slug === slug);
  const prev = idx > 0 ? all[idx - 1] : undefined;
  const next = idx < all.length - 1 ? all[idx + 1] : undefined;

  const url = `${SITE_URL}/butsu-jiten/${slug}`;

  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          name: deity.name,
          headline: `${deity.name}（${deity.yomikata}）- 仏様辞典`,
          description: deity.summary,
          url,
          publisher: { "@type": "Organization", name: SITE_NAME },
          mainEntityOfPage: url,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "仏様辞典", item: `${SITE_URL}/butsu-jiten` },
            { "@type": "ListItem", position: 3, name: deity.name },
          ],
        }}
      />

      {/* ヒーロー */}
      <section className="relative h-[280px] sm:h-[340px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-temple)]/30 via-black/50 to-[var(--color-background)]" />
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <span className="text-[200px] select-none">{deity.emoji}</span>
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <p className="mb-2 text-xs font-semibold tracking-[0.3em] uppercase text-[var(--color-gold)]">
            {deity.categoryLabel}・{deity.sanskrit}
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
            { label: "ホーム", href: "/" },
            { label: "仏様辞典", href: "/butsu-jiten" },
            { label: deity.name },
          ]}
        />

        {/* タグ + サマリー */}
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-2">
            <Tag label={deity.categoryLabel} variant={categoryVariant[deity.category]} />
            <Tag label={deity.sanskrit} variant="gray" />
          </div>
          <p className="mt-3 text-[var(--color-muted)] leading-relaxed">
            {deity.summary}
          </p>
        </div>

        {/* 目次 */}
        <Card className="mt-8">
          <div className="p-5">
            <h2 className="text-sm font-bold text-[var(--color-foreground)] mb-3">
              📋 目次
            </h2>
            <nav className="space-y-1.5">
              {[
                { href: "#description", label: "解説" },
                { href: "#iconography", label: "お姿の特徴" },
                { href: "#goriyaku", label: "ご利益" },
                { href: "#mantras", label: "真言" },
                { href: "#temples", label: "代表的な寺院" },
                { href: "#related", label: "関連する仏様" },
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
          {/* 解説 */}
          <div id="description">
            <SectionHeading>解説</SectionHeading>
            <div className="mt-4 text-[var(--color-muted)] leading-relaxed whitespace-pre-line">
              {deity.description}
            </div>
          </div>

          {/* お姿の特徴 */}
          <div id="iconography">
            <SectionHeading>お姿の特徴</SectionHeading>
            <Card className="mt-4">
              <div className="p-5 flex gap-4">
                <span className="shrink-0 text-4xl">{deity.emoji}</span>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  {deity.iconography}
                </p>
              </div>
            </Card>
          </div>

          {/* ご利益 */}
          <div id="goriyaku">
            <SectionHeading>ご利益</SectionHeading>
            <div className="mt-4 rounded-xl bg-[var(--color-gold-light)] border border-[var(--color-gold)]/20 px-5 py-4">
              <p className="text-sm text-[var(--color-gold)]">
                <span className="font-bold">🙏 ご利益：</span>
                {deity.goriyaku}
              </p>
            </div>
          </div>

          {/* 真言 */}
          <div id="mantras">
            <SectionHeading>真言</SectionHeading>
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

          {/* 代表的な寺院 */}
          <div id="temples">
            <SectionHeading>代表的な寺院</SectionHeading>
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

          {/* 関連する仏様 */}
          <div id="related">
            <SectionHeading>関連する仏様</SectionHeading>
            <div className="mt-4 flex flex-wrap gap-2">
              {deity.relatedDeities.map((name) => {
                const related = all.find((d) => d.name === name);
                return related ? (
                  <Link
                    key={name}
                    href={`/butsu-jiten/${related.slug}`}
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

          {/* 前後ナビ */}
          <div className="flex items-center justify-between pt-6 border-t border-[var(--color-border)]">
            {prev ? (
              <Link
                href={`/butsu-jiten/${prev.slug}`}
                className="text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors"
              >
                ← {prev.name}
              </Link>
            ) : (
              <span />
            )}
            <Link
              href="/butsu-jiten"
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors"
            >
              一覧に戻る
            </Link>
            {next ? (
              <Link
                href={`/butsu-jiten/${next.slug}`}
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
