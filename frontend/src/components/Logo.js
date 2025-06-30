import React from 'react'

const Logo = ({ w = 320, h = 90, className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        width={w} 
        height={h} 
        viewBox="0 0 320 90" 
        className="mr-2"
      >
        <rect 
          x="5" 
          y="18" 
          width="54"
          height="54" 
          rx="9" 
          fill="#ef4444" 
          stroke="#dc2626" 
          strokeWidth="2.5"
        />
        <path 
          d="M18 27v-5.4a9 9 0 0 1 18 0v5.4" 
          stroke="white" 
          strokeWidth="4.5" 
          fill="none"
        />
        <circle cx="27" cy="45" r="2.7" fill="white" />
        <circle cx="41" cy="45" r="2.7" fill="white" />
        
        {/* Brand text - Made much bigger */}
        <text 
          x="72" 
          y="58" 
          fontSize="40" 
          fontWeight="bold" 
          fill="#1f2937"
          fontFamily="Arial, sans-serif"
        >
          ShopEase
        </text>
      </svg>
    </div>
  )
}

export default Logo