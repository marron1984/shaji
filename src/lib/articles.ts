import { articles } from "@/data/articles";
import { Article } from "@/types";

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getLatestArticles(count: number): Article[] {
  return [...articles]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, count);
}

export function getArticlesRelatedToShrine(shrineSlug: string): Article[] {
  return articles.filter((a) => a.relatedShrinesSlugs.includes(shrineSlug));
}
