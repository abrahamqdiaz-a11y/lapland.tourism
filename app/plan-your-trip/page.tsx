import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import PlanForm from "@/components/PlanForm";

export const metadata: Metadata = {
  title: "Plan Your Trip",
  description:
    "Get the free Lapland trip planner — best operators, budgets and packing list for Finnish Lapland.",
};

const guideIncludes = [
  "Best-value operators for every activity",
  "Month-by-month budget breakdown",
  "Arctic packing list",
  "Booking timeline guide",
  "Which destinations suit which travellers",
];

export default function PlanYourTripPage() {
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
          <p className="eyebrow mb-4">Plan your trip</p>
          <h1
            className="font-display italic"
            style={{
              fontSize: "clamp(40px, 6vw, 64px)",
              color: "var(--frost)",
              fontWeight: 500,
            }}
          >
            Get the free Lapland
            <br />
            trip planner
          </h1>
          <p className="mt-4 text-lg max-w-xl" style={{ color: "var(--muted)" }}>
            Tell us when you&apos;re going and what you want to do — we&apos;ll send you the guide.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <PlanForm />
          </div>

          <aside className="card-glass p-8 self-start">
            <p className="eyebrow mb-4">What&apos;s in the guide</p>
            <ul className="space-y-4">
              {guideIncludes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} style={{ color: "var(--aurora)", flexShrink: 0, marginTop: 2 }} />
                  <span className="text-sm" style={{ color: "var(--frost)" }}>{item}</span>
                </li>
              ))}
            </ul>
            <div
              className="mt-6 pt-6 text-xs"
              style={{ borderTop: "1px solid rgba(168,216,234,0.08)", color: "var(--muted)" }}
            >
              No spam. Unsubscribe anytime. Trusted by 12,000+ travellers.
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
