import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = ComponentProps<"div">;

export function Container({
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1440px]",
        "px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16",
        "desktop:px-32",
        className,
      )}
      {...props}
    />
  );
}