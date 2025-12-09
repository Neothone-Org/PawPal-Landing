"use client";

import Image from "next/image";
import { useState } from "react";
import { brand } from "../lib/brand";

const petSocietyProduct = brand.product.petSociety;
const cryptoWalletProduct = brand.product.cryptoTrackingWallet;

const heroHighlights = [
  `Founded ${brand.company.foundingYear}`,
  `${brand.company.teamSize}-developer studio`,
  "Mobile + web craftsmanship",
];

const productCards = [
  {
    name: petSocietyProduct.name,
    description: petSocietyProduct.description,
    cta: "Dive into PetSociety",
    href: petSocietyProduct.slug,
    meta: "Live · Community + Matchmaking",
    badge: "Discovery · Chat · Breeding circles",
  },
  {
    name: cryptoWalletProduct.name,
    description: cryptoWalletProduct.description,
    cta: "Preview the wallet",
    href: cryptoWalletProduct.slug,
    meta: `${cryptoWalletProduct.status} · Wallet intelligence`,
    badge: cryptoWalletProduct.tags.join(" · "),
  },
  {
    name: "Studio collabs",
    description:
      "Micro tools and experimental dashboards we co-build with friends and early partners to keep shipping momentum high.",
    cta: "Partner with us",
    href: "#partners",
    meta: "Rolling experiments",
    badge: "Concept sprints · Prototypes",
  },
];

const milestones = [
  {
    label: "First live product",
    value: `${brand.company.foundingYear}`,
    detail: "PetSociety",
  },
];

const CONTACT_EMAIL = brand.company.contactEmail;

