'use client';

import React, { useState } from 'react';

interface ContactFormProps {
  onResult: (status: 'success' | 'failed') => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onResult }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const nameInput = form.elements.namedItem('name') as HTMLInputElement;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    const messageInput = form.elements.namedItem('message') as HTMLTextAreaElement;

    const jsonPayload = JSON.stringify({
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
      _subject: "New Portfolio Message!", 
      _captcha: "false" 
    });

    try {
      const response = await fetch("https://formsubmit.co/ajax/afrizal.090477@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: jsonPayload,
      });

      // 💡 PERBAIKAN DI SINI: Langsung panggil tanpa membuat variabel 'const data ='
      await response.json();

      if (response.ok) {
        onResult('success'); 
        form.reset(); 
      } else {
        onResult('failed');
      }
    } catch (err) {
      console.error("Network Failure:", err);
      onResult('failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-6">
      <div>
        <label className="mb-2 block font-poppins text-sm font-semibold text-[#0A0D12]">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="w-full rounded-xl border border-[#E9EAEB] px-4 py-3 font-poppins text-base outline-none focus:border-[#6600EB] disabled:opacity-50"
          required
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="mb-2 block font-poppins text-sm font-semibold text-[#0A0D12]">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          className="w-full rounded-xl border border-[#E9EAEB] px-4 py-3 font-poppins text-base outline-none focus:border-[#6600EB] disabled:opacity-50"
          required
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="mb-2 block font-poppins text-sm font-semibold text-[#0A0D12]">
          Message
        </label>
        <textarea
          name="message"
          placeholder="Write your message here..."
          rows={5}
          className="w-full resize-none rounded-xl border border-[#E9EAEB] px-4 py-3 font-poppins text-base outline-none focus:border-[#6600EB] disabled:opacity-50"
          required
          disabled={isSubmitting}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#6600EB] py-3.5 font-poppins text-base font-medium text-white transition hover:bg-[#4F00B8] disabled:bg-purple-400 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Submit'}
      </button>
    </form>
  );
};

export default ContactForm;