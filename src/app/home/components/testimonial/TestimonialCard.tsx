'use client';

import React from 'react';
import { Testimonial } from '@/types/testimonial';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { company, logoColor, quote, stars, name, position } = testimonial;

  return (
    <div className="flex h-full flex-col items-center gap-8 rounded-2xl bg-white p-6 shadow-[0_0_24px_rgba(165,165,165,0.2)]">
      {/* Company Logo (Placeholder) */}
      <div className="flex h-12 items-center justify-center">
        <span 
          className="font-poppins text-2xl font-bold"
          style={{ color: logoColor || '#0A0D12' }}
        >
          {company}
        </span>
      </div>

      {/* Quote */}
      <p className="text-center font-poppins text-base font-medium leading-[30px] text-[#0A0D12]">
        {quote}
      </p>

      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: stars }).map((_, i) => (
          <span key={i} className="text-2xl text-[#F3993F]">★</span>
        ))}
      </div>

      {/* Name & Position */}
      <div className="text-center">
        <p className="font-poppins text-base font-semibold text-[#0A0D12]">{name}</p>
        <p className="font-poppins text-base text-[#535862]">{position}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;