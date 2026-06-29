import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type CountryFlag =
  | "germany"
  | "united-states"
  | "indonesia";

interface CountryMarkerProps
  extends Omit<ComponentProps<"div">, "children"> {
  country: CountryFlag;
  label: string;
}

function GermanyFlag() {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative block h-8 w-[50px] overflow-hidden",
        "bg-[linear-gradient(to_bottom,#464655_0%,#464655_33.33%,#FF4B55_33.33%,#FF4B55_66.66%,#FFE15A_66.66%,#FFE15A_100%)]",
      )}
    />
  );
}

function UnitedStatesFlag() {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative block h-8 w-[50px] overflow-hidden",
        "bg-[repeating-linear-gradient(to_bottom,#FF4B55_0px,#FF4B55_2.46px,#F5F5F5_2.46px,#F5F5F5_4.92px)]",
      )}
    >
      <span
        className={cn(
          "absolute left-0 top-0 h-[17.26px] w-[23.3px]",
          "bg-[#41479B]",
          "bg-[radial-gradient(circle,#F5F5F5_0.65px,transparent_0.8px)]",
          "bg-[length:4.65px_4.3px]",
        )}
      />
    </span>
  );
}

function IndonesiaFlag() {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative block h-8 w-[50px] overflow-hidden",
        "bg-[linear-gradient(to_bottom,#FF4B55_0%,#FF4B55_50%,#F5F5F5_50%,#F5F5F5_100%)]",
      )}
    />
  );
}

const countryFlags = {
  germany: GermanyFlag,
  "united-states": UnitedStatesFlag,
  indonesia: IndonesiaFlag,
} as const;

export function CountryMarker({
  country,
  label,
  className,
  ...props
}: CountryMarkerProps) {
  const Flag = countryFlags[country];

  return (
    <div
      aria-label={label}
      className={cn(
        "absolute flex h-8 w-[70px]",
        "items-start gap-1",
        className,
      )}
      {...props}
    >
      <Flag />

      <span
        aria-hidden="true"
        className={cn(
          "mt-2 flex size-4 shrink-0",
          "items-center justify-center rounded-full",
          "bg-white/10",
        )}
      >
        <span
          className={cn(
            "flex size-[10.67px]",
            "items-center justify-center rounded-full",
            "bg-white/50",
          )}
        >
          <span className="size-[5.33px] rounded-full bg-[#FDFDFD]" />
        </span>
      </span>
    </div>
  );
}

