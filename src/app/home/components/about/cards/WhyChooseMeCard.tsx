// app/home/components/about/WhyChooseMeCard.tsx

import { AboutCard } from "@/app/home/components/about/ui/AboutCard";
import { SkillPill } from "@/app/home/components/about/ui/SkillPill";
import { whyChooseMeData } from "@/constant/about-data";

export function WhyChooseMeCard({ index = 0 }: { index?: number }) {
  const skills = whyChooseMeData.skills;

  return (
    <AboutCard
      index={index}
      className="bg-[#E17B0E] text-white relative overflow-hidden
                 w-full min-h-[395px] rounded-[16px]"
    >
      <div className="absolute top-6 left-6 right-6 z-20 max-w-[333px]">
        <h3 className="text-[32px] font-bold leading-[46px]">
          {whyChooseMeData.title}
        </h3>

        <p className="mt-4 text-[16px] leading-[30px] text-white/90">
          {whyChooseMeData.description}
        </p>
      </div>
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-1/2 h-[180px] bg-gradient-to-r from-[#E17B0E] to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-[180px] bg-gradient-to-l from-[#E17B0E] to-transparent" />
      </div>
      <div
        className="
          absolute z-30
          w-[518px]
          left-[-69px]
          top-[198px]
          flex flex-col gap-4
        "
      >
        <div className="flex gap-3 h-[36px]">
          {skills.slice(0, 4).map((skill, i) => (
            <SkillPill
              key={i}
              label={skill}
              className="bg-white text-[#0A0D12] text-sm px-4 py-1.5 h-[36px]"
            />
          ))}
        </div>

        <div className="flex justify-end gap-3 h-[36px]">
          {skills.slice(4, 8).map((skill, i) => (
            <SkillPill
              key={i}
              label={skill}
              className="bg-white text-[#0A0D12] text-sm px-4 py-1.5 h-[36px]"
            />
          ))}
        </div>

        <div className="flex gap-3 h-[36px]">
          {skills.slice(8, 12).map((skill, i) => (
            <SkillPill
              key={i}
              label={skill}
              className="bg-white text-[#0A0D12] text-sm px-4 py-1.5 h-[36px]"
            />
          ))}
        </div>
      </div>
    </AboutCard>
  );
}
