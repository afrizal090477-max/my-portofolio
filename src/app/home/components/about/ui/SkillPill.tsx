import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

interface SkillPillProps
  extends ComponentProps<"span"> {
  label: string;
}

export function SkillPill({
  label,
  className,
  ...props
}: SkillPillProps) {
  return (
    <span
      className={cn(
        "inline-flex h-9 shrink-0 items-center justify-center",
        "whitespace-nowrap rounded-full bg-white px-4",
        "text-[14px] font-normal leading-7 text-gray-950",
        className,
      )}
      {...props}
    >
      {label}
    </span>
  );
}
