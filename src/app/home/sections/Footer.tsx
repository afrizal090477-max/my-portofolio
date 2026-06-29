'use client';

import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-[#160131] text-white px-4 py-10 h-[228px] flex flex-col justify-center items-start gap-5 min-[1200px]:h-24 min-[1200px]:flex-row min-[1200px]:items-center min-[1200px]:justify-between min-[1200px]:px-32 min-[1200px]:py-6 min-[1200px]:gap-0">
      <div className="mx-auto flex w-full max-w-[1184px] flex-col justify-center items-start gap-5 min-[1200px]:flex-row min-[1200px]:items-center min-[1200px]:justify-between min-[1200px]:gap-0">
        
        {/* Frame 1618873547 - Sub Container Kiri (Logo + Copyright) */}
        {/* Di mobile: lebar 361px, tinggi 80px, flex-col, gap-5 (20px) */}
        {/* Di desktop (min-[1200px]): lebar 756px, tinggi 32px, flex-row, gap-4 (16px) */}
        <div className="flex w-full flex-col justify-center items-start gap-5 min-[1200px]:w-[756px] min-[1200px]:h-8 min-[1200px]:flex-row min-[1200px]:items-center min-[1200px]:gap-4">
          
          {/* Logo Container */}
          <div className="flex h-8 w-[141px] shrink-0 items-center gap-[8.53px]">
            <Image 
              src="/images/about/profile.png" 
              alt="Afrizal logo" 
              width={263}
              height={289}
              sizes="26.3px"
              className="h-[28.85px] w-[26.3px] shrink-0 rounded-full object-cover object-top" 
            />
            <span className="font-outfit text-[21.3333px] font-semibold leading-8 text-white whitespace-nowrap">
              Afrizal
            </span>
          </div>

          {/* Copyright Teks */}
          {/* Di mobile: width 298px, h-28, text-sm (14px), leading-7 (28px) */}
          {/* Di desktop: width 340px, h-30, text-base (16px), leading-[30px] */}
          <p className="w-[298px] h-7 font-poppins text-sm font-normal leading-7 text-[#FDFDFD] text-left min-[1200px]:w-[340px] min-[1200px]:h-7 min-[1200px]:text-base min-[1200px]:leading-[30px]">
            © 2026 Afrizal Yakub. All rights reserved.
          </p>
        </div>

        {/* Social Media Link - Container Kanan */}
        {/* Lebar tetap 176px, tinggi 48px, gap 16px */}
        <div className="flex h-12 w-[176px] items-center gap-4 shrink-0">
          {/* Dribbble */}
          <a 
            href="#" 
            aria-label="Dribbble"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#410292] transition hover:bg-[#5C0AC4]"
          >
            <span className="text-xl">🏀</span>
          </a>

          {/* Instagram */}
          <a 
            href="#" 
            aria-label="Instagram"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#410292] transition hover:bg-[#5C0AC4]"
          >
            <span className="text-xl">📷</span>
          </a>

          {/* LinkedIn */}
          <a 
            href="#" 
            aria-label="LinkedIn"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#410292] transition hover:bg-[#5C0AC4]"
          >
            <span className="text-xl">in</span>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;