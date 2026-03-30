import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllChichibuTemples, getChichibuTemple } from "@/data/chichibu-data";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import SectionHeading from "@/components/ui/SectionHeading";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";

interface PageProps { params: Promise<{ num: string }>; }

export async function generateStaticParams() {
  return getAllChichibuTemples().map((t) => ({ num: String(t.num) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { num } = await params;
  const temple = getChichibuTemple(Number(num));
  if (!temple) return {};
  const url = `${SITE_URL}/chichibu/${num}`;
  return {
    title: `第${temple.num}番 ${temple.name}（${temple.yomikata}）- 秩父三十四箇所`,
    description: `秩父三十四箇所第${temple.num}番札所・${temple.name}の参拝ガイド。${temple.shuha}。本尊: ${temple.honzon}。`,
    keywords: [temple.name, "秩父三十四箇所", "秩父巡礼", temple.honzon, "御朱印"],
    alternates: { canonical: url },
    openGraph: { type: "article", title: `第${temple.num}番 ${temple.name}`, url, siteName: SITE_NAME, locale: "ja_JP" },
  };
}

export default async function ChichibuDetailPage({ params }: PageProps) {
  const { num } = await params;
  const temple = getChichibuTemple(Number(num));
  if (!temple) notFound();
  const allTemples = getAllChichibuTemples();
  const prev = allTemples.find((t) => t.num === temple.num - 1);
  const next = allTemples.find((t) => t.num === temple.num + 1);
  const url = `${SITE_URL}/chichibu/${num}`;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BuddhistTemple", name: temple.name, alternateName: `秩父三十四箇所 第${temple.num}番`, description: temple.origin, address: { "@type": "PostalAddress", streetAddress: temple.address, addressCountry: "JP" }, url }} />
      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "霊場めぐり", href: "/reijo" }, { label: "秩父三十四箇所", href: "/chichibu" }, { label: `第${temple.num}番 ${temple.name}` }]} />
      <div className="mt-6">
        <div className="flex items-center gap-2 mb-2"><Tag label={`第${temple.num}番`} variant="gold" /><Tag label={temple.shuha} variant="temple" /></div>
        <h1 className="text-3xl font-bold text-[var(--color-foreground)]">{temple.name}</h1>
        <p className="mt-1 text-[var(--color-muted)]">{temple.yomikata}｜埼玉県秩父</p>
        <p className="mt-1 text-sm text-[var(--color-gold)]">本尊: {temple.honzon}</p>
      </div>
      <div className="mt-8 space-y-8">
        <div><SectionHeading>由緒・歴史</SectionHeading><p className="mt-4 text-[var(--color-muted)] leading-relaxed">{temple.origin}</p></div>
        <div><SectionHeading>ご縁・ご利益</SectionHeading><p className="mt-4 text-[var(--color-muted)] leading-relaxed">{temple.goen}</p></div>
        {temple.yukari.length > 0 && (
          <div><SectionHeading>ゆかりの名士</SectionHeading>
            <ul className="mt-4 space-y-2">{temple.yukari.map((p, i) => (<li key={i} className="flex items-start gap-2 text-[var(--color-muted)]"><span className="text-[var(--color-gold)] mt-0.5 shrink-0">◆</span><span>{p}</span></li>))}</ul>
          </div>
        )}
        <div className="rounded-xl bg-[var(--color-gold-light)] border border-[var(--color-gold)]/20 px-5 py-4">
          <p className="text-sm text-[var(--color-gold)]"><span className="font-bold">💡 豆知識：</span>{temple.trivia}</p>
        </div>
        <Card><div className="p-6">
          <h2 className="text-lg font-bold text-[var(--color-foreground)] mb-4">参拝情報</h2>
          <dl className="space-y-3 text-sm">
            <div className="flex gap-2"><dt className="w-20 shrink-0 font-medium text-[var(--color-muted)]">所在地</dt><dd className="text-[var(--color-muted)]">{temple.address}</dd></div>
            <div className="flex gap-2"><dt className="w-20 shrink-0 font-medium text-[var(--color-muted)]">アクセス</dt><dd className="text-[var(--color-muted)]">{temple.access}</dd></div>
            <div className="flex gap-2"><dt className="w-20 shrink-0 font-medium text-[var(--color-muted)]">参拝時間</dt><dd className="text-[var(--color-muted)]">{temple.hours}</dd></div>
            <div className="flex gap-2"><dt className="w-20 shrink-0 font-medium text-[var(--color-muted)]">拝観料</dt><dd className="text-[var(--color-muted)]">{temple.admission}</dd></div>
          </dl>
        </div></Card>
        <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(temple.name + " " + temple.address)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-temple)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity">Google Mapsで開く →</a>
        <div className="flex items-center justify-between pt-6 border-t border-[var(--color-border)]">
          {prev ? <Link href={`/chichibu/${prev.num}`} className="text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)]">← 第{prev.num}番 {prev.name}</Link> : <span />}
          <Link href="/chichibu" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)]">一覧に戻る</Link>
          {next ? <Link href={`/chichibu/${next.num}`} className="text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)]">第{next.num}番 {next.name} →</Link> : <span />}
        </div>
      </div>
    </div>
  );
}
