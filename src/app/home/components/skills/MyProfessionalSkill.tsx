'use client';

import React, { useState } from 'react';
import { SkillCard } from './SkillCard';
import { skillsData } from '@/constant/skill-data';

const SKILLS_PER_PAGE = 6;

export default function MyProfessionalSkill() {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(skillsData.length / SKILLS_PER_PAGE);
  const startIndex = currentPage * SKILLS_PER_PAGE;
  const currentSkills = skillsData.slice(startIndex, startIndex + SKILLS_PER_PAGE);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-[1184px] px-4 md:px-8">
        <h2 className="mb-12 text-center font-poppins text-[32px] font-bold tracking-[-0.02em] text-[#0A0D12] md:text-[48px] md:leading-[60px]">
          My Professional Skill
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {currentSkills.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              progress={skill.progress}
              icon={skill.icon}
              description={skill.description}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-10 flex justify-center gap-3">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentPage === index 
                    ? "w-8 bg-[#8B32FF]" 
                    : "w-4 bg-[#D5D7DA] hover:bg-[#A1A1AA]"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}