import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllOhenroTemples, getOhenroTemple } from "@/data/ohenro-data";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import SectionHeading from "@/components/ui/SectionHeading";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";

interface PageProps {
  params: Promise<{ num: string }>;
}

const dojoLabel = (num: number) => {
  if (num <= 23) return "発心の道場";
  if (num <= 39) return "修行の道場";
  if (num <= 65) return "菩提の道場";
  return "涅槃の道場";
};

export async function generateStaticParams() {
  return getAllOhenroTemples().map((t) => ({ num: String(t.num) }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { num } = await params;
  const temple = getOhenroTemple(Number(num));
  if (!temple) return {};

  const url = `${SITE_URL}/ohenro/${num}`;
  const title = `第${temple.num}番 ${temple.name}（${temple.yomikata}）- 四国八十八箇所`;
  const desc = `四国八十八箇所第${temple.num}番札所・${temple.name}の参拝ガイド。${temple.shuha}。本尊: ${temple.honzon}。${temple.pref}。`;

  return {
    title,
    description: desc,
    keywords: [
      temple.name,
      "四国八十八箇所",
      "お遍路",
      temple.pref,
      temple.honzon,
      "巡礼",
      "御朱印",
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `第${temple.num}番 ${temple.name} - 四国八十八箇所`,
      description: desc,
      url,
      siteName: SITE_NAME,
      locale: "ja_JP",
    },
  };
}

export default async function OhenroDetailPage({ params }: PageProps) {
  const { num } = await params;
  const temple = getOhenroTemple(Number(num));
  if (!temple) notFound();

  const allTemples = getAllOhenroTemples();
  const prev = allTemples.find((t) => t.num === temple.num - 1);
  const next = allTemples.find((t) => t.num === temple.num + 1);

  const url = `${SITE_URL}/ohenro/${num}`;
  const dojo = dojoLabel(temple.num);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BuddhistTemple",
          name: temple.name,
          alternateName: `四国八十八箇所 第${temple.num}番`,
          description: temple.origin,
          address: {
            "@type": "PostalAddress",
            addressLocality: temple.pref,
            streetAddress: temple.address,
            addressCountry: "JP",
          },
          url,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "ホーム",
              item: SITE_URL,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "四国八十八箇所",
              item: `${SITE_URL}/ohenro`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: `第${temple.num}番 ${temple.name}`,
            },
          ],
        }}
      />

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "四国八十八箇所", href: "/ohenro" },
          { label: `第${temple.num}番 ${temple.name}` },
        ]}
      />

      {/* ヘッダー */}
      <div className="mt-6">
        <div className="flex items-center gap-2 mb-2">
          <Tag label={`第${temple.num}番`} variant="gold" />
          <Tag label={temple.shuha} variant="temple" />
          <Tag label={dojo} variant="shrine" />
        </div>
        <h1 className="text-3xl font-bold text-[var(--color-foreground)]">
          {temple.name}
        </h1>
        <p className="mt-1 text-[var(--color-muted)]">
          {temple.yomikata}｜{temple.pref}
        </p>
        <p className="mt-1 text-sm text-[var(--color-gold)]">
          本尊: {temple.honzon}
        </p>
      </div>

      <div className="mt-8 space-y-8">
        {/* 由緒 */}
        <div>
          <SectionHeading>由緒・歴史</SectionHeading>
          <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
            {temple.origin}
          </p>
        </div>

        {/* ご縁 */}
        <div>
          <SectionHeading>ご縁・ご利益</SectionHeading>
          <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
            {temple.goen}
          </p>
        </div>

        {/* ゆかりの名士 */}
        {temple.yukari.length > 0 && (
          <div>
            <SectionHeading>ゆかりの人物</SectionHeading>
            <ul className="mt-4 space-y-2">
              {temple.yukari.map((person, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-[var(--color-muted)]"
                >
                  <span className="text-[var(--color-gold)] mt-0.5 shrink-0">
                    ◆
                  </span>
                  <span>{person}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 豆知識 */}
        <div className="rounded-xl bg-[var(--color-gold-light)] border border-[var(--color-gold)]/20 px-5 py-4">
          <p className="text-sm text-[var(--color-gold)]">
            <span className="font-bold">💡 豆知識：</span>
            {temple.trivia}
          </p>
        </div>

        {/* 参拝情報 */}
        <Card>
          <div className="p-6">
            <h2 className="text-lg font-bold text-[var(--color-foreground)] mb-4">
              参拝情報
            </h2>
            <dl className="space-y-3 text-sm">
              <div className="flex gap-2">
                <dt className="w-20 shrink-0 font-medium text-[var(--color-muted)]">
                  所在地
                </dt>
                <dd className="text-[var(--color-muted)]">{temple.address}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-20 shrink-0 font-medium text-[var(--color-muted)]">
                  アクセス
                </dt>
                <dd className="text-[var(--color-muted)]">{temple.access}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-20 shrink-0 font-medium text-[var(--color-muted)]">
                  参拝時間
                </dt>
                <dd className="text-[var(--color-muted)]">{temple.hours}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-20 shrink-0 font-medium text-[var(--color-muted)]">
                  拝観料
                </dt>
                <dd className="text-[var(--color-muted)]">
                  {temple.admission}
                </dd>
              </div>
            </dl>
          </div>
        </Card>

        {/* 地図 */}
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(temple.name + " " + temple.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-temple)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity"
        >
          Google Mapsで開く →
        </a>

        {/* 前後ナビ */}
        <div className="flex items-center justify-between pt-6 border-t border-[var(--color-border)]">
          {prev ? (
            <Link
              href={`/ohenro/${prev.num}`}
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors"
            >
              ← 第{prev.num}番 {prev.name}
            </Link>
          ) : (
            <span />
          )}
          <Link
            href="/ohenro"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors"
          >
            一覧に戻る
          </Link>
          {next ? (
            <Link
              href={`/ohenro/${next.num}`}
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors"
            >
              第{next.num}番 {next.name} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </div>
  );
}
