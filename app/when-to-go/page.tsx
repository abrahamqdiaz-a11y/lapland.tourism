import type { Metadata } from "next";
import { seasons, activities } from "@/data/lapland-data";

export const metadata: Metadata = {
  title: "When to Go",
  description:
    "Finnish Lapland season guide — the best time to visit for aurora, snow safaris and winter activities.",
};

export default function WhenToGoPage() {
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
          <p className="eyebrow mb-4">When to go</p>
          <h1
            className="font-display italic"
            style={{
              fontSize: "clamp(40px, 6vw, 64px)",
              color: "var(--frost)",
              fontWeight: 500,
            }}
          >
            Every season has its magic
          </h1>
          <p className="mt-4 text-lg max-w-xl" style={{ color: "var(--muted)" }}>
            Finnish Lapland rewards visitors year-round. Here&apos;s how to pick the right window for your trip.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {seasons.map((season) => (
            <div key={season.title} className="card-glass p-8">
              <p className="eyebrow mb-2">{season.title}</p>
              <h2
                className="font-display text-3xl font-semibold mb-4"
                style={{ color: "var(--frost)" }}
              >
                {season.label}
              </h2>
              <p className="mb-6" style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                {season.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {season.activities.map((a) => (
                  <span key={a} className="badge-chip">{a}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20" style={{ borderTop: "1px solid rgba(168,216,234,0.08)" }}>
        <div className="max-w-6xl mx-auto pt-12">
          <p className="eyebrow mb-3">Activity season guide</p>
          <h2
            className="font-display mb-8"
            style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "var(--frost)", fontWeight: 600 }}
          >
            Activity × best months
          </h2>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(168,216,234,0.12)" }}
          >
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "rgba(77,255,160,0.06)", borderBottom: "1px solid rgba(77,255,160,0.12)" }}>
                  <th className="text-left p-4 font-semibold" style={{ color: "var(--aurora)" }}>
                    Activity
                  </th>
                  <th className="text-left p-4 font-semibold" style={{ color: "var(--aurora)" }}>
                    Best season
                  </th>
                  <th className="text-left p-4 font-semibold hidden sm:table-cell" style={{ color: "var(--aurora)" }}>
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody>
                {activities.map((act, i) => (
                  <tr
                    key={act.slug}
                    style={{
                      background: i % 2 === 0 ? "rgba(13,27,42,0.6)" : "rgba(13,27,42,0.3)",
                      borderBottom: "1px solid rgba(168,216,234,0.06)",
                    }}
                  >
                    <td className="p-4" style={{ color: "var(--frost)" }}>
                      {act.name}
                    </td>
                    <td className="p-4" style={{ color: "var(--muted)" }}>
                      {act.bestSeason}
                    </td>
                    <td className="p-4 hidden sm:table-cell" style={{ color: "var(--muted)" }}>
                      {act.duration}
                    </td>
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
