"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import type { Temple } from "@/types/temple";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";

export default function TempleDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const [temple, setTemple] = useState<Temple | null>(null);
  const [loading, setLoading] = useState(true);
  const [nearby, setNearby] = useState<Temple[]>([]);

  useEffect(() => {
    fetch("/data/temples.json")
      .then((res) => res.json())
      .then((data: Temple[]) => {
        const found = data.find((t) => t.id === id);
        setTemple(found || null);
        if (found) {
          // 同じ都道府県の寺院を最大5件表示
          setNearby(
            data
              .filter(
                (t) => t.prefecture === found.prefecture && t.id !== found.id
              )
              .slice(0, 5)
          );
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-center py-20">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-[var(--color-temple)] border-t-transparent" />
        </div>
      </div>
    );
  }

  if (!temple) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "ホーム", href: "/" },
            { label: "寺院データベース", href: "/temples" },
            { label: "見つかりません" },
          ]}
        />
        <p className="py-20 text-center text-gray-400">
          該当する寺院が見つかりませんでした。
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "寺院データベース", href: "/temples" },
          { label: temple.name },
        ]}
      />

      {/* ヘッダー */}
      <div className="mt-6">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-3xl font-bold text-gray-900">{temple.name}</h1>
          <Tag label="お寺" variant="temple" />
        </div>
        {temple.sect && (
          <p className="mt-2 text-lg text-[var(--color-temple)] font-medium">
            {temple.sect}
          </p>
        )}
      </div>

      {/* 基本情報 */}
      <Card className="mt-6">
        <div className="p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4 border-l-4 border-[var(--color-temple)] pl-3">
            基本情報
          </h2>
          <dl className="grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-gray-500">所在地</dt>
              <dd className="mt-1 text-gray-900">
                {temple.prefecture}
                {temple.address && (
                  <span className="block text-sm text-gray-600">
                    {temple.address}
                  </span>
                )}
              </dd>
            </div>
            {temple.zip && (
              <div>
                <dt className="text-sm font-medium text-gray-500">
                  郵便番号
                </dt>
                <dd className="mt-1 text-gray-900">〒{temple.zip}</dd>
              </div>
            )}
            {temple.phone && (
              <div>
                <dt className="text-sm font-medium text-gray-500">
                  電話番号
                </dt>
                <dd className="mt-1 text-gray-900">{temple.phone}</dd>
              </div>
            )}
            {temple.sect && (
              <div>
                <dt className="text-sm font-medium text-gray-500">宗派</dt>
                <dd className="mt-1 text-gray-900">{temple.sect}</dd>
              </div>
            )}
            {temple.mainDeity && (
              <div>
                <dt className="text-sm font-medium text-gray-500">本尊</dt>
                <dd className="mt-1 text-gray-900">{temple.mainDeity}</dd>
              </div>
            )}
            {temple.url && (
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">
                  ウェブサイト
                </dt>
                <dd className="mt-1">
                  <a
                    href={
                      temple.url.startsWith("http")
                        ? temple.url
                        : `http://${temple.url}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-temple)] hover:underline break-all"
                  >
                    {temple.url}
                  </a>
                </dd>
              </div>
            )}
          </dl>
        </div>
      </Card>

      {/* 地図リンク */}
      {temple.address && (
        <Card className="mt-4">
          <div className="p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3 border-l-4 border-[var(--color-temple)] pl-3">
              アクセス
            </h2>
            <p className="text-gray-700 mb-3">
              {temple.prefecture}
              {temple.address}
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(temple.name + " " + temple.prefecture + temple.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg bg-[var(--color-temple)] px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity"
            >
              Google Mapsで開く
            </a>
          </div>
        </Card>
      )}

      {/* 近隣の寺院 */}
      {nearby.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-bold text-gray-800 mb-4 border-l-4 border-[var(--color-gold)] pl-3">
            {temple.prefecture}の他の寺院
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {nearby.map((t) => (
              <Link key={t.id} href={`/temples/${t.id}`}>
                <Card className="hover:shadow-md transition-shadow">
                  <div className="p-4">
                    <p className="font-bold text-gray-800">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.sect}</p>
                    {t.mainDeity && (
                      <p className="text-xs text-gray-400 mt-1">
                        本尊: {t.mainDeity}
                      </p>
                    )}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          <Link
            href={`/temples?pref=${encodeURIComponent(temple.prefecture)}`}
            className="mt-3 inline-block text-sm text-[var(--color-temple)] hover:underline"
          >
            {temple.prefecture}の寺院をすべて見る &rarr;
          </Link>
        </div>
      )}
    </div>
  );
}
