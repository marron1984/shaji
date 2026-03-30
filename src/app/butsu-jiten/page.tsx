import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";
import {
  getAllButsuDeities,
  getButsuByCategory,
  BUTSU_CATEGORIES,
} from "@/data/butsu-data";

export const metadata: Metadata = {
  title: "仏様辞典｜如来・菩薩・明王・天部を網羅的に解説",
  description:
    "日本の仏教に登場する仏様を網羅的に解説。如来・菩薩・明王・天部の四種類に分けて、お姿の特徴・ご利益・真言・代表的な寺院まで詳しく紹介します。",
  keywords: [
    "仏様",
    "仏像",
    "如来",
    "菩薩",
    "明王",
    "天部",
    "仏教",
    "ご利益",
    "真言",
    "観音",
    "不動明王",
    "阿弥陀如来",
  ],
  alternates: { canonical: `${SITE_URL}/butsu-jiten` },
  openGraph: {
    title: "仏様辞典｜如来・菩薩・明王・天部を網羅的に解説",
    description:
      "日本の仏教に登場する仏様を網羅的に解説。お姿の特徴・ご利益・真言まで詳しく紹介。",
    url: `${SITE_URL}/butsu-jiten`,
    type: "article",
  },
};

const categoryVariant = {
  nyorai: "gold",
  bosatsu: "temple",
  myoo: "shrine",
  tenbu: "gray",
} as const;

export default function ButsuJitenPage() {
  const allDeities = getAllButsuDeities();

  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "仏様辞典",
          description:
            "日本の仏教に登場する仏様を網羅的に解説する辞典",
          url: `${SITE_URL}/butsu-jiten`,
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: allDeities.length,
            itemListElement: allDeities.map((d, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: d.name,
              url: `${SITE_URL}/butsu-jiten/${d.slug}`,
            })),
          },
        }}
      />

      {/* ヒーロー */}
      <section className="relative h-[380px] sm:h-[440px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-temple)]/20 via-black/60 to-[var(--color-background)]" />
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <span className="text-[300px] select-none">☸</span>
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <p className="mb-3 text-xs font-semibold tracking-[0.4em] uppercase text-[var(--color-gold)]">
            Buddhist Deity Encyclopedia
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="text-gradient">仏様辞典</span>
          </h1>
          <p className="mt-4 max-w-lg text-base text-white/60">
            如来・菩薩・明王・天部 — 日本仏教の仏様を網羅的に解説
          </p>
          <p className="mt-2 text-sm text-white/40">
            全{allDeities.length}尊を収録
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb
          items={[
            { label: "ホーム", href: "/" },
            { label: "仏様辞典" },
          ]}
        />

        {/* 仏様とは */}
        <section className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">☸</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              仏様とは
            </h2>
          </div>
          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
            <p>
              お寺を参拝したとき、本堂に安置された仏像に手を合わせたことがある方は多いでしょう。しかし、その仏様がどのような存在で、どのようなご利益があるのかをご存知でしょうか。
            </p>
            <p>
              仏教には多種多様な仏様が存在し、大きく「如来」「菩薩」「明王」「天部」の四つの階層に分けられます。悟りを開いた最高位の「如来」、衆生を救うために修行する「菩薩」、忿怒の姿で煩悩を打ち砕く「明王」、そして仏法を守護する天界の「天部」。それぞれに個性的なお姿とご利益があります。
            </p>
            <p>
              この辞典では、日本の寺院でお目にかかれる主要な仏様を網羅的に紹介します。お姿の見分け方、ご利益、真言、ゆかりの寺院まで詳しく解説していますので、寺院巡りのお供にご活用ください。
            </p>
          </div>
        </section>

        {/* 四種類の解説 */}
        <section className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">📖</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              仏様の四つの階層
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {BUTSU_CATEGORIES.map((cat) => (
              <Card key={cat.key}>
                <a href={`#${cat.key}`} className="block p-5 group">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{cat.emoji}</span>
                    <h3 className="text-lg font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-gold)] transition-colors">
                      {cat.label}
                    </h3>
                    <span className="ml-auto text-xs text-[var(--color-muted)]">
                      {getButsuByCategory(cat.key).length}尊
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-muted)]">
                    {cat.description}
                  </p>
                </a>
              </Card>
            ))}
          </div>
        </section>

        {/* カテゴリ別一覧 */}
        {BUTSU_CATEGORIES.map((cat) => {
          const deities = getButsuByCategory(cat.key);
          if (deities.length === 0) return null;
          return (
            <section key={cat.key} id={cat.key} className="mt-20">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">{cat.emoji}</span>
                <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
                  {cat.label}
                </h2>
                <span className="text-sm text-[var(--color-muted)]">
                  （{deities.length}尊）
                </span>
              </div>
              <div className="space-y-4">
                {deities.map((deity) => (
                  <Link key={deity.slug} href={`/butsu-jiten/${deity.slug}`}>
                    <Card>
                      <div className="p-5 flex gap-4 group">
                        <span className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl bg-[var(--color-background-elevated)]">
                          {deity.emoji}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-gold)] transition-colors">
                              {deity.name}
                            </h3>
                            <Tag
                              label={deity.categoryLabel}
                              variant={categoryVariant[deity.category]}
                            />
                          </div>
                          <p className="text-xs text-[var(--color-temple)] mb-1">
                            {deity.yomikata}・{deity.sanskrit}
                          </p>
                          <p className="text-sm text-[var(--color-muted)] line-clamp-2">
                            {deity.summary}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-[var(--color-muted)] mb-4">
            仏様を知って、寺院巡りをもっと楽しく
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/temples"
              className="group relative rounded-full px-8 py-3.5 text-sm font-bold overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-temple)] to-[var(--color-gold)] opacity-90 group-hover:opacity-100 transition-opacity" />
              <span className="relative text-white">寺院を探す</span>
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
