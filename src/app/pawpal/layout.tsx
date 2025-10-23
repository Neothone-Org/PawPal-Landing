import type { Metadata } from "next";
import { LegalNav } from "../../components/Legal";

export const metadata: Metadata = {
  title: {
    default: "Legal | YourApp",
    template: "%s | YourApp",
  },
  description:
    "Legal pages for YourApp: Terms & Conditions and Privacy Policy.",
  robots: { index: true, follow: true },
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-white text-gray-900">
      <LegalNav />
      {children}
    </div>
  );
}
