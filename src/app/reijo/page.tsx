import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Card from "@/components/ui/Card";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "霊場めぐりガイド｜四国遍路・西国・坂東・秩父",
  description:
    "日本の四大巡礼（四国八十八箇所・西国三十三所・坂東三十三観音・秩父三十四箇所）を網羅した霊場めぐり完全ガイド。日本百観音についても解説。",
  keywords: ["霊場めぐり", "巡礼", "日本百観音", "四国遍路", "西国三十三所", "坂東三十三観音", "秩父三十四箇所"],
  alternates: { canonical: `${SITE_URL}/reijo` },
  openGraph: { title: "霊場めぐりガイド", description: "日本の四大巡礼を網羅した霊場めぐり完全ガイド。", url: `${SITE_URL}/reijo`, type: "website" },
};

const pilgrimages = [
  {
    slug: "ohenro",
    title: "四国八十八箇所",
    subtitle: "お遍路",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=640&q=80",
    temples: 88,
    distance: "約1,200km",
    area: "四国4県（徳島・高知・愛媛・香川）",
    founder: "弘法大師空海",
    desc: "弘法大師空海ゆかりの88の寺院を巡る日本最大の巡礼路。「同行二人」の精神で歩く1,200年以上の歴史ある巡礼。",
    color: "var(--color-shrine)",
  },
  {
    slug: "saigoku",
    title: "西国三十三所",
    subtitle: "日本最古の巡礼路",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=640&q=80",
    temples: 33,
    distance: "約1,000km",
    area: "近畿2府4県＋岐阜県",
    founder: "徳道上人（花山法皇が再興）",
    desc: "養老2年（718年）開創の日本最古の巡礼路。33の観音霊場を巡り、極楽往生を祈る約1,300年の歴史を持つ。",
    color: "var(--color-gold)",
  },
  {
    slug: "bando",
    title: "坂東三十三観音",
    subtitle: "関東の観音巡礼",
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=640&q=80",
    temples: 33,
    distance: "約1,300km",
    area: "関東1都6県",
    founder: "源頼朝の観音信仰",
    desc: "源頼朝の篤い観音信仰がきっかけで鎌倉時代に開創。鎌倉・日光・筑波・房総など関東一円の名刹を巡る。",
    color: "var(--color-temple)",
  },
  {
    slug: "chichibu",
    title: "秩父三十四箇所",
    subtitle: "日本百観音の結願",
    image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=640&q=80",
    temples: 34,
    distance: "約100km",
    area: "埼玉県秩父地方",
    founder: "文暦元年（1234年）開創",
    desc: "秩父地方に集中する34の観音霊場。西国・坂東と合わせて「日本百観音」を構成し、百観音巡礼の結願の地。",
    color: "var(--color-shrine)",
  },
];

export default function ReijoPage() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "霊場めぐりガイド",
          description: "日本の四大巡礼を網羅した霊場めぐり完全ガイド",
          url: `${SITE_URL}/reijo`,
          publisher: { "@type": "Organization", name: SITE_NAME },
        }}
      />

      {/* ヒーロー */}
      <section className="relative h-[380px] sm:h-[440px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=1400&q=80"
          alt="霊場めぐり"
          fill
          className="object-cover brightness-[0.5]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[var(--color-background)]" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.4em] uppercase text-[var(--color-gold)] drop-shadow">
            Sacred Pilgrimage
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white drop-shadow-lg">
            <span className="text-gradient">霊場めぐり</span>ガイド
          </h1>
          <p className="mt-4 max-w-lg text-base text-white/70 drop-shadow">
            四国遍路・西国・坂東・秩父 — 日本の四大巡礼を完全ガイド
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "霊場めぐり" }]} />

        {/* 日本百観音について */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">日本百観音とは</h2>
          <p className="text-[var(--color-muted)] leading-relaxed">
            西国三十三所（33）＋ 坂東三十三観音（33）＋ 秩父三十四箇所（34）＝ 合計100箇所を「日本百観音」と総称します。
            すべてを巡礼すると「百観音満願」となり、この上ない功徳があるとされています。
            四国八十八箇所は真言宗系の霊場として独立した巡礼ですが、日本の四大巡礼として合わせて紹介します。
          </p>
        </section>

        {/* 四大巡礼カード */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-8">四大巡礼ガイド</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {pilgrimages.map((p) => (
              <Link
                key={p.slug}
                href={`/${p.slug}`}
                className="group block overflow-hidden rounded-2xl bg-[var(--color-background-card)] border border-[var(--color-border)] hover:border-white/15 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 brightness-[0.7]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background-card)] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5">
                    <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: p.color }}>{p.subtitle}</p>
                    <h3 className="text-xl font-bold text-white drop-shadow mt-1">{p.title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-[var(--color-muted)]">
                    <span>{p.temples}札所</span>
                    <span>•</span>
                    <span>{p.distance}</span>
                    <span>•</span>
                    <span>{p.area}</span>
                  </div>
                  <p className="mt-3 text-sm font-medium" style={{ color: p.color }}>
                    詳細ガイドを見る →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 比較表 */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-6">四大巡礼 比較表</h2>
          <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="px-4 py-3 text-left text-[var(--color-muted)] font-medium">項目</th>
                  <th className="px-4 py-3 text-left text-[var(--color-shrine)] font-bold">四国遍路</th>
                  <th className="px-4 py-3 text-left text-[var(--color-gold)] font-bold">西国</th>
                  <th className="px-4 py-3 text-left text-[var(--color-temple)] font-bold">坂東</th>
                  <th className="px-4 py-3 text-left text-[var(--color-shrine)] font-bold">秩父</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {[
                  ["札所数", "88", "33", "33", "34"],
                  ["総距離", "約1,200km", "約1,000km", "約1,300km", "約100km"],
                  ["地域", "四国4県", "近畿＋岐阜", "関東1都6県", "埼玉県秩父"],
                  ["歩き日数", "30〜60日", "30〜40日", "40〜60日", "5〜7日"],
                  ["車の日数", "8〜12日", "4〜7日", "5〜10日", "2〜3日"],
                  ["費用目安", "30〜50万", "8〜15万", "10〜20万", "5〜10万"],
                  ["開創", "平安時代", "718年", "鎌倉時代", "1234年"],
                  ["宗派", "真言宗系", "各宗派混在", "各宗派混在", "各宗派混在"],
                ].map(([item, shikoku, saigoku, bando, chichibu]) => (
                  <tr key={item} className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-2.5 font-medium text-[var(--color-foreground)]">{item}</td>
                    <td className="px-4 py-2.5 text-[var(--color-muted)]">{shikoku}</td>
                    <td className="px-4 py-2.5 text-[var(--color-muted)]">{saigoku}</td>
                    <td className="px-4 py-2.5 text-[var(--color-muted)]">{bando}</td>
                    <td className="px-4 py-2.5 text-[var(--color-muted)]">{chichibu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 関連リンク */}
        <section className="mt-16 text-center">
          <p className="text-[var(--color-muted)] mb-4">参拝の作法も合わせて確認しましょう</p>
          <Link
            href="/sanpai-manner"
            className="group relative inline-block rounded-full px-8 py-3.5 text-sm font-bold overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-shrine)] to-[var(--color-gold)] opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="relative text-white">参拝マナーガイド</span>
          </Link>
        </section>
      </div>
    </div>
  );
}
