import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Card from "@/components/ui/Card";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";
import { getAllBandoTemples } from "@/data/bando-data";

export const metadata: Metadata = {
  title: "坂東三十三観音霊場ガイド｜関東の観音巡礼",
  description:
    "坂東三十三観音霊場の完全ガイド。関東1都6県にまたがる33の観音霊場を全札所紹介。巡り方、御朱印、費用、おすすめルートを解説。",
  keywords: ["坂東三十三観音", "坂東巡礼", "観音霊場", "関東", "御朱印", "巡礼"],
  alternates: { canonical: `${SITE_URL}/bando` },
  openGraph: { title: "坂東三十三観音霊場ガイド", description: "関東の観音巡礼・坂東三十三観音の完全ガイド。", url: `${SITE_URL}/bando`, type: "article" },
};

const prefGroups = [
  { pref: "神奈川県", nums: [1, 2, 3, 4, 5, 6, 7, 8, 14], color: "var(--color-shrine)" },
  { pref: "埼玉県", nums: [9, 10, 11, 12], color: "var(--color-temple)" },
  { pref: "東京都", nums: [13], color: "var(--color-gold)" },
  { pref: "群馬県", nums: [15, 16], color: "var(--color-shrine)" },
  { pref: "栃木県", nums: [17, 18, 19, 20], color: "var(--color-temple)" },
  { pref: "茨城県", nums: [21, 22, 23, 24, 25, 26], color: "var(--color-gold)" },
  { pref: "千葉県", nums: [27, 28, 29, 30, 31, 32, 33], color: "var(--color-shrine)" },
];

