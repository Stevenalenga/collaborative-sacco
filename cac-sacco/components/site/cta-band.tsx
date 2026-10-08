import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { org } from "@/lib/data";

export function CtaBand() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-teal px-8 py-12 text-white sm:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Ready when you are</p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl sm:text-4xl">
          Ready to build your financial future with the childcare community?
        </h2>
        <p className="mt-4 max-w-xl text-white/80">{org.tagline} Join Collaborative SACCO as a member, centre, or sector partner.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/join" className={buttonVariants({ variant: "coral", size: "lg" })}>
            Join CAC SACCO
          </Link>
          <Link href="/contact" className={buttonVariants({ variant: "light", size: "lg" })}>
            Talk to us
          </Link>
        </div>
      </div>
    </section>
  );
}
