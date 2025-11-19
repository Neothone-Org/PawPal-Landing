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
    <div
      className="min-h-dvh text-[var(--color-ink)]"
      style={{
        backgroundImage:
          "linear-gradient(135deg, var(--gradient-from) 0%, var(--gradient-via) 40%, var(--gradient-to) 100%)",
      }}
    >
      {children}
    </div>
  );
}
