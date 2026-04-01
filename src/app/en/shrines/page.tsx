import type { Metadata } from "next";
import Link from "next/link";
import { getAllShrines } from "@/lib/shrines";
import { SITE_URL, SITE_NAME, JsonLd } from "@/lib/seo";
import Breadcrumb from "@/components/layout/Breadcrumb";
import ShrineFilterEn from "@/components/shrine/ShrineFilterEn";

export const metadata: Metadata = {
  title: "Shrines & Temples in Japan - Complete Guide",
  description:
    "Explore famous shrines and temples across Japan. Filter by region and type. Find visitor information, spiritual significance, and travel tips for each sacred place.",
  keywords: [
    "Japan shrines",
    "Japan temples",
    "Shinto shrines",
    "Buddhist temples",
    "Japan travel",
    "sacred places Japan",
  ],
  alternates: {
    canonical: `${SITE_URL}/en/shrines`,
    languages: { ja: `${SITE_URL}/jinja`, en: `${SITE_URL}/en/shrines` },
  },
  openGraph: {
    title: "Shrines & Temples in Japan - Complete Guide",
    description:
      "Explore famous shrines and temples across Japan. Filter by region and type.",
    url: `${SITE_URL}/en/shrines`,
    type: "website",
  },
};

export default function EnglishShrineListPage() {
  const shrines = getAllShrines();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Shrines & Temples in Japan",
          description:
            "Explore famous shrines and temples across Japan, filtered by region and type.",
          url: `${SITE_URL}/en/shrines`,
          publisher: { "@type": "Organization", name: SITE_NAME },
          numberOfItems: shrines.length,
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
            { "@type": "ListItem", position: 2, name: "Shrines & Temples" },
          ],
        }}
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/en" },
          { label: "Shrines & Temples" },
        ]}
      />

      <div className="flex items-center justify-between mt-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Shrines &amp; Temples in Japan
          </h1>
          <p className="mt-2 text-gray-500">
            {shrines.length} sacred places to explore
          </p>
        </div>
        <Link
          href="/jinja"
          className="text-sm text-gray-400 hover:text-[var(--color-gold)]"
        >
          🇯🇵 日本語
        </Link>
      </div>

      <ShrineFilterEn shrines={shrines} />
    </div>
  );
}
