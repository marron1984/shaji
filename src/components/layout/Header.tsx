"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";

const navItems = [
  { label: "神社・お寺", href: "/jinja" },
  { label: "開運ガイド", href: "/kaiun-guide" },
  { label: "参拝マナー", href: "/sanpai-manner" },
  { label: "寺院検索", href: "/temples" },
  { label: "English", href: "/en" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 glass">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-gradient">社寺まとめ</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-[var(--color-muted)] rounded-lg transition-all hover:text-[var(--color-foreground)] hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}
          <ThemeSwitcher />
        </nav>

        {/* Mobile: theme + hamburger */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeSwitcher />
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="メニュー"
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
        <nav className="md:hidden border-t border-[var(--color-border)] glass">
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
