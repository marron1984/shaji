import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";
import MbtiQuiz from "./MbtiQuiz";

export const metadata: Metadata = {
  title: "仏像さんMBTI診断｜あなたに似ている仏様は？",
  description:
    "12の質問に答えて、あなたのMBTIタイプにぴったりの仏様を見つけましょう。如来・菩薩・明王・天部からあなたの性格に合った仏様が判明します。",
  keywords: [
    "MBTI",
    "仏像",
    "仏様",
    "性格診断",
    "仏教",
    "心理テスト",
    "如来",
    "菩薩",
    "明王",
    "天部",
  ],
  alternates: {
    canonical: `${SITE_URL}/butsu-mbti`,
    languages: { ja: `${SITE_URL}/butsu-mbti`, en: `${SITE_URL}/en/butsu-mbti` },
  },
  openGraph: {
    title: "仏像さんMBTI診断｜あなたに似ている仏様は？",
    description:
      "12の質問に答えて、あなたのMBTIタイプにぴったりの仏様を見つけよう！",
    url: `${SITE_URL}/butsu-mbti`,
    type: "website",
  },
};

export default function ButsuMbtiPage() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "仏像さんMBTI診断",
          description:
            "MBTIタイプに基づいて、あなたに似ている仏様を診断します",
          url: `${SITE_URL}/butsu-mbti`,
          applicationCategory: "Entertainment",
          operatingSystem: "Web",
          publisher: { "@type": "Organization", name: SITE_NAME },
        }}
      />

      {/* ヒーロー */}
      <section className="relative h-[320px] sm:h-[380px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-shrine)]/20 via-black/50 to-[var(--color-background)]" />
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <span className="text-[250px] select-none">🔮</span>
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <p className="mb-3 text-xs font-semibold tracking-[0.4em] uppercase text-[var(--color-gold)]">
            Buddhist Deity MBTI
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            仏像さん
            <span className="text-gradient">MBTI診断</span>
          </h1>
          <p className="mt-4 max-w-lg text-base text-white/60">
            12の質問に答えて、あなたに似ている仏様を見つけよう
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb
          items={[
            { label: "ホーム", href: "/" },
            { label: "仏様辞典", href: "/butsu-jiten" },
            { label: "MBTI診断" },
          ]}
        />

        <div className="mt-10">
          <MbtiQuiz />
        </div>
      </div>
    </div>
  );
}
