"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  BookOpen,
  CircleDollarSign,
  Home,
  Landmark,
  LogOut,
  PiggyBank,
  Receipt,
  Shield,
  UserRound,
  Wallet,
} from "lucide-react";
import { clearSession, readSession } from "@/lib/auth";
import { demoMember } from "@/lib/data";
import { Logo } from "@/components/site/logo";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/portal", label: "Home", icon: Home },
  { href: "/portal/savings", label: "Savings", icon: PiggyBank },
  { href: "/portal/loans", label: "Loans", icon: Landmark },
  { href: "/portal/wallet", label: "Wallet", icon: Wallet },
  { href: "/portal/statements", label: "Statements", icon: Receipt },
  { href: "/portal/guarantors", label: "Guarantors", icon: Shield },
  { href: "/portal/dividends", label: "Dividends", icon: CircleDollarSign },
  { href: "/portal/academy", label: "Academy", icon: BookOpen },
  { href: "/portal/profile", label: "Profile", icon: UserRound },
];

const mobile = [
  { href: "/portal", label: "Home", icon: Home },
  { href: "/portal/savings", label: "Accounts", icon: PiggyBank },
  { href: "/portal/loans", label: "Loans", icon: Landmark },
  { href: "/portal/wallet", label: "Pay", icon: Wallet },
  { href: "/portal/profile", label: "Profile", icon: UserRound },
];

export function PortalShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    const session = readSession();
    if (!session) {
      router.replace("/login");
      return;
    }
    setAuthed(true);
    setReady(true);
  }, [router]);

  if (!ready || !authed) {
    return (
      <div className="grid min-h-screen place-items-center bg-cream px-6 text-muted">
        <div className="text-center">
          <Logo />
          <p className="mt-4 text-sm">Opening member portal…</p>
        </div>
      </div>
    );
  }

  function logout() {
    clearSession();
    router.push("/");
  }

  return (
    <div className="min-h-screen bg-[#eef3f1] pb-20 lg:pb-0">
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-navy/8 bg-navy p-5 text-white lg:flex lg:flex-col">
        <Link href="/" className="block">
          <Logo light size="lg" />
        </Link>
        <p className="mt-6 text-xs text-white/50">
          {demoMember.name}
          <br />
          {demoMember.memberNo}
        </p>
        <nav className="mt-8 grid gap-1">
          {nav.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm",
                  active ? "bg-white/12 text-white" : "text-white/70 hover:bg-white/8 hover:text-white",
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          onClick={logout}
          className="mt-auto flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/70 hover:bg-white/8 hover:text-white"
        >
          <LogOut className="h-4 w-4" />
          Log out
        </button>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 flex items-center justify-between gap-3 border-b border-navy/8 bg-[#eef3f1]/90 px-4 py-2.5 backdrop-blur lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <Link href="/portal" className="shrink-0 lg:hidden">
              <Logo size="sm" />
            </Link>
            <div className="min-w-0">
              <p className="truncate text-xs text-muted">Member portal</p>
              <p className="font-semibold text-navy">Membership: {demoMember.status}</p>
            </div>
          </div>
          <Link href="/" className="shrink-0 text-sm font-medium text-teal">
            Public site
          </Link>
        </header>
        <div className="px-4 py-6 lg:px-8 lg:py-8">{children}</div>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-5 border-t border-navy/10 bg-white px-1 py-2 lg:hidden">
        {mobile.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 py-1 text-[11px]",
                active ? "text-teal" : "text-muted",
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
