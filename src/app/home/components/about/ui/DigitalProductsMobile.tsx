import { Sparkles } from "lucide-react";
import { AboutStat } from "@/app/home/components/about/ui/AboutStat";
import { DigitalWorldMap } from "@/app/home/components/about/ui/DigitalWorldMap";
import { digitalProductsData } from "@/constant/about-data";
import { cn } from "@/lib/utils";
export function DigitalProductsMobile() {
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden",
        "bg-[linear-gradient(104.24deg,#002C6E_26.91%,#0C4EAF_89.31%)]",
      )}
    >
      {" "}
      <DigitalWorldMap variant="mobile" />{" "}
      <h3
        className={cn(
          "absolute left-4 top-8 z-10",
          "h-[76px] w-[329px]",
          "text-[28px] font-bold leading-[38px]",
          "text-white",
        )}
      >
        {" "}
        <span className="block"> Building Digital </span>{" "}
        <span className="flex items-center gap-1">
          {" "}
          Products{" "}
          <Sparkles
            aria-hidden="true"
            className="size-5"
            strokeWidth={2}
          />{" "}
        </span>{" "}
      </h3>{" "}
      <div
        className={cn(
          "absolute left-4 top-[140px] z-10",
          "flex w-[165px] flex-col gap-6",
        )}
      >
        {" "}
        {digitalProductsData.stats.map((stat) => (
          <AboutStat
            key={stat.label}
            value={stat.value}
            label={stat.label}
            variant="compact"
          />
        ))}{" "}
      </div>{" "}
    </div>
  );
}
