import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
export function generateStaticParams() { return blogPosts.map((post) => ({ slug: post.slug })); }
export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((item) => item.slug === resolvedParams.slug);
  if (!post) notFound();
  return <main className="py-20"><article className="container max-w-4xl"><h1 className="text-5xl font-bold">{post.title}</h1><p className="mt-6 text-lg text-slate-600">{post.excerpt}</p><div className="mt-10 space-y-6 text-lg leading-8 text-slate-700"><p>This article is a production-ready placeholder. Replace with real SEO content before launch.</p><p>Haswell Security can use this article system to target product, OEM and solution keywords.</p></div><Link href="/contact" className="mt-10 inline-flex rounded-xl bg-primary px-6 py-3 font-semibold text-white">Request Quote</Link></article></main>;
}
