import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiArrowUpRight, FiShield } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';

export const Footer = ({ openAuditModal, openWhatsAppModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-[#0E4640] text-white/80 border-t border-[#082F2B]">
      {/* Top Pre-footer High Density Banner */}
      <div className="border-b border-white/10 py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <div className="badge inline-flex">Scale Your Revenue</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white serif font-normal">
              Ready to Turn Paid Ads Into a <span className="text-[#E6B85C] italic">Predictable Revenue Engine</span>?
            </h2>
            <p className="text-white/70 text-xs sm:text-sm max-w-xl">
              Book a 30-minute growth teardown. We will analyze your ad accounts, landing page drop-offs, and identify your biggest CAC reduction opportunities.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            <button
              onClick={openAuditModal}
              className="btn-gold px-6 sm:px-8 py-3.5 text-xs sm:text-sm shadow-xl font-bold"
              id="footer-book-audit"
            >
              <span>BOOK FREE STRATEGY AUDIT</span>
              <FiArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={openWhatsAppModal}
              className="bg-[#082F2B] text-white border border-white/20 hover:border-[#E6B85C] hover:text-[#E6B85C] px-6 py-3.5 rounded-md text-xs sm:text-sm font-semibold transition-all flex items-center gap-2"
              id="footer-whatsapp-btn"
            >
              <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
              <span>Instant WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-xs">
        {/* Col 1: Brand & Bio */}
        <div className="sm:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-white/10 flex items-center justify-center rounded-xs rotate-45 border border-[#E6B85C]">
              <div className="w-3 h-3 bg-[#E6B85C]" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white serif">
              VELORA
            </span>
          </div>
          
          <p className="text-white/60 leading-relaxed max-w-sm text-xs">
            Performance-driven digital marketing agency. We engineer full-funnel customer acquisition systems, direct-response creative, and conversion-optimized storefronts for ambitious brands.
          </p>

          <div className="pt-2 flex flex-col space-y-2 text-white/70 font-mono text-[11px]">
            <div className="flex items-center gap-2">
              <FiMail className="w-3.5 h-3.5 text-[#E6B85C]" />
              <span>growth@velora-agency.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FiPhone className="w-3.5 h-3.5 text-[#E6B85C]" />
              <span>+1 (800) 555-0123 / Direct Desk</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMapPin className="w-3.5 h-3.5 text-[#E6B85C]" />
              <span>550 Montgomery St, Suite 700, San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div className="space-y-3">
          <h4 className="text-white font-bold uppercase tracking-wider text-[11px] text-[#E6B85C]">
            Navigation
          </h4>
          <ul className="space-y-2 text-white/70">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={scrollToTop}
                  className="hover:text-[#E6B85C] transition-colors cursor-pointer text-left block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Core Services */}
        <div className="space-y-3">
          <h4 className="text-white font-bold uppercase tracking-wider text-[11px] text-[#E6B85C]">
            Core Services
          </h4>
          <ul className="space-y-2 text-white/70">
            <li>Meta Ads (FB & IG)</li>
            <li>Google & YouTube Search</li>
            <li>Direct-Response Creative</li>
            <li>High-Converting Landing Pages</li>
            <li>SEO & Organic Growth</li>
            <li>Retention Email / SMS</li>
          </ul>
        </div>

        {/* Col 4: Verified Performance */}
        <div className="space-y-3">
          <h4 className="text-white font-bold uppercase tracking-wider text-[11px] text-[#E6B85C]">
            Agency Highlights
          </h4>
          <div className="space-y-2 bg-[#082F2B] p-3.5 rounded-lg border border-white/5">
            <div className="flex justify-between items-center text-[10px] text-white/50 uppercase">
              <span>Managed Spend</span>
              <span className="text-[#E6B85C] font-bold font-mono">$12M+</span>
            </div>
            <div className="flex justify-between items-center text-[10px] text-white/50 uppercase">
              <span>Average Client ROAS</span>
              <span className="text-[#E6B85C] font-bold font-mono">5.2x</span>
            </div>
            <div className="flex justify-between items-center text-[10px] text-white/50 uppercase">
              <span>Audits Delivered</span>
              <span className="text-[#E6B85C] font-bold font-mono">420+</span>
            </div>
          </div>
          <p className="text-[10px] text-white/50 italic flex items-center gap-1">
            <FiShield className="w-3 h-3 text-[#E6B85C] shrink-0" />
            <span>Meta Business Partner & Google Premier Agency.</span>
          </p>
        </div>
      </div>

      {/* Bottom Ultra-Dense Legal & Contact Bar */}
      <div className="py-3 bg-[#082F2B] text-white/60 flex flex-col sm:flex-row items-center justify-between px-6 sm:px-10 text-[10px] uppercase tracking-widest border-t border-white/5 gap-2">
        <div>
          © {new Date().getFullYear()} VELORA DIGITAL MARKETING AGENCY. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-6 items-center">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
          <button 
            onClick={openWhatsAppModal}
            className="text-[#E6B85C] font-semibold cursor-pointer hover:underline flex items-center gap-1"
          >
            <FaWhatsapp className="w-3 h-3 text-[#25D366]" />
            <span>WhatsApp: +1 800 555 0123</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
