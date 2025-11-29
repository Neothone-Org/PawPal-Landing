import Link from "next/link";
import { brand } from "../../lib/brand";

const cryptoWallet = brand.product.cryptoTrackingWallet;
const CONTACT_EMAIL = brand.company.contactEmail;

const walletStats = [
  { label: "Linked wallets", value: "06", detail: "EVM + Solana" },
  { label: "Chains tracked", value: "05", detail: "auto-detected" },
  { label: "Live alerts", value: "12", detail: "DM + email" },
];

const walletFeatures = [
  {
    title: "Transaction timeline",
    description:
      "Tag swaps, mints, and treasury moves with natural language. Jump from one wallet to another without losing context.",
    points: ["1-tap copy hash", "Multi-chain search"],
  },
  {
    title: "Wallet linking",
    description:
      "Add as many addresses as you like, label them, and generate shareable read-only boards for your squad.",
    points: ["Link hardware wallets", "Bulk CSV imports"],
  },
  {
    title: "Community digest",
    description:
      "Produce a weekly recap that highlights top inflows/outflows and interesting wallets you've copied.",
    points: ["Auto summaries", "Custom branding"],
  },
];

const roadmap = [
  {
    phase: "Now · Alpha loops",
    detail:
      "Tuning transaction speed, finishing the copy-any-wallet interactions, and polishing the purple UI.",
    status: "In progress",
  },
  {
    phase: "Soon · Wallet sharing",
    detail:
      "Allow curated public profiles so frens can follow your wallets without exposing sensitive info.",
    status: "Designing",
  },
  {
    phase: "Later · Automation",
    detail:
      "Trigger reminders from gas spikes, DAO payouts, or bridging activity with webhook + Discord hooks.",
    status: "On deck",
  },
];

const transactionMock = [
  {
    hash: "0x91da...4c9c",
    label: "DEX swap",
    amount: "+2.40 ETH",
    time: "2m ago",
    network: "Ethereum",
  },
  {
    hash: "0xb0d4...aa23",
    label: "NFT mint",
    amount: "-0.18 ETH",
    time: "9m ago",
    network: "Base",
  },
  {
    hash: "0x72ff...5b62",
    label: "Treasury top-up",
    amount: "+14,600 USDC",
    time: "21m ago",
    network: "Solana",
  },
];

const chainChips = ["Ethereum", "Polygon", "Base", "Arbitrum", "Solana"];

