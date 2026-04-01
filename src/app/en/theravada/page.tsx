import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import SectionHeading from "@/components/ui/SectionHeading";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";
import {
  theravadaAbout,
  theravadaHistory,
  theravadaComparison,
  theravadaTeachings,
  theravadaPractice,
  theravadaCanon,
  theravadaCountries,
  theravadaJapanConnection,
} from "@/data/theravada-data";

export const metadata: Metadata = {
  title: "Theravada Buddhism Guide | Teachings, History & Practice",
  description:
    "A comprehensive guide to Theravada Buddhism: its teachings, history, meditation practices, the Four Noble Truths, the Noble Eightfold Path, Vipassana meditation, the Pali Canon, and Theravada Buddhist countries in Southeast Asia.",
  keywords: [
    "Theravada Buddhism",
    "Theravada",
    "Southern Buddhism",
    "Vipassana",
    "Four Noble Truths",
    "Noble Eightfold Path",
    "Pali Canon",
    "Mahayana comparison",
    "Thai Buddhism",
    "Myanmar Buddhism",
  ],
  alternates: {
    canonical: `${SITE_URL}/en/theravada`,
    languages: { ja: `${SITE_URL}/theravada`, en: `${SITE_URL}/en/theravada` },
  },
  openGraph: {
    title: "Theravada Buddhism Guide | Teachings, History & Practice",
    description:
      "A comprehensive guide to Theravada Buddhism: teachings, history, meditation, and the Pali Canon.",
    url: `${SITE_URL}/en/theravada`,
    type: "article",
  },
};

