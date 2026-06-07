import { solutions } from "@/data/solutions";
import { notFound } from "next/navigation";
import Link from "next/link";
export function generateStaticParams() { return solutions.map((item) => ({ slug: item.slug })); }
export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const solution = solutions.find((item) => item.slug === resolvedParams.slug);
  if (!solution) notFound();
  return (
    <main className="py-20"><div className="container">
      <h1 className="text-5xl font-bold">{solution.title}</h1>
      <p className="mt-5 max-w-3xl text-lg text-slate-600">{solution.summary}</p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">{["Challenges","Recommended Products","Benefits"].map((item)=>(<div key={item} className="rounded-3xl border border-slate-200 p-7"><h2 className="text-2xl font-bold">{item}</h2><p className="mt-3 text-sm text-slate-600">Replace with real content in CMS.</p></div>))}</div>
      <Link href="/contact" className="mt-8 inline-flex rounded-xl bg-primary px-6 py-3 font-semibold text-white">Request Solution Quote</Link>
    </div></main>
  );
}
