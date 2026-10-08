import type { Metadata } from "next";
import Link from "next/link";
import { demoMember } from "@/lib/data";
import { formatDate, formatKes } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = { title: "Member portal" };

export default function PortalHomePage() {
  const m = demoMember;
  const greeting = "Good day";

  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm text-muted">
            {greeting}, {m.firstName}
          </p>
          <h1 className="font-display text-3xl text-navy">Member no. {m.memberNo}</h1>
          <p className="mt-1 text-sm text-muted">KYC {m.kyc} · {m.status}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/portal/wallet" className={buttonVariants({ size: "sm" })}>
            Deposit
          </Link>
          <Link href="/portal/loans/apply" className={buttonVariants({ variant: "coral", size: "sm" })}>
            Apply for loan
          </Link>
          <Link href="/portal/statements" className={buttonVariants({ variant: "outline", size: "sm" })}>
            Statement
          </Link>
          <Link href="/portal/loans" className={buttonVariants({ variant: "outline", size: "sm" })}>
            Pay loan
          </Link>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total savings", value: formatKes(m.totals.savings), note: `↑ ${m.totals.savingsGrowth}% this year` },
          { label: "Share capital", value: formatKes(m.totals.shares), note: "Dividend eligible" },
          { label: "Loan balance", value: formatKes(m.totals.loan), note: "Development loan" },
          { label: "Available loan", value: formatKes(m.totals.available), note: "Subject to appraisal" },
        ].map((card) => (
          <article key={card.label} className="rounded-3xl bg-white p-5 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-muted">{card.label}</p>
            <p className="font-display mt-2 text-2xl text-navy">{card.value}</p>
            <p className="mt-1 text-xs text-teal">{card.note}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-navy">Recent transactions</h2>
          <ul className="mt-4 divide-y divide-navy/8">
            {m.transactions.map((tx) => (
              <li key={`${tx.date}-${tx.label}`} className="flex items-center justify-between py-3 text-sm">
                <div>
                  <p className="font-medium text-navy">{tx.label}</p>
                  <p className="text-xs text-muted">{formatDate(tx.date)}</p>
                </div>
                <p className={tx.amount > 0 ? "font-semibold text-teal" : "font-semibold text-navy"}>
                  {tx.amount > 0 ? "+" : ""}
                  {formatKes(tx.amount)}
                </p>
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-3xl bg-navy p-6 text-white shadow-sm">
          <p className="text-xs uppercase tracking-wide text-white/50">CAC Wallet</p>
          <p className="font-display mt-2 text-3xl">{formatKes(m.totals.wallet)}</p>
          <p className="mt-2 text-sm text-white/70">Available balance for SACCO payments and transfers (demo).</p>
          <Link href="/portal/wallet" className={`${buttonVariants({ variant: "coral", size: "sm" })} mt-6`}>
            Open wallet
          </Link>
        </article>
      </div>
    </div>
  );
}
