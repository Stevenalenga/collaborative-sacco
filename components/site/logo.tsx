import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  light = false,
  priority = false,
  size = "md",
}: {
  className?: string;
  light?: boolean;
  priority?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const heights = {
    sm: "h-10 max-w-[160px] sm:h-11 sm:max-w-[180px]",
    md: "h-12 max-w-[190px] sm:h-14 sm:max-w-[230px]",
    lg: "h-16 max-w-[240px]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center",
        light && "rounded-xl bg-white px-2.5 py-2 shadow-sm",
        className,
      )}
    >
      <Image
        src="/sacco-logo.webp"
        alt="Collaborative SACCO — Your financial inclusion partner"
        width={640}
        height={280}
        className={cn("w-auto object-contain", heights[size])}
        priority={priority}
      />
    </span>
  );
}
