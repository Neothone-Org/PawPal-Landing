import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "PawPal by Neothone",
    template: "%s | PawPal",
  },
  description:
    "PawPal is Neothone's companion app that keeps families, breeders, and care pros connected with thoughtful tools.",
  openGraph: {
    title: "PawPal by Neothone",
    description:
      "Discover PawPal—the companion app that keeps pet families, breeders, and care pros connected.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function PawPalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-gradient-to-br from-[#2F5D50] via-[#3F7264] to-[#DAB49D] text-[#2F2F2F]">
      {children}
    </div>
  );
}
