import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { destinations } from "@/data/lapland-data";
import { activities } from "@/data/lapland-data";
import { seasons } from "@/data/lapland-data";
import { blogPosts } from "@/data/lapland-data";
import NewsletterForm from "@/components/NewsletterForm";

const destinationPhotography: Record<string, string> = {
  rovaniemi:
    "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=1400&q=80",
  levi: "https://images.unsplash.com/photo-1483168527879-c66136b56105?auto=format&fit=crop&w=1400&q=80",
  saariselka:
    "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?auto=format&fit=crop&w=1400&q=80",
  yllas:
    "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=1400&q=80",
};

const activityPhotography: Record<string, string> = {
  "snow-safari":
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80",
  "husky-safari":
    "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?auto=format&fit=crop&w=1400&q=80",
  "aurora-hunting":
    "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1400&q=80",
  "reindeer-safari":
    "https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=1400&q=80",
  "ice-fishing":
    "https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&w=1400&q=80",
  "skiing-snowboard":
    "https://images.unsplash.com/photo-1551524164-6cf2ac833fb4?auto=format&fit=crop&w=1400&q=80",
};

const seasonMoods = [
  "linear-gradient(145deg, rgba(3,7,18,0.92), rgba(12,33,67,0.78)), url('https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=1400&q=80')",
  "linear-gradient(145deg, rgba(9,18,32,0.85), rgba(166,122,58,0.42)), url('https://images.unsplash.com/photo-1455156218388-5e61b526818b?auto=format&fit=crop&w=1400&q=80')",
  "linear-gradient(145deg, rgba(10,15,30,0.82), rgba(176,199,213,0.34)), url('https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=1400&q=80')",
  "linear-gradient(145deg, rgba(10,15,30,0.78), rgba(218,143,79,0.38)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80')",
];

