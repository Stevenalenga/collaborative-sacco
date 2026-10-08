import type { Metadata } from "next";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { governance, org } from "@/lib/data";

export const metadata: Metadata = { title: "About us" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About CAC SACCO"
        title="A cooperative financial home for the childcare sector"
        body="Collaborative SACCO exists so caregivers, workers, and centres can save, borrow, and grow together — with products designed around care work, not generic banking."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Who we are</p>
            <h2 className="font-display mt-3 text-3xl text-navy">Born from Collaborative Action for Childcare</h2>
            <p className="mt-4 leading-7 text-muted">
              {org.parent} is a pan-African platform convened by {org.founder} to accelerate quality, affordable childcare. Collaborative SACCO is the financial inclusion arm of that work — a savings and credit model tailored to childcare and domestic workers, micro-entrepreneurs, and centres.
            </p>
            <p className="mt-4 leading-7 text-muted">
              The cooperative is member-owned. Members buy shares, save regularly, guarantee one another, and share in the SACCO’s performance through dividends and affordable credit.
            </p>
          </div>
          <div className="grid gap-4">
            <article className="rounded-3xl bg-white p-6 ring-1 ring-navy/8">
              <h3 className="text-lg font-semibold text-navy">Mission</h3>
              <p className="mt-2 leading-7 text-muted">
                Empower members in the childcare sector to save, invest, and create wealth through fair, digital, cooperative finance.
              </p>
            </article>
            <article className="rounded-3xl bg-white p-6 ring-1 ring-navy/8">
              <h3 className="text-lg font-semibold text-navy">Vision</h3>
              <p className="mt-2 leading-7 text-muted">
                Financial strength for every childcare worker and centre — so women, children, and communities can thrive.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Governance</p>
          <h2 className="font-display mt-3 text-3xl text-navy">Oversight that protects members’ money</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {governance.map((item) => (
              <article key={item.title} className="rounded-3xl bg-cream p-6">
                <h3 className="font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-6 text-muted">
            Board members will have a dedicated oversight view — performance, loan approvals, policy, and dividends — without operational access to day-to-day cash handling. Maker-checker controls will apply to financial transactions once the core system is live.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
