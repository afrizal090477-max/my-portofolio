import Image from "next/image";
import { AboutCard } from "@/app/home/components/about/ui/AboutCard";
import { experienceData } from "@/constant/about-data";

export function ExperienceCard({ index = 0 }: { index?: number }) {
  return (
    <AboutCard index={index} className="relative overflow-hidden bg-[#D2D2D2]">
      {/* FULL IMAGE ONLY (sementara pakai Figma export kamu) */}
      <Image
        src={experienceData.mainImage}
        alt="experience"
        fill
         sizes="(max-width: 768px) 100vw, 384px"
        className="object-cover"
      />

      {/* gradient tetap boleh kalau perlu */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />
    </AboutCard>
  );
}
