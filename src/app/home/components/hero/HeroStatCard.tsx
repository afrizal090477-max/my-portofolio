"use client";

import Image from "next/image";
import { BadgeCheck, Star } from "lucide-react";

import SkewMotion from "@/components/ui/skew-motion";
import { cn } from "@/lib/utils";

type HeroStatCardVariant = "rating" | "role" | "clients";

interface HeroStatCardProps {
  variant: HeroStatCardVariant;
  value?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  avatars?: readonly string[];
  delay?: number;
  className?: string;
}

export function HeroStatCard({
  variant,
  value,
  title,
  subtitle,
  description,
  avatars,
  delay = 0,
  className,
}: HeroStatCardProps) {
  return (
    <SkewMotion
      duration={0.8}
      delay={delay}
      initial={{
        opacity: 0,
        y: 24,
        rotate: "0deg",
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: "var(--card-rotate)",
        scale: 1,
      }}
      whileHover={{
        scale: 1.03,
      }}
      transition={{
        opacity: { duration: 0.35, delay },
        y: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
        rotate: {
          duration: 0.85,
          delay: delay + 0.08,
          ease: [0.22, 1, 0.36, 1],
        },
        scale: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
      }}
      className={cn(
        "h-full w-full rounded-[12px] border border-white/10 bg-[#282828]/20 text-[#FDFDFD] backdrop-blur-[20px]",
        "desktop:rounded-[16px]",
        className
      )}
    >
      {variant === "rating" && (
        <div className="flex h-full flex-col items-start p-3 gap-0.5 desktop:p-5 desktop:gap-1">
          <p className="w-full text-[24px] font-bold leading-[36px] tracking-[-0.02em] desktop:text-[40px] desktop:leading-[56px]">
            {value}
          </p>

          <div className="flex h-6 items-center desktop:h-8">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="size-6 fill-[#F3993F] text-[#F3993F] desktop:size-8"
                strokeWidth={1.5}
              />
            ))}
          </div>
          <p className="w-full text-[12px] font-medium leading-[24px] desktop:text-[14px] desktop:leading-[28px]">
            {description}
          </p>
        </div>
      )}
      {variant === "role" && (
  <div
    className={[
      "flex h-full flex-col items-start justify-center",
      "overflow-visible p-3",
      "desktop:p-5",
    ].join(" ")}
  >
    <p
      className={[
        "h-7 w-[142px] whitespace-nowrap",
        "text-[14px] font-bold leading-7 tracking-[-0.02em]",
        "desktop:h-9 desktop:w-[243px]",
        "desktop:text-[24px] desktop:leading-9",
      ].join(" ")}
    >
      {title}
    </p>

    <div className="flex h-7 w-[125px] items-center gap-0.5 whitespace-nowrap">
      <BadgeCheck
        aria-hidden="true"
        className="size-6 shrink-0 text-[#FDFDFD]"
        strokeWidth={2}
      />
      <span className="whitespace-nowrap text-[14px] font-medium leading-7">
        {subtitle}
      </span>
    </div>
  </div>
)}

      {variant === "clients" && (
        <div className="flex h-full flex-col items-start p-3 gap-1.5 desktop:p-5 desktop:gap-2">
          <p className="w-full text-[24px] font-bold leading-[36px] tracking-[-0.02em] desktop:text-[40px] desktop:leading-[56px]">
            {value}
          </p>
          <p className="w-full text-[12px] font-medium leading-[24px] desktop:text-[14px] desktop:leading-[28px]">
            {title}
          </p>
          <div className="flex h-10 items-center desktop:h-[52px]">
            {avatars?.map((avatar, index) => (
              <Image
                key={avatar}
                src={avatar}
                alt=""
                width={52}
                height={52}
                className={cn(
                  "size-10 rounded-full object-cover",
                  "border-2 border-[#2A0E5B]",
                  "desktop:size-[52px]",
                  index > 0 && "-ml-3"
                )}
              />
            ))}
          </div>
        </div>
      )}
    </SkewMotion>
  );
}