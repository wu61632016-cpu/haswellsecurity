export const metadata = { title: "Support FAQ | Support" };

export default function Page() {
  return (
    <main className="bg-muted py-20">
      <div className="container">
        <h1 className="text-5xl font-bold text-dark">Support FAQ</h1>
        <p className="mt-5 max-w-3xl text-lg text-slate-600">Frequently asked questions for products, OEM, installation and support.</p>
        <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-slate-600">Upload real files and content in Strapi CMS later. Contact Haswell for current resources.</p>
          <a href="/contact" className="mt-6 inline-flex rounded-xl bg-primary px-6 py-3 font-semibold text-white">Request Support</a>
        </div>
      </div>
    </main>
  );
}
