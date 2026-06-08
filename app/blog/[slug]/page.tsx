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
        className="relative flex min-h-[74vh] items-end overflow-hidden px-6 py-24 sm:py-32"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(7,24,39,0.96) 0%, rgba(11,31,53,0.84) 54%, rgba(11,31,53,0.38) 100%), linear-gradient(180deg, rgba(7,24,39,0.12) 0%, rgba(7,24,39,0.82) 78%, var(--midnight) 100%), url('https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=2200&q=85')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(201,214,223,0.14),transparent_32%)]" />
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <nav className="mb-8 text-xs uppercase tracking-[0.18em] text-[rgba(248,250,252,0.48)]">
            <Link href="/" className="hover:text-[var(--ice)]">Home</Link>
            {" / "}
            <Link href="/blog" className="hover:text-[var(--ice)]">The Guide</Link>
            {" / "}
            <span className="text-[var(--ice)]">{post.category}</span>
          </nav>
          <span className="badge-chip mb-5 inline-block">{post.category}</span>
          <h1
            className="font-display max-w-5xl italic leading-[0.9] tracking-[-0.045em]"
            style={{ fontSize: "clamp(52px, 8vw, 112px)", color: "var(--frost)", fontWeight: 500 }}
          >
            {post.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[rgba(248,250,252,0.74)]">
            {post.excerpt}
          </p>
          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[rgba(248,250,252,0.46)]">
            {post.date}
          </p>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
          <article className="lg:col-span-1">
            {renderBody(post.body)}
          </article>

          <aside>
            <div className="sticky top-24 rounded-[2rem] border border-[rgba(248,250,252,0.12)] bg-[rgba(11,31,53,0.72)] p-7 shadow-2xl backdrop-blur-xl">
              <p className="eyebrow mb-5">Book these experiences</p>
              <div className="space-y-3">
                {post.relatedCombinations.map((combo) => (
                  <Link
                    key={`${combo.destination}-${combo.activity}`}
                    href={`/destinations/${combo.destination}/${combo.activity}`}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-[rgba(248,250,252,0.1)] bg-[rgba(7,24,39,0.34)] p-4 transition hover:border-[rgba(84,224,166,0.24)] hover:bg-[rgba(84,224,166,0.06)]"
                  >
                    <span className="text-sm leading-6 text-[var(--frost)]">{combo.label}</span>
                    <ArrowRight size={14} className="shrink-0 text-[var(--aurora)]" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {morePosts.length > 0 && (
        <section className="px-6 py-20 sm:py-28 section-divider">
          <div className="mx-auto max-w-7xl">
            <p className="eyebrow mb-4">More from the guide</p>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {morePosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="rounded-[2rem] border border-[rgba(248,250,252,0.1)] bg-[rgba(248,250,252,0.92)] p-7 text-[#071827] shadow-2xl transition duration-500 hover:-translate-y-2"
                >
                  <span className="mb-5 inline-block rounded-full border border-[rgba(11,31,53,0.14)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#071827]">
                    {p.category}
                  </span>
                  <h3 className="font-display mb-4 text-3xl font-semibold leading-none tracking-[-0.03em] text-[#071827]">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-7 text-[rgba(11,31,53,0.66)]">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
