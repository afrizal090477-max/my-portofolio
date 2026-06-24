import type { Metadata } from "next";
import { Outfit, Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal"],
  display: "swap",
  variable: "--font-poppins",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600"],
  style: ["normal"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "Afrizal Yakub | Frontend Developer",
    template: "%s | Afrizal Yakub",
  },
  description:
    "Frontend developer portfolio showcasing selected projects, skills, and professional experience.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${outfit.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}