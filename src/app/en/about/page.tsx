import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About This Site",
  description:
    "Shaji Matome is a comprehensive guide to famous shrines and temples across Japan, with good fortune tips and cultural insights.",
  alternates: {
    canonical: `${SITE_URL}/en/about`,
    languages: {
      ja: `${SITE_URL}/about`,
      en: `${SITE_URL}/en/about`,
    },
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/en" },
          { label: "About This Site" },
        ]}
      />

      <div className="flex items-center justify-between mt-4 mb-6">
        <h1 className="text-3xl font-bold">About This Site</h1>
        <Link
          href="/about"
          className="text-sm text-gray-500 hover:text-[var(--color-gold)] transition-colors"
        >
          🇯🇵 日本語
        </Link>
      </div>

      <div className="space-y-6 text-[var(--color-muted)] leading-relaxed">
        <p>
          &ldquo;Shaji Matome&rdquo; is a comprehensive guide that brings
          together information on famous shrines and temples from all across
          Japan. We provide easy-to-understand introductions to each
          shrine&apos;s and temple&apos;s basic information, access directions,
          and highlights.
        </p>
        <p>
          Our &ldquo;Good Fortune Guide&rdquo; section also offers detailed
          explanations of lucky charms (omamori), fortune slips (omikuji),
          temple seal stamps (goshuin), votive tablets (ema), and other
          auspicious items, as well as proper worship etiquette. Whether
          you&apos;re visiting a shrine or temple for the first time or looking
          to deepen your knowledge, we aim to provide useful content for
          everyone.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Our Content</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Shrines &amp; Temples Directory</strong>: Browse
            representative shrines and temples from all 8 regions of Japan,
            searchable by area and type.
          </li>
          <li>
            <strong>Good Fortune Guide</strong>: Articles covering the basics of
            lucky charms, fortune slips, temple seal stamps, votive tablets, and
            proper worship etiquette.
          </li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">Disclaimer</h2>
        <p>
          The information on this site is accurate as of the time of writing and
          may differ from the latest details. When planning a visit, please
          check the official website of each shrine or temple for the most
          up-to-date information.
        </p>
      </div>
    </div>
  );
}
