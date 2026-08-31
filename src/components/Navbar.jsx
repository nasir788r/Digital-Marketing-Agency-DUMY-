import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShield, FiMenu, FiX, FiArrowUpRight, FiChevronRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';

export const Navbar = ({ openAuditModal, openWhatsAppModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#0E4640]/10 shadow-xs transition-all">
      {/* Top micro bar for high-density information */}
      <div className="bg-[#082F2B] text-white/80 text-[11px] py-1.5 px-4 sm:px-8 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="flex items-center gap-1.5 text-[#E6B85C] font-semibold tracking-wider uppercase text-[10px]">
            <FiShield className="w-3.5 h-3.5 text-[#E6B85C]" /> Verified Performance Agency
          </span>
          <span className="hidden md:inline text-white/40">|</span>
          <span className="hidden md:inline text-white/70">
            $12M+ Ad Spend Managed • 340% Avg. ROI
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <button 
            onClick={openWhatsAppModal}
            className="flex items-center gap-1.5 text-[#E6B85C] hover:text-white transition-colors cursor-pointer"
          >
            <FaWhatsapp className="w-3.5 h-3.5 text-[#25D366]" />
            <span className="font-sans font-semibold text-[11px] hidden xs:inline">WhatsApp: +1 (800) 555-0123</span>
            <span className="font-sans font-semibold text-[11px] xs:hidden">Chat Live</span>
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          to="/"
          onClick={handleNavClick}
          className="flex items-center gap-3 cursor-pointer group"
          id="nav-logo-brand"
        >
          <div className="w-8 h-8 bg-[#0E4640] flex items-center justify-center rounded-xs rotate-45 shadow-sm group-hover:scale-105 transition-transform">
            <div className="w-4 h-4 border-2 border-[#E6B85C]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-[#0E4640] serif leading-none">
              VELORA
            </span>
            <span className="text-[9px] uppercase tracking-[0.22em] font-semibold text-[#64706C] mt-0.5">
              Digital Marketing
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={({ isActive: active }) =>
                  `relative py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    active
                      ? 'text-[#0E4640] font-bold'
                      : 'text-[#102421]/75 hover:text-[#0E4640]'
                  }`
                }
                id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#E6B85C] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={openWhatsAppModal}
            className="btn-outline text-xs px-3.5 py-2 hidden md:inline-flex items-center gap-1.5"
            id="nav-quick-chat"
          >
            <FaWhatsapp className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Chat Live</span>
          </button>

          <button
            onClick={openAuditModal}
            className="btn-teal text-xs px-4 py-2 shadow-sm shadow-[#0E4640]/20 flex items-center gap-1.5"
            id="nav-get-strategy"
          >
            <span>GET FREE STRATEGY</span>
            <FiArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={openAuditModal}
            className="btn-teal text-[11px] px-3 py-1.5 sm:hidden"
          >
            Strategy
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0E4640] hover:bg-[#0E4640]/5 rounded-md transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Drawer with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-b border-[#0E4640]/10 px-6 py-5 shadow-xl space-y-4 overflow-hidden"
          >
            <div className="flex flex-col space-y-1.5">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={handleNavClick}
                  className={({ isActive }) =>
                    `text-left text-sm py-2.5 px-3 rounded-md font-semibold uppercase tracking-wider flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-[#0E4640]/10 text-[#0E4640] font-bold'
                        : 'text-[#102421]/80 hover:bg-[#F7F4EC]'
                    }`
                  }
                >
                  <span>{item.label}</span>
                  <FiChevronRight className="w-4 h-4 opacity-50" />
                </NavLink>
              ))}
            </div>

            <div className="pt-3 border-t border-[#0E4640]/10 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAuditModal();
                }}
                className="w-full btn-teal py-3 text-center justify-center font-bold text-xs"
              >
                GET FREE STRATEGY AUDIT
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsAppModal();
                }}
                className="w-full btn-outline py-2.5 text-center justify-center text-xs flex items-center gap-2"
              >
                <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Direct Consultation</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
