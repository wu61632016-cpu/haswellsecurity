import Link from "next/link";

export default function SupportCard({ title, href, description }: { title: string; href: string; description: string }) {
  return (
    <Link href={href} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-xl">
      <div className="mb-8 h-14 w-14 rounded-2xl bg-blue-50" />
      <h2 className="text-2xl font-bold text-dark">{title}</h2>
      <p className="mt-4 text-sm leading-6 text-slate-600">{description}</p>
    </Link>
  );
}
