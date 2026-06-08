import type { Metadata } from "next";
import { seasons, activities } from "@/data/lapland-data";
import { editorialHero, heroPhotography, seasonMoods } from "@/data/editorial-visuals";

export const metadata: Metadata = {
  title: "When to Go",
  description:
    "Finnish Lapland season guide — the best time to visit for aurora, snow safaris and winter activities.",
};

export default function WhenToGoPage() {
  return (
    <>
      <section
        className="relative flex min-h-[70vh] items-end overflow-hidden px-6 py-24 sm:py-32"
        style={editorialHero(heroPhotography.arcticNight)}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(84,224,166,0.14),transparent_32%)]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="eyebrow mb-5">When to go</p>
          <h1
            className="font-display max-w-5xl italic leading-[0.9] tracking-[-0.045em]"
            style={{ fontSize: "clamp(64px, 10vw, 132px)", color: "var(--frost)", fontWeight: 500 }}
          >
            Every season has its magic
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[rgba(248,250,252,0.72)]">
            Finnish Lapland rewards visitors year-round. Here&apos;s how to pick the right window for your trip.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-[rgba(248,250,252,0.1)] bg-[#071827] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-4">
            {seasons.map((season, index) => (
              <div
                key={season.title}
                className="relative min-h-[460px] border-b border-[rgba(248,250,252,0.1)] bg-cover bg-center p-7 lg:border-b-0 lg:border-r lg:border-[rgba(248,250,252,0.1)] last:lg:border-r-0"
                style={{ backgroundImage: seasonMoods[index] }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,24,39,0.84)] via-transparent to-[rgba(7,24,39,0.18)]" />
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <p className="eyebrow">{season.title}</p>
                  <div>
                    <h2 className="font-display mb-4 text-4xl font-medium italic leading-none text-[var(--frost)]">
                      {season.label}
                    </h2>
                    <p className="mb-6 text-sm leading-7 text-[rgba(248,250,252,0.7)]">
                      {season.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {season.activities.map((a) => (
                        <span key={a} className="badge-chip">{a}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 sm:pb-32 section-divider">
        <div className="mx-auto max-w-7xl pt-20">
          <p className="eyebrow mb-4">Activity season guide</p>
          <h2 className="font-display mb-10 text-5xl font-medium italic leading-none text-[var(--frost)] sm:text-7xl">
            Activity × best months
          </h2>
          <div className="overflow-hidden rounded-[2rem] border border-[rgba(248,250,252,0.12)] bg-[rgba(11,31,53,0.68)] shadow-2xl backdrop-blur-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[rgba(84,224,166,0.12)] bg-[rgba(84,224,166,0.06)]">
                  <th className="p-5 text-left font-semibold uppercase tracking-[0.16em] text-[var(--aurora)]">Activity</th>
                  <th className="p-5 text-left font-semibold uppercase tracking-[0.16em] text-[var(--aurora)]">Best season</th>
                  <th className="hidden p-5 text-left font-semibold uppercase tracking-[0.16em] text-[var(--aurora)] sm:table-cell">Duration</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((act, i) => (
                  <tr
                    key={act.slug}
                    className="border-b border-[rgba(201,214,223,0.06)]"
                    style={{ background: i % 2 === 0 ? "rgba(11,31,53,0.58)" : "rgba(11,31,53,0.28)" }}
                  >
                    <td className="p-5 text-[var(--frost)]">{act.name}</td>
                    <td className="p-5 text-[rgba(248,250,252,0.58)]">{act.bestSeason}</td>
                    <td className="hidden p-5 text-[rgba(248,250,252,0.58)] sm:table-cell">{act.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
