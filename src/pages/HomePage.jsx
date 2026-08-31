import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { 
  AGENCY_STATS, 
  AGENCY_SERVICES, 
  PORTFOLIO_CASE_STUDIES, 
  CAMPAIGN_PROOF, 
  CLIENT_REVIEWS 
} from '../data/agencyData';
import { ROICalculator } from '../components/ROICalculator';
import { 
  FiArrowUpRight, 
  FiArrowRight, 
  FiShield, 
  FiChevronRight, 
  FiCheckCircle, 
  FiTrendingUp, 
  FiLayers, 
  FiTarget, 
  FiZap 
} from 'react-icons/fi';
import { FaWhatsapp, FaStar } from 'react-icons/fa6';

export const HomePage = ({
  openAuditModal,
  openWhatsAppModal,
  onSelectCaseStudy
}) => {
  const navigate = useNavigate();
  const featuredCaseStudy = PORTFOLIO_CASE_STUDIES[0]; // Aura Skincare

  return (
    <motion.div 
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="space-y-16 sm:space-y-20 pb-20 overflow-x-hidden"
    >
      {/* 1. HERO SECTION */}
      <section className="pt-6 sm:pt-12 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Hero Left Column (Col 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2 space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="badge inline-flex">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E6B85C]" />
                Performance-Driven Digital Agency
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal serif leading-[1.12] text-[#102421]">
                We Don't Just Run Ads.<br />
                We Build Brands That <span className="gold-text italic">Grow</span>.
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-[#64706C] max-w-xl leading-relaxed">
                We help ambitious businesses attract more customers, generate quality leads and scale through powerful data-driven strategies.
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                <button
                  onClick={openAuditModal}
                  className="btn-teal px-6 sm:px-8 py-3.5 text-xs uppercase tracking-wider font-bold shadow-lg shadow-[#0E4640]/20 flex items-center gap-2"
                  id="hero-book-consultation"
                >
                  <span>BOOK A CONSULTATION</span>
                  <FiArrowUpRight className="w-4 h-4" />
                </button>

                <Link
                  to="/portfolio"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="btn-outline px-6 sm:px-8 py-3.5 text-xs uppercase tracking-wider font-bold bg-white/80 backdrop-blur-xs"
                  id="hero-view-work"
                >
                  VIEW OUR WORK
                </Link>
              </div>
            </div>

            {/* Numerical Proof Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8 border-t border-[#0E4640]/10">
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0E4640] font-mono">
                  $12M+
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold opacity-70">
                  Ad Spend Managed
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0E4640] font-mono">
                  340%
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold opacity-70">
                  Avg. Client ROI
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0E4640] font-mono">
                  150+
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold opacity-70">
                  Brands Scaled
                </div>
              </div>
            </div>
          </div>

          {/* Hero Right Column (Col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6">
            {/* Dark Teal Featured Result Card */}
            <div 
              onClick={() => onSelectCaseStudy(featuredCaseStudy)}
              className="bg-[#0E4640] rounded-xl p-5 sm:p-7 text-white relative overflow-hidden flex flex-col justify-between shadow-xl group cursor-pointer transition-all hover:ring-2 hover:ring-[#E6B85C]/50"
            >
              <div className="relative z-10 flex flex-col h-full space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#E6B85C]">
                    Featured Result
                  </span>
                  <div className="flex gap-1.5 items-center">
                    <div className="w-2 h-2 rounded-full bg-[#E6B85C]" />
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl serif mb-1 group-hover:text-[#E6B85C] transition-colors">
                    Aura Skincare Expansion
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Reduced Cost-Per-Acquisition by 42% while scaling monthly revenue to $250k.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-[#082F2B] p-3 rounded-lg border border-white/5">
                    <div className="text-[9px] text-white/50 mb-0.5 uppercase tracking-wider font-semibold">
                      Blended ROAS
                    </div>
                    <div className="text-lg font-bold text-[#E6B85C] font-mono">
                      5.8x
                    </div>
                  </div>

                  <div className="bg-[#082F2B] p-3 rounded-lg border border-white/5">
                    <div className="text-[9px] text-white/50 mb-0.5 uppercase tracking-wider font-semibold">
                      CPA Drop
                    </div>
                    <div className="text-lg font-bold text-[#E6B85C] font-mono">
                      -42%
                    </div>
                  </div>
                </div>
              </div>

              {/* Background ambient glow */}
              <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-[#E6B85C]/15 rounded-full blur-3xl" />
            </div>

            {/* Mini Services Grid Card */}
            <div className="card rounded-xl p-5 flex flex-col justify-between space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#0E4640]">
                  Core Channels
                </h4>
                <span className="text-[10px] text-[#0E4640]/60 font-mono font-semibold">
                  01 — 04
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <Link 
                  to="/services"
                  className="p-3 border border-[#0E4640]/10 rounded-lg bg-[#F7F4EC]/60 flex flex-col gap-1.5 hover:border-[#E6B85C] transition-colors cursor-pointer group"
                >
                  <div className="w-6 h-6 bg-[#0E4640]/10 group-hover:bg-[#0E4640] group-hover:text-white flex items-center justify-center text-[#0E4640] font-bold text-[10px] rounded transition-colors">
                    M
                  </div>
                  <span className="text-xs font-bold text-[#102421]">Meta Ads</span>
                </Link>

                <Link 
                  to="/services"
                  className="p-3 border border-[#0E4640]/10 rounded-lg bg-[#F7F4EC]/60 flex flex-col gap-1.5 hover:border-[#E6B85C] transition-colors cursor-pointer group"
                >
                  <div className="w-6 h-6 bg-[#0E4640]/10 group-hover:bg-[#0E4640] group-hover:text-white flex items-center justify-center text-[#0E4640] font-bold text-[10px] rounded transition-colors">
                    G
                  </div>
                  <span className="text-xs font-bold text-[#102421]">Google Ads</span>
                </Link>

                <Link 
                  to="/services"
                  className="p-3 border border-[#0E4640]/10 rounded-lg bg-[#F7F4EC]/60 flex flex-col gap-1.5 hover:border-[#E6B85C] transition-colors cursor-pointer group"
                >
                  <div className="w-6 h-6 bg-[#0E4640]/10 group-hover:bg-[#0E4640] group-hover:text-white flex items-center justify-center text-[#0E4640] font-bold text-[10px] rounded transition-colors">
                    S
                  </div>
                  <span className="text-xs font-bold text-[#102421]">SEO Growth</span>
                </Link>

                <Link 
                  to="/services"
                  className="p-3 border border-[#0E4640]/10 rounded-lg bg-[#F7F4EC]/60 flex flex-col gap-1.5 hover:border-[#E6B85C] transition-colors cursor-pointer group"
                >
                  <div className="w-6 h-6 bg-[#0E4640]/10 group-hover:bg-[#0E4640] group-hover:text-white flex items-center justify-center text-[#0E4640] font-bold text-[10px] rounded transition-colors">
                    W
                  </div>
                  <span className="text-xs font-bold text-[#102421]">Dev & CRO</span>
                </Link>
              </div>

              {/* Bottom trust indicator */}
              <div className="flex items-center justify-between pt-3 border-t border-[#0E4640]/10">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1.5">
                    <div className="w-5 h-5 rounded-full bg-[#0E4640] border-2 border-white" />
                    <div className="w-5 h-5 rounded-full bg-[#082F2B] border-2 border-white" />
                    <div className="w-5 h-5 rounded-full bg-[#E6B85C] border-2 border-white" />
                  </div>
                  <span className="text-[10px] font-semibold text-[#64706C]">
                    Trusted by 100+ Brands
                  </span>
                </div>

                <Link
                  to="/services"
                  className="text-xs font-bold text-[#0E4640] hover:text-[#082F2B] flex items-center gap-1"
                >
                  <span>All Services</span>
                  <FiChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LIVE INTERACTIVE ROI & ROAS CALCULATOR */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto">
        <ROICalculator onBookAudit={openAuditModal} />
      </section>

      {/* 3. VERIFIED CAMPAIGN PROOF & AD SPEND RESULTS */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="badge-teal">Transparent Analytics</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal serif text-[#102421]">
              Verified Ad Accounts & Campaign Results
            </h2>
            <p className="text-xs sm:text-sm text-[#64706C] max-w-xl">
              Real data from live Meta Ads Manager, Google Search & Shopify storefronts.
            </p>
          </div>

          <Link
            to="/portfolio"
            className="btn-outline text-xs px-4 py-2 self-start md:self-auto flex items-center gap-1.5"
          >
            <span>Explore All Case Studies</span>
            <FiArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CAMPAIGN_PROOF.map((proof) => (
            <div key={proof.id} className="card rounded-xl p-5 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px] text-[#64706C]">
                  <span className="font-mono bg-[#F7F4EC] px-2 py-0.5 rounded font-bold uppercase text-[#0E4640]">
                    {proof.clientIndustry}
                  </span>
                  <span className="flex items-center gap-1 text-[#0E4640] font-semibold">
                    <FiShield className="w-3.5 h-3.5 text-[#0E4640]" />
                    Verified Live Data
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold serif text-[#102421] leading-snug">
                  {proof.title}
                </h4>

                <div className="grid grid-cols-2 gap-2 bg-[#F7F4EC] p-3 rounded-lg border border-[#0E4640]/10 font-mono text-xs">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-[#64706C] block">Ad Spend</span>
                    <span className="font-bold text-[#102421]">{proof.adSpend}</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-[#64706C] block">Revenue</span>
                    <span className="font-bold text-[#0E4640]">{proof.revenueGenerated}</span>
                  </div>
                  <div className="pt-2 border-t border-[#0E4640]/10">
                    <span className="text-[9px] uppercase tracking-wider text-[#64706C] block">ROAS</span>
                    <span className="font-bold text-[#0E4640] text-sm">{proof.roas}</span>
                  </div>
                  <div className="pt-2 border-t border-[#0E4640]/10">
                    <span className="text-[9px] uppercase tracking-wider text-[#64706C] block">Target CPA</span>
                    <span className="font-bold text-[#102421]">{proof.cpa}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#0E4640]/10 flex items-center justify-between text-[11px]">
                <span className="text-[#64706C] font-mono text-[10px]">{proof.period}</span>
                <span className="badge text-[9px]">{proof.keyMetric}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. HIGH DENSITY 4-STEP PERFORMANCE FRAMEWORK */}
      <section className="bg-[#0E4640] text-white py-14 sm:py-16 px-4 sm:px-8 my-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="badge text-[9px] inline-flex">The VELORA Engine</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl serif font-normal text-white">
              Our 4-Stage Algorithmic Growth Architecture
            </h2>
            <p className="text-xs sm:text-sm text-white/70">
              We replace guesswork with ruthless scientific testing, proprietary bidding rules, and direct-response creative velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#082F2B] p-6 rounded-xl border border-white/5 space-y-3 relative">
              <span className="text-3xl font-bold font-mono text-[#E6B85C] opacity-40">01</span>
              <h3 className="text-lg serif text-white font-bold">Deep Signal Audit</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                We inspect tracking pixels, CAPI server-side event match quality, historical CAC trends, and competitor creative angles.
              </p>
              <div className="text-[10px] text-[#E6B85C] font-mono font-semibold uppercase">Sprint Day 1 — 7</div>
            </div>

            <div className="bg-[#082F2B] p-6 rounded-xl border border-white/5 space-y-3 relative">
              <span className="text-3xl font-bold font-mono text-[#E6B85C] opacity-40">02</span>
              <h3 className="text-lg serif text-white font-bold">Creative Velocity Unit</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                We script, record, and edit 15-30 direct-response UGC video hooks, static banners, and angle variations to beat ad fatigue.
              </p>
              <div className="text-[10px] text-[#E6B85C] font-mono font-semibold uppercase">Weekly Production</div>
            </div>

            <div className="bg-[#082F2B] p-6 rounded-xl border border-white/5 space-y-3 relative">
              <span className="text-3xl font-bold font-mono text-[#E6B85C] opacity-40">03</span>
              <h3 className="text-lg serif text-white font-bold">Algorithmic Scaling</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                We deploy Advantage+ campaign budget optimization (CBO) with automated bid rules to pour budget only into profitable winners.
              </p>
              <div className="text-[10px] text-[#E6B85C] font-mono font-semibold uppercase">Daily Optimization</div>
            </div>

            <div className="bg-[#082F2B] p-6 rounded-xl border border-white/5 space-y-3 relative">
              <span className="text-3xl font-bold font-mono text-[#E6B85C] opacity-40">04</span>
              <h3 className="text-lg serif text-white font-bold">Conversion & Retention</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                We rebuild high-converting advertorial landing pages and automated Klaviyo email/SMS winbacks to maximize customer LTV.
              </p>
              <div className="text-[10px] text-[#E6B85C] font-mono font-semibold uppercase">Compounding LTV</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VERIFIED CLIENT FEEDBACK & WHATSAPP SNIPPETS (WITH SWIPER CAROUSEL) */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="badge-teal">Unfiltered Proof</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal serif text-[#102421]">
              What Our Partner Founders Say
            </h2>
            <p className="text-xs sm:text-sm text-[#64706C]">
              Real feedback from CEOs, Founders, and Chief Revenue Officers.
            </p>
          </div>

          <button
            onClick={openWhatsAppModal}
            className="btn-teal text-xs px-4 py-2 flex items-center gap-1.5 self-start md:self-auto"
          >
            <FaWhatsapp className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Connect on WhatsApp</span>
          </button>
        </div>

        {/* Swiper Slider for Reviews */}
        <div className="pb-4">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              1024: { slidesPerView: 2.2, spaceBetween: 24 }
            }}
            className="pb-10"
          >
            {CLIENT_REVIEWS.map((review) => (
              <SwiperSlide key={review.id} className="h-auto">
                <div className="card rounded-xl p-6 flex flex-col justify-between space-y-4 h-full bg-white border border-[#0E4640]/15">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <FaStar key={i} className="w-3.5 h-3.5 text-[#E6B85C]" />
                        ))}
                      </div>
                      <span className="badge text-[9px]">{review.metricAchieved}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#102421] leading-relaxed italic">
                      "{review.content}"
                    </p>

                    {/* WhatsApp message snippet simulation */}
                    {review.whatsappSnippet && (
                      <div className="bg-[#F7F4EC] p-3 rounded-lg border border-[#0E4640]/10 space-y-1">
                        <div className="flex items-center justify-between text-[10px] text-[#64706C]">
                          <span className="font-bold text-[#0E4640] flex items-center gap-1">
                            <FaWhatsapp className="w-3 h-3 text-[#25D366]" />
                            {review.whatsappSnippet.sender}
                          </span>
                          <span>{review.whatsappSnippet.date}</span>
                        </div>
                        <p className="text-[11px] text-[#102421] font-mono">
                          "{review.whatsappSnippet.message}"
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#0E4640]/10 text-xs">
                    <div className="flex items-center gap-3">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-9 h-9 rounded-full object-cover border border-[#0E4640]/20"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <div className="font-bold text-[#102421]">{review.name}</div>
                        <div className="text-[11px] text-[#64706C]">{review.role}, {review.company}</div>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono font-semibold text-[#0E4640] bg-[#0E4640]/5 px-2 py-0.5 rounded">
                      {review.industry}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 6. BOTTOM AUDIT CTA SECTION */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl p-6 sm:p-10 border border-[#0E4640]/20 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <div className="badge-teal">Zero Obligation</div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal serif text-[#102421]">
              Ready to Accelerate Your Customer Acquisition?
            </h3>
            <p className="text-xs sm:text-sm text-[#64706C] max-w-xl">
              Get an expert breakdown of your current ad metrics, tracking integrity, creative fatigue level, and custom ROAS expansion targets.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={openAuditModal}
              className="btn-teal px-6 sm:px-8 py-3.5 text-xs uppercase tracking-wider font-bold shadow-lg flex items-center justify-center gap-2"
              id="cta-claim-growth-audit"
            >
              <span>CLAIM FREE STRATEGY AUDIT</span>
              <FiArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={openWhatsAppModal}
              className="btn-outline px-6 py-3.5 text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
              <span>Direct WhatsApp</span>
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
