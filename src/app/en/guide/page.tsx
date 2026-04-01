import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getCategories, getArticlesByCategory } from "@/lib/github-articles";
import { getCategoryMeta } from "@/data/category-meta";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Good Fortune Guide - Feng Shui, Lucky Charms & Shrine Etiquette",
  description:
    "Comprehensive guide to Japanese good fortune practices. Learn about feng shui, lucky charms, shrine etiquette, and how to improve your luck.",
  alternates: {
    canonical: `${SITE_URL}/en/guide`,
    languages: {
      ja: `${SITE_URL}/kaiun-guide`,
      en: `${SITE_URL}/en/guide`,
    },
  },
  openGraph: {
    title: "Good Fortune Guide - Feng Shui, Lucky Charms & Shrine Etiquette",
    description:
      "Comprehensive guide to Japanese good fortune practices. Learn about feng shui, lucky charms, shrine etiquette, and how to improve your luck.",
    url: `${SITE_URL}/en/guide`,
    type: "website",
  },
};

const categoryNameEn: Record<string, { name: string; desc: string }> = {
  "01": { name: "Feng Shui & Interior", desc: "Improve luck through room layout and design" },
  "02": { name: "Financial Fortune", desc: "Habits and tips for attracting wealth" },
  "03": { name: "Career Fortune", desc: "Boost your work and business luck" },
  "04": { name: "Love & Romance", desc: "Attract love and strengthen relationships" },
  "05": { name: "Health Fortune", desc: "Wellness practices for better health luck" },
  "06": { name: "Relationships", desc: "Improve your social connections and harmony" },
  "07": { name: "Cleaning & Organization", desc: "Declutter for better energy flow" },
  "08": { name: "Shrine Etiquette", desc: "Proper manners for shrine and temple visits" },
  "09": { name: "Seasonal Events", desc: "Traditional customs by season and calendar" },
  "10": { name: "Mindset & Words", desc: "Positive thinking and affirmations" },
  "11": { name: "Fashion & Beauty", desc: "Lucky fashion and beauty practices" },
  "12": { name: "General Fortune", desc: "Various fortune improvement topics" },
  "16": { name: "Power Spots & Travel", desc: "Japan's spiritual travel destinations" },
  "17": { name: "Lucky Foods", desc: "Fortune-boosting recipes and dining tips" },
  "18": { name: "Divination", desc: "Fortune telling, horoscopes, and omikuji" },
  "29": { name: "Japanese Traditions", desc: "Ancient customs for modern fortune" },
  "44": { name: "Power Stones", desc: "Crystals and gemstones for energy" },
};

export default function EnglishGuidePage() {
  const categories = getCategories();
  const totalArticles = categories.reduce(
    (sum, c) => sum + c.articleCount,
    0
  );

  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Good Fortune Guide",
          description:
            "Comprehensive guide to Japanese good fortune practices. Learn about feng shui, lucky charms, shrine etiquette, and how to improve your luck.",
          url: `${SITE_URL}/en/guide`,
          inLanguage: "en",
          publisher: { "@type": "Organization", name: SITE_NAME },
          numberOfItems: totalArticles,
        }}
      />

      {/* Hero */}
      <section className="relative h-[300px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=1400&q=80"
          alt="Japanese shrine"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-lg">
            Good Fortune Guide
          </h1>
          <p className="mt-3 max-w-lg text-base opacity-90">
            {totalArticles}+ articles on feng shui, lucky charms, shrine
            etiquette, and Japanese fortune practices
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Language switch */}
        <div className="flex justify-end mb-6">
          <Link
            href="/kaiun-guide"
            className="text-sm text-gray-400 hover:text-[var(--color-gold)]"
          >
            🇯🇵 日本語版
          </Link>
        </div>

        <p className="text-center text-gray-500 mb-10">
          Our articles are currently in Japanese. Below are the categories
          available — use your browser&apos;s translation feature to read in
          English.
        </p>

        {/* Category Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const meta = getCategoryMeta(cat.id);
            const en = categoryNameEn[cat.id];
            return (
              <Link
                key={cat.id}
                href={`/en/guide`}
                className="group relative h-48 overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all"
              >
                <Image
                  src={meta.image}
                  alt={en?.name || cat.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-xl">{meta.emoji}</span>
                  <h2 className="mt-1 text-lg font-bold text-white drop-shadow">
                    {en?.name || cat.name}
                  </h2>
                  <p className="text-xs text-white/80 line-clamp-1">
                    {en?.desc || meta.description}
                  </p>
                  <span className="mt-1 inline-block text-xs font-medium text-[var(--color-gold)] bg-white/20 backdrop-blur-sm rounded-full px-2 py-0.5">
                    {cat.articleCount} articles
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
