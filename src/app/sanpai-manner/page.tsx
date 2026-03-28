import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Card from "@/components/ui/Card";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "参拝マナー完全ガイド｜神社とお寺の正しい作法",
  description:
    "神社・お寺の参拝マナーを図解で解説。鳥居のくぐり方、手水の作法、二拝二拍手一拝、お賽銭の入れ方、御朱印のいただき方まで完全網羅。",
  keywords: [
    "参拝マナー",
    "神社 参拝方法",
    "お寺 参拝方法",
    "二拝二拍手一拝",
    "手水舎",
    "御朱印",
    "お賽銭",
    "作法",
  ],
  alternates: { canonical: `${SITE_URL}/sanpai-manner` },
  openGraph: {
    title: "参拝マナー完全ガイド｜神社とお寺の正しい作法",
    description:
      "神社・お寺の参拝マナーを図解で解説。正しい作法を知って、気持ちよくお参りしましょう。",
    url: `${SITE_URL}/sanpai-manner`,
    type: "article",
  },
};

/* ステップデータ */
const shrineSteps = [
  {
    num: 1,
    title: "鳥居の前で一礼",
    body: "鳥居は神域と俗世の境界。くぐる前に軽く一礼（会釈）します。帽子やサングラスは外すのが望ましいです。",
    tip: "参道の中央は「正中（せいちゅう）」と呼ばれ、神様の通り道とされます。左右どちらかに寄って歩きましょう。",
  },
  {
    num: 2,
    title: "手水舎で身を清める",
    body: "参拝前に手と口を清める儀式です。右手で柄杓を持ち左手を洗い、持ち替えて右手を洗い、再度右手に持って左手で口をすすぎ、最後に柄杓を立てて柄を洗います。",
    tip: "柄杓に直接口をつけないのがマナーです。一杯の水で全ての手順を行いましょう。",
  },
  {
    num: 3,
    title: "お賽銭を入れる",
    body: "賽銭箱の前に立ち、静かにお賽銭を入れます。投げ入れるのではなく、丁寧に手を添えて入れるのが理想です。",
    tip: "金額に決まりはありませんが、5円（ご縁）、15円（十分なご縁）、25円（二重のご縁）などが縁起が良いとされています。",
  },
  {
    num: 4,
    title: "鈴を鳴らす",
    body: "鈴がある場合は、お賽銭の後に鈴緒を振って鳴らします。鈴の音には邪気を祓い、神様に参拝の合図を送る意味があります。",
    tip: "鈴がない神社もあります。その場合はそのまま拝礼に進みましょう。",
  },
  {
    num: 5,
    title: "二拝二拍手一拝",
    body: "神社参拝の基本作法です。①深く2回お辞儀をする（二拝）②胸の高さで2回拍手する（二拍手）③手を合わせてお祈りする④最後に深く1回お辞儀をする（一拝）",
    tip: "出雲大社など一部の神社では「二拝四拍手一拝」など異なる作法の場合があります。",
  },
  {
    num: 6,
    title: "鳥居を出る時も一礼",
    body: "参拝を終えて鳥居をくぐる際は、振り返って社殿に向かい軽く一礼します。「ありがとうございました」の気持ちを込めましょう。",
    tip: null,
  },
];

const templeSteps = [
  {
    num: 1,
    title: "山門（さんもん）で一礼",
    body: "お寺の入口にある山門の前で一礼します。敷居は踏まずにまたいで入りましょう。敷居を踏むのは仏様に対して失礼とされています。",
    tip: "靴を脱ぐ場所がある場合は、揃えて端に置きましょう。",
  },
  {
    num: 2,
    title: "手水舎で身を清める",
    body: "作法は神社と同じです。右手で柄杓を持ち左手→右手→口→柄杓の柄の順に清めます。",
    tip: "手水舎がないお寺もあります。",
  },
  {
    num: 3,
    title: "お線香・ろうそくをあげる",
    body: "常香炉（じょうこうろ）がある場合は、お線香をあげて煙で身を清めます。煙を体の気になる部分にかけると、その部分が良くなるとも言われています。",
    tip: "他人が点けた火からお線香に火をつけるのは「業をもらう」とされ避けるのがマナーです。",
  },
  {
    num: 4,
    title: "お賽銭を入れて合掌",
    body: "賽銭箱にお賽銭を入れ、静かに手を合わせます。神社と違い、お寺では拍手は打ちません。胸の前で静かに合掌し、心の中でお祈りします。",
    tip: "お寺では「音を立てない」のが基本。拍手は神社の作法です。",
  },
  {
    num: 5,
    title: "一礼して退く",
    body: "お祈りが終わったら深く一礼します。本堂を背にする際は、数歩下がってから体を返すとより丁寧です。",
    tip: null,
  },
  {
    num: 6,
    title: "山門を出る時も一礼",
    body: "山門をくぐる際に振り返り、本堂に向かって一礼してから退出します。",
    tip: null,
  },
];

