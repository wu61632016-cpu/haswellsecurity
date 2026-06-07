import type { MetadataRoute } from "next";
import { productCategories } from "@/data/products";
import { solutions } from "@/data/solutions";
import { oemPages } from "@/data/oem-pages";
import { blogPosts } from "@/data/blog";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.haswellsecurity.com";
  const staticRoutes = ["", "/products", "/solutions", "/oem", "/blog", "/contact"];
  return [
    ...staticRoutes.map((route) => ({ url: `${siteUrl}${route}`, lastModified: new Date(), priority: route === "" ? 1 : 0.8 })),
    ...productCategories.map((item) => ({ url: `${siteUrl}/products/${item.slug}`, lastModified: new Date(), priority: 0.8 })),
    ...solutions.map((item) => ({ url: `${siteUrl}/solutions/${item.slug}`, lastModified: new Date(), priority: 0.8 })),
    ...oemPages.map((item) => ({ url: `${siteUrl}/oem-pages/${item.slug}`, lastModified: new Date(), priority: 0.9 })),
    ...blogPosts.map((item) => ({ url: `${siteUrl}/blog/${item.slug}`, lastModified: new Date(), priority: 0.7 }))
  ];
}