const navLinks = [
  { label: "Mission", href: "#mission" },
  { label: "Products", href: "#products" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen text-[var(--color-ink)]">
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-8">
        <div className="flex items-center gap-3 text-white">
          <div className="flex h-32 w-32 items-center justify-center">
            <Image
              src={brand.company.logo}
              width={128}
              height={128}
              alt={`${brand.company.name} logo`}
              className="h-32 w-32 object-contain drop-shadow-lg rounded-full"
              priority
            />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-wide uppercase">
              {brand.company.name}
            </p>
            <p className="text-sm text-white/70">{brand.company.tagline}</p>
          </div>
        </div>

        <nav className="hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full border border-white/20 px-4 py-2 hover:border-white hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white/80 transition hover:border-white hover:text-white md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <span className="relative flex h-4 w-5 flex-col justify-between">
            <span
              className={`h-[2px] w-full rounded bg-current transition-transform ${
                mobileMenuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full rounded bg-current transition-opacity ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[2px] w-full rounded bg-current transition-transform ${
                mobileMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        <a
          href={cryptoWalletProduct.slug}
          className="hidden rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white hover:border-white/60 md:inline-flex"
        >
          Explore Crypto
        </a>
        <a
          href={petSocietyProduct.slug}
          className="hidden rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white hover:border-white/60 md:inline-flex"
        >
          Explore PetSociety
        </a>
      </header>

      {mobileMenuOpen ? (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm md:hidden">
          <div className="absolute inset-x-4 top-4 rounded-3xl border border-white/20 bg-white/10 p-6 text-white shadow-2xl">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                Navigate
              </p>
              <button
                type="button"
                className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.4em] text-white/80"
                onClick={() => setMobileMenuOpen(false)}
              >
                Close
              </button>
            </div>
            <ul className="mt-6 space-y-4 text-lg font-semibold">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex w-full items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white/90"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                    <span aria-hidden>→</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-3">
              <a
                href="/petsociety"
                className="block rounded-2xl border border-white/25 px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-white hover:border-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Explore PetSociety
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="block rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-ink)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Email us
              </a>
            </div>
          </div>
        </div>
      ) : null}

      <section className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-10 lg:flex-row lg:items-center">
        <div className="max-w-xl space-y-8 text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]">
            Microstudio · Since {brand.company.foundingYear}
          </span>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Two developers building PetSociety today and CryptoTracking Wallet
            tomorrow.
          </h1>
          <p className="text-base text-white/80">
            Neothone Technologies is the techy duo chasing greatness from
            Romania since 2025. We ship PetSociety—a discovery app for every pet
            species—while crafting a purple-hued crypto wallet companion that
            keeps your wallets linked, transactions transparent, and copy-able
            in seconds.
          </p>

          <ul className="flex flex-wrap gap-3 text-sm text-white/80">
            {heroHighlights.map((item) => (
              <li
                key={item}
                className="glass-card flex items-center gap-3 rounded-full px-5 py-2 text-xs uppercase tracking-widest"
              >
                <span className="h-2 w-2 rounded-full bg-white/80" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="/petsociety"
              className="primary-button inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-widest"
            >
              Explore PetSociety
            </a>
            <a
              href={cryptoWalletProduct.slug}
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white hover:border-white"
            >
              Preview Crypto Wallet
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex max-w-lg flex-1 justify-center">
          <div className="glass-card w-full rounded-3xl p-8 text-white shadow-2xl">
            <h2 className="text-lg font-semibold uppercase tracking-[0.3em] text-white/70">
              Studio Snapshot
            </h2>
            <p className="mt-4 text-2xl font-semibold">
              Story started in {brand.company.foundingYear}. Two devs, one live
              pet app, one bold crypto wallet, zero fluff.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {milestones.map((item) => (
                <div key={item.label} className="rounded-2xl bg-white/5 p-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/60">
                    {item.label}
                  </p>
                  <p className="mt-2 text-3xl font-semibold">{item.value}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50 p-3">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="mission"
        className="mx-auto max-w-6xl rounded-3xl bg-white px-6 py-16 text-[var(--color-ink)] shadow-2xl"
      >
        <div className="grid gap-10 lg:grid-cols-[2fr,1.2fr] lg:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-[var(--color-primary)]">
              Our 2025 story: stretch two devs across pets and crypto without
              losing the soul.
            </h2>
            <p className="text-base text-[var(--color-muted)]">
              We keep it scrappy and intentional—scouting playful pals one day,
              sketching wallet flows the next. PetSociety deepens the
              relationship between people and every kind of pet, while
              CryptoTracking Wallet gives traders a clear window into what their
              addresses are doing. Everything is handcrafted with privacy,
              transparency, and playfulness.
            </p>
            <p className="text-sm text-[var(--color-muted)]">
              PetSociety is not a breeding or marketplace app. We do not support
              transactional or breeding activity, and we rely on in-app reports
              on posts, pets, or users whenever something seems wrong.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[var(--color-border-soft)] bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  PetSociety Discovery Graph
                </p>
                <p className="mt-2 text-sm text-[var(--color-ink)]">
                  Match, chat, and celebrate every animal imaginable—from
                  parrots to poodles—inside a friendly feed that highlights pals
                  and skips marketplace vibes.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--color-border-soft)] bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  CryptoTracking Clarity
                </p>
                <p className="mt-2 text-sm text-[var(--color-ink)]">
                  Link wallets, stream transactions, and copy public addresses
                  safely with a purple-forward UI meant for lightning-fast
                  reference.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card h-full rounded-3xl p-8 text-white">
            <h3 className="text-sm uppercase tracking-[0.4em] text-white/50">
              Founder Note
            </h3>
            <p className="mt-5 text-lg leading-relaxed text-white/90">
              “We’re just two devs obsessed with shipping. PetSociety proved
              that playful, respectful pet tech can exist, and now we’re pouring
              the same energy into a crypto wallet that feels thoughtful. Techy,
              hungry, and aiming to become great.”
            </p>
            <p className="mt-8 text-sm uppercase tracking-[0.3em] text-white/60">
              Neothone Founding Duo
            </p>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white">
              Products we’re nurturing right now
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-white/75">
              PetSociety focuses on the joy of discovering and matching pets;
              CryptoTracking Wallet focuses on absolute clarity for on-chain
              life. Both share Neothone’s love for strong UX and trustworthy
              data.
            </p>
          </div>
          <a
            href="#partners"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white hover:border-white"
          >
            Partner with Neothone
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {productCards.map((product) => (
            <a
              key={product.name}
              href={product.href}
              className="group glass-card flex h-full flex-col justify-between rounded-3xl p-6 transition-transform hover:-translate-y-1"
            >
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                  {product.meta}
                </p>
                <h3 className="text-2xl font-semibold text-white">
                  {product.name}
                </h3>
                {product.badge ? (
                  <p className="text-[11px] uppercase tracking-[0.4em] text-white/50">
                    {product.badge}
                  </p>
                ) : null}
                <p className="text-sm text-white/80">{product.description}</p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white">
                {product.cta}
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section
        id="partners"
        className="mx-auto max-w-6xl rounded-3xl bg-white px-6 py-16 text-[var(--color-ink)] shadow-2xl"
      >
        <div className="grid gap-12 lg:grid-cols-[1.2fr,1fr] lg:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-[var(--color-primary)]">
              Partners keep us honest—whether you work with pets or protocols.
            </h2>
            <p className="text-base text-[var(--color-muted)]">
              We co-design with caretakers, rescues, and wallet power-users to
              make sure PetSociety hits the right tone and CryptoTracking Wallet
              covers every on-chain habit. Bring us your brief, and we’ll build
              alongside you.
            </p>

            <ul className="space-y-4 text-sm text-[var(--color-ink)]">
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                Host exclusive discovery drops, match spotlights, or community
                Q&As directly inside PetSociety.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                Plug your wallet workflows into CryptoTracking mock data to help
                us perfect the timeline.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                Join quarterly labs to test new matching rules, safety tools,
                and wallet notification ideas.
              </li>
            </ul>
          </div>

          <div className="space-y-6 rounded-3xl border border-[var(--color-border-soft)] bg-white p-8">
            <h3 className="text-lg font-semibold text-[var(--color-ink)]">
              Recent pilot snapshots
            </h3>
            <div className="space-y-4 text-sm text-[var(--color-muted)]">
              <p>
                🐶{" "}
                <span className="font-medium text-[var(--color-ink)]">
                  Emberbrook Shepherds
                </span>{" "}
                reduced new-owner support tickets by 42% after adopting
                PetSociety onboarding.
              </p>
              <p>
                🩺{" "}
                <span className="font-medium text-[var(--color-ink)]">
                  Northgate Veterinary
                </span>{" "}
                layered PetSociety community posts into discharge packets for
                new adopters.
              </p>
              <p>
                🪙{" "}
                <span className="font-medium text-[var(--color-ink)]">
                  Tenet Nodes
                </span>{" "}
                stress-tested our CryptoTracking Wallet mockups to ensure
                multi-wallet linking is lightning fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20 text-white">
        <div className="rounded-3xl border border-white/30 bg-white/10 p-10 backdrop-blur">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Help PetSociety and CryptoTracking Wallet become great
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-white/80">
                Send us your wishlist—community match-ups you want to see,
                wallet data you need to untangle, or features that would make
                adoption smoother. We answer every note personally.
              </p>
            </div>
            <a
              className="primary-button inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em]"
              href={`mailto:${CONTACT_EMAIL}`}
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-3 px-6 pb-12 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Neothone All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="/petsociety/privacy" className="hover:text-white">
            Privacy
          </a>
          <a href="/petsociety/terms" className="hover:text-white">
            Terms
          </a>
        </div>
      </footer>
    </main>
  );
}
