import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb";
import TempleSearch from "@/components/temple/TempleSearch";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "寺院データベース（全国73,000寺以上）- 宗派・都道府県検索",
  description:
    "日本全国73,000以上の寺院を宗派・都道府県・キーワードで検索できるデータベースです。所在地、電話番号、本尊、宗派などの情報を掲載。",
  keywords: ["寺院検索", "お寺", "宗派", "寺院データベース", "日本の寺院"],
  alternates: { canonical: `${SITE_URL}/temples` },
  openGraph: {
    title: "寺院データベース（全国73,000寺以上）",
    description:
      "日本全国73,000以上の寺院を宗派・都道府県で検索できるデータベース。",
    url: `${SITE_URL}/temples`,
    type: "website",
  },
};

export default function TemplesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "寺院データベース" },
        ]}
      />
      <h1 className="text-3xl font-bold mt-4 mb-2">寺院データベース</h1>
      <p className="text-[var(--color-muted)] mb-6">
        日本全国73,000以上の寺院情報を検索できます。都道府県・宗派・キーワードで絞り込みが可能です。
      </p>
      <TempleSearch />
    </div>
  );
}
