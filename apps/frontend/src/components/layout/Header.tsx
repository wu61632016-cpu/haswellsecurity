import Link from "next/link";
import DesktopNavigation from "@/components/navigation/DesktopNavigation";
import MobileDrawerMenu from "@/components/navigation/MobileDrawerMenu";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="hidden border-b border-slate-100 bg-slate-50 lg:block">
          <div className="container flex h-10 items-center justify-between text-sm text-slate-600">
            <p>Integrated Security, Smart Home & Energy Solutions Manufacturer</p>
            <div className="flex gap-5">
              <a href="mailto:sales@haswellsecurity.com" className="hover:text-primary">
                sales@haswellsecurity.com
              </a>
              <a href="https://wa.me/8613800000000" target="_blank" className="hover:text-primary">
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary font-bold text-white">
              H
            </div>
            <div>
              <div className="font-bold tracking-tight text-dark">HASWELL</div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Security
              </div>
            </div>
          </Link>

          <DesktopNavigation />

          <div className="hidden items-center gap-3 lg:flex">
            <select className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold">
              <option>EN</option>
              <option>ES</option>
              <option>FR</option>
              <option>AR</option>
            </select>
            <Link href="/contact" className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white">
              Get Quote
            </Link>
          </div>

          <MobileDrawerMenu />
        </div>
      </header>

      <a
        href="https://wa.me/8613800000000?text=Hello%20Haswell%20Security%2C%20please%20send%20catalog%20and%20quotation."
        target="_blank"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-success px-5 py-4 text-sm font-bold text-white shadow-2xl"
      >
        WhatsApp
      </a>
    </>
  );
}
