import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllBandoTemples, getBandoTemple } from "@/data/bando-data";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import SectionHeading from "@/components/ui/SectionHeading";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";

interface PageProps {
  params: Promise<{ num: string }>;
}

export async function generateStaticParams() {
  return getAllBandoTemples().map((t) => ({ num: String(t.num) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { num } = await params;
  const temple = getBandoTemple(Number(num));
  if (!temple) return {};
  const url = `${SITE_URL}/en/bando/${num}`;
  return {
    title: `#${temple.num} ${temple.name} - Bando 33 Kannon Pilgrimage`,
    description: `Visitor guide for Bando 33 Kannon Pilgrimage temple #${temple.num}, ${temple.name}. ${temple.shuha} sect. Principal image: ${temple.honzon}. ${temple.pref}.`,
    keywords: [temple.name, "Bando 33 Kannon", "pilgrimage", temple.pref, temple.honzon],
    alternates: {
      canonical: url,
      languages: {
        ja: `${SITE_URL}/bando/${num}`,
        en: url,
      },
    },
    openGraph: {
      type: "article",
      title: `#${temple.num} ${temple.name} - Bando 33 Kannon`,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
    },
  };
}

export default async function EnglishBandoDetailPage({ params }: PageProps) {
  const { num } = await params;
  const temple = getBandoTemple(Number(num));
  if (!temple) notFound();
  const allTemples = getAllBandoTemples();
  const prev = allTemples.find((t) => t.num === temple.num - 1);
  const next = allTemples.find((t) => t.num === temple.num + 1);
  const url = `${SITE_URL}/en/bando/${num}`;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BuddhistTemple", name: temple.name, alternateName: `Bando 33 Kannon Pilgrimage #${temple.num}`, description: temple.origin, address: { "@type": "PostalAddress", addressLocality: temple.pref, streetAddress: temple.address, addressCountry: "JP" }, url, inLanguage: "en" }} />
      <Breadcrumb items={[{ label: "Home", href: "/en" }, { label: "Bando 33 Kannon", href: "/en/bando" }, { label: `#${temple.num} ${temple.name}` }]} />

      <div className="mt-6">
        <div className="flex items-center gap-2 mb-2">
          <Tag label={`#${temple.num}`} variant="gold" />
          <Tag label={temple.shuha} variant="temple" />
        </div>
        <h1 className="text-3xl font-bold text-[var(--color-foreground)]">{temple.name}</h1>
        <p className="mt-1 text-[var(--color-muted)]">{temple.yomikata} | {temple.pref}</p>
        <p className="mt-1 text-sm text-[var(--color-gold)]">Principal Image: {temple.honzon}</p>
      </div>

      {/* Language Switch */}
      <Link
        href={`/bando/${num}`}
        className="mt-2 inline-block text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)]"
      >
        Japanese version
      </Link>

      <div className="mt-8 space-y-8">
        <div>
          <SectionHeading>History &amp; Origins</SectionHeading>
          <p className="mt-4 text-[var(--color-muted)] leading-relaxed">{temple.origin}</p>
        </div>
        <div>
          <SectionHeading>Spiritual Benefits</SectionHeading>
          <p className="mt-4 text-[var(--color-muted)] leading-relaxed">{temple.goen}</p>
        </div>
        {temple.yukari.length > 0 && (
          <div>
            <SectionHeading>Notable Historical Figures</SectionHeading>
            <ul className="mt-4 space-y-2">
              {temple.yukari.map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-[var(--color-muted)]">
                  <span className="text-[var(--color-gold)] mt-0.5 shrink-0">&#9670;</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="rounded-xl bg-[var(--color-gold-light)] border border-[var(--color-gold)]/20 px-5 py-4">
          <p className="text-sm text-[var(--color-gold)]"><span className="font-bold">Did you know? </span>{temple.trivia}</p>
        </div>
        <Card>
          <div className="p-6">
            <h2 className="text-lg font-bold text-[var(--color-foreground)] mb-4">Visitor Information</h2>
            <dl className="space-y-3 text-sm">
              <div className="flex gap-2">
                <dt className="w-24 shrink-0 font-medium text-[var(--color-muted)]">Address</dt>
                <dd className="text-[var(--color-muted)]">{temple.address}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-24 shrink-0 font-medium text-[var(--color-muted)]">Access</dt>
                <dd className="text-[var(--color-muted)]">{temple.access}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-24 shrink-0 font-medium text-[var(--color-muted)]">Hours</dt>
                <dd className="text-[var(--color-muted)]">{temple.hours}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-24 shrink-0 font-medium text-[var(--color-muted)]">Admission</dt>
                <dd className="text-[var(--color-muted)]">{temple.admission}</dd>
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
          Open in Google Maps &rarr;
        </a>
        <div className="flex items-center justify-between pt-6 border-t border-[var(--color-border)]">
          {prev ? (
            <Link href={`/en/bando/${prev.num}`} className="text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)]">
              &larr; #{prev.num} {prev.name}
            </Link>
          ) : <span />}
          <Link href="/en/bando" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)]">
            Back to List
          </Link>
          {next ? (
            <Link href={`/en/bando/${next.num}`} className="text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)]">
              #{next.num} {next.name} &rarr;
            </Link>
          ) : <span />}
        </div>
      </div>
    </div>
  );
}
