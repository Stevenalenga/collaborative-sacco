"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/savings", label: "Savings" },
  { href: "/loans", label: "Loans" },
  { href: "/membership", label: "Membership" },
  { href: "/academy", label: "Academy" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/8 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
        <Link href="/" onClick={() => setOpen(false)} className="shrink-0">
          <Logo priority />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm transition",
                  active ? "bg-white text-navy shadow-sm" : "text-muted hover:text-navy",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/login" className={buttonVariants({ variant: "ghost", size: "sm" })}>
            Member login
          </Link>
          <Link href="/join" className={buttonVariants({ variant: "primary", size: "sm" })}>
            Join CAC SACCO
          </Link>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-navy/10 bg-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-navy/8 bg-cream px-4 py-4 lg:hidden">
          <nav className="grid gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm text-navy hover:bg-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 grid gap-2">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className={buttonVariants({ variant: "outline" })}
            >
              Member login
            </Link>
            <Link href="/join" onClick={() => setOpen(false)} className={buttonVariants()}>
              Join CAC SACCO
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
