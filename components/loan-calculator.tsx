"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { amortize } from "@/lib/calculator";
import { loanProducts } from "@/lib/data";
import { formatKes } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Input, Label, Select } from "@/components/ui/fields";

const rateBySlug: Record<string, number> = {
  emergency: 12,
  development: 12,
  "school-fees": 10,
  asset: 14,
  business: 13,
  centre: 12,
  advance: 18,
};

export function LoanCalculator() {
  const [slug, setSlug] = useState("centre");
  const [amount, setAmount] = useState(100000);
  const [months, setMonths] = useState(12);

  const rate = rateBySlug[slug] ?? 12;
  const result = useMemo(() => amortize(amount, rate, months), [amount, rate, months]);
  const product = loanProducts.find((p) => p.slug === slug);

  return (
    <div className="grid gap-8 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-navy/8 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Loan calculator</p>
        <h3 className="font-display mt-2 text-3xl text-navy">Estimate a repayment</h3>
        <p className="mt-2 text-sm leading-6 text-muted">
          Illustrative reducing-balance estimate. Final terms depend on eligibility, shares, guarantors, and credit committee review.
        </p>

        <div className="mt-6 grid gap-4">
          <div>
            <Label htmlFor="product">Loan product</Label>
            <Select id="product" value={slug} onChange={(e) => setSlug(e.target.value)}>
              {loanProducts.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.name}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <Label htmlFor="amount">Loan amount (KES)</Label>
            <Input
              id="amount"
              type="number"
              min={1000}
              step={1000}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
          <div>
            <Label htmlFor="months">Repayment period (months)</Label>
            <Input
              id="months"
              type="number"
              min={1}
              max={60}
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
            />
          </div>
          <p className="text-sm text-muted">
            Assumed annual rate: <span className="font-semibold text-navy">{rate}%</span>
            {product ? ` · ${product.term}` : null}
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-3xl bg-navy p-6 text-white">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-white/50">Estimated monthly payment</p>
          <p className="font-display mt-2 text-4xl">{formatKes(result.monthly)}</p>
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between border-b border-white/10 pb-3">
              <dt className="text-white/60">Total repayment</dt>
              <dd>{formatKes(result.total)}</dd>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-3">
              <dt className="text-white/60">Total interest</dt>
              <dd>{formatKes(result.interest)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-white/60">Period</dt>
              <dd>
                {months} months · {product?.name}
              </dd>
            </div>
          </dl>
        </div>
        <Link href="/join" className={`${buttonVariants({ variant: "coral" })} mt-8`}>
          Apply for this loan
        </Link>
      </div>
    </div>
  );
}
