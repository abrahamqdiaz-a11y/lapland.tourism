import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations, activities } from "@/data/lapland-data";
import { activityPhotography, destinationPhotography } from "@/data/editorial-visuals";

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
        className="relative flex min-h-[78vh] items-end overflow-hidden px-6 py-24 sm:py-32"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(7,24,39,0.95) 0%, rgba(11,31,53,0.78) 46%, rgba(11,31,53,0.28) 100%), linear-gradient(180deg, rgba(7,24,39,0.1) 0%, rgba(7,24,39,0.8) 78%, var(--midnight) 100%), url('${destinationPhotography[slug]}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(84,224,166,0.14),transparent_32%)]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <nav className="mb-8 text-xs uppercase tracking-[0.18em] text-[rgba(248,250,252,0.48)]">
            <Link href="/" className="hover:text-[var(--ice)]">Home</Link>
            {" / "}
            <Link href="/destinations" className="hover:text-[var(--ice)]">Destinations</Link>
            {" / "}
            <span className="text-[var(--ice)]">{dest.name}</span>
          </nav>
          <span className="badge-chip mb-5 inline-block">{dest.badge}</span>
          <h1
            className="font-display max-w-4xl italic leading-[0.86] tracking-[-0.05em]"
            style={{ fontSize: "clamp(76px, 12vw, 168px)", color: "var(--frost)", fontWeight: 500 }}
          >
            {dest.name}
          </h1>
          <p className="mt-7 max-w-2xl text-2xl leading-9 text-[rgba(248,250,252,0.76)]">
            {dest.tagline}
          </p>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="prose-lapland text-lg">
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
              Access is straightforward via {dest.airport}. Most visitors combine {dest.name} with
              at least two or three activities during a stay of five to seven nights.
            </p>
          </div>

          <aside>
            <div className="sticky top-24 rounded-[2rem] border border-[rgba(248,250,252,0.12)] bg-[rgba(11,31,53,0.72)] p-7 shadow-2xl backdrop-blur-xl">
              <p className="eyebrow mb-5">Quick facts</p>
              <dl className="space-y-5">
                <div>
                  <dt className="eyebrow mb-2">Best time</dt>
                  <dd className="text-sm leading-6 text-[var(--frost)]">{dest.bestTime}</dd>
                </div>
                <div>
                  <dt className="eyebrow mb-2">Airport</dt>
                  <dd className="text-sm leading-6 text-[var(--frost)]">{dest.airport}</dd>
                </div>
                <div>
                  <dt className="eyebrow mb-2">Known for</dt>
                  <dd className="text-sm leading-6 text-[var(--frost)]">{dest.knownFor}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28 section-divider">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow mb-4">Activities</p>
          <h2 className="font-display mb-10 text-5xl font-medium italic leading-none text-[var(--frost)] sm:text-7xl">
            Things to do in {dest.name}
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {destActivities.map((act) => {
              const Icon = act.icon;
              return (
                <Link
                  key={act.slug}
                  href={`/destinations/${slug}/${act.slug}`}
                  className="group relative flex min-h-[380px] overflow-hidden rounded-[2rem] border border-[rgba(248,250,252,0.1)] bg-[#071827] shadow-2xl transition duration-500 hover:-translate-y-2"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${activityPhotography[act.slug]}')`, filter: "brightness(0.74) contrast(1.08)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,24,39,0.97)] via-[rgba(7,24,39,0.38)] to-transparent" />
                  <div className="relative z-10 mt-auto p-7">
                    <Icon size={22} className="mb-5 text-[var(--ice)]" />
                    <h3 className="font-display mb-3 text-4xl font-medium italic leading-none text-[var(--frost)]">
                      {act.name}
                    </h3>
                    <p className="mb-5 text-sm leading-7 text-[rgba(248,250,252,0.68)]">{act.short}</p>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ice)]">
                      Book this activity →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[rgba(248,250,252,0.1)] bg-[rgba(11,31,53,0.72)] p-8 shadow-2xl backdrop-blur-xl sm:p-10">
          <h2 className="font-display mb-4 text-4xl font-medium italic text-[var(--frost)]">
            Getting there
          </h2>
          <div className="prose-lapland max-w-4xl">
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
