import Link from "next/link";
import HeroSection from "@/components/home/HeroSection";
import RegionNav from "@/components/home/RegionNav";
import FeaturedShrines from "@/components/home/FeaturedShrines";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import { regions } from "@/data/regions";
import { getFeaturedShrines } from "@/lib/shrines";
import { getAllLoadedArticles } from "@/lib/article-loader";

export default function HomePage() {
  const featuredShrines = getFeaturedShrines();
  const articles = getAllLoadedArticles().slice(0, 3);

  return (
    <>
      <HeroSection />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        <RegionNav regions={regions} />
        <FeaturedShrines shrines={featuredShrines} />

        {/* 開運ガイド最新記事 */}
        {articles.length > 0 && (
          <section>
            <SectionHeading>開運ガイド 最新記事</SectionHeading>
            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/kaiun-guide/${article.slug}`}
                  className="block"
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <div className="h-2 bg-[var(--color-gold)]" />
                    <div className="p-4">
                      <Tag label="開運ガイド" variant="gold" />
                      <h3 className="mt-2 font-bold text-gray-800">
                        {article.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                        {article.sections[0]?.body.slice(0, 80)}...
                      </p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
