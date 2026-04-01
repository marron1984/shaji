"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";

const navItems = [
  { label: "Shrines & Temples", href: "/jinja" },
  { label: "Kojiki Myths", href: "/kojiki" },
  { label: "Buddha Dictionary", href: "/butsu-jiten" },
  { label: "Theravada", href: "/theravada" },
  { label: "MBTI Quiz", href: "/butsu-mbti" },
  { label: "Ohenro Pilgrimage", href: "/ohenro" },
  { label: "Fortune Guide", href: "/kaiun-guide" },
  { label: "Worship Etiquette", href: "/sanpai-manner" },
  { label: "Sacred Sites", href: "/reijo" },
  { label: "Temple Search", href: "/temples" },
];

const primaryNav = navItems.slice(0, 5);
const moreNav = navItems.slice(5);

export default function Header() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 glass">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-gradient">社寺まとめ</span>
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
              More
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
              <div className="absolute right-0 top-full mt-2 w-52 rounded-xl border border-[var(--color-border)] glass shadow-xl py-2">
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

          <ThemeSwitcher />
        </nav>

        {/* Mobile: theme + hamburger */}
        <div className="flex items-center gap-1 lg:hidden">
          <ThemeSwitcher />
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Menu"
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
              onClick={() => setOpen(false)}
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
