"use client";

import Image from "next/image";
import { BadgeCheck, Star } from "lucide-react";

import SkewMotion from "@/components/ui/skew-motion";
import { cn } from "@/lib/utils";

type HeroStatCardVariant =
  | "rating"
  | "role"
  | "clients";

interface HeroStatCardProps {
  variant: HeroStatCardVariant;
  value?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  avatars?: readonly string[];
  className?: string;
}


const fluidCardPadding =
  "clamp(12px, calc(8.9971px + 0.7641vw), 20px)";

const fluidValueFontSize =
  "clamp(24px, calc(17.9943px + 1.5282vw), 40px)";

const fluidValueLineHeight =
  "clamp(36px, calc(28.4928px + 1.9102vw), 56px)";

const fluidStarSize =
  "clamp(24px, calc(20.9971px + 0.7641vw), 32px)";

const fluidDescriptionFontSize =
  "clamp(12px, calc(11.2493px + 0.191vw), 14px)";

const fluidDescriptionLineHeight =
  "clamp(24px, calc(22.4986px + 0.382vw), 28px)";

const fluidRoleTitleFontSize =
  "clamp(14px, calc(10.2464px + 0.9551vw), 24px)";

const fluidRoleTitleLineHeight =
  "clamp(28px, calc(24.9971px + 0.7641vw), 36px)";

const fluidAvatarSize =
  "clamp(40px, calc(35.4957px + 1.1461vw), 52px)";

export function HeroStatCard({
  variant,
  value,
  title,
  subtitle,
  description,
  avatars,
  className,
}: HeroStatCardProps) {
  return (
    <SkewMotion
      initial={false}
      whileHover={{
        scale: 1.03,
      }}
      transition={{
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        [
          "h-full w-full",
          "rounded-[12px]",
          "border border-white/10",
          "bg-[#282828]/20",
          "text-[#FDFDFD]",
          "backdrop-blur-[20px]",
          "min-[1200px]:rounded-[14px]",
          "desktop:rounded-[16px]",
        ].join(" "),
        className,
      )}
    >
      {variant === "rating" && (
        <div
          className={[
            "flex h-full flex-col",
            "items-start justify-start",
          ].join(" ")}
          style={{
            padding: fluidCardPadding,
            gap: "clamp(2px, 0.28vw, 4px)",
          }}
        >
          <p
            className={[
              "w-full font-bold",
              "tracking-[-0.02em]",
            ].join(" ")}
            style={{
              fontSize: fluidValueFontSize,
              lineHeight: fluidValueLineHeight,
            }}
          >
            {value}
          </p>

          <div
            className="flex items-center"
            style={{
              height: fluidStarSize,
            }}
          >
            {Array.from({ length: 5 }).map(
              (_, index) => (
                <Star
                  key={index}
                  aria-hidden="true"
                  className={[
                    "shrink-0",
                    "fill-[#F3993F]",
                    "text-[#F3993F]",
                  ].join(" ")}
                  strokeWidth={1.5}
                  style={{
                    width: fluidStarSize,
                    height: fluidStarSize,
                  }}
                />
              ),
            )}
          </div>

          <p
            className="w-full font-medium"
            style={{
              fontSize:
                fluidDescriptionFontSize,
              lineHeight:
                fluidDescriptionLineHeight,
            }}
          >
            {description}
          </p>
        </div>
      )}

      {variant === "role" && (
        <div
          className={[
            "flex h-full flex-col",
            "items-start justify-center",
            "overflow-visible",
          ].join(" ")}
          style={{
            padding: fluidCardPadding,
          }}
        >
          <p
            className={[
              "w-full whitespace-nowrap",
              "font-bold tracking-[-0.02em]",
            ].join(" ")}
            style={{
              fontSize: fluidRoleTitleFontSize,
              lineHeight:
                fluidRoleTitleLineHeight,
            }}
          >
            {title}
          </p>

          <div
            className={[
              "flex items-center gap-0.5",
              "whitespace-nowrap",
            ].join(" ")}
          >
            <BadgeCheck
              aria-hidden="true"
              className={[
                "size-6 shrink-0",
                "text-[#FDFDFD]",
              ].join(" ")}
              strokeWidth={2}
            />

            <span
              className={[
                "whitespace-nowrap",
                "font-medium",
              ].join(" ")}
              style={{
                fontSize:
                  fluidDescriptionFontSize,
                lineHeight:
                  fluidDescriptionLineHeight,
              }}
            >
              {subtitle}
            </span>
          </div>
        </div>
      )}

      {variant === "clients" && (
        <div
          className={[
            "flex h-full flex-col",
            "items-start justify-start",
          ].join(" ")}
          style={{
            padding: fluidCardPadding,
            gap: "clamp(6px, 0.55vw, 8px)",
          }}
        >
          <p
            className={[
              "w-full font-bold",
              "tracking-[-0.02em]",
            ].join(" ")}
            style={{
              fontSize: fluidValueFontSize,
              lineHeight: fluidValueLineHeight,
            }}
          >
            {value}
          </p>

          <p
            className="w-full font-medium"
            style={{
              fontSize:
                fluidDescriptionFontSize,
              lineHeight:
                fluidDescriptionLineHeight,
            }}
          >
            {title}
          </p>

          <div
            className="flex items-center"
            style={{
              height: fluidAvatarSize,
            }}
          >
            {avatars?.map((avatar, index) => (
              <Image
                key={avatar}
                src={avatar}
                alt=""
                width={52}
                height={52}
                loading="lazy"
                sizes={[
                  "(min-width: 1440px) 52px",
                  "(min-width: 393px) calc(35.4957px + 1.1461vw)",
                  "40px",
                ].join(", ")}
                className={cn(
                  [
                    "shrink-0 rounded-full",
                    "border-2",
                    "border-[#2A0E5B]",
                    "object-cover",
                  ].join(" "),
                  index > 0 && "-ml-3",
                )}
                style={{
                  width: fluidAvatarSize,
                  height: fluidAvatarSize,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </SkewMotion>
  );
}