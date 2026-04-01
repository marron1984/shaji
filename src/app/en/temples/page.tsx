import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/seo";
import Breadcrumb from "@/components/layout/Breadcrumb";
import TempleSearch from "@/components/temple/TempleSearch";

export const metadata: Metadata = {
  title: "Temple Database - 73,000+ Temples in Japan",
  description:
    "Search over 73,000 temples across Japan by denomination, prefecture, and keyword. Find addresses, phone numbers, and detailed information.",
  keywords: ["temple search", "Japanese temples", "Buddhist temples", "temple database", "temples in Japan"],
  alternates: {
    canonical: `${SITE_URL}/en/temples`,
    languages: {
      ja: `${SITE_URL}/temples`,
      en: `${SITE_URL}/en/temples`,
    },
  },
  openGraph: {
    title: "Temple Database - 73,000+ Temples in Japan",
    description:
      "Search over 73,000 temples across Japan by denomination, prefecture, and keyword.",
    url: `${SITE_URL}/en/temples`,
    type: "website",
  },
};

export default function EnglishTemplesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/en" },
          { label: "Temple Database" },
        ]}
      />
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-3xl font-bold text-gray-800">
          Temple Database
        </h1>
        <Link
          href="/temples"
          className="text-sm text-gray-400 hover:text-[var(--color-gold)]"
        >
          🇯🇵 日本語
        </Link>
      </div>
      <p className="text-gray-500 mb-6">
        Search 73,000+ temples across Japan. Data is in Japanese — use browser
        translation as needed.
      </p>
      <TempleSearch />
    </div>
  );
}
