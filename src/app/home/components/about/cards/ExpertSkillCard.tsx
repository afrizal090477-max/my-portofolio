// app/home/components/about/ExpertSkillCard.tsx

import { Star } from "lucide-react";

import { AboutCard } from "@/app/home/components/about/ui/AboutCard";
import { TechnologyIcon } from "@/app/home/components/about/ui/TechnologyIcon";
import { expertSkillData } from "@/constant/about-data";

const technologyRows = [
  expertSkillData.technologies.slice(0, 5),
  expertSkillData.technologies.slice(5, 10),
];

export function ExpertSkillCard({ index = 0 }: { index?: number }) {
  return (
    <AboutCard
      index={index}
      className="bg-[#181D27] text-white relative overflow-hidden
                 w-full min-h-[395px] rounded-[16px]"
    >

      <div className="absolute left-6 right-6 top-[29px] z-20">
        <h3 className="text-[32px] font-bold leading-[46px] tracking-[-0.02em]">
          {expertSkillData.title}
        </h3>

        <div className="mt-3 flex items-center gap-1">
          {Array.from({ length: expertSkillData.rating }).map((_, i) => (
            <Star
              key={i}
              className="w-8 h-8 text-[#F3993F] fill-[#F3993F]"
              strokeWidth={0}
            />
          ))}
        </div>

        <p className="mt-4 text-[16px] leading-[30px] text-white/90 max-w-[333px]">
          {expertSkillData.description}
        </p>
      </div>

      <div className="absolute left-6 top-[222px] z-30 w-[333px] flex flex-col gap-6">
        <div className="flex items-center gap-4 h-[52.58px] w-full">
          {technologyRows[0].map((tech) => (
            <div key={tech.name} className="w-[52.58px] h-[52.58px]">
              <TechnologyIcon {...tech} />
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 h-[52.58px] w-full">
          {technologyRows[1].map((tech) => (
            <div key={tech.name} className="w-[52.58px] h-[52.58px]">
              <TechnologyIcon {...tech} />
            </div>
          ))}
        </div>
      </div>
    </AboutCard>
  );
}
