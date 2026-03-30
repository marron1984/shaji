export interface ButsuDeity {
  slug: string;
  name: string;
  yomikata: string;
  sanskrit: string;
  category: "nyorai" | "bosatsu" | "myoo" | "tenbu";
  categoryLabel: "如来" | "菩薩" | "明王" | "天部";
  emoji: string;
  summary: string;
  description: string;
  iconography: string;
  goriyaku: string;
  mantras: string[];
  famousTemples: { name: string; location: string; note: string }[];
  relatedDeities: string[];
  keywords: string[];
}

const butsuData: ButsuDeity[] = [
  // DATA_PLACEHOLDER - will be populated by agents
];

export function getButsuDeity(slug: string): ButsuDeity | undefined {
  return butsuData.find((d) => d.slug === slug);
}

export function getAllButsuDeities(): ButsuDeity[] {
  return butsuData;
}

export function getButsuByCategory(
  category: ButsuDeity["category"]
): ButsuDeity[] {
  return butsuData.filter((d) => d.category === category);
}

export const BUTSU_CATEGORIES = [
  { key: "nyorai" as const, label: "如来", emoji: "☀️", description: "悟りを開いた最高位の仏" },
  { key: "bosatsu" as const, label: "菩薩", emoji: "🙏", description: "衆生を救うために修行する存在" },
  { key: "myoo" as const, label: "明王", emoji: "🔥", description: "忿怒の姿で煩悩を打ち砕く守護者" },
  { key: "tenbu" as const, label: "天部", emoji: "⚡", description: "仏法を守護する天界の神々" },
] as const;
