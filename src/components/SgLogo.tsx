import React from 'react';

interface SgLogoProps {
  className?: string;
}

export default function SgLogo({ className = "h-8 w-8" }: SgLogoProps) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background structural blueprint grid lines */}
      <circle cx="50" cy="50" r="45" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="10" y1="50" x2="90" y2="50" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="50" y1="10" x2="50" y2="90" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="2 2" />
      
      {/* Left Facet: Industrial Red - Truss structure */}
      <path 
        d="M50 15 L20 50 L50 85" 
        stroke="#D41D1D" 
        strokeWidth="6" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      {/* Structural cross web */}
      <path 
        d="M20 50 L50 50" 
        stroke="#D41D1D" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle cx="20" cy="50" r="4.5" fill="#111" />
      
      {/* Right Facet: Engineering Blue - Truss structure */}
      <path 
        d="M50 15 L80 50 L50 85" 
        stroke="#1B49B8" 
        strokeWidth="6" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      {/* Structural cross web */}
      <path 
        d="M80 50 L50 50" 
        stroke="#1B49B8" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle cx="80" cy="50" r="4.5" fill="#111" />
      
      {/* Joint intersections / Structural pins */}
      <circle cx="50" cy="15" r="4.5" fill="#111" />
      <circle cx="50" cy="85" r="4.5" fill="#111" />
      
      {/* Central main connector node */}
      <circle cx="50" cy="50" r="6" fill="#111" stroke="#FFFFFF" strokeWidth="2" />
    </svg>
  );
}
