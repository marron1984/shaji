import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Card from "@/components/ui/Card";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";
import { getAllKojikiStories } from "@/data/kojiki-data";

export const metadata: Metadata = {
  title: "古事記の神話物語｜日本の創世から神武天皇まで",
  description:
    "古事記に記された日本神話の物語を分かりやすく解説。天地開闢、国生み、天岩戸、ヤマタノオロチ退治、天孫降臨など12の神話を、関連する神社情報とともに紹介。",
  keywords: [
    "古事記",
    "日本神話",
    "天照大御神",
    "スサノオ",
    "大国主",
    "イザナギ",
    "イザナミ",
    "天岩戸",
    "ヤマタノオロチ",
    "天孫降臨",
    "神武天皇",
  ],
  alternates: {
    canonical: `${SITE_URL}/kojiki`,
    languages: { ja: `${SITE_URL}/kojiki`, en: `${SITE_URL}/en/kojiki` },
  },
  openGraph: {
    title: "古事記の神話物語｜日本の創世から神武天皇まで",
    description:
      "古事記に記された日本神話12の物語を、関連する神社情報とともに詳しく解説。",
    url: `${SITE_URL}/kojiki`,
    type: "article",
  },
};

const stories = getAllKojikiStories();

const kamiyoStories = stories.filter((s) => s.era === "kamiyo");
const chuukanStories = stories.filter((s) => s.era === "chuukan");

