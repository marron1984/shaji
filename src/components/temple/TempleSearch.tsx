"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import type { Temple } from "@/types/temple";

const PREFECTURES = [
  "北海道",
  "青森県","岩手県","宮城県","秋田県","山形県","福島県",
  "茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県",
  "新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県",
  "三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県",
  "鳥取県","島根県","岡山県","広島県","山口県",
  "徳島県","香川県","愛媛県","高知県",
  "福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県",
];

const PER_PAGE = 50;

export default function TempleSearch() {
  const [allTemples, setAllTemples] = useState<Temple[]>([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [prefecture, setPrefecture] = useState("");
  const [sect, setSect] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch("/data/temples.json")
      .then((res) => res.json())
      .then((data: Temple[]) => {
        setAllTemples(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const sects = useMemo(() => {
    const s = new Set(allTemples.map((t) => t.sect).filter(Boolean));
    return [...s].sort();
  }, [allTemples]);

  const filtered = useMemo(() => {
    let result = allTemples;
    if (prefecture) {
      result = result.filter((t) => t.prefecture === prefecture);
    }
    if (sect) {
      result = result.filter((t) => t.sect === sect);
    }
    if (keyword.trim()) {
      const kw = keyword.trim().toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(kw) ||
          t.address.toLowerCase().includes(kw) ||
          t.mainDeity.toLowerCase().includes(kw)
      );
    }
    return result;
  }, [allTemples, prefecture, sect, keyword]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleFilter = useCallback(() => {
    setPage(1);
  }, []);

  useEffect(() => {
    handleFilter();
  }, [keyword, prefecture, sect, handleFilter]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-[var(--color-temple)] border-t-transparent" />
          <p className="mt-4 text-gray-600">寺院データを読み込み中...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* フィルター */}
      <div className="mb-6 grid gap-3 sm:grid-cols-3">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            都道府県
          </label>
          <select
            value={prefecture}
            onChange={(e) => setPrefecture(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
          >
            <option value="">すべて</option>
            {PREFECTURES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            宗派
          </label>
          <select
            value={sect}
            onChange={(e) => setSect(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
          >
            <option value="">すべて</option>
            {sects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            キーワード検索
          </label>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="寺院名・住所・本尊"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
          />
        </div>
      </div>

      {/* 件数 */}
      <p className="mb-4 text-sm text-gray-600">
        <span className="font-bold text-[var(--color-temple)]">
          {filtered.length.toLocaleString()}
        </span>
        件の寺院が見つかりました
        {totalPages > 1 && (
          <span>
            （{page} / {totalPages} ページ）
          </span>
        )}
      </p>

      {/* テーブル */}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-[var(--color-temple)] text-white">
            <tr>
              <th className="px-3 py-2 font-medium">寺院名</th>
              <th className="px-3 py-2 font-medium">宗派</th>
              <th className="px-3 py-2 font-medium">都道府県</th>
              <th className="hidden px-3 py-2 font-medium md:table-cell">
                住所
              </th>
              <th className="hidden px-3 py-2 font-medium lg:table-cell">
                本尊
              </th>
              <th className="hidden px-3 py-2 font-medium sm:table-cell">
                電話番号
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {paginated.map((t, i) => (
              <tr
                key={`${t.id}-${i}`}
                className="hover:bg-[var(--color-temple-light)] transition-colors"
              >
                <td className="px-3 py-2 font-medium text-gray-900">
                  {t.name}
                </td>
                <td className="px-3 py-2 text-gray-600">{t.sect}</td>
                <td className="px-3 py-2 text-gray-600">{t.prefecture}</td>
                <td className="hidden px-3 py-2 text-gray-600 md:table-cell">
                  {t.address}
                </td>
                <td className="hidden px-3 py-2 text-gray-600 lg:table-cell">
                  {t.mainDeity || "—"}
                </td>
                <td className="hidden px-3 py-2 text-gray-600 sm:table-cell">
                  {t.phone || "—"}
                </td>
              </tr>
            ))}
            {paginated.length === 0 && (
              <tr>
                <td colSpan={6} className="px-3 py-8 text-center text-gray-400">
                  条件に一致する寺院が見つかりませんでした
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ページネーション */}
      {totalPages > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="rounded-md border border-gray-300 px-3 py-1.5 text-sm disabled:opacity-40"
          >
            前へ
          </button>
          {page > 3 && (
            <>
              <button
                onClick={() => setPage(1)}
                className="rounded-md border border-gray-300 px-3 py-1.5 text-sm"
              >
                1
              </button>
              {page > 4 && <span className="text-gray-400">...</span>}
            </>
          )}
          {Array.from({ length: 5 }, (_, i) => page - 2 + i)
            .filter((p) => p >= 1 && p <= totalPages)
            .map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`rounded-md border px-3 py-1.5 text-sm ${
                  p === page
                    ? "border-[var(--color-temple)] bg-[var(--color-temple)] text-white"
                    : "border-gray-300"
                }`}
              >
                {p}
              </button>
            ))}
          {page < totalPages - 2 && (
            <>
              {page < totalPages - 3 && (
                <span className="text-gray-400">...</span>
              )}
              <button
                onClick={() => setPage(totalPages)}
                className="rounded-md border border-gray-300 px-3 py-1.5 text-sm"
              >
                {totalPages}
              </button>
            </>
          )}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="rounded-md border border-gray-300 px-3 py-1.5 text-sm disabled:opacity-40"
          >
            次へ
          </button>
        </div>
      )}
    </div>
  );
}
