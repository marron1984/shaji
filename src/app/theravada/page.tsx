import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import SectionHeading from "@/components/ui/SectionHeading";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";
import {
  theravadaAbout,
  theravadaHistory,
  theravadaComparison,
  theravadaTeachings,
  theravadaPractice,
  theravadaCanon,
  theravadaCountries,
  theravadaJapanConnection,
} from "@/data/theravada-data";

export const metadata: Metadata = {
  title: "上座部仏教・南伝仏教ガイド｜テーラワーダの教えと歴史",
  description:
    "上座部仏教（テーラワーダ）の教え・歴史・修行法を網羅的に解説。大乗仏教との違い、四聖諦・八正道、ヴィパッサナー瞑想、パーリ語三蔵、東南アジアの仏教国まで詳しく紹介します。",
  keywords: [
    "上座部仏教",
    "テーラワーダ",
    "南伝仏教",
    "ヴィパッサナー",
    "四聖諦",
    "八正道",
    "パーリ語",
    "大乗仏教 違い",
    "タイ仏教",
    "ミャンマー仏教",
  ],
  alternates: { canonical: `${SITE_URL}/theravada` },
  openGraph: {
    title: "上座部仏教・南伝仏教ガイド｜テーラワーダの教えと歴史",
    description:
      "上座部仏教の教え・歴史・修行法を網羅的に解説。大乗仏教との違いからヴィパッサナー瞑想まで。",
    url: `${SITE_URL}/theravada`,
    type: "article",
  },
};

export default function TheravadaPage() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          name: "上座部仏教・南伝仏教ガイド",
          description:
            "上座部仏教（テーラワーダ）の教え・歴史・修行法を網羅的に解説",
          url: `${SITE_URL}/theravada`,
          publisher: { "@type": "Organization", name: SITE_NAME },
        }}
      />

      {/* ヒーロー */}
      <section className="relative h-[380px] sm:h-[440px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-gold)]/20 via-black/60 to-[var(--color-background)]" />
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <span className="text-[300px] select-none">☸</span>
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <p className="mb-3 text-xs font-semibold tracking-[0.4em] uppercase text-[var(--color-gold)]">
            Theravada Buddhism
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            上座部仏教
            <br />
            <span className="text-gradient">南伝仏教ガイド</span>
          </h1>
          <p className="mt-4 max-w-lg text-base text-white/60">
            2500年の伝統を持つ「長老の教え」— テーラワーダ仏教の全貌
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb
          items={[
            { label: "ホーム", href: "/" },
            { label: "上座部仏教・南伝仏教" },
          ]}
        />

        {/* 目次 */}
        <Card className="mt-8">
          <div className="p-6">
            <h2 className="text-lg font-bold text-[var(--color-foreground)] mb-4">
              📋 目次
            </h2>
            <nav className="space-y-2">
              {[
                { href: "#about", label: "☸ 上座部仏教とは" },
                { href: "#history", label: "📜 歴史" },
                { href: "#comparison", label: "⚖️ 大乗仏教との違い" },
                { href: "#teachings", label: "📿 教えの核心" },
                { href: "#practice", label: "🧘 修行法" },
                { href: "#canon", label: "📚 パーリ語三蔵" },
                { href: "#countries", label: "🌏 南伝仏教の国々" },
                { href: "#japan", label: "🇯🇵 日本との関わり" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors pl-2"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </Card>

        {/* 上座部仏教とは */}
        <section id="about" className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">☸</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              上座部仏教とは
            </h2>
          </div>
          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed whitespace-pre-line">
            {theravadaAbout}
          </div>
        </section>

        {/* 歴史 */}
        <section id="history" className="mt-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">📜</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              歴史
            </h2>
          </div>
          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed whitespace-pre-line">
            {theravadaHistory}
          </div>
        </section>

        {/* 大乗仏教との違い */}
        <section id="comparison" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">⚖️</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              大乗仏教との違い
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="px-4 py-3 text-left text-[var(--color-muted)] font-medium w-24">
                    項目
                  </th>
                  <th className="px-4 py-3 text-left font-medium">
                    <Tag label="上座部仏教" variant="gold" />
                  </th>
                  <th className="px-4 py-3 text-left font-medium">
                    <Tag label="大乗仏教" variant="temple" />
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {theravadaComparison.map((row) => (
                  <tr
                    key={row.topic}
                    className="hover:bg-white/5 transition-colors"
                  >
                    <td className="px-4 py-3 font-medium text-[var(--color-foreground)]">
                      {row.topic}
                    </td>
                    <td className="px-4 py-3 text-[var(--color-muted)]">
                      {row.theravada}
                    </td>
                    <td className="px-4 py-3 text-[var(--color-muted)]">
                      {row.mahayana}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 教えの核心 */}
        <section id="teachings" className="mt-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">📿</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              教えの核心
            </h2>
          </div>
          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed whitespace-pre-line">
            {theravadaTeachings}
          </div>
        </section>

        {/* 修行法 */}
        <section id="practice" className="mt-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🧘</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              修行法
            </h2>
          </div>
          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed whitespace-pre-line">
            {theravadaPractice}
          </div>
        </section>

        {/* パーリ語三蔵 */}
        <section id="canon" className="mt-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">📚</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              パーリ語三蔵（ティピタカ）
            </h2>
          </div>
          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed whitespace-pre-line">
            {theravadaCanon}
          </div>
        </section>

        {/* 南伝仏教の国々 */}
        <section id="countries" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🌏</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              南伝仏教の国々
            </h2>
          </div>
          <div className="space-y-6">
            {theravadaCountries.map((country) => (
              <Card key={country.name}>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-2xl">{country.emoji}</span>
                    <h3 className="text-lg font-bold text-[var(--color-foreground)]">
                      {country.name}
                    </h3>
                    <span className="text-xs text-[var(--color-gold)]">
                      {country.population}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-[var(--color-muted)] leading-relaxed">
                    {country.summary}
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg bg-[var(--color-background-elevated)] p-3">
                      <p className="text-xs font-semibold text-[var(--color-gold)] mb-1">
                        🏛️ 主な寺院・遺跡
                      </p>
                      <p className="text-sm text-[var(--color-muted)]">
                        {country.temples}
                      </p>
                    </div>
                    <div className="rounded-lg bg-[var(--color-background-elevated)] p-3">
                      <p className="text-xs font-semibold text-[var(--color-temple)] mb-1">
                        ✨ 特徴
                      </p>
                      <p className="text-sm text-[var(--color-muted)]">
                        {country.features}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* 日本との関わり */}
        <section id="japan" className="mt-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🇯🇵</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              日本との関わり
            </h2>
          </div>
          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed whitespace-pre-line">
            {theravadaJapanConnection}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-[var(--color-muted)] mb-4">
            仏教の世界をさらに深く知る
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/butsu-jiten"
              className="group relative rounded-full px-8 py-3.5 text-sm font-bold overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-temple)] to-[var(--color-gold)] opacity-90 group-hover:opacity-100 transition-opacity" />
              <span className="relative text-white">仏様辞典を見る</span>
            </Link>
            <Link
              href="/sanpai-manner"
              className="rounded-full border border-[var(--color-border)] px-8 py-3.5 text-sm font-bold text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:border-[var(--color-gold)]/40 transition-all"
            >
              参拝マナーを確認
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
