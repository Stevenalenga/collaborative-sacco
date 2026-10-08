import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { LoginForm } from "@/components/site/login-form";

export const metadata: Metadata = { title: "Member login" };

export default function LoginPage() {
  return (
    <>
      <PageHero
        kicker="Member login"
        title="Open your SACCO portal"
        body="This login is a frontend preview with sample member data. Live authentication will arrive with the SACCO core."
      />
      <section className="mx-auto max-w-md px-4 py-16 sm:px-6">
        <LoginForm />
      </section>
    </>
  );
}
