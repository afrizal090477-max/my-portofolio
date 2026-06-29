'use client'

import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

import { AboutCard } from "@/app/home/components/about/ui/AboutCard";
import { profileData } from "@/constant/about-data";

export function ProfileCard() {
  return (
    <AboutCard className="relative overflow-hidden min-h-[395px] bg-[#6600EB]">
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="text-[#F39C3F] font-bold text-center leading-[90px] tracking-[-0.02em] opacity-90">
          <div className="text-[64px] md:text-[72px]">
            {profileData.firstName}
          </div>
          <div className="text-[64px] md:text-[72px] -mt-[18px]">
            {profileData.lastName}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-10">
        <Image
          src={profileData.image}
          alt="profile"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 381px"
          className="object-cover object-top"
        />
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <Link
          href={profileData.ctaHref}
          className="flex h-12 w-[233px] items-center justify-center gap-2 rounded-full bg-white text-[#0A0D12]"
        >
          <Mail className="size-5" />
          {profileData.ctaLabel}
        </Link>
      </div>

    </AboutCard>
  );
}