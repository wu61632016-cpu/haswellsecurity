import Link from "next/link";
import { productCategories } from "@/data/products";
import { solutions } from "@/data/solutions";

export default function HomePage() {
  return (
    <main>
      <section className="bg-dark py-24 text-white lg:py-32">
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Haswell Security V6 Final Release</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-bold tracking-tight lg:text-7xl">
            Integrated Security, Smart Home & Energy Solutions
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Video surveillance, access control, smart home, parking, inspection, body worn and solar energy solutions for global OEM/ODM partners.
          </p>
          <div className="mt-10 flex gap-4">
            <Link href="/contact" className="rounded-xl bg-primary px-7 py-4 font-semibold text-white">Request Quote</Link>
            <Link href="/products" className="rounded-xl bg-white px-7 py-4 font-semibold text-primary">Explore Products</Link>
          </div>
        </div>
      </section>
      <section className="bg-muted py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-dark">Product Platforms</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {productCategories.map((item) => (
              <Link key={item.slug} href={`/products/${item.slug}`} className="rounded-3xl bg-white p-7 shadow-sm">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-dark">Solutions</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {solutions.map((item) => (
              <Link key={item.slug} href={`/solutions/${item.slug}`} className="rounded-3xl border border-slate-200 p-7">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
