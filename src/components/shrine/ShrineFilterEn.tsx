"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Shrine } from "@/types";
import type { RegionId } from "@/types";
import Tag from "@/components/ui/Tag";
import { getShrineEn } from "@/lib/shrine-en";
import { getShrineImageByType } from "@/data/shrine-images";

type TypeFilter = "all" | "shrine" | "temple";

const REGION_LABELS: Record<RegionId, string> = {
  hokkaido: "Hokkaido",
  tohoku: "Tohoku",
  kanto: "Kanto",
  chubu: "Chubu",
  kinki: "Kansai",
  chugoku: "Chugoku",
  shikoku: "Shikoku",
  kyushu: "Kyushu",
};

const TYPE_BUTTONS: { value: TypeFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "shrine", label: "Shrine" },
  { value: "temple", label: "Temple" },
];

interface ShrineFilterEnProps {
  shrines: Shrine[];
}

export default function ShrineFilterEn({ shrines }: ShrineFilterEnProps) {
  const [selectedRegion, setSelectedRegion] = useState<RegionId | "">("");
  const [selectedType, setSelectedType] = useState<TypeFilter>("all");

  const filtered = shrines.filter((s) => {
    if (selectedRegion && s.regionId !== selectedRegion) return false;
    if (selectedType !== "all" && s.type !== selectedType) return false;
    return true;
  });

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-4">
        {/* Region select */}
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value as RegionId | "")}
          className="rounded-md border border-[var(--color-border)] bg-[var(--color-background-card)] px-3 py-2 text-sm focus:border-[var(--color-shrine)] focus:outline-none"
        >
          <option value="">All Regions</option>
          {(Object.entries(REGION_LABELS) as [RegionId, string][]).map(
            ([id, label]) => (
              <option key={id} value={id}>
                {label}
              </option>
            ),
          )}
        </select>

        {/* Type toggle buttons */}
        <div className="flex gap-1">
          {TYPE_BUTTONS.map((btn) => (
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

        {/* Result count */}
        <span className="text-sm text-[var(--color-muted)]">
          {filtered.length} {filtered.length === 1 ? "result" : "results"}
        </span>
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((shrine) => {
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
                    <p className="text-xs text-white/70">{shrine.name}</p>
                    <p className="text-xs text-white/80 mt-0.5">
                      {shrine.prefecture}
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {en?.description || shrine.shortDescription}
                  </p>
                  <p className="mt-2 text-sm font-medium text-[var(--color-shrine)] group-hover:underline">
                    Learn more &rarr;
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <p className="py-10 text-center text-[var(--color-muted)]">
          No shrines or temples match your filters.
        </p>
      )}
    </div>
  );
}
