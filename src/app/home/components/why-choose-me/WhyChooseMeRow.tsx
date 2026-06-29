// src/app/home/components/why-choose-me/WhyChooseMeRow.tsx
interface WhyChooseMeRowProps {
  skill: string;
  me: boolean;
  other: boolean;
}

export function WhyChooseMeRow({ skill, me, other }: WhyChooseMeRowProps) {
  return (
    <div className="grid grid-cols-3 items-center border-b border-[#D5D7DA] last:border-b-0">
      
      {/* Skill Name */}
      <div className="px-4 py-5 text-center text-sm font-medium text-[#0A0D12] md:px-6 md:py-6 md:text-[18px]">
        {skill}
      </div>

      {/* Me Column - Check Orange */}
      <div className="flex justify-center py-5">
        {me ? (
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E17B0E] md:h-8 md:w-8">
            <span className="text-base font-bold text-white">✓</span>
          </div>
        ) : null}
      </div>

      {/* Other Column - Lingkaran abu-abu + tanda X */}
      <div className="flex justify-center py-5">
        {other ? (
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E17B0E] md:h-8 md:w-8">
            <span className="text-base font-bold text-white">✓</span>
          </div>
        ) : (
          <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#A4A7AE] md:h-7 md:w-7">
            <span className="text-sm font-bold text-[#A4A7AE]">✕</span>
          </div>
        )}
      </div>
    </div>
  );
}