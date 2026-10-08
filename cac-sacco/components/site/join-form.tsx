"use client";

import { FormEvent, useState } from "react";
import { memberTypes } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/fields";

const steps = ["Member type", "Personal details", "Work & kin", "Review"];

export function JoinForm() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    type: "Childcare Worker",
    name: "",
    phone: "",
    email: "",
    idNumber: "",
    county: "Nairobi",
    occupation: "",
    employer: "",
    kin: "",
    kinPhone: "",
  });

  function update(key: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function next() {
    setStep((s) => Math.min(s + 1, steps.length - 1));
  }

  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (step < steps.length - 1) {
      next();
      return;
    }
    setDone(true);
  }

  if (done) {
    return (
      <div className="rounded-[1.75rem] bg-white p-8 text-center ring-1 ring-navy/8 sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Application received</p>
        <h2 className="font-display mt-3 text-3xl text-navy">Welcome to the queue, {form.name.split(" ")[0] || "member"}</h2>
        <p className="mx-auto mt-4 max-w-lg text-muted">
          This is a frontend demo, so no record was stored. When the SACCO core is connected, this flow will create a pending member, request KYC, and issue a member number after approval.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[1.75rem] bg-white p-6 ring-1 ring-navy/8 sm:p-8">
      <div className="mb-8 flex gap-2">
        {steps.map((label, i) => (
          <div key={label} className="flex-1">
            <div className={`h-1.5 rounded-full ${i <= step ? "bg-teal" : "bg-sand"}`} />
            <p className="mt-2 hidden text-xs text-muted sm:block">{label}</p>
          </div>
        ))}
      </div>

      {step === 0 ? (
        <div className="grid gap-3 sm:grid-cols-2">
          {memberTypes.map((type) => (
            <button
              type="button"
              key={type.title}
              onClick={() => update("type", type.title)}
              className={`rounded-2xl p-4 text-left ring-1 transition ${
                form.type === type.title ? "bg-teal-soft ring-teal" : "bg-cream ring-transparent"
              }`}
            >
              <p className="font-semibold text-navy">{type.title}</p>
              <p className="mt-1 text-sm text-muted">{type.body}</p>
            </button>
          ))}
        </div>
      ) : null}

      {step === 1 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" required value={form.name} onChange={(e) => update("name", e.target.value)} />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" required value={form.phone} onChange={(e) => update("phone", e.target.value)} />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} />
          </div>
          <div>
            <Label htmlFor="idNumber">National ID</Label>
            <Input id="idNumber" required value={form.idNumber} onChange={(e) => update("idNumber", e.target.value)} />
          </div>
          <div>
            <Label htmlFor="county">County</Label>
            <Input id="county" value={form.county} onChange={(e) => update("county", e.target.value)} />
          </div>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="occupation">Occupation</Label>
            <Input id="occupation" required value={form.occupation} onChange={(e) => update("occupation", e.target.value)} />
          </div>
          <div>
            <Label htmlFor="employer">Employer / centre</Label>
            <Input id="employer" value={form.employer} onChange={(e) => update("employer", e.target.value)} />
          </div>
          <div>
            <Label htmlFor="kin">Next of kin</Label>
            <Input id="kin" required value={form.kin} onChange={(e) => update("kin", e.target.value)} />
          </div>
          <div>
            <Label htmlFor="kinPhone">Next of kin phone</Label>
            <Input id="kinPhone" value={form.kinPhone} onChange={(e) => update("kinPhone", e.target.value)} />
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <dl className="grid gap-3 text-sm sm:grid-cols-2">
          {Object.entries({
            "Member type": form.type,
            Name: form.name,
            Phone: form.phone,
            Email: form.email || "—",
            "National ID": form.idNumber,
            County: form.county,
            Occupation: form.occupation,
            "Employer / centre": form.employer || "—",
            "Next of kin": form.kin,
          }).map(([k, v]) => (
            <div key={k} className="rounded-2xl bg-cream px-4 py-3">
              <dt className="text-xs text-muted">{k}</dt>
              <dd className="mt-1 font-medium text-navy">{v}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      <div className="mt-8 flex justify-between">
        <Button type="button" variant="outline" onClick={back} disabled={step === 0}>
          Back
        </Button>
        <Button type="submit">{step === steps.length - 1 ? "Submit application" : "Continue"}</Button>
      </div>
    </form>
  );
}