export default function CryptoTrackingWalletPage() {
  const colors = cryptoWallet.colors;

  return (
    <main
      className="mx-auto flex min-h-dvh w-full max-w-6xl flex-col px-6 pb-20 pt-12"
      style={{ color: colors.textPrimary }}
    >
      <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-semibold uppercase"
            style={{
              background: colors.surface,
              border: `1px solid ${colors.border}`,
              color: colors.primary,
            }}
          >
            CT
          </div>
          <div>
            <p className="text-lg font-semibold uppercase tracking-[0.3em]">
              {cryptoWallet.name}
            </p>
            <p className="text-sm text-[#A1A1AA]">
              Upcoming crypto sidekick by {brand.company.name}
            </p>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#A1A1AA]">
          <a
            href="#features"
            className="rounded-full border border-[rgba(255,255,255,0.16)] px-3 py-2 hover:border-[rgba(255,255,255,0.32)] hover:text-[#F8FAFC]"
          >
            Features
          </a>
          <a
            href="#roadmap"
            className="rounded-full border border-[rgba(255,255,255,0.16)] px-3 py-2 hover:border-[rgba(255,255,255,0.32)] hover:text-[#F8FAFC]"
          >
            Roadmap
          </a>
          <a
            href="#cta"
            className="rounded-full border border-[rgba(255,255,255,0.16)] px-3 py-2 hover:border-[rgba(255,255,255,0.32)] hover:text-[#F8FAFC]"
          >
            Waitlist
          </a>
          <Link
            href="/petsociety"
            className="rounded-full border border-[rgba(255,255,255,0.16)] px-3 py-2 hover:border-[rgba(255,255,255,0.32)] hover:text-[#F8FAFC]"
          >
            PetSociety
          </Link>
          <Link
            href="/"
            className="rounded-full border border-[rgba(255,255,255,0.16)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#A1A1AA] hover:border-[rgba(255,255,255,0.32)] hover:text-[#F8FAFC]"
          >
            Back to Neothone
          </Link>
        </nav>
      </header>

      <section className="mt-16 grid gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
        <div className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-[rgba(109,40,217,0.12)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-[#A1A1AA]">
            {cryptoWallet.status}
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-[#F8FAFC] sm:text-5xl">
            Stop screenshotting block explorers. Get one calm purple dashboard.
          </h1>
          <p className="text-base text-[#A1A1AA]">
            CryptoTracking Wallet is our grey-blue, purple-accented cockpit for
            multi-chain humans. Link wallets, watch flows in real time, copy any
            wallet that inspires you, and ship digest-ready exports.
          </p>

          <ul className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#A1A1AA]">
            {cryptoWallet.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-[rgba(255,255,255,0.12)] px-4 py-1.5"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={cryptoWallet.waitlistUrl}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.4em]"
              style={{
                background: colors.primary,
                color: colors.textPrimary,
                boxShadow: "0 10px 40px rgba(109, 40, 217, 0.45)",
              }}
            >
              Join waitlist
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center justify-center rounded-full border border-[rgba(255,255,255,0.16)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-[#F8FAFC] hover:border-[rgba(255,255,255,0.32)]"
            >
              Talk with the duo
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            className="glass-card relative rounded-[2.5rem] border px-8 py-10 shadow-2xl"
            style={{
              background: `linear-gradient(135deg, ${colors.surface} 0%, ${colors.backgroundAlt} 100%)`,
              borderColor: colors.border,
            }}
          >
            <div className="flex flex-col gap-4 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(167,139,250,0.14)] p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-[#A1A1AA]">
                Active wallet
              </p>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-[#A1A1AA]">Main Ops</p>
                  <p className="font-mono text-lg">0xF4A...92d0</p>
                </div>
                <button
                  className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em]"
                  style={{
                    background: colors.secondary,
                    color: colors.background,
                  }}
                >
                  Copy
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {chainChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full bg-[rgba(167,139,250,0.14)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A1A1AA]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {walletStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(167,139,250,0.14)] p-4"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-[#A1A1AA]">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-[#F8FAFC]">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-[#A1A1AA]">{stat.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              {transactionMock.map((tx) => (
                <div
                  key={tx.hash}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(167,139,250,0.14)] px-4 py-3"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#A1A1AA]">
                      {tx.network}
                    </p>
                    <p className="text-sm text-[#A1A1AA]">{tx.label}</p>
                    <p className="font-mono text-xs text-[#A1A1AA]">
                      {tx.hash}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-[#F8FAFC]">
                      {tx.amount}
                    </p>
                    <p className="text-xs text-[#A1A1AA]">{tx.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="absolute -bottom-10 right-4 w-60 rounded-3xl border px-4 py-5 text-sm shadow-xl"
            style={{
              background: colors.surface,
              borderColor: colors.border,
            }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#A1A1AA]">
              Quick actions
            </p>
            <ul className="mt-3 space-y-2 text-[#A1A1AA]">
              <li className="flex items-center justify-between">
                Tag wallet
                <span className="text-xs text-[#A1A1AA]">⌘ + T</span>
              </li>
              <li className="flex items-center justify-between">
                Copy address
                <span className="text-xs text-[#A1A1AA]">⌘ + C</span>
              </li>
              <li className="flex items-center justify-between">
                Share digest
                <span className="text-xs text-[#A1A1AA]">⌘ + S</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="mt-20 rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(167,139,250,0.14)] p-8 text-[#F8FAFC] shadow-2xl"
      >
        <div className="space-y-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">
              Grey-blue base, cool purple highlight, ultra clarity.
            </h2>
            <p className="text-sm text-[#A1A1AA]">
              Everything stays legible against the low-noise background so you
              can audit flows quickly.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {walletFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(167,139,250,0.14)] p-5"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#A1A1AA]">
                  {feature.title}
                </p>
                <p className="mt-3 text-sm text-[#A1A1AA]">
                  {feature.description}
                </p>
                <ul className="mt-4 space-y-1 text-xs text-[#A1A1AA]">
                  {feature.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(167,139,250,0.14)] p-7 text-[#F8FAFC]">
          <h3 className="text-2xl font-semibold">Link wallets in three taps</h3>
          <ol className="mt-6 space-y-4 text-sm text-[#A1A1AA]">
            <li className="flex items-start gap-3">
              <span
                className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold"
                style={{
                  background: colors.primary,
                  color: colors.textPrimary,
                }}
              >
                1
              </span>
              Paste any address or ENS. We auto-detect the chain and fetch
              metadata instantly.
            </li>
            <li className="flex items-start gap-3">
              <span
                className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold"
                style={{
                  background: colors.primary,
                  color: colors.textPrimary,
                }}
              >
                2
              </span>
              Label it—“Treasury,” “DeFi plays,” “Collector alt”—and drop it
              into a board.
            </li>
            <li className="flex items-start gap-3">
              <span
                className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold"
                style={{
                  background: colors.primary,
                  color: colors.textPrimary,
                }}
              >
                3
              </span>
              Copy the wallet or export a digest for your collaborators. Every
              action stays one click away.
            </li>
          </ol>
        </div>

        <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(167,139,250,0.14)] p-7 text-[#F8FAFC]">
          <h3 className="text-2xl font-semibold">
            What we’re polishing right now
          </h3>
          <ul className="mt-6 space-y-4 text-sm text-[#A1A1AA]">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-[#A1A1AA]">•</span>
              Copy-any-wallet overlay that suggests similar addresses
              automatically.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-[#A1A1AA]">•</span>
              Joint boards so you and your friends can annotate the same wallet.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-[#A1A1AA]">•</span>
              Color-coded alert badges for inflows, outflows, and burner
              activity.
            </li>
          </ul>
        </div>
      </section>

      <section
        id="roadmap"
        className="mt-16 rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(167,139,250,0.14)] p-8 text-[#F8FAFC]"
      >
        <h3 className="text-2xl font-semibold">Roadmap</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {roadmap.map((item) => (
            <div
              key={item.phase}
              className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(167,139,250,0.14)] p-5"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[#A1A1AA]">
                {item.phase}
              </p>
              <p className="mt-3 text-sm text-[#A1A1AA]">{item.detail}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#A1A1AA]">
                {item.status}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="cta"
        className="mt-16 rounded-3xl border border-[rgba(255,255,255,0.08)] bg-gradient-to-r from-[#1F1140] via-[#130C26] to-[#0A0A0B] p-10 text-[#F8FAFC] shadow-2xl"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-3xl font-semibold">Want early access?</h3>
            <p className="mt-3 max-w-2xl text-sm text-[#A1A1AA]">
              We’re looking for curious traders, DAO treasurers, and frens who
              live inside block explorers. Reply with feedback and we’ll send a
              clickable prototype as soon as it lands.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={cryptoWallet.waitlistUrl}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em]"
              style={{
                background: colors.primary,
                color: colors.textPrimary,
                boxShadow: "0 15px 45px rgba(109, 40, 217, 0.5)",
              }}
            >
              Join the waitlist
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center justify-center rounded-full border border-[rgba(255,255,255,0.16)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#F8FAFC] hover:border-[rgba(255,255,255,0.32)]"
            >
              Email us feedback
            </a>
          </div>
        </div>
      </section>

      <footer className="mt-16 flex flex-col gap-3 border-t border-[rgba(255,255,255,0.08)] pt-6 text-sm text-[#A1A1AA] sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {brand.company.name} . CryptoTracking
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Link href="/" className="hover:text-[#F8FAFC]">
            Home
          </Link>
          <Link href="/petsociety" className="hover:text-[#F8FAFC]">
            PetSociety
          </Link>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[#F8FAFC]">
            Contact
          </a>
        </div>
      </footer>
    </main>
  );
}
