import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[420px] sm:h-[500px] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1600&q=80"
        alt="日本の神社"
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
          社寺まとめ
        </h1>
        <p className="mt-4 max-w-md text-lg sm:text-xl opacity-90 leading-relaxed">
          日本全国の神社・お寺ガイドと
          <br className="sm:hidden" />
          開運情報
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/jinja"
            className="rounded-full bg-white/95 backdrop-blur-sm px-8 py-3.5 text-sm font-bold text-[var(--color-shrine)] shadow-lg transition-all hover:bg-white hover:shadow-xl hover:scale-105"
          >
            神社・お寺を探す
          </Link>
          <Link
            href="/kaiun-guide"
            className="rounded-full border-2 border-white/80 backdrop-blur-sm px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-white/20 hover:scale-105"
          >
            開運ガイド
          </Link>
        </div>
      </div>
    </section>
  );
}
