import Link from "next/link";
import { Snowflake } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer
      className="px-6 py-12"
      style={{
        background: "var(--deep-navy)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-xl font-semibold"
            style={{ color: "var(--frost)" }}
          >
            <Snowflake size={18} style={{ color: "var(--ice)" }} />
            Lapland Guide
          </Link>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { href: "/destinations", label: "Destinations" },
              { href: "/activities", label: "Activities" },
              { href: "/when-to-go", label: "When to go" },
              { href: "/blog", label: "Guide" },
              { href: "/about#how-it-works", label: "How this site works" },
              { href: "/privacy", label: "Privacy" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors hover:opacity-80"
                style={{ color: "var(--muted)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div
          className="mt-8 pt-6 text-sm"
          style={{
            borderTop: "1px solid rgba(201,214,223,0.08)",
            color: "var(--muted)",
          }}
        >
          © {new Date().getFullYear()} Lapland Guide. An independent travel resource.
        </div>
      </div>
    </footer>
  );
}