export default function KojikiPage() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "古事記の神話物語",
          description:
            "古事記に記された日本神話12の物語を関連神社情報とともに解説",
          url: `${SITE_URL}/kojiki`,
          publisher: { "@type": "Organization", name: SITE_NAME },
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: stories.length,
            itemListElement: stories.map((s) => ({
              "@type": "ListItem",
              position: s.num,
              name: s.title,
              url: `${SITE_URL}/kojiki/${s.slug}`,
            })),
          },
        }}
      />

      {/* ヒーロー */}
      <section className="relative h-[380px] sm:h-[440px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=1400&q=80"
          alt="古事記の神話世界"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[var(--color-background)]" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <p className="mb-3 text-xs font-semibold tracking-[0.4em] uppercase text-[var(--color-gold)]">
            Kojiki Mythology
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            古事記の
            <span className="text-gradient">神話物語</span>
          </h1>
          <p className="mt-4 max-w-lg text-base text-white/60">
            天地の始まりから神武天皇の建国まで——日本最古の歴史書が伝える12の壮大な物語
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb
          items={[
            { label: "ホーム", href: "/" },
            { label: "古事記の神話物語" },
          ]}
        />

        {/* 古事記とは */}
        <section className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">📜</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              古事記とは
            </h2>
          </div>
          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
            <p>
              古事記（こじき）は、和銅5年（712年）に太安万侶（おおのやすまろ）が天武天皇の命により編纂した日本最古の歴史書です。稗田阿礼（ひえだのあれ）が暗誦した神話・伝承・歌謡を記録したもので、上巻（神代）・中巻・下巻の三巻で構成されています。
            </p>
            <p>
              天地の始まりから神々の物語、そして初代天皇・神武天皇の即位へと至る壮大な叙事詩であり、日本人の精神文化・自然観・死生観の根幹を成す物語です。ここに登場する神々は現在も全国の神社に祀られ、日本の信仰と文化に息づいています。
            </p>
          </div>
        </section>

        {/* 目次 */}
        <Card className="mt-10">
          <div className="p-6">
            <h2 className="text-lg font-bold text-[var(--color-foreground)] mb-4">
              📋 全{stories.length}話の神話物語
            </h2>
            <nav className="space-y-2">
              {stories.map((s) => (
                <a
                  key={s.slug}
                  href={`#story-${s.num}`}
                  className="block text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors pl-2"
                >
                  {s.emoji} 第{s.num}話 {s.title}（{s.subtitle}）
                </a>
              ))}
            </nav>
          </div>
        </Card>

        {/* 上巻（神代） */}
        <section className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🌅</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              上巻（神代）——神々の時代
            </h2>
          </div>
          <p className="text-[var(--color-muted)] leading-relaxed mb-8">
            天地の始まりから、イザナギ・イザナミの国生み、アマテラスの岩戸隠れ、スサノオの英雄譚、大国主の国造りまで。日本の国土と神々が生まれる壮大な物語。
          </p>
          <div className="space-y-4">
            {kamiyoStories.map((s) => (
              <div key={s.slug} id={`story-${s.num}`}>
                <Link href={`/kojiki/${s.slug}`}>
                  <Card>
                    <div className="p-5 flex gap-4">
                      <span className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg"
                        style={{ background: "var(--color-gold-light)", border: "1px solid var(--color-gold)" }}>
                        {s.emoji}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium text-[var(--color-gold)]">
                            第{s.num}話
                          </span>
                          <span className="text-xs text-[var(--color-muted)]">
                            {s.eraLabel}
                          </span>
                        </div>
                        <h3 className="font-bold text-[var(--color-foreground)]">
                          {s.title}
                          <span className="ml-2 text-sm font-normal text-[var(--color-muted)]">
                            {s.subtitle}
                          </span>
                        </h3>
                        <p className="mt-1 text-sm text-[var(--color-muted)] leading-relaxed line-clamp-2">
                          {s.summary}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {s.deities.slice(0, 3).map((d) => (
                            <span
                              key={d.name}
                              className="inline-block rounded-full bg-white/5 border border-[var(--color-border)] px-2 py-0.5 text-xs text-[var(--color-muted)]"
                            >
                              {d.name.split("（")[0]}
                            </span>
                          ))}
                          {s.deities.length > 3 && (
                            <span className="text-xs text-[var(--color-muted)]">
                              他{s.deities.length - 3}柱
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* 中巻 */}
        <section className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">⚔️</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              中巻——天つ神から地上の王へ
            </h2>
          </div>
          <p className="text-[var(--color-muted)] leading-relaxed mb-8">
            国譲りを経て天孫ニニギが高千穂に降臨し、海幸山幸の兄弟物語を経て、初代天皇・神武天皇が大和に王権を築くまでの物語。
          </p>
          <div className="space-y-4">
            {chuukanStories.map((s) => (
              <div key={s.slug} id={`story-${s.num}`}>
                <Link href={`/kojiki/${s.slug}`}>
                  <Card>
                    <div className="p-5 flex gap-4">
                      <span className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg"
                        style={{ background: "var(--color-shrine-light)", border: "1px solid var(--color-shrine)" }}>
                        {s.emoji}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium text-[var(--color-shrine)]">
                            第{s.num}話
                          </span>
                          <span className="text-xs text-[var(--color-muted)]">
                            {s.eraLabel}
                          </span>
                        </div>
                        <h3 className="font-bold text-[var(--color-foreground)]">
                          {s.title}
                          <span className="ml-2 text-sm font-normal text-[var(--color-muted)]">
                            {s.subtitle}
                          </span>
                        </h3>
                        <p className="mt-1 text-sm text-[var(--color-muted)] leading-relaxed line-clamp-2">
                          {s.summary}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {s.deities.slice(0, 3).map((d) => (
                            <span
                              key={d.name}
                              className="inline-block rounded-full bg-white/5 border border-[var(--color-border)] px-2 py-0.5 text-xs text-[var(--color-muted)]"
                            >
                              {d.name.split("（")[0]}
                            </span>
                          ))}
                          {s.deities.length > 3 && (
                            <span className="text-xs text-[var(--color-muted)]">
                              他{s.deities.length - 3}柱
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* 関連する神社 */}
        <section className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">⛩️</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              古事記ゆかりの主な神社
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "伊勢神宮", deity: "天照大御神", pref: "三重県" },
              { name: "出雲大社", deity: "大国主命", pref: "島根県" },
              { name: "熱田神宮", deity: "草薙剣", pref: "愛知県" },
              { name: "住吉大社", deity: "住吉三神", pref: "大阪府" },
              { name: "鹿島神宮", deity: "タケミカヅチ", pref: "茨城県" },
              { name: "諏訪大社", deity: "タケミナカタ", pref: "長野県" },
              { name: "霧島神宮", deity: "ニニギノミコト", pref: "鹿児島県" },
              { name: "橿原神宮", deity: "神武天皇", pref: "奈良県" },
            ].map((shrine) => (
              <Card key={shrine.name}>
                <div className="p-4">
                  <h3 className="font-bold text-[var(--color-foreground)]">
                    {shrine.name}
                  </h3>
                  <p className="text-xs text-[var(--color-muted)] mt-1">
                    {shrine.pref}｜{shrine.deity}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-[var(--color-muted)] mb-4">
            もっと日本の文化を深く知る
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/jinja"
              className="group relative rounded-full px-8 py-3.5 text-sm font-bold overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-shrine)] to-[var(--color-gold)] opacity-90 group-hover:opacity-100 transition-opacity" />
              <span className="relative text-white">神社・お寺一覧</span>
            </Link>
            <Link
              href="/sanpai-manner"
              className="rounded-full border border-[var(--color-border)] px-8 py-3.5 text-sm font-bold text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:border-[var(--color-gold)]/40 transition-all"
            >
              参拝マナーガイド
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
