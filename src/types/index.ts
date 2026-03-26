export type RegionId =
  | "hokkaido"
  | "tohoku"
  | "kanto"
  | "chubu"
  | "kinki"
  | "chugoku"
  | "shikoku"
  | "kyushu";

export interface Region {
  id: RegionId;
  name: string;
  prefectures: string[];
}

export type ShrineType = "shrine" | "temple";

export interface EngimonoRef {
  name: string;
  description: string;
}

export interface Shrine {
  slug: string;
  name: string;
  type: ShrineType;
  typeName: string;
  regionId: RegionId;
  prefecture: string;
  address: string;
  description: string;
  shortDescription: string;
  highlights: string[];
  famousCharms: EngimonoRef[];
  access: string;
  hours: string;
  admission: string;
  tags: string[];
  isFeatured: boolean;
}

export type ArticleCategory =
  | "omamori"
  | "omikuji"
  | "ema"
  | "goshuincho"
  | "engimono"
  | "manners";

export interface ArticleSection {
  heading: string;
  body: string;
}

export interface Article {
  slug: string;
  title: string;
  subtitle?: string;
  publishedAt: string;
  category: ArticleCategory;
  categoryName: string;
  tags: string[];
  shortDescription: string;
  sections: ArticleSection[];
  relatedShrinesSlugs: string[];
}
