import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import { getRelatedShrines } from "@/lib/shrines";
import ArticleContent from "@/components/article/ArticleContent";
import ShrineList from "@/components/shrine/ShrineList";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";

export const dynamicParams = false;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.shortDescription,
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const relatedShrines = getRelatedShrines(article.relatedShrinesSlugs);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "開運ガイド", href: "/kaiun-guide" },
          { label: article.title },
        ]}
      />
      <ArticleContent article={article} />

      {relatedShrines.length > 0 && (
        <div className="mt-12">
          <SectionHeading>関連する神社・お寺</SectionHeading>
          <div className="mt-4">
            <ShrineList shrines={relatedShrines} />
          </div>
        </div>
      )}
    </div>
  );
}
