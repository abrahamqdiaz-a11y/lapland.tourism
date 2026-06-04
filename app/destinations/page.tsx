import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { destinations } from "@/data/lapland-data";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore Finnish Lapland's top destinations — Rovaniemi, Levi, Saariselkä and Ylläs.",
};

export default function DestinationsPage() {
  return (
    <>
      <section
        className="relative px-6 py-20"
        style={{
          background:
            "linear-gradient(135deg, #0A0F1E 0%, #0D1B2A 60%, #0F2235 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow mb-4">Destinations</p>
          <h1
            className="font-display italic"
            style={{
              fontSize: "clamp(40px, 6vw, 64px)",
              color: "var(--frost)",
              fontWeight: 500,
            }}
          >
            Where do you want to go?
          </h1>
          <p className="mt-4 text-lg max-w-xl" style={{ color: "var(--muted)" }}>
            Four distinct corners of Finnish Lapland. Each one different. All unforgettable.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {destinations.map((dest) => {
            const Icon = dest.icon;
            return (
              <Link key={dest.slug} href={`/destinations/${dest.slug}`} className="card-glass p-8 block">
                <div className="flex items-start justify-between mb-6">
                  <Icon size={32} style={{ color: "var(--ice)" }} />
                  <span className="badge-chip">{dest.badge}</span>
                </div>
                <h2
                  className="font-display text-3xl font-semibold mb-2"
                  style={{ color: "var(--frost)" }}
                >
                  {dest.name}
                </h2>
                <p className="text-sm mb-2" style={{ color: "var(--muted)" }}>
                  {dest.tagline}
                </p>
                <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
                  Known for: {dest.knownFor}
                </p>
                <span
                  className="flex items-center gap-2 text-sm font-medium"
                  style={{ color: "var(--ice)" }}
                >
                  Explore {dest.name} <ArrowRight size={14} />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
