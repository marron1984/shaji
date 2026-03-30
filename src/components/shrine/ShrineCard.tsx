import Link from "next/link";
import Image from "next/image";
import type { Shrine } from "@/types";
import Tag from "@/components/ui/Tag";

const shrineImages: Record<string, string> = {
  "fushimi-inari":
    "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=640&q=80",
  kiyomizudera:
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=640&q=80",
  "meiji-jingu":
    "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=640&q=80",
  "itsukushima-jinja":
    "https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?w=640&q=80",
  "izumo-taisha":
    "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=640&q=80",
  "senso-ji":
    "https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=640&q=80",
  "todai-ji":
    "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?w=640&q=80",
  "kinkaku-ji":
    "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=640&q=80",
  "ise-jingu":
    "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?w=640&q=80",
  "kasuga-taisha":
    "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=640&q=80",
  "nikko-toshogu":
    "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=640&q=80",
};

const defaultImages = [
  "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=640&q=80",
  "https://images.unsplash.com/photo-1528164344885-47b1492b5e7b?w=640&q=80",
  "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=640&q=80",
  "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=640&q=80",
  "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=640&q=80",
  "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=640&q=80",
];

function getShrineImage(slug: string): string {
  if (shrineImages[slug]) return shrineImages[slug];
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) % defaultImages.length;
  }
  return defaultImages[Math.abs(hash) % defaultImages.length];
}

interface ShrineCardProps {
  shrine: Shrine;
}

export default function ShrineCard({ shrine }: ShrineCardProps) {
  const badgeVariant = shrine.type === "shrine" ? "shrine" : "temple";
  const image = getShrineImage(shrine.slug);
  const glowClass =
    shrine.type === "shrine" ? "hover:glow-shrine" : "hover:glow-gold";

  return (
    <Link
      href={`/jinja/${shrine.slug}`}
      className={`group block overflow-hidden rounded-2xl bg-[var(--color-background-card)] border border-[var(--color-border)] hover:border-white/15 transition-all ${glowClass}`}
    >
      <div className="relative h-44 overflow-hidden">
        <Image
          src={image}
          alt={shrine.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background-card)] via-transparent to-transparent" />
        <div className="absolute top-3 left-3">
          <Tag label={shrine.typeName} variant={badgeVariant} />
        </div>
        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="text-xl font-bold text-white drop-shadow-lg">
            {shrine.name}
          </h3>
          <p className="text-xs text-white/60 mt-0.5">{shrine.prefecture}</p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm leading-relaxed text-[var(--color-muted)] line-clamp-2">
          {shrine.shortDescription}
        </p>
        <div className="mt-3 flex flex-wrap gap-1">
          {shrine.tags.slice(0, 4).map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <p className="mt-3 text-sm font-medium text-[var(--color-shrine)] group-hover:underline">
          詳しく見る →
        </p>
      </div>
    </Link>
  );
}
