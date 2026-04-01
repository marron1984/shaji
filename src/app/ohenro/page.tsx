import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Card from "@/components/ui/Card";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "四国八十八箇所 お遍路ガイド｜巡り方・費用・持ち物完全解説",
  description:
    "四国八十八箇所お遍路の完全ガイド。歩き遍路・車遍路・バスツアーの比較、持ち物、作法、費用、おすすめルートまで徹底解説。弘法大師空海ゆかりの霊場巡りを始めましょう。",
  keywords: [
    "お遍路",
    "四国八十八箇所",
    "四国巡礼",
    "弘法大師",
    "空海",
    "歩き遍路",
    "巡礼",
    "札所",
  ],
  alternates: {
    canonical: `${SITE_URL}/ohenro`,
    languages: { ja: `${SITE_URL}/ohenro`, en: `${SITE_URL}/en/ohenro` },
  },
  openGraph: {
    title: "四国八十八箇所 お遍路ガイド",
    description:
      "四国八十八箇所お遍路の完全ガイド。巡り方・費用・持ち物を徹底解説。",
    url: `${SITE_URL}/ohenro`,
    type: "article",
  },
};

/* ===== データ定義 ===== */

const dojos = [
  {
    name: "発心の道場",
    pref: "徳島県",
    range: "第1番〜第23番",
    color: "var(--color-shrine)",
    meaning: "巡礼の志を立てる",
    temples: [
      { num: 1, name: "霊山寺", note: "お遍路の出発点。巡礼用品が揃う" },
      { num: 6, name: "安楽寺", note: "宿坊が人気。温泉のある札所" },
      { num: 11, name: "藤井寺", note: "藤棚が見事。次の焼山寺への遍路ころがし" },
      { num: 12, name: "焼山寺", note: "標高700m。最大の難所「遍路ころがし」" },
      { num: 17, name: "井戸寺", note: "空海が掘った井戸。面影の井戸伝説" },
      { num: 23, name: "薬王寺", note: "厄除けの名所。発心の道場の結願寺" },
    ],
  },
  {
    name: "修行の道場",
    pref: "高知県",
    range: "第24番〜第39番",
    color: "var(--color-temple)",
    meaning: "心身を鍛え修行する",
    temples: [
      { num: 24, name: "最御崎寺", note: "室戸岬の突端。空海が悟りを開いた地" },
      { num: 28, name: "大日寺", note: "奥の院の爪彫り薬師が有名" },
      { num: 31, name: "竹林寺", note: "よさこい節に歌われる土佐の名刹" },
      { num: 36, name: "青龍寺", note: "横綱・朝青龍の四股名の由来" },
      { num: 37, name: "岩本寺", note: "天井画575枚が圧巻" },
      { num: 38, name: "金剛福寺", note: "足摺岬。最も遠い札所の一つ" },
    ],
  },
  {
    name: "菩提の道場",
    pref: "愛媛県",
    range: "第40番〜第65番",
    color: "var(--color-gold)",
    meaning: "悟りに近づく",
    temples: [
      { num: 44, name: "大寶寺", note: "四国の中央。菩提の道場の始まり" },
      { num: 45, name: "岩屋寺", note: "断崖絶壁の岩山に建つ山岳霊場" },
      { num: 51, name: "石手寺", note: "道後温泉近く。遍路の元祖・衛門三郎伝説" },
      { num: 52, name: "太山寺", note: "本堂は国宝。鎌倉時代の建築" },
      { num: 58, name: "仙遊寺", note: "瀬戸内海を見渡す絶景の宿坊" },
      { num: 65, name: "三角寺", note: "菩提の道場の結願寺。三角形の護摩壇" },
    ],
  },
  {
    name: "涅槃の道場",
    pref: "香川県",
    range: "第66番〜第88番",
    color: "var(--color-shrine)",
    meaning: "悟りを完成させる",
    temples: [
      { num: 66, name: "雲辺寺", note: "最も高い場所の札所。標高927m" },
      { num: 75, name: "善通寺", note: "空海の生誕地。五大山の一つ" },
      { num: 82, name: "根香寺", note: "牛鬼伝説が残る山寺" },
      { num: 84, name: "屋島寺", note: "源平合戦の舞台。屋島の山上" },
      { num: 85, name: "八栗寺", note: "五剣山の中腹。ケーブルカーで登る" },
      { num: 88, name: "大窪寺", note: "結願の寺。お遍路のゴール" },
    ],
  },
];

