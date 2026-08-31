import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AGENCY_SERVICES } from '../data/agencyData';
import { 
  FiCheckCircle, 
  FiArrowRight, 
  FiShield, 
  FiTrendingUp, 
  FiLayout, 
  FiSearch, 
  FiBarChart2, 
  FiZap,
  FiTarget 
} from 'react-icons/fi';
import { FaMeta, FaGoogle } from 'react-icons/fa6';

export const ServicesPage = ({
  openAuditModal,
  openWhatsAppModal
}) => {
  const [selectedService, setSelectedService] = useState(AGENCY_SERVICES[0]);

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles': return <FiZap className="w-4 h-4" />;
      case 'Search': return <FiSearch className="w-4 h-4" />;
      case 'TrendingUp': return <FiTrendingUp className="w-4 h-4" />;
      case 'Layout': return <FiLayout className="w-4 h-4" />;
      case 'Palette': return <FiTarget className="w-4 h-4" />;
      case 'BarChart3': return <FiBarChart2 className="w-4 h-4" />;
      default: return <FiZap className="w-4 h-4" />;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="space-y-12 pb-16 px-4 sm:px-8 max-w-7xl mx-auto pt-6 sm:pt-8"
    >
      {/* Services Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="badge-teal">Our Capabilities</div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal serif text-[#102421]">
          High-Velocity Growth & Performance <span className="gold-text italic">Services</span>
        </h1>
        <p className="text-sm sm:text-base text-[#64706C] leading-relaxed">
          From full-funnel algorithmic media buying to direct-response creative sprints and high-converting storefront architecture.
        </p>
      </div>

      {/* Interactive Service Selector & Detail Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Services Directory (Col 5) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#64706C] px-1">
            Select Core Competency:
          </div>
          <div className="space-y-2.5">
            {AGENCY_SERVICES.map((srv, idx) => {
              const isSelected = selectedService.id === srv.id;
              return (
                <div
                  key={srv.id}
                  onClick={() => setSelectedService(srv)}
                  className={`card rounded-xl p-4 cursor-pointer transition-all flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'border-[#0E4640] bg-[#0E4640] text-white shadow-md'
                      : 'hover:border-[#0E4640]/30 bg-white text-[#102421]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded flex items-center justify-center font-bold text-xs ${
                      isSelected ? 'bg-[#082F2B] text-[#E6B85C]' : 'bg-[#0E4640]/10 text-[#0E4640]'
                    }`}>
                      {getServiceIcon(srv.iconName)}
                    </div>
                    <div>
                      <div className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-[#102421]'}`}>
                        {srv.title}
                      </div>
                      <div className={`text-[10px] ${isSelected ? 'text-white/70' : 'text-[#64706C]'}`}>
                        {srv.category}
                      </div>
                    </div>
                  </div>

                  <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-[#E6B85C]' : 'text-[#0E4640]'}`}>
                    0{idx + 1}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Service Deep-Dive Details (Col 7) */}
        <div className="lg:col-span-7 bg-white rounded-xl p-6 sm:p-8 border border-[#0E4640]/15 shadow-sm space-y-6 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div>
                <span className="badge-teal mb-2 inline-flex">{selectedService.category}</span>
                <h2 className="text-2xl sm:text-3xl font-normal serif text-[#102421]">
                  {selectedService.title}
                </h2>
              </div>
              <div className="bg-[#F7F4EC] px-3 py-1.5 rounded border border-[#0E4640]/10 text-xs font-mono font-bold text-[#0E4640] self-start">
                {selectedService.metricsHighlight}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#64706C] leading-relaxed">
              {selectedService.fullDesc}
            </p>

            {/* Deliverables Checklist */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#102421]">
                Core Deliverables & Outputs
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.deliverables.map((item, i) => (
                  <div key={i} className="bg-[#F7F4EC] p-3 rounded text-xs text-[#102421] flex items-start gap-2 border border-[#0E4640]/10">
                    <FiCheckCircle className="w-4 h-4 text-[#0E4640] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal For & Tech Stack */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#0E4640]/10">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#64706C]">
                  Ideal Business Profile
                </span>
                <p className="text-xs text-[#102421]">
                  {selectedService.idealFor}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#64706C]">
                  Tech & Tooling Stack
                </span>
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {selectedService.technologies.map((t, idx) => (
                    <span key={idx} className="text-[10px] font-mono bg-[#0E4640]/5 text-[#0E4640] px-2 py-0.5 rounded border border-[#0E4640]/10 font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#0E4640]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#64706C]">
              Includes dedicated account director & weekly performance sprints.
            </div>
            <button
              onClick={openAuditModal}
              className="btn-teal px-6 py-3 text-xs font-bold w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <span>AUDIT YOUR {selectedService.category.toUpperCase()}</span>
              <FiArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
