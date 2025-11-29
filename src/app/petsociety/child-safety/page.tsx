import Link from "next/link";
import type { Metadata } from "next";

const LAST_UPDATED = "November 20, 2025";
const SUPPORT_EMAIL = "contact@neothone.com";

const scopeItems = [
  "User profiles (owners and pets)",
  "Photos, videos, and other media",
  "Posts, comments, and pet timelines",
  "Chat and messages between users",
  "Usernames, bios, and any other text content",
];

const zeroToleranceList = [
  "Child sexual abuse material (CSAM)",
  "Any sexualized content involving minors",
  "Grooming, exploitation, or attempts to exploit minors",
  "Any content that sexualizes children or suggests sexual activity involving minors",
];

const csamExamples = [
  "Images, videos, or drawings depicting sexual or nude content involving a minor",
  "Text or chat that sexualizes minors or attempts to arrange sexual contact with minors",
  "Attempts to obtain sexual images, videos, or sexual favors from minors",
  "Any content that encourages or normalizes sexual exploitation of children",
];

const prohibitedContent = [
  "Any depiction of child sexual abuse or exploitation (CSAM)",
  "Sexualized images of minors, including partial nudity or suggestive poses",
  "Requests or offers involving sexual activity with minors",
  "Grooming behavior, such as attempts to gain trust of a minor for later exploitation",
  "Sharing links or instructions to access CSAM or exploitative material",
  "Any content that praises, denies, or trivializes child sexual abuse",
];

const detectionMeasures = [
  "Technical systems and tools (where applicable)",
  "Internal reviews and content moderation",
  "User reports and community feedback",
];

const reportMethods = [
  "In-app reporting tools via the “Report” option on posts, profiles, or chats",
  `Email ${SUPPORT_EMAIL} with a description, screenshots, usernames/profile links, and timestamps`,
];

const responseSteps = [
  "Review the report and relevant content as quickly as reasonably possible",
  "Remove or disable access to any content that may violate this policy",
  "Restrict, suspend, or permanently ban involved accounts where appropriate",
  "Preserve relevant data and evidence as required by law",
  "Report suspected CSAM to the relevant authorities or hotlines when required or necessary to protect children",
  "Cooperate with law enforcement consistent with applicable laws and our Privacy Policy",
];

const cooperationBullets = [
  "Providing account information and logs when legally requested",
  "Sharing relevant content or metadata as required by law",
  "Working with national hotlines or child protection agencies where appropriate",
];

const privacyHandling = [
  "Preserving certain content, account information, IP addresses, or chat logs while an investigation is active",
  "Sharing data with law enforcement or authorities when required by law",
  "Limiting processing to what is necessary to investigate, respond, and comply with reporting or retention obligations",
];

const expectations = [
  "Use PetSociety only for legitimate pet-related social and matching purposes",
  "Never share or request sexual or inappropriate content involving minors",
  "Promptly report any content or behavior that may involve child exploitation",
];

const changeReasons = [
  "Updates to applicable laws or regulations",
  "Changes to PetSociety features and moderation tools",
  "Evolving best practices for online safety and child protection",
];

export const metadata: Metadata = {
  title: "PetSociety Child Safety",
  description:
    "Learn how PetSociety keeps kids and teens protected across discovery feeds, DMs, and community clubs.",
};

