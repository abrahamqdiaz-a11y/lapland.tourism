"use client";

import { useEffect } from "react";
import Link from "next/link";
import { editorialHero, heroPhotography } from "@/data/editorial-visuals";

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
        className="relative flex min-h-[66vh] items-end overflow-hidden px-6 py-24 sm:py-32"
        style={editorialHero(heroPhotography.winterRoad)}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(168,216,234,0.13),transparent_32%)]" />
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <p className="eyebrow mb-5">About</p>
          <h1
            className="font-display max-w-4xl italic leading-[0.9] tracking-[-0.045em]"
            style={{ fontSize: "clamp(64px, 10vw, 132px)", color: "var(--frost)", fontWeight: 500 }}
          >
            About Lapland Guide
          </h1>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="prose-lapland mb-16 space-y-5 text-lg">
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
            className="overflow-hidden rounded-[2rem] border border-[rgba(240,237,232,0.12)] bg-[rgba(7,16,31,0.74)] p-8 shadow-2xl backdrop-blur-xl sm:p-10"
          >
            <p className="eyebrow mb-5">How this site works</p>
            <h2 className="font-display mb-5 text-4xl font-medium italic leading-none text-[var(--frost)]">
              Commercial relationships &amp; editorial independence
            </h2>
            <p className="leading-8 text-[rgba(240,237,232,0.82)]">
              Operators featured on Lapland Guide pay a placement fee to appear on this site. Our
              editorial content — guides, destination pages and seasonal advice — is written
              independently and is not influenced by commercial relationships.
            </p>
            <p className="mt-5 leading-8 text-[rgba(240,237,232,0.82)]">
              Paid operator placements are always clearly marked with a &quot;Paid partner&quot; label.
              If a page shows an operator, that operator has paid for placement. If it doesn&apos;t,
              we haven&apos;t found one we can recommend yet.
            </p>
            <div className="mt-7">
              <Link href="/privacy" className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ice)]">
                Read our privacy policy →
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
