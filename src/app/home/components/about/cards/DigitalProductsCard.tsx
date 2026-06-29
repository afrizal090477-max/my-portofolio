import { AboutCard } from "@/app/home/components/about/ui/AboutCard";
import { DigitalProductsDesktop } from "@/app/home/components/about/ui/DigitalProductsDekstop";
import { DigitalProductsMobile } from "@/app/home/components/about/ui/DigitalProductsMobile";
import { cn } from "@/lib/utils";

type Props = {
  index?: number;
};

export function DigitalProductsCard({ index = 0 }: Props) {
  return (
    <AboutCard
      index={index}
      size="tall"
      className={cn(
        // GRID POSITION (FIGMA FIX)
        "col-span-12 lg:col-span-8",

        // SIZE LOCK (FIGMA 395PX)
        "h-[395px] w-full",

        // STYLE
        "relative overflow-hidden rounded-[16px] bg-[#002C6E]"
      )}
    >
      {/* ===== DESKTOP ===== */}
      <div className="hidden min-[1200px]:block h-full w-full">
        <DigitalProductsDesktop />
      </div>

      {/* ===== MOBILE ===== */}
      <div className="block min-[1200px]:hidden h-full w-full">
        <DigitalProductsMobile />
      </div>
    </AboutCard>
  );
}