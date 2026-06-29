import { heroMarqueeItems } from "@/constant/hero-data";
import { cn } from "@/lib/utils";


const fluidMarqueeTop =
  "clamp(673px, calc(617.45px + 14.136vw), 821px)";

const fluidMarqueeHeight =
  "clamp(84px, calc(62.98px + 5.349vw), 140px)";

const fluidMarqueeWidth =
  "clamp(1070px, calc(738.93px + 84.241vw), 1952px)";

const fluidSequenceGap =
  "clamp(16px, calc(13px + 0.764vw), 24px)";

const fluidSequencePadding =
  "clamp(16px, calc(13px + 0.764vw), 24px)";

const fluidSparkWidth =
  "clamp(32px, calc(25.99px + 1.528vw), 48px)";

const fluidSparkHeight =
  "clamp(35px, calc(28.43px + 1.671vw), 52.5px)";

const fluidTextSize =
  "clamp(24px, calc(14.99px + 2.292vw), 48px)";

const fluidTextLineHeight =
  "clamp(36px, calc(26.99px + 2.292vw), 60px)";

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
        "shrink-0",
        className,
      )}
      style={{
        width: fluidSparkWidth,
        height: fluidSparkHeight,
      }}
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
      aria-hidden={hidden || undefined}
      className={[
        "flex h-full shrink-0",
        "items-center",
      ].join(" ")}
      style={{
        width: fluidMarqueeWidth,
        gap: fluidSequenceGap,
        paddingInline: fluidSequencePadding,
      }}
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
              [
                "flex shrink-0",
                "items-center justify-center",
                "whitespace-nowrap text-center",
                "font-bold tracking-display",
                "text-gray-25",
              ].join(" "),
              item.widthClass,
            )}
            style={{
              fontSize: fluidTextSize,
              lineHeight: fluidTextLineHeight,
            }}
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
      className={[
        "absolute left-1/2 z-50",
        "ml-[8.99px]",
        "-translate-x-1/2",
        "rotate-[-1.89deg]",
        "overflow-hidden bg-gray-950",
      ].join(" ")}
      style={{
        top: fluidMarqueeTop,
        width: fluidMarqueeWidth,
        height: fluidMarqueeHeight,
      }}
    >
      <div
        className={[
          "flex h-full w-max items-center",
          "will-change-transform",
          "[animation:hero-marquee_28s_linear_infinite]",
          "[animation-fill-mode:both]",
          "motion-reduce:[animation:none]",
        ].join(" ")}
      >
        <MarqueeSequence />
        <MarqueeSequence hidden />
      </div>
    </div>
  );
}
