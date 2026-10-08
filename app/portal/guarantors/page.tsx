import type { Metadata } from "next";
import { demoMember } from "@/lib/data";
import { formatKes } from "@/lib/utils";

export const metadata: Metadata = { title: "Guarantors" };

export default function GuarantorsPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="font-display text-3xl text-navy">Guarantors</h1>
      <p className="mt-2 text-muted">See who guarantees you, and whose loans you support.</p>

      <h2 className="mt-8 font-semibold text-navy">On my development loan</h2>
      <div className="mt-3 grid gap-3">
        {demoMember.guarantors.map((g) => (
          <article key={g.memberNo} className="rounded-2xl bg-white p-4 shadow-sm">
            <p className="font-medium text-navy">{g.name}</p>
            <p className="text-sm text-muted">
              {g.memberNo} · {formatKes(g.amount)} · {g.status}
            </p>
          </article>
        ))}
      </div>

      <h2 className="mt-8 font-semibold text-navy">Loans I guarantee</h2>
      <div className="mt-3 grid gap-3">
        {demoMember.guaranteeing.map((g) => (
          <article key={g.memberNo} className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
            <div>
              <p className="font-medium text-navy">{g.name}</p>
              <p className="text-sm text-muted">
                {g.memberNo} · {formatKes(g.amount)}
              </p>
            </div>
            <span className="text-sm text-teal">{g.status}</span>
          </article>
        ))}
      </div>
    </div>
  );
}
