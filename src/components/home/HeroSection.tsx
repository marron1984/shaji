import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[480px] sm:h-[560px] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1600&q=80"
        alt="日本の神社"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[var(--color-background)]" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <p className="mb-4 text-xs font-semibold tracking-[0.4em] uppercase text-[var(--color-gold)]">
          Shrine &amp; Temple Guide
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
          <span className="text-gradient">社寺</span>まとめ
        </h1>
        <p className="mt-5 max-w-md text-base sm:text-lg text-white/70 leading-relaxed">
          日本全国の神社・お寺ガイドと
          <br className="sm:hidden" />
          開運情報
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/jinja"
            className="group relative rounded-full px-8 py-3.5 text-sm font-bold overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-shrine)] to-[var(--color-gold)] opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="relative text-white">神社・お寺を探す</span>
          </Link>
          <Link
            href="/kaiun-guide"
            className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-bold text-white/80 backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white hover:border-white/40"
          >
            開運ガイド
          </Link>
        </div>
      </div>
    </section>
  );
}
