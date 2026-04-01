import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllKojikiStories, getKojikiStory } from "@/data/kojiki-data";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import SectionHeading from "@/components/ui/SectionHeading";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllKojikiStories().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getKojikiStory(slug);
  if (!story) return {};

  const url = `${SITE_URL}/en/kojiki/${slug}`;
  const title = `${story.title} (${story.subtitle}) - Kojiki Mythology`;
  const desc = story.summary;

  return {
    title,
    description: desc,
    keywords: story.keywords,
    alternates: {
      canonical: url,
      languages: {
        ja: `${SITE_URL}/kojiki/${slug}`,
        en: url,
      },
    },
    openGraph: {
      type: "article",
      title: `${story.title} - Kojiki Mythology`,
      description: desc,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
    },
  };
}

export default async function KojikiDetailEnPage({ params }: PageProps) {
  const { slug } = await params;
  const story = getKojikiStory(slug);
  if (!story) notFound();

  const allStories = getAllKojikiStories();
  const prev = allStories.find((s) => s.num === story.num - 1);
  const next = allStories.find((s) => s.num === story.num + 1);

  const url = `${SITE_URL}/en/kojiki/${slug}`;

  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          name: story.title,
          headline: `${story.title} (${story.subtitle}) - Kojiki Mythology`,
          description: story.summary,
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
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: `${SITE_URL}/en`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Kojiki Mythology",
              item: `${SITE_URL}/en/kojiki`,
            },
            { "@type": "ListItem", position: 3, name: story.title },
          ],
        }}
      />

      {/* Hero */}
      <section className="relative h-[320px] sm:h-[380px] overflow-hidden">
        <Image
          src={story.heroImage}
          alt={story.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[var(--color-background)]" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <p className="mb-2 text-xs font-semibold tracking-[0.3em] uppercase text-[var(--color-gold)]">
            Kojiki &mdash; Tale {story.num}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            {story.title}
          </h1>
          <p className="mt-2 text-lg text-white/60">{story.subtitle}</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Language Switch */}
        <div className="flex justify-end mb-4">
          <Link
            href={`/kojiki/${slug}`}
            className="text-sm text-gray-500 hover:text-[var(--color-gold)] transition-colors"
          >
            🇯🇵 日本語
          </Link>
        </div>

        <Breadcrumb
          items={[
            { label: "Home", href: "/en" },
            { label: "Kojiki Mythology", href: "/en/kojiki" },
            { label: story.title },
          ]}
        />

        {/* Header */}
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-2">
            <Tag label={`Tale ${story.num}`} variant="gold" />
            <Tag
              label={
                story.era === "kamiyo"
                  ? "Age of the Gods"
                  : story.era === "chuukan"
                    ? "Middle Volume"
                    : "Later Volume"
              }
              variant={story.era === "kamiyo" ? "shrine" : "temple"}
            />
          </div>
          <p className="mt-3 text-[var(--color-muted)] leading-relaxed">
            {story.summary}
          </p>
        </div>

        {/* Table of Contents */}
        <Card className="mt-8">
          <div className="p-5">
            <h2 className="text-sm font-bold text-[var(--color-foreground)] mb-3">
              📋 Story Outline
            </h2>
            <nav className="space-y-1.5">
              {story.sections.map((sec, i) => (
                <a
                  key={i}
                  href={`#section-${i}`}
                  className="block text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors pl-2"
                >
                  {i + 1}. {sec.heading}
                </a>
              ))}
            </nav>
          </div>
        </Card>

        <div className="mt-10 space-y-10">
          {/* Story Sections */}
          {story.sections.map((sec, i) => (
            <div key={i} id={`section-${i}`}>
              <SectionHeading>{sec.heading}</SectionHeading>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed whitespace-pre-line">
                {sec.body}
              </p>
            </div>
          ))}

          {/* Trivia */}
          <div className="rounded-xl bg-[var(--color-gold-light)] border border-[var(--color-gold)]/20 px-5 py-4">
            <p className="text-sm text-[var(--color-gold)]">
              <span className="font-bold">💡 Did you know: </span>
              {story.trivia}
            </p>
          </div>

          {/* Deities */}
          <div>
            <SectionHeading>Deities in This Tale</SectionHeading>
            <div className="mt-4 space-y-3">
              {story.deities.map((d, i) => (
                <Card key={i}>
                  <div className="p-4 flex gap-3">
                    <span
                      className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-black"
                      style={{ background: "var(--color-gold)" }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-[var(--color-foreground)]">
                        {d.name}
                      </h3>
                      <p className="mt-0.5 text-sm text-[var(--color-muted)]">
                        {d.role}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Related Shrines */}
          <div>
            <SectionHeading>Related Shrines</SectionHeading>
            <div className="mt-4 space-y-3">
              {story.relatedShrines.map((shrine, i) => (
                <Card key={i}>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-[var(--color-foreground)]">
                        ⛩️ {shrine.name}
                      </h3>
                    </div>
                    <p className="text-xs text-[var(--color-gold)]">
                      {shrine.location}
                    </p>
                    <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">
                      {shrine.connection}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Prev / Next Navigation */}
          <div className="flex items-center justify-between pt-6 border-t border-[var(--color-border)]">
            {prev ? (
              <Link
                href={`/en/kojiki/${prev.slug}`}
                className="text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors"
              >
                &larr; Tale {prev.num}: {prev.title}
              </Link>
            ) : (
              <span />
            )}
            <Link
              href="/en/kojiki"
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors"
            >
              Back to All Tales
            </Link>
            {next ? (
              <Link
                href={`/en/kojiki/${next.slug}`}
                className="text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors"
              >
                Tale {next.num}: {next.title} &rarr;
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
