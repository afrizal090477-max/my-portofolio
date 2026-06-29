import { Sparkles } from "lucide-react";
import { AboutStat } from "@/app/home/components/about/ui/AboutStat";
import { DigitalWorldMap } from "@/app/home/components/about/ui/DigitalWorldMap";
import { digitalProductsData } from "@/constant/about-data";
import { cn } from "@/lib/utils";
export function DigitalProductsDesktop() {
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden",
        "bg-[linear-gradient(104.24deg,#002C6E_26.91%,#0C4EAF_89.31%)]",
      )}
    >
      {" "}
      <DigitalWorldMap variant="desktop" />{" "}
      <h3
        className={cn(
          "absolute left-6 top-6 z-10",
          "h-[92px] w-[256px]",
          "text-[32px] font-bold leading-[46px]",
          "tracking-[-0.02em] text-white",
        )}
      >
        {" "}
        <span className="block"> Building Digital </span>{" "}
        <span className="flex items-center gap-2">
          {" "}
          Products{" "}
          <Sparkles
            aria-hidden="true"
            className="size-6"
            strokeWidth={2}
          />{" "}
        </span>{" "}
      </h3>{" "}
      <div
        className={cn(
          "absolute left-8 top-[271px] z-10",
          "flex h-[92px] w-[720px]",
          "items-start gap-[39px]",
        )}
      >
        {" "}
        {digitalProductsData.stats.map((stat) => (
          <AboutStat
            key={stat.label}
            value={stat.value}
            label={stat.label}
            className="w-[214px]"
          />
        ))}{" "}
      </div>{" "}
    </div>
  );
}
