'use client';

import React from 'react';
import { Experience } from '@/types/experience';

interface WorkExperienceCardProps {
  experience: Experience;
}

const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({ experience }) => {
  return (
    <div>
      <h4 className="mb-2 font-poppins text-xl font-semibold text-[#0A0D12]">
        {experience.role}
      </h4>
      <p className="font-poppins text-[15px] leading-[28px] text-[#414651]">
        {experience.description}
      </p>
    </div>
  );
};

export default WorkExperienceCard;