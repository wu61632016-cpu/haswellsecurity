import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const footerLinks = [
  { title: "Products", href: "/products" },
  { title: "Solutions", href: "/solutions" },
  { title: "OEM/ODM", href: "/oem" },
  { title: "Support", href: "/support" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export default function Footer() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <footer className="bg-dark py-16 text-white">
      <div className="container grid gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <Image src={siteConfig.logo} alt="Haswell Security" width={220} height={64} className="h-14 w-auto rounded bg-white object-contain p-2" />
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
            Haswell Security provides integrated security, smart home, parking, inspection, body worn and solar energy solutions for global B2B partners.
          </p>
        </div>
        <div>
          <h3 className="font-bold">Quick Links</h3>
          <div className="mt-5 grid gap-3">
            {footerLinks.map((item) => <Link key={item.href} href={item.href} className="text-sm text-slate-300 hover:text-white">{item.title}</Link>)}
          </div>
        </div>
        <div>
          <h3 className="font-bold">Contact</h3>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            <p>Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
            <p>WhatsApp: <a href={whatsappHref} target="_blank">{siteConfig.whatsappDisplay}</a></p>
            <p>Location: {siteConfig.location}</p>
            <p>Website: www.haswellsecurity.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
