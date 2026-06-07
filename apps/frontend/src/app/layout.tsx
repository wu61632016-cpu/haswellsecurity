import "@/styles/globals.css";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.haswellsecurity.com"),
  title: {
    default: "Haswell Security | Integrated Security, Smart Home & Energy Solutions",
    template: "%s | Haswell Security"
  },
  description:
    "Haswell Security is a Shenzhen manufacturer for surveillance, access control, smart home, parking management, inspection security, body worn and solar energy solutions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Header />{children}</body></html>;
}
