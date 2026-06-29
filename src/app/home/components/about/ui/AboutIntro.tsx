import { aboutIntro } from "@/constant/about-data";

export function AboutIntro() {
  return (
    <header className="flex w-full flex-col items-start gap-3 desktop:h-[232px] desktop:gap-4">
      <h2
        id="about-title"
        className="w-full text-[16px] font-semibold leading-[30px] text-[#0A0D12] desktop:h-8 desktop:text-[18px] desktop:leading-8"
      >
        {aboutIntro.greeting}
      </h2>

      <p className="w-full text-left text-[20px] font-semibold leading-[34px] text-[#0A0D12] desktop:h-[184px] desktop:text-[32px] desktop:leading-[46px] desktop:tracking-[-0.02em]">
        {aboutIntro.description}
      </p>
    </header>
  );
}
