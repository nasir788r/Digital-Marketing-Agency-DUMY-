import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiClock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';

export const ContactPage = ({ openWhatsAppModal }) => {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: 'Meta & Google Ads Growth',
    monthlyBudget: '$10,000 - $30,000',
    message: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="space-y-14 pb-16 px-4 sm:px-8 max-w-7xl mx-auto pt-6 sm:pt-8"
    >
      {/* Contact Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="badge-teal">Direct Line to Growth</div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal serif text-[#102421]">
          Start Your Scalable <span className="gold-text italic">Growth Sprint</span>
        </h1>
        <p className="text-sm sm:text-base text-[#64706C] leading-relaxed">
          Connect directly with our senior strategy team. No gatekeepers, no junior sales reps — just an honest conversation about your customer acquisition numbers.
        </p>
      </div>

      {/* Main Grid: Form + Info Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form (Col 7) */}
        <div className="lg:col-span-7 bg-white rounded-xl p-6 sm:p-8 border border-[#0E4640]/15 shadow-sm">
          {sent ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 bg-[#0E4640]/10 text-[#0E4640] rounded-full flex items-center justify-center mx-auto">
                <FiCheckCircle className="w-8 h-8 text-[#0E4640]" />
              </div>
              <h3 className="text-2xl font-bold serif text-[#102421]">
                Message Transmitted Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-[#64706C] max-w-md mx-auto">
                Our Senior Managing Partner will review your brand details and reach back within <strong className="text-[#0E4640]">2 hours</strong> with audit availability.
              </p>
              <button
                onClick={() => setSent(false)}
                className="btn-outline px-6 py-2.5 text-xs font-bold"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-[#102421] uppercase tracking-wider text-[10px]">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F7F4EC]/40 border border-[#0E4640]/20 rounded text-xs focus:outline-none focus:border-[#0E4640]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#102421] uppercase tracking-wider text-[10px]">
                    Company / Storefront *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Brand or URL"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F7F4EC]/40 border border-[#0E4640]/20 rounded text-xs focus:outline-none focus:border-[#0E4640]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-[#102421] uppercase tracking-wider text-[10px]">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F7F4EC]/40 border border-[#0E4640]/20 rounded text-xs focus:outline-none focus:border-[#0E4640]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#102421] uppercase tracking-wider text-[10px]">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 012-3456"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F7F4EC]/40 border border-[#0E4640]/20 rounded text-xs focus:outline-none focus:border-[#0E4640]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-[#102421] uppercase tracking-wider text-[10px]">
                    Service Category *
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F7F4EC]/40 border border-[#0E4640]/20 rounded text-xs focus:outline-none focus:border-[#0E4640]"
                  >
                    <option value="Meta & Google Ads Growth">Meta & Google Ads Growth</option>
                    <option value="Direct-Response Creative Sprints">Direct-Response Creative Sprints</option>
                    <option value="Conversion Rate (CRO) & Web Dev">Conversion Rate (CRO) & Web Dev</option>
                    <option value="SEO & Organic Strategy">SEO & Organic Strategy</option>
                    <option value="Full Outsourced Growth Desk">Full Outsourced Growth Desk</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#102421] uppercase tracking-wider text-[10px]">
                    Monthly Ad Budget *
                  </label>
                  <select
                    value={formData.monthlyBudget}
                    onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F7F4EC]/40 border border-[#0E4640]/20 rounded text-xs focus:outline-none focus:border-[#0E4640]"
                  >
                    <option value="$3,000 - $10,000 / mo">$3,000 - $10,000 / mo</option>
                    <option value="$10,000 - $30,000 / mo">$10,000 - $30,000 / mo</option>
                    <option value="$30,000 - $100,000 / mo">$30,000 - $100,000 / mo</option>
                    <option value="$100,000+ / mo">$100,000+ / mo (Enterprise Scale)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-[#102421] uppercase tracking-wider text-[10px]">
                  Current Performance Challenge or Target
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your target CAC, current ROAS roadblocks, or ad spend goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#F7F4EC]/40 border border-[#0E4640]/20 rounded text-xs focus:outline-none focus:border-[#0E4640]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-teal py-3.5 text-xs font-bold uppercase tracking-wider shadow-md flex items-center justify-center gap-2"
                  id="contact-form-submit-btn"
                >
                  <span>SUBMIT INQUIRY & REQUEST AUDIT</span>
                  <FiSend className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Info Details (Col 5) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick WhatsApp Action Box */}
          <div className="bg-[#0E4640] rounded-xl p-6 text-white space-y-4 shadow-lg">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-ping" />
              <span className="text-[10px] uppercase tracking-widest text-[#E6B85C] font-bold">
                Instant Priority Line
              </span>
            </div>

            <h3 className="text-xl serif font-normal text-white">
              Prefer Instant Chat Over Email?
            </h3>

            <p className="text-xs text-white/70 leading-relaxed">
              Connect directly with our Growth Directors on WhatsApp. Share your current numbers and get a rapid preliminary feasibility check.
            </p>

            <button
              onClick={openWhatsAppModal}
              className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-[#082F2B] font-bold text-xs uppercase tracking-wider py-3.5 rounded transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
              id="contact-instant-whatsapp"
            >
              <FaWhatsapp className="w-4 h-4 text-[#082F2B]" />
              <span>START WHATSAPP CHAT NOW</span>
            </button>
          </div>

          {/* Headquarters & Service SLA */}
          <div className="bg-white rounded-xl p-6 border border-[#0E4640]/15 space-y-4 text-xs">
            <h4 className="font-bold uppercase tracking-wider text-[#0E4640] text-[11px]">
              Direct Contact Details
            </h4>

            <div className="space-y-3 text-[#102421]">
              <div className="flex items-start gap-3">
                <FiMail className="w-4 h-4 text-[#0E4640] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">General & Strategy Inquiries</div>
                  <span className="text-[#64706C] font-mono text-[11px]">growth@velora-agency.com</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiPhone className="w-4 h-4 text-[#0E4640] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Partner Direct Desk</div>
                  <span className="text-[#64706C] font-mono text-[11px]">+1 (800) 555-0123</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiMapPin className="w-4 h-4 text-[#0E4640] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">San Francisco Headquarters</div>
                  <span className="text-[#64706C]">550 Montgomery St, Suite 700, San Francisco, CA 94111</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#0E4640]/10 flex items-center gap-2 text-[10px] text-[#64706C]">
              <FiClock className="w-3.5 h-3.5 text-[#0E4640]" />
              <span>Average response time: &lt; 2 business hours (M-F, 8am-7pm PST)</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
