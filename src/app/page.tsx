import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import RegionNav from "@/components/home/RegionNav";
import FeaturedShrines from "@/components/home/FeaturedShrines";
import SectionHeading from "@/components/ui/SectionHeading";
import { regions } from "@/data/regions";
import { getFeaturedShrines } from "@/lib/shrines";
import { getAllArticlesFlat } from "@/lib/github-articles";
import { getCategoryMeta } from "@/data/category-meta";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";

export default function HomePage() {
  const featuredShrines = getFeaturedShrines();
  const articles = getAllArticlesFlat().slice(0, 6);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
          description:
            "日本全国の有名神社・お寺情報と開運縁起物ガイドのまとめサイト",
          publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
          potentialAction: {
            "@type": "SearchAction",
            target: `${SITE_URL}/temples?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        }}
      />
      <HeroSection />

      <div className="max-w-6xl mx-auto px-4 py-10 space-y-20">
        {/* 地域ナビ */}
        <RegionNav regions={regions} />

        {/* 注目の神社・お寺 */}
        <FeaturedShrines shrines={featuredShrines} />

        {/* 開運ガイド */}
        {articles.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-8">
              <SectionHeading>開運ガイド 最新記事</SectionHeading>
              <Link
                href="/kaiun-guide"
                className="text-sm font-medium text-[var(--color-gold)] hover:underline"
              >
                すべて見る →
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => {
                const meta = getCategoryMeta(article.categoryId);
                return (
                  <Link
                    key={`${article.category}-${article.slug}`}
                    href={`/kaiun-guide/${article.categoryId}/${article.slug}`}
                    className="group block overflow-hidden rounded-2xl bg-[var(--color-background-card)] border border-[var(--color-border)] hover:border-[var(--color-gold)]/30 transition-all hover:glow-gold"
                  >
                    <div className="relative h-36 overflow-hidden">
                      <Image
                        src={meta.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background-card)] via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 text-xs font-medium glass rounded-full px-2.5 py-1 text-white/80">
                        {meta.emoji} {article.categoryName}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-[var(--color-foreground)] line-clamp-2 group-hover:text-[var(--color-gold)] transition-colors">
                        {article.title}
                      </h3>
                      <p className="mt-2 text-sm text-[var(--color-muted)] line-clamp-2">
                        {article.excerpt}
                      </p>
                      <p className="mt-3 text-sm font-medium text-[var(--color-gold)]">
                        記事を読む →
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* 寺院検索セクション */}
        <section className="relative overflow-hidden rounded-2xl border border-[var(--color-border)]">
          <div className="relative h-52 sm:h-60">
            <Image
              src="https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?w=1200&q=80"
              alt="日本の寺院"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30" />
            <div className="relative z-10 flex h-full items-center px-8 sm:px-12">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  全国の寺院を検索
                </h2>
                <p className="mt-2 text-sm sm:text-base text-white/60">
                  73,000件以上の寺院データベースから検索できます
                </p>
                <Link
                  href="/temples"
                  className="mt-5 inline-block group relative rounded-full px-6 py-2.5 text-sm font-bold overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-temple)] to-[var(--color-shrine)] opacity-90 group-hover:opacity-100 transition-opacity" />
                  <span className="relative text-white">
                    寺院を検索する →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
