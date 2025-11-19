import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { brand } from "../../lib/brand";

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
  const pawpalTheme = brand.product.pawpal.theme;
  const pawpalTokens: CSSProperties = {
    ["--color-primary" as string]: pawpalTheme.primary,
    ["--color-primary-dark" as string]: "#24463d",
    ["--color-muted" as string]: pawpalTheme.neutral,
    ["--color-ink" as string]: "#2F2F2F",
    ["--color-tint" as string]: "#F6EFEA",
    ["--color-border-soft" as string]: "#EFE8E3",
    ["--color-accent-warm" as string]: pawpalTheme.accent,
    ["--gradient-from" as string]: pawpalTheme.primary,
    ["--gradient-via" as string]: "#3F6F62",
    ["--gradient-to" as string]: pawpalTheme.accent,
  };

  return (
    <div
      className="min-h-dvh text-[var(--color-ink)]"
      style={{
        ...pawpalTokens,
        backgroundImage:
          "linear-gradient(135deg, var(--gradient-from) 0%, var(--gradient-via) 40%, var(--gradient-to) 100%)",
      }}
    >
      {children}
    </div>
  );
}
