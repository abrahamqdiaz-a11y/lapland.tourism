"use client";

import { useState } from "react";
import { activities } from "@/data/lapland-data";

export default function PlanForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [month, setMonth] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [consented, setConsented] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function toggleActivity(slug: string) {
    setSelected((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consented || !email) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card-glass p-8 text-center">
        <p className="font-display text-2xl mb-2" style={{ color: "var(--aurora)" }}>
          You&apos;re on the list!
        </p>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          Your personalised trip planner is on its way to your inbox.
        </p>
      </div>
    );
  }

  const months = [
    "November", "December", "January", "February",
    "March", "April", "June", "July", "August",
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="eyebrow block mb-2" htmlFor="name">Your name</label>
        <input
          id="name"
          type="text"
          placeholder="Jane Smith"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label className="eyebrow block mb-2" htmlFor="email">Email address</label>
        <input
          id="email"
          type="email"
          placeholder="jane@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="eyebrow block mb-2" htmlFor="month">When are you travelling?</label>
        <select
          id="month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        >
          <option value="">Select a month</option>
          {months.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>

      <div>
        <p className="eyebrow mb-3">Activities you&apos;re interested in</p>
        <div className="grid grid-cols-2 gap-2">
          {activities.map((act) => {
            const checked = selected.includes(act.slug);
            return (
              <label
                key={act.slug}
                className="flex items-center gap-2 cursor-pointer p-3 rounded-xl text-sm transition-colors"
                style={{
                  background: checked ? "rgba(77,255,160,0.08)" : "rgba(13,27,42,0.6)",
                  border: checked ? "1px solid rgba(77,255,160,0.3)" : "1px solid rgba(168,216,234,0.1)",
                  color: checked ? "var(--aurora)" : "var(--muted)",
                }}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleActivity(act.slug)}
                  className="accent-[#4DFFA0]"
                />
                {act.name}
              </label>
            );
          })}
        </div>
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={consented}
          onChange={(e) => setConsented(e.target.checked)}
          className="mt-1 flex-shrink-0 accent-[#4DFFA0]"
        />
        <span className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
          I agree to receive the Lapland Guide trip planner and occasional travel updates.
          You can unsubscribe at any time.
        </span>
      </label>

      <button
        type="submit"
        disabled={!consented}
        className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
      >
        Send me the guide
      </button>
    </form>
  );
}
