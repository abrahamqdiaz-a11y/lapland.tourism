import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { activities, destinations } from "@/data/lapland-data";
import { activityPhotography, destinationPhotography } from "@/data/editorial-visuals";

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
        className="relative flex min-h-[78vh] items-end overflow-hidden px-6 py-24 sm:py-32"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(7,24,39,0.95) 0%, rgba(11,31,53,0.8) 48%, rgba(11,31,53,0.28) 100%), linear-gradient(180deg, rgba(7,24,39,0.12) 0%, rgba(7,24,39,0.8) 78%, var(--midnight) 100%), url('${activityPhotography[slug]}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(84,224,166,0.16),transparent_32%)]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <nav className="mb-8 text-xs uppercase tracking-[0.18em] text-[rgba(248,250,252,0.48)]">
            <Link href="/" className="hover:text-[var(--ice)]">Home</Link>
            {" / "}
            <Link href="/activities" className="hover:text-[var(--ice)]">Activities</Link>
            {" / "}
            <span className="text-[var(--ice)]">{act.name}</span>
          </nav>
          <div className="mb-6 flex items-center gap-4">
            <span className={`rounded-full border bg-[rgba(7,24,39,0.42)] p-4 backdrop-blur-md ${act.featured ? "border-[rgba(84,224,166,0.34)] text-[var(--aurora)]" : "border-[rgba(201,214,223,0.22)] text-[var(--ice)]"}`}>
              <Icon size={28} />
            </span>
            {act.badge && <span className={`badge-chip ${act.featured ? "badge-aurora" : ""}`}>{act.badge}</span>}
          </div>
          <h1
            className="font-display max-w-5xl italic leading-[0.86] tracking-[-0.05em]"
            style={{ fontSize: "clamp(70px, 11vw, 152px)", color: "var(--frost)", fontWeight: 500 }}
          >
            {act.name}
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-[rgba(248,250,252,0.76)]">
            {act.short}
          </p>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="prose-lapland text-lg">
            <p>
              {act.name} is one of the defining experiences of a Finnish Lapland winter. {act.short}{" "}
              Most tours operate {act.bestSeason.toLowerCase()}, lasting {act.duration.toLowerCase()}.
            </p>
            <p>
              Difficulty is rated {act.difficulty.toLowerCase()}. Prices run {act.priceRange}. All
              operators include equipment, safety briefings and warm gear where required.
            </p>
            <p>
              To book {act.name.toLowerCase()}, choose a destination below and compare local operators
              with clear paid partner disclosures.
            </p>
          </div>

          <aside>
            <div className="sticky top-24 rounded-[2rem] border border-[rgba(248,250,252,0.12)] bg-[rgba(11,31,53,0.72)] p-7 shadow-2xl backdrop-blur-xl">
              <p className="eyebrow mb-5">Experience notes</p>
              <dl className="space-y-5">
                <div><dt className="eyebrow mb-2">Best season</dt><dd className="text-sm text-[var(--frost)]">{act.bestSeason}</dd></div>
                <div><dt className="eyebrow mb-2">Duration</dt><dd className="text-sm text-[var(--frost)]">{act.duration}</dd></div>
                <div><dt className="eyebrow mb-2">Difficulty</dt><dd className="text-sm text-[var(--frost)]">{act.difficulty}</dd></div>
                <div><dt className="eyebrow mb-2">Price range</dt><dd className="text-sm text-[var(--frost)]">{act.priceRange}</dd></div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28 section-divider">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow mb-4">Where to book</p>
          <h2 className="font-display mb-10 text-5xl font-medium italic leading-none text-[var(--frost)] sm:text-7xl">
            Best destinations for {act.name}
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {actDestinations.map((dest) => (
              <Link
                key={dest.slug}
                href={`/destinations/${dest.slug}/${act.slug}`}
                className="group relative flex min-h-[420px] overflow-hidden rounded-[2rem] border border-[rgba(248,250,252,0.1)] bg-[#071827] shadow-2xl transition duration-500 hover:-translate-y-2"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${destinationPhotography[dest.slug]}')`, filter: "brightness(0.74) contrast(1.08)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,24,39,0.96)] via-[rgba(7,24,39,0.38)] to-transparent" />
                <div className="relative z-10 mt-auto p-7">
                  <span className="badge-chip mb-5">{dest.badge}</span>
                  <h3 className="font-display mb-3 text-4xl font-medium italic leading-none text-[var(--frost)]">
                    {dest.name}
                  </h3>
                  <p className="mb-6 text-sm leading-7 text-[rgba(248,250,252,0.68)]">{dest.tagline}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ice)]">
                    See operators <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
