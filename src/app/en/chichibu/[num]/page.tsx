import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllChichibuTemples, getChichibuTemple } from "@/data/chichibu-data";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import SectionHeading from "@/components/ui/SectionHeading";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";

interface PageProps {
  params: Promise<{ num: string }>;
}

export async function generateStaticParams() {
  return getAllChichibuTemples().map((t) => ({ num: String(t.num) }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { num } = await params;
  const temple = getChichibuTemple(Number(num));
  if (!temple) return {};
  const url = `${SITE_URL}/en/chichibu/${num}`;
  return {
    title: `#${temple.num} ${temple.name} - Chichibu 34 Kannon Pilgrimage`,
    description: `Visitor guide for Temple #${temple.num} ${temple.name} on the Chichibu 34 Kannon Pilgrimage. ${temple.shuha} sect. Principal image: ${temple.honzon}.`,
    keywords: [
      temple.name,
      "Chichibu pilgrimage",
      "Chichibu 34 Kannon",
      temple.honzon,
      "goshuin",
    ],
    alternates: {
      canonical: url,
      languages: {
        ja: `${SITE_URL}/chichibu/${num}`,
        en: url,
      },
    },
    openGraph: {
      type: "article",
      title: `#${temple.num} ${temple.name}`,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
    },
  };
}

export default async function ChichibuDetailPageEn({ params }: PageProps) {
  const { num } = await params;
  const temple = getChichibuTemple(Number(num));
  if (!temple) notFound();
  const allTemples = getAllChichibuTemples();
  const prev = allTemples.find((t) => t.num === temple.num - 1);
  const next = allTemples.find((t) => t.num === temple.num + 1);
  const url = `${SITE_URL}/en/chichibu/${num}`;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BuddhistTemple",
          name: temple.name,
          alternateName: `Chichibu 34 Kannon Pilgrimage #${temple.num}`,
          description: temple.origin,
          address: {
            "@type": "PostalAddress",
            streetAddress: temple.address,
            addressCountry: "JP",
          },
          url,
        }}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/en" },
          { label: "Chichibu 34 Kannon", href: "/en/chichibu" },
          { label: `#${temple.num} ${temple.name}` },
        ]}
      />

      <div className="mt-6">
        <div className="flex items-center gap-2 mb-2">
          <Tag label={`#${temple.num}`} variant="gold" />
          <Tag label={temple.shuha} variant="temple" />
        </div>
        <h1 className="text-3xl font-bold text-[var(--color-foreground)]">
          {temple.name}
        </h1>
        <p className="mt-1 text-[var(--color-muted)]">
          {temple.yomikata} | Saitama, Chichibu
        </p>
        <p className="mt-1 text-sm text-[var(--color-gold)]">
          Principal image: {temple.honzon}
        </p>
        <p className="mt-2">
          <Link
            href={`/chichibu/${temple.num}`}
            className="text-xs text-[var(--color-muted)] hover:text-[var(--color-gold)]"
          >
            🇯🇵 日本語で見る
          </Link>
        </p>
      </div>

      <div className="mt-8 space-y-8">
        <div>
          <SectionHeading>History &amp; Origin</SectionHeading>
          <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
            {temple.origin}
          </p>
        </div>

        <div>
          <SectionHeading>Blessings &amp; Benefits</SectionHeading>
          <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
            {temple.goen}
          </p>
        </div>

        {temple.yukari.length > 0 && (
          <div>
            <SectionHeading>Notable Figures</SectionHeading>
            <ul className="mt-4 space-y-2">
              {temple.yukari.map((p, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-[var(--color-muted)]"
                >
                  <span className="text-[var(--color-gold)] mt-0.5 shrink-0">
                    ◆
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="rounded-xl bg-[var(--color-gold-light)] border border-[var(--color-gold)]/20 px-5 py-4">
          <p className="text-sm text-[var(--color-gold)]">
            <span className="font-bold">💡 Did you know: </span>
            {temple.trivia}
          </p>
        </div>

        <Card>
          <div className="p-6">
            <h2 className="text-lg font-bold text-[var(--color-foreground)] mb-4">
              Visitor Information
            </h2>
            <dl className="space-y-3 text-sm">
              <div className="flex gap-2">
                <dt className="w-20 shrink-0 font-medium text-[var(--color-muted)]">
                  Address
                </dt>
                <dd className="text-[var(--color-muted)]">{temple.address}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-20 shrink-0 font-medium text-[var(--color-muted)]">
                  Access
                </dt>
                <dd className="text-[var(--color-muted)]">{temple.access}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-20 shrink-0 font-medium text-[var(--color-muted)]">
                  Hours
                </dt>
                <dd className="text-[var(--color-muted)]">{temple.hours}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-20 shrink-0 font-medium text-[var(--color-muted)]">
                  Admission
                </dt>
                <dd className="text-[var(--color-muted)]">
                  {temple.admission}
                </dd>
              </div>
            </dl>
          </div>
        </Card>

        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(temple.name + " " + temple.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-temple)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity"
        >
          Open in Google Maps →
        </a>

        <div className="flex items-center justify-between pt-6 border-t border-[var(--color-border)]">
          {prev ? (
            <Link
              href={`/en/chichibu/${prev.num}`}
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)]"
            >
              ← #{prev.num} {prev.name}
            </Link>
          ) : (
            <span />
          )}
          <Link
            href="/en/chichibu"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)]"
          >
            Back to List
          </Link>
          {next ? (
            <Link
              href={`/en/chichibu/${next.num}`}
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)]"
            >
              #{next.num} {next.name} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </div>
  );
}
