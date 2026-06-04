import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarRange, ArrowRight } from "lucide-react";
import { destinations, activities } from "@/data/lapland-data";
import { operators } from "@/data/operators";

type Props = { params: Promise<{ slug: string; activity: string }> };

export async function generateStaticParams() {
  const params: { slug: string; activity: string }[] = [];
  for (const dest of destinations) {
    for (const act of activities) {
      if (act.destinations.includes(dest.slug)) {
        params.push({ slug: dest.slug, activity: act.slug });
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, activity } = await params;
  const dest = destinations.find((d) => d.slug === slug);
  const act = activities.find((a) => a.slug === activity);
  if (!dest || !act) return {};
  return {
    title: `${act.name} in ${dest.name}`,
    description: act.short,
  };
}

export default async function CombinationPage({ params }: Props) {
  const { slug, activity: activitySlug } = await params;
  const dest = destinations.find((d) => d.slug === slug);
  const act = activities.find((a) => a.slug === activitySlug);

  if (!dest || !act || !act.destinations.includes(slug)) notFound();

  const operator = operators[activitySlug]?.[slug] ?? null;
  const Icon = act.icon;

  const moreActivities = activities.filter(
    (a) => a.slug !== activitySlug && a.destinations.includes(slug)
  );

  return (
    <>
      <section
        className="relative px-6 py-20"
        style={{
          background:
            "linear-gradient(135deg, #0A0F1E 0%, #0D1B2A 60%, #0F2235 100%)",
        }}
      >
        <div
          className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top right, rgba(77,255,160,0.04), transparent 60%)",
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <nav className="text-xs mb-6" style={{ color: "var(--muted)" }}>
            <Link href="/" className="hover:opacity-80">Home</Link>
            {" › "}
            <Link href={`/destinations/${slug}`} className="hover:opacity-80">{dest.name}</Link>
            {" › "}
            <span style={{ color: "var(--ice)" }}>{act.name}</span>
          </nav>
          {act.featured && (
            <span className="badge-chip badge-aurora mb-4 inline-block">{act.badge}</span>
          )}
          <h1
            className="font-display italic mt-2"
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              color: "var(--frost)",
              fontWeight: 500,
            }}
          >
            {act.name} in {dest.name}
          </h1>
          <p className="mt-4 text-lg max-w-xl" style={{ color: "var(--muted)" }}>
            {act.short}
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="prose-lapland">
              <p>
                {act.name} in {dest.name} is one of the most popular winter experiences in Finnish
                Lapland. {act.short}
              </p>
              <p>
                The best season for this activity is {act.bestSeason}. Most sessions last{" "}
                {act.duration.toLowerCase()}, making it easy to fit into a broader itinerary.
                Difficulty level: {act.difficulty.toLowerCase()}.
              </p>
              <p>
                Prices typically run {act.priceRange}. All reputable operators include safety
                briefings, necessary equipment and — where applicable — warm clothing hire.
              </p>
            </div>

            {/* Booking window tip */}
            <div
              className="flex gap-4 items-start p-5 rounded-2xl"
              style={{
                background: "rgba(13,27,42,0.8)",
                border: "1px solid rgba(168,216,234,0.12)",
              }}
            >
              <CalendarRange size={22} style={{ color: "var(--aurora)", flexShrink: 0 }} />
              <div>
                <p className="font-semibold mb-1" style={{ color: "var(--frost)" }}>
                  Booking window tip
                </p>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  Peak season slots (December–January) sell out 6–8 weeks in advance. For Christmas
                  week, book as early as September. March availability is usually more flexible.
                </p>
              </div>
            </div>

            {/* Operator CTA */}
            {operator ? (
              <div
                className="relative p-8 rounded-2xl"
                style={{
                  background: "rgba(13,27,42,0.9)",
                  border: "1px solid rgba(168,216,234,0.15)",
                }}
              >
                <span
                  className="badge-paid-partner absolute top-5 right-5"
                >
                  Paid partner
                </span>
                <p className="eyebrow mb-3">Book with a trusted operator</p>
                <h3
                  className="font-display text-2xl font-semibold mb-3"
                  style={{ color: "var(--frost)" }}
                >
                  {operator.name}
                </h3>
                <p className="text-sm mb-6" style={{ color: "rgba(240,237,232,0.8)", lineHeight: 1.7 }}>
                  {operator.description}
                </p>
                <a
                  href={operator.url + operator.utm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Book now <ArrowRight size={16} />
                </a>
                <p className="mt-3 text-xs" style={{ color: "var(--muted)" }}>
                  This is a paid partner placement.
                </p>
              </div>
            ) : (
              <div
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(168,216,234,0.04)",
                  border: "1px solid rgba(168,216,234,0.12)",
                }}
              >
                <p className="font-semibold mb-2" style={{ color: "var(--ice)" }}>
                  Operator coming soon
                </p>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  We&apos;re currently finding the best operator for {act.name.toLowerCase()} in{" "}
                  {dest.name}. Check back soon or get our free guide for the latest recommendations.
                </p>
                <Link href="/plan-your-trip" className="btn-secondary mt-4 inline-flex text-sm">
                  Get the free guide
                </Link>
              </div>
            )}
          </div>

          <aside>
            <div className="card-glass p-6 sticky top-24">
              <div className="flex items-center gap-3 mb-5">
                <Icon size={22} style={{ color: "var(--ice)" }} />
                <h3 className="font-display text-lg font-semibold" style={{ color: "var(--frost)" }}>
                  Key facts
                </h3>
              </div>
              <dl className="space-y-4">
                <div>
                  <dt className="eyebrow mb-1">Best season</dt>
                  <dd className="text-sm" style={{ color: "var(--frost)" }}>{act.bestSeason}</dd>
                </div>
                <div>
                  <dt className="eyebrow mb-1">Duration</dt>
                  <dd className="text-sm" style={{ color: "var(--frost)" }}>{act.duration}</dd>
                </div>
                <div>
                  <dt className="eyebrow mb-1">Difficulty</dt>
                  <dd className="text-sm" style={{ color: "var(--frost)" }}>{act.difficulty}</dd>
                </div>
                <div>
                  <dt className="eyebrow mb-1">Price range</dt>
                  <dd className="text-sm" style={{ color: "var(--frost)" }}>{act.priceRange}</dd>
                </div>
                <div>
                  <dt className="eyebrow mb-1">Base</dt>
                  <dd className="text-sm" style={{ color: "var(--frost)" }}>{dest.name}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {moreActivities.length > 0 && (
        <section className="px-6 pb-16" style={{ borderTop: "1px solid rgba(168,216,234,0.08)" }}>
          <div className="max-w-5xl mx-auto pt-12">
            <p className="eyebrow mb-3">More in {dest.name}</p>
            <h2
              className="font-display mb-8"
              style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "var(--frost)", fontWeight: 600 }}
            >
              Other activities in {dest.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {moreActivities.map((a) => {
                const AIcon = a.icon;
                return (
                  <Link
                    key={a.slug}
                    href={`/destinations/${slug}/${a.slug}`}
                    className="card-glass p-6 block"
                  >
                    <AIcon size={20} style={{ color: "var(--ice)" }} className="mb-3" />
                    <h3
                      className="font-display text-lg font-semibold mb-2"
                      style={{ color: "var(--frost)" }}
                    >
                      {a.name}
                    </h3>
                    <p className="text-sm" style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                      {a.short}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
