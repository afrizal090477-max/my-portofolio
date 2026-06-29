import Image from "next/image";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

interface TechnologyIconProps
  extends Omit<ComponentProps<"div">, "children"> {
  name: string;
  icon: string;
  width: number;
  height: number;
  backdrop?: {
    width: number;
    height: number;
  };
}

export function TechnologyIcon({
  name,
  icon,
  width,
  height,
  backdrop,
  className,
  ...props
}: TechnologyIconProps) {
  return (
    <div
      title={name}
      className={cn(
        "relative flex size-[52.58px] shrink-0",
        "items-center justify-center overflow-hidden",
        "rounded-full bg-[#252B37]",
        className,
      )}
      {...props}
    >
      {backdrop && (
        <span
          aria-hidden="true"
          className="absolute bg-white"
          style={{
            width: backdrop.width,
            height: backdrop.height,
          }}
        />
      )}

      <Image
        src={icon}
        alt=""
        width={width}
        height={height}
        className="relative z-10 object-contain"
      />

      <span className="sr-only">{name}</span>
    </div>
  );
}

