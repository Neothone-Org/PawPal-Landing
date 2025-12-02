import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { brand } from "../../lib/brand";

const features = [
  {
    title: "Profile storytelling",
    body: "Launch people + pet profiles with heartwarming bios, achievements, and photo galleries that show every quirk and cuddle.",
  },
  {
    title: "Discovery feed",
    body: "Swipe through easy-to-use decks with filters for intent, distance, and pet type so you always meet companions that fit your vibe.",
  },
  {
    title: "Community posts",
    body: "Share daily wins, silly moments, and milestones with reactions that help the community cheer alongside you.",
  },
  {
    title: "Matchmaking + safety",
    body: "Send either chat or breed requests and move forward only when both sides agree—PetSociety keeps duplicates and spam out of your way.",
  },
  {
    title: "Messaging hub",
    body: "Real-time conversations keep every intro, playdate detail, and shared photo together so planning feels simple.",
  },
  {
    title: "Support & trust",
    body: "In-app reporting, gentle reminders, and helpful humans keep PetSociety a friendly place from swipe to meetup.",
  },
];

const journeys = [
  {
    label: "Tell the whole story",
    detail:
      "Personal bios sit beside pet pedigrees, achievements, and medical notes so future matches see context before reaching out.",
  },
  {
    label: "Swipe with intent",
    detail:
      "Discovery decks honor your filters—species, breed, pedigree, breeding intent, and radius—while skipping every pet you already passed on.",
  },
  {
    label: "Move from match to meetup",
    detail:
      "Requests flip straight into conversations and send friendly intros so you can jump into planning the next walk, playdate, or litter.",
  },
];

const faqs = [
  {
    question: "How do I set up my pet’s profile?",
    answer:
      "Tap “Add pet,” upload a few photos, choose species and traits, then share the story that makes them special. You can update details anytime.",
  },
  {
    question: "Who can see my pets?",
    answer:
      "Anyone that uses PetSociety can view public profiles in discovery decks and community posts. Only matched users can message each other.",
  },
  {
    question: "What happens when I swipe right on a pet profile?",
    answer:
      "Interest opens a prompt with possiblity to chat, add to your favorite list or send a breeding request, with a helpful intro message.",
  },
  {
    question: "Is PetSociety free?",
    answer:
      "Yes. Browsing pets, posting updates, messaging, and sending requests are all free. Optional premium perks may arrive later, and you’ll always get a heads-up.",
  },
  {
    question: "How do I get help if something feels off?",
    answer:
      "Use the ••• menu on any profile, post, or chat to report an issue, or reach our support team from the Help section. We respond quickly and keep you updated.",
  },
];

const heroScreens = [
  {
    src: "/pawpal_0.png",
    width: 585,
    height: 1179,
    label: "Discovery feed",
    description:
      "Browse multi-species posts with beautiful images and insights.",
  },
  {
    src: "/pawpal_1.png",
    width: 585,
    height: 1216,
    label: "Swipe-to-match",
    description:
      "View lineage callouts, pet information, and breeder preferences before you swipe and start a conversation.",
  },
  {
    src: "/pawpal_5.png",
    width: 585,
    height: 1179,
    label: "Community chats",
    description:
      "Send user requests, chat and stay connected with your pet community.",
  },
  {
    src: "/pawpal_2.png",
    width: 585,
    height: 1173,
    label: "Profile builder",
    description:
      "Store verified details, pedigree, and useful information so prospective matches see the full story.",
  },
  {
    src: "/pawpal_3.png",
    width: 585,
    height: 1215,
    label: "Care hub",
    description:
      "Track posts, pet profiles & achievements, and important milestones in one place.",
  },
];

const heroScreensLayout = heroScreens.map((screen, index) => {
  if (index < 3) {
    return { ...screen, layoutClass: "" };
  }

  return {
    ...screen,
    layoutClass:
      index === 3
        ? "lg:col-start-1 lg:row-start-2 lg:justify-self-end"
        : "lg:col-start-3 lg:row-start-2 lg:justify-self-start",
  };
});

const petSocietyConfig = brand.product.petSociety;
const petSocietyName = petSocietyConfig.name;
const petSocietyAlias = petSocietyConfig.alias;
const petSocietyDisplayName = petSocietyAlias
  ? `${petSocietyName} (${petSocietyAlias})`
  : petSocietyName;
const petSocietyFooterLabel = petSocietyAlias
  ? `${petSocietyName} · ${petSocietyAlias}`
  : petSocietyName;
const petSocietySupportEmail =
  petSocietyConfig.supportEmail ?? brand.company.contactEmail;

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

const screenshotCardClass =
  "glass-card mx-auto flex w-full max-w-[260px] flex-col overflow-hidden rounded-[2rem] border border-white/20 p-4 text-white shadow-xl backdrop-blur";

