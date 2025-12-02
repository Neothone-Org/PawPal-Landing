import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { brand } from "../../lib/brand";

export const metadata: Metadata = {
  title: {
    default: "PetSociety by Neothone",
    template: "%s | PetSociety",
  },
  description:
    "PetSociety is Neothone's companion app that keeps families, pet lovers, and care pros connected with thoughtful tools.",
  openGraph: {
    title: "PetSociety by Neothone",
    description:
      "Discover PetSociety—the companion app that keeps pet families, pet lovers, and care pros connected.",
    type: "website",
  },
  robots: { index: true, follow: true },
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
