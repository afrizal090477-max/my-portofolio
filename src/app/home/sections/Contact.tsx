'use client';

import React, { useState } from 'react';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import NotificationModal from '../components/contact/NotificationModal'; 

const Contact = () => {
  const [modalStatus, setModalStatus] = useState<'success' | 'failed' | null>(null);

  const handleFormSubmitStatus = (status: 'success' | 'failed') => {
    setModalStatus(status);
  };

  return (
    <section 
      id="contact"
      className="relative flex w-full justify-center overflow-hidden bg-white px-4 pb-16 pt-10 min-[1200px]:px-32 min-[1200px]:py-20 h-auto min-[1200px]:h-[802px] isolation-isolate"
    >
      <div 
        className="absolute left-0 top-[473px] z-0 hidden h-[330.67px] w-full bg-no-repeat min-[1200px]:block"
        style={{
          backgroundImage: "url('/images/pattern-bot.svg')",
          backgroundSize: "1440px 330.67px",
          backgroundPosition: "center top",
        }}
      />

      <div 
        className="absolute z-0 block min-[1200px]:hidden"
        style={{
          width: "488.8px",
          height: "112.25px",
          left: "calc(50% - 243.5px)",
          bottom: "0px", 
          backgroundImage: "url('/images/pattern-bot.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center bottom",
        }}
      />

      <div className="relative z-10 flex w-full max-w-[1184px] flex-col gap-6 min-[1200px]:flex-row min-[1200px]:items-center min-[1200px]:gap-[194px]">
        <div className="flex w-full flex-col gap-6 min-[1200px]:w-[453px] min-[1200px]:gap-10">
          <div className="flex flex-col gap-[22px]">
            <h2 className="font-poppins text-3xl font-bold tracking-[-0.02em] text-[#0A0D12] leading-[46px] min-[1200px]:text-[48px] min-[1200px]:leading-[60px]">
              I&apos;ve been waiting<br className="hidden min-[1200px]:block" /> for you.
            </h2>
            <p className="font-poppins text-base font-medium text-[#0A0D12] leading-[30px] min-[1200px]:text-lg min-[1200px]:leading-[32px]">
              Fill in the form or Send us an email
            </p>
          </div>
          <ContactInfo />
        </div>

        <div className="w-full rounded-xl bg-white p-4 shadow-[0_0_24px_rgba(165,165,165,0.2)] flex flex-col gap-4 min-[1200px]:w-[537px] min-[1200px]:rounded-2xl min-[1200px]:p-8 min-[1200px]:gap-6">
          <h3 className="font-poppins text-xl font-semibold text-[#0A0D12] leading-8 min-[1200px]:text-2xl min-[1200px]:leading-[36px]">
            Send a Message
          </h3>
        
          <ContactForm onResult={handleFormSubmitStatus} />
        </div>
      </div>

      {modalStatus && (
        <NotificationModal 
          status={modalStatus} 
          onClose={() => setModalStatus(null)} 
        />
      )}
    </section>
  );
};

export default Contact;