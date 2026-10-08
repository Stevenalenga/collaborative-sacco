import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CtaBand } from "@/components/site/cta-band";
import { LoanCalculator } from "@/components/loan-calculator";
import { buttonVariants } from "@/components/ui/button";
import { academyCourses, loanProducts, org, pillars, savingsProducts, stats, whyPoints } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="grain pointer-events-none absolute inset-0 opacity-30" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-teal/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-coral/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              {org.parent} · {org.founder}
            </p>
            <h1 className="font-display mt-4 text-4xl leading-[1.1] sm:text-6xl">{org.heroLine}</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/75">
              Save. Grow. Access affordable credit. Build a stronger childcare community.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/join" className={buttonVariants({ variant: "coral", size: "lg" })}>
                Join CAC SACCO
              </Link>
              <Link href="/login" className={buttonVariants({ variant: "light", size: "lg" })}>
                Member login
              </Link>
            </div>
            <p className="mt-6 text-sm text-white/55">{org.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-3xl bg-white/8 p-5 ring-1 ring-white/10">
                <p className="text-sm font-semibold text-coral">{pillar.title}</p>
                <p className="mt-2 text-sm leading-6 text-white/75">{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-navy/8 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl text-navy sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Why CAC SACCO?</p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl text-navy sm:text-4xl">
          A cooperative built around the realities of childcare work
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Not another generic SACCO website. Collaborative SACCO is a financial home for caregivers, workers, and centres — with products, education, and community that fit the sector.
        </p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {whyPoints.map((point) => (
            <li key={point} className="flex gap-3 rounded-2xl bg-white p-4 ring-1 ring-navy/8">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
              <span className="text-sm leading-6 text-navy">{point}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Our financial products</p>
              <h2 className="font-display mt-3 text-3xl text-navy sm:text-4xl">Save on your terms</h2>
            </div>
            <Link href="/savings" className="hidden items-center gap-1 text-sm font-semibold text-teal sm:inline-flex">
              All savings <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {savingsProducts.slice(0, 6).map((product) => (
              <article key={product.slug} className="rounded-3xl bg-cream p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-coral">{product.rate}</p>
                <h3 className="mt-2 text-lg font-semibold text-navy">{product.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{product.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Loans for your needs</p>
            <h2 className="font-display mt-3 text-3xl text-navy sm:text-4xl">Credit designed for care work</h2>
          </div>
          <Link href="/loans" className="hidden items-center gap-1 text-sm font-semibold text-teal sm:inline-flex">
            Explore loans <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {loanProducts.slice(0, 6).map((product) => (
            <article
              key={product.slug}
              className={`rounded-3xl p-6 ring-1 ${product.signature ? "bg-navy text-white ring-navy" : "bg-white ring-navy/8"}`}
            >
              {product.signature ? (
                <p className="text-xs font-semibold uppercase tracking-wide text-coral">Signature product</p>
              ) : (
                <p className="text-xs font-semibold uppercase tracking-wide text-teal">{product.rate}</p>
              )}
              <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
              <p className={`mt-2 text-sm leading-6 ${product.signature ? "text-white/75" : "text-muted"}`}>
                {product.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="calculator" className="bg-sand/60 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <LoanCalculator />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Financial education</p>
        <h2 className="font-display mt-3 text-3xl text-navy sm:text-4xl">Learn how to save better, manage debt, and grow</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {academyCourses.slice(0, 4).map((course) => (
            <article key={course.title} className="rounded-3xl bg-white p-5 ring-1 ring-navy/8">
              <p className="text-xs font-semibold text-coral">{course.level}</p>
              <h3 className="mt-2 font-semibold text-navy">{course.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{course.body}</p>
            </article>
          ))}
        </div>
        <Link href="/academy" className={`${buttonVariants({ variant: "outline" })} mt-8`}>
          Visit CAC Financial Academy
        </Link>
      </section>

      <CtaBand />
    </>
  );
}
