import type { Metadata } from "next";
import Link from "next/link";
import { demoMember } from "@/lib/data";
import { formatKes } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = { title: "My loans" };

export default function PortalLoansPage() {
  const loan = demoMember.loans[0];

  return (
    <div className="mx-auto max-w-4xl">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl text-navy">My loans</h1>
          <p className="mt-2 text-muted">Track balances, instalments, and repayments.</p>
        </div>
        <Link href="/portal/loans/apply" className={buttonVariants()}>
          Apply for loan
        </Link>
      </div>

      <article className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted">{loan.id}</p>
            <h2 className="mt-1 text-xl font-semibold text-navy">{loan.product}</h2>
            <p className="text-sm text-muted">{loan.status} · {loan.rate}</p>
          </div>
          <p className="font-display text-3xl text-navy">{formatKes(loan.balance)}</p>
        </div>
        <dl className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-cream p-4">
            <dt className="text-xs text-muted">Original principal</dt>
            <dd className="mt-1 font-semibold text-navy">{formatKes(loan.principal)}</dd>
          </div>
          <div className="rounded-2xl bg-cream p-4">
            <dt className="text-xs text-muted">Next instalment</dt>
            <dd className="mt-1 font-semibold text-navy">{formatKes(loan.instalment)}</dd>
          </div>
          <div className="rounded-2xl bg-cream p-4">
            <dt className="text-xs text-muted">Due</dt>
            <dd className="mt-1 font-semibold text-navy">{loan.nextDue}</dd>
          </div>
        </dl>
        <Link href="/portal/wallet" className={`${buttonVariants({ variant: "coral" })} mt-6`}>
          Pay via M-Pesa
        </Link>
      </article>
    </div>
  );
}
