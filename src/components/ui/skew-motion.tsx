import { Slot } from "@radix-ui/react-slot";
import {
  motion,
  type HTMLMotionProps,
} from "framer-motion";
import type { ReactNode } from "react";

interface SkewMotionProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  duration?: number;
  delay?: number;
  asChild?: boolean;
}

const MotionSlot = motion.create(Slot);

export default function SkewMotion({
  children,
  duration = 0.7,
  delay = 0,
  asChild = false,
  transition,
  ...motionProps
}: SkewMotionProps) {
  const Component = asChild
    ? MotionSlot
    : motion.div;

  return (
    <Component
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
        ...transition,
      }}
      {...motionProps}
    >
      {children}
    </Component>
  );
}