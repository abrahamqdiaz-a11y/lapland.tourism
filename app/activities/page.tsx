import type { Metadata } from "next";
import Link from "next/link";
import { activities } from "@/data/lapland-data";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Discover Finnish Lapland's best winter activities — snow safaris, husky safaris, aurora hunting and more.",
};

export default function ActivitiesPage() {
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
          <p className="eyebrow mb-4">Activities</p>
          <h1
            className="font-display italic"
            style={{
              fontSize: "clamp(40px, 6vw, 64px)",
              color: "var(--frost)",
              fontWeight: 500,
            }}
          >
            What do you want to do?
          </h1>
          <p className="mt-4 text-lg max-w-xl" style={{ color: "var(--muted)" }}>
            From snowmobile expeditions to aurora hunts — Finnish Lapland&apos;s signature experiences.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {activities.map((act) => {
            const Icon = act.icon;
            return (
              <Link
                key={act.slug}
                href={`/activities/${act.slug}`}
                className={`card-glass p-6 block ${act.featured ? "card-featured" : ""}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon size={24} style={{ color: act.featured ? "var(--aurora)" : "var(--ice)" }} />
                  {act.badge && (
                    <span className={`badge-chip ${act.featured ? "badge-aurora" : ""}`}>
                      {act.badge}
                    </span>
                  )}
                </div>
                <h2
                  className="font-display text-2xl font-semibold mb-2"
                  style={{ color: "var(--frost)" }}
                >
                  {act.name}
                </h2>
                <p className="text-sm mb-4" style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                  {act.short}
                </p>
                <div className="flex gap-3 text-xs mb-4" style={{ color: "var(--muted)" }}>
                  <span>{act.duration}</span>
                  <span>·</span>
                  <span>{act.priceRange}</span>
                </div>
                <span
                  className="text-sm font-medium"
                  style={{ color: act.featured ? "var(--aurora)" : "var(--ice)" }}
                >
                  Explore →
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
