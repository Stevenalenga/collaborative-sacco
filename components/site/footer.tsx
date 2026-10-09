import Link from "next/link";
import { Logo } from "@/components/site/logo";
import { org } from "@/lib/data";

const columns = [
  {
    title: "SACCO",
    links: [
      { href: "/about", label: "About us" },
      { href: "/membership", label: "Membership" },
      { href: "/savings", label: "Savings" },
      { href: "/loans", label: "Loans" },
    ],
  },
  {
    title: "Learn",
    links: [
      { href: "/academy", label: "Financial academy" },
      { href: "/resources", label: "FAQs & downloads" },
      { href: "/loans#calculator", label: "Loan calculator" },
      { href: "/join", label: "Join" },
    ],
  },
  {
    title: "Members",
    links: [
      { href: "/login", label: "Member login" },
      { href: "/portal", label: "Member portal" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <Logo light size="lg" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/70">{org.description}</p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">{col.title}</p>
            <ul className="mt-4 space-y-2">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/80 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            {org.address}. {org.postal}
          </p>
          <p>Frontend demo — no live payments or member data.</p>
        </div>
      </div>
    </footer>
  );
}
