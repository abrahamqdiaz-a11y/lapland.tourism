import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { activities, destinations } from "@/data/lapland-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return activities.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const act = activities.find((a) => a.slug === slug);
  if (!act) return {};
  return {
    title: act.name,
    description: act.short,
  };
}

export default async function ActivityPage({ params }: Props) {
  const { slug } = await params;
  const act = activities.find((a) => a.slug === slug);
  if (!act) notFound();

  const Icon = act.icon;
  const actDestinations = destinations.filter((d) => act.destinations.includes(d.slug));

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
            <Link href="/activities" className="hover:opacity-80">Activities</Link>
            {" › "}
            <span style={{ color: "var(--ice)" }}>{act.name}</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <Icon size={32} style={{ color: act.featured ? "var(--aurora)" : "var(--ice)" }} />
            {act.badge && (
              <span className={`badge-chip ${act.featured ? "badge-aurora" : ""}`}>
                {act.badge}
              </span>
            )}
          </div>
          <h1
            className="font-display italic"
            style={{
              fontSize: "clamp(40px, 6vw, 64px)",
              color: "var(--frost)",
              fontWeight: 500,
            }}
          >
            {act.name}
          </h1>
          <p className="mt-4 text-lg max-w-xl" style={{ color: "var(--muted)" }}>
            {act.short}
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 prose-lapland">
            <p>
              {act.name} is one of the defining experiences of a Finnish Lapland winter. {act.short}{" "}
              Most tours operate {act.bestSeason.toLowerCase()}, lasting {act.duration.toLowerCase()}.
            </p>
            <p>
              Difficulty is rated {act.difficulty.toLowerCase()}. Prices run {act.priceRange}. All
              operators include equipment, safety briefings and warm gear where required.
            </p>
            <p>
              To book {act.name.toLowerCase()}, choose a destination below — each one has local
              operators we&apos;ve vetted for quality and reliability.
            </p>
          </div>

          <aside>
            <div className="card-glass p-6 sticky top-24">
              <h3 className="font-display text-lg font-semibold mb-4" style={{ color: "var(--frost)" }}>
                At a glance
              </h3>
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
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-6 pb-16" style={{ borderTop: "1px solid rgba(168,216,234,0.08)" }}>
        <div className="max-w-5xl mx-auto pt-12">
          <p className="eyebrow mb-3">Where to do it</p>
          <h2
            className="font-display mb-8"
            style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "var(--frost)", fontWeight: 600 }}
          >
            Choose your destination
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {actDestinations.map((dest) => {
              const DIcon = dest.icon;
              return (
                <Link
                  key={dest.slug}
                  href={`/destinations/${dest.slug}/${act.slug}`}
                  className="card-glass p-6 block"
                >
                  <DIcon size={22} style={{ color: "var(--ice)" }} className="mb-3" />
                  <h3
                    className="font-display text-xl font-semibold mb-1"
                    style={{ color: "var(--frost)" }}
                  >
                    {dest.name}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>
                    {dest.tagline}
                  </p>
                  <span className="text-sm" style={{ color: "var(--ice)" }}>
                    {act.name} in {dest.name} →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
