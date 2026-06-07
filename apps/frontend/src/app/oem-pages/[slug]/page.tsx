import { oemPages } from "@/data/oem-pages";
import { notFound } from "next/navigation";
import Link from "next/link";
export function generateStaticParams() { return oemPages.map((page) => ({ slug: page.slug })); }
export default async function OEMLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const page = oemPages.find((item) => item.slug === resolvedParams.slug);
  if (!page) notFound();
  return <main className="py-20"><div className="container"><p className="font-semibold text-primary">{page.category}</p><h1 className="mt-4 max-w-5xl text-5xl font-bold">{page.title}</h1><p className="mt-6 max-w-3xl text-lg text-slate-600">{page.intro}</p><div className="mt-10 grid gap-6 md:grid-cols-3">{["OEM Manufacturing Support","Customization Options","Target Customers"].map((item)=>(<div key={item} className="rounded-3xl border border-slate-200 p-7"><h2 className="text-2xl font-bold">{item}</h2><p className="mt-3 text-sm text-slate-600">Replace with real product details, MOQ and branding options.</p></div>))}</div><Link href="/contact" className="mt-8 inline-flex rounded-xl bg-primary px-6 py-3 font-semibold text-white">Request OEM Quote</Link></div></main>;
}
