// components/Legal.tsx
import Link from "next/link";

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
        <h1 className="text-3xl font-semibold tracking-tight text-[#2F5D50]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 text-sm text-[#696969]">{subtitle}</p>
        )}
      </header>
      <div className="glass-card rounded-3xl bg-white/95 p-8 text-sm leading-relaxed text-[#2F2F2F] shadow-xl backdrop-blur">
        <div className="legal-content">{children}</div>
      </div>
      <footer className="mt-10 flex flex-col gap-2 text-xs text-[#696969] md:flex-row md:items-center md:justify-between">
        <p>
          Last updated: <time dateTime="2024-10-12">Oct 12, 2024</time>
        </p>
        <p>Neothone · PawPal Companion App</p>
      </footer>
    </article>
  );
}

export function LegalNav() {
  return (
    <nav className="sticky top-0 z-20 border-b border-white/30 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 text-sm font-medium text-[#2F2F2F] md:px-0">
        <Link href="/" className="flex items-center gap-2 text-[#2F5D50]">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2F5D50] text-white text-sm font-semibold">
            N
          </span>
          Neothone
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/pawpal"
            className="hidden text-[#696969] hover:text-[#2F5D50] md:inline"
          >
            PawPal
          </Link>
          <Link
            href="/pawpal/terms"
            className="text-[#696969] hover:text-[#2F5D50]"
          >
          Terms
        </Link>
          <Link
            href="/pawpal/privacy"
            className="text-[#696969] hover:text-[#2F5D50]"
          >
          Privacy
        </Link>
        </div>
      </div>
    </nav>
  );
}
