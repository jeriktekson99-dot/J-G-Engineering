import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Warehouse, 
  School, 
  Home as HomeIcon, 
  Wrench, 
  Layers, 
  Hammer, 
  FolderGit, 
  TrendingUp, 
  ShieldAlert, 
  Clock, 
  Award, 
  Zap, 
  Briefcase, 
  CornerDownRight, 
  FileText,
  ChevronLeft,
  ChevronRight,
  Paintbrush,
  Compass,
  Droplets
} from 'lucide-react';

interface AboutProps {
  onScrollToSection: (id: string) => void;
}

export default function About({ onScrollToSection }: AboutProps) {
  // Section 2 Sectors of Operation Grid Items (ARCHITECTURAL, CIVIL, STRUCTURAL, ELECTRICAL & PLUMBING)
  const sectors = [
    {
      id: "sec-1",
      title: "Architectural Space Planning",
      icon: Paintbrush,
      accent: "border-l-4 border-l-industrial-red",
      scope: "Bespoke spatial design, high-concept interior layouts, functional CAD drafting, and aesthetic harmony."
    },
    {
      id: "sec-2",
      title: "Interior Fit-Out & Finishing",
      icon: Layers,
      accent: "border-l-4 border-l-engineering-blue",
      scope: "Premium partition structures, acoustical ceilings, elegant surface finishing, and tailored commercial/office trims."
    },
    {
      id: "sec-3",
      title: "General Building Renovation",
      icon: HomeIcon,
      accent: "border-l-4 border-l-industrial-red",
      scope: "Transformative building modernization, adaptive reuse solutions, structural restorations, and custom space extensions."
    },
    {
      id: "sec-4",
      title: "Civil Works & Site Grading",
      icon: Compass,
      accent: "border-l-4 border-l-engineering-blue",
      scope: "High-grade earthworks, road networks, storm-drainage configurations, and robust retaining slope structures."
    },
    {
      id: "sec-5",
      title: "Structural Framework & Design",
      icon: Building2,
      accent: "border-l-4 border-l-industrial-red",
      scope: "Finite element calculations, safety-critical load path tracing, wind shear resistance, and seismic compliance checks."
    },
    {
      id: "sec-6",
      title: "Dynamic Foundation Engineering",
      icon: Warehouse,
      accent: "border-l-4 border-l-engineering-blue",
      scope: "High-strength monolithic concrete pours, soil compaction verification, deep-piling structures, and footing integrity."
    },
    {
      id: "sec-7",
      title: "Electrical Systems & Distribution",
      icon: Zap,
      accent: "border-l-4 border-l-industrial-red",
      scope: "Power load flow modeling, electrical distribution boards, safe lighting configurations, and power feed routing."
    },
    {
      id: "sec-8",
      title: "Plumbing & Sanitary Engineering",
      icon: Droplets,
      accent: "border-l-4 border-l-engineering-blue",
      scope: "Clean water supply lines, hygienic sewage networks, specialized drainage grids, and high-efficiency sanitary fixtures."
    }
  ];

  // Section 3 Build by Impact Stats
  const stats = [
    { value: "100%", label: "Safety Compliance Record", accent: "text-industrial-red" },
    { value: "50+", label: "Engineered Projects Completed", accent: "text-black" },
    { value: "15+ Years", label: "Combined Engineering Expertise", accent: "text-engineering-blue" },
    { value: "₱500M+", label: "Managed Project Value", accent: "text-industrial-red" },
    { value: "0", label: "Structural Delivery Failures", accent: "text-black" },
    { value: "100k+", label: "Safe Man-Hours Executed", accent: "text-engineering-blue" }
  ];

  // Section 5 Core Values Stack
  const values = [
    {
      num: "01",
      title: "Competence",
      desc: "We entrust our construction jobs to engineers who have exhibited solid experience in the field, and thus know the intricacies of preparing and completing the job within the specified timetables.",
      bulletColor: "bg-industrial-red"
    },
    {
      num: "02",
      title: "Transparency",
      desc: "We give the customer an adequate explanation of our bid, and try to give them as much value for their money as possible.",
      bulletColor: "bg-[#1B49B8]"
    },
    {
      num: "03",
      title: "Dependability",
      desc: "We do not promise more than we can deliver. When we make a commitment to complete work on a specific deadline we do so unless there is an impediment which is beyond our control.",
      bulletColor: "bg-black"
    },
    {
      num: "04",
      title: "Quality Orientation",
      desc: "We make sure we follow the specifications of the architect and structural engineers and consultants unless we can recommend alternatives to the satisfaction of customer through value engineering.",
      bulletColor: "bg-industrial-red"
    }
  ];

  const founders = [
    {
      name: "Engr. Gregorio A. Lacay",
      role: "Founder & General Manager",
      tag: "FOUNDER",
      image: "/src/assets/images/leadership_j_santos_portrait_1780503110023.png",
      bio: "Engr. Lacay recently founded J/G Construction Services to realize his dream of providing architectural, structural, and civil works through excellent workmanship. With extensive professional experience and a tradition of integrity and excellence, he guides our design and finishing teams with solid expertise."
    },
    {
      name: "Arch. G. Reyes, UAP",
      role: "Senior Architectural & Interior Fit-Out Lead",
      tag: "KEY PROFESSIONAL",
      image: "/src/assets/images/leadership_g_reyes_portrait_1780763344158.png",
      bio: "A multi-disciplined professional with over a decade of career involvement in construction. Arch. Reyes specializes in architectural, finishing, renovation, and interior fit-out design, assuring total client satisfaction."
    },
    {
      name: "Engr. E. Mendoza, PEE",
      role: "Senior MEP (Electrical & Plumbing) Engineer",
      tag: "KEY PROFESSIONAL",
      image: "/src/assets/images/leadership_e_tan_portrait_1780763363499.png",
      bio: "With over a decade of career involvement in construction, Engr. Mendoza oversees complex electrical, plumbing, and mechanical works, aligning design plans with high technical requirements and on-time delivery constraints."
    }
  ];

  const [activeFounderIdx, setActiveFounderIdx] = React.useState(0);

  const prevFounder = () => {
    setActiveFounderIdx((prev) => (prev === 0 ? founders.length - 1 : prev - 1));
  };

  const nextFounder = () => {
    setActiveFounderIdx((prev) => (prev === founders.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white pt-24 pb-0 text-[#111111]">
      
      {/* PAGE HERO HEADER */}
      <section className="relative py-14 border-b border-black overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="/src/assets/images/about_construction_site_1780503065020.png" 
            alt="About J/G J/G site operations" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-[0.55] select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between items-start gap-4 text-left">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-industrial-red uppercase tracking-widest">
                  WHO WE ARE // EXCELLENT WORKMANSHIP
                </span>
              </div>
              <h1 className="font-display font-extrabold text-[#111111] text-3xl sm:text-4xl lg:text-5xl tracking-tight uppercase leading-none">
                ABOUT OUR FIRM
              </h1>
              <p className="font-sans text-gray-600 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
                Our history, quality policy, and dedicated team of architectural, finishing, structural, electrical, and plumbing specialists.
              </p>
            </div>
            <div className="font-mono text-xs text-gray-400 shrink-0">
              [CORPORATE_HISTORY v2026]
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 0.5: OUR ORIGINS */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-6 text-left">
              <span className="font-mono text-xs font-black text-industrial-red uppercase tracking-widest block mb-3">
                OUR ORIGINS // FOUNDED BY ENGR. GREGORIO A. LACAY
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-black tracking-tight leading-tight mb-6">
                Specialized Craftsmanship.<br/>Built on a Foundation of Trust.
              </h2>
              <p className="font-sans text-gray-600 text-sm leading-relaxed mb-6">
                Founded by <strong>Engr. Gregorio A. Lacay</strong>, <strong>J/G Construction Services</strong> is a dynamic new entrant in the construction industry, driven by a strict commitment to quality, integrity, and exceptional workmanship. Backed by solid professional experience, the firm delivers dependable building and engineering solutions—including general construction, civil works, renovation, and interior fit-outs—across corporate offices, retail outlets, and residential units.
              </p>
              <div className="p-4 bg-gray-50 border border-gray-200 font-mono text-xs text-black space-y-1">
                <div className="font-bold text-engineering-blue">// INDUSTRIAL REGISTRY DETAILS</div>
                <div>FOUNDER: ENGR. GREGORIO A. LACAY</div>
                <div>SCOPE: ARCHITECTURAL, FINISHING, STRUCTURAL, ELECTRICAL & PLUMBING</div>
              </div>
            </div>

            {/* Right Column Custom Framed Image */}
            <div className="lg:col-span-6">
              <div className="border border-black p-3 bg-white shadow-[8px_8px_0px_#111111]">
                <div className="aspect-16/10 bg-gray-50 overflow-hidden border border-gray-100">
                  <img 
                    src="/src/assets/images/blueprint_cad_1780503663960.png" 
                    alt="Founding blueprint and design concepts of J/G Services" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale block" 
                  />
                </div>
                <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-gray-400">
                  <span>REG_DRAFT // SEC_A</span>
                  <span>FOUNDING INTEGRITY CHARTER APPROVED [✔]</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 1: HOW WE BUILD */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Custom Framed Image */}
            <div className="lg:col-span-6">
              <div className="border border-black p-3 bg-white shadow-[8px_8px_0px_#111111]">
                <div className="aspect-16/10 bg-gray-50 overflow-hidden border border-gray-100">
                  <img 
                    src="/src/assets/images/about_construction_site_1780503065020.png" 
                    alt="Active on-site J/G construction finishing operations" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale block" 
                  />
                </div>
                <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-gray-400">
                  <span>ON_SITE_RECORD_7729 // SEC_B</span>
                  <span>WORKMANSHIP EXCELLENCE VERIFIED [✔]</span>
                </div>
              </div>
            </div>

            {/* Right Column Text */}
            <div className="lg:col-span-6 text-left">
              <span className="font-mono text-xs font-black text-industrial-red uppercase tracking-widest block mb-3">
                OUR SCOPE // TURNKEY SERVICES
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-black tracking-tight leading-tight mb-6">
                On-Going Broad Projects.<br/>Total Customer Satisfaction.
              </h2>
              <p className="font-sans text-gray-600 text-sm leading-relaxed mb-6">
                We have active, on-going projects requiring meticulous architectural, civil, structural, electrical, and plumbing works. <strong>J/G Construction Services</strong> is dedicated to completing every task with cost-efficient delivery, elite quality materials, and compliance with the rigid schedules demanded by our elite clients. By maintaining rigorous technical standards and absolute operational integrity, we ensure that every structure we deliver stands as a benchmark of safety and long-term durability.
              </p>
              <div className="p-4 bg-gray-50 border border-gray-200 font-mono text-xs text-black space-y-1">
                <div className="font-bold text-engineering-blue">// DELIVERABLES REGISTER</div>
                <div>PROJECT SPECTRUM: OFFICE BUILDINGS, STORE OUTLETS, RESIDENCES</div>
                <div>COMMITMENT PRINCIPLE: ON-TIME DELIVERY & COST-EFFICIENT SERVICES</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT WE BUILD */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="border-b border-black pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between items-start gap-4">
            <div className="text-left">
              <span className="font-mono text-xs font-black text-engineering-blue uppercase tracking-widest block mb-1">
                Sectors of Operation
              </span>
              <h2 className="font-display font-black text-3xl text-black tracking-tight">
                Diverse Technical Expertise
              </h2>
            </div>
            <div className="font-mono text-xs text-gray-500">
              OPERATIONAL_SPECTRUM_MATRIX // [8 KEY PILLARS]
            </div>
          </div>

          {/* 4x2 Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sc) => {
              const IconComp = sc.icon;
              return (
                <div 
                  key={sc.id}
                  className={`bg-white border border-black p-6 hover:shadow-[4px_4px_0px_#111111] transition-all duration-300 text-left flex flex-col justify-between ${sc.accent}`}
                >
                  <div>
                    <div className="p-2.5 bg-gray-50 border border-gray-200 inline-block text-black mb-4">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <h3 className="font-display font-extrabold text-[#111111] text-base leading-tight mb-2">
                      {sc.title}
                    </h3>
                  </div>
                  <p className="font-sans text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-3 mt-3">
                    {sc.scope}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 3: BUILD BY IMPACT DATA GRID */}
      <section className="py-16 bg-[#fafafa] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 text-center max-w-xl mx-auto">
            <span className="font-mono text-xs font-black text-industrial-red uppercase tracking-widest block mb-2">
              BUILD BY IMPACT // STRETCH METRICS
            </span>
            <h2 className="font-display font-black text-3xl text-black tracking-tight">
              Verified Compliance & Delivery Stats
            </h2>
            <p className="font-sans text-sm text-gray-500 mt-2">
              Our record is audited annually by independent third-party certification authorities to guarantee structural compliance.
            </p>
          </div>

          {/* 3x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-black/80 divide-y divide-black/80 sm:divide-y-0 bg-white">
            {stats.map((st, idx) => {
              // Custom grid borders for 3x2 mimicking structural beams
              let borderClass = "";
              if (idx < 3) borderClass += " lg:border-b lg:border-b-black/80";
              if (idx % 3 !== 2) borderClass += " lg:border-r lg:border-r-black/80";
              if (idx % 2 !== 1) borderClass += " sm:border-r sm:border-r-black/80";
              if (idx < 4) borderClass += " sm:border-b sm:border-b-black/80";

              return (
                <div 
                  key={idx}
                  className={`p-8 sm:p-10 flex flex-col justify-center items-center text-center bg-white ${borderClass}`}
                >
                  <span className={`block font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tighter mb-2 ${st.accent}`}>
                    {st.value}
                  </span>
                  <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest font-black">
                    {st.label}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 4: MISSION AND VISION */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Mission Card */}
            <div className="border border-black p-8 text-left bg-white flex flex-col justify-between hover:shadow-[6px_6px_0px_#1B49B8] transition-shadow duration-300">
              <div>
                <span className="font-mono text-xs font-black text-engineering-blue uppercase tracking-widest block mb-4">
                  OUR MISSION // SERVICE COMMITMENT
                </span>
                <h3 className="font-display font-black text-2xl text-black mb-4">
                  Premium Engineering Services
                </h3>
                <div className="font-sans text-gray-600 text-sm leading-relaxed space-y-4">
                  <p>
                    Committed to total customer satisfaction and nation-building, we deliver premium architectural, civil, structural, electrical, and plumbing engineering services on time and at competitive prices.
                  </p>
                  <p>
                    Grounded in a foundation of absolute client trust and high ethical standards, we leverage advanced technology and efficient management to maximize equity value.
                  </p>
                  <p>
                    Simultaneously, we maintain a secure, performance-driven environment where our employees are empowered to develop to their fullest potential.
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-4 mt-8 flex items-center justify-between font-mono text-[10px] text-gray-400">
                <span>JG_SPEC_MISSION // AUTH_A</span>
                <span>SYSTEM CORE OK</span>
              </div>
            </div>

            {/* Vision Card */}
            <div className="border border-black p-8 text-left bg-white flex flex-col justify-between hover:shadow-[6px_6px_0px_#D41D1D] transition-shadow duration-300">
              <div>
                <span className="font-mono text-xs font-black text-industrial-red uppercase tracking-widest block mb-4">
                  OUR VISION // PRIMARY GOAL
                </span>
                <h3 className="font-display font-black text-2xl text-black mb-4">
                  Your Satisfaction is Our Goal
                </h3>
                <div className="font-sans text-gray-600 text-sm leading-relaxed space-y-4">
                  <p>
                    Driven by our Trust Pledge, your absolute satisfaction stands as our primary goal. We measure our ultimate success by the ongoing confidence you place in our team. Our physical engineering schedules are optimized daily to meet strict project timelines.
                  </p>
                  <p>
                    Every architectural finish is executed to align directly with your precise design vision. Material procurement is tightly managed with precision to maximize total cost-efficiency. Ultimately, we focus our entire operational capability on delivering your ideal build safely.
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-4 mt-8 flex items-center justify-between font-mono text-[10px] text-gray-400">
                <span>JG_SPEC_VISION // AUTH_B</span>
                <span>SYSTEM TARGET OK</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: OUR QUALITY POLICY */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Graphic Column */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col">
              <div className="border-2 border-black p-3 bg-white shadow-[8px_8px_0px_#1B49B8] h-full flex flex-col justify-between">
                <div className="aspect-[10/11] bg-gray-50 overflow-hidden border border-gray-100 flex-1">
                  <img 
                    src="/src/assets/images/field_excellence_operations_1780503096054.png" 
                    alt="Inspection of on-site construction workmanship" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale" 
                  />
                </div>
                <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-gray-500 shrink-0">
                  <span>WORKMANSHIP_ANALYSIS // CO_STAMP_F5</span>
                  <span>100% RELIABLE EXECUTION</span>
                </div>
              </div>
            </div>

            {/* Right Value Stack Column */}
            <div className="lg:col-span-7 text-left order-1 lg:order-2 flex flex-col justify-between py-1">
              <span className="font-mono text-xs font-black text-industrial-red uppercase tracking-widest block mb-3">
                OUR QUALITY POLICY // SATISFACTION EARNED
              </span>
              <h2 className="font-display font-black text-3xl text-black tracking-tight leading-tight mb-4">
                We Commit to Quality and Customer Satisfaction
              </h2>
              <p className="font-sans text-gray-600 text-sm leading-relaxed mb-6">
                Quality and customer satisfaction is not imposed but earned. We want our customers to be satisfied through the quality of our works. This sentiment can only be obtained through high standards of technical competence, performance, and compliance with all laws. We lay down the groundwork for trust through our professional handling of work commitments.
              </p>

              <div className="space-y-6">
                {values.map((v) => (
                  <div key={v.num} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex items-start gap-4">
                      <div className="font-mono text-sm font-black text-industrial-red bg-gray-50 px-3 py-1 border border-gray-200 shrink-0">
                        {v.num}
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-lg text-black mb-1.5 flex items-center gap-2">
                          {v.title}
                        </h4>
                        <p className="font-sans text-sm text-gray-600 leading-relaxed">
                          {v.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: BEHIND THE TEAM */}
      <section className="py-16 bg-white border-b border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="border-b border-black pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between items-start gap-4">
            <div className="text-left">
              <span className="font-mono text-xs font-black text-industrial-red uppercase tracking-widest block mb-1">
                Leadership Team
              </span>
              <h2 className="font-display font-black text-3xl text-black tracking-tight">
                Technical Direction & Guidance
              </h2>
            </div>
            <div className="font-mono text-xs text-gray-500">
              STAFFING_ROSTER // LEAD_ADMINISTRATOR
            </div>
          </div>

          {/* Profile Split layout inside a single crisp card */}
          <div className="border-2 border-black bg-white p-5 sm:p-8 text-left relative shadow-[8px_8px_0px_#111111]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Profile Text side */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-8">
                <div>
                  <div className="mb-6">
                    <span className="font-mono text-xs font-black text-engineering-blue uppercase bg-gray-100 px-3 py-1.5 border border-gray-200 inline-block tracking-wider">
                      {founders[activeFounderIdx].tag}
                    </span>
                  </div>
                  
                  <h3 className="font-display font-black text-3xl sm:text-4xl text-black mb-4">
                    {founders[activeFounderIdx].name}
                  </h3>
                  
                  <p className="font-mono text-xs text-[#D41D1D] font-extrabold pb-3 pt-1 uppercase tracking-wider mb-6">
                    {founders[activeFounderIdx].role}
                  </p>

                  <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed md:min-h-[90px] mb-8">
                    {founders[activeFounderIdx].bio}
                  </p>
                </div>

                {/* Slider Controls */}
                <div className="pt-6 flex items-center gap-4">
                  <button 
                    onClick={prevFounder}
                    className="p-3 border-2 border-black bg-white hover:bg-gray-100 text-black transition duration-300 cursor-pointer active:scale-95"
                    aria-label="Previous leader"
                  >
                    <ChevronLeft className="h-5 w-5 stroke-[2.5]" />
                  </button>
                  
                  <div className="flex items-center gap-2 px-2">
                    {founders.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveFounderIdx(idx)}
                        className={`h-3 w-3 rounded-full border-2 border-black transition-all duration-300 cursor-pointer ${
                          activeFounderIdx === idx ? 'bg-industrial-red scale-110' : 'bg-gray-200 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to leader ${idx + 1}`}
                      />
                    ))}
                  </div>
                  
                  <button 
                    onClick={nextFounder}
                    className="p-3 border-2 border-black bg-white hover:bg-gray-100 text-black transition duration-300 cursor-pointer active:scale-95"
                    aria-label="Next leader"
                  >
                    <ChevronRight className="h-5 w-5 stroke-[2.5]" />
                  </button>
                </div>
              </div>

              {/* Profile portrait side */}
              <div className="lg:col-span-5 w-full flex items-center justify-center">
                <div className="aspect-[4/4.25] w-full max-w-sm lg:max-w-none bg-gray-100 border-2 border-black overflow-hidden shadow-[8px_8px_0px_#111111]">
                  <img 
                    src={founders[activeFounderIdx].image} 
                    alt={`${founders[activeFounderIdx].name} executive portrait`} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale block select-none" 
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 7: CALL TO ACTION (ABOUT CTA) */}
      <section className="bg-white py-16 border-t border-black relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="/src/assets/images/about_construction_site_1780503065020.png" 
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
