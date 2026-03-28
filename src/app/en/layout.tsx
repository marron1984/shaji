import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} - Guide to Shrines & Temples in Japan`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Comprehensive guide to famous shrines and temples across Japan. Discover spiritual spots, good fortune tips, and cultural insights.",
  openGraph: {
    locale: "en_US",
    siteName: SITE_NAME,
  },
  alternates: {
    canonical: `${SITE_URL}/en`,
    languages: { ja: SITE_URL, en: `${SITE_URL}/en` },
  },
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div lang="en">{children}</div>;
}
