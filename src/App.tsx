/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import Showcase from './components/Showcase';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ConsultationForm from './components/ConsultationForm';
import About from './components/About';
import Blog from './components/Blog';
import ServicesPage from './components/ServicesPage';
import PortfolioPage from './components/PortfolioPage';
import GetStartedPage from './components/GetStartedPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import SafetyCompliance from './components/SafetyCompliance';
import Footer from './components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'services' | 'portfolio' | 'blog' | 'get-started' | 'privacy-policy' | 'terms-of-use' | 'safety-compliance'>('home');

  const handleScrollToSection = (id: string) => {
    if (id === 'consultation') {
      setCurrentView('get-started');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (id === 'services-view') {
      setCurrentView('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    // If not currently on the home view, switch to home first, then scroll
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        scrollToElement(id);
      }, 100);
    } else {
      scrollToElement(id);
    }
  };

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of fixed navigation bar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased overflow-x-hidden selection:bg-industrial-red selection:text-white">
      {/* Shared Navigation Bar */}
      <Navbar 
        currentView={currentView}
        setView={setCurrentView}
        onScrollToSection={handleScrollToSection}
      />
      
      {/* View Content Delivery */}
      {currentView === 'home' && (
        <main>
          {/* Hero Section with interactive CAD mockup */}
          <Hero 
            onGetStarted={() => setCurrentView('get-started')}
            onViewProjects={() => handleScrollToSection('showcase')}
          />
          
          {/* Problem Statement & Solution Statement Splits */}
          <ProblemSolution />
          
          {/* Offered Services Section */}
          <Services />
          
          {/* Project Showcases Section */}
          <Showcase />
          
          {/* Why Choose Us Pillars Section */}
          <WhyChooseUs />
          
          {/* Testimonials Review Card Matrix */}
          <Testimonials />
          
          {/* Clean Estimating & Consultation Form */}
          <ConsultationForm onScrollToSection={handleScrollToSection} />
        </main>
      )}

      {currentView === 'about' && (
        <About onScrollToSection={handleScrollToSection} />
      )}

      {currentView === 'services' && (
        <ServicesPage onScrollToSection={handleScrollToSection} />
      )}

      {currentView === 'portfolio' && (
        <PortfolioPage onScrollToSection={handleScrollToSection} />
      )}

      {currentView === 'blog' && (
        <Blog onScrollToSection={handleScrollToSection} />
      )}

      {currentView === 'get-started' && (
        <GetStartedPage onScrollToSection={handleScrollToSection} />
      )}

      {currentView === 'privacy-policy' && (
        <PrivacyPolicy onScrollToSection={handleScrollToSection} />
      )}

      {currentView === 'terms-of-use' && (
        <TermsOfUse onScrollToSection={handleScrollToSection} />
      )}

      {currentView === 'safety-compliance' && (
        <SafetyCompliance onScrollToSection={handleScrollToSection} />
      )}
      
      {/* Shared Structurally Verified Footer */}
      <Footer setView={setCurrentView} onScrollToSection={handleScrollToSection} />
    </div>
  );
}

