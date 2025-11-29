import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { brand } from "../../../lib/brand";

const CONTACT_EMAIL = brand.company.contactEmail;
const petSocietyConfig = brand.product.petSociety;

const inAppSteps = [
  "Open PetSociety and make sure you are using the latest version.",
  "Go to Profile → Settings → Delete Account.",
  "Review what will be removed, then confirm deletion with your password or passkey.",
];

const directSteps = [
  "Compose an email to our care team using the same email tied to your PetSociety login.",
  `Send the request to ${CONTACT_EMAIL} with the subject “Delete my PetSociety account.”`,
  "We will verify ownership and confirm once the deletion is complete.",
];

const assurances = [
  "Profiles, logs, and shared lists are securely removed from our production systems.",
  "Collaborators lose access instantly after your request is processed.",
  "We only retain minimal records required by law (for example, transaction receipts).",
];

const timeline = [
  {
    label: "Request received",
    detail: "You will receive an acknowledgment email within 24 hours.",
  },
  {
    label: "Verification",
    detail:
      "We confirm ownership and pause all automations tied to your pet profiles.",
  },
  {
    label: "Deletion complete",
    detail: `Your data is permanently deleted within ${petSocietyConfig.deletionWindowDays} days, followed by a confirmation note.`,
  },
];

export const metadata: Metadata = {
  title: "Delete PetSociety Account",
  description:
    "Request deletion of your PetSociety account or contact the Neothone team for secure, full data removal.",
};

export default function DeleteAccountPage() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-5xl flex-col gap-10 px-6 py-16 text-white">
      <Link
        href="/petsociety"
        className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
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
          Delete Your Account
        </div>
        <h1 className="text-4xl font-semibold leading-snug">
          Delete Your PetSociety Account
        </h1>
        <p className="mx-auto max-w-3xl text-base text-white/80">
          If you would like to delete your PetSociety account and all associated
          data (including email, pet profiles, shared journals, and lists), you
          can request account deletion in two ways. Once we confirm the request,
          your data is permanently removed within{" "}
          {petSocietyConfig.deletionWindowDays} days.
        </p>
      </header>

      <section className="grid gap-8 rounded-3xl border border-white/30 bg-white/10 p-8 backdrop-blur lg:grid-cols-2">
        <div className="space-y-5">
          <h2 className="text-xl font-semibold">
            Delete from inside the PetSociety app
          </h2>
          <ol className="list-decimal space-y-3 pl-5 text-sm text-white/80">
            {inAppSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="rounded-2xl bg-white/5 p-4 text-xs text-white/70">
            Tip: deleting inside the app is the fastest path because your
            identity is already verified on your device.
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="text-xl font-semibold">Or contact us directly</h2>
          <ol className="list-decimal space-y-3 pl-5 text-sm text-white/80">
            {directSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Delete%20my%20PetSociety%20account`}
            className="primary-button inline-flex w-full items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em]"
          >
            Email {CONTACT_EMAIL}
          </a>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl bg-white px-6 py-10 text-[var(--color-ink)] shadow-2xl md:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-[var(--color-primary)]">
            What happens after you submit a request?
          </h3>
          <p className="text-sm text-[var(--color-muted)]">
            We pause notifications immediately and begin the irreversible
            deletion workflow. Here’s the full cadence so you know what to
            expect.
          </p>
          <ul className="space-y-4 text-sm">
            {timeline.map((item) => (
              <li
                key={item.label}
                className="rounded-2xl border border-[var(--color-border-soft)] p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
                  {item.label}
                </p>
                <p className="mt-2 text-[var(--color-ink)]">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4 rounded-3xl border border-[var(--color-border-soft)] bg-[var(--color-tint)]/70 p-6">
          <h3 className="text-lg font-semibold text-[var(--color-primary)]">
            Data you can expect to be removed
          </h3>
          <ul className="space-y-3 text-sm text-[var(--color-ink)]">
            {assurances.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-xs text-[var(--color-muted)]">
            Need a portable export first? Email us before confirming deletion
            and we’ll share a secure download link.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-white/30 bg-white/10 p-8 text-sm text-white/80 backdrop-blur">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Need help or made a mistake?
            </h3>
            <p>
              Reply to the confirmation email or reach us anytime at
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="ml-1 font-semibold text-white"
              >
                {CONTACT_EMAIL}
              </a>
              . We can pause the deletion if you contact us before the
              {petSocietyConfig.deletionWindowDays}-day window ends.
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 p-4 text-xs text-white/70">
            <p className="font-semibold uppercase tracking-[0.3em] text-white">
              Useful links
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/petsociety/privacy" className="hover:text-white">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/petsociety/terms" className="hover:text-white">
                  Terms of service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
