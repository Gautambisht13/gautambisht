"use client";

import { useEffect, useState } from "react";
import { Menu, X, Rocket } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav
        aria-label="Main"
        className="mx-auto max-w-6xl border-4 border-black bg-white shadow-brutal"
      >
        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
          <a
            href="#top"
            className="group flex items-center gap-3"
            aria-label={`${profile.name} — back to top`}
          >
            <span className="press flex h-9 w-9 shrink-0 items-center justify-center border-2 border-black bg-brand text-white shadow-brutal-xs group-hover:rotate-[-8deg]">
              <Rocket className="h-4.5 w-4.5" strokeWidth={2.5} />
            </span>
            <span className="font-display text-lg font-bold tracking-tight sm:text-xl">
              {profile.name}
            </span>
          </a>

          {/* desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="press block border-2 border-transparent px-3 py-2 font-mono text-xs font-bold tracking-[0.12em] uppercase hover:border-black hover:bg-wash"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="press hidden border-2 border-black bg-brand px-4 py-2.5 font-mono text-xs font-bold tracking-[0.12em] whitespace-nowrap text-white uppercase shadow-brutal-sm hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none sm:block"
            >
              Let&apos;s Talk
            </a>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="press flex h-10 w-10 items-center justify-center border-2 border-black bg-white shadow-brutal-xs hover:bg-wash active:translate-x-[2px] active:translate-y-[2px] active:shadow-none md:hidden"
            >
              {open ? (
                <X className="h-5 w-5" strokeWidth={2.5} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={2.5} />
              )}
            </button>
          </div>
        </div>

        {/* mobile panel */}
        <div
          id="mobile-menu"
          hidden={!open}
          className="border-t-4 border-black md:hidden"
        >
          <ul className="divide-y-2 divide-black">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-5 py-3.5 font-mono text-sm font-bold tracking-[0.12em] uppercase hover:bg-wash"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block bg-brand px-5 py-3.5 font-mono text-sm font-bold tracking-[0.12em] text-white uppercase"
              >
                Let&apos;s Talk →
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
