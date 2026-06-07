import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarRange, ArrowRight } from "lucide-react";
import { destinations, activities } from "@/data/lapland-data";
import { operators } from "@/data/operators";
import { activityPhotography, destinationPhotography } from "@/data/editorial-visuals";

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
        className="relative flex min-h-[78vh] items-end overflow-hidden px-6 py-24 sm:py-32"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(7,24,39,0.96) 0%, rgba(11,31,53,0.82) 48%, rgba(11,31,53,0.32) 100%), linear-gradient(180deg, rgba(7,24,39,0.12) 0%, rgba(7,24,39,0.82) 78%, var(--midnight) 100%), url('${activityPhotography[activitySlug]}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(84,224,166,0.16),transparent_32%)]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <nav className="mb-8 text-xs uppercase tracking-[0.18em] text-[rgba(248,250,252,0.48)]">
            <Link href="/" className="hover:text-[var(--ice)]">Home</Link>
            {" / "}
            <Link href={`/destinations/${slug}`} className="hover:text-[var(--ice)]">{dest.name}</Link>
            {" / "}
            <span className="text-[var(--ice)]">{act.name}</span>
          </nav>
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <span className={`rounded-full border bg-[rgba(7,24,39,0.42)] p-4 backdrop-blur-md ${act.featured ? "border-[rgba(84,224,166,0.34)] text-[var(--aurora)]" : "border-[rgba(201,214,223,0.22)] text-[var(--ice)]"}`}>
              <Icon size={28} />
            </span>
            {act.featured && <span className="badge-chip badge-aurora inline-block">{act.badge}</span>}
            <span className="badge-chip">{dest.name}</span>
          </div>
          <h1
            className="font-display max-w-6xl italic leading-[0.9] tracking-[-0.05em]"
            style={{ fontSize: "clamp(58px, 9vw, 132px)", color: "var(--frost)", fontWeight: 500 }}
          >
            {act.name} in {dest.name}
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-[rgba(248,250,252,0.76)]">
            {act.short}
          </p>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_380px]">
          <div className="space-y-8">
            <div className="prose-lapland text-lg">
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

            <div className="flex items-start gap-4 rounded-[2rem] border border-[rgba(248,250,252,0.1)] bg-[rgba(11,31,53,0.72)] p-6 shadow-2xl backdrop-blur-xl">
              <CalendarRange size={22} className="mt-1 shrink-0 text-[var(--aurora)]" />
              <div>
                <p className="mb-2 font-semibold text-[var(--frost)]">Booking window tip</p>
                <p className="text-sm leading-7 text-[rgba(248,250,252,0.62)]">
                  Peak season slots (December–January) sell out 6–8 weeks in advance. For Christmas
                  week, book as early as September. March availability is usually more flexible.
                </p>
              </div>
            </div>

            {operator ? (
              <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(84,224,166,0.24)] bg-[rgba(11,31,53,0.86)] p-8 shadow-[0_0_46px_rgba(84,224,166,0.08)] backdrop-blur-xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(84,224,166,0.16),transparent_34%)]" />
                <span className="badge-paid-partner absolute right-5 top-5">Paid partner</span>
                <div className="relative z-10">
                  <p className="eyebrow mb-4">Book with a trusted operator</p>
                  <h3 className="font-display mb-4 text-4xl font-medium italic leading-none text-[var(--frost)]">
                    {operator.name}
                  </h3>
                  <p className="mb-7 max-w-2xl text-sm leading-7 text-[rgba(248,250,252,0.76)]">
                    {operator.description}
                  </p>
                  <a
                    href={operator.url + operator.utm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full border border-[rgba(84,224,166,0.42)] bg-[rgba(84,224,166,0.92)] px-7 py-4 text-sm font-semibold tracking-[0.04em] text-[#071827] shadow-[0_0_38px_rgba(84,224,166,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_52px_rgba(84,224,166,0.42)]"
                  >
                    Book now <ArrowRight size={16} />
                  </a>
                  <p className="mt-4 text-xs text-[rgba(248,250,252,0.46)]">
                    This is a paid partner placement.
                  </p>
                </div>
              </div>
            ) : (
              <div className="rounded-[2rem] border border-[rgba(248,250,252,0.1)] bg-[rgba(201,214,223,0.04)] p-8 shadow-2xl backdrop-blur-xl">
                <p className="mb-3 font-semibold text-[var(--ice)]">Operator coming soon</p>
                <p className="text-sm leading-7 text-[rgba(248,250,252,0.62)]">
                  We&apos;re currently finding the best operator for {act.name.toLowerCase()} in{" "}
                  {dest.name}. Check back soon or get our free guide for the latest recommendations.
                </p>
                <Link href="/plan-your-trip" className="btn-secondary mt-5 inline-flex text-sm">
                  Get the free guide
                </Link>
              </div>
            )}
          </div>

          <aside>
            <div className="sticky top-24 overflow-hidden rounded-[2rem] border border-[rgba(248,250,252,0.12)] bg-[rgba(11,31,53,0.72)] shadow-2xl backdrop-blur-xl">
              <div
                className="h-44 bg-cover bg-center"
                style={{ backgroundImage: `url('${destinationPhotography[slug]}')`, filter: "brightness(0.8)" }}
              />
              <div className="p-7">
                <div className="mb-5 flex items-center gap-3">
                  <Icon size={22} className="text-[var(--ice)]" />
                  <h3 className="font-display text-2xl font-medium italic text-[var(--frost)]">Key facts</h3>
                </div>
                <dl className="space-y-5">
                  <div><dt className="eyebrow mb-2">Best season</dt><dd className="text-sm text-[var(--frost)]">{act.bestSeason}</dd></div>
                  <div><dt className="eyebrow mb-2">Duration</dt><dd className="text-sm text-[var(--frost)]">{act.duration}</dd></div>
                  <div><dt className="eyebrow mb-2">Difficulty</dt><dd className="text-sm text-[var(--frost)]">{act.difficulty}</dd></div>
                  <div><dt className="eyebrow mb-2">Price range</dt><dd className="text-sm text-[var(--frost)]">{act.priceRange}</dd></div>
                  <div><dt className="eyebrow mb-2">Base</dt><dd className="text-sm text-[var(--frost)]">{dest.name}</dd></div>
                </dl>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {moreActivities.length > 0 && (
        <section className="px-6 py-20 sm:py-28 section-divider">
          <div className="mx-auto max-w-7xl">
            <p className="eyebrow mb-4">More in {dest.name}</p>
            <h2 className="font-display mb-10 text-5xl font-medium italic leading-none text-[var(--frost)] sm:text-7xl">
              Other activities in {dest.name}
            </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {moreActivities.map((a) => {
                const AIcon = a.icon;
                return (
                  <Link
                    key={a.slug}
                    href={`/destinations/${slug}/${a.slug}`}
                    className="group relative flex min-h-[340px] overflow-hidden rounded-[2rem] border border-[rgba(248,250,252,0.1)] bg-[#071827] shadow-2xl transition duration-500 hover:-translate-y-2"
                  >
                    <div className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${activityPhotography[a.slug]}')`, filter: "brightness(0.72) contrast(1.08)" }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,24,39,0.97)] via-[rgba(7,24,39,0.35)] to-transparent" />
                    <div className="relative z-10 mt-auto p-7">
                      <AIcon size={20} className="mb-4 text-[var(--ice)]" />
                      <h3 className="font-display mb-3 text-4xl font-medium italic text-[var(--frost)]">{a.name}</h3>
                      <p className="text-sm leading-7 text-[rgba(248,250,252,0.66)]">{a.short}</p>
                    </div>
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
