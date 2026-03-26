"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import SectionHeading from "@/components/ui/SectionHeading";

interface CategoryWithArticles {
  id: string;
  slug: string;
  name: string;
  articles: {
    slug: string;
    title: string;
    categoryId: string;
    categoryName: string;
    excerpt: string;
  }[];
}

interface Props {
  categories: CategoryWithArticles[];
}

export default function KaiunGuideClient({ categories }: Props) {
  const [selectedCat, setSelectedCat] = useState<string | null>(null);
  const [keyword, setKeyword] = useState("");

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

  const totalCount = filtered.reduce((sum, c) => sum + c.articles.length, 0);

  return (
    <>
      {/* 検索窓 */}
      <div className="mb-6">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="記事をキーワードで検索..."
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-[var(--color-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)]"
        />
      </div>

      {/* カテゴリメニュー */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCat(null)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            selectedCat === null
              ? "bg-[var(--color-gold)] text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              selectedCat === cat.id
                ? "bg-[var(--color-gold)] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* 件数 */}
      <p className="mb-6 text-sm text-gray-500">
        <span className="font-bold text-[var(--color-gold)]">{totalCount}</span>
        件の記事
        {selectedCat && (
          <span>
            （{categories.find((c) => c.id === selectedCat)?.name}）
          </span>
        )}
        {keyword && <span>「{keyword}」の検索結果</span>}
      </p>

      {/* 記事一覧 */}
      {filtered.length === 0 ? (
        <p className="text-gray-400 py-12 text-center">
          該当する記事が見つかりませんでした。
        </p>
      ) : (
        <div className="space-y-12">
          {filtered.map((cat) => (
            <section key={cat.slug} id={`cat-${cat.id}`}>
              <SectionHeading>
                {cat.name}
                <span className="ml-2 text-sm font-normal text-gray-500">
                  （{cat.articles.length}件）
                </span>
              </SectionHeading>
              <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cat.articles.map((article) => (
                  <Link
                    key={`${cat.slug}-${article.slug}`}
                    href={`/kaiun-guide/${cat.id}/${article.slug}`}
                    className="block"
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <div className="h-2 bg-[var(--color-gold)]" />
                      <div className="p-5">
                        <Tag label={cat.name} variant="gold" />
                        <h2 className="mt-2 text-lg font-bold text-gray-800">
                          {article.title}
                        </h2>
                        <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                          {article.excerpt}
                        </p>
                        <p className="mt-3 text-sm font-medium text-[var(--color-gold)]">
                          記事を読む &rarr;
                        </p>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </>
  );
}
