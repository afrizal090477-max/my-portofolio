'use client';

import React from 'react';
import ProjectCard from '../components/my-latest-work/ProjectCard';
import { projects } from '@/constant/project';

const MyLatestWork = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-16 px-4 py-20 md:px-32 md:py-[80px]">
      <h2 className="font-poppins text-center text-[32px] font-bold leading-[46px] tracking-[-0.02em] text-[#0A0D12] md:text-[48px] md:leading-[60px]">
        My Latest Work
      </h2>

      <div className="grid w-full max-w-[1184px] grid-cols-1 gap-6 md:grid-cols-3 md:gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default MyLatestWork;