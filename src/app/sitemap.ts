import type { MetadataRoute } from "next";
import { getCategories, getArticlesByCategory } from "@/lib/github-articles";
import { getAllShrines } from "@/lib/shrines";

const SITE_URL = "https://shaji-matome.click";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // 固定ページ（日本語）
  entries.push(
    { url: SITE_URL, changeFrequency: "daily", priority: 1.0 },
    { url: `${SITE_URL}/jinja`, changeFrequency: "weekly", priority: 0.9 },
    {
      url: `${SITE_URL}/kaiun-guide`,
      changeFrequency: "daily",
      priority: 0.9,
    },
    { url: `${SITE_URL}/temples`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/sanpai-manner`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.3 }
  );

  // 英語ページ
  entries.push(
    { url: `${SITE_URL}/en`, changeFrequency: "weekly", priority: 0.9 },
    {
      url: `${SITE_URL}/en/shrines`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    { url: `${SITE_URL}/en/guide`, changeFrequency: "weekly", priority: 0.7 },
    {
      url: `${SITE_URL}/en/temples`,
      changeFrequency: "weekly",
      priority: 0.7,
    }
  );

  // 神社・お寺個別ページ（日英）
  const shrines = getAllShrines();
  for (const shrine of shrines) {
    entries.push({
      url: `${SITE_URL}/jinja/${shrine.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    });
    entries.push({
      url: `${SITE_URL}/en/shrines/${shrine.slug}`,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  // 開運ガイド記事
  const categories = getCategories();
  for (const cat of categories) {
    const articles = getArticlesByCategory(cat.slug);
    for (const article of articles) {
      entries.push({
        url: `${SITE_URL}/kaiun-guide/${cat.id}/${article.slug}`,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
