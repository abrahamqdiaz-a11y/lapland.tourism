import type { Metadata } from "next";
import { editorialHero, heroPhotography } from "@/data/editorial-visuals";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Lapland Guide privacy policy — how we collect, use and protect your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <section
        className="relative flex min-h-[58vh] items-end overflow-hidden px-6 py-24 sm:py-32"
        style={editorialHero(heroPhotography.winterRoad)}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(201,214,223,0.12),transparent_32%)]" />
        <div className="relative z-10 mx-auto w-full max-w-5xl">
          <p className="eyebrow mb-5">Legal</p>
          <h1
            className="font-display italic leading-[0.9] tracking-[-0.045em]"
            style={{ fontSize: "clamp(58px, 9vw, 112px)", color: "var(--frost)", fontWeight: 500 }}
          >
            Privacy Policy
          </h1>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[rgba(248,250,252,0.48)]">
            Last updated: January 2025
          </p>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl space-y-6">
          {[
            {
              title: "Who we are",
              body: (
                <p>
                  Lapland Guide is operated by EchelonFox, based in Helsinki, Finland. We publish
                  independent travel content about Finnish Lapland. Contact us at{" "}
                  <a href="mailto:hello@laplandguide.com" style={{ color: "var(--ice)" }}>
                    hello@laplandguide.com
                  </a>
                </p>
              ),
            },
            {
              title: "What we collect",
              body: (
                <>
                  <p>
                    We collect your email address if you sign up for our newsletter or trip planner. We
                    may also collect analytics data (pages viewed, time on site, approximate location by
                    country) to understand how the site is used.
                  </p>
                  <p>
                    We use cookies for essential site functionality and, with your consent, for analytics.
                    Your cookie preference is stored in your browser under the key{" "}
                    <code style={{ color: "var(--ice)" }}>lg-cookie-consent</code>.
                  </p>
                </>
              ),
            },
            {
              title: "Why we collect it",
              body: (
                <p>
                  Email: to send you the trip planner and, if you have consented, occasional travel
                  updates about Finnish Lapland. Analytics: to improve the content and structure of this
                  site.
                </p>
              ),
            },
            {
              title: "How long we keep it",
              body: (
                <p>
                  Email address: until you unsubscribe, after which it is permanently deleted within 30
                  days. Analytics data: retained for 14 months, then automatically deleted.
                </p>
              ),
            },
            {
              title: "Your rights",
              body: (
                <p>
                  Under GDPR, you have the right to access, correct or delete your personal data, and
                  to withdraw consent at any time. To exercise these rights, email us at{" "}
                  <a href="mailto:hello@laplandguide.com" style={{ color: "var(--ice)" }}>
                    hello@laplandguide.com
                  </a>
                </p>
              ),
            },
            {
              title: "Third parties",
              body: (
                <p>
                  We do not sell your data. We do not share your personal information with third parties
                  except as required to operate our email service. Operator listings are paid placements —
                  clicking through to an operator&apos;s website is subject to that operator&apos;s own
                  privacy policy.
                </p>
              ),
            },
            {
              title: "Contact",
              body: (
                <p>
                  For any privacy-related questions:{" "}
                  <a href="mailto:hello@laplandguide.com" style={{ color: "var(--ice)" }}>
                    hello@laplandguide.com
                  </a>
                </p>
              ),
            },
          ].map((section) => (
            <div
              key={section.title}
              className="rounded-[2rem] border border-[rgba(248,250,252,0.1)] bg-[rgba(11,31,53,0.66)] p-7 shadow-2xl backdrop-blur-xl sm:p-9"
            >
              <h2 className="font-display mb-5 text-3xl font-medium italic text-[var(--frost)]">
                {section.title}
              </h2>
              <div className="prose-lapland">{section.body}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
