// src/app/home/components/why-choose-me/WhyChooseMeTable.tsx
import { WhyChooseMeRow } from "./WhyChooseMeRow";
import { whyChooseMeData } from "@/constant/why-choose-me-data";

export function WhyChooseMeTable() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white">
      {/* Header - Sudah diperbaiki agar lebih bulat */}
      <div className="grid grid-cols-3 overflow-hidden rounded-full bg-[#8B32FF] text-white">
        <div className="flex items-center justify-center rounded-l-[20px] py-4 text-lg font-semibold">
          Skill
        </div>
        <div className="flex items-center justify-center py-4 text-lg font-semibold">
          Me
        </div>
        <div className="flex items-center justify-center rounded-r-[20px] py-4 text-lg font-semibold">
          Other
        </div>
      </div>

      {/* Rows */}
      {whyChooseMeData.skills.map((row) => (
        <WhyChooseMeRow
          key={row.id}
          skill={row.skill}
          me={row.me}
          other={row.other}
        />
      ))}
    </div>
  );
}