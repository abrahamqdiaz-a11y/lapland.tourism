import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/lapland-data";
import { blogAccents, editorialHero, heroPhotography } from "@/data/editorial-visuals";

export const metadata: Metadata = {
  title: "The Guide",
  description: "Planning advice and field notes for Finnish Lapland travel.",
};

export default function BlogPage() {
  return (
    <>
      <section
        className="relative flex min-h-[70vh] items-end overflow-hidden px-6 py-24 sm:py-32"
        style={editorialHero(heroPhotography.cabinGlow)}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(168,216,234,0.13),transparent_32%)]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="eyebrow mb-5">The Guide</p>
          <h1
            className="font-display max-w-5xl italic leading-[0.9] tracking-[-0.045em]"
            style={{ fontSize: "clamp(64px, 10vw, 132px)", color: "var(--frost)", fontWeight: 500 }}
          >
            Planning advice from people who keep going back
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[rgba(240,237,232,0.72)]">
            Practical field notes, seasonal intelligence and honest destination comparisons.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative min-h-[500px] overflow-hidden rounded-[2rem] border border-[rgba(240,237,232,0.1)] bg-[rgba(240,237,232,0.92)] p-7 text-[#07101f] shadow-2xl transition duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[rgba(77,255,160,0.75)] via-[rgba(168,216,234,0.55)] to-transparent" />
              <div className="flex h-full flex-col">
                <div className="mb-12 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-[rgba(7,16,31,0.14)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#07101f]">
                    {post.category}
                  </span>
                  <span className="text-xs uppercase tracking-[0.18em] text-[rgba(7,16,31,0.48)]">
                    {post.date}
                  </span>
                </div>
                <p className="mb-5 text-xs uppercase tracking-[0.22em] text-[rgba(7,16,31,0.46)]">
                  {blogAccents[index]}
                </p>
                <h2 className="font-display mb-6 text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-[#07101f] sm:text-5xl">
                  {post.title}
                </h2>
                <p className="mb-10 text-sm leading-7 text-[rgba(7,16,31,0.66)]">
                  {post.excerpt}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#07101f]">
                  Read more <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
