import type { Metadata } from "next";
import { getAllArticles } from "@/lib/articles";
import ArticleList from "@/components/article/ArticleList";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "開運ガイド - 縁起物・参拝マナー",
  description:
    "お守り・おみくじ・御朱印・絵馬など、神社やお寺の縁起物に関する開運ガイド記事一覧です。",
};

export default function KaiunGuidePage() {
  const articles = getAllArticles();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[{ label: "ホーム", href: "/" }, { label: "開運ガイド" }]}
      />
      <h1 className="text-3xl font-bold mt-4 mb-2">開運ガイド</h1>
      <p className="text-gray-600 mb-8">
        お守り・おみくじ・御朱印・絵馬など、神社やお寺の縁起物に関する情報をまとめました。正しい参拝マナーも解説しています。
      </p>
      <ArticleList articles={articles} />
    </div>
  );
}
