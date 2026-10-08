import type { Metadata } from "next";
import { demoMember } from "@/lib/data";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = { title: "Profile" };

export default function ProfilePage() {
  const m = demoMember;
  const fields = [
    ["Full name", m.name],
    ["Member number", m.memberNo],
    ["Phone", m.phone],
    ["Email", m.email],
    ["Nationality", m.nationality],
    ["Occupation", m.occupation],
    ["Employer / centre", m.employer],
    ["County", m.county],
    ["Next of kin", m.nextOfKin],
    ["Beneficiaries", m.beneficiaries],
    ["Membership date", formatDate(m.joined)],
    ["Status", m.status],
  ];

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="font-display text-3xl text-navy">Member profile</h1>
      <p className="mt-2 text-sm">
        KYC status: <span className="font-semibold text-teal">{m.kyc}</span>
      </p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {fields.map(([label, value]) => (
          <div key={label} className="rounded-2xl bg-white p-4 shadow-sm">
            <p className="text-xs text-muted">{label}</p>
            <p className="mt-1 font-medium text-navy">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
