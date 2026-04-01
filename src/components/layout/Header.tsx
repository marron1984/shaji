"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";

const jaNavItems = [
  { label: "神社・お寺", href: "/jinja" },
  { label: "古事記", href: "/kojiki" },
  { label: "仏様辞典", href: "/butsu-jiten" },
  { label: "上座部仏教", href: "/theravada" },
  { label: "MBTI診断", href: "/butsu-mbti" },
  { label: "お遍路", href: "/ohenro" },
  { label: "開運ガイド", href: "/kaiun-guide" },
  { label: "参拝マナー", href: "/sanpai-manner" },
  { label: "霊場めぐり", href: "/reijo" },
  { label: "寺院検索", href: "/temples" },
];

const enNavItems = [
  { label: "Shrines & Temples", href: "/en/shrines" },
  { label: "Kojiki Myths", href: "/en/kojiki" },
  { label: "Buddha Dictionary", href: "/en/butsu-jiten" },
  { label: "Theravada", href: "/en/theravada" },
  { label: "MBTI Quiz", href: "/en/butsu-mbti" },
  { label: "Ohenro", href: "/en/ohenro" },
  { label: "Fortune Guide", href: "/en/guide" },
  { label: "Etiquette", href: "/en/sanpai-manner" },
  { label: "Sacred Sites", href: "/en/reijo" },
  { label: "Temple Search", href: "/en/temples" },
];

// JP path → EN path mapping
const jaToEn: Record<string, string> = {
  "/": "/en",
  "/jinja": "/en/shrines",
  "/kojiki": "/en/kojiki",
  "/butsu-jiten": "/en/butsu-jiten",
  "/theravada": "/en/theravada",
  "/butsu-mbti": "/en/butsu-mbti",
  "/ohenro": "/en/ohenro",
  "/kaiun-guide": "/en/guide",
  "/sanpai-manner": "/en/sanpai-manner",
  "/reijo": "/en/reijo",
  "/temples": "/en/temples",
  "/about": "/en/about",
  "/saigoku": "/en/saigoku",
  "/bando": "/en/bando",
  "/chichibu": "/en/chichibu",
};

function getLanguageSwitchHref(pathname: string): { href: string; isEn: boolean } {
  // Currently on EN page
  if (pathname.startsWith("/en")) {
    const enPath = pathname;
    // Try to find matching JA path
    for (const [ja, en] of Object.entries(jaToEn)) {
      if (enPath === en || enPath.startsWith(en + "/")) {
        const suffix = enPath.slice(en.length);
        // Special case: /en/shrines → /jinja, /en/guide → /kaiun-guide
        return { href: ja + suffix, isEn: true };
      }
    }
    return { href: "/", isEn: true };
  }

  // Currently on JP page
  for (const [ja, en] of Object.entries(jaToEn)) {
    if (pathname === ja || pathname.startsWith(ja + "/")) {
      const suffix = pathname.slice(ja.length);
      return { href: en + suffix, isEn: false };
    }
  }
  return { href: "/en", isEn: false };
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  const { href: langHref, isEn } = getLanguageSwitchHref(pathname);
  const navItems = isEn ? enNavItems : jaNavItems;
  const primaryNav = navItems.slice(0, 5);
  const moreNav = navItems.slice(5);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 glass">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 h-16">
        <Link href={isEn ? "/en" : "/"} className="flex items-center gap-2">
          <span className="text-xl font-bold text-gradient">
            {isEn ? "Shaji Guide" : "社寺まとめ"}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-[var(--color-muted)] rounded-lg transition-all hover:text-[var(--color-foreground)] hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}

          {/* More dropdown */}
          <div ref={moreRef} className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="px-3 py-2 text-sm font-medium text-[var(--color-muted)] rounded-lg transition-all hover:text-[var(--color-foreground)] hover:bg-white/5 flex items-center gap-1"
            >
              {isEn ? "More" : "その他"}
              <svg
                className={`w-3.5 h-3.5 transition-transform ${moreOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-[var(--color-border)] glass shadow-xl py-2">
                {moreNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMoreOpen(false)}
                    className="block px-4 py-2.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-white/5 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Language Toggle */}
          <Link
            href={langHref}
            className="ml-1 px-3 py-1.5 text-sm font-medium rounded-full border border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:border-[var(--color-gold)]/40 transition-all flex items-center gap-1.5"
          >
            {isEn ? "🇯🇵 JA" : "🇬🇧 EN"}
          </Link>

          <ThemeSwitcher />
        </nav>

        {/* Mobile: lang + theme + hamburger */}
        <div className="flex items-center gap-1 lg:hidden">
          <Link
            href={langHref}
            className="px-2.5 py-1.5 text-xs font-medium rounded-full border border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-all"
          >
            {isEn ? "🇯🇵" : "🇬🇧"}
          </Link>
          <ThemeSwitcher />
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-white/5 transition-colors"
            aria-label={isEn ? "Menu" : "メニュー"}
          >
            <span
              className={`block w-5 h-0.5 bg-[var(--color-foreground)] transition-all duration-300 ${open ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-[var(--color-foreground)] mt-1 transition-all duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-[var(--color-foreground)] mt-1 transition-all duration-300 ${open ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden border-t border-[var(--color-border)] glass">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-6 py-4 text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-white/5 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
