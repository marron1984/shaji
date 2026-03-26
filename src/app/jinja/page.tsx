import type { Metadata } from "next";
import { getAllShrines } from "@/lib/shrines";
import { regions } from "@/data/regions";
import ShrineFilter from "@/components/shrine/ShrineFilter";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "神社・お寺一覧",
  description:
    "日本全国の有名な神社・お寺を地域別・種別で探せる一覧ページです。",
};

export default function ShrineListPage() {
  const shrines = getAllShrines();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
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
