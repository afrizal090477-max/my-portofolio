'use client';

import React from 'react';
import Image from 'next/image';
import WorkExperienceCard from '../components/work-experience/WorkExperienceCard';
import { experiences } from '@/constant/experiences';

const MyWorkExperience = () => {
  return (
    <section className="flex w-full flex-col items-center bg-white px-4 py-20 md:px-32 md:py-[80px]">
      <h2 className="mb-16 font-poppins text-center text-[32px] font-bold tracking-[-0.02em] text-[#0A0D12] md:text-[48px] md:leading-[60px]">
        My Work Experience
      </h2>

      <div className="relative w-full max-w-[1184px]">
        
        <div className="flex flex-col gap-16">
          {experiences.map((experience, index) => (
            <div 
              key={experience.id} 
              className="relative flex flex-col gap-6 pl-14 md:flex-row md:items-start md:gap-[72px] md:pl-0"
            >
              
              {index < experiences.length - 1 && (
                <>
                  <div 
                    className="absolute hidden h-[calc(100%+64px)] border-l-2 border-dashed border-[#A4A7AE] md:block"
                    style={{ left: '200px', top: '40px' }}
                  />
                  <div 
                    className="absolute block h-[calc(100%+64px)] border-l-2 border-dashed border-[#A4A7AE] md:hidden"
                    style={{ left: '16px', top: '28px' }}
                  />
                </>
              )}
              

              <div className="flex w-full flex-col gap-3 md:w-[160px] md:flex-shrink-0 md:items-end md:text-right">
                {experience.logo && (
                  <div className="flex h-12 items-center md:justify-end">
                    <Image
                      src={experience.logo}
                      alt={experience.company}
                      width={152}
                      height={48}
                      className="h-auto w-auto max-h-[48px] object-contain"
                    />
                  </div>
                )}
                <span className="font-poppins text-lg font-semibold text-[#0A0D12]">
                  {experience.company}
                </span>
                <span className="font-poppins text-base text-[#414651]">
                  {experience.period}
                </span>
              </div>
              <div className="absolute left-[4px] top-3 z-20 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] bg-white p-1 md:left-[180px] md:top-2 md:h-10 md:w-10">
                <div className="h-full w-full rounded-full bg-[#8B32FF]" />
              </div>

              <div className="flex-1">
                <WorkExperienceCard experience={experience} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWorkExperience;