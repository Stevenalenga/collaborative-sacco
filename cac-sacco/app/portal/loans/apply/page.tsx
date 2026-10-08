"use client";

import { FormEvent, useMemo, useState } from "react";
import { loanProducts } from "@/lib/data";
import { amortize } from "@/lib/calculator";
import { formatKes } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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

export default function ApplyLoanPage() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [slug, setSlug] = useState("emergency");
  const [amount, setAmount] = useState(50000);
  const [months, setMonths] = useState(6);
  const [g1, setG1] = useState("");
  const [g2, setG2] = useState("");

  const rate = rateBySlug[slug] ?? 12;
  const result = useMemo(() => amortize(amount, rate, months), [amount, rate, months]);
  const product = loanProducts.find((p) => p.slug === slug);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (step < 3) {
      setStep((s) => s + 1);
      return;
    }
    setDone(true);
  }

  if (done) {
    return (
      <div className="mx-auto max-w-xl rounded-3xl bg-white p-8 text-center shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal">Application submitted</p>
        <h1 className="font-display mt-2 text-3xl text-navy">LN-00452 is in review</h1>
        <p className="mt-3 text-muted">
          Demo only — no loan officer queue was created. In production this would move through eligibility, guarantors, credit committee, and disbursement.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-2xl rounded-3xl bg-white p-6 shadow-sm sm:p-8">
      <h1 className="font-display text-3xl text-navy">Apply for a loan</h1>
      <p className="mt-2 text-sm text-muted">Step {step + 1} of 4</p>

      {step === 0 ? (
        <div className="mt-6 grid gap-4">
          <div>
            <Label htmlFor="product">Select loan</Label>
            <Select id="product" value={slug} onChange={(e) => setSlug(e.target.value)}>
              {loanProducts.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.name}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <Label htmlFor="amount">Amount (KES)</Label>
            <Input
              id="amount"
              type="number"
              min={1000}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
          <div>
            <Label htmlFor="months">Period (months)</Label>
            <Input
              id="months"
              type="number"
              min={1}
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
            />
          </div>
        </div>
      ) : null}

      {step === 1 ? (
        <div className="mt-6 rounded-2xl bg-cream p-5">
          <p className="text-sm text-muted">{product?.name} · {rate}% p.a.</p>
          <p className="font-display mt-2 text-3xl text-navy">{formatKes(result.monthly)} / month</p>
          <p className="mt-2 text-sm text-muted">Total repayment {formatKes(result.total)}</p>
          <p className="mt-4 text-sm text-navy">Eligibility check (demo): within available loan of KES 150,000 — proceed to guarantors.</p>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="mt-6 grid gap-4">
          <div>
            <Label htmlFor="g1">Guarantor 1 member number</Label>
            <Input id="g1" required value={g1} onChange={(e) => setG1(e.target.value)} placeholder="CAC-000118" />
          </div>
          <div>
            <Label htmlFor="g2">Guarantor 2 member number</Label>
            <Input id="g2" value={g2} onChange={(e) => setG2(e.target.value)} placeholder="CAC-000087" />
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="mt-6 space-y-3 text-sm">
          <p className="rounded-2xl bg-cream p-4">Upload ID, payslip or centre documents would happen here. This demo skips file storage.</p>
          <p className="rounded-2xl bg-cream p-4">
            You are applying for {formatKes(amount)} ({product?.name}) over {months} months, guaranteed by {g1 || "—"}.
          </p>
        </div>
      ) : null}

      <div className="mt-8 flex justify-between">
        <Button type="button" variant="outline" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}>
          Back
        </Button>
        <Button type="submit">{step === 3 ? "Submit application" : "Continue"}</Button>
      </div>
    </form>
  );
}
