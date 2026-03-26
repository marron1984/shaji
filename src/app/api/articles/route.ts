import { NextRequest, NextResponse } from "next/server";
import {
  getCategories,
  getArticlesByCategory,
  getArticle,
} from "@/lib/github-articles";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const rawCategory = searchParams.get("category");
  const category = rawCategory ? decodeURIComponent(rawCategory) : null;
  const slug = searchParams.get("slug");

  // GET /api/articles?category=xxx&slug=001 → 記事全文
  if (category && slug) {
    const article = getArticle(category, slug);
    if (!article) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }
    return NextResponse.json(article);
  }

  // GET /api/articles?category=xxx → カテゴリ内の記事一覧
  if (category) {
    const articles = getArticlesByCategory(category);
    return NextResponse.json({ category, articles });
  }

  // GET /api/articles → カテゴリ一覧
  const categories = getCategories();
  return NextResponse.json({ categories });
}
