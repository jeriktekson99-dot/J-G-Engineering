import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TestimonialItem } from '../types';

export default function Testimonials() {
  const testimonials: TestimonialItem[] = [
    {
      id: "cl-1",
      quote: "J/G Construction Services brought unmatched clarity to our commercial development project. Their structural solutions saved us weeks on the timeline.",
      author: "Robert Vance",
      role: "Project Director",
      organization: "Corporate Logistics Group",
      stars: 5
    },
    {
      id: "cl-2",
      quote: "Professional, precise, and completely transparent. The site management team maintained a spotless safety record throughout construction.",
      author: "Elena Rostova",
      role: "Operations Head",
      organization: "Urban Infrastructure Alliance",
      stars: 5
    },
    {
      id: "cl-3",
      quote: "Their value engineering phase cut down material waste significantly while strengthening the overall design integrity. Absolute masterclass.",
      author: "Marcus Aurelius",
      role: "Lead Architect",
      organization: "Nexus Architectural Syndicate",
      stars: 5
    }
  ];

  return (
    <section 
      id="testimonials" 
      className="py-16 bg-white border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-b border-black pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between items-start gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-black text-engineering-blue uppercase tracking-widest">
                Client Perspectives
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-black tracking-tight">
              Let Our Executions Do the Talking
            </h2>
          </div>
          <p className="text-gray-500 font-mono text-xs max-w-sm text-left md:text-right">
            [TRUST MATRIX / 100% VERIFIED INDEPENDENT REVIEWS]
          </p>
        </div>

        {/* 3-Column side-by-side grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => {
            const isRedStars = idx % 2 === 0;
            const starColor = isRedStars ? "text-industrial-red fill-industrial-red" : "text-engineering-blue fill-engineering-blue";
            
            return (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white border border-black p-6 sm:p-8 flex flex-col justify-between hover:shadow-[6px_6px_0px_rgba(0,0,0,0.1)] transition-all duration-300 relative text-left"
              >
                {/* Visual quote accent in the top corner */}
                <div className="absolute top-4 right-4 text-gray-100 font-serif select-none pointer-events-none">
                  <Quote className="h-10 w-10 text-gray-100" />
                </div>

                <div>
                  {/* Rating Stars - 5 star icons */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(test.stars)].map((_, sIdx) => (
                      <Star key={sIdx} className={`h-4.5 w-4.5 ${starColor}`} />
                    ))}
                  </div>

                  {/* Body quote with clean structural styling */}
                  <blockquote className="text-[#111111] font-sans font-medium text-base sm:text-lg leading-relaxed mb-8 relative z-10">
                    "{test.quote}"
                  </blockquote>
                </div>

                {/* Author footer markup */}
                <div className="border-t border-gray-100 pt-5 mt-auto flex flex-col">
                  <span className="font-display font-extrabold text-[#111111] text-base leading-none">
                    {test.author}
                  </span>
                  <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mt-1.5 leading-none">
                    {test.role} // {test.organization}
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
