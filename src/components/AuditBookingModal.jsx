import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCheckCircle, FiShield, FiArrowRight } from 'react-icons/fi';

export const AuditBookingModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    whatsappNumber: '',
    service: 'Meta Ads Scaling',
    monthlyBudget: '$5,000 - $15,000 / mo',
    websiteUrl: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-[#0E4640]/20 overflow-hidden max-h-[92vh] flex flex-col z-10"
          >
            {/* Modal Header */}
            <div className="bg-[#0E4640] px-5 sm:px-6 py-4 sm:py-5 text-white flex items-center justify-between border-b border-[#082F2B]">
              <div className="space-y-1">
                <div className="badge text-[9px]">Free 30-Min Strategy Teardown</div>
                <h3 className="text-lg sm:text-2xl font-normal serif text-white">
                  Get Your Custom Growth Audit & Action Plan
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded bg-[#082F2B] text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Modal"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 overflow-y-auto flex-1">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-[#0E4640]/10 text-[#0E4640] rounded-full flex items-center justify-center mx-auto">
                    <FiCheckCircle className="w-10 h-10 text-[#0E4640]" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#102421] serif">
                    Audit Request Received!
                  </h4>
                  <p className="text-sm text-[#64706C] max-w-md mx-auto leading-relaxed">
                    Our Senior Growth Director is analyzing your details. You will receive an email confirmation and WhatsApp schedule invite within <strong className="text-[#0E4640]">2 business hours</strong>.
                  </p>
                  <div className="bg-[#F7F4EC] p-4 rounded-lg text-left text-xs space-y-1.5 border border-[#0E4640]/10 max-w-sm mx-auto font-mono">
                    <div className="text-[#0E4640] font-bold uppercase">Focus: {formData.service}</div>
                    <div>Budget: {formData.monthlyBudget}</div>
                    <div>Contact: {formData.email}</div>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      onClose();
                    }}
                    className="btn-teal px-8 py-3 text-xs"
                  >
                    Back to Site
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  {/* Value proposition note */}
                  <div className="bg-[#F7F4EC] p-3 rounded-lg border border-[#0E4640]/10 flex items-start gap-2.5 text-[#102421]">
                    <FiShield className="w-4 h-4 text-[#0E4640] shrink-0 mt-0.5" />
                    <span className="text-[11px] leading-relaxed">
                      <strong>What you get:</strong> Live account screen share, competitor ad breakdown, conversion drop-off analysis, and a 90-day ROAS roadmap. No high-pressure sales pitch.
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1">
                      <label className="font-bold text-[#102421] uppercase tracking-wider text-[10px]">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#0E4640]/20 rounded-md text-xs focus:outline-none focus:border-[#0E4640]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-bold text-[#102421] uppercase tracking-wider text-[10px]">
                        Business / Brand Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aura Skincare D2C"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#0E4640]/20 rounded-md text-xs focus:outline-none focus:border-[#0E4640]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1">
                      <label className="font-bold text-[#102421] uppercase tracking-wider text-[10px]">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@yourbrand.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#0E4640]/20 rounded-md text-xs focus:outline-none focus:border-[#0E4640]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-bold text-[#102421] uppercase tracking-wider text-[10px]">
                        WhatsApp or Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 019-2834"
                        value={formData.whatsappNumber}
                        onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#0E4640]/20 rounded-md text-xs focus:outline-none focus:border-[#0E4640]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1">
                      <label className="font-bold text-[#102421] uppercase tracking-wider text-[10px]">
                        Primary Service Focus *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#0E4640]/20 rounded-md text-xs focus:outline-none focus:border-[#0E4640]"
                      >
                        <option value="Meta Ads Scaling">Meta Ads (Facebook & IG)</option>
                        <option value="Google & YouTube Ads">Google & YouTube Search</option>
                        <option value="Direct-Response Creative">Direct-Response Creative Sprint</option>
                        <option value="Storefront CRO Rebuild">Landing Page CRO & Shopify Rebuild</option>
                        <option value="Full-Funnel Omnichannel">Full-Funnel Omnichannel Growth</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="font-bold text-[#102421] uppercase tracking-wider text-[10px]">
                        Current Monthly Ad Spend *
                      </label>
                      <select
                        value={formData.monthlyBudget}
                        onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#0E4640]/20 rounded-md text-xs focus:outline-none focus:border-[#0E4640]"
                      >
                        <option value="Under $5,000 / mo">Under $5,000 / mo</option>
                        <option value="$5,000 - $15,000 / mo">$5,000 - $15,000 / mo</option>
                        <option value="$15,000 - $50,000 / mo">$15,000 - $50,000 / mo</option>
                        <option value="$50,000 - $150,000 / mo">$50,000 - $150,000 / mo</option>
                        <option value="$150,000+ / mo">$150,000+ / mo (Enterprise Scale)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-[#102421] uppercase tracking-wider text-[10px]">
                      Website / Storefront URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://yourbrand.com"
                      value={formData.websiteUrl}
                      onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-[#0E4640]/20 rounded-md text-xs focus:outline-none focus:border-[#0E4640]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-[#102421] uppercase tracking-wider text-[10px]">
                      Biggest Growth Bottleneck (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Our Meta CPA doubled last month, or we need higher converting video creatives."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-[#0E4640]/20 rounded-md text-xs focus:outline-none focus:border-[#0E4640]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full btn-teal py-3.5 text-xs uppercase tracking-wider font-bold shadow-lg flex items-center justify-center gap-2"
                      id="submit-strategy-audit-btn"
                    >
                      <span>CONFIRM & SCHEDULE 30-MIN STRATEGY AUDIT</span>
                      <FiArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-[10px] text-center text-[#64706C] mt-2">
                      🔒 100% confidential under standard mutual NDA. Zero spam guaranteed.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
