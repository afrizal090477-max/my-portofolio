'use client';

import React from 'react';

interface NotificationModalProps {
  status: 'success' | 'failed';
  onClose: () => void;
}

const NotificationModal: React.FC<NotificationModalProps> = ({ status, onClose }) => {
  const isSuccess = status === 'success';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4">
      <div className="relative bg-white flex flex-col items-center shadow-[0_0_24px_rgba(165,165,165,0.2)] text-center justify-between
        w-[361px] h-[368px] rounded-xl p-6 gap-5
        min-[1200px]:w-[479px] min-[1200px]:h-[452px] min-[1200px]:rounded-2xl min-[1200px]:p-8 min-[1200px]:gap-6"
      >
        <div className="relative flex items-center justify-center shrink-0 w-[170.89px] h-[140px] min-[1200px]:w-[231.93px] min-[1200px]:h-[190px]">
          <div className="absolute rounded-full bg-[#6600EB]/35 w-[135px] h-[26.04px] blur-[6.64px] bottom-1 min-[1200px]:w-[183.22px] min-[1200px]:h-[35.35px] min-[1200px]:blur-[9.01px] min-[1200px]:bottom-2" />
          <div className="relative flex items-center justify-center rounded-xl bg-gradient-to-b from-[#F3EBFF]/20 to-[#F3EBFF] shadow-[0_2.8px_2.8px_rgba(0,0,0,0.25)] w-[100px] h-[80px] -rotate-6 min-[1200px]:w-[140px] min-[1200px]:h-[110px]">
            <div className="flex flex-col gap-1.5 w-[70%] opacity-40">
              <div className="h-1 bg-[#C9DFFF] w-full rounded" />
              <div className="h-1 bg-[#C9DFFF] w-[80%] rounded" />
              <div className="h-1 bg-[#C9DFFF] w-[60%] rounded" />
            </div>
            {!isSuccess && <span className="absolute font-bold text-purple-400/50 select-none text-xl top-2 min-[1200px]:text-3xl min-[1200px]:top-4">?</span>}
          </div>
          <div className={`absolute rounded-full opacity-30 filter w-[44.65px] h-[14.35px] blur-[6.64px] right-2 top-10 min-[1200px]:w-[60.59px] min-[1200px]:h-[19.48px] min-[1200px]:blur-[9.01px] min-[1200px]:right-4 min-[1200px]:top-16 ${isSuccess ? 'bg-[#14A800]' : 'bg-[#E65243]'}`} />
          <div className={`absolute rounded-full flex items-center justify-center text-white font-bold shadow-md z-10 w-10 h-10 right-4 top-4 text-base min-[1200px]:w-[53px] min-[1200px]:h-[53px] min-[1200px]:top-8 min-[1200px]:right-6 min-[1200px]:text-xl ${isSuccess ? 'bg-gradient-to-b from-[#8FE783] to-[#20A10F]' : 'bg-gradient-to-b from-[#E34C3D] to-[#FF8C80]'}`}>
            {isSuccess ? <span className="border-[3px] min-[1200px]:border-[4.8px] border-white rounded-sm w-4 h-4 min-[1200px]:w-6 min-[1200px]:h-6 flex items-center justify-center text-xs min-[1200px]:text-sm">✓</span> : <span className="leading-none font-light">✕</span>}
          </div>
        </div>

        <div className="flex flex-col items-center w-full gap-1 min-[1200px]:gap-2 max-w-[313px] min-[1200px]:max-w-[415px]">
          <h3 className="font-poppins font-semibold text-[#0A0D12] text-lg leading-8 min-[1200px]:text-xl min-[1200px]:leading-[34px]">{isSuccess ? 'Message Sent Successfully!' : 'Failed to send.'}</h3>
          <p className="font-poppins font-normal text-[#717680] text-sm leading-7 min-[1200px]:text-base min-[1200px]:leading-[30px]">{isSuccess ? 'Thank you for reaching out. I’ll get back to you as soon as possible' : 'Please check your internet connection or try refreshing the page.'}</p>
        </div>

        <button onClick={onClose} className="flex items-center justify-center rounded-full bg-[#6600EB] py-3 font-poppins text-sm font-medium text-[#FDFDFD] transition hover:bg-[#5200BD] shrink-0 w-full max-w-[313px] h-12 min-[1200px]:w-[310px]">
          {isSuccess ? 'Back to Home' : 'Try Again'}
        </button>
      </div>
    </div>
  );
};

export default NotificationModal;