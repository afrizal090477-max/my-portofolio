'use client';

import React from 'react';
import Image from 'next/image';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { category, year, image, title, link } = project;

  return (
    <div className="flex w-full flex-col items-start gap-5 md:w-[384px]">
      {/* Labels */}
      <div className="flex w-full items-center justify-between">
        <div className="flex h-9 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] px-4">
          <span className="font-poppins text-sm font-normal text-[#0A0D12]">
            {category}
          </span>
        </div>
        <div className="flex h-9 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] px-4">
          <span className="font-poppins text-sm font-normal text-[#0A0D12]">
            {year}
          </span>
        </div>
      </div>

      <div className="relative h-[284px] w-full overflow-hidden rounded-xl md:h-[284px] md:w-[381px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 384px"
          className="object-cover"
        />
      </div>
      <h3 className="font-poppins text-xl font-semibold leading-[34px] text-[#0A0D12]">
        {title}
      </h3>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 text-[#6600EB] transition-colors hover:text-[#4F00B8]"
      >
        <span className="font-poppins text-base font-medium">Visit Website</span>
        <span className="text-xl transition-transform group-hover:translate-x-0.5">→</span>
      </a>
    </div>
  );
};

export default ProjectCard;