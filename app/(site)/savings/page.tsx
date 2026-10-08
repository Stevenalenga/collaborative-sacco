import type { Metadata } from "next";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { savingsProducts } from "@/lib/data";

export const metadata: Metadata = { title: "Savings" };

export default function SavingsPage() {
  return (
    <>
      <PageHero
        kicker="Savings"
        title="Accounts that match how care work pays"
        body="Regular contributions, emergency cushions, family goals, fixed deposits, and share capital — all visible from your phone."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          {savingsProducts.map((product) => (
            <article key={product.slug} className="rounded-[1.75rem] bg-white p-7 ring-1 ring-navy/8">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl font-semibold text-navy">{product.name}</h2>
                <span className="rounded-full bg-teal-soft px-3 py-1 text-xs font-semibold text-teal-dark">
                  {product.min}
                </span>
              </div>
              <p className="mt-3 leading-7 text-muted">{product.body}</p>
              <ul className="mt-5 space-y-2 text-sm text-navy">
                {product.points.map((point) => (
                  <li key={point}>· {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
