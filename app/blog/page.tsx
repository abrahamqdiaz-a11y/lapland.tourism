import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/lapland-data";

export const metadata: Metadata = {
  title: "The Guide",
  description:
    "Planning advice, destination comparisons and seasonal tips for Finnish Lapland.",
};

export default function BlogPage() {
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
          <p className="eyebrow mb-4">From the guide</p>
          <h1
            className="font-display italic"
            style={{
              fontSize: "clamp(40px, 6vw, 64px)",
              color: "var(--frost)",
              fontWeight: 500,
            }}
          >
            Planning advice from people
            <br />
            who keep going back
          </h1>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card-glass p-6 block">
              <div className="flex items-center gap-3 mb-4">
                <span className="badge-chip">{post.category}</span>
                <span className="text-xs" style={{ color: "var(--muted)" }}>{post.date}</span>
              </div>
              <h2
                className="font-display text-xl font-semibold mb-2"
                style={{ color: "var(--frost)" }}
              >
                {post.title}
              </h2>
              <p className="text-sm mb-4" style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                {post.excerpt}
              </p>
              <span className="text-sm" style={{ color: "var(--ice)" }}>
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
