"use client";
import Link from "next/link";
import { useState } from "react";

const sections = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-black/10 dark:border-white/10">
      <nav className="mx-auto max-w-5xl flex items-center justify-between px-4 py-3">
        <Link href="#home" className="font-semibold tracking-tight">
          Vamsi • Portfolio
        </Link>
        <button
          aria-label="Toggle menu"
          className="sm:hidden inline-flex items-center justify-center rounded-md border border-black/10 dark:border-white/10 px-3 py-1 text-sm"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
        <ul className="hidden sm:flex gap-6 text-sm">
          {sections.map((s) => (
            <li key={s.href}>
              <a href={s.href} className="hover:underline underline-offset-4">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <ul className="sm:hidden grid gap-2 px-4 pb-4 text-sm">
          {sections.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                className="block w-full rounded-md px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}


