import Link from "next/link";
import { ArrowRight, CalendarDays, Star } from "lucide-react";
import { destinations } from "@/data/lapland-data";
import { activities } from "@/data/lapland-data";
import { seasons } from "@/data/lapland-data";
import { blogPosts } from "@/data/lapland-data";
import NewsletterForm from "@/components/NewsletterForm";

const destinationPhotography: Record<string, string> = {
  rovaniemi:
    "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=1400&q=80",
  levi: "https://images.unsplash.com/photo-1483168527879-c66136b56105?auto=format&fit=crop&w=1400&q=80",
  saariselka:
    "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?auto=format&fit=crop&w=1400&q=80",
  yllas:
    "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=1400&q=80",
};

const activityPhotography: Record<string, string> = {
  "snow-safari":
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80",
  "husky-safari":
    "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?auto=format&fit=crop&w=1400&q=80",
  "aurora-hunting":
    "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1400&q=80",
  "reindeer-safari":
    "https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=1400&q=80",
  "ice-fishing":
    "https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&w=1400&q=80",
  "skiing-snowboard":
    "https://images.unsplash.com/photo-1551524164-6cf2ac833fb4?auto=format&fit=crop&w=1400&q=80",
};

const seasonMoods = [
  "linear-gradient(145deg, rgba(7,24,39,0.88), rgba(30,58,52,0.62)), url('https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=1400&q=80')",
  "linear-gradient(145deg, rgba(11,31,53,0.85), rgba(166,122,58,0.42)), url('https://images.unsplash.com/photo-1455156218388-5e61b526818b?auto=format&fit=crop&w=1400&q=80')",
  "linear-gradient(145deg, rgba(7,24,39,0.78), rgba(201,214,223,0.28)), url('https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=1400&q=80')",
  "linear-gradient(145deg, rgba(7,24,39,0.75), rgba(218,143,79,0.38)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80')",
];

const blogAccents = ["Aurora file", "Field notes", "Arctic brief"];

