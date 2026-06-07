import Link from "next/link";
import { blogPosts } from "@/data/blog";
export default function BlogPage() {
  return <main className="bg-muted py-20"><div className="container"><h1 className="text-5xl font-bold">Blog & Insights</h1><div className="mt-10 grid gap-6 md:grid-cols-3">{blogPosts.map((post)=>(<Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-3xl bg-white p-7 shadow-sm"><h2 className="text-xl font-bold">{post.title}</h2><p className="mt-3 text-sm text-slate-600">{post.excerpt}</p></Link>))}</div></div></main>;
}
