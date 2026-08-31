import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSend, FiShield } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import { BsCheckAll } from 'react-icons/bs';

export const WhatsAppChatModal = ({ isOpen, onClose }) => {
  const [selectedMessage, setSelectedMessage] = useState(
    'Hi VELORA team! I am interested in a free marketing audit for my business.'
  );
  const [customText, setCustomText] = useState('');

  const quickPrompts = [
    'Hi VELORA team! I want to scale my Meta / Google Ads profitably.',
    'I need an audit of my current ad account and conversion rate.',
    'Can we discuss creative production & video ad pricing?',
    'What is your availability for a growth strategy call this week?'
  ];

  const handleLaunchWhatsApp = () => {
    const finalMsg = customText.trim() || selectedMessage;
    const encoded = encodeURIComponent(finalMsg);
    // WhatsApp direct launch URL format
    const url = `https://wa.me/18005550123?text=${encoded}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-md bg-white rounded-xl shadow-2xl border border-[#0E4640]/20 overflow-hidden z-10"
          >
            {/* WhatsApp Branded Header */}
            <div className="bg-[#0E4640] px-5 py-4 text-white flex items-center justify-between border-b border-[#082F2B]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#082F2B] rounded-full flex items-center justify-center border border-[#E6B85C]/30 text-[#E6B85C]">
                  <FaWhatsapp className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm text-white">VELORA Growth Desk</span>
                    <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block animate-pulse" />
                  </div>
                  <span className="text-[10px] text-white/70">Online • Typically replies in &lt; 5 mins</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded bg-[#082F2B] text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* WhatsApp Mock Chat Area */}
            <div className="p-4 bg-[#F7F4EC] space-y-3">
              {/* Inbound Agent Message */}
              <div className="bg-white p-3 rounded-lg rounded-tl-none border border-[#0E4640]/10 text-xs shadow-xs space-y-1 max-w-[88%]">
                <p className="text-[#102421] leading-relaxed">
                  Hello! 👋 Welcome to VELORA Digital Marketing. How can our performance media team help accelerate your business growth today?
                </p>
                <div className="flex items-center justify-end gap-1 text-[9px] text-[#64706C]">
                  <span>Just now</span>
                  <BsCheckAll className="w-3.5 h-3.5 text-[#0E4640]" />
                </div>
              </div>

              {/* Quick reply chips */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] uppercase font-bold text-[#64706C] tracking-wider block">
                  Quick Inquiries:
                </span>
                <div className="flex flex-col gap-1.5">
                  {quickPrompts.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedMessage(prompt);
                        setCustomText(prompt);
                      }}
                      className={`text-left text-xs p-2.5 rounded-md border transition-all text-[#102421] cursor-pointer ${
                        selectedMessage === prompt
                          ? 'bg-[#0E4640] text-white border-[#0E4640] font-medium'
                          : 'bg-white hover:bg-white/80 border-[#0E4640]/10'
                      }`}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Input */}
              <div className="pt-2">
                <textarea
                  rows={2}
                  placeholder="Or type custom inquiry..."
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  className="w-full p-2.5 bg-white border border-[#0E4640]/20 rounded-md text-xs focus:outline-none focus:border-[#0E4640]"
                />
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="p-4 bg-white border-t border-[#0E4640]/10 flex items-center justify-between gap-3">
              <div className="text-[10px] text-[#64706C] flex items-center gap-1 font-mono">
                <FiShield className="w-3.5 h-3.5 text-[#0E4640]" />
                <span>Direct partner chat</span>
              </div>

              <button
                onClick={handleLaunchWhatsApp}
                className="btn-teal px-5 py-2.5 text-xs font-bold flex items-center gap-2 shadow-sm"
                id="whatsapp-launch-btn"
              >
                <span>Open in WhatsApp</span>
                <FiSend className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
