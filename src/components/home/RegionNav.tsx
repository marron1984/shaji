import Link from "next/link";
import type { Region } from "@/types";

interface RegionNavProps {
  regions: Region[];
}

export default function RegionNav({ regions }: RegionNavProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
      {regions.map((region) => (
        <Link
          key={region.id}
          href={`/jinja?region=${region.id}`}
          className="shrink-0 rounded-full border border-[var(--color-border)] bg-[var(--color-background-card)] px-5 py-2.5 text-sm font-medium text-[var(--color-muted)] transition-all hover:border-[var(--color-shrine)]/40 hover:text-[var(--color-shrine)] hover:bg-[var(--color-shrine-light)]"
        >
          {region.name}
        </Link>
      ))}
    </div>
  );
}
