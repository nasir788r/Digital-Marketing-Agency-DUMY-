import React from 'react';
import { motion } from 'framer-motion';
import { PRICING_PLANS } from '../data/agencyData';
import { FiCheck, FiX, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';

export const PricingPage = ({
  openAuditModal,
  openWhatsAppModal
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="space-y-14 pb-16 px-4 sm:px-8 max-w-7xl mx-auto pt-6 sm:pt-8"
    >
      {/* Pricing Header */}
      <div className="space-y-3 max-w-3xl text-center mx-auto">
        <div className="badge-teal inline-flex">Transparent Growth Investment</div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal serif text-[#102421]">
          Simple, Transparent <span className="gold-text italic">Performance Pricing</span>
        </h1>
        <p className="text-sm sm:text-base text-[#64706C] leading-relaxed">
          No hidden surprise retainers or confusing agency percentages. Predictable growth tiers designed to scale alongside your ad spend and revenue goals.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {PRICING_PLANS.map((plan) => {
          return (
            <div
              key={plan.id}
              className={`rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all relative ${
                plan.isPopular
                  ? 'bg-[#0E4640] text-white shadow-2xl ring-2 ring-[#E6B85C]'
                  : 'bg-white text-[#102421] border border-[#0E4640]/15 shadow-sm'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-6">
                  <span className="badge text-[9px] bg-[#E6B85C] text-[#082F2B] font-bold uppercase tracking-wider px-3 py-1 shadow-sm">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className={`text-2xl font-bold serif ${plan.isPopular ? 'text-white' : 'text-[#102421]'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs mt-1 ${plan.isPopular ? 'text-white/70' : 'text-[#64706C]'}`}>
                    {plan.tagline}
                  </p>
                </div>

                <div className="pt-2 pb-4 border-b border-white/10 border-[#0E4640]/10">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl sm:text-5xl font-bold font-mono ${plan.isPopular ? 'text-[#E6B85C]' : 'text-[#0E4640]'}`}>
                      ${plan.monthlyPrice.toLocaleString()}
                    </span>
                    <span className={`text-xs ${plan.isPopular ? 'text-white/60' : 'text-[#64706C]'}`}>
                      /mo
                    </span>
                  </div>
                  <div className={`text-[10px] font-mono mt-1 ${plan.isPopular ? 'text-white/60' : 'text-[#64706C]'}`}>
                    {plan.billingPeriod}
                  </div>
                  <div className={`text-[11px] font-semibold mt-2 ${plan.isPopular ? 'text-[#E6B85C]' : 'text-[#0E4640]'}`}>
                    {plan.minAdSpendGuide}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <span className={`text-[10px] uppercase font-bold tracking-wider ${plan.isPopular ? 'text-white/80' : 'text-[#102421]'}`}>
                    What is Included:
                  </span>
                  <ul className="space-y-2.5 text-xs">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        {feat.included ? (
                          <FiCheck className={`w-4 h-4 shrink-0 mt-0.5 ${plan.isPopular ? 'text-[#E6B85C]' : 'text-[#0E4640]'}`} />
                        ) : (
                          <FiX className={`w-4 h-4 shrink-0 mt-0.5 opacity-30 ${plan.isPopular ? 'text-white' : 'text-slate-400'}`} />
                        )}
                        <span className={`${!feat.included ? 'opacity-40 line-through' : ''} ${feat.highlight ? 'font-bold' : ''}`}>
                          {feat.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Bottom CTA */}
              <div className="pt-8 space-y-3">
                <button
                  onClick={openAuditModal}
                  className={`w-full py-3.5 text-xs font-bold uppercase tracking-wider rounded transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    plan.isPopular
                      ? 'btn-gold shadow-lg'
                      : 'btn-teal'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <FiArrowRight className="w-4 h-4" />
                </button>
                <p className={`text-[10px] text-center italic ${plan.isPopular ? 'text-white/60' : 'text-[#64706C]'}`}>
                  {plan.guaranteeNote}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Enterprise Custom Scope Teaser */}
      <div className="bg-[#F7F4EC] rounded-xl p-6 sm:p-8 border border-[#0E4640]/15 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h4 className="text-xl font-bold serif text-[#102421]">
            Need a custom revenue-share or multi-brand portfolio retainer?
          </h4>
          <p className="text-xs text-[#64706C] max-w-xl">
            We partner with venture-backed portfolio companies, PE rollups, and multi-eight-figure brands on bespoke performance equity terms.
          </p>
        </div>

        <button
          onClick={openWhatsAppModal}
          className="btn-outline text-xs px-6 py-3 shrink-0 font-bold flex items-center gap-2"
        >
          <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
          <span>Discuss Custom Retainer</span>
        </button>
      </div>
    </motion.div>
  );
};
