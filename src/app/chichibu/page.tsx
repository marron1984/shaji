import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Card from "@/components/ui/Card";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";
import { getAllChichibuTemples } from "@/data/chichibu-data";

export const metadata: Metadata = {
  title: "秩父三十四箇所巡礼ガイド｜日本百観音の結願",
  description:
    "秩父三十四箇所巡礼の完全ガイド。埼玉県秩父地方に集中する34の観音霊場を全札所紹介。西国・坂東と合わせて日本百観音を構成する結願の巡礼路。",
  keywords: ["秩父三十四箇所", "秩父巡礼", "日本百観音", "観音霊場", "御朱印", "秩父"],
  alternates: { canonical: `${SITE_URL}/chichibu` },
  openGraph: { title: "秩父三十四箇所巡礼ガイド", description: "日本百観音の結願・秩父三十四箇所の完全ガイド。", url: `${SITE_URL}/chichibu`, type: "article" },
};

export default function ChichibuPage() {
  const temples = getAllChichibuTemples();

  return (
    <div>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "TouristTrip", name: "秩父三十四箇所巡礼", description: "埼玉県秩父地方の34の観音霊場を巡る約100kmの巡礼の旅", touristType: "Pilgrimage", itinerary: { "@type": "ItemList", numberOfItems: 34, itemListElement: temples.map((t) => ({ "@type": "ListItem", position: t.num, name: `第${t.num}番 ${t.name}` })) } }} />

      {/* ヒーロー */}
      <section className="relative h-[380px] sm:h-[440px] overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1400&q=80" alt="秩父の風景" fill className="object-cover brightness-[0.5]" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[var(--color-background)]" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.4em] uppercase text-[var(--color-gold)] drop-shadow">Chichibu Pilgrimage</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white drop-shadow-lg">秩父三十四箇所<br /><span className="text-gradient">巡礼ガイド</span></h1>
          <p className="mt-4 max-w-lg text-base text-white/70 drop-shadow">日本百観音の結願の地・秩父を巡る約100kmの祈りの旅</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "霊場めぐり", href: "/reijo" }, { label: "秩父三十四箇所" }]} />

        {/* 目次 */}
        <Card className="mt-8"><div className="p-6">
          <h2 className="text-lg font-bold text-[var(--color-foreground)] mb-4">📋 目次</h2>
          <nav className="space-y-2">
            {[
              { href: "#about", label: "🙏 秩父三十四箇所とは" },
              { href: "#all34", label: "⛩️ 全三十四箇所一覧" },
              { href: "#method", label: "🚶 巡り方と日数" },
              { href: "#history", label: "📜 歴史と由緒" },
            ].map((item) => (
              <a key={item.href} href={item.href} className="block text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors pl-2">{item.label}</a>
            ))}
          </nav>
        </div></Card>

        {/* 秩父三十四箇所とは */}
        <section id="about" className="mt-16">
          <div className="flex items-center gap-3 mb-6"><span className="text-3xl">🙏</span><h2 className="text-2xl font-bold text-[var(--color-foreground)]">秩父三十四箇所とは</h2></div>
          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
            <p>秩父三十四箇所は、埼玉県秩父地方に集中する34の観音霊場を巡る巡礼路です。総距離約100kmと比較的コンパクトで、歩き巡礼でも5〜7日で結願できます。</p>
            <p>文暦元年（1234年）の開創と伝えられ、西国三十三所（33）＋坂東三十三観音（33）＝66箇所に秩父の34箇所を加えると合計100箇所となり、「日本百観音」が完成します。秩父は百観音巡礼の「結願の地」として特別な位置づけにあります。</p>
            <p>秩父の山間部に点在する素朴な札所は、都市部の大寺院とは異なる温かみがあり、地元の人々との触れ合いも巡礼の魅力です。秩父の豊かな自然と共に歩く巡礼は、心を癒す旅になります。</p>
          </div>
        </section>

        {/* 全三十四箇所一覧 */}
        <section id="all34" className="mt-20">
          <div className="flex items-center gap-3 mb-8"><span className="text-3xl">⛩️</span><h2 className="text-2xl font-bold text-[var(--color-foreground)]">全三十四箇所一覧</h2></div>
          <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)]">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-[var(--color-border)]">
                <th className="px-3 py-3 text-left text-[var(--color-muted)] font-medium w-12">番</th>
                <th className="px-3 py-3 text-left text-[var(--color-muted)] font-medium">寺院名</th>
                <th className="px-3 py-3 text-left text-[var(--color-muted)] font-medium hidden sm:table-cell">本尊</th>
                <th className="px-3 py-3 text-left text-[var(--color-muted)] font-medium hidden md:table-cell">宗派</th>
              </tr></thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {temples.map((t) => (
                  <tr key={t.num} className="hover:bg-white/5 transition-colors">
                    <td className="px-3 py-2.5 font-bold text-[var(--color-gold)]">{t.num}</td>
                    <td className="px-3 py-2.5 font-medium"><Link href={`/chichibu/${t.num}`} className="text-[var(--color-foreground)] hover:text-[var(--color-gold)] transition-colors">{t.name}</Link></td>
                    <td className="px-3 py-2.5 text-[var(--color-muted)] hidden sm:table-cell">{t.honzon}</td>
                    <td className="px-3 py-2.5 text-[var(--color-muted)] hidden md:table-cell">{t.shuha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {temples.length < 34 && <p className="mt-3 text-xs text-[var(--color-muted)]">※ 現在{temples.length}番までの詳細を掲載中。残りの札所も順次追加予定です。</p>}
        </section>

        {/* 巡り方 */}
        <section id="method" className="mt-20">
          <div className="flex items-center gap-3 mb-8"><span className="text-3xl">🚶</span><h2 className="text-2xl font-bold text-[var(--color-foreground)]">巡り方と日数</h2></div>
          <div className="space-y-5">
            {[
              { icon: "🚶", name: "歩き巡礼", days: "5〜7日", cost: "5〜10万円", desc: "約100kmとコンパクト。秩父の山道を歩く充実の体験。宿泊は秩父市街のホテルや旅館を利用。" },
              { icon: "🚗", name: "車で巡る", days: "2〜3日", cost: "3〜5万円", desc: "秩父地方に集中しているため車なら効率的。1日10〜15箇所回れます。駐車場はほぼ無料。" },
              { icon: "🚃", name: "電車＋徒歩", days: "3〜5日", cost: "5〜8万円", desc: "西武秩父線・秩父鉄道沿線の札所が多く、電車でもアクセス可能。山間部の札所は徒歩が長くなります。" },
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
          <div className="flex items-center gap-3 mb-8"><span className="text-3xl">📜</span><h2 className="text-2xl font-bold text-[var(--color-foreground)]">歴史と由緒</h2></div>
          <div className="space-y-5">
            {[
              { era: "文暦元年（1234年）", title: "秩父巡礼の開創", desc: "播磨国の性空上人の弟子が秩父に観音霊場を開いたとされます。当初は三十三箇所でしたが、室町時代に1箇所追加されて三十四箇所となりました。" },
              { era: "室町〜江戸時代", title: "巡礼の普及と日本百観音の確立", desc: "江戸時代に「西国三十三所＋坂東三十三観音＋秩父三十四箇所＝日本百観音」の概念が確立。秩父は百観音の「結願」の地として位置づけられ、多くの巡礼者が訪れるようになりました。" },
              { era: "現代", title: "新しい巡礼文化", desc: "近年はウォーキングブームや御朱印ブームと相まって若い世代の巡礼者が増加。コンパクトな距離と秩父の自然・グルメ（わらじカツ丼・秩父そば・みそポテト）も人気の理由です。" },
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
            <Link href="/reijo" className="group relative rounded-full px-8 py-3.5 text-sm font-bold overflow-hidden"><span className="absolute inset-0 bg-gradient-to-r from-[var(--color-shrine)] to-[var(--color-gold)] opacity-90 group-hover:opacity-100 transition-opacity" /><span className="relative text-white">霊場めぐり一覧</span></Link>
            <Link href="/sanpai-manner" className="rounded-full border border-[var(--color-border)] px-8 py-3.5 text-sm font-bold text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:border-[var(--color-gold)]/40 transition-all">参拝マナーガイド</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
