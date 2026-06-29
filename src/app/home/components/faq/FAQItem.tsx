'use client';

import React from 'react';
import { FAQ } from '@/types/faq';

interface FAQItemProps {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="w-full">
      <button
        onClick={onToggle}
        // Di mobile pake items-start agar sejajar baris pertama teks, di desktop (min-[1200px]) pake items-center
        className="flex w-full items-start min-[1200px]:items-center justify-between py-5 text-left gap-4"
      >
        {/* Question Text */}
        {/* Mobile: text-base (16px), Desktop: text-xl (20px) */}
        <span className={`font-poppins text-base min-[1200px]:text-xl font-semibold leading-[30px] min-[1200px]:leading-[34px] ${isOpen ? 'text-[#6600EB]' : 'text-[#0A0D12]'}`}>
          {faq.question}
        </span>

        {/* Accordion Button Icon Container */}
        {/* Mobile: h-6 w-6 (24px) | Desktop: h-10 w-10 (40px) */}
        {/* KUNCI UTAMA: Ditambah shrink-0 agar tidak gepeng/lonjong */}
        <span className={`flex h-6 w-6 min-[1200px]:h-10 min-[1200px]:w-10 shrink-0 items-center justify-center rounded-full transition mt-1 min-[1200px]:mt-0 ${isOpen ? 'bg-[#6600EB]' : 'bg-[#E9EAEB]'}`}>
          {isOpen ? (
            // Icon minus (Mobile: text-sm, Desktop: text-2xl)
            <span className={`font-medium text-center leading-none ${isOpen ? 'text-white' : 'text-[#0A0D12]'} text-sm min-[1200px]:text-2xl`}>−</span>
          ) : (
            // Icon plus (Mobile: text-sm, Desktop: text-2xl)
            <span className="font-medium text-center leading-none text-[#0A0D12] text-sm min-[1200px]:text-2xl">+</span>
          )}
        </span>
      </button>

      {isOpen && (
        // Mobile: text-sm (14px) leading-7 | Desktop: text-base (16px) leading-[30px]
        <div className="pb-5 min-[1200px]:pb-6 pr-4 min-[1200px]:pr-12">
          <p className="font-poppins text-sm min-[1200px]:text-base leading-7 min-[1200px]:leading-[30px] text-[#414651]">
            {faq.answer}
          </p>
        </div>
      )}

      {/* Divider Line */}
      <div className="h-px w-full bg-[#D5D7DA]" />
    </div>
  );
};

export default FAQItem;