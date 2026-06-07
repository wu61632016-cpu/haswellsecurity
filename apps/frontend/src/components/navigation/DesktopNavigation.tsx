import Link from "next/link";
import { mainNavigation } from "@/data/navigation";

export default function DesktopNavigation() {
  return (
    <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
      {mainNavigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-semibold text-dark transition hover:text-primary"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
