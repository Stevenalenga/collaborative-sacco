import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "h-12 w-full rounded-xl border border-navy/12 bg-white px-4 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-teal focus:ring-2 focus:ring-teal/20",
        className,
      )}
      {...props}
    />
  );
}

export function Label({ className, ...props }: ComponentProps<"label">) {
  return (
    <label className={cn("mb-1.5 block text-sm font-medium text-navy", className)} {...props} />
  );
}

export function Select({ className, children, ...props }: ComponentProps<"select">) {
  return (
    <select
      className={cn(
        "h-12 w-full rounded-xl border border-navy/12 bg-white px-4 text-sm text-ink outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}

export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-xl border border-navy/12 bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-teal focus:ring-2 focus:ring-teal/20",
        className,
      )}
      {...props}
    />
  );
}
