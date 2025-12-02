export const brand = {
  company: {
    name: "Neothone Technologies",
    tagline: "Two devs crafting modern and powerful apps.",
    location: "Romania",
    contactEmail: "contact@neothone.com",
    logo: "/logo.png",
    foundingYear: 2025,
    teamSize: 2,
  },
  palette: {
    primary: "#1E3A8A",
    primaryDark: "#172554",
    muted: "#94A3B8",
    ink: "#0F172A",
    tint: "#F8FAFC",
    borderSoft: "#E2E8F0",
    accentWarm: "#F59E0B",
    gradientFrom: "#020617",
    gradientVia: "#0F172A",
    gradientTo: "#1E3A8A",
  },
  product: {
    petSociety: {
      name: "PetSociety",
      alias: "",
      description:
        "Profile-rich pet stories, swipe discovery, matchmaking, and safety tooling for pet parents and ethical breeders.",
      supportEmail: "contact@neothone.com",
      // the id is pawpal in order to match the app's Play Store listing
      googlePlayUrl:
        "https://play.google.com/store/apps/details?id=com.neothone.pawpal",
      appStoreUrl: "https://apps.apple.com",
      logo: "/pet_society_logo.jpeg",
      slug: "/petsociety",
      aggregateRating: {
        ratingValue: 4.9,
        reviewCount: 42,
        ratingCount: 42,
        bestRating: 5,
        worstRating: 1,
      },
      deletionWindowDays: 30,
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
      waitlistUrl:
        "mailto:contact@neothone.com?subject=CryptoTracking%20Wallet%20waitlist",
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
