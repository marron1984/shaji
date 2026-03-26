import Link from "next/link";
import type { Shrine } from "@/types";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";

interface ShrineCardProps {
  shrine: Shrine;
}

export default function ShrineCard({ shrine }: ShrineCardProps) {
  const barColor =
    shrine.type === "shrine"
      ? "bg-[var(--color-shrine)]"
      : "bg-[var(--color-temple)]";

  const badgeVariant = shrine.type === "shrine" ? "shrine" : "temple";

  return (
    <Card className="overflow-hidden">
      <div className={`h-2 ${barColor}`} />
      <div className="p-4">
        <div className="mb-2 flex items-center gap-2">
          <h3 className="text-lg font-bold text-gray-800">{shrine.name}</h3>
          <Tag label={shrine.typeName} variant={badgeVariant} />
        </div>
        <p className="mb-2 text-xs text-gray-500">{shrine.prefecture}</p>
        <p className="mb-3 text-sm leading-relaxed text-gray-600">
          {shrine.shortDescription}
        </p>
        <div className="mb-3 flex flex-wrap gap-1">
          {shrine.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <Link
          href={`/jinja/${shrine.slug}`}
          className="text-sm font-medium text-[var(--color-shrine)] hover:underline"
        >
          詳しく見る &rarr;
        </Link>
      </div>
    </Card>
  );
}
