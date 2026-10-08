import type { Metadata } from "next";
import { demoMember } from "@/lib/data";
import { formatKes } from "@/lib/utils";

export const metadata: Metadata = { title: "Dividends" };

export default function DividendsPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="font-display text-3xl text-navy">Dividend history</h1>
      <p className="mt-2 text-muted">Declared against share capital after each financial year.</p>
      <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-cream text-xs uppercase tracking-wide text-muted">
            <tr>
              <th className="px-5 py-3 font-medium">Year</th>
              <th className="px-5 py-3 font-medium">Share capital</th>
              <th className="px-5 py-3 font-medium">Rate</th>
              <th className="px-5 py-3 font-medium">Dividend</th>
            </tr>
          </thead>
          <tbody>
            {demoMember.dividends.map((row) => (
              <tr key={row.year} className="border-t border-navy/8">
                <td className="px-5 py-4">{row.year}</td>
                <td className="px-5 py-4">{formatKes(row.shares)}</td>
                <td className="px-5 py-4">{row.rate}</td>
                <td className="px-5 py-4 font-semibold text-navy">{formatKes(row.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
