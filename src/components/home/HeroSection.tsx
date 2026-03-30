import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[480px] sm:h-[560px] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1600&q=80"
        alt="日本の神社"
        fill
        className="object-cover brightness-[0.6]"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[var(--color-background)]" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <p className="mb-4 text-xs font-semibold tracking-[0.4em] uppercase text-[var(--color-gold)] drop-shadow-md">
          Shrine &amp; Temple Guide
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
          <span className="text-gradient">社寺</span>まとめ
        </h1>
        <p className="mt-5 max-w-md text-base sm:text-lg text-white/80 leading-relaxed drop-shadow">
          日本全国の神社・お寺ガイドと
          <br className="sm:hidden" />
          開運情報
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/jinja"
            className="group relative rounded-full px-8 py-3.5 text-sm font-bold overflow-hidden shadow-lg"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-shrine)] to-[var(--color-gold)] opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="relative text-white drop-shadow">神社・お寺を探す</span>
          </Link>
          <Link
            href="/kaiun-guide"
            className="rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/15 hover:border-white/50 shadow-lg"
          >
            開運ガイド
          </Link>
        </div>
      </div>
    </section>
  );
}
