import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/lapland-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function renderBody(body: string) {
  const paragraphs = body.split(/\n\n+/);
  return paragraphs.map((para, i) => {
    const trimmed = para.trim();
    if (!trimmed) return null;

    // Heading: **text** alone on a line
    if (/^\*\*[^*]+\*\*$/.test(trimmed)) {
      const text = trimmed.replace(/^\*\*/, "").replace(/\*\*$/, "");
      return (
        <h3
          key={i}
          className="font-display text-2xl font-semibold mt-8 mb-3"
          style={{ color: "var(--frost)" }}
        >
          {text}
        </h3>
      );
    }

    // Inline bold
    const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={i} className="prose-lapland mb-5">
        {parts.map((part, j) => {
          if (/^\*\*[^*]+\*\*$/.test(part)) {
            return <strong key={j}>{part.replace(/\*\*/g, "")}</strong>;
          }
          return part;
        })}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const morePosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

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
          <nav className="text-xs mb-6" style={{ color: "var(--muted)" }}>
            <Link href="/" className="hover:opacity-80">Home</Link>
            {" › "}
            <Link href="/blog" className="hover:opacity-80">The Guide</Link>
            {" › "}
            <span style={{ color: "var(--ice)" }}>{post.category}</span>
          </nav>
          <span className="badge-chip mb-4 inline-block">{post.category}</span>
          <h1
            className="font-display italic mt-3"
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              color: "var(--frost)",
              fontWeight: 500,
            }}
          >
            {post.title}
          </h1>
          <p className="mt-4 text-lg max-w-xl" style={{ color: "var(--muted)", lineHeight: 1.7 }}>
            {post.excerpt}
          </p>
          <p className="mt-3 text-sm" style={{ color: "var(--muted)" }}>
            {post.date}
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2">
            {renderBody(post.body)}
          </article>

          <aside>
            <div className="card-glass p-6 sticky top-24">
              <p className="eyebrow mb-4">Book these experiences</p>
              <div className="space-y-3">
                {post.relatedCombinations.map((combo) => (
                  <Link
                    key={`${combo.destination}-${combo.activity}`}
                    href={`/destinations/${combo.destination}/${combo.activity}`}
                    className="flex items-center justify-between p-3 rounded-xl transition-colors"
                    style={{
                      background: "rgba(13,27,42,0.6)",
                      border: "1px solid rgba(168,216,234,0.1)",
                    }}
                  >
                    <span className="text-sm" style={{ color: "var(--frost)" }}>
                      {combo.label}
                    </span>
                    <ArrowRight size={14} style={{ color: "var(--aurora)", flexShrink: 0 }} />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {morePosts.length > 0 && (
        <section className="px-6 pb-20" style={{ borderTop: "1px solid rgba(168,216,234,0.08)" }}>
          <div className="max-w-5xl mx-auto pt-12">
            <p className="eyebrow mb-3">More from the guide</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {morePosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="card-glass p-6 block">
                  <span className="badge-chip mb-3 inline-block">{p.category}</span>
                  <h3
                    className="font-display text-lg font-semibold mb-2"
                    style={{ color: "var(--frost)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                    {p.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
