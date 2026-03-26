import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllLoadedArticles,
  getLoadedArticleBySlug,
} from "@/lib/article-loader";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const dynamicParams = false;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllLoadedArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getLoadedArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | 開運ガイド`,
    description: article.sections[0]?.body.slice(0, 160),
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getLoadedArticleBySlug(slug);
  if (!article) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "開運ガイド", href: "/kaiun-guide" },
          { label: article.title },
        ]}
      />

      <article className="mt-6">
        <h1 className="text-3xl font-bold text-gray-900 leading-tight">
          {article.title}
        </h1>
        <div className="mt-1 flex items-center gap-2">
          <span className="inline-block rounded-full bg-[var(--color-gold-light)] px-3 py-0.5 text-xs font-medium text-[var(--color-gold)]">
            開運ガイド
          </span>
        </div>

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
