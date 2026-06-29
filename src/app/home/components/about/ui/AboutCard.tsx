'use client'

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

type AboutCardSize = "standard" | "tall";

interface AboutCardProps extends Omit<HTMLMotionProps<"article">, "ref"> {
  size?: AboutCardSize;
  index?: number;
}

const cardSizeClasses: Record<AboutCardSize, string> = {
  standard: "min-h-[340px] md:min-h-[380px] lg:min-h-[395px]",
  tall: "min-h-[400px] md:min-h-[450px] lg:min-h-[395px]",
};

export function AboutCard({
  size = "standard",
  className,
  children,
  ...props
}: AboutCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        // BASE STRUCTURE (PIXEL SAFE)
        "relative w-full overflow-hidden rounded-2xl",

        // VISUAL STYLE (STATIC ONLY)
        "border border-gray-100 bg-white shadow-sm",

        // SIZE SYSTEM
        cardSizeClasses[size],

        // HOVER (SAFE - NO LAYOUT SHIFT)
        "hover:shadow-xl transition-shadow duration-300",

        className
      )}
      {...props}
    >
      {children}
    </motion.article>
  );
}