// Dream experiences — the emotional hook that leads the page
const dreamExperiences = [
  { icon: "✦", label: "Northern Lights" },
  { icon: "✦", label: "Santa at the Arctic Circle" },
  { icon: "✦", label: "Husky adventures" },
  { icon: "✦", label: "Glass igloo nights" },
  { icon: "✦", label: "Reindeer encounters" },
  { icon: "✦", label: "Snow-covered forests" },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section
        className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 py-28"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(7,24,39,0.92) 0%, rgba(7,24,39,0.62) 52%, rgba(7,24,39,0.08) 100%), linear-gradient(180deg, rgba(7,24,39,0.08) 0%, rgba(7,24,39,0.72) 80%, var(--midnight) 100%), url('/dylan-shaw-94uGO6XrHcc-unsplash.jpg')",
          backgroundPosition: "center 35%",
          backgroundSize: "cover",
        }}
      >
        {/* Aurora glow accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 68% 22%, rgba(84,224,166,0.18), transparent 30%)",
          }}
        />
        {/* Ice-blue top-right accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 88% 8%, rgba(201,214,223,0.12), transparent 22%)",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl pt-16">
          {/* Eyebrow with small trust signal */}
          <div className="mb-6 flex items-center gap-4">
            <p className="eyebrow">Finnish Lapland</p>
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[rgba(84,224,166,0.28)] bg-[rgba(84,224,166,0.06)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--aurora)]">
              <Star size={9} fill="currentColor" /> Trusted by 12,000+ travellers
            </span>
          </div>

          {/* Main headline — experience-first, emotional */}
          <h1
            className="font-display mb-8 max-w-4xl italic leading-[0.86] tracking-[-0.05em]"
            style={{
              fontSize: "clamp(72px, 11vw, 156px)",
              color: "var(--frost)",
              fontWeight: 500,
              textShadow: "0 32px 80px rgba(0,0,0,0.6)",
            }}
          >
            The trip
            <br />
            you&apos;ll never
            <br />
            stop talking about
          </h1>

          {/* Dream experiences — horizontal scroll of tags that sell the feeling */}
          <div className="mb-8 flex flex-wrap gap-2">
            {dreamExperiences.map((exp) => (
              <span
                key={exp.label}
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(201,214,223,0.2)] bg-[rgba(7,24,39,0.48)] px-4 py-2 text-xs font-medium tracking-[0.06em] text-[rgba(248,250,252,0.82)] backdrop-blur-sm"
              >
                <span className="text-[var(--aurora)] text-[8px]">✦</span>
                {exp.label}
              </span>
            ))}
          </div>

          <p
            className="mb-10 max-w-xl text-lg sm:text-xl"
            style={{ color: "rgba(248,250,252,0.72)", lineHeight: 1.8 }}
          >
            The independent guide to Finnish Lapland — experiences, destinations
            and trusted operators, all in one place.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/activities"
              className="inline-flex items-center gap-3 rounded-full border border-[rgba(84,224,166,0.42)] bg-[rgba(84,224,166,0.92)] px-7 py-4 text-sm font-semibold tracking-[0.04em] text-[#071827] shadow-[0_0_38px_rgba(84,224,166,0.3)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_56px_rgba(84,224,166,0.46)]"
            >
              Explore experiences <ArrowRight size={16} />
            </Link>
            <Link
              href="/destinations"
              className="inline-flex items-center gap-3 rounded-full border border-[rgba(248,250,252,0.32)] bg-transparent px-7 py-4 text-sm font-semibold tracking-[0.04em] text-[var(--frost)] transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(248,250,252,0.65)] hover:bg-[rgba(248,250,252,0.06)]"
            >
              Find your destination
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-[rgba(248,250,252,0.48)] sm:flex">
          <span>Scroll</span>
          <span className="h-12 w-px bg-gradient-to-b from-[rgba(248,250,252,0.6)] to-transparent" />
        </div>
      </section>

      {/* ─── DREAM STRIP — emotional bridge between hero and destinations ─── */}
      <section
        className="relative overflow-hidden px-6 py-20 sm:py-28"
        style={{
          background: "linear-gradient(180deg, var(--midnight) 0%, rgba(14,38,62,1) 50%, var(--midnight) 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(84,224,166,0.07), transparent 60%)" }} />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {[
              {
                eyebrow: "The northern lights",
                headline: "Watch the sky come alive above a frozen lake",
                body: "Finnish Lapland sits in the Aurora Borealis zone. Between September and March, clear nights deliver nature's greatest light show — reflected in the snow below you.",
                accent: "var(--aurora)",
                image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1200&q=85",
                cta: "Aurora hunting guides",
                href: "/activities/aurora-hunting",
              },
              {
                eyebrow: "Santa Claus Village",
                headline: "Meet Santa Claus — actually, at the Arctic Circle",
                body: "Rovaniemi sits exactly on the Arctic Circle. It's where Santa's official village lives. The children's faces when they cross that line? Unforgettable.",
                accent: "var(--ice)",
                image: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=1200&q=85",
                cta: "Plan a Rovaniemi trip",
                href: "/destinations/rovaniemi",
              },
              {
                eyebrow: "Husky safaris",
                headline: "Race through snow-covered forests at dawn",
                body: "Before the world wakes up, you're gliding through ancient pine forest behind a team of huskies. The silence, the cold air, the speed — it stays with you.",
                accent: "#C9D6DF",
                image: "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?auto=format&fit=crop&w=1200&q=85",
                cta: "Husky safari operators",
                href: "/activities/husky-safari",
              },
            ].map((card) => (
              <Link
                key={card.headline}
                href={card.href}
                className="group relative flex min-h-[520px] overflow-hidden rounded-[2rem] border border-[rgba(248,250,252,0.1)] bg-[#071827] shadow-2xl transition duration-500 hover:-translate-y-2"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-108"
                  style={{
                    backgroundImage: `url('${card.image}')`,
                    filter: "saturate(1.1) contrast(1.05) brightness(0.65)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,24,39,0.97)] via-[rgba(7,24,39,0.35)] to-[rgba(7,24,39,0.08)]" />
                {/* Colored glow at top matching accent */}
                <div
                  className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                  style={{ background: `radial-gradient(circle at 50% 0%, rgba(84,224,166,0.15), transparent 40%)` }}
                />
                <div className="relative z-10 mt-auto p-8">
                  <p className="eyebrow mb-4" style={{ color: "rgba(248,250,252,0.5)" }}>{card.eyebrow}</p>
                  <h3
                    className="font-display mb-4 italic leading-tight text-[var(--frost)]"
                    style={{ fontSize: "clamp(26px,2.8vw,36px)", fontWeight: 500 }}
                  >
                    {card.headline}
                  </h3>
                  <p className="mb-7 text-sm leading-7 text-[rgba(248,250,252,0.64)]">
                    {card.body}
                  </p>
                  <span
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 group-hover:gap-3"
                    style={{ color: card.accent }}
                  >
                    {card.cta} <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DESTINATIONS ─── */}
      <section className="relative px-6 py-24 sm:py-32 section-divider">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, var(--midnight), #071827 45%, var(--midnight))",
          }}
        />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between gap-8">
            <div>
              <p className="eyebrow mb-4">Destinations</p>
              <h2
                className="font-display max-w-3xl leading-none tracking-[-0.03em]"
                style={{
                  fontSize: "clamp(42px, 6vw, 82px)",
                  color: "var(--frost)",
                  fontWeight: 500,
                }}
              >
                Four destinations.
                <br />
                One extraordinary region.
              </h2>
            </div>
            <Link
              href="/destinations"
              className="hidden items-center gap-2 rounded-full border border-[rgba(201,214,223,0.22)] px-5 py-3 text-sm text-[var(--ice)] transition hover:border-[rgba(201,214,223,0.55)] sm:flex"
            >
              Compare all destinations <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {destinations.map((dest, index) => {
              const Icon = dest.icon;
              return (
                <Link
                  key={dest.slug}
                  href={`/destinations/${dest.slug}`}
                  className={`group relative flex min-h-[430px] overflow-hidden rounded-[2rem] border border-[rgba(248,250,252,0.1)] bg-[#071827] shadow-2xl transition duration-500 hover:-translate-y-2 hover:border-[rgba(201,214,223,0.38)] md:min-h-[520px] ${
                    index === 0 ? "xl:mt-16" : index === 2 ? "xl:mt-10" : ""
                  }`}
                >
                  <div
                    className="absolute inset-0 scale-100 bg-cover bg-center transition duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${destinationPhotography[dest.slug]}')`,
                      filter: "saturate(1.08) contrast(1.06) brightness(0.88)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,24,39,0.94)] via-[rgba(7,24,39,0.14)] to-transparent" />
                  <div className="relative z-10 mt-auto w-full p-7">
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <span className="badge-chip">{dest.badge}</span>
                      <span className="rounded-full border border-[rgba(248,250,252,0.18)] bg-[rgba(7,24,39,0.6)] p-3 text-[var(--ice)]">
                        <Icon size={20} />
                      </span>
                    </div>
                    <h3 className="font-display mb-2 text-4xl font-medium italic leading-none text-[var(--frost)]">
                      {dest.name}
                    </h3>
                    <p className="mb-5 text-sm leading-6 text-[rgba(248,250,252,0.68)]">
                      {dest.tagline}
                    </p>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ice)] transition-all duration-300 group-hover:text-[var(--aurora)]">
                      Explore → 
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-6 flex sm:hidden">
            <Link href="/destinations" className="flex items-center gap-1 text-sm" style={{ color: "var(--ice)" }}>
              Compare all destinations <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WINTER WONDERLAND — Snow White section, elevated ─── */}
      <section
        className="relative overflow-hidden px-6 py-24 sm:py-36"
        style={{ background: "linear-gradient(180deg, #EEF5F9 0%, #F4F8FB 50%, #EBF2F6 100%)" }}
      >
        {/* Decorative snow crystals */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          {[
            { size: 320, top: "-6%", left: "-4%", opacity: 0.22 },
            { size: 220, top: "8%", right: "-3%", opacity: 0.16 },
            { size: 160, bottom: "10%", left: "38%", opacity: 0.12 },
            { size: 260, bottom: "-8%", right: "8%", opacity: 0.18 },
          ].map((s, i) => (
            <svg
              key={i}
              width={s.size}
              height={s.size}
              viewBox="0 0 120 120"
              fill="none"
              style={{
                position: "absolute",
                top: s.top,
                left: s.left,
                right: (s as { right?: string }).right,
                bottom: (s as { bottom?: string }).bottom,
                opacity: s.opacity,
              }}
            >
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <g key={deg} transform={`rotate(${deg} 60 60)`}>
                  <line x1="60" y1="10" x2="60" y2="110" stroke="#8BB8C8" strokeWidth="3" strokeLinecap="round" />
                  <line x1="60" y1="32" x2="42" y2="22" stroke="#8BB8C8" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="60" y1="32" x2="78" y2="22" stroke="#8BB8C8" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="60" y1="58" x2="38" y2="46" stroke="#8BB8C8" strokeWidth="2" strokeLinecap="round" />
                  <line x1="60" y1="58" x2="82" y2="46" stroke="#8BB8C8" strokeWidth="2" strokeLinecap="round" />
                </g>
              ))}
              <circle cx="60" cy="60" r="5" fill="#8BB8C8" />
            </svg>
          ))}
        </div>

        <div className="relative mx-auto max-w-7xl">
          {/* Heading — wonder-led */}
          <div className="mb-16 max-w-3xl">
            <p className="eyebrow mb-4" style={{ color: "rgba(11,31,53,0.42)" }}>
              The experience
            </p>
            <h2
              className="font-display leading-none tracking-[-0.03em]"
              style={{
                fontSize: "clamp(42px, 6vw, 82px)",
                color: "var(--snow-text)",
                fontWeight: 500,
              }}
            >
              The silence.
              <br />
              The snow.
              <br />
              The lights above.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8" style={{ color: "rgba(11,31,53,0.62)" }}>
              Nothing prepares you for a Finnish Lapland winter. It has to be experienced.
            </p>
          </div>

          {/* Wonder stats — reframed as wonder facts, not statistics */}
          <div className="mb-16 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {[
              { value: "200+", label: "cm of fresh snow blankets the forest each winter" },
              { value: "200+", label: "nights each year with Northern Lights visibility" },
              { value: "−30°", label: "C nights so cold, breath becomes visible art" },
              { value: "24hrs", label: "of polar night — darkness made for stargazing" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.5rem] border p-6 shadow-sm"
                style={{
                  background: "rgba(255,255,255,0.75)",
                  borderColor: "rgba(139,184,200,0.35)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <p
                  className="font-display mb-2 leading-none tracking-tight"
                  style={{ fontSize: "clamp(36px,5vw,60px)", color: "var(--snow-text)", fontWeight: 500 }}
                >
                  {stat.value}
                </p>
                <p className="text-xs leading-5" style={{ color: "rgba(11,31,53,0.52)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Feature cards — experience-framed */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                eyebrow: "Step inside the forest",
                title: "Snow so deep it bends the pines",
                body: "Lapland's forests carry more snow than anywhere else in Europe. Walk beneath trees bowed under the weight of it. The silence is total. The cold is clean.",
                accent: "rgba(139,184,200,0.6)",
                link: "/activities/snow-safari",
                linkLabel: "Snow safari experiences",
              },
              {
                eyebrow: "Look up",
                title: "Aurora above white fields",
                body: "The Northern Lights reflected in fresh snow is Lapland's defining image. Dark skies, zero light pollution, and the green ribbon moving above you. Some moments can't be described.",
                accent: "rgba(84,224,166,0.5)",
                link: "/activities/aurora-hunting",
                linkLabel: "Aurora hunting guides",
              },
              {
                eyebrow: "Sleep differently",
                title: "Glass igloos beneath the stars",
                body: "Fall asleep watching the night sky from inside a heated glass pod. Wake at 3am to find the aurora directly above you. Lapland's best accommodations were designed for exactly this moment.",
                accent: "rgba(139,184,200,0.4)",
                link: "/destinations/saariselka",
                linkLabel: "Best igloo destinations",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group relative overflow-hidden rounded-[2rem] border p-8 shadow-md transition duration-500 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background: "rgba(255,255,255,0.84)",
                  borderColor: "rgba(139,184,200,0.32)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  className="absolute inset-x-0 top-0 h-[3px]"
                  style={{ background: `linear-gradient(90deg, ${card.accent}, transparent)` }}
                />
                <p className="eyebrow mb-5" style={{ color: "rgba(11,31,53,0.38)" }}>
                  {card.eyebrow}
                </p>
                <h3
                  className="font-display mb-4 italic leading-tight"
                  style={{ fontSize: "clamp(24px,2.8vw,32px)", color: "var(--snow-text)", fontWeight: 500 }}
                >
                  {card.title}
                </h3>
                <p className="mb-6 text-sm leading-7" style={{ color: "rgba(11,31,53,0.58)" }}>
                  {card.body}
                </p>
                <Link
                  href={card.link}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 group-hover:gap-3"
                  style={{ color: "var(--deep-navy)" }}
                >
                  {card.linkLabel} <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ACTIVITIES ─── */}
      <section className="relative px-6 py-24 sm:py-32 section-divider">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="eyebrow mb-4">Experiences</p>
            <h2
              className="font-display leading-none tracking-[-0.03em]"
              style={{
                fontSize: "clamp(42px, 6vw, 82px)",
                color: "var(--frost)",
                fontWeight: 500,
              }}
            >
              What do you want
              <br />
              to feel?
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-6">
            {activities.map((act, index) => {
              const Icon = act.icon;
              const featured = act.featured;
              return (
                <Link
                  key={act.slug}
                  href={`/activities/${act.slug}`}
                  className={`group relative flex min-h-[360px] overflow-hidden rounded-[2rem] border bg-[#071827] shadow-2xl transition duration-500 hover:-translate-y-2 ${
                    featured
                      ? "border-[rgba(84,224,166,0.36)] lg:col-span-4 lg:min-h-[560px]"
                      : "border-[rgba(248,250,252,0.1)] lg:col-span-2 lg:min-h-[360px]"
                  } ${index === 1 || index === 4 ? "lg:translate-y-10" : ""}`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${activityPhotography[act.slug]}')`,
                      filter: "saturate(1.05) contrast(1.06) brightness(0.88)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,24,39,0.93)] via-[rgba(7,24,39,0.10)] to-transparent" />
                  {featured && (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_32%_20%,rgba(84,224,166,0.2),transparent_32%)]" />
                  )}
                  <div className="relative z-10 mt-auto p-7 sm:p-8">
                    <div className="mb-5 flex items-center gap-3">
                      <span
                        className={`rounded-full border bg-[rgba(7,24,39,0.65)] p-3 ${
                          featured
                            ? "border-[rgba(84,224,166,0.34)] text-[var(--aurora)]"
                            : "border-[rgba(201,214,223,0.22)] text-[var(--ice)]"
                        }`}
                      >
                        <Icon size={20} />
                      </span>
                      {act.badge && (
                        <span className={`badge-chip ${featured ? "badge-aurora" : ""}`}>
                          {act.badge}
                        </span>
                      )}
                    </div>
                    <h3
                      className={`font-display mb-3 font-medium italic leading-none text-[var(--frost)] ${
                        featured ? "text-5xl sm:text-6xl" : "text-4xl"
                      }`}
                    >
                      {act.name}
                    </h3>
                    <p className="mb-5 max-w-lg text-sm leading-7 text-[rgba(248,250,252,0.68)]">
                      {act.short}
                    </p>
                    <span
                      className={`text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 group-hover:gap-3 ${
                        featured ? "text-[var(--aurora)]" : "text-[var(--ice)]"
                      }`}
                    >
                      Find operators →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SEASONS ─── */}
      <section className="px-6 py-24 sm:py-32 section-divider">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex max-w-4xl flex-col gap-4">
            <p className="eyebrow">When to go</p>
            <h2
              className="font-display leading-none tracking-[-0.03em]"
              style={{
                fontSize: "clamp(42px, 6vw, 82px)",
                color: "var(--frost)",
                fontWeight: 500,
              }}
            >
              Every season
              <br />
              has its magic
            </h2>
          </div>
          <div className="overflow-hidden rounded-[2.25rem] border border-[rgba(248,250,252,0.1)] bg-[#071827] shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-4">
              {seasons.map((season, index) => (
                <div
                  key={season.title}
                  className="relative min-h-[420px] border-b border-[rgba(248,250,252,0.1)] bg-cover bg-center p-7 lg:border-b-0 lg:border-r last:lg:border-r-0 lg:border-[rgba(248,250,252,0.1)]"
                  style={{ backgroundImage: seasonMoods[index] }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,24,39,0.8)] via-transparent to-[rgba(7,24,39,0.18)]" />
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <p className="eyebrow">{season.title}</p>
                    <div>
                      <h3 className="font-display mb-4 text-4xl font-medium italic leading-none text-[var(--frost)]">
                        {season.label}
                      </h3>
                      <p className="mb-6 text-sm leading-7 text-[rgba(248,250,252,0.7)]">
                        {season.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {season.activities.map((a) => (
                          <span key={a} className="badge-chip">
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/when-to-go"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(201,214,223,0.22)] px-5 py-3 text-sm text-[var(--ice)] transition hover:border-[rgba(201,214,223,0.55)]"
            >
              Full seasonal guide →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PLANNING TRUST SECTION — answers the "but wait" questions ─── */}
      <section
        className="relative overflow-hidden px-6 py-24 sm:py-32 section-divider"
        style={{ background: "linear-gradient(180deg, var(--midnight), rgba(10,30,52,1) 50%, var(--midnight))" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 20% 50%, rgba(201,214,223,0.05), transparent 40%)" }} />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="eyebrow mb-4">Planning intelligence</p>
            <h2
              className="font-display max-w-3xl leading-none tracking-[-0.03em]"
              style={{
                fontSize: "clamp(38px, 5.5vw, 72px)",
                color: "var(--frost)",
                fontWeight: 500,
              }}
            >
              Everything you need to know
              <br />
              before you go
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                q: "When is the best time to visit?",
                a: "November to March for snow and aurora. December for Christmas magic. January–February for the deepest winter. March for long bright days on the snow.",
              },
              {
                q: "Can I actually see the Northern Lights?",
                a: "Finnish Lapland sits in the Aurora Borealis zone. Clear nights between September and March offer strong aurora probability. Most visitors on a 5-night trip see them at least once.",
              },
              {
                q: "How cold is it in Lapland?",
                a: "Expect −5°C to −20°C in deep winter. On the coldest nights, −30°C. All reputable operators provide full thermal gear — you won't be cold unless you want to be.",
              },
              {
                q: "How many days should I stay?",
                a: "Five to seven nights is the sweet spot. Enough time for 3–4 activities, an aurora hunt, and a rest day. Three nights is the minimum for a meaningful trip.",
              },
              {
                q: "Which destination is right for me?",
                a: "Rovaniemi for families and Santa. Levi for skiing and nightlife. Saariselkä for wilderness and glass igloos. Ylläs for quiet adventure and premium accommodation.",
              },
              {
                q: "Is Lapland only for winter?",
                a: "No — midnight sun in summer is extraordinary. But winter is Lapland's signature season. Snow, aurora, huskies, reindeer: they're all winter experiences.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-[1.75rem] border border-[rgba(248,250,252,0.08)] bg-[rgba(11,31,53,0.58)] p-7 backdrop-blur-sm"
              >
                <h3 className="font-display mb-3 text-xl font-medium italic text-[var(--frost)]">
                  {item.q}
                </h3>
                <p className="text-sm leading-7 text-[rgba(248,250,252,0.62)]">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/plan-your-trip"
              className="inline-flex items-center gap-3 rounded-full border border-[rgba(84,224,166,0.36)] bg-[rgba(84,224,166,0.08)] px-6 py-3.5 text-sm font-semibold tracking-[0.04em] text-[var(--aurora)] transition hover:bg-[rgba(84,224,166,0.14)]"
            >
              Get the complete trip planner <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── BLOG ─── */}
      <section className="px-6 py-24 sm:py-32 section-divider">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between gap-8">
            <div>
              <p className="eyebrow mb-4">From the guide</p>
              <h2
                className="font-display leading-none tracking-[-0.03em]"
                style={{
                  fontSize: "clamp(42px, 6vw, 82px)",
                  color: "var(--frost)",
                  fontWeight: 500,
                }}
              >
                Planning advice from people
                <br className="hidden sm:block" /> who keep going back
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden items-center gap-2 rounded-full border border-[rgba(201,214,223,0.22)] px-5 py-3 text-sm text-[var(--ice)] transition hover:border-[rgba(201,214,223,0.55)] sm:flex"
            >
              All articles <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative min-h-[430px] overflow-hidden rounded-[2rem] border border-[rgba(248,250,252,0.1)] bg-[rgba(248,250,252,0.92)] p-7 text-[#071827] shadow-2xl transition duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[rgba(84,224,166,0.75)] via-[rgba(201,214,223,0.55)] to-transparent" />
                <div className="flex h-full flex-col">
                  <div className="mb-10 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-[rgba(11,31,53,0.14)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#071827]">
                      {post.category}
                    </span>
                    <span className="text-xs uppercase tracking-[0.18em] text-[rgba(11,31,53,0.48)]">
                      {post.date}
                    </span>
                  </div>
                  <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[rgba(11,31,53,0.46)]">
                    {blogAccents[index]}
                  </p>
                  <h3 className="font-display mb-5 text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-[#071827]">
                    {post.title}
                  </h3>
                  <p className="mb-8 text-sm leading-7 text-[rgba(11,31,53,0.66)]">
                    {post.excerpt}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#071827]">
                    Read more <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 flex sm:hidden">
            <Link href="/blog" className="flex items-center gap-1 text-sm" style={{ color: "var(--ice)" }}>
              All articles <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── EMAIL CAPTURE ─── */}
      <section
        className="px-6 py-24 sm:py-32 section-divider"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(84,224,166,0.14), transparent 32%), linear-gradient(180deg, #071827, var(--midnight))",
        }}
      >
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-[rgba(248,250,252,0.1)] bg-[rgba(11,31,53,0.72)] p-8 text-center shadow-2xl backdrop-blur-xl sm:p-14 lg:p-20">
          <div className="mb-6 flex justify-center">
            <span className="rounded-full border border-[rgba(84,224,166,0.28)] bg-[rgba(84,224,166,0.08)] p-4 text-[var(--aurora)] shadow-[0_0_32px_rgba(84,224,166,0.16)]">
              <CalendarDays size={30} />
            </span>
          </div>
          <h2
            className="font-display mx-auto mb-4 max-w-3xl italic leading-none tracking-[-0.03em]"
            style={{
              fontSize: "clamp(44px, 7vw, 92px)",
              color: "var(--frost)",
              fontWeight: 500,
            }}
          >
            Get the free Lapland
            <br />
            trip planner
          </h2>
          <p className="mx-auto mb-3 max-w-xl text-lg leading-8 text-[rgba(248,250,252,0.72)]">
            Best time to go. Right operators. What to pack. How much to budget.
          </p>
          <p className="mx-auto mb-10 max-w-xl text-sm leading-7 text-[rgba(248,250,252,0.46)]">
            Everything first-time visitors wish they&apos;d known — straight to your inbox.
          </p>
          <div className="mx-auto max-w-2xl">
            <NewsletterForm />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["No spam", "Unsubscribe anytime", "12,000+ readers"].map((t) => (
              <span key={t} className="badge-chip">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
