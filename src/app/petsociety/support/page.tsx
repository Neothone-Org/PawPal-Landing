import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { brand } from "../../../lib/brand";

const petSocietyConfig = brand.product.petSociety;
const CONTACT_EMAIL =
  petSocietyConfig.supportEmail ?? brand.company.contactEmail;
const petSocietyDisplayName = petSocietyConfig.alias
  ? `${petSocietyConfig.name} (${petSocietyConfig.alias})`
  : petSocietyConfig.name;

const supportTopics = [
  {
    title: "Accounts & identity",
    summary: "Reset passwords, update profile information.",
    bullets: [
      "Profile → Settings → Change Password issues a verification code to your inbox.",
      "If you use Google or Apple sign-in, confirm which provider is linked so we can re-enable access quickly.",
    ],
  },
  {
    title: "Discovery, swipes & requests",
    summary:
      "Fix stuck swipe decks, duplicate match prevention, or chat/match requests that need manual resets.",
    bullets: [
      "Share the pet profile or request shown in Settings → Support when you email us.",
      "We can re-open conversations, update PetInteraction history, or reverse a dismissal if both parties agree.",
    ],
  },
  {
    title: "Community & reporting",
    summary:
      "Escalate abuse, media takedowns, or urgent safety concerns from posts, pet profiles, user accounts, or DMs.",
    bullets: [
      "Use ••• → Report on any post, pet, profile, or user account and include screenshots or timestamps.",
      "Emergency situations jump to the top of our queue; we coordinate freezes.",
    ],
  },
];

const contactChannels = [
  {
    title: "Email the PetSociety team",
    detail:
      "Include any useful informations plus screenshots so engineers can replay the issue.",
    eta: "Replies 2 business days.",
    href: `mailto:${CONTACT_EMAIL}?subject=PetSociety%20Support`,
    action: `Email ${CONTACT_EMAIL}`,
  },
];

const expectations = [
  {
    label: "First response",
    description:
      "Support acknowledges requests within 48 hours; urgent safety flags ping our on-call moderator immediately.",
  },
  {
    label: "Live troubleshooting",
    description:
      "We may request screen recordings or start a secure call to walk through swipes, requests, or messaging threads.",
  },
  {
    label: "Resolution summary",
    description:
      "Every ticket closes with remediation notes, moderation decisions, and links to relevant policies.",
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
    "Get help with PetSociety accounts, discovery feeds, requests, messaging, and moderation—straight from the Neothone trust & safety team.",
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
            alt={`${petSocietyDisplayName} icon`}
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
          reach the PetSociety trust & safety team. Start with the topic that
          matches your situation and a real human will follow up with context.
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
            PetSociety’s core team triages every request—no bot responses, no
            outsourced scripts. Share context and we will reply with precise
            steps or a quick debug invite.
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
