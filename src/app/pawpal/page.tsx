import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { brand } from "../../lib/brand";

const features = [
  {
    title: "All-species discovery",
    body:
      "Browse dogs, cats, reptiles, birds, and rarities with advanced filters for temperament, lineage, and lifestyle.",
  },
  {
    title: "Community & chat",
    body:
      "Post updates, share care threads, open topic rooms, and hop into DMs without leaving the PawPal universe.",
  },
  {
    title: "Swipe-to-match deck",
    body:
      "A Tinder-style interface that helps you match your pet with compatible companions for breeding, playdates, or new homes.",
  },
];

const journeys = [
  {
    label: "Discovery clubs",
    detail:
      "Host niche groups—think sphynx lovers, corgi breeders, or parakeet rescues—and invite people to browse your latest posts.",
  },
  {
    label: "Breed-ready flows",
    detail:
      "Show lineage, genetic testing, and availability, then match with qualified partners through swipe-style queues.",
  },
  {
    label: "Community vibes",
    detail:
      "Drop polls, sell handmade gear, share memes, or stream lives; PawPal keeps the conversation threaded and searchable.",
  },
];

const faqs = [
  {
    question: "What kinds of pets can I post?",
    answer:
      "Any companion—you can list purebred litters, rescues, hobby farm animals, reptiles, fish, or fantasy mixes. Tag them with traits so discovery stays smart.",
  },
  {
    question: "How does the Tinder-style matching work?",
    answer:
      "Build a profile for your pet, set intent (breed, play, rehome, community), and swipe through curated decks. Mutual matches unlock chat, file sharing, and vet-vetted resources.",
  },
  {
    question: "Is the community free?",
    answer:
      "Yes. Posting, commenting, chatting, and matching stay free. Optional breeder suites—analytics, storefronts, badge programs—are rolling out later.",
  },
];

const CONTACT_EMAIL = brand.company.contactEmail;
const pawpalConfig = brand.product.pawpal;

type StoreButtonProps = {
  href: string;
  title: string;
  subtitle: string;
  icon: ReactNode;
};

function StoreButton({ href, title, subtitle, icon }: StoreButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-white/30 bg-white/10 px-6 py-4 text-left text-white shadow-lg transition hover:border-white hover:bg-white/15"
      aria-label={`${title} - ${subtitle}`}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white">
        {icon}
      </span>
      <span className="flex flex-col text-sm font-medium">
        <span className="text-xs uppercase tracking-[0.3em] text-white/70">
          {subtitle}
        </span>
        <span className="text-base font-semibold text-white">{title}</span>
      </span>
    </a>
  );
}

