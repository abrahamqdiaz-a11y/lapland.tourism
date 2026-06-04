import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { destinations } from "@/data/lapland-data";
import { activities } from "@/data/lapland-data";
import { seasons } from "@/data/lapland-data";
import { blogPosts } from "@/data/lapland-data";
import NewsletterForm from "@/components/NewsletterForm";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[85vh] flex flex-col justify-center px-6 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0A0F1E 0%, #0D1B2A 60%, #0F2235 100%)",
        }}
      >
        <div
          className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top right, rgba(77,255,160,0.06), transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto w-full relative z-10">
          <p className="eyebrow mb-4">Finnish Lapland</p>
          <h1
            className="font-display italic mb-6 leading-tight"
            style={{
              fontSize: "clamp(48px, 8vw, 72px)",
              color: "var(--frost)",
              fontWeight: 500,
            }}
          >
            Your Arctic adventure
            <br />
            starts here
          </h1>
          <p
            className="text-lg mb-8 max-w-xl"
            style={{ color: "var(--muted)", lineHeight: 1.7 }}
          >
            The independent traveller&#39;s guide to Finnish Lapland —
            destinations, activities and trusted local operators.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Link href="/activities" className="btn-primary">
              Explore activities <ArrowRight size={16} />
            </Link>
            <Link href="/destinations" className="btn-secondary">
              Pick a destination
            </Link>
          </div>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            Trusted by 12,000+ travellers from the UK, US &amp; Europe
          </p>
        </div>
      </section>

      {/* Destinations */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="eyebrow mb-3">Destinations</p>
              <h2
                className="font-display"
                style={{ fontSize: "clamp(28px, 4vw, 42px)", color: "var(--frost)", fontWeight: 600 }}
              >
                Where do you want to go?
              </h2>
            </div>
            <Link
              href="/destinations"
              className="hidden sm:flex items-center gap-1 text-sm"
              style={{ color: "var(--ice)" }}
            >
              See all destinations <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {destinations.map((dest) => {
              const Icon = dest.icon;
              return (
                <Link key={dest.slug} href={`/destinations/${dest.slug}`} className="card-glass p-6 block">
                  <div className="mb-4">
                    <Icon size={24} style={{ color: "var(--ice)" }} />
                  </div>
                  <span className="badge-chip mb-3">{dest.badge}</span>
                  <h3
                    className="font-display text-xl font-semibold mb-1"
                    style={{ color: "var(--frost)" }}
                  >
                    {dest.name}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>
                    {dest.tagline}
                  </p>
                  <span className="text-sm font-medium" style={{ color: "var(--ice)" }}>
                    Discover →
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="mt-4 flex sm:hidden">
            <Link href="/destinations" className="flex items-center gap-1 text-sm" style={{ color: "var(--ice)" }}>
              See all destinations <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="px-6 py-20" style={{ borderTop: "1px solid rgba(168,216,234,0.08)" }}>
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow mb-3">Activities</p>
          <h2
            className="font-display mb-10"
            style={{ fontSize: "clamp(28px, 4vw, 42px)", color: "var(--frost)", fontWeight: 600 }}
          >
            What do you want to do?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {activities.map((act) => {
              const Icon = act.icon;
              return (
                <Link
                  key={act.slug}
                  href={`/activities/${act.slug}`}
                  className={`card-glass p-6 block ${act.featured ? "card-featured" : ""}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={22} style={{ color: act.featured ? "var(--aurora)" : "var(--ice)" }} />
                    {act.badge && (
                      <span className={`badge-chip ${act.featured ? "badge-aurora" : ""}`}>
                        {act.badge}
                      </span>
                    )}
                  </div>
                  <h3
                    className="font-display text-xl font-semibold mb-2"
                    style={{ color: "var(--frost)" }}
                  >
                    {act.name}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                    {act.short}
                  </p>
                  <span className="text-sm font-medium" style={{ color: act.featured ? "var(--aurora)" : "var(--ice)" }}>
                    Find operators →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seasons */}
      <section className="px-6 py-20" style={{ borderTop: "1px solid rgba(168,216,234,0.08)" }}>
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow mb-3">When to go</p>
          <h2
            className="font-display mb-10"
            style={{ fontSize: "clamp(28px, 4vw, 42px)", color: "var(--frost)", fontWeight: 600 }}
          >
            Every season has its magic
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {seasons.map((season) => (
              <div
                key={season.title}
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(13,27,42,0.6)",
                  border: "1px solid rgba(168,216,234,0.1)",
                }}
              >
                <p className="eyebrow mb-2">{season.title}</p>
                <h3
                  className="font-display text-xl font-semibold mb-3"
                  style={{ color: "var(--frost)" }}
                >
                  {season.label}
                </h3>
                <p className="text-sm mb-4" style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                  {season.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {season.activities.map((a) => (
                    <span key={a} className="badge-chip">{a}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/when-to-go" className="text-sm" style={{ color: "var(--ice)" }}>
              Full seasonal guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="px-6 py-20 section-divider">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="eyebrow mb-3">From the guide</p>
              <h2
                className="font-display"
                style={{ fontSize: "clamp(28px, 4vw, 42px)", color: "var(--frost)", fontWeight: 600 }}
              >
                Planning advice from people
                <br className="hidden sm:block" /> who keep going back
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden sm:flex items-center gap-1 text-sm"
              style={{ color: "var(--ice)" }}
            >
              All articles <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card-glass p-6 block">
                <div className="flex items-center gap-3 mb-4">
                  <span className="badge-chip">{post.category}</span>
                  <span className="text-xs" style={{ color: "var(--muted)" }}>
                    {post.date}
                  </span>
                </div>
                <h3
                  className="font-display text-lg font-semibold mb-2"
                  style={{ color: "var(--frost)" }}
                >
                  {post.title}
                </h3>
                <p
                  className="text-sm mb-4 line-clamp-2"
                  style={{ color: "var(--muted)", lineHeight: 1.6 }}
                >
                  {post.excerpt}
                </p>
                <span className="text-sm" style={{ color: "var(--ice)" }}>
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section
        className="px-6 py-20"
        style={{ background: "var(--deep-navy)", borderTop: "1px solid rgba(168,216,234,0.08)" }}
      >
        <div className="max-w-xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <CalendarDays size={32} style={{ color: "var(--aurora)" }} />
          </div>
          <h2
            className="font-display mb-3"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "var(--frost)", fontWeight: 600 }}
          >
            Get the free Lapland trip planner
          </h2>
          <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>
            Best operators, budgets and packing list — straight to your inbox.
          </p>
          <NewsletterForm />
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            {["No spam", "Unsubscribe anytime", "12,000+ readers"].map((t) => (
              <span key={t} className="badge-chip">{t}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
