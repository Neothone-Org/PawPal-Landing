import type { MetadataRoute } from "next";

export const dynamic = "force-static";
export const revalidate = false;

const siteUrl = "https://neothone.com";

const routes = [
  "/",
  "/petsociety",
  "/petsociety/support",
  "/petsociety/privacy",
  "/petsociety/terms",
  "/petsociety/delete-account",
  "/petsociety/child-safety",
  "/crypto-tracking-wallet",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route === "/" ? "" : route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route.startsWith("/petsociety") ? 0.9 : 0.7,
  }));
}
