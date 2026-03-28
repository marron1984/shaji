import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "このサイトについて",
  description:
    "社寺まとめは、日本全国の神社・お寺の情報と開運ガイドをまとめたサイトです。",
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[{ label: "ホーム", href: "/" }, { label: "このサイトについて" }]}
      />
      <h1 className="text-3xl font-bold mt-4 mb-6">このサイトについて</h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          「社寺まとめ」は、日本全国の有名な神社・お寺の情報を一つにまとめたガイドサイトです。各神社・お寺の基本情報やアクセス方法、見どころをわかりやすく紹介しています。
        </p>
        <p>
          また「開運ガイド」では、お守りやおみくじ、御朱印、絵馬といった縁起物に関する知識や、正しい参拝マナーについても詳しく解説しています。初めての寺社巡りの方から、もっと深く知りたい方まで、幅広くお役立ていただける内容を目指しています。
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">コンテンツについて</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>神社・お寺一覧</strong>
            ：全国8地方の代表的な神社・お寺を地域別・種別で検索できます。
          </li>
          <li>
            <strong>開運ガイド</strong>
            ：お守り、おみくじ、御朱印、絵馬など縁起物の基礎知識と参拝マナーを掲載しています。
          </li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">免責事項</h2>
        <p>
          掲載情報は作成時点のものであり、最新の情報と異なる場合があります。お出かけの際は、各神社・お寺の公式サイトで最新情報をご確認ください。
        </p>
      </div>
    </div>
  );
}
