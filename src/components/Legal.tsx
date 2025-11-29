// components/Legal.tsx
import Image from "next/image";
import Link from "next/link";
import { brand } from "../lib/brand";

export function LegalShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto w-full max-w-4xl px-4 py-12 md:px-0">
      <header className="mb-8 text-center md:text-left">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-primary)]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 text-sm text-[var(--color-muted)]">{subtitle}</p>
        )}
      </header>
      <div className="glass-card rounded-3xl bg-white/95 p-8 text-sm leading-relaxed text-[var(--color-ink)] shadow-xl backdrop-blur">
        <div className="legal-content">{children}</div>
      </div>
      <footer className="mt-10 flex flex-col gap-2 text-xs text-[var(--color-muted)] md:flex-row md:items-center md:justify-between">
        <p>
          Last updated: <time dateTime="2024-10-12">Oct 12, 2024</time>
        </p>
        <p>Neothone · PetSociety Companion App</p>
      </footer>
    </article>
  );
}

export function LegalNav() {
  return (
    <nav className="sticky top-0 z-20 border-b border-white/30 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 text-sm font-medium text-[var(--color-ink)] md:px-0">
        <Link
          href="/"
          className="flex items-center gap-2 text-[var(--color-primary)]"
        >
          <span className="flex h-14 w-14 items-center justify-center">
            <Image
              src={brand.company.logo}
              alt={`${brand.company.name} logo`}
              width={120}
              height={120}
              className="h-18 w-18 object-contain drop-shadow-lg rounded-full"
            />
          </span>
          {brand.company.name}
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/petsociety"
            className="hidden text-[var(--color-muted)] hover:text-[var(--color-primary)] md:inline"
          >
            PetSociety
          </Link>
          <Link
            href="/petsociety/terms"
            className="text-[var(--color-muted)] hover:text-[var(--color-primary)]"
          >
            Terms
          </Link>
          <Link
            href="/petsociety/privacy"
            className="text-[var(--color-muted)] hover:text-[var(--color-primary)]"
          >
            Privacy
          </Link>
          <Link
            href="/petsociety/delete-account"
            className="text-[var(--color-muted)] hover:text-[var(--color-primary)]"
          >
            Delete
          </Link>
        </div>
      </div>
    </nav>
  );
}
