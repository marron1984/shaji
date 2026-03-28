import type { Metadata } from "next";
import { getCategories, getArticlesByCategory } from "@/lib/github-articles";
import Breadcrumb from "@/components/layout/Breadcrumb";
import KaiunGuideClient from "@/components/article/KaiunGuideClient";
import { getCategoryMeta } from "@/data/category-meta";

export const metadata: Metadata = {
  title: "開運ガイド - 風水・縁起物・参拝マナー",
  description:
    "風水、縁起物、参拝マナーなど、運気を上げるための開運ガイド記事一覧です。",
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
      <KaiunGuideClient
        categories={categories}
        totalArticles={totalArticles}
      />
    </div>
  );
}
