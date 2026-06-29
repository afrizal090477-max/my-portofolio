import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type AboutStatVariant = "default" | "compact";

interface AboutStatProps
  extends ComponentProps<"div"> {
  value: string;
  label: string;
  variant?: AboutStatVariant;
}

export function AboutStat({
  value,
  label,
  variant = "default",
  className,
  ...props
}: AboutStatProps) {
  const isCompact = variant === "compact";

  return (
    <div
      className={cn(
        "flex w-full flex-col items-start",
        isCompact ? "h-[76px]" : "h-[92px]",
        className,
      )}
      {...props}
    >
      <strong
        className={cn(
          "font-bold tracking-[-0.02em]",
          "text-[#FDFDFD]",
          isCompact
            ? "h-12 text-[36px] leading-[48px]"
            : "h-[60px] text-[48px] leading-[60px]",
        )}
      >
        {value}
      </strong>

      <span
        className={cn(
          "font-medium text-[#FDFDFD]",
          isCompact
            ? "h-7 whitespace-nowrap text-[14px] leading-7"
            : "h-8 whitespace-nowrap text-[18px] leading-8",
        )}
      >
        {label}
      </span>
    </div>
  );
}