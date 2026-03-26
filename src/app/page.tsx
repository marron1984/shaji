import HeroSection from "@/components/home/HeroSection";
import RegionNav from "@/components/home/RegionNav";
import FeaturedShrines from "@/components/home/FeaturedShrines";
import LatestArticles from "@/components/home/LatestArticles";
import { regions } from "@/data/regions";
import { getFeaturedShrines } from "@/lib/shrines";
import { getLatestArticles } from "@/lib/articles";

export default function HomePage() {
  const featuredShrines = getFeaturedShrines();
  const latestArticles = getLatestArticles(3);

  return (
    <>
      <HeroSection />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        <RegionNav regions={regions} />
        <FeaturedShrines shrines={featuredShrines} />
        <LatestArticles articles={latestArticles} />
      </div>
    </>
  );
}
