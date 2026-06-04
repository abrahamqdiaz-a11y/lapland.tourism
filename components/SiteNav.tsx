"use client";

import Link from "next/link";
import { Snowflake, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/destinations", label: "Destinations" },
  { href: "/activities", label: "Activities" },
  { href: "/when-to-go", label: "When to go" },
  { href: "/blog", label: "Guide" },
  { href: "/about", label: "About" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-4"
      style={{
        background: "rgba(10,15,30,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(168,216,234,0.08)",
      }}
    >
      <Link
        href="/"
        className="flex items-center gap-2 font-display text-xl font-semibold"
        style={{ color: "var(--frost)" }}
      >
        <Snowflake size={20} style={{ color: "var(--ice)" }} />
        Lapland Guide
      </Link>

      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm transition-colors"
            style={{ color: "var(--muted)", fontFamily: "var(--font-inter)" }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "var(--frost)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "var(--muted)")
            }
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="hidden md:flex">
        <Link href="/plan-your-trip" className="btn-primary text-sm py-2 px-5">
          Get free guide
        </Link>
      </div>

      <button
        className="md:hidden"
        style={{ color: "var(--frost)" }}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ background: "rgba(10,15,30,0.97)" }}
        >
          <button
            className="absolute top-5 right-6"
            style={{ color: "var(--frost)" }}
            onClick={() => setOpen(false)}
          >
            <X size={28} />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-3xl italic"
              style={{ color: "var(--frost)" }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/plan-your-trip"
            className="btn-primary mt-4"
            onClick={() => setOpen(false)}
          >
            Get free guide
          </Link>
        </div>
      )}
    </nav>
  );
}
