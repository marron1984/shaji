import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";
import MbtiQuizEn from "./MbtiQuizEn";

export const metadata: Metadata = {
  title: "Buddhist Deity MBTI Quiz - Which Buddha Are You?",
  description:
    "Answer 12 questions to discover which Buddhist deity matches your MBTI personality type. Find your match among Nyorai, Bosatsu, Myoo, and Tenbu.",
  keywords: [
    "MBTI",
    "Buddhist deity",
    "Buddha",
    "personality quiz",
    "Buddhism",
    "personality test",
    "Nyorai",
    "Bosatsu",
    "Myoo",
    "Tenbu",
  ],
  alternates: {
    canonical: `${SITE_URL}/en/butsu-mbti`,
    languages: {
      ja: `${SITE_URL}/butsu-mbti`,
      en: `${SITE_URL}/en/butsu-mbti`,
    },
  },
  openGraph: {
    title: "Buddhist Deity MBTI Quiz - Which Buddha Are You?",
    description:
      "Answer 12 questions to find which Buddhist deity matches your personality!",
    url: `${SITE_URL}/en/butsu-mbti`,
    type: "website",
  },
};

export default function ButsuMbtiPageEn() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Buddhist Deity MBTI Quiz",
          description:
            "Discover which Buddhist deity matches your MBTI personality type",
          url: `${SITE_URL}/en/butsu-mbti`,
          applicationCategory: "Entertainment",
          operatingSystem: "Web",
          inLanguage: "en",
          publisher: { "@type": "Organization", name: SITE_NAME },
        }}
      />

      {/* Hero */}
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
            Which Buddha
            <span className="text-gradient"> Are You?</span>
          </h1>
          <p className="mt-4 max-w-lg text-base text-white/60">
            Answer 12 questions to discover the Buddhist deity that matches your
            personality
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb
          items={[
            { label: "Home", href: "/en" },
            { label: "Deity Encyclopedia", href: "/en/butsu-jiten" },
            { label: "MBTI Quiz" },
          ]}
        />

        {/* Language Switch */}
        <div className="mt-4 text-right">
          <Link
            href="/butsu-mbti"
            className="text-sm text-gray-500 hover:text-[var(--color-gold)] transition-colors"
          >
            🇯🇵 日本語
          </Link>
        </div>

        <div className="mt-10">
          <MbtiQuizEn />
        </div>
      </div>
    </div>
  );
}
