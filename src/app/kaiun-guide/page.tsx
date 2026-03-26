import type { Metadata } from "next";
import { getCategories, getArticlesByCategory } from "@/lib/github-articles";
import Breadcrumb from "@/components/layout/Breadcrumb";
import KaiunGuideClient from "@/components/article/KaiunGuideClient";

export const metadata: Metadata = {
  title: "開運ガイド - 風水・縁起物・参拝マナー",
  description:
    "風水、縁起物、参拝マナーなど、運気を上げるための開運ガイド記事一覧です。",
};

export default function KaiunGuidePage() {
  const categories = getCategories().map((cat) => ({
    id: cat.id,
    slug: cat.slug,
    name: cat.name,
    articles: getArticlesByCategory(cat.slug).map((a) => ({
      slug: a.slug,
      title: a.title,
      categoryId: a.categoryId,
      categoryName: a.categoryName,
      excerpt: a.excerpt,
    })),
  }));

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[{ label: "ホーム", href: "/" }, { label: "開運ガイド" }]}
      />
      <h1 className="text-3xl font-bold mt-4 mb-2">開運ガイド</h1>
      <p className="text-gray-600 mb-6">
        風水、縁起物、参拝マナーなど、運気を上げるための情報をカテゴリ別にまとめました。
      </p>
      <KaiunGuideClient categories={categories} />
    </div>
  );
}
