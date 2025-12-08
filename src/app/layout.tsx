import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { brand } from "../lib/brand";
import type { CSSProperties } from "react";

const siteUrl = "https://neothone.com";
const petSocietyProduct = brand.product.petSociety;
const petSocietyName = petSocietyProduct.name;
const petSocietyUrl = `${siteUrl}${petSocietyProduct.slug}`;
const neothoneLogoUrl = `${siteUrl}${brand.company.logo}`;
const petSocietyLogoUrl = `${siteUrl}${petSocietyProduct.logo}`;
const ogImageUrl = `${siteUrl}/pawpal_0.png`;
const secondaryScreenshotUrl = `${siteUrl}/pawpal_1.png`;
const metadataDescription =
  "Neothone is a two-person studio crafting PetSociety—the Azure-secured pet social network—and the upcoming CryptoTracking Wallet.";
const metadataKeywords = [
  "PetSociety",
  "Neothone Technologies",
  "PetSociety app",
  "pet discovery app",
  "pet social network",
  "pet pals",
  "matchmaking",
  "Spring Boot pet backend",
  "Azure Blob media hosting",
];

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Neothone Technologies | PetSociety & CryptoTracking Wallet",
    template: "%s | Neothone Technologies",
  },
  description: metadataDescription,
  applicationName: brand.company.name,
  generator: "Next.js",
  category: "Lifestyle Application",
  keywords: metadataKeywords,
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      en: "/",
    },
  },
  authors: [{ name: brand.company.name }],
  creator: brand.company.name,
  publisher: brand.company.name,
  openGraph: {
    title: "Neothone Technologies | PetSociety & CryptoTracking Wallet",
    description: metadataDescription,
    url: siteUrl,
    siteName: brand.company.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1080,
        height: 1920,
        alt: "PetSociety onboarding and discovery screens",
      },
      {
        url: secondaryScreenshotUrl,
        width: 1080,
        height: 1920,
        alt: "PetSociety conversations and swipe deck preview",
      },
      {
        url: petSocietyLogoUrl,
        width: 1024,
        height: 1024,
        alt: "PetSociety logo",
      },
      {
        url: neothoneLogoUrl,
        width: 1024,
        height: 1024,
        alt: "Neothone Technologies logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neothone Technologies | PetSociety & CryptoTracking Wallet",
    description: metadataDescription,
    images: [ogImageUrl],
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  appLinks: {
    web: { url: siteUrl },
    android: [
      {
        url: petSocietyProduct.googlePlayUrl,
        package: "com.neothone.pawpal",
      },
    ],
    ios: [
      {
        url: petSocietyProduct.appStoreUrl,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeTokens: CSSProperties = {
    ["--background" as string]: `linear-gradient(135deg, ${brand.palette.gradientFrom} 0%, ${brand.palette.gradientTo} 100%)`,
    ["--foreground" as string]: brand.palette.ink,
    ["--color-primary" as string]: brand.palette.primary,
    ["--color-primary-dark" as string]: brand.palette.primaryDark,
    ["--color-secondary" as string]: brand.palette.muted,
    ["--color-ink" as string]: brand.palette.ink,
    ["--color-muted" as string]: brand.palette.muted,
    ["--color-tint" as string]: brand.palette.tint,
    ["--color-border-soft" as string]: brand.palette.borderSoft,
    ["--color-accent-warm" as string]: brand.palette.accentWarm,
    ["--gradient-from" as string]: brand.palette.gradientFrom,
    ["--gradient-via" as string]: brand.palette.gradientVia,
    ["--gradient-to" as string]: brand.palette.gradientTo,
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: brand.company.name,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: neothoneLogoUrl,
          width: 1024,
          height: 1024,
        },
        sameAs: [siteUrl, petSocietyUrl],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: brand.company.contactEmail,
          availableLanguage: "English",
          areaServed: "Worldwide",
        },
        foundingDate: `${brand.company.foundingYear}-01-01`,
        numberOfEmployees: brand.company.teamSize,
      },
      {
        "@type": "MobileApplication",
        name: petSocietyName,
        applicationCategory: "LifestyleApplication",
        operatingSystem: "Android, iOS",
        url: petSocietyUrl,
        description:
          "PetSociety lets pet parents share stories, swipe discovery decks, match safely, and message with inline media.",
        image: petSocietyLogoUrl,
        screenshot: [ogImageUrl, secondaryScreenshotUrl],
        publisher: brand.company.name,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: petSocietyProduct.aggregateRating.ratingValue,
          ratingCount: petSocietyProduct.aggregateRating.ratingCount,
          reviewCount: petSocietyProduct.aggregateRating.reviewCount,
          bestRating: petSocietyProduct.aggregateRating.bestRating,
          worstRating: petSocietyProduct.aggregateRating.worstRating,
        },
        downloadUrl: petSocietyProduct.googlePlayUrl,
        installUrl: petSocietyProduct.googlePlayUrl,
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${jetBrainsMono.variable} antialiased`}
        style={themeTokens}
      >
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
