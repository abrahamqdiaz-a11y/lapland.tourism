import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { activities } from "@/data/lapland-data";
import {
  activityPhotography,
  editorialHero,
  heroPhotography,
} from "@/data/editorial-visuals";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Discover Finnish Lapland's best winter activities — snow safaris, husky safaris, aurora hunting and more.",
};

export default function ActivitiesPage() {
  return (
    <>
      <section
        className="relative flex min-h-[72vh] items-end overflow-hidden px-6 py-24 sm:py-32"
        style={editorialHero(heroPhotography.polarForest)}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(84,224,166,0.16),transparent_30%)]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="eyebrow mb-5">Activities</p>
          <h1
            className="font-display max-w-5xl italic leading-[0.9] tracking-[-0.045em]"
            style={{
              fontSize: "clamp(64px, 10vw, 132px)",
              color: "var(--frost)",
              fontWeight: 500,
              textShadow: "0 24px 80px rgba(0,0,0,0.75)",
            }}
          >
            What do you want to do?
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[rgba(248,250,252,0.72)]">
            From snowmobile expeditions to aurora hunts — Finnish Lapland&apos;s signature experiences.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 lg:grid-cols-6">
          {activities.map((act, index) => {
            const Icon = act.icon;
            return (
              <Link
                key={act.slug}
                href={`/activities/${act.slug}`}
                className={`group relative flex min-h-[380px] overflow-hidden rounded-[2rem] border bg-[#071827] shadow-2xl transition duration-500 hover:-translate-y-2 ${
                  act.featured
                    ? "border-[rgba(84,224,166,0.36)] lg:col-span-4 lg:min-h-[600px]"
                    : "border-[rgba(248,250,252,0.1)] lg:col-span-2"
                } ${index === 1 || index === 4 ? "lg:translate-y-10" : ""}`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${activityPhotography[act.slug]}')`,
                    filter: "saturate(0.9) contrast(1.08) brightness(0.72)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,24,39,0.97)] via-[rgba(7,24,39,0.38)] to-[rgba(7,24,39,0.08)]" />
                {act.featured && (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(84,224,166,0.2),transparent_34%)]" />
                )}
                <div className="relative z-10 mt-auto p-7 sm:p-8">
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span
                      className={`rounded-full border bg-[rgba(7,24,39,0.42)] p-3 backdrop-blur-md ${
                        act.featured
                          ? "border-[rgba(84,224,166,0.34)] text-[var(--aurora)]"
                          : "border-[rgba(201,214,223,0.22)] text-[var(--ice)]"
                      }`}
                    >
                      <Icon size={20} />
                    </span>
                    {act.badge && (
                      <span className={`badge-chip ${act.featured ? "badge-aurora" : ""}`}>
                        {act.badge}
                      </span>
                    )}
                  </div>
                  <h2
                    className={`font-display mb-3 font-medium italic leading-none text-[var(--frost)] ${
                      act.featured ? "text-5xl sm:text-7xl" : "text-4xl"
                    }`}
                  >
                    {act.name}
                  </h2>
                  <p className="mb-5 max-w-lg text-sm leading-7 text-[rgba(248,250,252,0.7)]">
                    {act.short}
                  </p>
                  <div className="mb-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.16em] text-[rgba(248,250,252,0.48)]">
                    <span>{act.duration}</span>
                    <span>·</span>
                    <span>{act.priceRange}</span>
                  </div>
                  <span
                    className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${
                      act.featured ? "text-[var(--aurora)]" : "text-[var(--ice)]"
                    }`}
                  >
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
