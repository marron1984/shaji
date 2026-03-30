import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
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
  // Vercelビルド制限対策: 主要記事のみ静的生成、残りはオンデマンド
  const categories = getCategories();
  const params: { category: string; slug: string }[] = [];
  for (const cat of categories) {
    const articles = getArticlesByCategory(cat.slug).slice(0, 3);
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
        {/* キービジュアル */}
        <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden mb-6">
          <Image
            src={meta.image}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-transparent to-transparent" />
          <div className="absolute bottom-4 left-5">
            <span className="inline-block rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 text-xs font-medium text-white">
              {meta.emoji} {article.categoryName}
            </span>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-[var(--color-foreground)] leading-tight">
          {article.title}
        </h1>

        <div className="mt-8 space-y-8">
          {article.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-xl font-bold text-[var(--color-foreground)] border-l-4 border-[var(--color-gold)] pl-4 mb-3">
                {section.heading}
              </h2>
              <div className="text-[var(--color-muted)] leading-relaxed whitespace-pre-wrap">
                {section.body}
              </div>
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