const goshuinSteps = [
  {
    title: "御朱印帳を用意する",
    body: "御朱印帳は神社やお寺の授与所、文房具店、オンラインショップなどで購入できます。蛇腹式と綴じ式があります。",
  },
  {
    title: "必ず先に参拝する",
    body: "御朱印は参拝の証です。参拝前に御朱印だけいただくのはマナー違反。必ず先にお参りを済ませましょう。",
  },
  {
    title: "授与所・納経所で申し出る",
    body: "「御朱印をお願いします」と御朱印帳を開いて渡します。書いていただきたいページを開いた状態で渡すとスムーズです。",
  },
  {
    title: "初穂料（御朱印代）を納める",
    body: "一般的に300〜500円程度。「お気持ちで」と言われた場合は300円以上を目安に。お釣りのないよう小銭を用意しておくと丁寧です。",
  },
  {
    title: "御朱印帳を受け取る",
    body: "両手で丁寧に受け取り、「ありがとうございます」とお礼を言いましょう。",
  },
];

const ngList = [
  {
    icon: "🚫",
    title: "参道の真ん中を歩く",
    body: "正中（せいちゅう）は神様の通り道。左右どちらかに寄って歩きましょう。",
  },
  {
    icon: "🚫",
    title: "お寺で拍手を打つ",
    body: "拍手（かしわで）は神社の作法です。お寺では静かに合掌のみ。",
  },
  {
    icon: "🚫",
    title: "鳥居・山門で一礼しない",
    body: "入口と出口で一礼するのが基本マナー。急いでいても一礼を忘れずに。",
  },
  {
    icon: "🚫",
    title: "写真撮影が禁止の場所で撮影",
    body: "御神体や仏像、撮影禁止の札がある場所では撮影を控えましょう。",
  },
  {
    icon: "🚫",
    title: "お賽銭を投げつける",
    body: "お賽銭は静かに入れるのが基本。遠くから投げ入れるのは不敬とされます。",
  },
  {
    icon: "🚫",
    title: "柄杓に口をつける",
    body: "手水舎では柄杓から手に水を受けて口をすすぎます。直接飲まないように。",
  },
];

