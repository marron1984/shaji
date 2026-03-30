import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Card from "@/components/ui/Card";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "西国三十三所巡礼ガイド｜日本最古の巡礼路を歩く",
  description:
    "西国三十三所巡礼の完全ガイド。近畿2府4県と岐阜県にまたがる33の観音霊場を解説。巡り方、御朱印、費用、おすすめルートまで徹底紹介。",
  keywords: [
    "西国三十三所",
    "西国巡礼",
    "観音巡礼",
    "御朱印",
    "巡礼",
    "花山法皇",
    "観音霊場",
  ],
  alternates: { canonical: `${SITE_URL}/saigoku` },
  openGraph: {
    title: "西国三十三所巡礼ガイド",
    description:
      "日本最古の巡礼路・西国三十三所の完全ガイド。33の観音霊場を徹底解説。",
    url: `${SITE_URL}/saigoku`,
    type: "article",
  },
};

const temples = [
  // 和歌山
  { num: 1, name: "青岸渡寺", pref: "和歌山", area: "紀伊", note: "那智の滝を望む。お遍路の起点", honzon: "如意輪観音" },
  { num: 2, name: "紀三井寺", pref: "和歌山", area: "紀伊", note: "桜の名所。231段の石段", honzon: "十一面観音" },
  { num: 3, name: "粉河寺", pref: "和歌山", area: "紀伊", note: "西国最大級の本堂。粉河観音縁起", honzon: "千手千眼観音" },
  // 大阪
  { num: 4, name: "施福寺", pref: "大阪", area: "和泉", note: "槇尾山の山頂。西国屈指の難所", honzon: "十一面千手千眼観音" },
  { num: 5, name: "葛井寺", pref: "大阪", area: "河内", note: "国宝・千手観音は実際に1,041本の手", honzon: "十一面千手千眼観音" },
  // 奈良
  { num: 6, name: "南法華寺（壷阪寺）", pref: "奈良", area: "大和", note: "眼病封じ。お里・沢市の浄瑠璃で有名", honzon: "十一面千手千眼観音" },
  { num: 7, name: "岡寺（龍蓋寺）", pref: "奈良", area: "大和", note: "日本最大の塑像観音。厄除けの名所", honzon: "如意輪観音" },
  { num: 8, name: "長谷寺", pref: "奈良", area: "大和", note: "「花の御寺」。登廊の399段", honzon: "十一面観音" },
  { num: 9, name: "興福寺 南円堂", pref: "奈良", area: "大和", note: "藤原氏の氏寺。不空羂索観音は国宝", honzon: "不空羂索観音" },
  // 京都
  { num: 10, name: "三室戸寺", pref: "京都", area: "山城", note: "あじさい寺。1万株の紫陽花", honzon: "千手観音" },
  { num: 11, name: "上醍醐 准胝堂", pref: "京都", area: "山城", note: "醍醐山の山上。2008年焼失後再建", honzon: "准胝観音" },
  { num: 12, name: "正法寺（岩間寺）", pref: "滋賀", area: "近江", note: "芭蕉「古池や」の句の舞台", honzon: "千手観音" },
  { num: 13, name: "石山寺", pref: "滋賀", area: "近江", note: "紫式部が源氏物語を起筆した寺", honzon: "如意輪観音" },
  { num: 14, name: "三井寺（園城寺）", pref: "滋賀", area: "近江", note: "天台寺門宗の総本山。弁慶の引き摺り鐘", honzon: "如意輪観音" },
  { num: 15, name: "今熊野観音寺", pref: "京都", area: "山城", note: "頭痛封じの観音。東山の紅葉名所", honzon: "十一面観音" },
  { num: 16, name: "清水寺", pref: "京都", area: "山城", note: "世界遺産。清水の舞台", honzon: "十一面千手千眼観音" },
  { num: 17, name: "六波羅蜜寺", pref: "京都", area: "山城", note: "空也上人像。口から阿弥陀仏が出る彫刻", honzon: "十一面観音" },
  { num: 18, name: "六角堂 頂法寺", pref: "京都", area: "山城", note: "いけばな発祥の地。京都のへそ", honzon: "如意輪観音" },
  { num: 19, name: "革堂 行願寺", pref: "京都", area: "山城", note: "皮聖の伝説。町中の庶民的な札所", honzon: "千手観音" },
  { num: 20, name: "善峯寺", pref: "京都", area: "山城", note: "遊龍の松（天然記念物）。京都を一望", honzon: "千手観音" },
  { num: 21, name: "穴太寺", pref: "京都", area: "丹波", note: "身代わり観音伝説。釈迦涅槃像に触れて祈願", honzon: "聖観音" },
  { num: 22, name: "総持寺", pref: "大阪", area: "摂津", note: "亀の恩返し伝説。包丁式の奉納", honzon: "千手観音" },
  // 兵庫
  { num: 23, name: "勝尾寺", pref: "大阪", area: "摂津", note: "勝運の寺。だるまが境内に並ぶ", honzon: "十一面千手観音" },
  { num: 24, name: "中山寺", pref: "兵庫", area: "摂津", note: "安産祈願の名所。日本初の観音霊場", honzon: "十一面観音" },
  { num: 25, name: "播州清水寺", pref: "兵庫", area: "播磨", note: "標高552m。紅葉と雲海の名所", honzon: "十一面千手観音" },
  { num: 26, name: "一乗寺", pref: "兵庫", area: "播磨", note: "国宝の三重塔。天竺から飛来した伝説", honzon: "聖観音" },
  { num: 27, name: "圓教寺", pref: "兵庫", area: "播磨", note: "書写山。映画「ラストサムライ」のロケ地", honzon: "如意輪観音" },
  // 京都北部
  { num: 28, name: "成相寺", pref: "京都", area: "丹後", note: "天橋立を望む。身代わり観音", honzon: "聖観音" },
  { num: 29, name: "松尾寺", pref: "京都", area: "丹後", note: "馬頭観音の唯一の札所", honzon: "馬頭観音" },
  // 滋賀
  { num: 30, name: "宝厳寺", pref: "滋賀", area: "近江", note: "竹生島。琵琶湖に浮かぶ神の島", honzon: "千手千眼観音" },
  { num: 31, name: "長命寺", pref: "滋賀", area: "近江", note: "808段の石段。健康長寿の寺", honzon: "千手十一面聖観音" },
  { num: 32, name: "観音正寺", pref: "滋賀", area: "近江", note: "繖山の山上。聖徳太子の開基", honzon: "千手千眼観音" },
  // 岐阜
  { num: 33, name: "華厳寺", pref: "岐阜", area: "美濃", note: "結願の寺。「たにぐみさん」の愛称", honzon: "十一面観音" },
];

