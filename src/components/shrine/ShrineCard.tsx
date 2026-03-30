import Link from "next/link";
import Image from "next/image";
import type { Shrine } from "@/types";
import Tag from "@/components/ui/Tag";
import { getShrineImageByType } from "@/data/shrine-images";

interface ShrineCardProps {
  shrine: Shrine;
}

export default function ShrineCard({ shrine }: ShrineCardProps) {
  const badgeVariant = shrine.type === "shrine" ? "shrine" : "temple";
  const image = getShrineImageByType(shrine.type);
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
