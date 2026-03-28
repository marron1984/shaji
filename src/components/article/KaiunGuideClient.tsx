"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { getCategoryMeta } from "@/data/category-meta";

interface Article {
  slug: string;
  title: string;
  categoryId: string;
  categoryName: string;
  excerpt: string;
}

interface CategoryWithArticles {
  id: string;
  slug: string;
  name: string;
  emoji: string;
  image: string;
  description: string;
  featured: boolean;
  articles: Article[];
}

interface Props {
  categories: CategoryWithArticles[];
  totalArticles: number;
}

export default function KaiunGuideClient({
  categories,
  totalArticles,
}: Props) {
  const [selectedCat, setSelectedCat] = useState<string | null>(null);
  const [keyword, setKeyword] = useState("");

  const featured = categories.filter((c) => c.featured);
  const others = categories.filter((c) => !c.featured);

  const filtered = useMemo(() => {
    let cats = categories;
    if (selectedCat) {
      cats = cats.filter((c) => c.id === selectedCat);
    }
    if (keyword.trim()) {
      const kw = keyword.trim().toLowerCase();
      cats = cats
        .map((c) => ({
          ...c,
          articles: c.articles.filter(
            (a) =>
              a.title.toLowerCase().includes(kw) ||
              a.excerpt.toLowerCase().includes(kw)
          ),
        }))
        .filter((c) => c.articles.length > 0);
    }
    return cats;
  }, [categories, selectedCat, keyword]);

  const filteredCount = filtered.reduce(
    (sum, c) => sum + c.articles.length,
    0
  );

  const showArticleList = selectedCat !== null || keyword.trim() !== "";

  return (
    <>
      {/* ===== ヒーローセクション ===== */}
      <section className="relative h-[340px] sm:h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=1400&q=80"
          alt="神社の鳥居"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <p className="mb-2 text-sm font-medium tracking-widest uppercase opacity-80">
            Kaiun Guide
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight drop-shadow-lg">
            開運ガイド
          </h1>
          <p className="mt-4 max-w-lg text-base sm:text-lg opacity-90 leading-relaxed">
            風水・縁起物・参拝マナーなど
            <br className="sm:hidden" />
            運気を上げる{totalArticles}以上の記事
          </p>
          <div className="mt-6 flex items-center gap-3 text-sm opacity-70">
            <span>📂 {categories.length}カテゴリ</span>
            <span>•</span>
            <span>📄 {totalArticles}記事</span>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        {/* ===== 検索バー ===== */}
        <div className="relative -mt-7 z-20 mx-auto max-w-2xl">
          <div className="rounded-2xl bg-white shadow-xl p-1">
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="🔍 キーワードで記事を検索..."
              className="w-full rounded-xl border-0 bg-gray-50 px-5 py-4 text-base focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] transition-colors"
            />
          </div>
        </div>

        {/* ===== カテゴリフィルタ ===== */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setSelectedCat(null)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              selectedCat === null
                ? "bg-[var(--color-gold)] text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-100 shadow-sm"
            }`}
          >
            すべて
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() =>
                setSelectedCat(selectedCat === cat.id ? null : cat.id)
              }
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                selectedCat === cat.id
                  ? "bg-[var(--color-gold)] text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100 shadow-sm"
              }`}
            >
              {cat.emoji} {cat.name}
            </button>
          ))}
        </div>

        {/* ===== 検索・フィルタ結果表示 ===== */}
        {showArticleList ? (
          <div className="mt-10 mb-16">
            <p className="mb-6 text-sm text-gray-500">
              <span className="font-bold text-lg text-[var(--color-gold)]">
                {filteredCount}
              </span>
              件の記事
              {selectedCat && (
                <span className="ml-1">
                  （{categories.find((c) => c.id === selectedCat)?.name}）
                </span>
              )}
              {keyword && (
                <span className="ml-1">「{keyword}」の検索結果</span>
              )}
            </p>

            {filtered.length === 0 ? (
              <p className="text-gray-400 py-16 text-center text-lg">
                該当する記事が見つかりませんでした
              </p>
            ) : (
              <div className="space-y-12">
                {filtered.map((cat) => (
                  <section key={cat.slug}>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-2xl">{cat.emoji}</span>
                      <h2 className="text-xl font-bold text-gray-800">
                        {cat.name}
                      </h2>
                      <span className="text-sm text-gray-400">
                        {cat.articles.length}件
                      </span>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {cat.articles.map((article) => (
                        <ArticleCard
                          key={`${cat.id}-${article.slug}`}
                          article={article}
                          categoryId={cat.id}
                          categoryImage={cat.image}
                          categoryEmoji={cat.emoji}
                        />
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            )}
          </div>
        ) : (
          <>
            {/* ===== 人気カテゴリ（大きなカード） ===== */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
                人気カテゴリ
              </h2>
              <p className="text-center text-gray-500 text-sm mb-8">
                よく読まれているカテゴリを厳選
              </p>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {featured.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCat(cat.id)}
                    className="group relative h-56 overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all text-left"
                  >
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="text-2xl drop-shadow">{cat.emoji}</span>
                      <h3 className="mt-1 text-lg font-bold text-white drop-shadow">
                        {cat.name}
                      </h3>
                      <p className="mt-1 text-xs text-white/80 line-clamp-1">
                        {cat.description}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-xs font-medium text-[var(--color-gold)] bg-white/20 backdrop-blur-sm rounded-full px-2.5 py-0.5">
                          {cat.articles.length}記事
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* ===== 全カテゴリ一覧 ===== */}
            <section className="mt-16 mb-16">
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
                全カテゴリ一覧
              </h2>
              <p className="text-center text-gray-500 text-sm mb-8">
                {categories.length}カテゴリ・{totalArticles}記事
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {others.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCat(cat.id)}
                    className="group flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm hover:shadow-md transition-all text-left"
                  >
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="64px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-gray-800 group-hover:text-[var(--color-gold)] transition-colors">
                        {cat.emoji} {cat.name}
                      </h3>
                      <p className="mt-0.5 text-xs text-gray-500 line-clamp-1">
                        {cat.description}
                      </p>
                      <p className="mt-1 text-xs font-medium text-[var(--color-gold)]">
                        {cat.articles.length}記事 →
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </>
  );
}

/** 記事カード（サムネイル付き） */
function ArticleCard({
  article,
  categoryId,
  categoryImage,
  categoryEmoji,
}: {
  article: Article;
  categoryId: string;
  categoryImage: string;
  categoryEmoji: string;
}) {
  return (
    <Link
      href={`/kaiun-guide/${categoryId}/${article.slug}`}
      className="group block overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-all"
    >
      <div className="relative h-36 overflow-hidden">
        <Image
          src={categoryImage}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute top-3 left-3 text-xs font-medium bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 text-gray-700">
          {categoryEmoji} {article.categoryName}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-800 line-clamp-2 group-hover:text-[var(--color-gold)] transition-colors">
          {article.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500 line-clamp-2">
          {article.excerpt}
        </p>
        <p className="mt-3 text-sm font-medium text-[var(--color-gold)]">
          記事を読む →
        </p>
      </div>
    </Link>
  );
}
