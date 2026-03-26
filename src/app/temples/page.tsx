import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb";
import TempleSearch from "@/components/temple/TempleSearch";

export const metadata: Metadata = {
  title: "寺院データベース（全国73,000寺以上）",
  description:
    "日本全国73,000以上の寺院を宗派・都道府県・キーワードで検索できるデータベースです。",
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
      <p className="text-gray-600 mb-6">
        日本全国73,000以上の寺院情報を検索できます。都道府県・宗派・キーワードで絞り込みが可能です。
      </p>
      <TempleSearch />
    </div>
  );
}
