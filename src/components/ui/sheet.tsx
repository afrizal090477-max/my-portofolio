"use client";

import * as React from "react";
import { Dialog as SheetPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function Sheet(
  props: React.ComponentProps<
    typeof SheetPrimitive.Root
  >,
) {
  return (
    <SheetPrimitive.Root
      data-slot="sheet"
      {...props}
    />
  );
}

function SheetTrigger(
  props: React.ComponentProps<
    typeof SheetPrimitive.Trigger
  >,
) {
  return (
    <SheetPrimitive.Trigger
      data-slot="sheet-trigger"
      {...props}
    />
  );
}

function SheetClose(
  props: React.ComponentProps<
    typeof SheetPrimitive.Close
  >,
) {
  return (
    <SheetPrimitive.Close
      data-slot="sheet-close"
      {...props}
    />
  );
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<
  typeof SheetPrimitive.Overlay
>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-[90] bg-black/40",
        "data-[state=open]:animate-in",
        "data-[state=closed]:animate-out",
        "data-[state=open]:fade-in-0",
        "data-[state=closed]:fade-out-0",
        "data-[state=open]:duration-300",
        "data-[state=closed]:duration-200",
        className,
      )}
      {...props}
    />
  );
}

const sheetSideClasses = {
  right: [
    "inset-y-0 right-0",
    "data-[state=open]:slide-in-from-right",
    "data-[state=closed]:slide-out-to-right",
  ].join(" "),

  left: [
    "inset-y-0 left-0",
    "data-[state=open]:slide-in-from-left",
    "data-[state=closed]:slide-out-to-left",
  ].join(" "),
} as const;

type SheetSide =
  keyof typeof sheetSideClasses;

interface SheetContentProps
  extends React.ComponentProps<
    typeof SheetPrimitive.Content
  > {
  side?: SheetSide;
}

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: SheetContentProps) {
  return (
    <SheetPrimitive.Portal>
      <SheetOverlay />

      <SheetPrimitive.Content
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          "fixed z-[100] flex flex-col",
          "bg-background outline-none",
          "focus:outline-none",
          "data-[state=open]:animate-in",
          "data-[state=closed]:animate-out",
          "data-[state=open]:duration-500",
          "data-[state=closed]:duration-300",
          sheetSideClasses[side],
          className,
        )}
        {...props}
      >
        {children}
      </SheetPrimitive.Content>
    </SheetPrimitive.Portal>
  );
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<
  typeof SheetPrimitive.Title
>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn(
        "font-semibold text-foreground",
        className,
      )}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
};