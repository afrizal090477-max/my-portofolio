"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Menu, X } from "lucide-react";

import { Container } from "@/components/layouts/container";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigationData } from "@/constant/navigation-data";
import { cn } from "@/lib/utils";

const BRAND_NAME = "Afrizal";
const DESKTOP_MEDIA_QUERY = "(min-width: 1440px)";

interface BrandProps {
  priority?: boolean;
  surface?: "dark" | "light";
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

function Brand({
  priority = false,
  surface = "dark",
  onClick,
}: BrandProps) {
  const isLightSurface = surface === "light";

  return (
    <Link
      href="#home"
      aria-label="Go to Afrizal Yakub homepage"
      onClick={onClick}
      className={[
        "flex h-8 w-[141px] shrink-0",
        "items-center gap-[8.53px]",
      ].join(" ")}
    >
      <Image
        src="/icons/logo-brand.png"
        alt="Afrizal logo"
        width={263}
        height={289}
        priority={priority}
        sizes="26.3px"
        className={[
          "h-[28.85px] w-[26.3px]",
          "shrink-0 object-contain",
        ].join(" ")}
      />
      <span
        className={cn(
          "whitespace-nowrap font-brand",
          "text-[21.3333px] font-semibold leading-8",
          isLightSurface
            ? "text-[#0A0D12]"
            : "text-[#F3EBFF]",
        )}
      >
        {BRAND_NAME}
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] =
    React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(
      DESKTOP_MEDIA_QUERY,
    );

    const closeMenuOnDesktop = (
      event: MediaQueryListEvent,
    ) => {
      if (event.matches) {
        setMenuOpen(false);
      }
    };

    mediaQuery.addEventListener(
      "change",
      closeMenuOnDesktop,
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        closeMenuOnDesktop,
      );
    };
  }, []);

  return (
    <header
      className={[
        "absolute inset-x-0 top-0 z-[60]",
        "h-20 w-full",
        "min-[1440px]:h-[85px]",
      ].join(" ")}
    >
      <Container
        className={[
          "relative flex h-full items-center",
          "px-4",
          "min-[1440px]:grid",
          "min-[1440px]:grid-cols-[141px_1fr_172px]",
          "min-[1440px]:px-32",
        ].join(" ")}
      >
        <Brand priority />
        <nav
          aria-label="Main navigation"
          className={[
            "hidden",
            "min-[1440px]:block",
            "min-[1440px]:justify-self-center",
          ].join(" ")}
        >
          <ul className="flex h-[46px] w-[544px] items-center gap-8">
            {navigationData.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={[
                    "inline-flex h-[46px]",
                    "items-center justify-center px-2",
                    "text-[16px] font-normal",
                    "leading-[30px] text-white",
                    "transition-colors duration-200",
                    "hover:text-purple-50",
                    "focus-visible:outline-none",
                    "focus-visible:ring-2",
                    "focus-visible:ring-white/70",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          asChild
          className={[
            "hidden h-12 w-[172px]",
            "justify-self-end",
            "gap-2 rounded-full px-2",
            "bg-gray-25",
            "text-[14px] font-medium",
            "leading-7 text-gray-950",
            "shadow-none hover:bg-white",
            "min-[1440px]:inline-flex",
          ].join(" ")}
        >
          <Link href="#contact">
            <Mail
              aria-hidden="true"
              className="size-5"
              strokeWidth={1.67}
            />
            <span>Hire Me</span>
          </Link>
        </Button>

        <div
          className={[
            "absolute right-4 top-1/2 z-[70]",
            "-translate-y-1/2",
            "min-[1440px]:hidden",
          ].join(" ")}
        >
          <Sheet
            open={menuOpen}
            onOpenChange={setMenuOpen}
          >

            <SheetTrigger
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className={[
                "relative flex size-10 shrink-0",
                "pointer-events-auto",
                "items-center justify-center",
                "text-white",
                "transition-opacity duration-200",
                "hover:opacity-80",
                "focus-visible:outline-none",
                "focus-visible:ring-2",
                "focus-visible:ring-white/70",
              ].join(" ")}
            >
              <Menu
                aria-hidden="true"
                className="size-6"
                strokeWidth={2}
              />
            </SheetTrigger>

            <SheetContent
              id="mobile-navigation"
              side="right"
              aria-describedby={undefined}
              className={[
                "h-dvh w-screen max-w-[393px]",
                "border-0 bg-white p-0",
                "text-gray-950 shadow-none",
              ].join(" ")}
            >
              <SheetTitle className="sr-only">
                Main navigation
              </SheetTitle>

              <div
                className={[
                  "flex h-20 w-full shrink-0",
                  "items-center justify-between px-4",
                ].join(" ")}
              >
                <Brand
                  surface="light"
                  onClick={() => setMenuOpen(false)}
                />

                <SheetClose
                  type="button"
                  aria-label="Close navigation menu"
                  className={[
                    "flex size-10 shrink-0",
                    "items-center justify-center",
                    "text-[#0A0D12]",
                    "transition-opacity duration-200",
                    "hover:opacity-70",
                    "focus-visible:outline-none",
                    "focus-visible:ring-2",
                    "focus-visible:ring-gray-950/50",
                  ].join(" ")}
                >
                  <X
                    aria-hidden="true"
                    className="size-6"
                    strokeWidth={2}
                  />
                </SheetClose>
              </div>
              <nav
                aria-label="Mobile navigation"
                className={[
                  "absolute inset-x-4 top-24",
                  "flex flex-col gap-4",
                ].join(" ")}
              >
                {navigationData.map((item) => (
                  <SheetClose
                    key={item.href}
                    asChild
                  >
                    <Link
                      href={item.href}
                      className={[
                        "inline-flex h-[46px] w-full",
                        "items-center px-2",
                        "text-[16px] font-normal",
                        "leading-[30px] text-[#0A0D12]",
                        "transition-colors duration-200",
                        "hover:text-purple-500",
                        "focus-visible:outline-none",
                        "focus-visible:ring-2",
                        "focus-visible:ring-purple-500/40",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link
                    href="#contact"
                    className={cn(
                      buttonVariants({
                        variant: "default",
                        size: "default",
                      }),
                      [
                        "h-12 w-full gap-2",
                        "rounded-full px-2",
                        "bg-[#6600EB]",
                        "text-[14px] font-medium",
                        "leading-7 text-white",
                        "shadow-none",
                        "hover:bg-purple-400",
                      ].join(" "),
                    )}
                  >
                    <Mail
                      aria-hidden="true"
                      className="size-5"
                      strokeWidth={1.67}
                    />
                    <span>Hire Me</span>
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
