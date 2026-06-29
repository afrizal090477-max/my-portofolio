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
        className="flex w-full items-start min-[1200px]:items-center justify-between py-5 text-left gap-4"
      >
        <span className={`font-poppins text-base min-[1200px]:text-xl font-semibold leading-[30px] min-[1200px]:leading-[34px] ${isOpen ? 'text-[#6600EB]' : 'text-[#0A0D12]'}`}>
          {faq.question}
        </span>
        <span className={`flex h-6 w-6 min-[1200px]:h-10 min-[1200px]:w-10 shrink-0 items-center justify-center rounded-full transition mt-1 min-[1200px]:mt-0 ${isOpen ? 'bg-[#6600EB]' : 'bg-[#E9EAEB]'}`}>
          {isOpen ? (
            <span className={`font-medium text-center leading-none ${isOpen ? 'text-white' : 'text-[#0A0D12]'} text-sm min-[1200px]:text-2xl`}>−</span>
          ) : (
            <span className="font-medium text-center leading-none text-[#0A0D12] text-sm min-[1200px]:text-2xl">+</span>
          )}
        </span>
      </button>

      {isOpen && (
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