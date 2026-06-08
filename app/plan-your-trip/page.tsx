import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import PlanForm from "@/components/PlanForm";
import { editorialHero, heroPhotography } from "@/data/editorial-visuals";

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
        className="relative flex min-h-[70vh] items-end overflow-hidden px-6 py-24 sm:py-32"
        style={editorialHero(heroPhotography.cabinGlow)}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(77,255,160,0.15),transparent_32%)]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="eyebrow mb-5">Plan your trip</p>
          <h1
            className="font-display max-w-5xl italic leading-[0.9] tracking-[-0.045em]"
            style={{ fontSize: "clamp(64px, 10vw, 132px)", color: "var(--frost)", fontWeight: 500 }}
          >
            Get the free Lapland
            <br />
            trip planner
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[rgba(240,237,232,0.72)]">
            Tell us when you&apos;re going and what you want to do — we&apos;ll send you the guide.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div className="rounded-[2rem] border border-[rgba(240,237,232,0.12)] bg-[rgba(7,16,31,0.76)] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            <PlanForm />
          </div>

          <aside className="self-start overflow-hidden rounded-[2rem] border border-[rgba(240,237,232,0.12)] bg-[rgba(7,16,31,0.72)] shadow-2xl backdrop-blur-xl">
            <div className="h-52 bg-[linear-gradient(145deg,rgba(3,7,18,0.52),rgba(77,255,160,0.12)),url('https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
            <div className="p-8">
              <p className="eyebrow mb-5">What&apos;s in the guide</p>
              <ul className="space-y-4">
                {guideIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="mt-1 shrink-0 text-[var(--aurora)]" />
                    <span className="text-sm leading-6 text-[var(--frost)]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 border-t border-[rgba(168,216,234,0.08)] pt-6 text-xs leading-6 text-[rgba(240,237,232,0.46)]">
                No spam. Unsubscribe anytime. Trusted by 12,000+ travellers.
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
