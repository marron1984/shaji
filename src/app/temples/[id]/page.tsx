import type { Metadata } from "next";
import type { Temple } from "@/types/temple";
import { readFileSync } from "fs";
import { join } from "path";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";

interface PageProps {
  params: Promise<{ id: string }>;
}

function loadTemple(id: number): Temple | null {
  try {
    const raw = readFileSync(
      join(process.cwd(), "public/data/temples.json"),
      "utf-8"
    );
    const data: Temple[] = JSON.parse(raw);
    return data.find((t) => t.id === id) || null;
  } catch {
    return null;
  }
}

function loadNearby(temple: Temple): Temple[] {
  try {
    const raw = readFileSync(
      join(process.cwd(), "public/data/temples.json"),
      "utf-8"
    );
    const data: Temple[] = JSON.parse(raw);
    return data
      .filter((t) => t.prefecture === temple.prefecture && t.id !== temple.id)
      .slice(0, 5);
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const temple = loadTemple(Number(id));
  if (!temple) return {};

  const url = `${SITE_URL}/temples/${id}`;
  const title = `${temple.name}（${temple.prefecture}）- 寺院情報`;
  const description = `${temple.name}の基本情報。${temple.sect ? `宗派: ${temple.sect}。` : ""}${temple.mainDeity ? `本尊: ${temple.mainDeity}。` : ""}所在地: ${temple.prefecture}${temple.address}`;

  return {
    title,
    description,
    keywords: [
      temple.name,
      temple.prefecture,
      "寺院",
      temple.sect,
      temple.mainDeity,
    ].filter(Boolean),
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${temple.name} - 寺院情報`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "ja_JP",
    },
  };
}

export default async function TempleDetailPage({ params }: PageProps) {
  const { id } = await params;
  const temple = loadTemple(Number(id));
  if (!temple) notFound();

  const nearby = loadNearby(temple);
  const url = `${SITE_URL}/temples/${id}`;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BuddhistTemple",
          name: temple.name,
          address: {
            "@type": "PostalAddress",
            addressLocality: temple.prefecture,
            postalCode: temple.zip || undefined,
            streetAddress: temple.address || undefined,
            addressCountry: "JP",
          },
          telephone: temple.phone || undefined,
          url: temple.url
            ? temple.url.startsWith("http")
              ? temple.url
              : `http://${temple.url}`
            : undefined,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "ホーム",
              item: SITE_URL,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "寺院データベース",
              item: `${SITE_URL}/temples`,
            },
            { "@type": "ListItem", position: 3, name: temple.name },
          ],
        }}
      />

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
