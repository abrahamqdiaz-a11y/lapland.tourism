import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { destinations } from "@/data/lapland-data";
import {
  destinationPhotography,
  editorialHero,
  heroPhotography,
} from "@/data/editorial-visuals";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore Finnish Lapland's top destinations — Rovaniemi, Levi, Saariselkä and Ylläs.",
};

export default function DestinationsPage() {
  return (
    <>
      <section
        className="relative flex min-h-[72vh] items-end overflow-hidden px-6 py-24 sm:py-32"
        style={editorialHero(heroPhotography.arcticNight)}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_20%,rgba(201,214,223,0.13),transparent_32%)]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="eyebrow mb-5">Destinations</p>
          <h1
            className="font-display max-w-5xl italic leading-[0.9] tracking-[-0.045em]"
            style={{ fontSize: "clamp(64px, 10vw, 132px)", color: "var(--frost)", fontWeight: 500 }}
          >
            Where do you want to go?
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[rgba(248,250,252,0.72)]">
            Four distinct corners of Finnish Lapland. Each one different. All unforgettable.
          </p>
        </div>
      </section>

      <section className="relative px-6 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--midnight),#071827_45%,var(--midnight))]" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2">
          {destinations.map((dest, index) => {
            const Icon = dest.icon;
            return (
              <Link
                key={dest.slug}
                href={`/destinations/${dest.slug}`}
                className={`group relative flex min-h-[520px] overflow-hidden rounded-[2rem] border border-[rgba(248,250,252,0.1)] bg-[#071827] shadow-2xl transition duration-500 hover:-translate-y-2 hover:border-[rgba(201,214,223,0.38)] ${
                  index % 2 === 1 ? "md:translate-y-14" : ""
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${destinationPhotography[dest.slug]}')`,
                    filter: "saturate(0.92) contrast(1.08) brightness(0.76)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,24,39,0.97)] via-[rgba(7,24,39,0.35)] to-[rgba(7,24,39,0.12)]" />
                <div className="relative z-10 mt-auto w-full p-8 sm:p-10">
                  <div className="mb-6 flex items-center justify-between gap-3">
                    <span className="badge-chip">{dest.badge}</span>
                    <span className="rounded-full border border-[rgba(248,250,252,0.18)] bg-[rgba(7,24,39,0.42)] p-3 text-[var(--ice)] backdrop-blur-md">
                      <Icon size={22} />
                    </span>
                  </div>
                  <h2 className="font-display mb-3 text-5xl font-medium italic leading-none text-[var(--frost)] sm:text-6xl">
                    {dest.name}
                  </h2>
                  <p className="mb-3 text-lg text-[rgba(248,250,252,0.76)]">{dest.tagline}</p>
                  <p className="mb-7 max-w-xl text-sm leading-7 text-[rgba(248,250,252,0.62)]">
                    Known for: {dest.knownFor}
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ice)]">
                    Explore {dest.name} <ArrowRight size={14} />
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
