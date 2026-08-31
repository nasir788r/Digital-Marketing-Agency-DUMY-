import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { PricingPage } from './pages/PricingPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { AuditBookingModal } from './components/AuditBookingModal';
import { WhatsAppChatModal } from './components/WhatsAppChatModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { FaWhatsapp } from 'react-icons/fa6';
import { FiArrowUp } from 'react-icons/fi';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function MainLayout() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const openAuditModal = () => setIsAuditModalOpen(true);
  const closeAuditModal = () => setIsAuditModalOpen(false);

  const openWhatsAppModal = () => setIsWhatsAppModalOpen(true);
  const closeWhatsAppModal = () => setIsWhatsAppModalOpen(false);

  const handleSelectCaseStudy = (item) => {
    setActiveCaseStudy(item);
  };

  const handleCloseCaseStudy = () => {
    setActiveCaseStudy(null);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EC] text-[#102421] selection:bg-[#0E4640] selection:text-[#E6B85C]">
      <ScrollToTop />

      {/* Top Navbar */}
      <Navbar
        openAuditModal={openAuditModal}
        openWhatsAppModal={openWhatsAppModal}
      />

      {/* Main Routed Page Content */}
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                openAuditModal={openAuditModal}
                openWhatsAppModal={openWhatsAppModal}
                onSelectCaseStudy={handleSelectCaseStudy}
              />
            }
          />
          <Route
            path="/about"
            element={
              <AboutPage
                openAuditModal={openAuditModal}
                openWhatsAppModal={openWhatsAppModal}
              />
            }
          />
          <Route
            path="/services"
            element={
              <ServicesPage
                openAuditModal={openAuditModal}
                openWhatsAppModal={openWhatsAppModal}
              />
            }
          />
          <Route
            path="/portfolio"
            element={
              <PortfolioPage
                onSelectCaseStudy={handleSelectCaseStudy}
                openAuditModal={openAuditModal}
              />
            }
          />
          <Route
            path="/pricing"
            element={
              <PricingPage
                openAuditModal={openAuditModal}
                openWhatsAppModal={openWhatsAppModal}
              />
            }
          />
          <Route
            path="/blog"
            element={<BlogPage openAuditModal={openAuditModal} />}
          />
          <Route
            path="/contact"
            element={<ContactPage openWhatsAppModal={openWhatsAppModal} />}
          />
          {/* Catch all redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer
        openAuditModal={openAuditModal}
        openWhatsAppModal={openWhatsAppModal}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
        <button
          onClick={openWhatsAppModal}
          className="w-12 h-12 rounded-full bg-[#0E4640] text-white flex items-center justify-center shadow-2xl border-2 border-[#E6B85C] hover:scale-105 transition-all cursor-pointer group"
          aria-label="Direct WhatsApp Consultation"
          id="floating-whatsapp-btn"
        >
          <FaWhatsapp className="w-6 h-6 text-[#25D366] group-hover:rotate-12 transition-transform" />
        </button>

        {showScrollTop && (
          <button
            onClick={handleScrollToTop}
            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-xs text-[#0E4640] border border-[#0E4640]/20 flex items-center justify-center shadow-md hover:bg-white transition-all cursor-pointer"
            aria-label="Scroll to top"
            id="floating-scroll-top-btn"
          >
            <FiArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Interactive Modals */}
      <AuditBookingModal
        isOpen={isAuditModalOpen}
        onClose={closeAuditModal}
      />

      <WhatsAppChatModal
        isOpen={isWhatsAppModalOpen}
        onClose={closeWhatsAppModal}
      />

      <CaseStudyModal
        item={activeCaseStudy}
        onClose={handleCloseCaseStudy}
        onBookAudit={openAuditModal}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}
