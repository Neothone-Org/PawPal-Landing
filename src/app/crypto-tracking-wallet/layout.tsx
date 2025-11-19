import type { Metadata } from "next";
import { brand } from "../../lib/brand";

const cryptoWallet = brand.product.cryptoTrackingWallet;

export const metadata: Metadata = {
  title: {
    default: `${cryptoWallet.name} by Neothone`,
    template: `%s | ${cryptoWallet.nickname}`,
  },
  description: cryptoWallet.description,
  openGraph: {
    title: `${cryptoWallet.name} by Neothone`,
    description: cryptoWallet.description,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function CryptoTrackingWalletLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="min-h-dvh"
      style={{
        backgroundColor: cryptoWallet.colors.background,
        backgroundImage: `radial-gradient(circle at 20% 20%, ${cryptoWallet.colors.secondary}33, transparent 55%), radial-gradient(circle at 80% 0%, ${cryptoWallet.colors.primary}22, transparent 45%)`,
        color: cryptoWallet.colors.textPrimary,
      }}
    >
      {children}
    </div>
  );
}
