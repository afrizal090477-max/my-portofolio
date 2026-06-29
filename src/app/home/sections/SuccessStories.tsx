'use client';

import React, { useState, useEffect } from 'react';
import TestimonialCard from '../components/testimonial/TestimonialCard';
import { testimonials } from '@/constant/testimonials';

const SuccessStories = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Default desktop

  // Mengatur jumlah item per halaman secara dinamis berdasarkan lebar layar (Figma Spec)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setItemsPerPage((prev) => {
          if (prev !== 1) setCurrentPage(0); // 💡 Reset ke page 0 langsung di sini jika layar berubah ke mobile
          return 1;
        });
      } else {
        setItemsPerPage((prev) => {
          if (prev !== 3) setCurrentPage(0); // 💡 Reset ke page 0 langsung di sini jika layar berubah ke desktop
          return 3;
        });
      }
    };

    handleResize(); // Jalankan saat mount awal
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const currentTestimonials = testimonials.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="flex w-full flex-col items-center px-4 py-10 bg-white min-[1200px]:px-32 min-[1200px]:py-20 gap-6 min-[1200px]:gap-12">
      
      {/* Title (Success Stories from Clients) */}
      <h2 className="text-center font-poppins text-3xl font-bold tracking-[-0.02em] text-[#0A0D12] leading-[46px] min-[1200px]:text-[48px] min-[1200px]:leading-[60px] w-full max-w-[1184px]">
        Success Stories from Clients
      </h2>

      {/* Cards Grid */}
      <div className="grid w-full max-w-[1184px] grid-cols-1 gap-6 min-[1200px]:grid-cols-3 min-[1200px]:gap-5">
        {currentTestimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      {/* Pagination Dots - Sesuai Aturan Tinggi & Lebar Figma */}
      {totalPages > 1 && (
        <div className="flex items-center gap-2 min-[1200px]:gap-3 h-[10px] min-[1200px]:h-3 mt-4">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`rounded-full transition-all duration-300 ${
                currentPage === index
                  ? "w-8 bg-[#8B32FF] h-[10px] min-[1200px]:h-3" // Active Indicator: w: 32px (lonjong)
                  : "w-4 bg-[#D5D7DA] hover:bg-[#A1A1AA] h-[10px] min-[1200px]:h-3" // Inactive: w: 16px
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default SuccessStories;