export default function TheravadaEnPage() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          name: "Theravada Buddhism Guide",
          description:
            "A comprehensive guide to Theravada Buddhism: teachings, history, meditation practices, and the Pali Canon",
          url: `${SITE_URL}/en/theravada`,
          inLanguage: "en",
          publisher: { "@type": "Organization", name: SITE_NAME },
        }}
      />

      {/* Hero */}
      <section className="relative h-[380px] sm:h-[440px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-gold)]/20 via-black/60 to-[var(--color-background)]" />
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <span className="text-[300px] select-none">☸</span>
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <p className="mb-3 text-xs font-semibold tracking-[0.4em] uppercase text-[var(--color-gold)]">
            Theravada Buddhism
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Theravada Buddhism
            <br />
            <span className="text-gradient">A Complete Guide</span>
          </h1>
          <p className="mt-4 max-w-lg text-base text-white/60">
            2,500 years of &quot;The Teaching of the Elders&quot; — the oldest surviving Buddhist tradition
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Language Switch */}
        <div className="flex justify-center mb-6">
          <Link
            href="/theravada"
            className="text-sm text-gray-500 hover:text-[var(--color-gold)] transition-colors"
          >
            🇯🇵 日本語
          </Link>
        </div>

        <Breadcrumb
          items={[
            { label: "Home", href: "/en" },
            { label: "Theravada Buddhism" },
          ]}
        />

        {/* Table of Contents */}
        <Card className="mt-8">
          <div className="p-6">
            <h2 className="text-lg font-bold text-[var(--color-foreground)] mb-4">
              📋 Table of Contents
            </h2>
            <nav className="space-y-2">
              {[
                { href: "#about", label: "☸ What is Theravada Buddhism" },
                { href: "#history", label: "📜 History" },
                { href: "#comparison", label: "⚖️ Comparison with Mahayana" },
                { href: "#teachings", label: "📿 Core Teachings" },
                { href: "#practice", label: "🧘 Practice" },
                { href: "#canon", label: "📚 Pali Canon (Tipitaka)" },
                { href: "#countries", label: "🌏 Theravada Buddhist Countries" },
                { href: "#japan", label: "🇯🇵 Connection with Japan" },
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

        {/* What is Theravada Buddhism */}
        <section id="about" className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">☸</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              What is Theravada Buddhism
            </h2>
          </div>
          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed whitespace-pre-line">
            {theravadaAbout}
          </div>
        </section>

        {/* History */}
        <section id="history" className="mt-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">📜</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              History
            </h2>
          </div>
          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed whitespace-pre-line">
            {theravadaHistory}
          </div>
        </section>

        {/* Comparison with Mahayana */}
        <section id="comparison" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">⚖️</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              Comparison with Mahayana
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="px-4 py-3 text-left text-[var(--color-muted)] font-medium w-24">
                    Topic
                  </th>
                  <th className="px-4 py-3 text-left font-medium">
                    <Tag label="Theravada" variant="gold" />
                  </th>
                  <th className="px-4 py-3 text-left font-medium">
                    <Tag label="Mahayana" variant="temple" />
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {theravadaComparison.map((row) => (
                  <tr
                    key={row.topic}
                    className="hover:bg-white/5 transition-colors"
                  >
                    <td className="px-4 py-3 font-medium text-[var(--color-foreground)]">
                      {row.topic}
                    </td>
                    <td className="px-4 py-3 text-[var(--color-muted)]">
                      {row.theravada}
                    </td>
                    <td className="px-4 py-3 text-[var(--color-muted)]">
                      {row.mahayana}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Core Teachings */}
        <section id="teachings" className="mt-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">📿</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              Core Teachings
            </h2>
          </div>
          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed whitespace-pre-line">
            {theravadaTeachings}
          </div>
        </section>

        {/* Practice */}
        <section id="practice" className="mt-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🧘</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              Practice
            </h2>
          </div>
          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed whitespace-pre-line">
            {theravadaPractice}
          </div>
        </section>

        {/* Pali Canon (Tipitaka) */}
        <section id="canon" className="mt-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">📚</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              Pali Canon (Tipitaka)
            </h2>
          </div>
          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed whitespace-pre-line">
            {theravadaCanon}
          </div>
        </section>

        {/* Theravada Buddhist Countries */}
        <section id="countries" className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🌏</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              Theravada Buddhist Countries
            </h2>
          </div>
          <div className="space-y-6">
            {theravadaCountries.map((country) => (
              <Card key={country.name}>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-2xl">{country.emoji}</span>
                    <h3 className="text-lg font-bold text-[var(--color-foreground)]">
                      {country.name}
                    </h3>
                    <span className="text-xs text-[var(--color-gold)]">
                      {country.population}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-[var(--color-muted)] leading-relaxed">
                    {country.summary}
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg bg-[var(--color-background-elevated)] p-3">
                      <p className="text-xs font-semibold text-[var(--color-gold)] mb-1">
                        🏛️ Temples & Sites
                      </p>
                      <p className="text-sm text-[var(--color-muted)]">
                        {country.temples}
                      </p>
                    </div>
                    <div className="rounded-lg bg-[var(--color-background-elevated)] p-3">
                      <p className="text-xs font-semibold text-[var(--color-temple)] mb-1">
                        ✨ Features
                      </p>
                      <p className="text-sm text-[var(--color-muted)]">
                        {country.features}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Connection with Japan */}
        <section id="japan" className="mt-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🇯🇵</span>
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              Connection with Japan
            </h2>
          </div>
          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed whitespace-pre-line">
            {theravadaJapanConnection}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-[var(--color-muted)] mb-4">
            Explore more about the world of Buddhism
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/en/butsu-jiten"
              className="group relative rounded-full px-8 py-3.5 text-sm font-bold overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-temple)] to-[var(--color-gold)] opacity-90 group-hover:opacity-100 transition-opacity" />
              <span className="relative text-white">Buddhist Deity Dictionary</span>
            </Link>
            <Link
              href="/en/guide"
              className="rounded-full border border-[var(--color-border)] px-8 py-3.5 text-sm font-bold text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:border-[var(--color-gold)]/40 transition-all"
            >
              Visit Etiquette Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
