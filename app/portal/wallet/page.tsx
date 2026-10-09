"use client";

import { FormEvent, useState } from "react";
import { demoMember } from "@/lib/data";
import { formatKes } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input, Label, Select } from "@/components/ui/fields";

export default function WalletPage() {
  const [mode, setMode] = useState<"deposit" | "repay">("deposit");
  const [amount, setAmount] = useState(10000);
  const [done, setDone] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setDone(
      mode === "deposit"
        ? `STK Push preview: pay KES ${amount.toLocaleString()} to Collaborative SACCO. No M-Pesa request was sent.`
        : `Loan repayment preview: KES ${amount.toLocaleString()} toward LN-00412. No M-Pesa request was sent.`,
    );
  }

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="font-display text-3xl text-navy">Member wallet</h1>
      <p className="mt-2 text-muted">M-Pesa STK Push, C2B, and B2C will live here. This screen is UI only.</p>

      <article className="mt-6 rounded-3xl bg-navy p-6 text-white">
        <p className="text-xs uppercase tracking-wide text-white/50">Available balance</p>
        <p className="font-display mt-1 text-4xl">{formatKes(demoMember.totals.wallet)}</p>
        <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
          <div>
            <dt className="text-white/50">Savings</dt>
            <dd>{formatKes(demoMember.totals.savings)}</dd>
          </div>
          <div>
            <dt className="text-white/50">Loan balance</dt>
            <dd>{formatKes(demoMember.totals.loan)}</dd>
          </div>
        </dl>
      </article>

      <form onSubmit={onSubmit} className="mt-6 rounded-3xl bg-white p-6 shadow-sm">
        <Label htmlFor="mode">Action</Label>
        <Select id="mode" value={mode} onChange={(e) => setMode(e.target.value as "deposit" | "repay")}>
          <option value="deposit">Deposit to savings</option>
          <option value="repay">Pay loan</option>
        </Select>
        <div className="mt-4">
          <Label htmlFor="amount">Amount (KES)</Label>
          <Input id="amount" type="number" min={100} value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
        </div>
        <Button type="submit" className="mt-6 w-full">
          Pay via M-Pesa
        </Button>
        {done ? <p className="mt-4 text-sm text-teal-dark">{done}</p> : null}
      </form>
    </div>
  );
}
