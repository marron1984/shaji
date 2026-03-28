import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllShrines, getShrineBySlug } from "@/lib/shrines";
import { getArticlesRelatedToShrine } from "@/lib/articles";
import ShrineDetail from "@/components/shrine/ShrineDetail";
import ArticleList from "@/components/article/ArticleList";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllShrines().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const shrine = getShrineBySlug(slug);
  if (!shrine) return {};

  const url = `${SITE_URL}/jinja/${slug}`;

  return {
    title: `${shrine.name}（${shrine.prefecture}）- 参拝ガイド・ご利益・アクセス`,
    description: `${shrine.name}の参拝情報、ご利益、御朱印、アクセス方法を紹介。${shrine.shortDescription}`,
    keywords: [
      shrine.name,
      shrine.prefecture,
      shrine.typeName,
      "参拝",
      "御朱印",
      ...shrine.tags,
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${shrine.name} - ${shrine.typeName}`,
      description: shrine.shortDescription,
      url,
      siteName: SITE_NAME,
      locale: "ja_JP",
    },
    twitter: {
      card: "summary_large_image",
      title: `${shrine.name} - ${shrine.typeName}`,
      description: shrine.shortDescription,
    },
  };
}

export default async function ShrineDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const shrine = getShrineBySlug(slug);
  if (!shrine) notFound();

  const relatedArticles = getArticlesRelatedToShrine(slug);
  const url = `${SITE_URL}/jinja/${slug}`;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": shrine.type === "shrine" ? "HinduTemple" : "BuddhistTemple",
          name: shrine.name,
          description: shrine.shortDescription,
          address: {
            "@type": "PostalAddress",
            addressLocality: shrine.prefecture,
            addressCountry: "JP",
            streetAddress: shrine.address,
          },
          url,
          openingHours: shrine.hours,
          isAccessibleForFree: shrine.admission === "無料" || shrine.admission === "境内自由",
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
            {
              "@type": "ListItem",
              position: 2,
              name: "神社・お寺一覧",
              item: `${SITE_URL}/jinja`,
            },
            { "@type": "ListItem", position: 3, name: shrine.name },
          ],
        }}
      />

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
