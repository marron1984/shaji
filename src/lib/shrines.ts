import { shrines } from "@/data/shrines";
import { Shrine, RegionId, ShrineType } from "@/types";

export function getAllShrines(): Shrine[] {
  return shrines;
}

export function getShrineBySlug(slug: string): Shrine | undefined {
  return shrines.find((s) => s.slug === slug);
}

export function getShrinesByRegion(regionId: RegionId): Shrine[] {
  return shrines.filter((s) => s.regionId === regionId);
}

export function getShrinesByType(type: ShrineType): Shrine[] {
  return shrines.filter((s) => s.type === type);
}

export function getFeaturedShrines(): Shrine[] {
  return shrines.filter((s) => s.isFeatured);
}

export function getRelatedShrines(slugs: string[]): Shrine[] {
  return shrines.filter((s) => slugs.includes(s.slug));
}
