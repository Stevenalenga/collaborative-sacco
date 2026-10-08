import type { Metadata } from "next";
import { demoMember } from "@/lib/data";
import { formatKes } from "@/lib/utils";

export const metadata: Metadata = { title: "My savings" };

export default function PortalSavingsPage() {
  const total = demoMember.accounts.reduce((sum, a) => sum + a.balance, 0);

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="font-display text-3xl text-navy">My savings</h1>
      <p className="mt-2 text-muted">Demo balances — deposits will post through M-Pesa in the live system.</p>
      <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-cream text-xs uppercase tracking-wide text-muted">
            <tr>
              <th className="px-5 py-3 font-medium">Account</th>
              <th className="px-5 py-3 font-medium">Balance</th>
            </tr>
          </thead>
          <tbody>
            {demoMember.accounts.map((account) => (
              <tr key={account.name} className="border-t border-navy/8">
                <td className="px-5 py-4 font-medium text-navy">{account.name}</td>
                <td className="px-5 py-4">{formatKes(account.balance)}</td>
              </tr>
            ))}
            <tr className="border-t border-navy/8 bg-teal-soft/50">
              <td className="px-5 py-4 font-semibold text-navy">Total</td>
              <td className="px-5 py-4 font-semibold text-navy">{formatKes(total)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
