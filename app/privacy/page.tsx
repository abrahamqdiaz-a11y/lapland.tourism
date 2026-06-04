import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Lapland Guide privacy policy — how we collect, use and protect your data.",
};

export default function PrivacyPage() {
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
          <p className="eyebrow mb-4">Legal</p>
          <h1
            className="font-display italic"
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              color: "var(--frost)",
              fontWeight: 500,
            }}
          >
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm" style={{ color: "var(--muted)" }}>
            Last updated: January 2025
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto prose-lapland space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: "var(--frost)" }}>
              Who we are
            </h2>
            <p>
              Lapland Guide is operated by EchelonFox, based in Helsinki, Finland. We publish
              independent travel content about Finnish Lapland. Contact us at{" "}
              <a href="mailto:hello@laplandguide.com" style={{ color: "var(--ice)" }}>
                hello@laplandguide.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: "var(--frost)" }}>
              What we collect
            </h2>
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
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: "var(--frost)" }}>
              Why we collect it
            </h2>
            <p>
              Email: to send you the trip planner and, if you have consented, occasional travel
              updates about Finnish Lapland. Analytics: to improve the content and structure of this
              site.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: "var(--frost)" }}>
              How long we keep it
            </h2>
            <p>
              Email address: until you unsubscribe, after which it is permanently deleted within 30
              days. Analytics data: retained for 14 months, then automatically deleted.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: "var(--frost)" }}>
              Your rights
            </h2>
            <p>
              Under GDPR, you have the right to access, correct or delete your personal data, and
              to withdraw consent at any time. To exercise these rights, email us at{" "}
              <a href="mailto:hello@laplandguide.com" style={{ color: "var(--ice)" }}>
                hello@laplandguide.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: "var(--frost)" }}>
              Third parties
            </h2>
            <p>
              We do not sell your data. We do not share your personal information with third parties
              except as required to operate our email service. Operator listings are paid placements —
              clicking through to an operator&apos;s website is subject to that operator&apos;s own
              privacy policy.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: "var(--frost)" }}>
              Contact
            </h2>
            <p>
              For any privacy-related questions:{" "}
              <a href="mailto:hello@laplandguide.com" style={{ color: "var(--ice)" }}>
                hello@laplandguide.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
