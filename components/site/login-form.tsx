"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { demoCredentials, demoMember } from "@/lib/data";
import { writeSession } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/fields";

export function LoginForm() {
  const router = useRouter();
  const [memberNo, setMemberNo] = useState(demoCredentials.memberNo);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const match =
      memberNo.trim().toUpperCase() === demoCredentials.memberNo &&
      password === demoCredentials.password;
    if (!match) {
      setError("Use the demo member number and password shown below.");
      return;
    }
    writeSession({ memberNo: demoMember.memberNo, name: demoMember.name });
    router.push("/portal");
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[1.75rem] bg-white p-6 ring-1 ring-navy/8 sm:p-8">
      <div>
        <Label htmlFor="memberNo">Member number</Label>
        <Input
          id="memberNo"
          value={memberNo}
          onChange={(e) => setMemberNo(e.target.value)}
          autoComplete="username"
          required
        />
      </div>
      <div className="mt-4">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />
      </div>
      {error ? <p className="mt-3 text-sm text-coral-dark">{error}</p> : null}
      <Button type="submit" className="mt-6 w-full">
        Log in
      </Button>
      <div className="mt-6 rounded-2xl bg-teal-soft p-4 text-sm text-navy">
        <p className="font-semibold">Demo access — no backend</p>
        <p className="mt-1">
          Member no. <span className="font-mono">{demoCredentials.memberNo}</span>
          <br />
          Password <span className="font-mono">{demoCredentials.password}</span>
        </p>
      </div>
    </form>
  );
}
