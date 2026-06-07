import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import BlogArticlePage from './BlogArticlePage';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  X, 
  Clock, 
  Paperclip, 
  Mail, 
  Briefcase, 
  Search, 
  ChevronRight,
  ShieldCheck,
  Cpu,
  BookOpen,
  ArrowUpRight,
  UserSquare2
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

interface BlogProps {
  onScrollToSection: (id: string) => void;
}

export default function Blog({ onScrollToSection }: BlogProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    const handleUpdatePost = (e: Event) => {
      const customEvent = e as CustomEvent<BlogPost>;
      if (customEvent.detail) {
        setSelectedPost(customEvent.detail);
      }
    };
    window.addEventListener('update-active-blog-post', handleUpdatePost as EventListener);
    return () => window.removeEventListener('update-active-blog-post', handleUpdatePost as EventListener);
  }, []);

  const featuredPost: BlogPost = {
    id: "blog-featured",
    title: "Standardizing Structural Integrity: Optimizing High-Rise Foundation Frameworks for Seismic Zones",
    excerpt: "An in-depth review of advanced value engineering protocols, concrete curing timelines, and structural load distributions required to clear modern metropolitan building compliance codes.",
    category: "Technical Brief / Latest",
    author: "Engr. Gregorio A. Lacay",
    date: "June 2026",
    readTime: "12 min read",
    image: "/src/assets/images/rebar_foundation_1780503628161.png",
    content: [
      "In earthquake-prone regions, building load distribution becomes a multi-dimensional challenge. The foundational framework cannot simply resist gravity; it must behave elastically under extreme lateral force shifting. Modern commercial tall structures rely on coupled shear wall foundations and integrated grade beams to spread kinetic energy.",
      "By standardizing our monolithic pouring schedules and enforcing strict 28-day curing tests on high-strength concrete cylinders, our engineering team ensures that the ultimate bearing capacity exceeds requirements by at least 150%. This value engineering model provides robust safety factors while cutting material overfill by up to 12%.",
      "During this technical exploration, we detail our standard micro-piling layout models, outline concrete cylinder compactor calibrations, and examine step-by-step calculations necessary for structural stamp approvals."
    ]
  };

  const mainPosts: BlogPost[] = [
    {
      id: "blog-grid-1",
      title: "Balancing Timelines and Material Logistics in Commercial Build-Outs",
      excerpt: "How J/G coordinates subcontractor dispatch pipelines and prefabricated structural steel shipments to minimize project schedule drift.",
      category: "Project Management",
      author: "Marcus Aurelius, Operations",
      date: "May 2026",
      readTime: "7 min read",
      image: "/src/assets/images/commercial_development_1780500228422.png",
      content: [
        "In tight urban settings, material storage space is often near zero. J/G solves this with 'Just-In-Time' steel delivery synchronization, ensuring that crane operators and truss layers work continuously without blocking public logistics veins.",
        "We share our custom structural milestone checklists, subcontractor tracking software integrations, and real Batangas port case-study metrics."
      ]
    },
    {
      id: "blog-grid-2",
      title: "Structural Retrofitting: How to Safely Reinforce Aging Concrete Frameworks",
      excerpt: "Using carbon-fiber reinforced polymers (CFRP) and structural steel jacketings to bring pre-existing retail columns back up to modern safety codes.",
      category: "Structural Design",
      author: "Engr. Gregorio A. Lacay",
      date: "May 2026",
      readTime: "9 min read",
      image: "/src/assets/images/field_excellence_operations_1780503096054.png",
      content: [
        "Historic facade preservation and structural expansion require careful live-load transfers. Placing concrete column jackets increases shear capacity without adding excessive dead weight load structures.",
        "A breakdown of structural adhesive curing limits, post-tension anchor placements, and real site execution guidelines under running operational logistics."
      ]
    },
    {
      id: "blog-grid-3",
      title: "Eliminating Material Waste: A Field Guide to Cost-Effective Procurement",
      excerpt: "Value engineering strategies from senior estimators to save costs on local hot-rolled steel trusses and sand sourcing.",
      category: "Value Engineering",
      author: "Elena Rostova, Estimator",
      date: "April 2026",
      readTime: "6 min read",
      image: "/src/assets/images/blueprint_cad_1780503663960.png",
      content: [
        "Bidding estimates often carry over 15% margin buffers due to lazy site volumetric surveys. J/G removes these buffers by carrying out detailed 3D laser topography mapping early.",
        "Learn how raw itemized material checklists minimize procurement errors, and optimize client budget allocations cleanly."
      ]
    },
    {
      id: "blog-grid-4",
      title: "Designing Resilient Drainage Networks for Industrial Logistics Hubs",
      excerpt: "Managing high-volume subgrade precipitation runoff via bespoke precast concrete culvert layout calculations.",
      category: "Civil Infrastructure",
      author: "Engr. Gregorio A. Lacay",
      date: "April 2026",
      readTime: "8 min read",
      image: "/src/assets/images/civil_infrastructure_1780500263690.png",
      content: [
        "Monsoonal weather patterns present immediate risks to low-lying active shipping warehouses. We model peak rainfall flow volumes to size storm retention basins precisely.",
        "Includes drainage slope grade coefficients charts and structural rebar layout requirements for cell culverts."
      ]
    },
    {
      id: "blog-grid-5",
      title: "The Physics of Long-Span Steel Truss Engineering in Modern Warehouses",
      excerpt: "Evaluating stress distributions and structural weld integrity in major clear-span layouts for optimal logistics gantry utility.",
      category: "Steel Fabrication",
      author: "Marcus Aurelius, Structural Lead",
      date: "March 2026",
      readTime: "10 min read",
      image: "/src/assets/images/industrial_retrofit_1780500246965.png",
      content: [
        "Clear-span layouts require rigid trusses that balance high-yield strength against structural deflections. Welding inspection protocols form the main line of defense against material fatigue.",
        "We discuss gusset plate thickness ratios, high-frequency bolt torque certifications, and non-destructive weld ultrasonic testing methods in detail."
      ]
    },
    {
      id: "blog-grid-6",
      title: "Maintaining a Zero-Incident On-Site Record: Operational Protocols",
      excerpt: "Our standard safety management processes, hardhat rules, weekly scaffolding inspections, and emergency assembly guidelines.",
      category: "Safety & Compliance",
      author: "Elena Rostova, Safety Officer",
      date: "March 2026",
      readTime: "5 min read",
      image: "/src/assets/images/about_construction_site_1780503065020.png",
      content: [
        "Safety is not a checklist; it's a structural discipline. J/G monitors safety compliance via redundant site safety marshal walkovers and continuous risk evaluations before daily crane operations.",
        "Explore our standard scaffolding tieback specifications, crane swing safety zones, and hot-work permit guidelines."
      ]
    },
    {
      id: "blog-grid-7",
      title: "Integrating High-Capacity Mechanical Systems Within Structural Shells",
      excerpt: "Eliminating design clashes by pre-aligning heavy HVAC ducts and plumbing lines with structural concrete sleeves.",
      category: "MEP Coordination",
      author: "Engr. Gregorio A. Lacay",
      date: "February 2026",
      readTime: "7 min read",
      image: "/src/assets/images/commercial_fitout_1780503646291.png",
      content: [
        "On-site drilling of cured concrete beams to accommodate pipe runs is a fatal structural error. J/G avoids this via standard 3D BIM coordination planning models.",
        "Review our pre-formed structural pipe sleeve rules, mechanical vibration isolation pads, and seismic brace requirements."
      ]
    },
    {
      id: "blog-grid-8",
      title: "Maximizing Spatial Efficiency in Retail Turnkey Interior Fit-Outs",
      excerpt: "Balancing elegant partitions, structural drywalls, and specialized ceilings while guaranteeing code-mandated fire doors.",
      category: "Commercial Design",
      author: "Elena Rostova, Layout Design",
      date: "February 2026",
      readTime: "5 min read",
      image: "/src/assets/images/commercial_fitout_1780503646291.png",
      content: [
        "Commercial fit-outs must support heavy business utility loads without overloading structural slab limits. We combine elegant metal-stud partitions with rapid-erect layouts.",
        "Details egress calculations, retail utility density limits, and aesthetic acoustics options for commercial environments."
      ]
    },
    {
      id: "blog-grid-9",
      title: "Feasibility Checklists: What to Look For Before Breaking Ground",
      excerpt: "Critical site survey metrics, soil compaction tests, and regulatory permissions needed to guarantee project liftoff.",
      category: "Pre-Construction",
      author: "Engr. Gregorio A. Lacay",
      date: "January 2026",
      readTime: "8 min read",
      image: "/src/assets/images/blueprint_cad_1780503663960.png",
      content: [
        "Breaking ground without standard soil compaction test reports risks massive settlement failures later. We provide a thorough risk matrix to check site safety parameters first.",
        "Includes sample soil profile templates, legal permit submission step-by-steps, and basic topographical survey checks."
      ]
    }
  ];

  const handleDownloadProfile = () => {
    alert("SYSTEM STATEMENT: Downloading J/G Construction Services Corporate Profile [PDF] - High-Resolution Workmanship Portfolio & Capabilities Spec Sheets.");
  };

  const filteredMainPosts = mainPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (selectedPost) {
    return (
      <BlogArticlePage 
        post={selectedPost} 
        onBack={() => {
          setSelectedPost(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} 
        onScrollToSection={onScrollToSection} 
        allPosts={[featuredPost, ...mainPosts]} 
      />
    );
  }

  return (
    <div className="bg-white pt-24 pb-0 text-[#111111]">
      
      {/* BLOG HERO HEADER */}
      <section className="relative py-14 border-b border-black overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="/src/assets/images/field_excellence_operations_1780503096054.png" 
            alt="Blog background" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-[0.55] select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between items-start gap-4">
            <div>
              <span className="font-mono text-xs font-black text-[#1B49B8] uppercase tracking-widest block mb-1">
                INDUSTRY INSIGHTS
              </span>
              <h1 className="font-display font-extrabold text-[#111111] text-3xl sm:text-4xl lg:text-5xl tracking-tight uppercase leading-none">
                The Blueprint Archive
              </h1>
              <p className="font-sans text-gray-600 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
                Articles, technical alerts, and field updates from our civil and structural engineers.
              </p>
            </div>
            <div className="font-mono text-xs text-gray-400 shrink-0">
              [TECHNICAL_ADVISORIES_DB v2026]
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: FEATURED POST */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div 
            onClick={() => setSelectedPost(featuredPost)}
            className="border-2 border-black bg-white flex flex-col md:flex-row hover:shadow-[10px_10px_0px_#1B49B8] transition-all duration-300 group cursor-pointer overflow-hidden"
          >
            {/* Left Content (60% Space on md+) */}
            <div className="w-full md:w-[60%] p-6 sm:p-10 space-y-4 flex flex-col justify-between order-2 md:order-1">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-black text-[#D41D1D] uppercase tracking-widest border border-[#D41D1D] px-2.5 py-1">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-400 font-mono text-xs select-none">|</span>
                  <span className="font-mono text-xs text-gray-500">{featuredPost.date}</span>
                </div>
                
                <h2 className="font-display font-black text-[#111111] text-xl sm:text-2xl lg:text-3xl leading-tight uppercase group-hover:text-[#1B49B8] transition-colors duration-300">
                  {featuredPost.title}
                </h2>
                
                <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 flex items-center justify-between font-mono text-xs text-gray-500">
                <span className="font-bold text-black flex items-center gap-2">
                  <User className="h-4 w-4 text-black shrink-0" />
                  AUTHORED BY: <span className="font-black text-[#1B49B8]">{featuredPost.author.toUpperCase()}</span>
                </span>
                <span>READ TIME: {featuredPost.readTime}</span>
              </div>
            </div>

            {/* Right Wide Image (40% Space on md+) */}
            <div className="relative w-full md:w-[40%] min-h-[250px] md:min-h-full border-b-2 md:border-b-0 md:border-l-2 border-black overflow-hidden bg-gray-100 order-1 md:order-2 flex items-stretch">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.01]"
              />
              <div className="absolute top-4 left-4 bg-industrial-red text-white py-1 px-3.5 font-mono text-xs font-black uppercase tracking-widest border border-black shadow-[2px_2px_0px_#111111]">
                FEATURED ADVISORY
              </div>
              <div className="absolute bottom-3 right-4 bg-black text-white px-2 py-1 font-mono text-[9px] uppercase tracking-wider select-none">
                SEISMIC_STUDY_REF // v2026
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FILTER & ARCHIVE BANNER MODULE */}
      <section className="bg-[#fafafa] border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <span className="font-mono text-xs font-bold text-industrial-red uppercase tracking-widest block mb-1">
                ENGINEERING ARCHIVES // CHRONOLOGICAL LOGS
              </span>
              <h2 className="font-display font-black text-xl sm:text-2xl text-black uppercase">
                Search Technical Publications
              </h2>
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:max-w-2xl">
              
              {/* Search input with Lucide icon */}
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles (e.g. concrete, shear, steel...)"
                  className="w-full bg-white border border-black pl-10 pr-4 py-2.5 text-xs rounded-none focus:outline-none focus:ring-1 focus:ring-industrial-red text-black font-mono placeholder-gray-400"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black focus:outline-none cursor-pointer"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>

              {/* Category Dropdown Selector */}
              <div className="relative w-full sm:w-60">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-white border border-black px-4 py-2.5 text-xs rounded-none focus:outline-none focus:ring-1 focus:ring-[#1B49B8] font-mono text-black appearance-none cursor-pointer pr-10"
                >
                  <option value="All">All Categories</option>
                  <option value="Project Management">Project Management</option>
                  <option value="Structural Design">Structural Design</option>
                  <option value="Value Engineering">Value Engineering</option>
                  <option value="Civil Infrastructure">Civil Infrastructure</option>
                  <option value="Steel Fabrication">Steel Fabrication</option>
                  <option value="Safety & Compliance">Safety & Compliance</option>
                  <option value="MEP Coordination">MEP Coordination</option>
                  <option value="Commercial Design">Commercial Design</option>
                  <option value="Pre-Construction">Pre-Construction</option>
                </select>
                {/* Chevron marker overlay */}
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-black font-mono text-[10px]">
                  ▼
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: MAIN ARTICLES GRID */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMainPosts.slice(0, visibleCount).map((post, idx) => (
              <article 
                key={post.id}
                className="border border-black bg-white flex flex-col justify-between hover:shadow-[6px_6px_0px_#D41D1D] group cursor-pointer transition-all duration-300 text-left"
                onClick={() => setSelectedPost(post)}
              >
                <div>
                  {/* Card Image Banner */}
                  <div className="aspect-[16/9] border-b border-black overflow-hidden bg-[#fafafa]">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 duration-500" 
                    />
                  </div>

                  <div className="p-6">
                    {/* Meta Info Category with Blue tag color */}
                    <div className="flex items-center justify-between mb-3 border-b border-gray-50 pb-2">
                      <span className="font-mono text-[9.5px] text-[#1B49B8] font-black uppercase tracking-widest">
                        {post.category}
                      </span>
                      <span className="font-mono text-[9px] text-[#111111] bg-gray-100 px-1.5 py-0.5 border border-gray-200 uppercase font-black tracking-widest">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-base sm:text-lg text-black group-hover:text-[#D41D1D] transition-colors leading-tight mb-3">
                      {post.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Date Meta Information Footer */}
                <div className="p-6 pt-0 mt-auto">
                  <div className="border-t border-gray-100 pt-4 flex items-center justify-between font-mono text-[11px] text-gray-500 group-hover:text-[#111111] transition-colors">
                    <span className="font-bold flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-gray-400" />
                      {post.readTime}
                    </span>
                    <span className="font-black">
                      {post.date}
                    </span>
                  </div>
                </div>

              </article>
            ))}
          </div>

          {/* SECTION 3: PAGINATION */}
          {visibleCount < filteredMainPosts.length && (
            <div className="mt-16 text-center">
              <button 
                onClick={() => setVisibleCount(prev => Math.min(prev + 3, filteredMainPosts.length))}
                className="inline-flex items-center justify-center bg-black hover:bg-gray-900 text-white font-display font-black text-xs uppercase tracking-widest py-4.5 px-10 rounded-none transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 border-2 border-black shadow-[6px_6px_0px_#1B49B8] active:shadow-[0px_0px_0px_#1B49B8] cursor-pointer"
              >
                Load More Articles
              </button>
            </div>
          )}

        </div>
      </section>

      {/* SECTION 4: FOR MEDIA INQUIRIES */}
      <section className="py-16 bg-white border-b border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="border-b border-black pb-4 mb-8">
            <span className="font-mono text-xs font-black text-[#D41D1D] uppercase tracking-widest block mb-1">
              PRESS REDUNDANCY // INQUIRIES
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-black uppercase tracking-tight">
              For Media Inquiries
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left Card: Corporate Communications */}
            <div className="group border border-black p-6 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:shadow-[4px_4px_0px_#111111] transition-all duration-300">
              <div className="space-y-3 max-w-sm">
                <span className="font-mono text-[9.5px] text-[#1B49B8] font-black uppercase tracking-widest block">
                  CORPORATE CHANNELS // ADMIN_FEED
                </span>
                <h3 className="font-display font-black text-lg text-black uppercase leading-tight">
                  Press & Publications
                </h3>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">
                  For corporate documentation, interview requests with our senior engineering staff, or high-resolution imagery assets packs.
                </p>
                <a 
                  href="mailto:media@jgengineering.com" 
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-black text-[#D41D1D] hover:underline"
                >
                  <Mail className="h-3.5 w-3.5" />
                  media@jgengineering.com
                </a>
              </div>
              <div className="w-full sm:w-[110px] aspect-square border border-black overflow-hidden bg-gray-100 flex items-center justify-center shrink-0">
                <div className="flex flex-col items-center justify-center text-center p-2">
                  <UserSquare2 className="h-8 w-8 text-industrial-red" />
                </div>
              </div>
            </div>

            {/* Right Card: Technical Relations */}
            <div className="group border border-black p-6 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:shadow-[4px_4px_0px_#111111] transition-all duration-300">
              <div className="space-y-3 max-w-sm">
                <span className="font-mono text-[9.5px] text-[#1B49B8] font-black uppercase tracking-widest block">
                  TENDERS & ESTIMATOR DESK // BID_ROOM
                </span>
                <h3 className="font-display font-black text-lg text-black uppercase leading-tight">
                  Bidding & Technical Proposals
                </h3>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">
                  To request detailed technical white papers regarding our specialized structural methodologies or contract safety documentations.
                </p>
                <a 
                  href="mailto:tenders@jgengineering.com" 
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-black text-[#D41D1D] hover:underline"
                >
                  <Mail className="h-3.5 w-3.5" />
                  tenders@jgengineering.com
                </a>
              </div>
              <div className="w-full sm:w-[110px] aspect-square border border-black overflow-hidden bg-gray-100 flex items-center justify-center shrink-0">
                <div className="flex flex-col items-center justify-center text-center p-2">
                  <UserSquare2 className="h-8 w-8 text-industrial-red" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5: BOTTOM CALL TO ACTION (CTA) */}
      <section className="bg-white py-16 border-t border-black relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="/src/assets/images/field_excellence_operations_1780503096054.png" 
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
