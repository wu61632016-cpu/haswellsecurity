import Link from "next/link";
import { oemPages } from "@/data/oem-pages";
export default function OEMPagesIndex() {
  return <main className="bg-muted py-20"><div className="container"><h1 className="text-5xl font-bold">OEM Landing Pages</h1><div className="mt-10 grid gap-6 md:grid-cols-3">{oemPages.map((page)=>(<Link key={page.slug} href={`/oem-pages/${page.slug}`} className="rounded-3xl bg-white p-7 shadow-sm"><h2 className="text-xl font-bold">{page.title}</h2><p className="mt-3 text-sm text-slate-600">{page.metaDescription}</p></Link>))}</div></div></main>;
}
