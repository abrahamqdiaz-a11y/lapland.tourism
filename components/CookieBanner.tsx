"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("lg-cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("lg-cookie-consent", "accepted");
    setVisible(false);
  }

  function reject() {
    localStorage.setItem("lg-cookie-consent", "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      style={{
        background: "var(--deep-navy)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <p className="text-sm max-w-xl" style={{ color: "var(--muted)" }}>
        We use cookies to understand how visitors use this site. No data is shared with third parties.{" "}
        <a href="/privacy" style={{ color: "var(--ice)" }} className="underline">
          Privacy policy
        </a>
      </p>
      <div className="flex gap-3 flex-shrink-0">
        <button onClick={accept} className="btn-primary text-sm py-2 px-5">
          Accept all
        </button>
        <button onClick={reject} className="btn-secondary text-sm py-2 px-5">
          Reject non-essential
        </button>
      </div>
    </div>
  );
}
