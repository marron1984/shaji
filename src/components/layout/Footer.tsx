import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-background)]">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-gradient">社寺まとめ</p>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              日本全国の神社・お寺ガイドと
              <br />
              開運情報のまとめサイト
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)] mb-3">
              コンテンツ
            </p>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/jinja", label: "神社・お寺一覧" },
                { href: "/kojiki", label: "古事記の神話" },
                { href: "/kaiun-guide", label: "開運ガイド" },
                { href: "/sanpai-manner", label: "参拝マナーガイド" },
                { href: "/reijo", label: "霊場めぐり" },
                { href: "/temples", label: "寺院データベース" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)] mb-3">
              その他
            </p>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/about", label: "このサイトについて" },
                { href: "/en", label: "English" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-[var(--color-border)]">
          <p className="text-xs text-[var(--color-muted)]">
            &copy; 2026 社寺まとめ All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
