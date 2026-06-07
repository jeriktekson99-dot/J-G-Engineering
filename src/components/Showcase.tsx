import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, Building, Layers, Milestone, Info, X } from 'lucide-react';
import { ShowcaseProject } from '../types';

export default function Showcase() {
  const [selectedProject, setSelectedProject] = useState<ShowcaseProject | null>(null);

  const projects: ShowcaseProject[] = [
    {
      id: "commercial-tower",
      title: "The Vertex Corporate Plaza",
      location: "Metro Financial Center",
      category: "Commercial Development",
      year: "2025",
      image: "/src/assets/images/commercial_development_1780500228422.png",
      scope: "Commercial Development / Core Structural Design",
      details: [
        "Dynamic seismic core reinforcement design spanning 42 floors",
        "Over 12,000 tons of high-strength structural grade-50 steel",
        "Wind-tunnel load computations optimized deflection ratios by 18%",
        "Designed to exceed Class-A local commercial resistance mandates"
      ]
    },
    {
      id: "industrial-retrofit",
      title: "Omni Logistics Retrofitting Works",
      location: "Industrial Corridor Sector 4",
      category: "Industrial Structural Retrofitting",
      year: "2024",
      image: "/src/assets/images/industrial_retrofit_1780500246965.png",
      scope: "Industrial Structural Retrofitting & Load Expansion",
      details: [
        "Retrofitting structural trusses to expand live-load capabilities by 45%",
        "Implemented custom anti-vibration anchor points for precision production line machinery",
        "Zero interruption to client shipping operations during steel component staging and welding",
        "Piped system restructuring designed for high-abrasion fluid dynamics"
      ]
    },
    {
      id: "bridge-infrastructure",
      title: "High-Tolerance Archway Crossing",
      location: "Municipal Central Bypass",
      category: "Structural Archway Framework",
      year: "2025",
      image: "/src/assets/images/civil_infrastructure_1780500263690.png",
      scope: "Civil Infrastructure / Reinforcement Works",
      details: [
        "Advanced concrete-to-steel modular cantilever system fabrication",
        "High-tolerance pre-cast girders installed over critical water-flow channels",
        "Structured stress-testing sensor arrays integrated during structural pour",
        "Project delivered 14 calendar days ahead of public launch framework deadline"
      ]
    }
  ];

  return (
    <section 
      id="showcase" 
      className="py-16 bg-white border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-b border-black pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between items-start gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-black text-industrial-red uppercase tracking-widest">
                Our Showcase
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-black tracking-tight">
              Standard-Setting Executions
            </h2>
          </div>
          <p className="text-gray-500 font-mono text-xs max-w-sm text-left md:text-right">
            [EXCELLENCE YOU CAN TRUST / MULTI-PIECE PORTFOLIO MATRIX]
          </p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => {
            const isBlueBorder = idx % 2 === 1;
            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(proj)}
              >
                {/* Image Container with Thin Black Border */}
                <div className={`relative aspect-4/3 overflow-hidden border border-black bg-gray-50 transition-all duration-300 ${
                  isBlueBorder 
                    ? 'group-hover:border-engineering-blue group-hover:shadow-[8px_8px_0px_#1B49B8]' 
                    : 'group-hover:border-industrial-red group-hover:shadow-[8px_8px_0px_#D41D1D]'
                }`}>
                  <img
                    src={proj.image}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  
                  {/* Scope Overlay tag */}
                  <div className="absolute top-3 left-3 bg-white border border-black px-3 py-1 font-mono text-[10px] font-bold text-black uppercase tracking-wider">
                    {proj.year}
                  </div>

                  {/* Quick-action indicator */}
                  <div className="absolute bottom-3 right-3 bg-white border border-black p-2 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="h-4 w-4" />
                  </div>
                </div>

                {/* Info Text block below the image */}
                <div className="mt-4 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[10px] text-gray-500 font-semibold tracking-wider uppercase">
                      {proj.location}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="font-mono text-[10px] text-industrial-red font-bold tracking-widest uppercase">
                      {proj.category}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-black text-xl group-hover:text-engineering-blue transition-colors leading-tight mb-2">
                    {proj.title}
                  </h3>

                  <p className="font-sans text-xs text-black font-extrabold tracking-tight underline group-hover:text-industrial-red transition-all flex items-center gap-1">
                    <span>Scope: {proj.scope}</span>
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Project Detailed Specifications Modal Floor overlay to prevent iframe issues */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="bg-white border-2 border-black max-w-2xl w-full p-6 sm:p-8 relative text-left"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-black hover:text-industrial-red p-1 border border-black hover:border-industrial-red bg-white cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Header Information */}
                <div className="border-b border-black pb-4 mb-6">
                  <span className="font-mono text-xs text-engineering-blue font-bold uppercase tracking-widest block mb-1">
                    {selectedProject.category} // CALIBRATED v2025
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-black">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm font-mono text-gray-500 mt-1">
                    {selectedProject.location} — Completed {selectedProject.year}
                  </p>
                </div>

                {/* Structural Image display */}
                <div className="aspect-16/9 bg-gray-50 border border-black mb-6 overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover" 
                  />
                </div>

                {/* Scope details list */}
                <div>
                  <h4 className="font-mono text-xs font-black text-black uppercase tracking-wider mb-3 flex items-center gap-1.5 border-b border-gray-100 pb-1">
                    <Info className="h-4 w-4 text-industrial-red animate-pulse" />
                    <span>ENGINEERING SPECIFICATIONS DATA SHEET</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedProject.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-sm font-sans text-gray-700">
                        <span className="inline-block h-1.5 w-1.5 bg-black mt-2 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer specs stamp */}
                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between font-mono text-[10px] text-gray-400">
                  <span>RECORD_UUID: {selectedProject.id.toUpperCase()}_CERT_STAMP</span>
                  <span className="text-black font-bold">100% QUALITY APPROVED</span>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
