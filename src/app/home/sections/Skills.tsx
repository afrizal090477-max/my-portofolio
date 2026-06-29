'use client';

import React, { useState } from 'react';
import { SkillCard } from '../components/skills/SkillCard';
import { skillsData } from '@/constant/skill-data';

const Skills = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // 1. Logika Halaman Desktop (Ambil 6 item per halaman)
  const desktopSkillsPerPage = 6;
  const totalPagesDesktop = Math.ceil(skillsData.length / desktopSkillsPerPage);
  const startDesktopIndex = currentPage * desktopSkillsPerPage;
  const currentSkillsDesktop = skillsData.slice(startDesktopIndex, startDesktopIndex + desktopSkillsPerPage);

  // 2. Logika Halaman Mobile (Ambil 3 item per halaman)
  const mobileSkillsPerPage = 3;
  const totalPagesMobile = Math.ceil(skillsData.length / mobileSkillsPerPage);
  const startMobileIndex = currentPage * mobileSkillsPerPage;
  const currentSkillsMobile = skillsData.slice(startMobileIndex, startMobileIndex + mobileSkillsPerPage);

  return (
    <section className="w-full bg-white flex flex-col items-center isolation-isolate
      py-10 px-4 gap-6 h-auto
      min-[1200px]:pt-10 min-[1200px]:pb-20 min-[1200px]:px-32 min-[1200px]:gap-12 min-[1200px]:h-[880px]"
    >
      {/* Title */}
      <h2 className="text-center font-poppins font-bold tracking-[-0.02em] text-[#0A0D12]
        text-3xl leading-[46px] w-[361px]
        min-[1200px]:text-[48px] min-[1200px]:leading-[60px] min-[1200px]:w-[1184px]"
      >
        My Professional Skill
      </h2>

      {/* ==================== DESKTOP GRID VIEW (Tampil hanya di Layar Besar) ==================== */}
      <div className="hidden min-[1200px]:grid grid-cols-2 w-full max-w-[1184px] gap-5">
        {currentSkillsDesktop.map((skill, index) => (
          <SkillCard
            key={`desktop-${index}`}
            name={skill.name}
            progress={skill.progress}
            icon={skill.icon}
            description={skill.description}
          />
        ))}
      </div>

      {/* ==================== MOBILE GRID VIEW (Tampil hanya di Layar Kecil) ==================== */}
      <div className="grid grid-cols-1 w-full max-w-[361px] gap-4 min-[1200px]:hidden">
        {currentSkillsMobile.map((skill, index) => (
          <SkillCard
            key={`mobile-${index}`}
            name={skill.name}
            progress={skill.progress}
            icon={skill.icon}
            description={skill.description}
          />
        ))}
      </div>

      {/* ==================== PAGINATION DOTS DESKTOP ==================== */}
      <div className="hidden min-[1200px]:flex items-center gap-3 h-3 mt-auto">
        {totalPagesDesktop > 1 && Array.from({ length: totalPagesDesktop }).map((_, index) => (
          <button
            key={`dot-desktop-${index}`}
            onClick={() => setCurrentPage(index)}
            className={`rounded-full transition-all duration-300 h-3 ${
              currentPage === index ? "w-8 bg-[#8B32FF]" : "w-4 bg-[#D5D7DA] hover:bg-[#A1A1AA]"
            }`}
            aria-label={`Go to desktop page ${index + 1}`}
          />
        ))}
      </div>

      {/* ==================== PAGINATION DOTS MOBILE ==================== */}
      <div className="flex items-center gap-2 h-2.5 mt-auto min-[1200px]:hidden">
        {totalPagesMobile > 1 && Array.from({ length: totalPagesMobile }).map((_, index) => (
          <button
            key={`dot-mobile-${index}`}
            onClick={() => setCurrentPage(index)}
            className={`rounded-full transition-all duration-300 h-2.5 ${
              currentPage === index ? "w-8 bg-[#8B32FF]" : "w-4 bg-[#D5D7DA] hover:bg-[#A1A1AA]"
            }`}
            aria-label={`Go to mobile page ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default Skills;