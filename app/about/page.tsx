"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function AboutPage() {
  useEffect(() => {
    if (window.location.hash === "#how-it-works") {
      const el = document.getElementById("how-it-works");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

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
          <p className="eyebrow mb-4">About</p>
          <h1
            className="font-display italic"
            style={{
              fontSize: "clamp(40px, 6vw, 64px)",
              color: "var(--frost)",
              fontWeight: 500,
            }}
          >
            About Lapland Guide
          </h1>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="prose-lapland space-y-5 mb-16">
            <p>
              Lapland Guide is an independent travel resource for Finnish Lapland. We write guides,
              destination pages and seasonal advice for travellers planning trips to one of the
              world&apos;s most extraordinary winter destinations.
            </p>
            <p>
              We&apos;re not a travel agency, a tour operator, or a booking engine. We&apos;re a
              publication. Our job is to help you understand Finnish Lapland well enough to plan a
              trip that delivers what it promises.
            </p>
            <p>
              Questions or feedback? Reach us at{" "}
              <a href="mailto:hello@laplandguide.com" style={{ color: "var(--ice)" }}>
                hello@laplandguide.com
              </a>
            </p>
          </div>

          <section
            id="how-it-works"
            className="p-8 rounded-2xl"
            style={{
              background: "rgba(13,27,42,0.8)",
              border: "1px solid rgba(168,216,234,0.12)",
            }}
          >
            <p className="eyebrow mb-4">How this site works</p>
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: "var(--frost)" }}
            >
              Commercial relationships &amp; editorial independence
            </h2>
            <p style={{ color: "rgba(240,237,232,0.85)", lineHeight: 1.8 }}>
              Operators featured on Lapland Guide pay a placement fee to appear on this site. Our
              editorial content — guides, destination pages and seasonal advice — is written
              independently and is not influenced by commercial relationships.
            </p>
            <p className="mt-4" style={{ color: "rgba(240,237,232,0.85)", lineHeight: 1.8 }}>
              Paid operator placements are always clearly marked with a &quot;Paid partner&quot; label.
              If a page shows an operator, that operator has paid for placement. If it doesn&apos;t,
              we haven&apos;t found one we can recommend yet.
            </p>
            <div className="mt-6">
              <Link href="/privacy" className="text-sm" style={{ color: "var(--ice)" }}>
                Read our privacy policy →
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
