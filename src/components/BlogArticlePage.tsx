import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowRight, 
  User, 
  Calendar, 
  Clock, 
  Mail, 
  Check, 
  ChevronRight, 
  Send 
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
}

interface BlogArticlePageProps {
  post: BlogPost;
  onBack: () => void;
  onScrollToSection: (id: string) => void;
  allPosts: BlogPost[];
}

export default function BlogArticlePage({ post, onBack, onScrollToSection, allPosts }: BlogArticlePageProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [carouselOffset, setCarouselOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email) return;
    setSubscribed(true);
    setTimeout(() => {
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
    }, 2000);
  };

  const handleDownloadProfile = () => {
    alert("SYSTEM STATEMENT: Downloading J/G Construction Services Corporate Profile [PDF] - High-Resolution Workmanship Portfolio & Capabilities Spec Sheets.");
  };

  // Predefined Related Previews
  const relatedPreviews = [
    {
      id: "blog-grid-1",
      tag: "Project Management",
      title: "Balancing Timelines and Material Logistics in Commercial Build-Outs",
      date: "May 2026",
      image: "/src/assets/images/commercial_development_1780500228422.png"
    },
    {
      id: "blog-grid-2",
      tag: "Structural Design",
      title: "Structural Retrofitting: How to Safely Reinforce Aging Concrete Frameworks",
      date: "May 2026",
      image: "/src/assets/images/field_excellence_operations_1780503096054.png"
    },
    {
      id: "blog-grid-3",
      tag: "Value Engineering",
      title: "Eliminating Material Waste: A Field Guide to Cost-Effective Procurement",
      date: "April 2026",
      image: "/src/assets/images/blueprint_cad_1780503663960.png"
    }
  ];

  const handleCarouselPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const handleCarouselNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const handleRelatedClick = (postId: string) => {
    const matchedPost = allPosts.find(p => p.id === postId);
    if (matchedPost) {
      // Find post inside list, load it and scroll to top
      const targetElement = document.getElementById("blog-article-start");
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      // Delay state setting to let scroll finish
      setTimeout(() => {
        // Toggle the selected parent state
        // Since we are inside BlogArticlePage and it updates reactively,
        // we can just re-assign. If the parent doesn't export a setter,
        // we can rely on state propagation. Let's make sure our parent handles
        // setting the active article by passing down the action.
        window.dispatchEvent(new CustomEvent('update-active-blog-post', { detail: matchedPost }));
      }, 100);
    }
  };

  return (
    <div id="blog-article-start" className="bg-white min-h-screen pt-24 pb-0 text-[#111111] font-sans selection:bg-industrial-red selection:text-white">
      
      {/* 1. BACK TO ARCHIVE NAVIGATION TIER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-b border-gray-100 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-mono font-black text-black hover:text-industrial-red uppercase tracking-widest cursor-pointer group transition-colors"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Blueprint Archive
        </button>
        <span className="font-mono text-[10px] text-gray-400 select-none">
          TECHNICAL_ARTICLE_VIEW // PORT_3000
        </span>
      </div>

      {/* 2. MAIN SPLIT CONTENT GRID LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Column (Main Body - 70% Width) */}
          <div className="w-full lg:w-[70%] text-left space-y-8">
            
            {/* Metadata Tags */}
            <div className="flex flex-wrap gap-3 items-center">
              <span className="font-mono text-xs font-black text-[#1B49B8] bg-blue-50 border border-blue-100 px-3 py-1 uppercase tracking-widest">
                {post.category}
              </span>
              <span className="font-mono text-xs text-gray-400">
                ACTIVE_STAMP_OK
              </span>
            </div>

            {/* Massive Heavy Black Article Title Header */}
            <h1 className="font-display font-extrabold text-[#111111] text-xl sm:text-3xl lg:text-4xl leading-tight uppercase tracking-tight">
              {post.title}
            </h1>

            {/* Sub-header meta row */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pb-6 border-b border-gray-100 font-mono text-xs text-gray-500">
              <div className="flex items-center gap-1.5 font-bold text-black">
                <User className="h-4 w-4 text-industrial-red" />
                <span>BY {post.author.toUpperCase()}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-[#1B49B8]" />
                <span>PUBLISHED: {post.date.toUpperCase()}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-gray-400" />
                <span>EST: {post.readTime.toUpperCase()}</span>
              </div>
            </div>

            {/* Main Featured Image with thin black frame */}
            <div className="border border-black bg-gray-50 overflow-hidden shadow-[6px_6px_0px_#111111] aspect-[16/9]">
              <img 
                src={post.image} 
                alt={post.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Article Editorial Body Text */}
            <div className="text-gray-800 text-sm sm:text-base leading-relaxed space-y-6 font-sans">
              
              <p>
                <strong className="text-black uppercase font-mono tracking-wider mr-2">
                  MANILA, PHILIPPINES
                </strong> 
                — Technical breakdowns of soil-structure interactions and concrete curing thresholds represent the baseline of modern durable commercial design. When constructing heavy-duty facilities, warehouses, or residential towers, a lack of detailed load assessment maps poses massive risks to physical reliability and public timelines.
              </p>

              <p>
                The foundational components of high-rise structures must accommodate complex dynamic shear loads, shifting soil compaction properties, and seismic drift ratios. J/G Construction Services' core focus relies on strict compliance under building codes and regional regulations, eliminating risk parameters entirely before heavy construction or architectural finishing begins on site.
              </p>

              {/* Dynamic Paragraph Content */}
              {post.content && post.content.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}

              {/* Subheading 1: Load Distribution Mechanics */}
              <div className="pt-4 space-y-3">
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-black uppercase tracking-tight border-b border-black pb-2">
                  Load Distribution Mechanics
                </h3>
                <p>
                  Technical analysis of load paths through reinforced concrete columns and cross-braced steel truss designs suggests that force transmission must remain continuous. By incorporating balanced stiffness distributions, forces are transferred safely to the piles and subgrade soils rather than concentrating stress factors on vulnerable joints.
                </p>
              </div>

              {/* Subheading 2: Value Engineering Impact */}
              <div className="pt-4 space-y-3">
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-black uppercase tracking-tight border-b border-black pb-2">
                  Value Engineering Impact
                </h3>
                <p>
                  Detailed strategies for reducing material cost overhead without diminishing safety margins under strict municipal building codes allow for optimal resource allocation. Rather than placing bloated margins of reinforcement steel, our structural modeling optimizes concrete volume down to precise physical limits.
                </p>
                <p>
                  This direct value-engineering system achieves cost cuts on raw materials by up to 12% to 15%. This structural integrity model ensures zoning approvals clear municipal permit review desks on the very first submission—reversing years of industry permit latencies.
                </p>
              </div>

              {/* Editorial Blockquote in industrial Red */}
              <blockquote className="border-l-4 border-industrial-red bg-red-50/50 p-6 font-sans italic text-gray-700 text-sm sm:text-base">
                "Safety and structural durability are not checklists. They require continuous multi-dimensional calculation models backed by authentic field observation. Building it right the first time remains J/G's ultimate seal of commitment."
              </blockquote>

            </div>

          </div>

          {/* Right Column (Sidebar - 30% Width) */}
          <div className="w-full lg:w-[30%] text-left space-y-8 lg:sticky lg:top-24">
            
            {/* Layout Card 1 (Author Details) */}
            <div className="border border-black p-6 bg-white shadow-[4px_4px_0px_#111111] space-y-4">
              <span className="font-mono text-[10px] font-black text-industrial-red uppercase tracking-widest block">
                // EXECUTIVE BY-LINE
              </span>
              <div>
                <h4 className="font-display font-extrabold text-base text-black uppercase">
                  Engr. Gregorio A. Lacay
                </h4>
                <p className="font-sans text-xs text-gray-500 mt-1">
                  Founder & General Manager, J/G Construction Services
                </p>
              </div>
              <div className="pt-3 border-t border-gray-100 font-mono text-xs">
                <span className="text-gray-400 block mb-1">OFFICE CONTACT:</span>
                <a 
                  href="mailto:jgconstruction880@gmail.com" 
                  className="text-[#1B49B8] hover:text-industrial-red break-all transition-colors font-bold"
                >
                  jgconstruction880@gmail.com
                </a>
              </div>
              <p className="font-sans text-[11px] text-gray-400 leading-relaxed">
                Professional Engineer, Founder, and General Manager with a tradition of integrity, excellence, and premium construction workmanship across elite projects.
              </p>
            </div>

            {/* Layout Card 2 (Newsletter Subscription Box / Technical Inquiry) */}
            <div className="bg-gray-50 border border-black p-5 shadow-[4px_4px_0px_#1B49B8] text-left">
              <span className="font-mono text-[9.5px] font-black text-[#1B49B8] uppercase tracking-widest block mb-1">
                // TECHNICAL INQUIRY
              </span>
              <h4 className="font-display font-extrabold text-sm text-black uppercase">
                Inquire About Similar Builds
              </h4>
              <p className="font-sans text-[11.5px] text-gray-500 mt-1 leading-snug">
                Request a consultation regarding industrial framework solutions.
              </p>

              {subscribed ? (
                <div className="bg-green-50 border border-green-500 p-4 mt-4 text-center">
                  <Check className="h-5 w-5 text-green-600 mx-auto mb-1" />
                  <span className="font-mono text-xs font-black text-green-700 block">INQUIRY QUEUED</span>
                  <p className="text-[10px] text-green-600 mt-0.5">We will review structural specs shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="mt-4 space-y-3">
                  <div>
                    <label className="block text-[10px] font-mono text-black font-bold uppercase mb-1">
                      Your Full Name
                    </label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full bg-white border border-black px-3 py-2 text-xs rounded-none focus:outline-none focus:ring-1 focus:ring-[#1B49B8] text-black font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-black font-bold uppercase mb-1">
                      Contact Number
                    </label>
                    <input 
                      type="tel" 
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +63 917 123 4567"
                      className="w-full bg-white border border-black px-3 py-2 text-xs rounded-none focus:outline-none focus:ring-1 focus:ring-[#1B49B8] text-black font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-black font-bold uppercase mb-1">
                      Your Email Address
                    </label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. partner@firm.com"
                      className="w-full bg-white border border-black px-3 py-2 text-xs rounded-none focus:outline-none focus:ring-1 focus:ring-[#1B49B8] text-black font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-black font-bold uppercase mb-1">
                      Project Notes (Optional)
                    </label>
                    <textarea 
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Briefly state target location, square footage objectives..."
                      className="w-full bg-white border border-black p-2 text-xs rounded-none focus:outline-none focus:ring-1 focus:ring-[#1B49B8] text-black font-sans resize-none"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-black hover:bg-gray-900 text-white font-display font-bold text-xs uppercase py-2.5 px-4 rounded-none transition-all tracking-widest cursor-pointer shadow-[3px_3px_0px_#D41D1D] active:shadow-[0px_0px_0px_#111111] border border-black"
                  >
                    SUBMIT INQUIRY
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </div>

      {/* 3. SECTION 3: RELATED ARTICLES (Aligned 3-Column Grid) */}
      <section className="bg-white border-t border-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Area with layout title */}
          <div className="border-b border-black pb-4 mb-8">
            <div className="text-left">
              <span className="font-mono text-[10px] font-black text-industrial-red uppercase tracking-widest block mb-1">
                RECOMMENDED CONTINUOUS READING
              </span>
              <h2 className="font-display font-extrabold text-xl sm:text-2xl text-black uppercase tracking-tight">
                Related Articles
              </h2>
            </div>
          </div>

          {/* Related Articles 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {relatedPreviews.map((item) => (
              <div 
                key={item.id}
                onClick={() => handleRelatedClick(item.id)}
                className="w-full bg-white border border-black p-4 flex flex-col justify-between hover:shadow-[4px_4px_0px_#1B49B8] transition-all duration-300 group cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="aspect-[16/10] overflow-hidden border border-black bg-gray-100 bg-[#fafafa]">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <span className="font-mono text-[9px] font-black text-[#1B49B8] uppercase tracking-widest block pb-1 border-b border-gray-100">
                    {item.tag}
                  </span>
                  <h3 className="font-display font-extrabold text-xs sm:text-sm text-black group-hover:text-industrial-red transition-colors leading-tight line-clamp-2">
                    {item.title}
                  </h3>
                </div>
                <div className="pt-3 mt-4 border-t border-gray-100 flex items-center justify-between font-mono text-[10px] text-gray-400">
                  <span>DATE: {item.date.toUpperCase()}</span>
                  <span className="text-black font-extrabold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    READ <ChevronRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. SECTION 4: BOTTOM CALL TO ACTION (CTA) */}
      <section className="bg-white py-16 border-t border-black relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src={post.image} 
            alt="Ready to work together background" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-[0.25] grayscale select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
          <div className="max-w-3xl">
            
            {/* Column Text */}
            <div>
              <span className="font-mono text-xs font-black text-engineering-blue uppercase tracking-widest block mb-2">
                LET'S PARTNER // ESTIMATE REVIEW
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-black leading-tight uppercase animate-pulse-slow">
                Ready to work together?
              </h2>
              <p className="font-sans text-gray-600 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
                Whether it's a minor structural assessment or a multi-million budget development, our engineering team brings mathematical precision to your table from day one.
              </p>
            </div>

            {/* Actions (Buttons placed below the statement of information) */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
              <button
                onClick={() => onScrollToSection('consultation')}
                className="inline-flex items-center justify-center bg-industrial-red hover:bg-industrial-red-hover text-white font-display font-extrabold text-xs uppercase tracking-widest py-4.5 px-10 rounded-none transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 border-2 border-black shadow-[6px_6px_0px_#111111] active:shadow-[0px_0px_0px_#111111] cursor-pointer w-full sm:w-auto"
              >
                Get Started Now
              </button>
              <button
                onClick={() => onScrollToSection('services-view')}
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-black font-display font-extrabold text-xs uppercase tracking-widest py-4.5 px-10 rounded-none transition-all duration-300 border-2 border-black shadow-[6px_6px_0px_#111111] active:shadow-[0px_0px_0px_#111111] transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer w-full sm:w-auto"
              >
                Explore Our Services
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
