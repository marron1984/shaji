import articlesData from "@/data/articles-index.json";

interface CategoryData {
  slug: string;
  name: string;
  articles: ArticleData[];
}

interface ArticleData {
  slug: string;
  number: string;
  title: string;
  publishAt: string | null;
  excerpt: string;
  sections: { heading: string; body: string }[];
}

export interface CategoryInfo {
  id: string;
  slug: string;
  name: string;
  articleCount: number;
}

export interface ArticleSummary {
  slug: string;
  number: string;
  title: string;
  categoryId: string;
  category: string;
  categoryName: string;
  excerpt: string;
  publishAt: string | null;
}

export interface ArticleFull extends ArticleSummary {
  sections: { heading: string; body: string }[];
}

const data = articlesData as CategoryData[];

/** カテゴリslugから番号だけ取得 (01_風水_インテリア → 01) */
function categoryNumber(slug: string): string {
  return slug.split("_")[0];
}

/** 番号からカテゴリを検索 */
function findCategoryByNumber(num: string): CategoryData | undefined {
  return data.find((c) => categoryNumber(c.slug) === num);
}

function isPublished(publishAt: string | null): boolean {
  if (!publishAt) return true;
  return new Date(publishAt).getTime() <= Date.now();
}

export function getCategories(): CategoryInfo[] {
  return data
    .map((c) => ({
      id: categoryNumber(c.slug),
      slug: c.slug,
      name: c.name,
      articleCount: c.articles.filter((a) => isPublished(a.publishAt)).length,
    }))
    .filter((c) => c.articleCount > 0);
}

export function getArticlesByCategory(category: string): ArticleSummary[] {
  const cat =
    data.find((c) => c.slug === category) || findCategoryByNumber(category);
  if (!cat) return [];

  return cat.articles
    .filter((a) => isPublished(a.publishAt))
    .map((a) => ({
      slug: a.slug,
      number: a.number,
      title: a.title,
      categoryId: categoryNumber(cat.slug),
      category: cat.slug,
      categoryName: cat.name,
      excerpt: a.excerpt,
      publishAt: a.publishAt,
    }));
}

export function getArticle(
  category: string,
  slug: string
): ArticleFull | null {
  const cat =
    data.find((c) => c.slug === category) || findCategoryByNumber(category);
  if (!cat) return null;

  const article = cat.articles.find((a) => a.slug === slug);
  if (!article) return null;
  if (!isPublished(article.publishAt)) return null;

  return {
    slug: article.slug,
    number: article.number,
    title: article.title,
    categoryId: categoryNumber(cat.slug),
    category: cat.slug,
    categoryName: cat.name,
    excerpt: article.excerpt,
    publishAt: article.publishAt,
    sections: article.sections,
  };
}

export function getAllArticlesFlat(): ArticleSummary[] {
  return data.flatMap((c) =>
    c.articles
      .filter((a) => isPublished(a.publishAt))
      .map((a) => ({
        slug: a.slug,
        number: a.number,
        title: a.title,
        categoryId: categoryNumber(c.slug),
        category: c.slug,
        categoryName: c.name,
        excerpt: a.excerpt,
        publishAt: a.publishAt,
      }))
  );
}

export function getStats(): {
  published: number;
  scheduled: number;
  categories: number;
} {
  let published = 0;
  let scheduled = 0;
  for (const c of data) {
    for (const a of c.articles) {
      if (isPublished(a.publishAt)) published++;
      else scheduled++;
    }
  }
  return { published, scheduled, categories: data.length };
}
