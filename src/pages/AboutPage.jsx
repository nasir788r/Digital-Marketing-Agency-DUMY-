import React from 'react';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS, FAQ_ITEMS } from '../data/agencyData';
import { FiShield, FiCheckCircle, FiArrowUpRight, FiUsers, FiTrendingUp } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';

export const AboutPage = ({
  openAuditModal,
  openWhatsAppModal
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="space-y-16 pb-16 px-4 sm:px-8 max-w-7xl mx-auto pt-6 sm:pt-8"
    >
      {/* About Hero Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="badge-teal">Our Philosophy & DNA</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal serif text-[#102421] leading-tight">
            We Built the Agency We Wished We Could <span className="gold-text italic">Hire</span>.
          </h1>
          <p className="text-sm sm:text-base text-[#64706C] leading-relaxed">
            Most digital agencies sell bloated vanity metrics: impressions, clicks, and vague "brand awareness". VELORA was founded on one unbending principle: <strong className="text-[#102421]">direct accountability to your net revenue and customer acquisition profitability.</strong>
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={openAuditModal}
              className="btn-teal px-6 py-3 text-xs uppercase tracking-wider font-bold flex items-center gap-2"
            >
              <span>WORK WITH OUR LEADERSHIP</span>
              <FiArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={openWhatsAppModal}
              className="btn-outline px-6 py-3 text-xs uppercase tracking-wider font-bold flex items-center gap-2"
            >
              <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
              <span>Direct Chat</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 bg-[#0E4640] rounded-xl p-6 sm:p-8 text-white space-y-5 shadow-xl relative overflow-hidden">
          <h3 className="text-xl serif font-normal text-[#E6B85C]">
            The VELORA Anti-Fluff Standard
          </h3>
          <ul className="space-y-3.5 text-xs text-white/80">
            <li className="flex items-start gap-2.5">
              <FiShield className="w-4 h-4 text-[#E6B85C] shrink-0 mt-0.5" />
              <span><strong>Senior Practitioners Only:</strong> Your ad budget is managed directly by senior operators who have managed $10M+ in spend, never junior interns.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <FiShield className="w-4 h-4 text-[#E6B85C] shrink-0 mt-0.5" />
              <span><strong>First-Party Attribution:</strong> We do not rely on platform self-attribution. We verify via Triple Whale, Northbeam, and GA4 server-side CAPI.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <FiShield className="w-4 h-4 text-[#E6B85C] shrink-0 mt-0.5" />
              <span><strong>High Creative Velocity:</strong> 15-30 net-new ad creative variations produced every month to beat audience fatigue.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Leadership & Growth Team */}
      <div className="space-y-8">
        <div className="space-y-1 text-center max-w-2xl mx-auto">
          <div className="badge-teal">Executive Leadership</div>
          <h2 className="text-2xl sm:text-3xl font-normal serif text-[#102421]">
            Meet Your Growth Partners
          </h2>
          <p className="text-xs sm:text-sm text-[#64706C]">
            Direct equity accountability and decades of combined algorithmic performance experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="card rounded-xl p-5 flex flex-col justify-between space-y-4 bg-white border border-[#0E4640]/15">
              <div className="space-y-3">
                <div className="aspect-square rounded-lg overflow-hidden border border-[#0E4640]/10 bg-[#082F2B]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div>
                  <h4 className="text-base font-bold text-[#102421]">{member.name}</h4>
                  <span className="text-[11px] font-semibold text-[#0E4640] block">{member.role}</span>
                </div>

                <p className="text-xs text-[#64706C] leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="pt-2 border-t border-[#0E4640]/10">
                <span className="text-[9px] uppercase tracking-wider font-bold text-[#64706C] block mb-1">
                  Core Mastery
                </span>
                <div className="flex flex-wrap gap-1">
                  {member.expertise.map((exp, idx) => (
                    <span key={idx} className="text-[9px] font-mono bg-[#F7F4EC] text-[#0E4640] px-2 py-0.5 rounded border border-[#0E4640]/10 font-semibold">
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="space-y-8 bg-[#F7F4EC] p-6 sm:p-10 md:p-12 rounded-xl border border-[#0E4640]/15">
        <div className="space-y-1 max-w-xl">
          <div className="badge-teal">Transparency First</div>
          <h2 className="text-2xl sm:text-3xl font-normal serif text-[#102421]">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#64706C]">
            Everything you need to know about our sprints, pricing model, and onboarding process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FAQ_ITEMS.map((faq) => (
            <div key={faq.id} className="bg-white p-5 rounded-lg border border-[#0E4640]/10 space-y-2 shadow-xs">
              <h4 className="text-sm font-bold text-[#102421] flex items-start gap-2">
                <span className="text-[#0E4640] font-mono font-bold">Q.</span>
                <span>{faq.question}</span>
              </h4>
              <p className="text-xs text-[#64706C] leading-relaxed pl-5">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
