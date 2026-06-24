import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type PageShellProps = ComponentProps<"div">;

export function PageShell({
  className,
  ...props
}: PageShellProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[1440px]",
        "overflow-x-clip rounded-none bg-white",
        "desktop:min-h-[8577px]",
        className,
      )}
      {...props}
    />
  );
}