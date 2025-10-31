import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Neothone | Intelligent Pet Tech",
    template: "%s | Neothone",
  },
  description:
    "Neothone builds thoughtful technology for modern pet families, including the PawPal companion app.",
  metadataBase: new URL("https://neothone.com"),
  openGraph: {
    title: "Neothone | Intelligent Pet Tech",
    description:
      "Discover Neothone, the pet technology studio behind PawPal and more companion-first experiences.",
    url: "https://neothone.com",
    siteName: "Neothone",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neothone | Intelligent Pet Tech",
    description:
      "Discover Neothone, the pet technology studio behind PawPal and more companion-first experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
