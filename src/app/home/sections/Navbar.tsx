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
const DESKTOP_MEDIA_QUERY = "(min-width: 1200px)";

interface BrandProps {
  priority?: boolean;
  surface?: "dark" | "light";
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

function Brand({ priority = false, surface = "dark", onClick }: BrandProps) {
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
        src="/images/about/profile.png"
        alt="Afrizal logo"
        width={263}
        height={289}
        priority={priority}
        sizes="26.3px"
        // 💡 PERBAIKAN DI SINI: Menambahkan object-top ke dalam array string class
        className={["h-[28.85px] w-[26.3px]", "shrink-0 rounded-full object-cover object-top"].join(
          " ",
        )}
      />

      <span
        className={cn(
          [
            "whitespace-nowrap font-brand",
            "text-[21.3333px] font-semibold",
            "leading-8",
          ].join(" "),
          isLightSurface ? "text-[#0A0D12]" : "text-[#F3EBFF]",
        )}
      >
        {BRAND_NAME}
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);

    const closeMenuOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", closeMenuOnDesktop);

    return () => {
      mediaQuery.removeEventListener("change", closeMenuOnDesktop);
    };
  }, []);

  return (
    <header
      className={[
        "absolute inset-x-0 top-0 z-[60]",
        "h-20 w-full",
        "min-[1200px]:h-[clamp(80px,5.9028vw,85px)]",
      ].join(" ")}
    >
      <Container
        className={[
          "relative flex h-full items-center",

          "min-[1200px]:grid",
          "min-[1200px]:grid-cols-[141px_minmax(0,1fr)_150px]",

          "min-[1440px]:grid-cols-[141px_minmax(0,1fr)_172px]",
        ].join(" ")}
      >
        <Brand />

        <nav
          aria-label="Main navigation"
          className={[
            "hidden",
            "min-[1200px]:block",
            "min-[1200px]:justify-self-center",
          ].join(" ")}
        >
          <ul
            className={[
              "flex h-[46px] items-center",
              "min-[1200px]:w-[clamp(480px,37.7778vw,544px)]",
              "min-[1200px]:gap-[clamp(16px,2.2222vw,32px)]",
            ].join(" ")}
          >
            {navigationData.map((item) => (
              <li key={item.href} className="shrink-0">
                <Link
                  href={item.href}
                  className={[
                    "inline-flex h-[46px]",
                    "items-center justify-center",
                    "whitespace-nowrap px-1",

                    "font-normal text-white",
                    "min-[1200px]:text-[clamp(14px,1.1111vw,16px)]",
                    "min-[1200px]:leading-[30px]",

                    "transition-colors duration-200",
                    "hover:text-purple-50",

                    "focus-visible:outline-none",
                    "focus-visible:ring-2",
                    "focus-visible:ring-white/70",

                    "min-[1440px]:px-2",
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
            "hidden h-12",
            "justify-self-end gap-2",
            "rounded-full px-2",

            "bg-gray-25",
            "text-[14px] font-medium",
            "leading-7 text-gray-950",

            "shadow-none",
            "hover:bg-white",

            "min-[1200px]:inline-flex",
            "min-[1200px]:w-[clamp(150px,11.9444vw,172px)]",
          ].join(" ")}
        >
          <Link href="#contact">
            <Mail aria-hidden="true" className="size-5" strokeWidth={1.67} />

            <span>Hire Me</span>
          </Link>
        </Button>

        <div
          className={[
            "absolute inset-y-0 right-4 z-[70]",
            "flex items-center",

            "sm:right-8",
            "md:right-10",
            "lg:right-12",

            "min-[1200px]:hidden",
          ].join(" ")}
        >
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className={[
                "flex size-10 shrink-0",
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
              <Menu aria-hidden="true" className="size-6" strokeWidth={2} />
            </SheetTrigger>

            <SheetContent
              id="mobile-navigation"
              side="right"
              aria-describedby={undefined}
              className={[
                "h-dvh w-full max-w-[393px]",
                "border-0 bg-white p-0",
                "text-gray-950 shadow-none",
              ].join(" ")}
            >
              <SheetTitle className="sr-only">Main navigation</SheetTitle>

              <div
                className={[
                  "flex h-20 w-full shrink-0",
                  "items-center justify-between",
                  "px-4",
                ].join(" ")}
              >
                <Brand surface="light" onClick={() => setMenuOpen(false)} />

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
                  <X aria-hidden="true" className="size-6" strokeWidth={2} />
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
                  <SheetClose key={item.href} asChild>
                    <Link
                      href={item.href}
                      className={[
                        "inline-flex h-[46px] w-full",
                        "items-center px-2",

                        "text-[16px] font-normal",
                        "leading-[30px]",
                        "text-[#0A0D12]",

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
