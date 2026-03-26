import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-[var(--color-shrine)] to-[var(--color-temple)] px-4 py-20 text-center text-white">
      <h1 className="text-4xl font-bold md:text-5xl">社寺まとめ</h1>
      <p className="mt-4 text-lg md:text-xl">
        日本全国の神社・お寺ガイドと開運情報
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/jinja"
          className="rounded-full bg-white px-6 py-3 text-sm font-bold text-[var(--color-shrine)] transition-opacity hover:opacity-90"
        >
          神社・お寺を探す
        </Link>
        <Link
          href="/kaiun-guide"
          className="rounded-full border-2 border-white px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
        >
          開運ガイド
        </Link>
      </div>
    </section>
  );
}
