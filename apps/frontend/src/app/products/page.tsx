import Link from "next/link";
import { productCategories } from "@/data/products";
export const metadata = { title: "Products" };
export default function ProductsPage() {
  return (
    <main className="bg-muted py-20"><div className="container">
      <h1 className="text-5xl font-bold text-dark">Products Center</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {productCategories.map((item) => (
          <Link key={item.slug} href={`/products/${item.slug}`} className="rounded-3xl bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold">{item.title}</h2><p className="mt-4 text-sm text-slate-600">{item.description}</p>
          </Link>
        ))}
      </div>
    </div></main>
  );
}
