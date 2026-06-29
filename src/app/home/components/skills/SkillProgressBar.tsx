// src/app/home/components/skills/SkillProgressBar.tsx
interface SkillProgressBarProps {
  progress: number;
}

export function SkillProgressBar({ progress }: SkillProgressBarProps) {
  return (
    <div className="h-[14px] w-full rounded-full bg-[#D5D7DA]">
      <div
        className="h-[14px] rounded-full bg-[#6600EB] transition-all duration-700"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}