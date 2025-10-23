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
    <article className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        {subtitle && <p className="mt-2 text-sm text-gray-500">{subtitle}</p>}
      </header>
      <div className="prose prose-neutral max-w-none">{children}</div>
      <footer className="mt-10 border-t pt-6 text-xs text-gray-500">
        <p>
          Last updated: <time dateTime="2025-10-23">Oct 23, 2025</time>
        </p>
      </footer>
    </article>
  );
}

export function LegalNav() {
  return (
    <nav className="sticky top-0 z-10 border-b bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center gap-4 px-4 py-3 text-sm">
        <Link href="/" className="text-gray-600 hover:text-gray-900">
          Home
        </Link>
        <span className="text-gray-300">/</span>
        <Link href="/terms" className="text-gray-600 hover:text-gray-900">
          Terms
        </Link>
        <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
          Privacy
        </Link>
      </div>
    </nav>
  );
}