export default function PetSocietyChildSafetyPage() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-5xl flex-col gap-12 px-6 py-16 text-white">
      <Link
        href="/petsociety"
        className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
      >
        ← Back to PetSociety overview
      </Link>

      <header className="space-y-6 text-center">
        <div className="mx-auto w-fit rounded-full bg-white/10 px-6 py-2 text-xs uppercase tracking-[0.4em]">
          PetSociety Child Safety & Protection Policy
        </div>
        <h1 className="text-4xl font-semibold leading-snug">
          PetSociety takes a zero-tolerance stance against child sexual abuse
          and exploitation.
        </h1>
        <p className="mx-auto max-w-3xl text-base text-white/80">
          PetSociety (“we”, “our”, “us”) is a social networking and matching app
          designed for pet owners and animal lovers. We are committed to
          protecting children and preventing all forms of child sexual abuse and
          exploitation (CSAE) on our platform.
        </p>
        <p className="text-sm text-white/60">Last updated: {LAST_UPDATED}</p>
        <p className="mx-auto max-w-3xl text-sm text-white/70">
          Important: This policy does not replace legal advice. Please review it
          with your own legal counsel to ensure it meets all obligations in the
          countries where you operate.
        </p>
      </header>

      <section className="space-y-4 rounded-3xl border border-white/25 bg-white/10 p-6 text-white/80 backdrop-blur">
        <h2 className="text-2xl font-semibold text-white">
          1. Scope of this Policy
        </h2>
        <p>
          This policy applies to all use of PetSociety and all content,
          regardless of where users are located. Covered surfaces include:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          {scopeItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-6 rounded-3xl bg-white px-6 py-10 text-[var(--color-ink)] shadow-2xl">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--color-primary)]">
            2. Zero-Tolerance for Child Sexual Abuse and Exploitation (CSAE)
          </h2>
          <p>
            PetSociety has a zero-tolerance policy for the following behaviors
            and content. Any violation may result in immediate removal, account
            bans, and reporting to relevant authorities:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            {zeroToleranceList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-tint)]/60 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
            This includes
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-[var(--color-ink)]">
            {csamExamples.map((example) => (
              <li key={example}>{example}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-white/25 bg-white/10 p-6 text-white/80 backdrop-blur">
        <h2 className="text-2xl font-semibold text-white">
          3. Age Restrictions and Use of PetSociety
        </h2>
        <p>
          PetSociety is intended for adult users who manage pet profiles and
          interact with other pet owners. Users must meet the legal age of
          majority where they live. We do not permit the use of PetSociety for
          any purpose involving sexual communication with minors. If we have
          reason to believe an account is grooming or exploiting minors, we will
          investigate, restrict access, and report to relevant authorities.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl bg-white px-6 py-10 text-[var(--color-ink)] shadow-2xl">
        <h2 className="text-2xl font-semibold text-[var(--color-primary)]">
          4. Prohibited Content and Behaviors
        </h2>
        <p>
          The following content and behaviors are strictly forbidden on
          PetSociety:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          {prohibitedContent.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="text-sm text-[var(--color-muted)]">
          Violations result in removal of content, permanent bans, and—when
          necessary—reports to law enforcement or child-protection partners.
        </p>
      </section>

      <section className="grid gap-6 rounded-3xl border border-white/25 bg-white/10 p-6 text-white/80 backdrop-blur lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            5. Detection and Moderation
          </h2>
          <p>We combine tooling, human review, and community input:</p>
          <ul className="list-disc space-y-2 pl-6">
            {detectionMeasures.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Our team may review public posts, profiles, and relevant chat logs
            when a specific report indicates potential abuse.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            6. How Users Can Report
          </h2>
          <p>
            We encourage all users to report any content or behavior that may
            involve CSAE:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            {reportMethods.map((method) => (
              <li key={method}>{method}</li>
            ))}
          </ul>
          <p className="text-xs text-white/70">
            Include descriptions, screenshots, usernames, profile links,
            timestamps, and any other context that helps us respond quickly.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl bg-white px-6 py-10 text-[var(--color-ink)] shadow-2xl">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--color-primary)]">
            7. How We Respond to Reports of CSAM or CSAE
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            {responseSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--color-primary)]">
            8. Cooperation with Authorities
          </h2>
          <p>
            PetSociety cooperates with law enforcement and relevant child
            protection organizations as required. This may include:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            {cooperationBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-white/25 bg-white/10 p-6 text-white/80 backdrop-blur">
        <h2 className="text-2xl font-semibold text-white">
          9. User Privacy and Data Handling in Child Safety Cases
        </h2>
        <p>
          When handling reports, we may need to preserve or share certain data.
          All processing complies with applicable laws and our Privacy Policy
          and is limited to what is necessary to respond and meet legal
          obligations.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          {privacyHandling.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4 rounded-3xl bg-white px-6 py-10 text-[var(--color-ink)] shadow-2xl">
        <h2 className="text-2xl font-semibold text-[var(--color-primary)]">
          10. Education and Community Expectations
        </h2>
        <p>We expect all users to:</p>
        <ul className="list-disc space-y-2 pl-6">
          {expectations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          By using PetSociety, you agree to follow this policy and our Terms of
          Use.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-white/25 bg-white/10 p-6 text-white/80 backdrop-blur">
        <h2 className="text-2xl font-semibold text-white">
          11. Changes to this Policy
        </h2>
        <p>We may update this Child Safety & Protection Policy to reflect:</p>
        <ul className="list-disc space-y-2 pl-6">
          {changeReasons.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          When we make significant changes, we update the “Last updated” date
          above. Continued use of PetSociety after changes signifies acceptance
          of the updated policy.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl bg-white px-6 py-10 text-[var(--color-ink)] shadow-2xl">
        <h2 className="text-2xl font-semibold text-[var(--color-primary)]">
          12. Contact Us
        </h2>
        <p>
          If you have questions about this policy or need to report a child
          safety concern, please contact us:
        </p>
        <p className="font-semibold">{SUPPORT_EMAIL}</p>
        <p className="text-sm text-[var(--color-muted)]">
          Include as much detail as possible so we can assess and respond
          quickly and appropriately.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Link
            href="/petsociety/privacy"
            className="rounded-2xl border border-[var(--color-border-soft)] bg-white p-4 text-sm hover:border-[var(--color-primary)]"
          >
            Privacy policy
          </Link>
          <Link
            href="/petsociety/support"
            className="rounded-2xl border border-[var(--color-border-soft)] bg-white p-4 text-sm hover:border-[var(--color-primary)]"
          >
            Support center
          </Link>
          <Link
            href="/petsociety/delete-account"
            className="rounded-2xl border border-[var(--color-border-soft)] bg-white p-4 text-sm hover:border-[var(--color-primary)]"
          >
            Delete account workflow
          </Link>
          <a
            href={`mailto:${SUPPORT_EMAIL}?subject=PetSociety%20Child%20Safety`}
            className="rounded-2xl border border-[var(--color-border-soft)] bg-white p-4 text-sm hover:border-[var(--color-primary)]"
          >
            Email {SUPPORT_EMAIL}
          </a>
        </div>
      </section>
    </main>
  );
}
