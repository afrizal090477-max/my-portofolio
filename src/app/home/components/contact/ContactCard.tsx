'use client';

import React from 'react';
import Image from 'next/image';

interface ContactCardProps {
  photo?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ 
  photo = "/images/about/profile.png" 
}) => {
  return (
    <div className="flex flex-col items-start gap-6 rounded-2xl border border-[#D5D7DA] bg-white p-6">
      {/* Profile Photo */}
      {/* Profile Photo */}
<div className="relative h-20 w-20 overflow-hidden rounded-full border border-[#E5E7EB]">
 {/* Profile Photo - Menyesuaikan Frame 1618873226 */}
{/* Di Mobile: h-15 w-15 (60px) | Di Desktop (min-[1200px]): h-20 w-20 (80px) */}
<div className="relative h-[60px] w-[60px] min-[1200px]:h-20 min-[1200px]:w-20 overflow-hidden rounded-full border border-[#E5E7EB]">
  <Image
    src={photo}
    alt="Profile Photo"
    fill
    sizes="(max-width: 1200px) 60px, 80px"
    className="object-cover object-top"
  />
</div>
</div>

      <p className="font-poppins text-lg leading-snug text-[#0A0D12]">
        Have more questions?<br />Send me a message.
      </p>

      <a
        href="#contact"
        className="flex w-full items-center justify-center rounded-full bg-[#6600EB] px-8 py-3 font-poppins text-sm font-medium text-white transition hover:bg-[#4F00B8]"
      >
        Get in touch
      </a>
    </div>
  );
};

export default ContactCard;