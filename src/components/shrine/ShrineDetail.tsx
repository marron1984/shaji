import type { Shrine } from "@/types";
import Tag from "@/components/ui/Tag";
import SectionHeading from "@/components/ui/SectionHeading";

interface ShrineDetailProps {
  shrine: Shrine;
}

export default function ShrineDetail({ shrine }: ShrineDetailProps) {
  const badgeVariant = shrine.type === "shrine" ? "shrine" : "temple";

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="mb-2 flex items-center gap-3">
          <h1 className="text-3xl font-bold text-[var(--color-foreground)]">{shrine.name}</h1>
          <Tag label={shrine.typeName} variant={badgeVariant} />
        </div>
        <p className="text-sm text-[var(--color-muted)]">
          {shrine.prefecture} {shrine.address}
        </p>
      </div>

      {/* Description */}
      <div>
        <p className="leading-relaxed text-[var(--color-muted)] whitespace-pre-wrap">
          {shrine.description}
        </p>
      </div>

      {/* Highlights */}
      {shrine.highlights.length > 0 && (
        <div>
          <SectionHeading>見どころ</SectionHeading>
          <ul className="mt-4 list-inside list-disc space-y-2 text-[var(--color-muted)]">
            {shrine.highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Famous Charms */}
      {shrine.famousCharms.length > 0 && (
        <div>
          <SectionHeading>縁起物</SectionHeading>
          <div className="mt-4 space-y-3">
            {shrine.famousCharms.map((charm, i) => (
              <div
                key={i}
                className="rounded-md bg-[var(--color-gold-light)] p-4"
              >
                <p className="font-medium text-[var(--color-foreground)]">{charm.name}</p>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  {charm.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Info panel */}
      <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background-elevated)] p-6">
        <h3 className="mb-4 text-lg font-bold text-[var(--color-foreground)]">参拝情報</h3>
        <dl className="space-y-3 text-sm">
          <div className="flex gap-2">
            <dt className="w-24 shrink-0 font-medium text-[var(--color-muted)]">
              アクセス
            </dt>
            <dd className="text-[var(--color-muted)]">{shrine.access}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-24 shrink-0 font-medium text-[var(--color-muted)]">
              参拝時間
            </dt>
            <dd className="text-[var(--color-muted)]">{shrine.hours}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-24 shrink-0 font-medium text-[var(--color-muted)]">拝観料</dt>
            <dd className="text-[var(--color-muted)]">{shrine.admission}</dd>
          </div>
        </dl>
      </div>

      {/* Tags */}
      {shrine.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {shrine.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      )}
    </div>
  );
}
