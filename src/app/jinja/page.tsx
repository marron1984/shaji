import type { Metadata } from "next";
import { getAllShrines } from "@/lib/shrines";
import { regions } from "@/data/regions";
import ShrineFilter from "@/components/shrine/ShrineFilter";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "神社・お寺一覧 - 日本全国の有名神社・寺院ガイド",
  description:
    "日本全国の有名な神社・お寺を地域別・種別で探せる一覧ページです。参拝情報、ご利益、アクセスなどを詳しく紹介。",
  keywords: ["神社一覧", "お寺一覧", "寺院", "参拝", "御朱印", "パワースポット"],
  alternates: { canonical: `${SITE_URL}/jinja` },
  openGraph: {
    title: "神社・お寺一覧 - 日本全国の有名神社・寺院ガイド",
    description:
      "日本全国の有名な神社・お寺を地域別・種別で探せる一覧ページです。",
    url: `${SITE_URL}/jinja`,
    type: "website",
  },
};

export default function ShrineListPage() {
  const shrines = getAllShrines();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "神社・お寺一覧",
          description:
            "日本全国の有名な神社・お寺を地域別・種別で探せる一覧ページ",
          url: `${SITE_URL}/jinja`,
          publisher: { "@type": "Organization", name: SITE_NAME },
          numberOfItems: shrines.length,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "神社・お寺一覧" },
          ],
        }}
      />
      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "神社・お寺一覧" },
        ]}
      />
      <h1 className="text-3xl font-bold mt-4 mb-8">神社・お寺一覧</h1>
      <ShrineFilter regions={regions} shrines={shrines} />
    </div>
  );
}
