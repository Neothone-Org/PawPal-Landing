const features = [
  {
    title: "Connected Care Circles",
    body: "Share updates with co-owners, breeders, and vets without juggling apps or long message threads.",
  },
  {
    title: "Mood & Milestone Insights",
    body: "Log behavior changes, training wins, and health events to uncover patterns that keep pets thriving.",
  },
  {
    title: "Resource Library",
    body: "Curated checklists and guides tailored to your breed, life stage, and goals—always vetted by specialists.",
  },
];

const journeys = [
  {
    label: "Litter to forever home",
    detail:
      "Guided handoffs and growth snapshots keep new families confident from week eight onward.",
  },
  {
    label: "Everyday routines",
    detail:
      "Track feedings, meds, walks, and enrichment so the whole household stays in sync.",
  },
  {
    label: "Health partnerships",
    detail:
      "Invite your vet or trainer to view selected logs and share recommendations in context.",
  },
];

const faqs = [
  {
    question: "When will screenshots be available?",
    answer:
      "We will publish high-resolution app tours soon. In the meantime, request early access and we will notify you when the media kit is ready.",
  },
  {
    question: "Is PawPal free?",
    answer:
      "Yes—core features are free for families. Advanced insights and breeder tooling are available through optional plans.",
  },
  {
    question: "How do I become a beta partner?",
    answer:
      "Email hello@neothone.com with your role and goals. We run rolling cohorts for breeders, rescues, clinics, and trainers.",
  },
];

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
      className="group flex items-center gap-4 rounded-2xl border border-white/30 bg-white/10 px-6 py-4 text-left text-white shadow-lg transition hover:border-white hover:bg-white/15"
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
      <header className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-lg font-semibold">
            Paw
          </div>
          <div>
            <p className="text-lg font-semibold uppercase tracking-[0.3em]">
              PawPal
            </p>
            <p className="text-sm text-white/70">
              A companion app crafted by Neothone
            </p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-white/75 md:flex">
          <a href="#features" className="hover:text-white">
            Features
          </a>
          <a href="#journeys" className="hover:text-white">
            Journeys
          </a>
          <a href="#faq" className="hover:text-white">
            FAQ
          </a>
          <a href="mailto:hello@neothone.com" className="hover:text-white">
            Contact
          </a>
        </nav>
        <Link
          href="/"
          className="hidden rounded-full border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 hover:border-white hover:text-white md:inline-flex"
        >
          Back to Neothone
        </Link>
      </header>

      <section className="mt-16 flex flex-col gap-12 lg:flex-row lg:items-center">
        <div className="max-w-xl space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em]">
            Companion-first design
          </span>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Keep every caretaker aligned with a calm, intelligent pet journal.
          </h1>
          <p className="text-base text-white/80">
            PawPal translates daily routines, milestones, and health data into a
            shared story for the people who love and support your pet. We focus
            on clarity, consent, and collaboration.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <StoreButton
              href="https://play.google.com/store/apps/details?id=com.neothone.pawpal"
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
              href="https://apps.apple.com"
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
          <div className="glass-card relative w-full max-w-sm rounded-[2.5rem] px-6 pb-8 pt-10 text-left text-[#2F2F2F] shadow-2xl">
            <div className="absolute left-1/2 top-0 flex -translate-y-1/2 -translate-x-1/2 gap-3">
              <span className="h-3 w-24 rounded-full bg-white/40" />
            </div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#696969]">
              Upcoming Screenshots
            </p>
            <div className="mt-6 space-y-4">
              <div className="h-36 rounded-2xl border border-dashed border-[#D9C5B6] bg-white/70" />
              <div className="h-36 rounded-2xl border border-dashed border-[#D9C5B6] bg-white/60" />
              <p className="text-xs text-[#696969]">
                Placeholder frames for app tours. Drop final assets into
                `public/pawpal` once available.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="mt-20 grid gap-8 rounded-3xl bg-white px-6 py-14 text-[#2F2F2F] shadow-2xl lg:grid-cols-3"
      >
        {features.map((feature) => (
          <div key={feature.title} className="space-y-4">
            <span className="inline-block rounded-full bg-[#F6EFEA] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#2F5D50]">
              {feature.title}
            </span>
            <p className="text-sm text-[#696969]">{feature.body}</p>
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
              Built for every chapter of pet companionship.
            </h2>
            <p className="text-sm text-white/80">
              Whether you are welcoming a new litter, raising a therapy animal,
              or supporting a senior companion, PawPal adapts to deliver the
              right touchpoints at the right time.
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
                <p className="mt-2 text-sm text-white/85">{journey.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="mt-20 rounded-3xl bg-white px-6 py-14 text-[#2F2F2F] shadow-2xl"
      >
        <div className="mx-auto max-w-3xl space-y-8">
          <h2 className="text-3xl font-semibold text-[#2F5D50]">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-[#EFE8E3] bg-white p-5 transition"
                open
              >
                <summary className="cursor-pointer text-sm font-semibold text-[#2F2F2F]">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm text-[#696969] group-open:animate-fade-in">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-20 flex flex-col gap-3 border-t border-white/25 pt-6 text-sm text-white/75 sm:flex-row sm:items-center sm:justify-between">
        <div>
          © {new Date().getFullYear()} Neothone Labs Inc. · PawPal Companion App
        </div>
        <div className="flex items-center gap-6">
          <a href="/pawpal/privacy" className="text-white/75 hover:text-white">
            Privacy
          </a>
          <a href="/pawpal/terms" className="text-white/75 hover:text-white">
            Terms
          </a>
          <a
            href="mailto:hello@neothone.com"
            className="text-white/75 hover:text-white"
          >
            Support
          </a>
        </div>
      </footer>
    </main>
  );
}
import Link from "next/link";
import type { ReactNode } from "react";
