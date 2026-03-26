import type { Metadata } from "next";
import Link from "next/link";
import { getAllLoadedArticles } from "@/lib/article-loader";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";

export const metadata: Metadata = {
  title: "開運ガイド - 縁起物・風水・参拝マナー",
  description:
    "風水、縁起物、参拝マナーなど、運気を上げるための開運ガイド記事一覧です。",
};

export default function KaiunGuidePage() {
  const articles = getAllLoadedArticles();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[{ label: "ホーム", href: "/" }, { label: "開運ガイド" }]}
      />
      <h1 className="text-3xl font-bold mt-4 mb-2">開運ガイド</h1>
      <p className="text-gray-600 mb-8">
        風水、縁起物、参拝マナーなど、運気を上げるための情報をまとめました。
      </p>

      {articles.length === 0 ? (
        <p className="text-gray-400 py-12 text-center">
          記事を準備中です。
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/kaiun-guide/${article.slug}`}
              className="block"
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <div className="h-2 bg-[var(--color-gold)]" />
                <div className="p-5">
                  <Tag label="開運ガイド" variant="gold" />
                  <h2 className="mt-2 text-lg font-bold text-gray-800">
                    {article.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                    {article.sections[0]?.body.slice(0, 120)}...
                  </p>
                  <p className="mt-3 text-sm font-medium text-[var(--color-gold)] hover:underline">
                    記事を読む &rarr;
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