export default function BandoPage() {
  const temples = getAllBandoTemples();

  return (
    <div>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "TouristTrip", name: "坂東三十三観音霊場", description: "関東1都6県にまたがる33の観音霊場を巡る巡礼の旅", touristType: "Pilgrimage", itinerary: { "@type": "ItemList", numberOfItems: 33, itemListElement: temples.map((t) => ({ "@type": "ListItem", position: t.num, name: `第${t.num}番 ${t.name}` })) } }} />

      {/* ヒーロー */}
      <section className="relative h-[380px] sm:h-[440px] overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1400&q=80" alt="関東の寺院" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[var(--color-background)]" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <p className="mb-3 text-xs font-semibold tracking-[0.4em] uppercase text-[var(--color-gold)]">Bando Pilgrimage</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">坂東三十三観音<br /><span className="text-gradient">霊場ガイド</span></h1>
          <p className="mt-4 max-w-lg text-base text-white/60">源頼朝の観音信仰に始まる関東の巡礼路・約1,300km</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "坂東三十三観音" }]} />

        {/* 目次 */}
        <Card className="mt-8"><div className="p-6">
          <h2 className="text-lg font-bold text-[var(--color-foreground)] mb-4">📋 目次</h2>
          <nav className="space-y-2">
            {[
              { href: "#about", label: "🙏 坂東三十三観音とは" },
              { href: "#all33", label: "⛩️ 全三十三箇所一覧" },
              { href: "#pref", label: "🗺️ 都県別ガイド" },
              { href: "#method", label: "🚗 巡り方と日数" },
              { href: "#history", label: "📜 歴史と由緒" },
            ].map((item) => (
              <a key={item.href} href={item.href} className="block text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors pl-2">{item.label}</a>
            ))}
          </nav>
        </div></Card>

        {/* 坂東三十三観音とは */}
        <section id="about" className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🙏</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">坂東三十三観音とは</h2>
          </div>
          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
            <p>坂東三十三観音霊場は、関東1都6県（神奈川・埼玉・東京・群馬・栃木・茨城・千葉）にまたがる33の観音霊場を巡る巡礼路です。総距離は約1,300kmに及びます。</p>
            <p>源頼朝の篤い観音信仰がきっかけとなり、鎌倉時代初期に開創されました。西国三十三所に倣って関東にも観音巡礼を広めたもので、後に秩父三十四箇所と合わせて「日本百観音」と称されるようになりました。</p>
            <p>関東平野を中心に、鎌倉・日光・筑波・房総など各地の名刹を巡ります。都市部の寺院から山深い霊場まで変化に富んだコースが特徴です。</p>
          </div>
        </section>

        {/* 全三十三箇所一覧 */}
        <section id="all33" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">⛩️</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">全三十三箇所一覧</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)]">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-[var(--color-border)]">
                <th className="px-3 py-3 text-left text-[var(--color-muted)] font-medium w-12">番</th>
                <th className="px-3 py-3 text-left text-[var(--color-muted)] font-medium">寺院名</th>
                <th className="px-3 py-3 text-left text-[var(--color-muted)] font-medium hidden sm:table-cell">所在地</th>
                <th className="px-3 py-3 text-left text-[var(--color-muted)] font-medium hidden md:table-cell">本尊</th>
              </tr></thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {temples.map((t) => (
                  <tr key={t.num} className="hover:bg-white/5 transition-colors">
                    <td className="px-3 py-2.5 font-bold text-[var(--color-gold)]">{t.num}</td>
                    <td className="px-3 py-2.5 font-medium"><Link href={`/bando/${t.num}`} className="text-[var(--color-foreground)] hover:text-[var(--color-gold)] transition-colors">{t.name}</Link></td>
                    <td className="px-3 py-2.5 text-[var(--color-muted)] hidden sm:table-cell">{t.pref}</td>
                    <td className="px-3 py-2.5 text-[var(--color-muted)] hidden md:table-cell">{t.honzon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {temples.length < 33 && (
            <p className="mt-3 text-xs text-[var(--color-muted)]">※ 現在{temples.length}番までの詳細を掲載中。残りの札所も順次追加予定です。</p>
          )}
        </section>

        {/* 都県別ガイド */}
        <section id="pref" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🗺️</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">都県別ガイド</h2>
          </div>
          <div className="space-y-6">
            {prefGroups.map((g) => {
              const available = g.nums.filter((n) => temples.some((t) => t.num === n));
              if (available.length === 0) return (
                <Card key={g.pref}><div className="p-5">
                  <div className="flex items-center gap-3"><span className="w-3 h-3 rounded-full" style={{ background: g.color }} /><h3 className="text-lg font-bold text-[var(--color-foreground)]">{g.pref}</h3><span className="text-sm text-[var(--color-muted)]">{g.nums.length}箇所</span></div>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">詳細データは順次追加予定です</p>
                </div></Card>
              );
              return (
                <Card key={g.pref}><div className="p-6">
                  <div className="flex items-center gap-3 mb-4"><span className="w-3 h-3 rounded-full" style={{ background: g.color }} /><h3 className="text-lg font-bold text-[var(--color-foreground)]">{g.pref}</h3><span className="text-sm text-[var(--color-muted)]">{g.nums.length}箇所</span></div>
                  <div className="space-y-3">
                    {available.map((num) => {
                      const t = temples.find((x) => x.num === num)!;
                      return (
                        <div key={num} className="flex items-start gap-3">
                          <span className="shrink-0 w-8 h-6 rounded text-center text-xs font-bold leading-6 text-white" style={{ background: g.color }}>{num}</span>
                          <div><Link href={`/bando/${num}`} className="font-medium text-[var(--color-foreground)] hover:text-[var(--color-gold)] transition-colors">{t.name}</Link></div>
                        </div>
                      );
                    })}
                  </div>
                </div></Card>
              );
            })}
          </div>
        </section>

        {/* 巡り方 */}
        <section id="method" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🚗</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">巡り方と日数</h2>
          </div>
          <div className="space-y-5">
            {[
              { icon: "🚗", name: "車で巡る", days: "5〜10日", cost: "10〜20万円", desc: "関東全域に点在するため車が最も効率的。高速道路を活用し、1日3〜5箇所を目安に。駐車場は概ね完備されています。" },
              { icon: "🚃", name: "電車＋バス", days: "10〜20日", cost: "10〜15万円", desc: "都市部の札所はアクセス良好ですが、山間部や千葉の房総エリアはバスの本数が少なく時間がかかります。" },
              { icon: "🚶", name: "歩き巡礼", days: "40〜60日", cost: "30〜50万円", desc: "約1,300kmを歩きます。関東平野は平坦な道が多いですが、日光や房総の山間部は健脚が必要。宿泊施設の確保が課題です。" },
            ].map((m) => (
              <Card key={m.name}><div className="p-5">
                <div className="flex items-center gap-3 mb-2"><span className="text-2xl">{m.icon}</span><div><h3 className="font-bold text-[var(--color-foreground)]">{m.name}</h3><p className="text-xs text-[var(--color-muted)]">日数: {m.days}｜費用: {m.cost}</p></div></div>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{m.desc}</p>
              </div></Card>
            ))}
          </div>
        </section>

        {/* 歴史 */}
        <section id="history" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">📜</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">歴史と由緒</h2>
          </div>
          <div className="space-y-5">
            {[
              { era: "鎌倉時代初期（13世紀）", title: "源頼朝の観音信仰に始まる", desc: "源頼朝が西国三十三所に倣い、関東にも観音巡礼を広めようとしたのが起源。鎌倉を起点に関東一円の観音霊場が選定されました。実朝の時代に現在の33箇所が確定したとされます。" },
              { era: "室町〜戦国時代", title: "武士と庶民への普及", desc: "関東の武士たちが戦勝祈願や菩提のために巡礼し、次第に庶民にも広まりました。各札所は地域の信仰の中心として発展しました。" },
              { era: "江戸時代", title: "巡礼文化の隆盛", desc: "街道の整備と共に巡礼が盛んになり、西国・坂東・秩父を合わせた「日本百観音」の概念が確立。御詠歌も整えられ、巡礼の形が完成しました。" },
            ].map((item) => (
              <Card key={item.era}><div className="p-5">
                <p className="text-xs font-semibold text-[var(--color-gold)]">{item.era}</p>
                <h3 className="mt-1 font-bold text-[var(--color-foreground)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">{item.desc}</p>
              </div></Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-[var(--color-muted)] mb-4">他の巡礼ガイドもご覧ください</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/saigoku" className="group relative rounded-full px-8 py-3.5 text-sm font-bold overflow-hidden"><span className="absolute inset-0 bg-gradient-to-r from-[var(--color-shrine)] to-[var(--color-gold)] opacity-90 group-hover:opacity-100 transition-opacity" /><span className="relative text-white">西国三十三所ガイド</span></Link>
            <Link href="/ohenro" className="rounded-full border border-[var(--color-border)] px-8 py-3.5 text-sm font-bold text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:border-[var(--color-gold)]/40 transition-all">四国八十八箇所ガイド</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