export default function PetSocietyPage() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-6xl flex-col px-6 pb-20 pt-12 text-white">
      <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-24 w-24 items-center justify-center">
            <Image
              src={petSocietyConfig.logo}
              alt={`${petSocietyDisplayName} logo`}
              width={120}
              height={120}
              className="h-24 w-24 object-contain drop-shadow-lg rounded-full"
              priority
            />
          </div>
          <div>
            <p className="text-lg font-semibold uppercase tracking-[0.3em]">
              {petSocietyDisplayName}
            </p>
            <p className="text-sm text-white/70">
              Built for pet parents, ethical breeders, and communities who put
              safety first.
            </p>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
          <a
            href="#features"
            className="rounded-full border border-white/25 px-3 py-2 hover:border-white hover:text-white"
          >
            Features
          </a>
          <a
            href="#journeys"
            className="rounded-full border border-white/25 px-3 py-2 hover:border-white hover:text-white"
          >
            Journeys
          </a>
          <a
            href="#faq"
            className="rounded-full border border-white/25 px-3 py-2 hover:border-white hover:text-white"
          >
            FAQ
          </a>
          <Link
            href="/petsociety/child-safety"
            className="rounded-full border border-white/25 px-3 py-2 hover:border-white hover:text-white"
          >
            Child safety
          </Link>
          <Link
            href="/petsociety/delete-account"
            className="rounded-full border border-white/25 px-3 py-2 hover:border-white hover:text-white"
          >
            Delete account
          </Link>
          <Link
            href="/petsociety/support"
            className="rounded-full border border-white/25 px-3 py-2 hover:border-white hover:text-white"
          >
            Support
          </Link>
          <Link
            href="/"
            className="rounded-full border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 hover:border-white hover:text-white"
          >
            Back to homepage
          </Link>
        </nav>
      </header>

      <section className="mt-16 space-y-10">
        <div className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em]">
            Storytelling · Discovery · Safety
          </span>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Share authentic pet stories, find ethical matches, and plan safe
            meetups with PetSociety.
          </h1>
          <p className="text-base text-white/80">
            PetSociety is a warm home for pet parents, breeders, and rescues to
            highlight personalities, celebrate milestones, and invite trusted
            caretakers into the journey.
          </p>
          <p className="text-base text-white/80">
            Set your intent—play, chat, breed, or rehome—and swipe through
            curated decks that honor your filters. When both sides say yes,
            PetSociety opens a conversation with tips to keep meetups relaxed
            and safe.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <StoreButton
              href={petSocietyConfig.googlePlayUrl}
              subtitle="Available now"
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
              href={petSocietyConfig.appStoreUrl}
              subtitle="Available now"
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

        <div className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:justify-items-center">
            {heroScreensLayout.map((screen, index) => (
              <figure
                key={screen.src}
                className={`${screenshotCardClass} ${screen.layoutClass}`}
              >
                <figcaption className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70">
                  {screen.label}
                </figcaption>
                <p className="mt-1 text-xs text-white/80">
                  {screen.description}
                </p>
                <Image
                  src={screen.src}
                  alt={screen.description}
                  width={screen.width}
                  height={screen.height}
                  className="mt-4 h-auto w-full rounded-[1.5rem] border border-white/10 object-cover"
                  style={{ maxHeight: 520 }}
                  sizes="(min-width: 1280px) 260px, (min-width: 1024px) 28vw, (min-width: 640px) 40vw, 80vw"
                  priority={index === 0}
                />
              </figure>
            ))}
          </div>
          <p className="text-xs text-white/70">
            Screens captured from the latest PetSociety test build—what you see
            is what ships to Google Play and the App Store.
          </p>
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
              Built for storytellers, caretakers, and trusted meetups.
            </h2>
            <p className="text-sm text-white/80">
              PetSociety adapts to family pets, rescues, and breeders alike with
              a swipe deck, pet interactions log, and community posts tuned to
              your intent.
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

      <section className="mt-20 rounded-3xl border border-white/30 bg-white/10 p-10 text-white backdrop-blur">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4 lg:max-w-2xl">
            <h2 className="text-3xl font-semibold">
              Ready to give your pet a trusted social circle?
            </h2>
            <p className="text-sm text-white/80">
              PetSociety brings photo stories, swipe discovery, community posts,
              matchmaking, messaging, and gentle reporting tools into one app so
              you can highlight achievements, find nearby friends, and feel
              confident about every meetup. Join PetSociety and start building
              your pet’s social circle.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={petSocietyConfig.googlePlayUrl}
              className="primary-button inline-flex items-center justify-center rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em]"
            >
              Join PetSociety now
            </a>
            <a
              href={`mailto:${petSocietySupportEmail}`}
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-white hover:text-white"
            >
              Talk to the team
            </a>
          </div>
        </div>
      </section>

      <footer className="mt-20 flex flex-col gap-3 border-t border-white/25 pt-6 text-sm text-white/75 sm:flex-row sm:items-center sm:justify-between">
        <div>
          © {new Date().getFullYear()} {petSocietyFooterLabel}
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <a
            href="/petsociety/privacy"
            className="text-white/75 hover:text-white"
          >
            Privacy
          </a>
          <a
            href="/petsociety/terms"
            className="text-white/75 hover:text-white"
          >
            Terms
          </a>
          <Link
            href="/petsociety/child-safety"
            className="text-white/75 hover:text-white"
          >
            Child safety
          </Link>
          <Link
            href="/petsociety/delete-account"
            className="text-white/75 hover:text-white"
          >
            Delete account
          </Link>
          <Link
            href="/petsociety/support"
            className="text-white/75 hover:text-white"
          >
            Support
          </Link>
        </div>
      </footer>
    </main>
  );
}
