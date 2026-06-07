import Link from "next/link";
import { solutions } from "@/data/solutions";
export const metadata = { title: "Solutions" };
export default function SolutionsPage() {
  return (
    <main className="bg-muted py-20"><div className="container">
      <h1 className="text-5xl font-bold">Solutions Center</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {solutions.map((item) => (
          <Link key={item.slug} href={`/solutions/${item.slug}`} className="rounded-3xl bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold">{item.title}</h2><p className="mt-4 text-sm text-slate-600">{item.summary}</p>
          </Link>
        ))}
      </div>
    </div></main>
  );
}
