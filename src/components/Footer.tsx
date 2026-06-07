import React from 'react';
import SgLogo from './SgLogo';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Clock
} from 'lucide-react';

interface FooterProps {
  setView?: (view: 'home' | 'about' | 'services' | 'portfolio' | 'blog' | 'get-started' | 'privacy-policy' | 'terms-of-use' | 'safety-compliance') => void;
  onScrollToSection?: (id: string) => void;
}

export default function Footer({ setView, onScrollToSection }: FooterProps) {
  const currentYear = 2026;

  const handleLinkClick = (view: 'home' | 'about' | 'services' | 'portfolio' | 'blog' | 'get-started' | 'privacy-policy' | 'terms-of-use' | 'safety-compliance') => {
    if (setView) {
      setView(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSectionClick = (sectionId: string) => {
    if (onScrollToSection) {
      onScrollToSection(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer id="main-footer" className="bg-white border-t-2 border-black pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-gray-200">
          
          {/* Col 1: Brand details */}
          <div className="lg:col-span-4 space-y-4">
            <button 
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-3 justify-start cursor-pointer focus:outline-none group text-left"
            >
              <SgLogo className="h-8 w-8 text-black group-hover:rotate-6 transition-transform duration-300" />
              <span className="font-display font-extrabold tracking-tight text-black text-lg">
                J/G CONSTRUCTION
              </span>
            </button>
            <p className="font-sans text-xs text-gray-600 leading-relaxed max-w-sm">
              We specialize in Architectural & Finishing Works including Renovation & Fit Out, Structural, Electrical, and Plumbing Works, committed to total customer satisfaction.
            </p>
            <div className="flex gap-3 pt-2">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 border border-gray-300 text-gray-500 hover:text-black hover:border-black transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 border border-gray-300 text-gray-500 hover:text-black hover:border-black transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 border border-gray-300 text-gray-500 hover:text-black hover:border-black transition-colors"
                aria-label="Facebook Profile"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services / Capabilities */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="font-mono text-xs font-black text-black uppercase tracking-wider border-b border-black pb-2">
              Capabilities
            </h5>
            <ul className="space-y-2.5 font-sans text-xs">
              <li>
                <button 
                  onClick={() => handleLinkClick('services')} 
                  className="text-gray-600 hover:text-industrial-red cursor-pointer transition-colors text-left"
                >
                  Architectural & Finishing Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('services')} 
                  className="text-gray-600 hover:text-industrial-red cursor-pointer transition-colors text-left"
                >
                  Renovation & Fit Out
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('services')} 
                  className="text-gray-600 hover:text-industrial-red cursor-pointer transition-colors text-left"
                >
                  Structural Engineering Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('services')} 
                  className="text-gray-600 hover:text-industrial-red cursor-pointer transition-colors text-left"
                >
                  Electrical & Plumbing Works
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Company / navigation links */}
          <div className="lg:col-span-2 space-y-4">
            <h5 className="font-mono text-xs font-black text-black uppercase tracking-wider border-b border-black pb-2">
              Company
            </h5>
            <ul className="space-y-2.5 font-sans text-xs">
              <li>
                <button 
                  onClick={() => handleLinkClick('about')} 
                  className="text-gray-600 hover:text-industrial-red cursor-pointer transition-colors text-left"
                >
                  About Our Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('portfolio')} 
                  className="text-gray-600 hover:text-industrial-red cursor-pointer transition-colors text-left"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('blog')} 
                  className="text-gray-600 hover:text-industrial-red cursor-pointer transition-colors text-left"
                >
                  Publications / News
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionClick('why-choose-us')} 
                  className="text-gray-600 hover:text-industrial-red cursor-pointer transition-colors text-left"
                >
                  Why Partner J/G
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionClick('testimonials')} 
                  className="text-gray-600 hover:text-industrial-red cursor-pointer transition-colors text-left"
                >
                  Partner Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Address / Contacts */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="font-mono text-xs font-black text-black uppercase tracking-wider border-b border-black pb-2">
              Operational Hub
            </h5>
            <ul className="space-y-3 font-sans text-xs text-gray-600">
              <li className="flex gap-2 items-start">
                <MapPin className="h-4 w-4 text-industrial-red shrink-0 mt-0.5" />
                <span>
                  Lot 8, Block 6, Legian 2D Subdivision,<br />Carsadang Bago I, Imus City, Cavite,<br />Philippines
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="h-3.5 w-3.5 text-industrial-red shrink-0" />
                <span>(+63) 945 308 7399</span>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="h-3.5 w-3.5 text-industrial-red shrink-0" />
                <a href="mailto:jgconstruction880@gmail.com" className="hover:text-black transition-colors">
                  jgconstruction880@gmail.com
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <Clock className="h-3.5 w-3.5 text-industrial-red shrink-0" />
                <span>Mon – Fri: 9 AM - 5 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright/legal row with NO system indicators/status tags */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="font-sans text-xs text-gray-500 text-center md:text-left">
            © {currentYear} J/G Construction Services. All Rights Reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-500 justify-center md:justify-end items-center">
            <button 
              type="button"
              onClick={(e) => e.preventDefault()}
              className="hover:text-black transition-colors cursor-pointer text-xs font-mono bg-transparent border-none p-0 focus:outline-none"
            >
              Admin Portal
            </button>
            <span className="text-gray-300">/</span>
            <button 
              onClick={() => handleLinkClick('privacy-policy')}
              className="hover:text-black transition-colors cursor-pointer text-xs font-mono bg-transparent border-none p-0 focus:outline-none"
            >
              Privacy Policy
            </button>
            <span className="text-gray-300">/</span>
            <button 
              onClick={() => handleLinkClick('terms-of-use')}
              className="hover:text-black transition-colors cursor-pointer text-xs font-mono bg-transparent border-none p-0 focus:outline-none"
            >
              Terms of Use
            </button>
            <span className="text-gray-300">/</span>
            <button 
              onClick={() => handleLinkClick('safety-compliance')}
              className="hover:text-black transition-colors cursor-pointer text-xs font-mono bg-transparent border-none p-0 focus:outline-none"
            >
              Safety Standard Compliance
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
