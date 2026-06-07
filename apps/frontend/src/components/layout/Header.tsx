import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const nav = [
  { title: "Products", href: "/products" },
  { title: "Solutions", href: "/solutions" },
  { title: "OEM/ODM", href: "/oem" },
  { title: "Support", href: "/support" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export default function Header() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="hidden border-b border-slate-100 bg-slate-50 lg:block">
          <div className="container flex h-10 items-center justify-between text-sm text-slate-600">
            <p>Integrated Security, Smart Home & Energy Solutions Manufacturer</p>
            <div className="flex gap-5">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">{siteConfig.email}</a>
              <a href={whatsappHref} target="_blank" className="hover:text-primary">WhatsApp: {siteConfig.whatsappDisplay}</a>
            </div>
          </div>
        </div>

        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="Haswell Security Home">
            <Image src={siteConfig.logo} alt="Haswell Security" width={220} height={64} priority className="h-12 w-auto object-contain lg:h-14" />
          </Link>

          <nav className="hidden gap-6 lg:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-semibold text-dark transition hover:text-primary">
                {item.title}
              </Link>
            ))}
          </nav>

          <Link href="/contact" className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white">Get Quote</Link>
        </div>
      </header>

      <a href={whatsappHref} target="_blank" className="fixed bottom-6 right-6 z-50 rounded-full bg-success px-5 py-4 text-sm font-bold text-white shadow-2xl">
        WhatsApp
      </a>
    </>
  );
}
