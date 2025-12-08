import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { brand } from "../../lib/brand";

const siteUrl = "https://neothone.com";
const petSocietyProduct = brand.product.petSociety;
const petSocietyName = petSocietyProduct.name;
const petSocietyUrl = `${siteUrl}${petSocietyProduct.slug}`;
const petSocietyImageUrl = `${siteUrl}/pawpal_0.png`;
const petSocietyLogoUrl = `${siteUrl}${petSocietyProduct.logo}`;
const petSocietyKeywords = [
  "PetSociety",
  "pet social network",
  "pet matchmaking",
  "pet pals",
  "pet messaging app",
  "Neothone Technologies",
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PetSociety",
    template: "%s | PetSociety",
  },
  description:
    "PetSociety is the secure pet parent network for storytelling, discovery, matchmaking, and reporting by Neothone.",
  keywords: petSocietyKeywords,
  applicationName: petSocietyName,
  alternates: {
    canonical: petSocietyUrl,
    languages: { "en-US": petSocietyUrl },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "256x256", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ url: "/icon-512.png", sizes: "512x512", type: "image/png" }],
    shortcut: ["/favicon-32x32.png"],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "PetSociety",
    description:
      "Share rich pet stories, swipe curated matches, post to community feeds, and report anything that feels off so meetups stay friendly.",
    type: "website",
    url: petSocietyUrl,
    siteName: petSocietyName,
    images: [
      {
        url: petSocietyImageUrl,
        width: 1080,
        height: 1920,
        alt: "PetSociety discovery feed",
      },
      {
        url: petSocietyLogoUrl,
        width: 1024,
        height: 1024,
        alt: "PetSociety logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PetSociety",
    description:
      "Share rich pet stories, swipe curated matches, post to community feeds, and report anything that feels off so meetups stay friendly.",
    images: [petSocietyImageUrl],
  },
  robots: { index: true, follow: true },
  appLinks: {
    web: { url: petSocietyUrl },
    android: [
      {
        url: petSocietyProduct.googlePlayUrl,
        package: "com.neothone.pawpal",
      },
    ],
    ios: [{ url: petSocietyProduct.appStoreUrl }],
  },
};

export default function PetSocietyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const petSocietyTheme = brand.product.petSociety.theme;
  const petSocietyTokens: CSSProperties = {
    ["--color-primary" as string]: petSocietyTheme.primary,
    ["--color-primary-dark" as string]: "#24463d",
    ["--color-muted" as string]: petSocietyTheme.neutral,
    ["--color-ink" as string]: "#2F2F2F",
    ["--color-tint" as string]: "#F6EFEA",
    ["--color-border-soft" as string]: "#EFE8E3",
    ["--color-accent-warm" as string]: petSocietyTheme.accent,
    ["--gradient-from" as string]: petSocietyTheme.primary,
    ["--gradient-via" as string]: "#3F6F62",
    ["--gradient-to" as string]: petSocietyTheme.accent,
  };

  return (
    <div
      className="min-h-dvh text-[var(--color-ink)]"
      style={{
        ...petSocietyTokens,
        backgroundImage:
          "linear-gradient(135deg, var(--gradient-from) 0%, var(--gradient-via) 40%, var(--gradient-to) 100%)",
      }}
    >
      {children}
    </div>
  );
}
