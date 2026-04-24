"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-xs tracking-widest hover:opacity-100 cursor-target"
        >
          DECANT
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/about"
            className={`text-xs tracking-widest hover:opacity-100 cursor-target ${
              pathname === "/about" ? "" : "opacity-60"
            }`}
          >
            ABOUT
          </Link>
          <Link
            href="/collections"
            className={`text-xs tracking-widest hover:opacity-100 cursor-target ${
              pathname === "/collections" ? "" : "opacity-60"
            }`}
          >
            COLLECTIONS
          </Link>
          <Link
            href="/archive"
            className={`text-xs tracking-widest hover:opacity-100 cursor-target ${
              pathname === "/archive" || pathname.startsWith("/archive/") ? "" : "opacity-60"
            }`}
          >
            ENTER
          </Link>
        </div>
      </div>
    </nav>
  );
}
