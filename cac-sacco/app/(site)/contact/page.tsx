import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { ContactForm } from "@/components/site/contact-form";
import { org } from "@/lib/data";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Talk to the Collaborative SACCO team"
        body="Questions about membership, products, or partnership? Send a message. This form is frontend-only for now — it will not email a backend."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <article className="rounded-3xl bg-white p-6 ring-1 ring-navy/8">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal">Visit</p>
            <p className="mt-2 text-navy">
              {org.address}
              <br />
              {org.postal}
            </p>
          </article>
          <article className="rounded-3xl bg-white p-6 ring-1 ring-navy/8">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal">Call / WhatsApp</p>
            <p className="mt-2 text-navy">{org.phone}</p>
            <p className="text-sm text-muted">{org.hours}</p>
          </article>
          <article className="rounded-3xl bg-white p-6 ring-1 ring-navy/8">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal">Email</p>
            <p className="mt-2 text-navy">{org.email}</p>
          </article>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
