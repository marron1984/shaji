import Link from "next/link";
import type { Region } from "@/types";

interface RegionNavProps {
  regions: Region[];
}

export default function RegionNav({ regions }: RegionNavProps) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {regions.map((region) => (
        <Link
          key={region.id}
          href={`/jinja?region=${region.id}`}
          className="shrink-0 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-[var(--color-shrine)] hover:text-[var(--color-shrine)]"
        >
          {region.name}
        </Link>
      ))}
    </div>
  );
}