const blogAccents = ["Aurora file", "Field notes", "Arctic brief"];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 py-28"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(3,6,14,0.94) 0%, rgba(5,10,22,0.76) 42%, rgba(5,10,22,0.2) 100%), linear-gradient(180deg, rgba(3,6,14,0.18) 0%, rgba(3,6,14,0.78) 74%, var(--midnight) 100%), url('/dylan-shaw-94uGO6XrHcc-unsplash.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 72% 18%, rgba(77,255,160,0.22), transparent 32%), radial-gradient(circle at 20% 88%, rgba(168,216,234,0.12), transparent 34%)",
          }}
        />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-end gap-12 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="max-w-5xl pt-20">
            <p className="eyebrow mb-6">Finnish Lapland</p>
            <h1
              className="font-display mb-8 max-w-4xl italic leading-[0.86] tracking-[-0.05em]"
              style={{
                fontSize: "clamp(76px, 12vw, 168px)",
                color: "var(--frost)",
                fontWeight: 500,
                textShadow: "0 24px 80px rgba(0,0,0,0.75)",
              }}
            >
              Your Arctic adventure
              <br />
              starts here
            </h1>
            <p
              className="mb-10 max-w-2xl text-lg sm:text-xl"
              style={{ color: "rgba(240,237,232,0.76)", lineHeight: 1.8 }}
            >
              The independent traveller&#39;s guide to Finnish Lapland —
              destinations, activities and trusted local operators.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/activities"
                className="inline-flex items-center gap-3 rounded-full border border-[rgba(77,255,160,0.42)] bg-[rgba(77,255,160,0.92)] px-7 py-4 text-sm font-semibold tracking-[0.04em] text-[#061018] shadow-[0_0_38px_rgba(77,255,160,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_52px_rgba(77,255,160,0.42)]"
              >
                Explore activities <ArrowRight size={16} />
              </Link>
              <Link
                href="/destinations"
                className="inline-flex items-center gap-3 rounded-full border border-[rgba(240,237,232,0.28)] bg-[rgba(5,10,22,0.24)] px-7 py-4 text-sm font-semibold tracking-[0.04em] text-[var(--frost)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(240,237,232,0.58)] hover:bg-[rgba(240,237,232,0.08)]"
              >
                Pick a destination
              </Link>
            </div>
          </div>
          <aside className="hidden rounded-[2rem] border border-[rgba(240,237,232,0.14)] bg-[rgba(6,12,24,0.42)] p-6 shadow-2xl backdrop-blur-xl lg:block">
            <p className="eyebrow mb-4">Traveller intelligence</p>
            <p className="font-display text-3xl italic leading-tight text-[var(--frost)]">
              Dark skies, quiet forests and operators worth knowing before you
              go.
            </p>
            <p className="mt-6 text-sm leading-7 text-[rgba(240,237,232,0.58)]">
              Trusted by 12,000+ travellers from the UK, US &amp; Europe
            </p>
          </aside>
        </div>
        <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-[rgba(240,237,232,0.56)] sm:flex">
          <span>Scroll</span>
          <span className="h-12 w-px bg-gradient-to-b from-[rgba(240,237,232,0.7)] to-transparent" />
        </div>
      </section>

      {/* Destinations */}
      <section className="relative px-6 py-24 sm:py-32">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, var(--midnight), #050914 45%, var(--midnight))",
          }}
        />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between gap-8">
            <div>
              <p className="eyebrow mb-4">Destinations</p>
              <h2
                className="font-display max-w-3xl leading-none tracking-[-0.03em]"
                style={{
                  fontSize: "clamp(42px, 6vw, 82px)",
                  color: "var(--frost)",
                  fontWeight: 500,
                }}
              >
                Where do you want to go?
              </h2>
            </div>
            <Link
              href="/destinations"
              className="hidden items-center gap-2 rounded-full border border-[rgba(168,216,234,0.22)] px-5 py-3 text-sm text-[var(--ice)] transition hover:border-[rgba(168,216,234,0.55)] sm:flex"
            >
              See all destinations <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {destinations.map((dest, index) => {
              const Icon = dest.icon;
              return (
                <Link
                  key={dest.slug}
                  href={`/destinations/${dest.slug}`}
                  className={`group relative flex min-h-[430px] overflow-hidden rounded-[2rem] border border-[rgba(240,237,232,0.1)] bg-[#07101f] shadow-2xl transition duration-500 hover:-translate-y-2 hover:border-[rgba(168,216,234,0.38)] md:min-h-[520px] ${
                    index === 0 ? "xl:mt-16" : index === 2 ? "xl:mt-10" : ""
                  }`}
                >
                  <div
                    className="absolute inset-0 scale-100 bg-cover bg-center transition duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${destinationPhotography[dest.slug]}')`,
                      filter: "saturate(0.92) contrast(1.08) brightness(0.78)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(3,6,14,0.96)] via-[rgba(3,6,14,0.34)] to-[rgba(3,6,14,0.16)]" />
                  <div className="relative z-10 mt-auto w-full p-7">
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <span className="badge-chip">{dest.badge}</span>
                      <span className="rounded-full border border-[rgba(240,237,232,0.18)] bg-[rgba(3,6,14,0.4)] p-3 text-[var(--ice)] backdrop-blur-md">
                        <Icon size={20} />
                      </span>
                    </div>
                    <h3 className="font-display mb-2 text-4xl font-medium italic leading-none text-[var(--frost)]">
                      {dest.name}
                    </h3>
                    <p className="mb-5 text-sm leading-6 text-[rgba(240,237,232,0.68)]">
                      {dest.tagline}
                    </p>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ice)]">
                      Discover →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-6 flex sm:hidden">
            <Link
              href="/destinations"
              className="flex items-center gap-1 text-sm"
              style={{ color: "var(--ice)" }}
            >
              See all destinations <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="relative px-6 py-24 sm:py-32 section-divider">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="eyebrow mb-4">Activities</p>
            <h2
              className="font-display leading-none tracking-[-0.03em]"
              style={{
                fontSize: "clamp(42px, 6vw, 82px)",
                color: "var(--frost)",
                fontWeight: 500,
              }}
            >
              What do you want to do?
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-6">
            {activities.map((act, index) => {
              const Icon = act.icon;
              const featured = act.featured;
              return (
                <Link
                  key={act.slug}
                  href={`/activities/${act.slug}`}
                  className={`group relative flex min-h-[360px] overflow-hidden rounded-[2rem] border bg-[#07101f] shadow-2xl transition duration-500 hover:-translate-y-2 ${
                    featured
                      ? "border-[rgba(77,255,160,0.36)] lg:col-span-4 lg:min-h-[560px]"
                      : "border-[rgba(240,237,232,0.1)] lg:col-span-2 lg:min-h-[360px]"
                  } ${index === 1 || index === 4 ? "lg:translate-y-10" : ""}`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${activityPhotography[act.slug]}')`,
                      filter: "saturate(0.9) contrast(1.08) brightness(0.72)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(3,6,14,0.97)] via-[rgba(3,6,14,0.38)] to-[rgba(3,6,14,0.1)]" />
                  {featured && (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_32%_20%,rgba(77,255,160,0.2),transparent_32%)]" />
                  )}
                  <div className="relative z-10 mt-auto p-7 sm:p-8">
                    <div className="mb-5 flex items-center gap-3">
                      <span
                        className={`rounded-full border bg-[rgba(3,6,14,0.42)] p-3 backdrop-blur-md ${
                          featured
                            ? "border-[rgba(77,255,160,0.34)] text-[var(--aurora)]"
                            : "border-[rgba(168,216,234,0.22)] text-[var(--ice)]"
                        }`}
                      >
                        <Icon size={20} />
                      </span>
                      {act.badge && (
                        <span className={`badge-chip ${featured ? "badge-aurora" : ""}`}>
                          {act.badge}
                        </span>
                      )}
                    </div>
                    <h3
                      className={`font-display mb-3 font-medium italic leading-none text-[var(--frost)] ${
                        featured ? "text-5xl sm:text-6xl" : "text-4xl"
                      }`}
                    >
                      {act.name}
                    </h3>
                    <p className="mb-5 max-w-lg text-sm leading-7 text-[rgba(240,237,232,0.68)]">
                      {act.short}
                    </p>
                    <span
                      className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                        featured ? "text-[var(--aurora)]" : "text-[var(--ice)]"
                      }`}
                    >
                      Find operators →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seasons */}
      <section className="px-6 py-24 sm:py-32 section-divider">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex max-w-4xl flex-col gap-4">
            <p className="eyebrow">When to go</p>
            <h2
              className="font-display leading-none tracking-[-0.03em]"
              style={{
                fontSize: "clamp(42px, 6vw, 82px)",
                color: "var(--frost)",
                fontWeight: 500,
              }}
            >
              Every season has its magic
            </h2>
          </div>
          <div className="overflow-hidden rounded-[2.25rem] border border-[rgba(240,237,232,0.1)] bg-[#07101f] shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-4">
              {seasons.map((season, index) => (
                <div
                  key={season.title}
                  className="relative min-h-[420px] border-b border-[rgba(240,237,232,0.1)] bg-cover bg-center p-7 lg:border-b-0 lg:border-r last:lg:border-r-0 lg:border-[rgba(240,237,232,0.1)]"
                  style={{ backgroundImage: seasonMoods[index] }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(3,6,14,0.8)] via-transparent to-[rgba(3,6,14,0.18)]" />
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <p className="eyebrow">{season.title}</p>
                    <div>
                      <h3 className="font-display mb-4 text-4xl font-medium italic leading-none text-[var(--frost)]">
                        {season.label}
                      </h3>
                      <p className="mb-6 text-sm leading-7 text-[rgba(240,237,232,0.7)]">
                        {season.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {season.activities.map((a) => (
                          <span key={a} className="badge-chip">
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/when-to-go"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(168,216,234,0.22)] px-5 py-3 text-sm text-[var(--ice)] transition hover:border-[rgba(168,216,234,0.55)]"
            >
              Full seasonal guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="px-6 py-24 sm:py-32 section-divider">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between gap-8">
            <div>
              <p className="eyebrow mb-4">From the guide</p>
              <h2
                className="font-display leading-none tracking-[-0.03em]"
                style={{
                  fontSize: "clamp(42px, 6vw, 82px)",
                  color: "var(--frost)",
                  fontWeight: 500,
                }}
              >
                Planning advice from people
                <br className="hidden sm:block" /> who keep going back
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden items-center gap-2 rounded-full border border-[rgba(168,216,234,0.22)] px-5 py-3 text-sm text-[var(--ice)] transition hover:border-[rgba(168,216,234,0.55)] sm:flex"
            >
              All articles <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative min-h-[430px] overflow-hidden rounded-[2rem] border border-[rgba(240,237,232,0.1)] bg-[rgba(240,237,232,0.92)] p-7 text-[#07101f] shadow-2xl transition duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[rgba(77,255,160,0.75)] via-[rgba(168,216,234,0.55)] to-transparent" />
                <div className="flex h-full flex-col">
                  <div className="mb-10 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-[rgba(7,16,31,0.14)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#07101f]">
                      {post.category}
                    </span>
                    <span className="text-xs uppercase tracking-[0.18em] text-[rgba(7,16,31,0.48)]">
                      {post.date}
                    </span>
                  </div>
                  <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[rgba(7,16,31,0.46)]">
                    {blogAccents[index]}
                  </p>
                  <h3 className="font-display mb-5 text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-[#07101f]">
                    {post.title}
                  </h3>
                  <p className="mb-8 text-sm leading-7 text-[rgba(7,16,31,0.66)]">
                    {post.excerpt}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#07101f]">
                    Read more <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 flex sm:hidden">
            <Link
              href="/blog"
              className="flex items-center gap-1 text-sm"
              style={{ color: "var(--ice)" }}
            >
              All articles <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section
        className="px-6 py-24 sm:py-32 section-divider"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(77,255,160,0.12), transparent 30%), linear-gradient(180deg, #050914, var(--midnight))",
        }}
      >
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-[rgba(240,237,232,0.1)] bg-[rgba(7,16,31,0.72)] p-8 text-center shadow-2xl backdrop-blur-xl sm:p-14 lg:p-20">
          <div className="mb-6 flex justify-center">
            <span className="rounded-full border border-[rgba(77,255,160,0.28)] bg-[rgba(77,255,160,0.08)] p-4 text-[var(--aurora)] shadow-[0_0_32px_rgba(77,255,160,0.14)]">
              <CalendarDays size={30} />
            </span>
          </div>
          <h2
            className="font-display mx-auto mb-4 max-w-3xl italic leading-none tracking-[-0.03em]"
            style={{
              fontSize: "clamp(44px, 7vw, 92px)",
              color: "var(--frost)",
              fontWeight: 500,
            }}
          >
            Get the free Lapland trip planner
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-sm leading-7 text-[rgba(240,237,232,0.62)]">
            Best operators, budgets and packing list — straight to your inbox.
          </p>
          <div className="mx-auto max-w-2xl">
            <NewsletterForm />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["No spam", "Unsubscribe anytime", "12,000+ readers"].map((t) => (
              <span key={t} className="badge-chip">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
