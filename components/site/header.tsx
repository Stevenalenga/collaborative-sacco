"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/8 bg-cream/90 backdrop-blur-md">
      <div className="relative z-50 mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
        <Link href="/" className="min-w-0 shrink overflow-hidden" onClick={() => setOpen(false)}>
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
          <Link
            href="/join"
            className={cn(buttonVariants({ variant: "primary", size: "sm" }), "whitespace-nowrap px-5")}
          >
            Join Collaborative SACCO
          </Link>
        </div>

        <button
          type="button"
          className="relative z-50 grid h-11 w-11 shrink-0 cursor-pointer place-items-center rounded-full border border-navy/10 bg-white text-navy touch-manipulation lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="lg:hidden">
          <button
            type="button"
            className="fixed inset-0 z-40 cursor-default bg-navy/40"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-nav"
            className="absolute inset-x-0 top-full z-50 max-h-[min(80vh,calc(100dvh-4.5rem))] overflow-y-auto border-t border-navy/8 bg-cream px-4 py-4 shadow-lg"
          >
            <nav className="grid gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-3 text-base text-navy hover:bg-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 grid gap-2">
              <Link href="/login" className={buttonVariants({ variant: "outline" })}>
                Member login
              </Link>
              <Link href="/join" className={cn(buttonVariants(), "whitespace-nowrap text-center")}>
                Join Collaborative SACCO
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
