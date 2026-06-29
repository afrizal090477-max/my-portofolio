'use client';

import React from 'react';

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Phone */}
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3EBFF]">
          <span className="text-2xl text-[#6600EB]">📞</span>
        </div>
        <span className="font-poppins text-lg text-[#0A0D12]">+62 82186777705</span>
      </div>

      {/* Email */}
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3EBFF]">
          <span className="text-2xl text-[#6600EB]">✉️</span>
        </div>
        <span className="font-poppins text-lg text-[#0A0D12]">afrizal.090477@gmail.com</span>
      </div>

      {/* Location */}
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3EBFF]">
          <span className="text-2xl text-[#6600EB]">📍</span>
        </div>
        <span className="font-poppins text-lg text-[#0A0D12]">Bandar Lampung, Indonesia</span>
      </div>
    </div>
  );
};

export default ContactInfo;