"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [consented, setConsented] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consented || !email) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-6">
        <p className="font-display text-xl" style={{ color: "var(--aurora)" }}>
          You&apos;re on the list.
        </p>
        <p className="text-sm mt-2" style={{ color: "var(--muted)" }}>
          Check your inbox — your trip planner is on its way.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <button
          type="submit"
          disabled={!consented}
          className="btn-primary flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
        >
          Send it
        </button>
      </div>
      <label className="flex items-start gap-3 cursor-pointer text-left">
        <input
          type="checkbox"
          checked={consented}
          onChange={(e) => setConsented(e.target.checked)}
          className="mt-1 flex-shrink-0 accent-[#54E0A6]"
        />
        <span className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
          I agree to receive email updates from Lapland Guide. You can unsubscribe at any time.
        </span>
      </label>
    </form>
  );
}