const methods = [
  {
    name: "歩き遍路",
    icon: "🚶",
    days: "30〜60日",
    cost: "30〜50万円",
    pros: ["最も功徳が高いとされる", "自分のペースで巡れる", "四国の自然を満喫できる", "達成感が圧倒的"],
    cons: ["体力と時間が必要", "天候に左右される", "宿の確保が必要", "足のトラブルが多い"],
  },
  {
    name: "車遍路",
    icon: "🚗",
    days: "8〜12日",
    cost: "15〜25万円",
    pros: ["効率的に回れる", "荷物を車に置ける", "天候の影響が少ない", "家族やグループで楽しめる"],
    cons: ["駐車場が狭い札所がある", "運転の疲労がある", "ナビがないと迷いやすい", "歩きほどの達成感は薄い"],
  },
  {
    name: "バスツアー",
    icon: "🚌",
    days: "4〜8日（分割可）",
    cost: "10〜20万円",
    pros: ["ガイド付きで安心", "宿泊の手配が不要", "仲間ができる", "初心者に最適"],
    cons: ["スケジュールが決まっている", "各札所の滞在時間が短い", "自由度が低い", "混雑時は慌ただしい"],
  },
];

const items = [
  { name: "白衣（はくえ）", desc: "巡礼者の証。背中に「南無大師遍照金剛」と書かれたもの", essential: true },
  { name: "菅笠（すげがさ）", desc: "「同行二人」と書かれた笠。日差しと雨を防ぐ", essential: true },
  { name: "金剛杖（こんごうづえ）", desc: "弘法大師の分身とされる。橋の上ではつかない", essential: true },
  { name: "輪袈裟（わげさ）", desc: "略式の袈裟。首にかけて巡礼の印とする", essential: true },
  { name: "納経帳（のうきょうちょう）", desc: "各札所で御朱印をいただく帳面", essential: true },
  { name: "納め札", desc: "各札所の本堂と大師堂に納める。住所・名前・願意を記入", essential: true },
  { name: "数珠（じゅず）", desc: "合掌の際に手にかける", essential: true },
  { name: "経本（きょうほん）", desc: "般若心経などの読経に使用", essential: false },
  { name: "ろうそく・線香", desc: "各札所で灯明と焼香に使う", essential: false },
  { name: "ライター", desc: "ろうそく・線香に火をつける", essential: false },
];

const steps = [
  { num: 1, title: "山門で一礼", desc: "合掌して一礼。敷居は踏まずにまたぐ" },
  { num: 2, title: "手水舎で清める", desc: "左手→右手→口→柄杓の柄の順に清める" },
  { num: 3, title: "鐘楼で鐘をつく", desc: "許可されている場合のみ。帰りに鳴らすのは「戻り鐘」でNG" },
  { num: 4, title: "本堂で参拝", desc: "ろうそく→線香→納め札を納め→お賽銭→読経（般若心経など）" },
  { num: 5, title: "大師堂で参拝", desc: "本堂と同じ手順で参拝。弘法大師に祈る" },
  { num: 6, title: "納経所で御朱印", desc: "納経帳に墨書と朱印をいただく（300円）" },
  { num: 7, title: "山門で一礼して退出", desc: "振り返り本堂に向かって一礼" },
];

