import Image from "next/image";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

interface ExperienceThumbnailProps
  extends Omit<ComponentProps<"div">, "children"> {
  name: string;
  image: string;
}

export function ExperienceThumbnail({
  name,
  image,
  className,
  ...props
}: ExperienceThumbnailProps) {
  return (
    <div
      className={cn(
        "relative h-[71px] w-[95px] shrink-0 overflow-hidden",
        "rounded-[12px] bg-gray-800",
        className,
      )}
      {...props}
    >
      <Image
        src={image}
        alt={`${name} project preview`}
        fill
        sizes="95px"
        className="object-cover"
      />
    </div>
  );
}

