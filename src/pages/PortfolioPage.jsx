import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_CASE_STUDIES, CAMPAIGN_PROOF } from '../data/agencyData';
import { FiShield, FiArrowUpRight, FiEye } from 'react-icons/fi';

export const PortfolioPage = ({
  onSelectCaseStudy,
  openAuditModal
}) => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Meta Ads', 'Google Ads', 'Creative Design', 'Website Development'];

  const filteredItems = filter === 'All'
    ? PORTFOLIO_CASE_STUDIES
    : PORTFOLIO_CASE_STUDIES.filter((item) => item.category === filter);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="space-y-14 pb-16 px-4 sm:px-8 max-w-7xl mx-auto pt-6 sm:pt-8"
    >
      {/* Portfolio Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="badge-teal">Documented Case Studies</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal serif text-[#102421]">
            Proven Track Record of <span className="gold-text italic">Measurable Scale</span>
          </h1>
          <p className="text-sm sm:text-base text-[#64706C]">
            Explore in-depth case studies with real revenue milestones, ROAS benchmarks, and live ad creative breakdowns.
          </p>
        </div>

        {/* Filter Category Chips */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 text-xs rounded border transition-all cursor-pointer font-medium ${
                filter === cat
                  ? 'bg-[#0E4640] text-white border-[#0E4640]'
                  : 'bg-white text-[#102421] border-[#0E4640]/15 hover:border-[#0E4640]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectCaseStudy(item)}
            className="card rounded-xl overflow-hidden cursor-pointer group flex flex-col justify-between hover:shadow-xl transition-all border border-[#0E4640]/15 bg-white"
          >
            <div>
              {/* Image Banner with Badge */}
              <div className="relative aspect-video overflow-hidden bg-[#082F2B]">
                <img
                  src={item.featuredImage}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-between p-4">
                  <div className="flex justify-between items-start">
                    <span className="badge text-[9px] bg-white/90 text-[#0E4640] backdrop-blur-xs">
                      {item.badge}
                    </span>
                    <span className="bg-[#082F2B]/90 text-[#E6B85C] text-[10px] px-2.5 py-1 rounded font-mono font-bold">
                      {item.industry}
                    </span>
                  </div>

                  <div className="text-white text-xs flex items-center gap-1.5 opacity-90">
                    <FiEye className="w-3.5 h-3.5 text-[#E6B85C]" />
                    <span>Click to view full breakdown</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0E4640] block mb-1">
                    {item.client}
                  </span>
                  <h3 className="text-xl font-bold serif text-[#102421] group-hover:text-[#0E4640] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs text-[#64706C] leading-relaxed">
                  {item.shortDesc}
                </p>

                {/* Numerical Key Results Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-[#F7F4EC] p-3 rounded-lg border border-[#0E4640]/10">
                  {item.results.map((res, i) => (
                    <div key={i} className="text-center">
                      <div className="text-[9px] uppercase tracking-wider text-[#64706C]">
                        {res.label}
                      </div>
                      <div className="text-base font-bold font-mono text-[#0E4640]">
                        {res.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="px-6 py-3.5 bg-[#F7F4EC]/60 border-t border-[#0E4640]/10 flex items-center justify-between text-xs">
              <span className="text-[#64706C] text-[11px] font-medium">
                {item.serviceProvided}
              </span>
              <span className="text-[#0E4640] font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                <span>Read Study</span>
                <FiArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Live Proof Screenshots Section */}
      <div className="bg-[#0E4640] rounded-xl p-6 sm:p-8 text-white space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="badge text-[9px]">Live Screen Captures</span>
            <h2 className="text-2xl md:text-3xl serif font-normal text-white">
              Raw Analytics & Ad Account Dashboards
            </h2>
            <p className="text-xs text-white/70">
              Direct exports and unedited platform verification data.
            </p>
          </div>

          <button
            onClick={openAuditModal}
            className="btn-gold px-6 py-2.5 text-xs font-bold self-start md:self-auto"
          >
            Audit Your Ad Account
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CAMPAIGN_PROOF.map((p) => (
            <div key={p.id} className="bg-[#082F2B] rounded-lg p-4 border border-white/5 space-y-3">
              <div className="aspect-video rounded overflow-hidden relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 right-2 bg-black/70 px-2 py-0.5 rounded text-[10px] text-[#E6B85C] font-mono">
                  {p.period}
                </div>
              </div>

              <div>
                <div className="text-[10px] text-[#E6B85C] font-mono uppercase">{p.clientIndustry}</div>
                <h4 className="text-sm font-bold text-white mt-0.5">{p.title}</h4>
                <p className="text-[11px] text-white/60 mt-1">{p.screenshotCaption}</p>
              </div>

              <div className="pt-2 border-t border-white/10 flex justify-between items-center text-xs font-mono">
                <span className="text-white/60">ROAS: <strong className="text-[#E6B85C]">{p.roas}</strong></span>
                <span className="text-white/60">Spend: <strong className="text-white">{p.adSpend}</strong></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
