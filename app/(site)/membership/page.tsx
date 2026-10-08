import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { joinSteps, memberTypes, membershipBenefits, membershipRequirements } from "@/lib/data";

export const metadata: Metadata = { title: "Membership" };

export default function MembershipPage() {
  return (
    <>
      <PageHero
        kicker="Membership"
        title="Who can join Collaborative SACCO"
        body="If you work in, own, or support childcare, there is a membership path for you — with products that match your role in the ecosystem."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {memberTypes.map((type) => (
            <article key={type.title} className="rounded-[1.75rem] bg-white p-6 ring-1 ring-navy/8">
              <h2 className="text-lg font-semibold text-navy">{type.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{type.body}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-teal">Typical products</p>
              <ul className="mt-2 space-y-1 text-sm text-navy">
                {type.products.map((p) => (
                  <li key={p}>· {p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-navy">Requirements</h2>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-muted">
              {membershipRequirements.map((item) => (
                <li key={item} className="rounded-2xl bg-cream px-4 py-3 text-navy">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl text-navy">Benefits</h2>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-muted">
              {membershipBenefits.map((item) => (
                <li key={item} className="rounded-2xl bg-cream px-4 py-3 text-navy">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl text-navy">How to join</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {joinSteps.map((item) => (
            <article key={item.step} className="rounded-3xl bg-white p-5 ring-1 ring-navy/8">
              <p className="text-xs font-semibold text-coral">{item.step}</p>
              <h3 className="mt-2 font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
        <Link href="/join" className={`${buttonVariants()} mt-10`}>
          Start your application
        </Link>
      </section>

      <CtaBand />
    </>
  );
}
