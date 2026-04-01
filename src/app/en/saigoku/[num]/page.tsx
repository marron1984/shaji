import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllSaigokuTemples, getSaigokuTemple } from "@/data/saigoku-data";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import SectionHeading from "@/components/ui/SectionHeading";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";

interface PageProps {
  params: Promise<{ num: string }>;
}

export async function generateStaticParams() {
  return getAllSaigokuTemples().map((t) => ({ num: String(t.num) }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { num } = await params;
  const temple = getSaigokuTemple(Number(num));
  if (!temple) return {};

  const url = `${SITE_URL}/en/saigoku/${num}`;
  const title = `#${temple.num} ${temple.name} - Saigoku 33 Kannon Pilgrimage`;
  const desc = `Visitor guide for Saigoku Pilgrimage temple #${temple.num}, ${temple.name}. Sect: ${temple.shuha}. Principal Image: ${temple.honzon}. ${temple.pref}.`;

  return {
    title,
    description: desc,
    keywords: [temple.name, "Saigoku Pilgrimage", "33 Kannon", temple.pref, temple.honzon, "pilgrimage", "goshuin"],
    alternates: {
      canonical: url,
      languages: {
        ja: `${SITE_URL}/saigoku/${num}`,
        en: url,
      },
    },
    openGraph: {
      type: "article",
      title: `#${temple.num} ${temple.name} - Saigoku Pilgrimage`,
      description: desc,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
    },
  };
}

export default async function EnglishSaigokuDetailPage({ params }: PageProps) {
  const { num } = await params;
  const temple = getSaigokuTemple(Number(num));
  if (!temple) notFound();

  const allTemples = getAllSaigokuTemples();
  const prev = allTemples.find((t) => t.num === temple.num - 1);
  const next = allTemples.find((t) => t.num === temple.num + 1);

  const url = `${SITE_URL}/en/saigoku/${num}`;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BuddhistTemple",
          name: temple.name,
          alternateName: `Saigoku Pilgrimage #${temple.num}`,
          description: temple.origin,
          address: {
            "@type": "PostalAddress",
            addressLocality: temple.pref,
            streetAddress: temple.address,
            addressCountry: "JP",
          },
          url,
          inLanguage: "en",
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en` },
            { "@type": "ListItem", position: 2, name: "Saigoku Pilgrimage", item: `${SITE_URL}/en/saigoku` },
            { "@type": "ListItem", position: 3, name: `#${temple.num} ${temple.name}` },
          ],
        }}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/en" },
          { label: "Saigoku Pilgrimage", href: "/en/saigoku" },
          { label: `#${temple.num} ${temple.name}` },
        ]}
      />

      {/* Language Switch */}
      <Link
        href={`/saigoku/${temple.num}`}
        className="mt-2 inline-block text-sm text-gray-400 hover:text-[var(--color-gold)]"
      >
        🇯🇵 日本語
      </Link>

      {/* Header */}
      <div className="mt-4">
        <div className="flex items-center gap-2 mb-2">
          <Tag label={`#${temple.num}`} variant="gold" />
          <Tag label={temple.shuha} variant="temple" />
        </div>
        <h1 className="text-3xl font-bold text-[var(--color-foreground)]">
          {temple.name}
        </h1>
        <p className="mt-1 text-[var(--color-muted)]">
          {temple.yomikata} | {temple.pref}
        </p>
        <p className="mt-1 text-sm text-[var(--color-gold)]">
          Principal Image: {temple.honzon}
        </p>
      </div>

      <div className="mt-8 space-y-8">
        {/* Origin & History */}
        <div>
          <SectionHeading>Origin &amp; History</SectionHeading>
          <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
            {temple.origin}
          </p>
        </div>

        {/* Spiritual Benefits */}
        <div>
          <SectionHeading>Spiritual Connection &amp; Benefits</SectionHeading>
          <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
            {temple.goen}
          </p>
        </div>

        {/* Notable Figures */}
        {temple.yukari.length > 0 && (
          <div>
            <SectionHeading>Notable Figures</SectionHeading>
            <ul className="mt-4 space-y-2">
              {temple.yukari.map((person, i) => (
                <li key={i} className="flex items-start gap-2 text-[var(--color-muted)]">
                  <span className="text-[var(--color-gold)] mt-0.5 shrink-0">◆</span>
                  <span>{person}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Fun Fact */}
        <div className="rounded-xl bg-[var(--color-gold-light)] border border-[var(--color-gold)]/20 px-5 py-4">
          <p className="text-sm text-[var(--color-gold)]">
            <span className="font-bold">Fun Fact: </span>
            {temple.trivia}
          </p>
        </div>

        {/* Visitor Information */}
        <Card>
          <div className="p-6">
            <h2 className="text-lg font-bold text-[var(--color-foreground)] mb-4">Visitor Information</h2>
            <dl className="space-y-3 text-sm">
              <div className="flex gap-2">
                <dt className="w-20 shrink-0 font-medium text-[var(--color-muted)]">Address</dt>
                <dd className="text-[var(--color-muted)]">{temple.address}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-20 shrink-0 font-medium text-[var(--color-muted)]">Access</dt>
                <dd className="text-[var(--color-muted)]">{temple.access}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-20 shrink-0 font-medium text-[var(--color-muted)]">Hours</dt>
                <dd className="text-[var(--color-muted)]">{temple.hours}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-20 shrink-0 font-medium text-[var(--color-muted)]">Admission</dt>
                <dd className="text-[var(--color-muted)]">{temple.admission}</dd>
              </div>
            </dl>
          </div>
        </Card>

        {/* Map */}
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(temple.name + " " + temple.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-temple)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity"
        >
          Open in Google Maps →
        </a>

        {/* Prev / Next Navigation */}
        <div className="flex items-center justify-between pt-6 border-t border-[var(--color-border)]">
          {prev ? (
            <Link href={`/en/saigoku/${prev.num}`} className="text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors">
              ← #{prev.num} {prev.name}
            </Link>
          ) : <span />}
          <Link href="/en/saigoku" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors">
            Back to List
          </Link>
          {next ? (
            <Link href={`/en/saigoku/${next.num}`} className="text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors">
              #{next.num} {next.name} →
            </Link>
          ) : <span />}
        </div>
      </div>
    </div>
  );
}
