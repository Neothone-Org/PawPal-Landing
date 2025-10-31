const heroHighlights = [
  "Human + animal centered",
  "Privacy-first architecture",
  "Crafted by pet people",
];

const productCards = [
  {
    name: "PawPal",
    description:
      "A companion app that keeps families, breeders, and vets in sync while putting pet wellbeing first.",
    cta: "Visit PawPal",
    href: "/pawpal",
    meta: "Live · Mobile",
  },
  {
    name: "NestSense",
    description:
      "Smart nursery sensors that capture the subtle signals in early puppy care with vet-friendly dashboards.",
    cta: "Join waitlist",
    href: "#nestsense",
    meta: "In private beta",
  },
  {
    name: "PulseBridge",
    description:
      "Lightweight APIs that connect trusted groomers, walkers, and wellness pros into your pet ecosystem.",
    cta: "Partner with us",
    href: "#partners",
    meta: "Partner program",
  },
];

const milestones = [
  { label: "Communities served", value: "36+", detail: "breeders & rescues" },
  { label: "Pets supported", value: "4.2k", detail: "profiles created" },
  { label: "Care network", value: "120+", detail: "certified partners" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen text-[#2F2F2F]">
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-8">
        <div className="flex items-center gap-3 text-white">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
            <span className="text-2xl font-semibold">N</span>
          </div>
          <div>
            <p className="text-lg font-semibold tracking-wide uppercase">
              Neothone
            </p>
            <p className="text-sm text-white/70">
              Gentle tech for modern pet families
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
          <a href="#mission" className="hover:text-white">
            Mission
          </a>
          <a href="#products" className="hover:text-white">
            Products
          </a>
          <a href="#partners" className="hover:text-white">
            Partners
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </nav>

        <a
          href="/pawpal"
          className="hidden rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white hover:border-white/60 md:inline-flex"
        >
          Explore PawPal
        </a>
      </header>

      <section className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-10 lg:flex-row lg:items-center">
        <div className="max-w-xl space-y-8 text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]">
            Pet Intelligence Studio
          </span>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            We build gentle technology that deepens the bond between people and
            their companions.
          </h1>
          <p className="text-base text-white/80">
            From mindful wearables to community-first apps, Neothone delivers
            trustworthy experiences that empower families, breeders, and care
            networks to support pets at every life stage.
          </p>

          <ul className="flex flex-wrap gap-3 text-sm text-white/80">
            {heroHighlights.map((item) => (
              <li
                key={item}
                className="glass-card flex items-center gap-3 rounded-full px-5 py-2 text-xs uppercase tracking-widest"
              >
                <span className="h-2 w-2 rounded-full bg-white/80" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="/pawpal"
              className="primary-button inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-widest"
            >
              Meet PawPal
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white hover:border-white"
            >
              Talk to us
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex max-w-lg flex-1 justify-center">
          <div className="glass-card w-full rounded-3xl p-8 text-white shadow-2xl">
            <h2 className="text-lg font-semibold uppercase tracking-[0.3em] text-white/70">
              Ecosystem Impact
            </h2>
            <p className="mt-4 text-2xl font-semibold">
              Building calm, connected experiences for every caretaker in the
              pet journey.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {milestones.map((item) => (
                <div key={item.label} className="rounded-2xl bg-white/5 p-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/60">
                    {item.label}
                  </p>
                  <p className="mt-2 text-3xl font-semibold">{item.value}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="mission"
        className="mx-auto max-w-6xl rounded-3xl bg-white px-6 py-16 text-[#2F2F2F] shadow-2xl"
      >
        <div className="grid gap-10 lg:grid-cols-[2fr,1.2fr] lg:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-[#2F5D50]">
              We believe calm technology creates confident caretakers.
            </h2>
            <p className="text-base text-[#696969]">
              Neothone blends behavior science, accessible design, and secure
              engineering to translate every bark, meow, or nuzzle into insight.
              Our multidisciplinary team is on a mission to make proactive pet
              care feel effortless.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#EFE8E3] bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#696969]">
                  Integrated Signals
                </p>
                <p className="mt-2 text-sm text-[#2F2F2F]">
                  Combine hardware, telemetry, and community insight into one
                  cohesive experience.
                </p>
              </div>

              <div className="rounded-2xl border border-[#EFE8E3] bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#696969]">
                  Responsible Data
                </p>
                <p className="mt-2 text-sm text-[#2F2F2F]">
                  We safeguard families with transparent, privacy-first data
                  practices and opt-in sharing.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card h-full rounded-3xl p-8 text-white">
            <h3 className="text-sm uppercase tracking-[0.4em] text-white/50">
              Founder Note
            </h3>
            <p className="mt-5 text-lg leading-relaxed text-white/90">
              “Neothone grew from the belief that pet tech should feel warm and
              trustworthy. We design every touchpoint—apps, devices, support—to
              reduce friction for humans while protecting the animals we love.”
            </p>
            <p className="mt-8 text-sm uppercase tracking-[0.3em] text-white/60">
              Erica Balser · Founder & Product Lead
            </p>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white">
              Companion experiences built by Neothone
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-white/75">
              Each product is designed with a shared language of calm
              interactions, actionable insights, and a focus on the wellbeing of
              the animals who inspire us.
            </p>
          </div>
          <a
            href="#partners"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white hover:border-white"
          >
            Partner with Neothone
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {productCards.map((product) => (
            <a
              key={product.name}
              href={product.href}
              className="group glass-card flex h-full flex-col justify-between rounded-3xl p-6 transition-transform hover:-translate-y-1"
            >
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                  {product.meta}
                </p>
                <h3 className="text-2xl font-semibold text-white">
                  {product.name}
                </h3>
                <p className="text-sm text-white/80">{product.description}</p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white">
                {product.cta}
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section
        id="partners"
        className="mx-auto max-w-6xl rounded-3xl bg-white px-6 py-16 text-[#2F2F2F] shadow-2xl"
      >
        <div className="grid gap-12 lg:grid-cols-[1.2fr,1fr] lg:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-[#2F5D50]">
              Partner programs tailored for breeders, clinics, and innovators.
            </h2>
            <p className="text-base text-[#696969]">
              Build with Neothone to integrate telemetry, share curated content,
              or deliver premium services to your community. Our partner team
              supports thoughtful pilots with measurable outcomes.
            </p>

            <ul className="space-y-4 text-sm text-[#2F2F2F]">
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-2 w-2 rounded-full bg-[#2F5D50]" />
                Co-design new journeys for litters, aging pets, and specialty
                breeds.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-2 w-2 rounded-full bg-[#2F5D50]" />
                Offer branded portals and analytics powered by Neothone APIs.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-2 w-2 rounded-full bg-[#2F5D50]" />
                Join quarterly labs to test hardware integrations and new data
                signals.
              </li>
            </ul>
          </div>

          <div className="space-y-6 rounded-3xl border border-[#EFE8E3] bg-white p-8">
            <h3 className="text-lg font-semibold text-[#2F2F2F]">
              Recent pilot snapshots
            </h3>
            <div className="space-y-4 text-sm text-[#696969]">
              <p>
                🐶{" "}
                <span className="font-medium text-[#2F2F2F]">
                  Emberbrook Shepherds
                </span>{" "}
                reduced new-owner support tickets by 42% after adopting PawPal
                onboarding.
              </p>
              <p>
                🩺{" "}
                <span className="font-medium text-[#2F2F2F]">
                  Northgate Veterinary
                </span>{" "}
                stitched Neothone telemetry into post-surgery recovery plans.
              </p>
              <p>
                🚶{" "}
                <span className="font-medium text-[#2F2F2F]">
                  WalkJoy Collective
                </span>{" "}
                launched curated micro-courses inside PawPal to coach first-time
                puppy parents.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20 text-white">
        <div className="rounded-3xl border border-white/30 bg-white/10 p-10 backdrop-blur">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Start something compassionate with Neothone
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-white/80">
                We’re a small, intentional studio collaborating with partners
                who care deeply about animals. Tell us about your goals and
                we’ll co-design the journey.
              </p>
            </div>
            <a
              className="primary-button inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em]"
              href="mailto:hello@neothone.com"
            >
              hello@neothone.com
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-3 px-6 pb-12 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Neothone Labs Inc. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="/pawpal/privacy" className="hover:text-white">
            Privacy
          </a>
          <a href="/pawpal/terms" className="hover:text-white">
            Terms
          </a>
          <a
            href="https://www.linkedin.com/company/neothone"
            className="hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}
