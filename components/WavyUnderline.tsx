export default function WavyUnderline({ 
  className = "",
  animate = false 
}: { 
  className?: string;
  animate?: boolean;
}) {
  return (
    <svg 
      className={`absolute w-[110%] h-4 md:h-6 -bottom-2 md:-bottom-3 left-1/2 -translate-x-1/2 text-emerald-500/70 pointer-events-none ${className}`} 
      viewBox="0 0 100 20" 
      preserveAspectRatio="none"
    >
      <path 
        d="M0,10 Q12.5,0 25,10 T50,10 T75,10 T100,10" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round"
        strokeLinejoin="round"
        {...(animate ? {
          strokeDasharray: "10",
          className: "animate-[dash_3s_linear_infinite]"
        } : {})}
      />
    </svg>
  );
}