export default function PawPalPage() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-6xl flex-col px-6 pb-20 pt-12 text-white">
      <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 p-2">
            <Image
              src={pawpalConfig.logo}
              alt={`${pawpalConfig.name} logo`}
              width={48}
              height={48}
              className="h-8 w-8 object-contain"
              priority
            />
          </div>
          <div>
            <p className="text-lg font-semibold uppercase tracking-[0.3em]">
              {pawpalConfig.name}
            </p>
            <p className="text-sm text-white/70">
              A companion app crafted by {brand.company.name}
            </p>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-6 text-sm font-medium text-white/80">
          <a href="#features" className="hover:text-white">
            Features
          </a>
          <a href="#journeys" className="hover:text-white">
            Journeys
          </a>
          <a href="#faq" className="hover:text-white">
            FAQ
          </a>
          <Link href="/pawpal/delete-account" className="hover:text-white">
            Delete account
          </Link>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">
            Contact
          </a>
          <Link
            href="/"
            className="rounded-full border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 hover:border-white hover:text-white"
          >
            Back to Neothone
          </Link>
        </nav>
      </header>

      <section className="mt-16 flex flex-col gap-12 lg:flex-row lg:items-center">
        <div className="max-w-xl space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em]">
            Discovery · Community · Matching
          </span>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Discover, chat, and match pets of every kind with PawPal.
          </h1>
          <p className="text-base text-white/80">
            PawPal is the do-it-all pet network: browse exotic companions,
            cultivate breeder circles, post to the community feed, and swipe
            through Tinder-style decks to find the perfect match or play date.
            Built by the Neothone duo with the earthy palette you already love.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <StoreButton
              href={pawpalConfig.googlePlayUrl}
              subtitle="Available soon"
              title="Google Play"
              icon={
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 2l12.5 10L3 22V2zm13.3 10.2L6 19.4l9.3-7.2zM6 4.6l10.3 7.4L6 19.4V4.6zm4.5 6.4L6 17.4V6.6l4.5 4.4z" />
                </svg>
              }
            />
            <StoreButton
              href={pawpalConfig.appStoreUrl}
              subtitle="Coming soon"
              title="App Store"
              icon={
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.6 2c-.7.4-1.5 1.1-1.9 1.9-.4.7-.8 1.7-.6 2.6.9.1 1.9-.5 2.5-1.2.6-.7 1-1.8.8-2.7-.2-.1-.4-.3-.8-.6zM19.3 12c-.1-2.4 2-3.5 2.1-3.6-1.1-1.6-2.9-1.8-3.5-1.8-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-3-1.1-1.5-.4-2.9.1-3.6.6-1.5 1-2.7 2.8-2.3 4.6 0 0 1.8.7 1.9 2.9.1 2.3-2 3.3-2 3.4 1 1.5 2.9 1.7 3.4 1.7.7.1 1.4-.2 2-.5.6-.3 1.2-.5 1.9-.5.7 0 1.3.2 1.9.5.6.3 1.2.5 2 .5 1 0 2.5-.2 3.4-1.7 0-.1-1.9-.7-1.9-3.4zm-4.2-6.4c.6-.8 1-1.9.9-3-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-.9 2.9 1 .1 1.9-.5 2.7-1.3z" />
                </svg>
              }
            />
          </div>
        </div>

        <div className="relative flex w-full justify-center lg:justify-end">
          <div className="glass-card relative w-full max-w-sm rounded-[2.5rem] px-6 pb-8 pt-10 text-left text-[var(--color-ink)] shadow-2xl">
            <div className="absolute left-1/2 top-0 flex -translate-y-1/2 -translate-x-1/2 flex-col items-center gap-2 text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[var(--color-ink)]">
                <Image
                  src={pawpalConfig.logo}
                  alt="PawPal icon"
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain"
                />
                Sneak peek
              </span>
              <span className="h-2 w-24 rounded-full bg-white/60" />
            </div>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-muted)]">
              Upcoming Screenshots
            </p>
            <div className="mt-6 space-y-4">
              <div className="h-36 rounded-2xl border border-dashed border-[var(--color-accent-warm)] bg-white/70" />
              <div className="h-36 rounded-2xl border border-dashed border-[var(--color-accent-warm)] bg-white/60" />
              <p className="text-xs text-[var(--color-muted)]">
                Placeholder frames for app tours. Drop final assets into
                <code className="ml-1 rounded bg-white/80 px-1 py-0.5 text-[10px] text-[var(--color-ink)]">
                  public/pawpal
                </code>{" "}
                once available.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="mt-20 grid gap-8 rounded-3xl bg-white px-6 py-14 text-[var(--color-ink)] shadow-2xl lg:grid-cols-3"
      >
        {features.map((feature) => (
          <div key={feature.title} className="space-y-4">
            <span className="inline-block rounded-full bg-[var(--color-tint)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              {feature.title}
            </span>
            <p className="text-sm text-[var(--color-muted)]">{feature.body}</p>
          </div>
        ))}
      </section>

      <section
        id="journeys"
        className="mt-20 rounded-3xl border border-white/30 bg-white/10 p-10 text-white backdrop-blur"
      >
        <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">
              Built for every listing, vibe, and wild pet idea.
            </h2>
            <p className="text-sm text-white/80">
              PawPal adapts to experimental breeders, seasoned rescues, casual
              hobbyists, and meme-posting community members.
            </p>
          </div>
          <div className="space-y-4">
            {journeys.map((journey) => (
              <div
                key={journey.label}
                className="rounded-2xl border border-white/25 bg-white/10 p-5"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                  {journey.label}
                </p>
                <p className="mt-2 text-sm text-white/80">{journey.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="mt-20 rounded-3xl bg-white px-6 py-14 text-[var(--color-ink)] shadow-2xl"
      >
        <div className="mx-auto max-w-3xl space-y-8">
          <h2 className="text-3xl font-semibold text-[var(--color-primary)]">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-[var(--color-border-soft)] bg-white p-5 transition"
                open
              >
                <summary className="cursor-pointer text-sm font-semibold text-[var(--color-ink)]">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm text-[var(--color-muted)] group-open:animate-fade-in">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-20 flex flex-col gap-3 border-t border-white/25 pt-6 text-sm text-white/75 sm:flex-row sm:items-center sm:justify-between">
        <div>
          © {new Date().getFullYear()} {brand.company.name} Labs Inc. · PawPal Companion App
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <a href="/pawpal/privacy" className="text-white/75 hover:text-white">
            Privacy
          </a>
          <a href="/pawpal/terms" className="text-white/75 hover:text-white">
            Terms
          </a>
          <Link
            href="/pawpal/delete-account"
            className="text-white/75 hover:text-white"
          >
            Delete account
          </Link>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-white/75 hover:text-white"
          >
            Support
          </a>
        </div>
      </footer>
    </main>
  );
}
