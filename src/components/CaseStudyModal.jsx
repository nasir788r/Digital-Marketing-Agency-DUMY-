import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa6';

export const CaseStudyModal = ({
  item,
  onClose,
  onBookAudit
}) => {
  return (
    <AnimatePresence>
      {item && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-xs"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl border border-[#0E4640]/20 overflow-hidden max-h-[92vh] flex flex-col z-10"
          >
            {/* Modal Top Header */}
            <div className="bg-[#0E4640] px-5 sm:px-6 py-4 sm:py-5 text-white flex items-center justify-between border-b border-[#082F2B]">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="badge text-[9px]">{item.badge}</span>
                  <span className="text-white/70 text-xs font-mono">Industry: {item.industry}</span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal serif text-white">
                  {item.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 sm:p-2 rounded bg-[#082F2B] text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-5 sm:p-8 overflow-y-auto space-y-6 sm:space-y-8 flex-1">
              {/* Key Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 bg-[#F7F4EC] rounded-xl border border-[#0E4640]/15">
                {item.results.map((res, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-[#64706C]">
                      {res.label}
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-[#0E4640] font-mono">
                      {res.value}
                    </div>
                    <div className="text-[10px] text-[#0E4640] flex items-center gap-1 font-semibold">
                      <FiCheckCircle className="w-3 h-3 text-[#E6B85C]" />
                      <span>Verified Outcome</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Problem, Strategy & Execution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="card rounded-xl p-4 sm:p-5 border border-[#0E4640]/10 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#102421] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    The Core Bottleneck
                  </div>
                  <p className="text-xs text-[#64706C] leading-relaxed">
                    {item.problem}
                  </p>
                </div>

                <div className="card rounded-xl p-4 sm:p-5 border border-[#0E4640]/10 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#102421] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#E6B85C]" />
                    The Strategic Angle
                  </div>
                  <p className="text-xs text-[#64706C] leading-relaxed">
                    {item.strategy}
                  </p>
                </div>

                <div className="card rounded-xl p-4 sm:p-5 border border-[#0E4640]/10 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#102421] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0E4640]" />
                    Execution & Scale
                  </div>
                  <p className="text-xs text-[#64706C] leading-relaxed">
                    {item.execution}
                  </p>
                </div>
              </div>

              {/* Client Testimonial Box */}
              <div className="bg-[#0E4640] rounded-xl p-5 sm:p-6 text-white relative overflow-hidden">
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center gap-1">
                    {[...Array(item.clientReview.rating || 5)].map((_, i) => (
                      <FaStar key={i} className="w-3.5 h-3.5 text-[#E6B85C]" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base md:text-lg serif italic text-white/95 leading-relaxed">
                    "{item.clientReview.quote}"
                  </p>
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs flex-wrap gap-2">
                    <div>
                      <span className="font-bold text-white block">{item.clientReview.author}</span>
                      <span className="text-white/60">{item.clientReview.role}, {item.clientReview.company}</span>
                    </div>
                    <span className="badge text-[9px]">Verified Client</span>
                  </div>
                </div>
              </div>

              {/* Gallery / Creative Visuals */}
              <div className="space-y-3">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#102421]">
                  Campaign Creative & Asset Showcase
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                  {item.galleryImages.map((img, i) => (
                    <div key={i} className="rounded-lg overflow-hidden border border-[#0E4640]/10 aspect-video relative group">
                      <img
                        src={img}
                        alt={`${item.title} asset ${i + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2.5">
                        <span className="text-[10px] text-white font-mono uppercase">Asset #{i + 1} Variation</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom Action Bar */}
            <div className="p-4 sm:p-5 bg-[#F7F4EC] border-t border-[#0E4640]/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <div className="text-xs text-[#64706C]">
                Want similar results for <strong className="text-[#102421]">{item.industry}</strong>?
              </div>

              <div className="flex gap-3 w-full sm:w-auto justify-end">
                <button
                  onClick={onClose}
                  className="btn-outline px-4 sm:px-5 py-2 text-xs flex-1 sm:flex-initial"
                >
                  Close Case Study
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onBookAudit();
                  }}
                  className="btn-teal px-5 sm:px-6 py-2 text-xs shadow-md font-bold flex items-center justify-center gap-1.5 flex-1 sm:flex-initial"
                >
                  <span>APPLY TO YOUR BRAND</span>
                  <FiArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