export default function OhenroPage() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: "四国八十八箇所お遍路",
          description: "弘法大師空海ゆかりの四国八十八箇所を巡る約1,200kmの巡礼の旅",
          touristType: "Pilgrimage",
          itinerary: {
            "@type": "ItemList",
            numberOfItems: 88,
            itemListElement: dojos.flatMap((d) =>
              d.temples.map((t) => ({
                "@type": "ListItem",
                position: t.num,
                name: `第${t.num}番 ${t.name}`,
              }))
            ),
          },
        }}
      />

      {/* ヒーロー */}
      <section className="relative h-[380px] sm:h-[440px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1400&q=80"
          alt="四国の巡礼道"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[var(--color-background)]" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <p className="mb-3 text-xs font-semibold tracking-[0.4em] uppercase text-[var(--color-gold)]">
            Shikoku Pilgrimage
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            四国八十八箇所
            <br />
            <span className="text-gradient">お遍路ガイド</span>
          </h1>
          <p className="mt-4 max-w-lg text-base text-white/60">
            弘法大師空海ゆかりの霊場を巡る約1,200kmの祈りの旅
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb
          items={[
            { label: "ホーム", href: "/" },
            { label: "お遍路ガイド" },
          ]}
        />

        {/* 目次 */}
        <Card className="mt-8">
          <div className="p-6">
            <h2 className="text-lg font-bold text-[var(--color-foreground)] mb-4">📋 目次</h2>
            <nav className="space-y-2">
              {[
                { href: "#about", label: "🙏 お遍路とは" },
                { href: "#dojos", label: "⛩️ 四国四県の道場と主要札所" },
                { href: "#methods", label: "🚶 巡り方の比較" },
                { href: "#items", label: "🎒 装束と持ち物" },
                { href: "#manner", label: "📿 各札所での参拝作法" },
                { href: "#cost", label: "💰 費用の目安" },
                { href: "#route", label: "🗺️ おすすめルートと日数" },
              ].map((item) => (
                <a key={item.href} href={item.href} className="block text-sm text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors pl-2">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </Card>

        {/* お遍路とは */}
        <section id="about" className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🙏</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">お遍路とは</h2>
          </div>
          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
            <p>
              お遍路（四国八十八箇所巡礼）は、弘法大師空海ゆかりの88の寺院を巡る約1,200kmの巡礼の旅です。平安時代から始まったとされ、1,200年以上の歴史を持つ日本を代表する巡礼路の一つです。
            </p>
            <p>
              四国4県にまたがる88の札所は、それぞれ「発心（徳島）」「修行（高知）」「菩提（愛媛）」「涅槃（香川）」の道場と呼ばれ、人間の煩悩の数と同じ88の寺を巡ることで煩悩が消え、願いが叶うとされています。
            </p>
            <p>
              遍路の道中では弘法大師が常にそばにいるという「同行二人（どうぎょうににん）」の精神で歩きます。宗派や信仰の有無を問わず、誰でも巡ることができます。
            </p>
          </div>
        </section>

        {/* 四国四県の道場 */}
        <section id="dojos" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">⛩️</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">四国四県の道場と主要札所</h2>
          </div>
          <div className="space-y-8">
            {dojos.map((dojo) => (
              <Card key={dojo.name}>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="w-3 h-3 rounded-full" style={{ background: dojo.color }} />
                    <h3 className="text-lg font-bold text-[var(--color-foreground)]">{dojo.name}</h3>
                  </div>
                  <p className="text-sm text-[var(--color-muted)] mb-4">
                    {dojo.pref}・{dojo.range}｜{dojo.meaning}
                  </p>
                  <div className="space-y-3">
                    {dojo.temples.map((t) => (
                      <div key={t.num} className="flex items-start gap-3">
                        <span className="shrink-0 w-10 h-6 rounded text-center text-xs font-bold leading-6" style={{ background: dojo.color, color: "#fff" }}>
                          {t.num}
                        </span>
                        <div>
                          <span className="font-medium text-[var(--color-foreground)]">{t.name}</span>
                          <span className="ml-2 text-sm text-[var(--color-muted)]">{t.note}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* 巡り方の比較 */}
        <section id="methods" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🚶</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">巡り方の比較</h2>
          </div>
          <div className="space-y-5">
            {methods.map((m) => (
              <Card key={m.name}>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{m.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold text-[var(--color-foreground)]">{m.name}</h3>
                      <p className="text-sm text-[var(--color-muted)]">
                        日数: {m.days}｜費用: {m.cost}
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold text-[var(--color-gold)] mb-2">メリット</p>
                      <ul className="space-y-1">
                        {m.pros.map((p) => (
                          <li key={p} className="text-sm text-[var(--color-muted)] flex items-start gap-2">
                            <span className="text-[var(--color-gold)] shrink-0">✓</span>{p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[var(--color-shrine)] mb-2">デメリット</p>
                      <ul className="space-y-1">
                        {m.cons.map((c) => (
                          <li key={c} className="text-sm text-[var(--color-muted)] flex items-start gap-2">
                            <span className="text-[var(--color-shrine)] shrink-0">△</span>{c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* 装束と持ち物 */}
        <section id="items" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🎒</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">装束と持ち物</h2>
          </div>
          <div className="space-y-3">
            {items.map((item) => (
              <Card key={item.name}>
                <div className="p-4 flex items-start gap-3">
                  <span className={`shrink-0 mt-0.5 text-sm ${item.essential ? "text-[var(--color-shrine)]" : "text-[var(--color-muted)]"}`}>
                    {item.essential ? "必須" : "推奨"}
                  </span>
                  <div>
                    <span className="font-bold text-[var(--color-foreground)]">{item.name}</span>
                    <p className="text-sm text-[var(--color-muted)] mt-0.5">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* 参拝作法 */}
        <section id="manner" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">📿</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">各札所での参拝作法</h2>
          </div>
          <div className="space-y-0">
            {steps.map((s) => (
              <div key={s.num} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white bg-[var(--color-temple)]">
                  {s.num}
                </div>
                <div className="flex-1 pb-8 border-l border-[var(--color-border)] pl-6 -ml-5 mt-5">
                  <h3 className="text-lg font-bold text-[var(--color-foreground)]">{s.title}</h3>
                  <p className="mt-1 text-[var(--color-muted)]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link href="/sanpai-manner" className="text-sm font-medium text-[var(--color-gold)] hover:underline">
              → 参拝マナーの詳細はこちら
            </Link>
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
                  <th className="px-4 py-3 text-right text-[var(--color-muted)] font-medium">歩き</th>
                  <th className="px-4 py-3 text-right text-[var(--color-muted)] font-medium">車</th>
                  <th className="px-4 py-3 text-right text-[var(--color-muted)] font-medium">バス</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {[
                  ["宿泊費", "20〜35万円", "8〜15万円", "ツアー込"],
                  ["食費", "5〜10万円", "3〜5万円", "ツアー込"],
                  ["交通費", "ほぼ0円", "5〜8万円", "10〜20万円"],
                  ["納経料", "約2.7万円", "約2.7万円", "約2.7万円"],
                  ["装束・用品", "1〜2万円", "1〜2万円", "1〜2万円"],
                  ["合計目安", "30〜50万円", "15〜25万円", "10〜20万円"],
                ].map(([item, walk, car, bus]) => (
                  <tr key={item} className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 font-medium text-[var(--color-foreground)]">{item}</td>
                    <td className="px-4 py-3 text-right text-[var(--color-muted)]">{walk}</td>
                    <td className="px-4 py-3 text-right text-[var(--color-muted)]">{car}</td>
                    <td className="px-4 py-3 text-right text-[var(--color-muted)]">{bus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-[var(--color-muted)]">
            ※ 納経料は1箇所300円 × 88箇所 = 26,400円。別格20霊場を含むと追加6,000円。
          </p>
        </section>

        {/* おすすめルート */}
        <section id="route" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🗺️</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">おすすめルートと日数</h2>
          </div>
          <div className="space-y-5">
            {[
              {
                title: "通し打ち（一気に全札所を巡る）",
                desc: "歩き: 30〜60日 / 車: 8〜12日。最も達成感がある巡り方。長期休暇が取れる方向け。春（3〜5月）と秋（9〜11月）が最適シーズン。",
              },
              {
                title: "区切り打ち（何回かに分けて巡る）",
                desc: "週末や連休を利用して数回に分けて巡る方法。仕事をしながらでも可能。1回あたり5〜10箇所ずつ巡り、1〜2年で結願する人が多い。",
              },
              {
                title: "逆打ち（88番から1番へ逆に巡る）",
                desc: "通常と逆順で巡る方法。うるう年に逆打ちすると功徳が3倍になるとされています。道標が逆になるため難易度は高いですが、弘法大師に出会えるという伝説も。",
              },
            ].map((route) => (
              <Card key={route.title}>
                <div className="p-5">
                  <h3 className="font-bold text-[var(--color-foreground)]">{route.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">{route.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-[var(--color-muted)] mb-4">
            お遍路の作法を確認して、巡礼の旅に出かけましょう
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/sanpai-manner" className="group relative rounded-full px-8 py-3.5 text-sm font-bold overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-shrine)] to-[var(--color-gold)] opacity-90 group-hover:opacity-100 transition-opacity" />
              <span className="relative text-white">参拝マナーを確認</span>
            </Link>
            <Link href="/jinja" className="rounded-full border border-[var(--color-border)] px-8 py-3.5 text-sm font-bold text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:border-[var(--color-gold)]/40 transition-all">
              神社・お寺を探す
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
