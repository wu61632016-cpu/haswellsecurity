import SupportCard from "@/components/support/SupportCard";
import { supportCards } from "@/data/support";

export const metadata = {
  title: "Support Center",
  description: "Download product manuals, software tools, firmware, certificates and technical support resources from Haswell Security.",
};

export default function SupportPage() {
  return (
    <main>
      <section className="bg-dark py-24 text-white">
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Support Center</p>
          <h1 className="mt-4 max-w-5xl text-5xl font-bold lg:text-7xl">Manuals, software tools, firmware and technical support</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Access Haswell Security product documentation, software, firmware, certificates and service support.
          </p>
        </div>
      </section>
      <section className="bg-muted py-20">
        <div className="container grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {supportCards.map((item) => <SupportCard key={item.href} {...item} />)}
        </div>
      </section>
    </main>
  );
}
