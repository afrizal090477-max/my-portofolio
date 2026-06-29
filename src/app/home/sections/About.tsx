// src/app/home/sections/About.tsx

import { AboutIntro } from "@/app/home/components/about/ui/AboutIntro";
import { DigitalProductsCard } from "@/app/home/components/about/cards/DigitalProductsCard";
import { ExperienceCard } from "@/app/home/components/about/cards/ExperienceCard";
import { ExpertSkillCard } from "@/app/home/components/about/cards/ExpertSkillCard";
import { ProfileCard } from "@/app/home/components/about/cards/ProfileCard";
import { WhyChooseMeCard } from "@/app/home/components/about/cards/WhyChooseMeCard";

export default function About() {
  return (
    <section id="about" className="w-full bg-white">
      <div className="mx-auto max-w-[1184px] px-4 md:px-6 lg:px-0 py-[80px]">

        <AboutIntro />

        <div className="mt-[48px] grid grid-cols-1 lg:grid-cols-12 gap-[20px]">


          <div className="lg:col-span-4">
            <WhyChooseMeCard />
          </div>

          <div className="lg:col-span-4">
            <ExpertSkillCard />
          </div>

          <div className="lg:col-span-4">
            <ExperienceCard />
          </div>

          <div className="lg:col-span-4">
            <ProfileCard />
          </div>

          <div className="lg:col-span-8">
            <DigitalProductsCard />
          </div>

        </div>
      </div>
    </section>
  );
}