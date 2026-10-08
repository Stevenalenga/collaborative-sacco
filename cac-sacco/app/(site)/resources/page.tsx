import type { Metadata } from "next";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { faqs } from "@/lib/data";

export const metadata: Metadata = { title: "Resources" };

const downloads = [
  { name: "Membership application guide", note: "PDF · coming with live operations" },
  { name: "Loan policy summary", note: "PDF · coming with live operations" },
  { name: "SACCO by-laws (draft)", note: "PDF · coming with live operations" },
  { name: "Dividend FAQ", note: "PDF · coming with live operations" },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        kicker="Resources"
        title="FAQs, downloads, and member guidance"
        body="Answers to joining, saving, borrowing, and how this frontend demo relates to the full SACCO platform."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl text-navy">Frequently asked questions</h2>
        <div className="mt-8 space-y-3">
          {faqs.map((item) => (
            <details key={item.q} className="group rounded-2xl bg-white p-5 ring-1 ring-navy/8">
              <summary className="cursor-pointer list-none font-semibold text-navy">
                {item.q}
              </summary>
              <p className="mt-3 text-sm leading-6 text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl text-navy">Downloads</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {downloads.map((file) => (
              <div key={file.name} className="rounded-2xl bg-cream px-5 py-4">
                <p className="font-medium text-navy">{file.name}</p>
                <p className="text-sm text-muted">{file.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