const prefGroups = [
  { pref: "和歌山県", nums: [1, 2, 3], color: "var(--color-shrine)" },
  { pref: "大阪府", nums: [4, 5, 22, 23], color: "var(--color-temple)" },
  { pref: "奈良県", nums: [6, 7, 8, 9], color: "var(--color-gold)" },
  { pref: "京都府", nums: [10, 11, 15, 16, 17, 18, 19, 20, 21, 28, 29], color: "var(--color-shrine)" },
  { pref: "滋賀県", nums: [12, 13, 14, 30, 31, 32], color: "var(--color-temple)" },
  { pref: "兵庫県", nums: [24, 25, 26, 27], color: "var(--color-gold)" },
  { pref: "岐阜県", nums: [33], color: "var(--color-shrine)" },
];

export default function SaigokuPage() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: "西国三十三所巡礼",
          description: "日本最古の巡礼路。近畿2府4県と岐阜県にまたがる33の観音霊場を巡る",
          touristType: "Pilgrimage",
          itinerary: {
            "@type": "ItemList",
            numberOfItems: 33,
            itemListElement: temples.map((t) => ({
              "@type": "ListItem",
              position: t.num,
              name: `第${t.num}番 ${t.name}`,
            })),
          },
        }}
      />

      {/* ヒーロー */}
      <section className="relative h-[380px] sm:h-[440px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1400&q=80"
          alt="西国三十三所の観音霊場"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[var(--color-background)]" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <p className="mb-3 text-xs font-semibold tracking-[0.4em] uppercase text-[var(--color-gold)]">
            Saigoku Pilgrimage
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            西国三十三所
            <br />
            <span className="text-gradient">巡礼ガイド</span>
          </h1>
          <p className="mt-4 max-w-lg text-base text-white/60">
            日本最古の巡礼路・約1,000kmの観音巡礼の旅
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb
          items={[
            { label: "ホーム", href: "/" },
            { label: "西国三十三所ガイド" },
          ]}
        />

        {/* 目次 */}
        <Card className="mt-8">
          <div className="p-6">
            <h2 className="text-lg font-bold text-[var(--color-foreground)] mb-4">📋 目次</h2>
            <nav className="space-y-2">
              {[
                { href: "#about", label: "🙏 西国三十三所とは" },
                { href: "#all33", label: "⛩️ 全三十三箇所一覧" },
                { href: "#pref", label: "🗺️ 府県別ガイド" },
                { href: "#method", label: "🚶 巡り方と日数" },
                { href: "#goshuin", label: "📕 御朱印と納経" },
                { href: "#cost", label: "💰 費用の目安" },
                { href: "#history", label: "📜 歴史と由緒" },
              ].map((item) => (
                <a key={item.href} href={item.href} className="block text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors pl-2">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </Card>

        {/* 西国三十三所とは */}
        <section id="about" className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🙏</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">西国三十三所とは</h2>
          </div>
          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
            <p>
              西国三十三所（さいごくさんじゅうさんしょ）は、近畿2府4県と岐阜県にまたがる33の観音霊場を巡る日本最古の巡礼路です。約1,300年の歴史を持ち、四国八十八箇所と並ぶ日本を代表する巡礼の一つです。
            </p>
            <p>
              養老2年（718年）、大和国の長谷寺の開基・徳道上人が閻魔大王から「三十三の観音霊場を巡礼すれば極楽往生できる」と告げられ、三十三の宝印を授かったのが始まりと伝えられています。その後、花山法皇が再興し、現在の巡礼路が確立されました。
            </p>
            <p>
              「三十三」という数は、観音菩薩が衆生を救うために33の姿に変化する（三十三応現身）ことに由来しています。すべての札所を巡り終える「結願」を果たすと、現世での罪が消滅し極楽往生できると信じられています。
            </p>
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
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="px-3 py-3 text-left text-[var(--color-muted)] font-medium w-12">番</th>
                  <th className="px-3 py-3 text-left text-[var(--color-muted)] font-medium">寺院名</th>
                  <th className="px-3 py-3 text-left text-[var(--color-muted)] font-medium hidden sm:table-cell">所在地</th>
                  <th className="px-3 py-3 text-left text-[var(--color-muted)] font-medium hidden md:table-cell">本尊</th>
                  <th className="px-3 py-3 text-left text-[var(--color-muted)] font-medium hidden lg:table-cell">特徴</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {temples.map((t) => (
                  <tr key={t.num} className="hover:bg-white/5 transition-colors">
                    <td className="px-3 py-2.5 font-bold text-[var(--color-gold)]">{t.num}</td>
                    <td className="px-3 py-2.5 font-medium"><Link href={`/saigoku/${t.num}`} className="text-[var(--color-foreground)] hover:text-[var(--color-gold)] transition-colors">{t.name}</Link></td>
                    <td className="px-3 py-2.5 text-[var(--color-muted)] hidden sm:table-cell">{t.pref}</td>
                    <td className="px-3 py-2.5 text-[var(--color-muted)] hidden md:table-cell">{t.honzon}</td>
                    <td className="px-3 py-2.5 text-[var(--color-muted)] hidden lg:table-cell">{t.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 府県別ガイド */}
        <section id="pref" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🗺️</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">府県別ガイド</h2>
          </div>
          <div className="space-y-6">
            {prefGroups.map((g) => (
              <Card key={g.pref}>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-3 h-3 rounded-full" style={{ background: g.color }} />
                    <h3 className="text-lg font-bold text-[var(--color-foreground)]">{g.pref}</h3>
                    <span className="text-sm text-[var(--color-muted)]">{g.nums.length}箇所</span>
                  </div>
                  <div className="space-y-3">
                    {g.nums.map((num) => {
                      const t = temples.find((x) => x.num === num)!;
                      return (
                        <div key={num} className="flex items-start gap-3">
                          <span className="shrink-0 w-8 h-6 rounded text-center text-xs font-bold leading-6 text-white" style={{ background: g.color }}>
                            {num}
                          </span>
                          <div>
                            <Link href={`/saigoku/${num}`} className="font-medium text-[var(--color-foreground)] hover:text-[var(--color-gold)] transition-colors">{t.name}</Link>
                            <span className="ml-2 text-sm text-[var(--color-muted)]">{t.note}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* 巡り方と日数 */}
        <section id="method" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🚶</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">巡り方と日数</h2>
          </div>
          <div className="space-y-5">
            {[
              {
                icon: "🚗", name: "車で巡る",
                days: "4〜7日", cost: "8〜15万円",
                desc: "最も効率的。駐車場が狭い札所や山上の札所があるため、事前にルートを確認しましょう。1日5〜6箇所を目安に。",
              },
              {
                icon: "🚌", name: "バスツアー",
                days: "5〜8日（分割可）", cost: "10〜18万円",
                desc: "ガイド付きで初心者も安心。各札所の歴史や見どころを解説してもらえます。2〜3回に分けるツアーが人気。",
              },
              {
                icon: "🚶", name: "歩き巡礼",
                days: "30〜40日", cost: "25〜40万円",
                desc: "約1,000kmを歩きます。四国遍路より宿泊施設が多い都市部を通りますが、山間部の札所は健脚が必要。",
              },
              {
                icon: "🚃", name: "電車＋バス",
                days: "7〜14日", cost: "10〜20万円",
                desc: "公共交通機関で巡る方法。都市部の札所はアクセスが良いですが、山間部の札所は本数が少ないため要注意。",
              },
            ].map((m) => (
              <Card key={m.name}>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{m.icon}</span>
                    <div>
                      <h3 className="font-bold text-[var(--color-foreground)]">{m.name}</h3>
                      <p className="text-xs text-[var(--color-muted)]">日数: {m.days}｜費用: {m.cost}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">{m.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* 御朱印と納経 */}
        <section id="goshuin" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">📕</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">御朱印と納経</h2>
          </div>
          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
            <p>
              西国三十三所では、各札所で「御朱印（納経印）」をいただけます。専用の納経帳（御朱印帳）は各札所や通販で購入可能。2020年にはスタンプラリー形式の「西国三十三所 草創1300年記念 特別印」も実施されました。
            </p>
            <div className="rounded-xl bg-[var(--color-gold-light)] border border-[var(--color-gold)]/20 px-5 py-4">
              <p className="text-sm text-[var(--color-gold)]">
                <span className="font-bold">💡 ポイント：</span>
                御朱印料は1箇所300円。全33箇所で9,900円。番外3箇所を含めると10,800円です。先に参拝してから納経所へ向かうのがマナーです。
              </p>
            </div>
          </div>
        </section>

        {/* 費用の目安 */}
        <section id="cost" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">💰</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">費用の目安</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="px-4 py-3 text-left text-[var(--color-muted)] font-medium">項目</th>
                  <th className="px-4 py-3 text-right text-[var(--color-muted)] font-medium">車</th>
                  <th className="px-4 py-3 text-right text-[var(--color-muted)] font-medium">バス</th>
                  <th className="px-4 py-3 text-right text-[var(--color-muted)] font-medium">電車</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {[
                  ["宿泊費", "3〜6万円", "ツアー込", "5〜10万円"],
                  ["交通費", "3〜5万円", "10〜18万円", "3〜7万円"],
                  ["拝観料", "約5,000円", "約5,000円", "約5,000円"],
                  ["納経料", "約1万円", "約1万円", "約1万円"],
                  ["食費", "2〜4万円", "ツアー込", "3〜5万円"],
                  ["合計目安", "8〜15万円", "10〜18万円", "10〜20万円"],
                ].map(([item, car, bus, train]) => (
                  <tr key={item} className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 font-medium text-[var(--color-foreground)]">{item}</td>
                    <td className="px-4 py-3 text-right text-[var(--color-muted)]">{car}</td>
                    <td className="px-4 py-3 text-right text-[var(--color-muted)]">{bus}</td>
                    <td className="px-4 py-3 text-right text-[var(--color-muted)]">{train}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 歴史と由緒 */}
        <section id="history" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">📜</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">歴史と由緒</h2>
          </div>
          <div className="space-y-5">
            {[
              {
                era: "養老2年（718年）",
                title: "徳道上人による開創",
                desc: "長谷寺の開基・徳道上人が病で仮死状態になった際、閻魔大王から「三十三の観音霊場を人々に広めよ」と告げられ、起請文と三十三の宝印を授かりました。しかし当時は人々に受け入れられず、宝印を中山寺に埋めました。",
              },
              {
                era: "花山法皇の時代（10世紀末）",
                title: "花山法皇による再興",
                desc: "花山法皇が那智山で修行中に中山寺に埋められた宝印を発見し、三十三所の巡礼を再興しました。これにより巡礼路が確立し、花山法皇は「西国三十三所中興の祖」と呼ばれています。",
              },
              {
                era: "室町〜江戸時代",
                title: "庶民への普及",
                desc: "室町時代に庶民にも巡礼が広まり、江戸時代には「伊勢参り」「四国遍路」と並ぶ庶民の大旅行として定着。各札所の門前には宿場町が発展しました。",
              },
              {
                era: "平成30年（2018年）",
                title: "草創1300年記念",
                desc: "開創1300年を記念し、各札所で特別拝観や記念御朱印が授与されました。現在も年間数十万人が巡礼に訪れ、日本を代表する巡礼文化として息づいています。",
              },
            ].map((item) => (
              <Card key={item.era}>
                <div className="p-5">
                  <p className="text-xs font-semibold text-[var(--color-gold)]">{item.era}</p>
                  <h3 className="mt-1 font-bold text-[var(--color-foreground)]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-[var(--color-muted)] mb-4">
            他の巡礼ガイドもご覧ください
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/ohenro" className="group relative rounded-full px-8 py-3.5 text-sm font-bold overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-shrine)] to-[var(--color-gold)] opacity-90 group-hover:opacity-100 transition-opacity" />
              <span className="relative text-white">四国八十八箇所ガイド</span>
            </Link>
            <Link href="/sanpai-manner" className="rounded-full border border-[var(--color-border)] px-8 py-3.5 text-sm font-bold text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:border-[var(--color-gold)]/40 transition-all">
              参拝マナーを確認
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
