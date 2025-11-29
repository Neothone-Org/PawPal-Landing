import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { brand } from "../lib/brand";
import type { CSSProperties } from "react";

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
  title: {
    default: "Neothone Technologies | PetSociety & CryptoTracking Wallet",
    template: "%s | Neothone Technologies",
  },
  description:
    "Neothone is a two-person studio building PetSociety, the discovery-first pet app, and CryptoTracking Wallet, a purple-hued crypto sidekick.",
  metadataBase: new URL("https://neothone.com"),
  openGraph: {
    title: "Neothone Technologies | PetSociety & CryptoTracking Wallet",
    description:
      "Discover Neothone, the two-developer studio behind PetSociety and the upcoming CryptoTracking Wallet.",
    url: "https://neothone.com",
    siteName: "Neothone Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neothone Technologies | PetSociety & CryptoTracking Wallet",
    description:
      "Discover Neothone, the two-developer studio behind PetSociety and the upcoming CryptoTracking Wallet.",
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

  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${jetBrainsMono.variable} antialiased`}
        style={themeTokens}
      >
        {children}
      </body>
    </html>
  );
}
