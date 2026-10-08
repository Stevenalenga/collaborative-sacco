"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/fields";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-[1.75rem] bg-white p-8 py-16 text-center ring-1 ring-navy/8">
        <p className="font-display text-3xl text-navy">Message captured</p>
        <p className="mt-3 text-muted">
          In the live system this will go to the SACCO office. For this demo, nothing was sent.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[1.75rem] bg-white p-6 ring-1 ring-navy/8 sm:p-8">
      <div className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="name">Full name</Label>
            <Input id="name" name="name" required />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" required />
          </div>
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" />
        </div>
        <div>
          <Label htmlFor="message">How can we help?</Label>
          <Textarea id="message" name="message" required />
        </div>
        <Button type="submit">Send message</Button>
      </div>
    </form>
  );
}
