import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ChevronRight, FileCode2, Send, CheckCircle } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
  onViewProjects: () => void;
}

export default function Hero({ onGetStarted, onViewProjects }: HeroProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    companyEmail: "",
    projectScope: "",
    phone: "",
    companyName: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const fullNameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.companyEmail || !formData.projectScope) {
      alert("Please complete all required fields.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      companyEmail: "",
      projectScope: "",
      phone: "",
      companyName: ""
    });
    setSubmitted(false);
  };

  const handleFocusForm = () => {
    if (fullNameRef.current) {
      fullNameRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      fullNameRef.current.focus();
    }
  };

  return (
    <section 
      id="hero-section"
      className="relative min-h-[90vh] pt-32 sm:pt-40 pb-16 flex items-center bg-white overflow-hidden"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/src/assets/images/blueprint_cad_1780503663960.png" 
          alt="Technical Blueprint background" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-[0.55] select-none"
        />
        {/* Subtle Gradient to keep typography readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
      </div>

      {/* Background Subtle Architect Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none" style={{
        backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Left Split): Content Block */}
          <div className="w-full lg:w-[55%] flex flex-col text-left">
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6 self-start"
            >
              <div className="h-1 w-6 bg-engineering-blue rounded-full" />
              <span className="font-mono text-xs font-bold text-engineering-blue tracking-widest uppercase">
                PRECISE ENGINEERING. UNCOMPROMISED DELIVERY.
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-[#111111] text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-6 text-left uppercase"
            >
              Precision Engineering. <br />
              <span className="text-industrial-red">Zero Guesswork.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#4b5563] text-base sm:text-lg leading-relaxed mb-8 font-sans max-w-xl"
            >
              We bridge the gap between complex blueprints and flawless execution with disciplined, high-precision structural design and management.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-start items-stretch sm:items-center"
            >
              <button
                onClick={handleFocusForm}
                className="bg-industrial-red hover:bg-industrial-red-hover text-white font-display font-bold py-4 px-8 rounded-none transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-center shadow-[4px_4px_0px_#111111] active:shadow-[0px_0px_0px_#111111] border-2 border-black cursor-pointer flex items-center justify-center gap-2"
              >
                Schedule a Consultation
                <ChevronRight className="h-4 w-4" />
              </button>
              
              <button
                onClick={onViewProjects}
                className="bg-white hover:bg-gray-50 text-black border-2 border-black font-display font-bold py-4 px-8 rounded-none transition-all duration-300 text-center cursor-pointer"
              >
                View Our Projects
              </button>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 pt-8 border-t border-gray-100 grid grid-cols-3 gap-6"
            >
              <div>
                <span className="block font-display font-extrabold text-2xl sm:text-3xl text-black">100%</span>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Zero-Defect Record</span>
              </div>
              <div>
                <span className="block font-display font-extrabold text-2xl sm:text-3xl text-black">130+</span>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Licensed Workers</span>
              </div>
              <div>
                <span className="block font-display font-extrabold text-2xl sm:text-3xl text-black">20+</span>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Completed Projects</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column (Right Split): High-Contrast Technical Form Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[45%] bg-white border-2 border-black p-6 sm:p-8 relative shadow-[8px_8px_0px_#1B49B8] mt-4 lg:mt-0"
          >
            <div className="absolute top-2.5 right-3 text-gray-300 font-mono text-[9px] select-none pointer-events-none">
              JG_VAL_FORM_V26
            </div>

            {submitted ? (
              <div className="py-12 px-4 text-center flex flex-col items-center justify-center">
                <div className="p-4 bg-green-50 border-2 border-green-500 rounded-full text-green-600 mb-6">
                  <CheckCircle className="h-10 w-10" />
                </div>
                
                <h3 className="font-display font-black text-2xl text-black uppercase mb-3 text-center">
                  SPECIFICATIONS INGESTED
                </h3>
                
                <p className="max-w-md text-gray-600 font-sans text-sm leading-relaxed mb-8 text-center scroll-mt-24">
                  Your structural scope has been queued into our estimator database. A coordinating civil engineer will correspond with full bidding valuations shortly.
                </p>

                <div className="bg-[#fafafa] border border-black p-4 w-full text-left font-mono text-xs text-black mb-8 overflow-x-auto max-w-sm mx-auto">
                  <div className="text-gray-400 font-bold">// JG_LEDGER_RECEIPT //</div>
                  <div className="mt-2">CLIENT: <span className="font-bold">{formData.fullName}</span></div>
                  <div>EMAIL: {formData.companyEmail}</div>
                  {formData.companyName && <div>COMPANY: {formData.companyName}</div>}
                  {formData.fullName.length > 0 && (
                    <div>ROUTE_STAMP: JG_{formData.fullName.substring(0,3).toUpperCase()}_0226</div>
                  )}
                  <div className="text-industrial-red font-black mt-2">STATUS: SECURE_ESTIMATING_QUEUE</div>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="text-white bg-black hover:bg-gray-900 border-2 border-black font-display font-bold px-8 py-3.5 rounded-none transition-colors cursor-pointer text-xs uppercase tracking-widest"
                >
                  Submit Another Project
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <span className="font-mono text-[10px] font-black text-industrial-red uppercase tracking-widest block mb-1">
                  SECURE ESTIMATING PIPELINE // ONLINE CONSOLE
                </span>
                <h3 className="font-display font-bold text-lg text-black uppercase leading-none pb-2 border-b border-gray-100">
                  Request a Quote
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label htmlFor="fullName" className="block text-[10px] font-mono font-black text-black uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-industrial-red">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      ref={fullNameRef}
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-white border border-black px-3 py-2 text-sm rounded-none focus:outline-none focus:ring-2 focus:ring-[#1B49B8] text-black placeholder-gray-400 font-sans"
                      placeholder="e.g. Juan dela Cruz"
                    />
                  </div>

                  <div>
                    <label htmlFor="companyEmail" className="block text-[10px] font-mono font-black text-black uppercase tracking-wider mb-1.5">
                      Company Email <span className="text-industrial-red">*</span>
                    </label>
                    <input
                      type="email"
                      id="companyEmail"
                      required
                      value={formData.companyEmail}
                      onChange={(e) => setFormData({ ...formData, companyEmail: e.target.value })}
                      className="w-full bg-white border border-black px-3 py-2 text-sm rounded-none focus:outline-none focus:ring-2 focus:ring-[#1B49B8] text-black placeholder-gray-400 font-sans"
                      placeholder="e.g. projects@vancecorp.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="companyName" className="block text-[10px] font-mono font-black text-black uppercase tracking-wider mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-white border border-black px-3 py-2 text-sm rounded-none focus:outline-none focus:ring-2 focus:ring-[#1B49B8] text-black placeholder-gray-400 font-sans"
                      placeholder="e.g. Vance Logistics Corp"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-[10px] font-mono font-black text-black uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-black px-3 py-2 text-sm rounded-none focus:outline-none focus:ring-2 focus:ring-[#1B49B8] text-black placeholder-gray-400 font-sans"
                      placeholder="e.g. +63 (0917) 555-0901"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectScope" className="block text-[10px] font-mono font-black text-black uppercase tracking-wider mb-1.5">
                    Project Scope & Structural Requirements <span className="text-industrial-red">*</span>
                  </label>
                  <textarea
                    id="projectScope"
                    required
                    rows={3}
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    className="w-full bg-white border border-black px-3 py-2 text-sm rounded-none focus:outline-none focus:ring-2 focus:ring-[#1B49B8] text-black placeholder-gray-400 font-sans resize-y"
                    placeholder="Describe specific structural targets, materials needed, load metrics..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1B49B8] hover:bg-[#153a94] disabled:bg-gray-400 text-white font-display font-extrabold tracking-widest text-xs uppercase py-3.5 px-6 rounded-none transition-all duration-300 shadow-[4px_4px_0px_#111111] active:shadow-[0px_0px_0px_#111111] border-2 border-black cursor-pointer flex items-center justify-center gap-2 mt-2"
                >
                  {loading ? (
                    <>
                      <FileCode2 className="h-4.5 w-4.5 animate-spin" />
                      <span>VERIFYING SYSTEM CALCULATIONS...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Ingest Proposal Parameters</span>
                    </>
                  )}
                </button>

                <p className="text-[9px] font-mono text-gray-400 text-center uppercase tracking-normal">
                  All calculations mapped directly to standard engineering rules. Privacy strictly secured.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
