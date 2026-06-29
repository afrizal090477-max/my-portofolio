'use client';

import React from 'react';
import Image from 'next/image';

interface SkillCardProps {
  name: string;
  progress: number;
  icon: string;
  description: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({ name, progress, icon, description }) => {
  const isValidPath = icon && icon.startsWith('/');

  return (
    // Card Wrapper (Sesuai Ukuran Figma Desktop W: 582px H: 184px | Mobile W: 361px H: 172px)
    <div className="bg-white flex flex-row items-start shadow-[0_0_24px_rgba(165,165,165,0.2)] w-full text-left
      p-3 rounded-xl h-[172px] gap-4
      min-[1200px]:p-4 min-[1200px]:rounded-2xl min-[1200px]:h-[184px] min-[1200px]:gap-[25px]"
    >
      <div className="flex flex-col items-start justify-between w-full h-full">
        
        {/* Row Icon + Nama Skill */}
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-3 w-full">
            {/* Tech Icon Circle Base (Size: 40px) */}
            <div className="flex items-center justify-center shrink-0 w-10 h-10 rounded-full bg-[#F5F5F5]">
              {isValidPath ? (
                <Image 
                  src={icon} 
                  alt={`${name} icon`} 
                  width={24} 
                  height={24} 
                  className="object-contain w-6 h-6" // Mengunci ukuran aspect ratio gambar agar linter kuning hilang
                  priority
                  suppressHydrationWarning // 💡 Mencegah crash jika ada perbedaan data SSR & Client
                />
              ) : (
                <span className="text-xs font-bold text-[#6600EB]">{name.slice(0, 2)}</span>
              )}
            </div>
            
            {/* Skill Name Label */}
            <span className="font-poppins font-semibold text-[#0A0D12]
              text-base leading-[30px]
              min-[1200px]:text-[18px] min-[1200px]:leading-[32px]"
            >
              {name}
            </span>
          </div>

          {/* Description Paragraph */}
          <p className="font-poppins font-normal text-[#414651] tracking-normal text-left line-clamp-2 w-full
            text-[14px] leading-[28px]
            min-[1200px]:text-base min-[1200px]:leading-[30px]"
          >
            {description}
          </p>
        </div>

        {/* Progress Loading Bar Row */}
        <div className="flex items-center w-full gap-4 mt-auto">
          {/* Track Bar Container */}
          <div className="relative w-full bg-[#D5D7DA] rounded-full overflow-hidden
            h-3
            min-[1200px]:h-[14px]"
          >
            <div 
              className="absolute left-0 top-0 h-full bg-[#6600EB] rounded-full transition-all duration-500" 
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Percentage Value Label Text */}
          <span className="font-poppins font-semibold text-[#0A0D12] shrink-0
            text-[14px] leading-[28px]
            min-[1200px]:text-[18px] min-[1200px]:leading-[32px]"
          >
            {progress}%
          </span>
        </div>

      </div>
    </div>
  );
};