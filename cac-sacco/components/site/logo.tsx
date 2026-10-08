import { cn } from "@/lib/utils";

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "relative grid h-9 w-9 place-items-center rounded-full",
          light ? "bg-white/15 text-white" : "bg-teal text-white",
        )}
        aria-hidden
      >
        <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
          <circle cx="16" cy="11" r="4.2" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M8 24c1.6-4 4.4-6 8-6s6.4 2 8 6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M22.5 9.5c2.2.4 3.8 2.2 3.8 4.5 0 1.3-.5 2.4-1.3 3.2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="leading-tight">
        <span className={cn("block text-sm font-semibold tracking-tight", light ? "text-white" : "text-navy")}>
          Collaborative SACCO
        </span>
        <span className={cn("block text-[11px]", light ? "text-white/70" : "text-muted")}>
          For the childcare community
        </span>
      </span>
    </span>
  );
}
