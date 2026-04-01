import type { Metadata } from "next";
import { getCategories, getArticlesByCategory } from "@/lib/github-articles";
import KaiunGuideClient from "@/components/article/KaiunGuideClient";
import { getCategoryMeta } from "@/data/category-meta";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "開運ガイド - 風水・縁起物・参拝マナー・運気アップ",
  description:
    "風水、縁起物、参拝マナーなど、運気を上げるための開運ガイド記事一覧。77カテゴリ、1,248以上の記事で開運情報をお届けします。",
  keywords: [
    "開運ガイド",
    "風水",
    "縁起物",
    "参拝マナー",
    "運気アップ",
    "金運",
    "恋愛運",
    "健康運",
    "パワースポット",
  ],
  alternates: {
    canonical: `${SITE_URL}/kaiun-guide`,
    languages: { ja: `${SITE_URL}/kaiun-guide`, en: `${SITE_URL}/en/guide` },
  },
  openGraph: {
    title: "開運ガイド - 風水・縁起物・参拝マナー",
    description:
      "風水、縁起物、参拝マナーなど、運気を上げるための開運ガイド記事一覧。",
    url: `${SITE_URL}/kaiun-guide`,
    type: "website",
  },
};

export default function KaiunGuidePage() {
  const categories = getCategories().map((cat) => {
    const meta = getCategoryMeta(cat.id);
    return {
      id: cat.id,
      slug: cat.slug,
      name: cat.name,
      emoji: meta.emoji,
      image: meta.image,
      description: meta.description,
      featured: meta.featured || false,
      articles: getArticlesByCategory(cat.slug).map((a) => ({
        slug: a.slug,
        title: a.title,
        categoryId: a.categoryId,
        categoryName: a.categoryName,
        excerpt: a.excerpt,
      })),
    };
  });

  const totalArticles = categories.reduce(
    (sum, c) => sum + c.articles.length,
    0
  );

  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "開運ガイド",
          description:
            "風水、縁起物、参拝マナーなど、運気を上げるための開運ガイド記事一覧",
          url: `${SITE_URL}/kaiun-guide`,
          publisher: { "@type": "Organization", name: SITE_NAME },
          numberOfItems: totalArticles,
        }}
      />
      <KaiunGuideClient
        categories={categories}
        totalArticles={totalArticles}
      />
    </div>
  );
}
