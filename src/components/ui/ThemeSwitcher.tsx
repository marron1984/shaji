"use client";

import { useState, useEffect, useRef } from "react";

const themes = [
  { id: "dark", label: "ダーク", color: "#0a0a0a", icon: "🌙" },
  { id: "light", label: "ライト", color: "#fafafa", icon: "☀️" },
  { id: "wafuu", label: "和風", color: "#f5f0e8", icon: "🏯" },
  { id: "midnight", label: "ミッドナイト", color: "#0c1222", icon: "🌌" },
  { id: "sakura", label: "桜", color: "#fdf5f6", icon: "🌸" },
  { id: "forest", label: "フォレスト", color: "#0f1a12", icon: "🌲" },
] as const;

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("dark");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setCurrent(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function setTheme(id: string) {
    setCurrent(id);
    document.documentElement.setAttribute("data-theme", id);
    localStorage.setItem("theme", id);
    setOpen(false);
  }

  const currentTheme = themes.find((t) => t.id === current) || themes[0];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-white/5 transition-all"
        aria-label="テーマ切替"
      >
        <span>{currentTheme.icon}</span>
        <span className="hidden sm:inline">{currentTheme.label}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-52 rounded-xl border border-[var(--color-border)] bg-[var(--color-background-card)] p-2 shadow-2xl z-50">
          <p className="px-3 py-1.5 text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider">
            テーマ
          </p>
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => setTheme(theme.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                current === theme.id
                  ? "bg-[var(--color-gold-light)] text-[var(--color-gold)]"
                  : "text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-white/5"
              }`}
            >
              <span
                className="w-5 h-5 rounded-full border-2 shrink-0"
                style={{
                  backgroundColor: theme.color,
                  borderColor:
                    current === theme.id
                      ? "var(--color-gold)"
                      : "var(--color-border)",
                }}
              />
              <span>{theme.icon}</span>
              <span className="font-medium">{theme.label}</span>
              {current === theme.id && (
                <span className="ml-auto text-[var(--color-gold)]">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
