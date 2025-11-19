export const brand = {
  company: {
    name: "Neothone",
    tagline: "Two devs crafting playful pet & finance apps.",
    location: "Oradea, Romania",
    contactEmail: "contact@neothone.com",
    logo: "/neothone_logo.png",
    foundingYear: 2025,
    teamSize: 2,
  },
  palette: {
    primary: "#2F5D50",
    primaryDark: "#24463d",
    muted: "#696969",
    ink: "#2F2F2F",
    tint: "#F6EFEA",
    borderSoft: "#EFE8E3",
    accentWarm: "#D9C5B6",
    gradientFrom: "#2F5D50",
    gradientVia: "#3F7264",
    gradientTo: "#DAB49D",
  },
  product: {
    pawpal: {
      name: "PawPal",
      description:
        "A discovery-forward pet app for every species with matchmaking, chat, and a vibrant community feed.",
      googlePlayUrl:
        "https://play.google.com/store/apps/details?id=com.neothone.pawpal",
      appStoreUrl: "https://apps.apple.com",
      logo: "/pawpal_logo.png",
      deletionWindowDays: 14,
      theme: {
        primary: "#2F5D50",
        accent: "#DAB49D",
        neutral: "#696969",
        foreground: "#ffffff",
      },
    },
    cryptoTrackingWallet: {
      name: "CryptoTracking Wallet",
      nickname: "CryptoTracking",
      description:
        "An upcoming wallet companion that tracks chains, links unlimited addresses, and gives you a shareable activity digest.",
      status: "In development",
      slug: "/crypto-tracking-wallet",
      waitlistUrl: "mailto:contact@neothone.com?subject=CryptoTracking%20Wallet%20waitlist",
      tags: ["Wallet linking", "Transaction timeline", "Copy-any-wallet"],
      colors: {
        background: "#0A0A0B",
        surface: "#16151A",
        backgroundAlt: "#0F172A",
        primary: "#6D28D9",
        secondary: "#A78BFA",
        success: "#22C55E",
        danger: "#EF4444",
        textPrimary: "#F8FAFC",
        textSecondary: "#A1A1AA",
        border: "rgba(255, 255, 255, 0.08)",
        fillMutedPrimary: "rgba(109, 40, 217, 0.12)",
        fillMutedSecondary: "rgba(167, 139, 250, 0.14)",
      },
    },
  },
};

export type BrandConfig = typeof brand;
