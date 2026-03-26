import Link from "next/link";

const footerLinks = [
  { href: "/", label: "ホーム" },
  { href: "/jinja", label: "神社・お寺一覧" },
  { href: "/kaiun-guide", label: "開運ガイド" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-lg font-bold">社寺まとめ</p>
        <nav className="mt-4 flex flex-wrap gap-4">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-300 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="mt-6 text-xs text-gray-400">
          &copy; 2026 社寺まとめ All rights reserved.
        </p>
      </div>
    </footer>
  );
}
