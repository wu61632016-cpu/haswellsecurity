import { productCategories } from "@/data/products";
import { notFound } from "next/navigation";
import Link from "next/link";
export function generateStaticParams() { return productCategories.map((item) => ({ category: item.slug })); }
export default async function ProductCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const category = productCategories.find((item) => item.slug === resolvedParams.category);
  if (!category) notFound();
  return (
    <main className="py-20"><div className="container">
      <h1 className="text-5xl font-bold">{category.title}</h1>
      <p className="mt-5 max-w-3xl text-lg text-slate-600">{category.description}</p>
      <div className="mt-10 rounded-3xl bg-muted p-8">Add real products, models, images and datasheets in Strapi CMS.</div>
      <Link href="/contact" className="mt-8 inline-flex rounded-xl bg-primary px-6 py-3 font-semibold text-white">Request Quote</Link>
    </div></main>
  );
}
