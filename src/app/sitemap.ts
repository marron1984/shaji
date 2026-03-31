import type { MetadataRoute } from "next";
import { getCategories, getArticlesByCategory } from "@/lib/github-articles";
import { getAllShrines } from "@/lib/shrines";
import { getAllSaigokuTemples } from "@/data/saigoku-data";
import { getAllBandoTemples } from "@/data/bando-data";
import { getAllChichibuTemples } from "@/data/chichibu-data";
import { getAllKojikiStories } from "@/data/kojiki-data";
import { getAllButsuDeities } from "@/data/butsu-data";

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
    { url: `${SITE_URL}/ohenro`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/saigoku`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/reijo`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/chichibu`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/kojiki`, changeFrequency: "monthly", priority: 0.8 },
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

  // 西国三十三所 個別ページ
  const saigokuTemples = getAllSaigokuTemples();
  for (const temple of saigokuTemples) {
    entries.push({
      url: `${SITE_URL}/saigoku/${temple.num}`,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  // 坂東三十三観音
  entries.push({ url: `${SITE_URL}/bando`, changeFrequency: "monthly", priority: 0.8 });
  const bandoTemples = getAllBandoTemples();
  for (const temple of bandoTemples) {
    entries.push({ url: `${SITE_URL}/bando/${temple.num}`, changeFrequency: "monthly", priority: 0.7 });
  }

  // 秩父三十四箇所
  const chichibuTemples = getAllChichibuTemples();
  for (const temple of chichibuTemples) {
    entries.push({ url: `${SITE_URL}/chichibu/${temple.num}`, changeFrequency: "monthly", priority: 0.7 });
  }

  // 古事記 個別ページ
  const kojikiStories = getAllKojikiStories();
  for (const story of kojikiStories) {
    entries.push({
      url: `${SITE_URL}/kojiki/${story.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  // 仏様辞典 個別ページ
  const butsuDeities = getAllButsuDeities();
  for (const deity of butsuDeities) {
    entries.push({
      url: `${SITE_URL}/butsu-jiten/${deity.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

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
