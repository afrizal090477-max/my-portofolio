import { heroMarqueeItems } from "@/constant/hero-data";
import { cn } from "@/lib/utils";

interface MarqueeSparkProps {
  className?: string;
}

function MarqueeSpark({
  className,
}: MarqueeSparkProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 52.5"
      fill="none"
      className={cn(
        "h-[35px] w-8 shrink-0",
        "desktop:h-[52.5px] desktop:w-12",
        className,
      )}
    >
      <path
        fill="currentColor"
        d="
          M24 0
          C25.8 14.4 33.6 24.2 48 26.25
          C33.6 28.3 25.8 38.1 24 52.5
          C22.2 38.1 14.4 28.3 0 26.25
          C14.4 24.2 22.2 14.4 24 0
          Z
        "
      />
    </svg>
  );
}

interface MarqueeSequenceProps {
  hidden?: boolean;
}

function MarqueeSequence({
  hidden = false,
}: MarqueeSequenceProps) {
  return (
    <div
      aria-hidden={hidden}
      className={cn(
        "flex h-full w-[1070px] shrink-0 items-center",
        "gap-4 px-4",
        "desktop:w-[1952px] desktop:gap-6 desktop:px-6",
      )}
    >
      {heroMarqueeItems.map((item) => (
        <div
          key={item.label}
          className="contents"
        >
          <MarqueeSpark
            className={item.separatorClass}
          />

          <span
            className={cn(
              "flex shrink-0 items-center justify-center",
              "whitespace-nowrap text-center",
              "text-display-xs font-bold tracking-display text-gray-25",
              "desktop:h-[60px]",
              "desktop:text-[48px] desktop:leading-[60px]",
              item.widthClass,
            )}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function HeroMarquee() {
  return (
    <div
      aria-label="Frontend Developer, Expert React, Programmers, Mobile Developers"
      className={cn(
        "group absolute left-1/2 z-50",
        "top-[673px] ml-[8.99px]",
        "h-[84px] w-[1070px]",
        "-translate-x-1/2 rotate-[-1.89deg]",
        "overflow-hidden bg-gray-950",
        "desktop:top-[821px]",
        "desktop:h-[140px] desktop:w-[1952px]",
      )}
    >
      <div
        className={cn(
          "flex h-full w-max items-center",
          "will-change-transform",
          "[animation:hero-marquee_28s_linear_infinite]",
          "group-hover:[animation-play-state:paused]",
          "motion-reduce:[animation:none]",
        )}
      >
        <MarqueeSequence />

        <MarqueeSequence hidden />
      </div>
    </div>
  );
}