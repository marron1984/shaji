import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllShrines, getShrineBySlug } from "@/lib/shrines";
import { getShrineEn } from "@/lib/shrine-en";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";
import Tag from "@/components/ui/Tag";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ShrineHistory } from "@/data/shrine-history";

function getShrineHistoryEn(slug: string): ShrineHistory | null {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const mod = require("@/data/shrine-history-en");
    if (typeof mod.getShrineHistoryEn === "function") {
      return mod.getShrineHistoryEn(slug) ?? null;
    }
    return null;
  } catch {
    return null;
  }
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllShrines().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const shrine = getShrineBySlug(slug);
  if (!shrine) return {};
  const en = getShrineEn(slug);

  const name = en?.name || shrine.name;
  const desc = en?.description || shrine.shortDescription;
  const url = `${SITE_URL}/en/shrines/${slug}`;

  return {
    title: `${name} - Visitor Guide, History & Access`,
    description: desc,
    alternates: {
      canonical: url,
      languages: {
        ja: `${SITE_URL}/jinja/${slug}`,
        en: url,
      },
    },
    openGraph: {
      type: "article",
      title: name,
      description: desc,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
    },
  };
}

export default async function EnglishShrineDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const shrine = getShrineBySlug(slug);
  if (!shrine) notFound();

  const en = getShrineEn(slug);
  const name = en?.name || shrine.name;
  const description = en?.description || shrine.shortDescription;
  const url = `${SITE_URL}/en/shrines/${slug}`;
  const history = getShrineHistoryEn(slug);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type":
            shrine.type === "shrine" ? "PlaceOfWorship" : "BuddhistTemple",
          name,
          description,
          address: {
            "@type": "PostalAddress",
            addressLocality: shrine.prefecture,
            addressCountry: "JP",
            streetAddress: shrine.address,
          },
          url,
          openingHours: shrine.hours,
          inLanguage: "en",
        }}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/en" className="hover:text-[var(--color-gold)]">
          Home
        </Link>
        {" / "}
        <Link href="/en/shrines" className="hover:text-[var(--color-gold)]">
          Shrines &amp; Temples
        </Link>
        {" / "}
        <span className="text-gray-800">{name}</span>
      </nav>

      <div className="space-y-8">
        {/* Header */}
        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
            <Tag
              label={shrine.type === "shrine" ? "Shrine" : "Temple"}
              variant={shrine.type === "shrine" ? "shrine" : "temple"}
            />
          </div>
          <p className="mt-1 text-sm text-gray-500">
            {shrine.name} — {shrine.prefecture}
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">{description}</p>

          {/* Language Switch */}
          <Link
            href={`/jinja/${slug}`}
            className="mt-2 inline-block text-sm text-gray-400 hover:text-[var(--color-gold)]"
          >
            🇯🇵 日本語で見る
          </Link>
        </div>

        {/* Highlights */}
        {en?.highlights && en.highlights.length > 0 && (
          <div>
            <SectionHeading>Highlights</SectionHeading>
            <ul className="mt-4 list-inside list-disc space-y-2 text-gray-700">
              {en.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Famous Charms */}
        {shrine.famousCharms.length > 0 && (
          <div>
            <SectionHeading>Famous Charms &amp; Talismans</SectionHeading>
            <div className="mt-4 space-y-3">
              {shrine.famousCharms.map((charm, i) => (
                <div
                  key={i}
                  className="rounded-md bg-[var(--color-gold-light)] p-4"
                >
                  <p className="font-medium text-[var(--color-foreground)]">
                    {charm.name}
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">
                    {charm.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Visitor Info */}
        <div>
          <SectionHeading>Visitor Information</SectionHeading>
          <div className="mt-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-background-elevated)] p-6">
            <dl className="grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-medium text-gray-500">Address</dt>
                <dd className="mt-1 text-gray-900">
                  {shrine.prefecture}
                  {shrine.address && (
                    <span className="block text-sm text-gray-600">
                      {shrine.address}
                    </span>
                  )}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Hours</dt>
                <dd className="mt-1 text-gray-900">{shrine.hours}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Admission</dt>
                <dd className="mt-1 text-gray-900">{shrine.admission}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Access</dt>
                <dd className="mt-1 text-gray-900">{shrine.access}</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Google Maps */}
        {shrine.address && (
          <div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shrine.name + " " + shrine.prefecture + shrine.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-shrine)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity"
            >
              Open in Google Maps →
            </a>
          </div>
        )}

        {/* History */}
        {history && (
          <div className="space-y-8">
            <div>
              <SectionHeading>Origin &amp; History</SectionHeading>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                {history.origin}
              </p>
            </div>

            <div>
              <SectionHeading>Spiritual Connection &amp; Benefits</SectionHeading>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                {history.goen}
              </p>
            </div>

            {history.yukari.length > 0 && (
              <div>
                <SectionHeading>Notable Historical Figures</SectionHeading>
                <ul className="mt-4 space-y-2">
                  {history.yukari.map((person, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-[var(--color-muted)]"
                    >
                      <span className="text-[var(--color-gold)] mt-0.5 shrink-0">
                        ◆
                      </span>
                      <span>{person}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-xl bg-[var(--color-gold-light)] border border-[var(--color-gold)]/20 px-5 py-4">
              <p className="text-sm text-[var(--color-gold)]">
                <span className="font-bold">Did You Know? </span>
                {history.trivia}
              </p>
            </div>
          </div>
        )}

        {/* Tags */}
        {shrine.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {shrine.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
