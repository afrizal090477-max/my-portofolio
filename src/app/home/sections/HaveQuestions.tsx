'use client';

import React, { useState } from 'react';
import FAQItem from '../components/faq/FAQItem';
import ContactCard from '../components/contact/ContactCard';
import { faqs } from '@/constant/faq';

const HaveQuestions = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="flex w-full justify-center px-4 py-10 min-[1200px]:px-32 min-[1200px]:py-20 bg-white">
      {/* Frame 1618873233 (Desktop) / Frame 1618873554 (Mobile) */}
      <div className="flex w-full max-w-[1184px] flex-col gap-5 rounded-2xl border border-[#D5D7DA] bg-[#FAFAFA] p-5 min-[1200px]:flex-row min-[1200px]:items-start min-[1200px]:justify-between min-[1200px]:rounded-3xl min-[1200px]:p-10 min-[1200px]:gap-[153px]">
        
        {/* LEFT SIDE: Title & Icon (Di Desktop membungkus ContactCard juga) */}
        {/* Frame 1618873232 (Desktop) / Frame 1618873555 (Mobile) */}
        <div className="flex w-full flex-col gap-4 min-[1200px]:w-[357px] min-[1200px]:gap-[203px]">
          <div className="flex flex-col gap-5 items-start">
            {/* Icon Bubble (Frame 1) */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3EBFF]">
              <span className="text-2xl text-[#6600EB]">💬</span>
            </div>
            {/* Title */}
            <h2 className="font-poppins text-3xl font-bold tracking-[-0.02em] text-[#0A0D12] leading-[46px] min-[1200px]:text-[48px] min-[1200px]:leading-[60px]">
              Have Questions?
            </h2>
          </div>

          {/* Menampilkan ContactCard di bawah judul KHUSUS versi desktop saja */}
          <div className="hidden min-[1200px]:block w-full">
            <ContactCard />
          </div>
        </div>

        {/* RIGHT SIDE: FAQ Accordion List (Frame 1618873230) */}
        <div className="w-full flex-col gap-5 flex min-[1200px]:w-[594px] min-[1200px]:gap-8 flex-grow">
          <div className="w-full flex flex-col">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => toggleFAQ(faq.id)}
              />
            ))}
          </div>
        </div>

        {/* BOTTOM SIDE: ContactCard KHUSUS versi mobile */}
        {/* Menaruhnya di sini otomatis menjadikannya urutan paling bawah di layar HP (Order 10) */}
        <div className="block min-[1200px]:hidden w-full mt-3">
          <ContactCard />
        </div>

      </div>
    </section>
  );
};

export default HaveQuestions;