import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getArticle } from "@/lib/github-articles";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const decoded = decodeURIComponent(category);
  const article = getArticle(decoded, slug);
  if (!article) return {};
  return {
    title: `${article.title} | 開運ガイド`,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { category, slug } = await params;
  const decoded = decodeURIComponent(category);
  const article = getArticle(decoded, slug);
  if (!article) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "開運ガイド", href: "/kaiun-guide" },
          { label: article.categoryName, href: "/kaiun-guide" },
          { label: article.title },
        ]}
      />

      <article className="mt-6">
        <div className="flex items-center gap-2">
          <span className="inline-block rounded-full bg-[var(--color-gold-light)] px-3 py-0.5 text-xs font-medium text-[var(--color-gold)]">
            {article.categoryName}
          </span>
        </div>
        <h1 className="mt-3 text-3xl font-bold text-gray-900 leading-tight">
          {article.title}
        </h1>

        <div className="mt-8 space-y-8">
          {article.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-xl font-bold text-gray-800 border-l-4 border-[var(--color-gold)] pl-4 mb-3">
                {section.heading}
              </h2>
              <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {section.body}
              </div>
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
