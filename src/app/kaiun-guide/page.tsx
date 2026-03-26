import type { Metadata } from "next";
import Link from "next/link";
import { getCategories, getArticlesByCategory } from "@/lib/github-articles";

export const dynamic = "force-dynamic";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "開運ガイド - 風水・縁起物・参拝マナー",
  description:
    "風水、縁起物、参拝マナーなど、運気を上げるための開運ガイド記事一覧です。",
};

export default function KaiunGuidePage() {
  const categories = getCategories();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[{ label: "ホーム", href: "/" }, { label: "開運ガイド" }]}
      />
      <h1 className="text-3xl font-bold mt-4 mb-2">開運ガイド</h1>
      <p className="text-gray-600 mb-8">
        風水、縁起物、参拝マナーなど、運気を上げるための情報をカテゴリ別にまとめました。
      </p>

      {categories.length === 0 ? (
        <p className="text-gray-400 py-12 text-center">記事を準備中です。</p>
      ) : (
        <div className="space-y-12">
          {categories.map((cat) => {
            const articles = getArticlesByCategory(cat.slug);
            return (
              <section key={cat.slug}>
                <SectionHeading>
                  {cat.name}
                  <span className="ml-2 text-sm font-normal text-gray-500">
                    （{cat.articleCount}件）
                  </span>
                </SectionHeading>
                <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {articles.map((article) => (
                    <Link
                      key={`${cat.slug}-${article.slug}`}
                      href={`/kaiun-guide/${cat.slug}/${article.slug}`}
                      className="block"
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <div className="h-2 bg-[var(--color-gold)]" />
                        <div className="p-5">
                          <Tag label={cat.name} variant="gold" />
                          <h2 className="mt-2 text-lg font-bold text-gray-800">
                            {article.title}
                          </h2>
                          <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                            {article.excerpt}
                          </p>
                          <p className="mt-3 text-sm font-medium text-[var(--color-gold)]">
                            記事を読む &rarr;
                          </p>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
