import Link from "next/link";
import { oemPages } from "@/data/oem-pages";
export const metadata = { title: "OEM / ODM" };
export default function OEMPage() {
  return (
    <main>
      <section className="bg-dark py-24 text-white"><div className="container">
        <h1 className="max-w-5xl text-5xl font-bold lg:text-7xl">OEM & ODM Security Manufacturing</h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-300">Build your own brand with Haswell's security, smart home, parking, inspection and solar product ecosystem.</p>
        <Link href="/contact" className="mt-8 inline-flex rounded-xl bg-primary px-7 py-4 font-semibold text-white">Start OEM Project</Link>
      </div></section>
      <section className="bg-muted py-20"><div className="container grid gap-6 md:grid-cols-3">
        {oemPages.slice(0,6).map((page)=>(<Link key={page.slug} href={`/oem-pages/${page.slug}`} className="rounded-3xl bg-white p-7 shadow-sm"><h2 className="text-xl font-bold">{page.title}</h2><p className="mt-3 text-sm text-slate-600">{page.metaDescription}</p></Link>))}
      </div></section>
    </main>
  );
}
