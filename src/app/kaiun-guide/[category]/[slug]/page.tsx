import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getCategories,
  getArticlesByCategory,
  getArticle,
} from "@/lib/github-articles";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";
import { getCategoryMeta } from "@/data/category-meta";

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  const categories = getCategories();
  const params: { category: string; slug: string }[] = [];
  for (const cat of categories) {
    const articles = getArticlesByCategory(cat.slug);
    for (const article of articles) {
      params.push({ category: cat.id, slug: article.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const article = getArticle(category, slug);
  if (!article) return {};

  const meta = getCategoryMeta(category);
  const url = `${SITE_URL}/kaiun-guide/${category}/${slug}`;

  return {
    title: `${article.title} | 開運ガイド`,
    description: article.excerpt.slice(0, 160),
    keywords: [article.categoryName, "開運", "運気アップ", "風水", SITE_NAME],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt.slice(0, 160),
      url,
      siteName: SITE_NAME,
      images: [{ url: meta.image, width: 1200, height: 630, alt: article.title }],
      locale: "ja_JP",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt.slice(0, 160),
      images: [meta.image],
    },
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { category, slug } = await params;
  const article = getArticle(category, slug);
  if (!article) notFound();

  const meta = getCategoryMeta(category);
  const url = `${SITE_URL}/kaiun-guide/${category}/${slug}`;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.excerpt.slice(0, 160),
          image: meta.image,
          url,
          publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
          },
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          articleSection: article.categoryName,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "開運ガイド", item: `${SITE_URL}/kaiun-guide` },
            { "@type": "ListItem", position: 3, name: article.categoryName },
            { "@type": "ListItem", position: 4, name: article.title },
          ],
        }}
      />

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "開運ガイド", href: "/kaiun-guide" },
          { label: article.categoryName },
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
