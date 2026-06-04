import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations, activities } from "@/data/lapland-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dest = destinations.find((d) => d.slug === slug);
  if (!dest) return {};
  return {
    title: dest.name,
    description: `Plan your trip to ${dest.name}, Finnish Lapland. Known for ${dest.knownFor}.`,
  };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const dest = destinations.find((d) => d.slug === slug);
  if (!dest) notFound();

  const destActivities = activities.filter((a) => a.destinations.includes(slug));

  return (
    <>
      <section
        className="relative px-6 py-20"
        style={{
          background:
            "linear-gradient(135deg, #0A0F1E 0%, #0D1B2A 60%, #0F2235 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <nav className="text-xs mb-6" style={{ color: "var(--muted)" }}>
            <Link href="/" className="hover:opacity-80">Home</Link>
            {" › "}
            <Link href="/destinations" className="hover:opacity-80">Destinations</Link>
            {" › "}
            <span style={{ color: "var(--ice)" }}>{dest.name}</span>
          </nav>
          <span className="badge-chip mb-4">{dest.badge}</span>
          <h1
            className="font-display italic mt-2"
            style={{
              fontSize: "clamp(40px, 6vw, 64px)",
              color: "var(--frost)",
              fontWeight: 500,
            }}
          >
            {dest.name}
          </h1>
          <p className="mt-3 text-xl" style={{ color: "var(--muted)" }}>
            {dest.tagline}
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 prose-lapland">
            <p>
              {dest.name} is one of Finnish Lapland&apos;s most compelling destinations. Known for{" "}
              {dest.knownFor.toLowerCase()}, it draws visitors year-round but is at its most magical
              during the winter months.
            </p>
            <p>
              The best time to visit is {dest.bestTime}, when the conditions are ideal for the
              region&apos;s signature experiences. Whether you&apos;re after the northern lights,
              snow-covered forests, or exhilarating Arctic activities, {dest.name} delivers.
            </p>
            <p>
              Access is straightforward via {dest.airport}. Most visitors combine{" "}
              {dest.name} with at least two or three activities during a stay of five to seven nights.
            </p>
          </div>

          <aside>
            <div
              className="card-glass p-6 sticky top-24"
              style={{ borderRadius: "16px" }}
            >
              <h3
                className="font-display text-lg font-semibold mb-4"
                style={{ color: "var(--frost)" }}
              >
                Quick facts
              </h3>
              <dl className="space-y-3">
                <div>
                  <dt className="eyebrow mb-1">Best time</dt>
                  <dd className="text-sm" style={{ color: "var(--frost)" }}>{dest.bestTime}</dd>
                </div>
                <div>
                  <dt className="eyebrow mb-1">Airport</dt>
                  <dd className="text-sm" style={{ color: "var(--frost)" }}>{dest.airport}</dd>
                </div>
                <div>
                  <dt className="eyebrow mb-1">Known for</dt>
                  <dd className="text-sm" style={{ color: "var(--frost)" }}>{dest.knownFor}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-6 pb-16" style={{ borderTop: "1px solid rgba(168,216,234,0.08)" }}>
        <div className="max-w-5xl mx-auto pt-12">
          <p className="eyebrow mb-3">Activities</p>
          <h2
            className="font-display mb-8"
            style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "var(--frost)", fontWeight: 600 }}
          >
            Things to do in {dest.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {destActivities.map((act) => {
              const Icon = act.icon;
              return (
                <Link
                  key={act.slug}
                  href={`/destinations/${slug}/${act.slug}`}
                  className={`card-glass p-6 block ${act.featured ? "card-featured" : ""}`}
                >
                  <Icon size={22} style={{ color: act.featured ? "var(--aurora)" : "var(--ice)" }} className="mb-3" />
                  <h3
                    className="font-display text-lg font-semibold mb-2"
                    style={{ color: "var(--frost)" }}
                  >
                    {act.name}
                  </h3>
                  <p className="text-sm mb-3" style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                    {act.short}
                  </p>
                  <span className="text-sm" style={{ color: act.featured ? "var(--aurora)" : "var(--ice)" }}>
                    Book this activity →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-display mb-4"
            style={{ fontSize: "clamp(22px, 3vw, 30px)", color: "var(--frost)", fontWeight: 600 }}
          >
            Getting there
          </h2>
          <div className="prose-lapland">
            <p>
              The nearest airport is {dest.airport}. Direct charter flights operate from major UK
              airports during the winter season (November–April). Year-round, Finnair connects through
              Helsinki with convenient onward connections.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