function StepCard({
  num,
  title,
  body,
  tip,
  color,
}: {
  num: number;
  title: string;
  body: string;
  tip: string | null;
  color: string;
}) {
  return (
    <div className="flex gap-4">
      <div
        className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
        style={{ background: `var(--color-${color})` }}
      >
        {num}
      </div>
      <div className="flex-1 pb-8 border-l border-[var(--color-border)] pl-6 -ml-5 mt-5">
        <h3 className="text-lg font-bold text-[var(--color-foreground)]">
          {title}
        </h3>
        <p className="mt-2 text-[var(--color-muted)] leading-relaxed">{body}</p>
        {tip && (
          <div className="mt-3 rounded-lg bg-[var(--color-gold-light)] border border-[var(--color-gold)]/20 px-4 py-3">
            <p className="text-sm text-[var(--color-gold)]">
              <span className="font-bold">💡 ポイント：</span>
              {tip}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SanpaiMannerPage() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "神社の参拝マナー",
          description: "神社の正しい参拝作法をステップごとに解説",
          step: shrineSteps.map((s) => ({
            "@type": "HowToStep",
            position: s.num,
            name: s.title,
            text: s.body,
          })),
        }}
      />

      {/* ヒーロー */}
      <section className="relative h-[360px] sm:h-[420px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=1400&q=80"
          alt="神社の鳥居"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[var(--color-background)]" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <p className="mb-3 text-xs font-semibold tracking-[0.4em] uppercase text-[var(--color-gold)]">
            Worship Etiquette
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            参拝マナー<span className="text-gradient">完全ガイド</span>
          </h1>
          <p className="mt-4 max-w-lg text-base text-white/60">
            神社とお寺の正しい参拝作法を
            <br className="sm:hidden" />
            ステップ形式でわかりやすく解説
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb
          items={[
            { label: "ホーム", href: "/" },
            { label: "参拝マナーガイド" },
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
                { href: "#shrine", label: "⛩️ 神社の参拝作法（6ステップ）" },
                { href: "#temple", label: "🏯 お寺の参拝作法（6ステップ）" },
                { href: "#diff", label: "🔍 神社とお寺の違い" },
                { href: "#goshuin", label: "📕 御朱印のいただき方" },
                { href: "#ng", label: "🚫 やってはいけないNG行動" },
                { href: "#seasonal", label: "🎍 季節・行事別の参拝ポイント" },
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

        {/* ===== 神社の参拝作法 ===== */}
        <section id="shrine" className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">⛩️</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              神社の参拝作法
            </h2>
          </div>
          <div className="space-y-0">
            {shrineSteps.map((step) => (
              <StepCard key={step.num} {...step} color="shrine" />
            ))}
          </div>
        </section>

        {/* ===== お寺の参拝作法 ===== */}
        <section id="temple" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🏯</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              お寺の参拝作法
            </h2>
          </div>
          <div className="space-y-0">
            {templeSteps.map((step) => (
              <StepCard key={step.num} {...step} color="temple" />
            ))}
          </div>
        </section>

        {/* ===== 神社とお寺の違い ===== */}
        <section id="diff" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🔍</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              神社とお寺の違い
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="px-4 py-3 text-left text-[var(--color-muted)] font-medium">
                    項目
                  </th>
                  <th className="px-4 py-3 text-left text-[var(--color-shrine)] font-bold">
                    ⛩️ 神社
                  </th>
                  <th className="px-4 py-3 text-left text-[var(--color-temple)] font-bold">
                    🏯 お寺
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {[
                  ["宗教", "神道", "仏教"],
                  ["聖職者", "神主・巫女", "僧侶・住職"],
                  ["入口", "鳥居", "山門"],
                  ["拝礼", "二拝二拍手一拝", "合掌のみ（拍手なし）"],
                  ["お清め", "手水舎", "手水舎・常香炉"],
                  ["祀られるもの", "神様（八百万の神）", "仏様（仏像）"],
                  ["お墓", "基本的にない", "ある場合が多い"],
                  ["おみくじ", "結ぶ or 持ち帰る", "結ぶ or 持ち帰る"],
                ].map(([item, shrine, temple]) => (
                  <tr
                    key={item}
                    className="hover:bg-white/5 transition-colors"
                  >
                    <td className="px-4 py-3 font-medium text-[var(--color-foreground)]">
                      {item}
                    </td>
                    <td className="px-4 py-3 text-[var(--color-muted)]">
                      {shrine}
                    </td>
                    <td className="px-4 py-3 text-[var(--color-muted)]">
                      {temple}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== 御朱印のいただき方 ===== */}
        <section id="goshuin" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">📕</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              御朱印のいただき方
            </h2>
          </div>
          <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
            御朱印（ごしゅいん）は、神社やお寺を参拝した証としていただく墨書と朱印です。
            近年はカラフルなデザインや季節限定のものも多く、コレクションとしても人気があります。
          </p>
          <div className="space-y-4">
            {goshuinSteps.map((step, i) => (
              <Card key={i}>
                <div className="p-5 flex gap-4">
                  <span
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-black"
                    style={{ background: "var(--color-gold)" }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-[var(--color-foreground)]">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--color-muted)] leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* ===== NG行動 ===== */}
        <section id="ng" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🚫</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              やってはいけないNG行動
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {ngList.map((item, i) => (
              <Card key={i}>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{item.icon}</span>
                    <h3 className="font-bold text-[var(--color-shrine)]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* ===== 季節・行事別 ===== */}
        <section id="seasonal" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🎍</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              季節・行事別の参拝ポイント
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                season: "🌸 春（3〜5月）",
                events: "花祭り（4/8）、春季例大祭",
                tips: "桜の名所でもある神社仏閣が多数。花見と参拝を組み合わせる場合は、先に参拝を済ませてから花見を楽しみましょう。",
              },
              {
                season: "🌻 夏（6〜8月）",
                events: "夏越の大祓（6/30）、お盆（8月）、夏祭り",
                tips: "夏越の大祓では茅の輪くぐりで半年の穢れを祓えます。お盆はお寺への参拝が中心。暑さ対策を忘れずに。",
              },
              {
                season: "🍂 秋（9〜11月）",
                events: "七五三（11/15前後）、秋季例大祭、紅葉",
                tips: "七五三シーズンは混雑するため、平日や早朝がおすすめ。紅葉の名所では臨時の特別拝観が行われることも。",
              },
              {
                season: "❄️ 冬（12〜2月）",
                events: "初詣（1/1〜3）、節分（2/3）、年越の大祓（12/31）",
                tips: "初詣は三が日の人出が多いため、1月中旬以降もOK。松の内（1/7まで）に参拝すれば初詣とされます。防寒対策を万全に。",
              },
            ].map((item) => (
              <Card key={item.season}>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[var(--color-foreground)]">
                    {item.season}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-gold)]">
                    主な行事：{item.events}
                  </p>
                  <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">
                    {item.tips}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-[var(--color-muted)] mb-4">
            参拝マナーを覚えたら、実際に訪れてみましょう
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/jinja"
              className="group relative rounded-full px-8 py-3.5 text-sm font-bold overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-shrine)] to-[var(--color-gold)] opacity-90 group-hover:opacity-100 transition-opacity" />
              <span className="relative text-white">
                神社・お寺を探す
              </span>
            </Link>
            <Link
              href="/kaiun-guide"
              className="rounded-full border border-[var(--color-border)] px-8 py-3.5 text-sm font-bold text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:border-[var(--color-gold)]/40 transition-all"
            >
              開運ガイドを読む
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
