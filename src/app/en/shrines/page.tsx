import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllShrines } from "@/lib/shrines";
import { getShrineEn } from "@/lib/shrine-en";
import { SITE_URL } from "@/lib/seo";
import Tag from "@/components/ui/Tag";
import { getShrineImageByType } from "@/data/shrine-images";

export const metadata: Metadata = {
  title: "Shrines & Temples in Japan - Complete Guide",
  description:
    "Explore famous shrines and temples across Japan. Find visitor information, spiritual significance, and travel tips for each sacred place.",
  alternates: {
    canonical: `${SITE_URL}/en/shrines`,
    languages: { ja: `${SITE_URL}/jinja`, en: `${SITE_URL}/en/shrines` },
  },
};

export default function EnglishShrineListPage() {
  const shrines = getAllShrines();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Shrines &amp; Temples in Japan
          </h1>
          <p className="mt-2 text-gray-500">
            {shrines.length} sacred places to explore
          </p>
        </div>
        <Link
          href="/jinja"
          className="text-sm text-gray-400 hover:text-[var(--color-gold)]"
        >
          🇯🇵 日本語
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shrines.map((shrine) => {
          const en = getShrineEn(shrine.slug);
          return (
            <Link
              key={shrine.slug}
              href={`/en/shrines/${shrine.slug}`}
              className="group block overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={getShrineImageByType(shrine.type)}
                  alt={en?.name || shrine.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-3 left-3">
                  <Tag
                    label={shrine.type === "shrine" ? "Shrine" : "Temple"}
                    variant={shrine.type === "shrine" ? "shrine" : "temple"}
                  />
                </div>
                <div className="absolute bottom-3 left-4 right-4">
                  <h2 className="text-lg font-bold text-white drop-shadow-lg">
                    {en?.name || shrine.name}
                  </h2>
                  <p className="text-xs text-white/80">{shrine.prefecture}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 line-clamp-2">
                  {en?.description || shrine.shortDescription}
                </p>
                <p className="mt-2 text-sm font-medium text-[var(--color-shrine)] group-hover:underline">
                  Learn more →
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
