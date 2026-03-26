import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllShrines, getShrineBySlug } from "@/lib/shrines";
import { getArticlesRelatedToShrine } from "@/lib/articles";
import ShrineDetail from "@/components/shrine/ShrineDetail";
import ArticleList from "@/components/article/ArticleList";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllShrines().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const shrine = getShrineBySlug(slug);
  if (!shrine) return {};
  return {
    title: shrine.name,
    description: shrine.shortDescription,
  };
}

export default async function ShrineDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const shrine = getShrineBySlug(slug);
  if (!shrine) notFound();

  const relatedArticles = getArticlesRelatedToShrine(slug);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "神社・お寺一覧", href: "/jinja" },
          { label: shrine.name },
        ]}
      />
      <ShrineDetail shrine={shrine} />

      {relatedArticles.length > 0 && (
        <div className="mt-12">
          <SectionHeading>関連する開運ガイド</SectionHeading>
          <div className="mt-4">
            <ArticleList articles={relatedArticles} />
          </div>
        </div>
      )}
    </div>
  );
}
