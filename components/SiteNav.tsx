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
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(11,37,64,0.08)",
      }}
    >
      <Link
        href="/"
        className="flex items-center gap-2 font-display text-xl font-semibold"
        style={{ color: "#0b2540" }}
      >
        <Snowflake size={20} style={{ color: "#0b2540" }} />
        Lapland Guide
      </Link>

      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm transition-colors"
            style={{ color: "#4a6478", fontFamily: "var(--font-inter)" }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "#0b2540")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "#4a6478")
            }
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="hidden md:flex">
        <Link
          href="/plan-your-trip"
          className="inline-flex items-center rounded-full border border-[rgba(77,255,160,0.72)] bg-white px-5 py-2 text-sm font-semibold text-[#0b2540] shadow-[0_0_18px_rgba(77,255,160,0.16)] transition hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(77,255,160,0.26)]"
        >
          Get free guide
        </Link>
      </div>

      <button
        className="md:hidden"
        style={{ color: "#0b2540" }}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ background: "rgba(255,255,255,0.98)" }}
        >
          <button
            className="absolute top-5 right-6"
            style={{ color: "#0b2540" }}
            onClick={() => setOpen(false)}
          >
            <X size={28} />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-3xl italic"
              style={{ color: "#0b2540" }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/plan-your-trip"
            className="mt-4 inline-flex items-center rounded-full border border-[rgba(77,255,160,0.72)] bg-white px-7 py-4 font-semibold text-[#0b2540] shadow-[0_0_18px_rgba(77,255,160,0.16)] transition hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(77,255,160,0.26)]"
            onClick={() => setOpen(false)}
          >
            Get free guide
          </Link>
        </div>
      )}
    </nav>
  );
}
