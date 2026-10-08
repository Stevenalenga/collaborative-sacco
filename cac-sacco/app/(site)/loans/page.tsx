import type { Metadata } from "next";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { LoanCalculator } from "@/components/loan-calculator";
import { loanProducts } from "@/lib/data";

export const metadata: Metadata = { title: "Loans" };

const workflow = [
  "Select a loan",
  "Enter amount",
  "Use the calculator",
  "Check eligibility",
  "Add guarantors",
  "Upload documents",
  "Submit",
  "Loan officer review",
  "Credit committee",
  "Disbursement",
];

export default function LoansPage() {
  return (
    <>
      <PageHero
        kicker="Loans"
        title="Affordable credit for workers, businesses, and centres"
        body="From emergency cash to the Childcare Centre Growth Loan — every product is appraised, guaranteed, and tracked with a clear trail."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {loanProducts.map((product) => (
            <article
              key={product.slug}
              id={product.slug}
              className={`rounded-[1.75rem] p-7 ${product.signature ? "bg-navy text-white" : "bg-white ring-1 ring-navy/8"}`}
            >
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide">
                {product.signature ? <span className="text-coral">Signature product</span> : <span className="text-teal">{product.rate}</span>}
                <span className={product.signature ? "text-white/50" : "text-muted"}>· {product.term}</span>
              </div>
              <h2 className="mt-3 text-2xl font-semibold">{product.name}</h2>
              <p className={`mt-3 leading-7 ${product.signature ? "text-white/75" : "text-muted"}`}>{product.body}</p>
              <p className={`mt-4 text-sm ${product.signature ? "text-white/60" : "text-muted"}`}>{product.max}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">How a loan is approved</p>
          <h2 className="font-display mt-3 text-3xl text-navy">A workflow with an audit trail</h2>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {workflow.map((step, i) => (
              <li key={step} className="rounded-2xl bg-cream p-4">
                <span className="text-xs font-semibold text-coral">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-1 text-sm font-medium text-navy">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="calculator" className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <LoanCalculator />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
