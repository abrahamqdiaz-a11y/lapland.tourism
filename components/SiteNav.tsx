"use client";

import Link from "next/link";
import { Snowflake, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/destinations", label: "Destinations" },
  { href: "/activities", label: "Experiences" },
  { href: "/when-to-go", label: "When to go" },
  { href: "/blog", label: "The Guide" },
  { href: "/about", label: "About" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-4"
      style={{
        background: "rgba(6,15,26,0.88)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(201,214,223,0.07)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2.5 font-display text-xl font-semibold transition-opacity hover:opacity-80"
        style={{ color: "var(--frost)" }}
      >
        <Snowflake size={18} style={{ color: "var(--aurora)" }} />
        Lapland Guide
      </Link>

      {/* Desktop nav links */}
      <div className="hidden md:flex items-center gap-7">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm transition-all duration-200 hover:text-[var(--frost)]"
            style={{ color: "var(--muted)", fontFamily: "var(--font-inter)" }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="hidden md:flex">
        <Link
          href="/plan-your-trip"
          className="inline-flex items-center gap-2 rounded-full border border-[rgba(84,224,166,0.38)] bg-[rgba(84,224,166,0.1)] px-5 py-2.5 text-sm font-semibold tracking-[0.03em] text-[var(--aurora)] transition duration-200 hover:bg-[rgba(84,224,166,0.18)] hover:border-[rgba(84,224,166,0.56)]"
        >
          Plan your trip
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden transition-colors"
        style={{ color: "var(--frost)" }}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile fullscreen menu */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ background: "rgba(6,15,26,0.97)", backdropFilter: "blur(20px)" }}
        >
          <button
            className="absolute top-5 right-6 transition-colors hover:text-[var(--aurora)]"
            style={{ color: "var(--frost)" }}
            onClick={() => setOpen(false)}
          >
            <X size={28} />
          </button>

          {/* Logo in mobile menu */}
          <div className="absolute top-5 left-6 flex items-center gap-2 font-display text-xl font-semibold" style={{ color: "var(--frost)" }}>
            <Snowflake size={18} style={{ color: "var(--aurora)" }} />
            Lapland Guide
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-4xl italic transition-colors hover:text-[var(--aurora)]"
              style={{ color: "var(--frost)" }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/plan-your-trip"
            className="btn-primary mt-4 text-base"
            onClick={() => setOpen(false)}
          >
            Plan your trip
          </Link>
        </div>
      )}
    </nav>
  );
}
