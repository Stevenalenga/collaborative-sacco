import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { JoinForm } from "@/components/site/join-form";

export const metadata: Metadata = { title: "Join" };

export default function JoinPage() {
  return (
    <>
      <PageHero
        kicker="Join Collaborative SACCO"
        title="Become a member of the childcare cooperative"
        body="Complete the application in a few steps. KYC review and share payment will connect to the SACCO core later — this form is frontend only."
      />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <JoinForm />
      </section>
    </>
  );
}
