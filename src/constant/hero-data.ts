export const HERO_NAME = "AFRIZAL YAKUB";

export const heroStats = {
  rating: {
    value: "5.0",
    description: "Many Client Trust with me",
  },
  role: {
    title: "Frontend Developer",
    subtitle: "React Expert",
  },
  clients: {
    value: "50+",
    title: "Global Clients",
  },
} as const;

export const heroAvatars = [
  "/images/hero/avatar1.svg",
  "/images/hero/avatar2.svg",
  "/images/hero/avatar3.svg",
  "/images/hero/avatar4.svg",
] as const;

export const heroMarqueeItems = [
  {
    label: "Frontend Developer",
    widthClass: "desktop:w-[470px]",
    separatorClass: "text-gray-25",
  },
  {
    label: "Expert React",
    widthClass: "desktop:w-[299px]",
    separatorClass: "text-orange-400",
  },
  {
    label: "Programmers",
    widthClass: "desktop:w-[336px]",
    separatorClass: "text-orange-400",
  },
  {
    label: "Mobile Developers",
    widthClass: "desktop:w-[439px]",
    separatorClass: "text-orange-400",
  },
] as const;