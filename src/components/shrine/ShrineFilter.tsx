"use client";

import { useState } from "react";
import type { Shrine } from "@/types";
import type { Region, RegionId } from "@/types";
import ShrineList from "@/components/shrine/ShrineList";

interface ShrineFilterProps {
  regions: Region[];
  shrines: Shrine[];
}

type TypeFilter = "all" | "shrine" | "temple";

export default function ShrineFilter({ regions, shrines }: ShrineFilterProps) {
  const [selectedRegion, setSelectedRegion] = useState<RegionId | "">("");
  const [selectedType, setSelectedType] = useState<TypeFilter>("all");

  const filtered = shrines.filter((s) => {
    if (selectedRegion && s.regionId !== selectedRegion) return false;
    if (selectedType !== "all" && s.type !== selectedType) return false;
    return true;
  });

  const typeButtons: { value: TypeFilter; label: string }[] = [
    { value: "all", label: "すべて" },
    { value: "shrine", label: "神社" },
    { value: "temple", label: "お寺" },
  ];

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-4">
        {/* Region select */}
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value as RegionId | "")}
          className="rounded-md border border-[var(--color-border)] bg-[var(--color-background-card)] px-3 py-2 text-sm focus:border-[var(--color-shrine)] focus:outline-none"
        >
          <option value="">全地域</option>
          {regions.map((region) => (
            <option key={region.id} value={region.id}>
              {region.name}
            </option>
          ))}
        </select>

        {/* Type toggle buttons */}
        <div className="flex gap-1">
          {typeButtons.map((btn) => (
            <button
              key={btn.value}
              type="button"
              onClick={() => setSelectedType(btn.value)}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                selectedType === btn.value
                  ? "bg-[var(--color-shrine)] text-white"
                  : "bg-white/5 text-[var(--color-muted)] hover:bg-white/10"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <ShrineList shrines={filtered} />
      ) : (
        <p className="py-10 text-center text-[var(--color-muted)]">
          条件に一致する神社・お寺が見つかりませんでした。
        </p>
      )}
    </div>
  );
}
