import Link from "next/link";
import Image from "next/image";
import { getFeaturedShrines } from "@/lib/shrines";
import { getCategories } from "@/lib/github-articles";
import { getStats } from "@/lib/github-articles";
import { JsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";
import Tag from "@/components/ui/Tag";

const shrineNameEn: Record<string, string> = {
  "fushimi-inari": "Fushimi Inari Taisha",
  kiyomizudera: "Kiyomizu-dera",
  "meiji-jingu": "Meiji Jingu",
  "itsukushima-jinja": "Itsukushima Shrine",
  "izumo-taisha": "Izumo Taisha",
  sensoji: "Senso-ji",
  "senso-ji": "Senso-ji",
  todaiji: "Todai-ji",
  "todai-ji": "Todai-ji",
  kinkakuji: "Kinkaku-ji",
  "kinkaku-ji": "Kinkaku-ji",
  "ise-jingu": "Ise Jingu",
  "kotohira-gu": "Kotohira-gu",
  "tsurugaoka-hachimangu": "Tsurugaoka Hachimangu",
  "dazaifu-tenmangu": "Dazaifu Tenmangu",
  "zuigan-ji": "Zuigan-ji",
  "zenko-ji": "Zenko-ji",
  "hokkaido-jingu": "Hokkaido Jingu",
};

const shrineImages: Record<string, string> = {
  "fushimi-inari":
    "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=640&q=80",
  kiyomizudera:
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=640&q=80",
  "meiji-jingu":
    "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=640&q=80",
};

const defaultImage =
  "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=640&q=80";

export default function EnglishHomePage() {
  const shrines = getFeaturedShrines().slice(0, 6);
  const stats = getStats();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: `${SITE_NAME} - Japanese Shrines & Temples`,
          url: `${SITE_URL}/en`,
          description:
            "Comprehensive guide to shrines and temples across Japan",
          inLanguage: "en",
        }}
      />

      {/* Hero */}
      <section className="relative h-[420px] sm:h-[500px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1600&q=80"
          alt="Japanese shrine gate"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <p className="mb-3 text-sm font-medium tracking-[0.3em] uppercase opacity-70">
            Shrine &amp; Temple Guide
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight drop-shadow-lg">
            Discover Japan&apos;s Sacred Places
          </h1>
          <p className="mt-4 max-w-lg text-lg sm:text-xl opacity-90 leading-relaxed">
            Explore {shrines.length}+ famous shrines &amp; temples with {stats.published}+ good fortune articles
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/en/shrines"
              className="rounded-full bg-white/95 backdrop-blur-sm px-8 py-3.5 text-sm font-bold text-[var(--color-shrine)] shadow-lg transition-all hover:bg-white hover:shadow-xl hover:scale-105"
            >
              Explore Shrines &amp; Temples
            </Link>
            <Link
              href="/en/guide"
              className="rounded-full border-2 border-white/80 backdrop-blur-sm px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-white/20 hover:scale-105"
            >
              Good Fortune Guide
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-10 space-y-16">
        {/* Language Switch */}
        <div className="flex justify-center">
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-[var(--color-gold)] transition-colors"
          >
            🇯🇵 日本語版はこちら
          </Link>
        </div>

        {/* Featured Shrines */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
            Featured Shrines &amp; Temples
          </h2>
          <p className="text-center text-gray-500 text-sm mb-8">
            Must-visit sacred places in Japan
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {shrines.map((shrine) => (
              <Link
                key={shrine.slug}
                href={`/en/shrines/${shrine.slug}`}
                className="group block overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={shrineImages[shrine.slug] || defaultImage}
                    alt={shrineNameEn[shrine.slug] || shrine.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <Tag
                      label={shrine.type === "shrine" ? "Shrine" : "Temple"}
                      variant={shrine.type === "shrine" ? "shrine" : "temple"}
                    />
                  </div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-xl font-bold text-white drop-shadow-lg">
                      {shrineNameEn[shrine.slug] || shrine.name}
                    </h3>
                    <p className="text-xs text-white/80 mt-0.5">
                      {shrine.prefecture}
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-1">
                    {shrine.tags.slice(0, 3).map((tag) => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </div>
                  <p className="mt-2 text-sm font-medium text-[var(--color-shrine)] group-hover:underline">
                    Learn more →
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/en/shrines"
              className="text-sm font-medium text-[var(--color-shrine)] hover:underline"
            >
              View all shrines &amp; temples →
            </Link>
          </div>
        </section>

        {/* Temple Database Banner */}
        <section className="relative overflow-hidden rounded-2xl">
          <div className="relative h-48 sm:h-56">
            <Image
              src="https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?w=1200&q=80"
              alt="Japanese temple"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-temple)]/80 to-[var(--color-temple)]/40" />
            <div className="relative z-10 flex h-full items-center px-8 sm:px-12">
              <div className="text-white">
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Temple Database
                </h2>
                <p className="mt-2 text-sm sm:text-base opacity-90">
                  Search 73,000+ temples across Japan
                </p>
                <Link
                  href="/en/temples"
                  className="mt-4 inline-block rounded-full bg-white px-6 py-2.5 text-sm font-bold text-[var(--color-temple)] shadow-md hover:shadow-lg transition-all hover:scale-105"
                >
                  Search Temples →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Good Fortune Guide */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
            Good Fortune Guide
          </h2>
          <p className="text-center text-gray-500 text-sm mb-8">
            {stats.published}+ articles on feng shui, lucky charms, shrine etiquette &amp; more
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { emoji: "🏠", title: "Feng Shui & Interior", desc: "Boost your luck with room layout" },
              { emoji: "💰", title: "Financial Fortune", desc: "Money-attracting habits & tips" },
              { emoji: "⛩️", title: "Shrine Etiquette", desc: "Proper worship & visit manners" },
              { emoji: "💕", title: "Love & Romance", desc: "Tips for attracting love luck" },
              { emoji: "🌿", title: "Health Fortune", desc: "Wellness & fortune for your body" },
              { emoji: "🗺️", title: "Power Spots", desc: "Japan's spiritual travel guide" },
              { emoji: "🍱", title: "Lucky Foods", desc: "Eating your way to good fortune" },
              { emoji: "🔮", title: "Divination", desc: "Fortune telling & horoscopes" },
            ].map((cat) => (
              <Link
                key={cat.title}
                href="/en/guide"
                className="group flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm hover:shadow-md transition-all"
              >
                <span className="text-2xl">{cat.emoji}</span>
                <div>
                  <h3 className="font-bold text-gray-800 group-hover:text-[var(--color-gold)] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-gray-500">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/en/guide"
              className="text-sm font-medium text-[var(--color-gold)] hover:underline"
            >
              View all articles →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
