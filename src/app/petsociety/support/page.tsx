import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { brand } from "../../../lib/brand";

const petSocietyConfig = brand.product.petSociety;
const CONTACT_EMAIL = brand.company.contactEmail;

const supportTopics = [
  {
    title: "Account & login",
    summary:
      "Reset passkeys, change your email, and unlock profiles that were flagged for unusual activity.",
    bullets: [
      "Use Profile → Settings → Security for passkey resets and session reviews.",
      "You can update your email from Profile → Account; contact us if you no longer have access.",
      "If your account is locked, share the device ID from the lock screen so we can restore it faster.",
    ],
  },
  {
    title: "Community & safety",
    summary:
      "Report listings, moderations, or urgent safety concerns inside clubs, feeds, or DM rooms.",
    bullets: [
      "Tap ••• on any post or profile → Report and include screenshots or chat links.",
      "Incidents that involve physical meetups are escalated to the on-call moderator instantly.",
      "If you feel unsafe, pause all contact and tell us—our team can freeze threads within minutes.",
    ],
  },
  {
    title: "Billing & data",
    summary:
      "Understand receipts, breeder suite invoices, or request exports under GDPR/CCPA.",
    bullets: [
      "Receipts for add-ons live in Profile → Billing and can be downloaded anytime.",
      "Ask for a portable export before you delete an account and we will deliver a secure link.",
      "Privacy and data rights questions receive priority handling by the Neothone founders.",
    ],
  },
];

const contactChannels = [
  {
    title: "In-app support",
    detail:
      "Open Profile → Help & support inside PetSociety to browse articles and submit a ticket from your device.",
    eta: "Fastest for troubleshooting & device-specific bugs.",
  },
  {
    title: "Email our team",
    detail:
      "Send us context, screenshots, or exports and we will respond from our shared inbox.",
    eta: "Replies within 1 business day (Mon–Fri, UTC+2).",
    href: `mailto:${CONTACT_EMAIL}?subject=PetSociety%20Support`,
    action: `Email ${CONTACT_EMAIL}`,
  },
  {
    title: "Priority incidents",
    detail:
      "If a meetup or pet safety situation is unfolding, mark your ticket as urgent or include “Priority” in the subject line.",
    eta: "We jump in under 4 hours, day or night.",
  },
];

const expectations = [
  {
    label: "First response",
    description:
      "You will hear from a PetSociety team member within 24 hours (often sooner).",
  },
  {
    label: "Live troubleshooting",
    description:
      "We may invite you to a quick screenshare or send diagnostic steps tailored to your device.",
  },
  {
    label: "Resolution summary",
    description:
      "Every ticket ends with a recap email, links to next steps, and guidance on preventing repeats.",
  },
];

const quickLinks = [
  {
    title: "Delete my account",
    description:
      "Follow the secure workflow or reach us if you can’t access the app.",
    href: "/petsociety/delete-account",
  },
  {
    title: "Review privacy",
    description:
      "Understand how PetSociety collects, stores, and deletes data.",
    href: "/petsociety/privacy",
  },
  {
    title: "Terms of service",
    description:
      "Learn the policies that govern community conduct and commerce.",
    href: "/petsociety/terms",
  },
];

export const metadata: Metadata = {
  title: "PetSociety Support",
  description:
    "Get help with PetSociety accounts, safety questions, billing, and more—plus direct lines to the Neothone team.",
};

export default function PetSocietySupportPage() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-5xl flex-col gap-10 px-6 py-16 text-white">
      <Link
        href="/petsociety"
        className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
      >
        ← Back to PetSociety overview
      </Link>

      <header className="space-y-6 text-center">
        <div className="mx-auto flex w-fit items-center gap-3 px-5 py-2 text-xs uppercase tracking-[0.35em]">
          <Image
            src={petSocietyConfig.logo}
            alt="PetSociety icon"
            width={120}
            height={120}
            className="h-24 w-24 object-contain drop-shadow-lg rounded-full"
          />
          PetSociety Support
        </div>
        <h1 className="text-4xl font-semibold leading-snug">
          Need help with PetSociety?
        </h1>
        <p className="mx-auto max-w-3xl text-base text-white/80">
          This page centralizes the most-requested answers plus every way to
          reach the Neothone team. Start with the topic that matches your
          situation and send us a ticket whenever you need a human touch.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="primary-button inline-flex items-center justify-center rounded-2xl px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em]"
          >
            Browse support options
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=PetSociety%20Support`}
            className="inline-flex items-center justify-center rounded-2xl border border-white/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-white hover:text-white"
          >
            Email {CONTACT_EMAIL}
          </a>
        </div>
      </header>

      <section className="grid gap-6 rounded-3xl border border-white/25 bg-white/10 p-6 backdrop-blur lg:grid-cols-3">
        {supportTopics.map((topic) => (
          <div
            key={topic.title}
            className="space-y-4 rounded-2xl bg-white/5 p-5 text-white/80"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
              {topic.title}
            </p>
            <p className="text-sm">{topic.summary}</p>
            <ul className="space-y-2 text-xs">
              {topic.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section
        id="contact"
        className="flex flex-col gap-8 rounded-3xl bg-white px-6 py-10 text-[var(--color-ink)] shadow-2xl md:flex-row"
      >
        <div className="space-y-5 md:w-1/2">
          <h2 className="text-3xl font-semibold text-[var(--color-primary)]">
            Reach us the way that works for you
          </h2>
          <p className="text-sm text-[var(--color-muted)]">
            Two humans run PetSociety, so you are never routed through a bot
            wall. Share as much context as you can, and we will follow up with
            clear steps or a screenshare invite.
          </p>
          <ul className="space-y-4">
            {contactChannels.map((channel) => (
              <li
                key={channel.title}
                className="rounded-2xl border border-[var(--color-border-soft)] p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
                  {channel.title}
                </p>
                <p className="mt-2 text-sm text-[var(--color-ink)]">
                  {channel.detail}
                </p>
                <p className="mt-2 text-xs text-[var(--color-muted)]">
                  {channel.eta}
                </p>
                {channel.href && channel.action ? (
                  <a
                    href={channel.href}
                    className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--color-primary)] hover:underline"
                  >
                    {channel.action} →
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4 rounded-3xl border border-[var(--color-border-soft)] bg-[var(--color-tint)]/70 p-6 md:w-1/2">
          <h3 className="text-lg font-semibold text-[var(--color-primary)]">
            What happens after you reach out?
          </h3>
          <ul className="space-y-3 text-sm text-[var(--color-ink)]">
            {expectations.map((item) => (
              <li
                key={item.label}
                className="rounded-2xl bg-white/90 p-4 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
                  {item.label}
                </p>
                <p className="mt-2 text-[var(--color-ink)]">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
          <p className="text-xs text-[var(--color-muted)]">
            Weekend requests stay in queue, but we still scan for urgent
            pet-welfare issues twice a day.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-white/25 bg-white/10 p-6 text-white/80 backdrop-blur">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Helpful resources
            </h3>
            <p>
              Jump straight to the policies and workflows people ask about most.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="rounded-2xl border border-white/20 bg-white/5 p-4 text-sm text-white hover:border-white hover:text-white"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                  {link.title}
                </p>
                <p className="mt-2 text-white/80">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
