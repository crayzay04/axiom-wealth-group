"use client";

export default function AxiomLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A84C" />
          <stop offset="50%" stopColor="#E2C27D" />
          <stop offset="100%" stopColor="#A8832A" />
        </linearGradient>
      </defs>
      {/* Geometric A - Triangle */}
      <path
        d="M50 8L90 88H10L50 8Z"
        stroke="url(#goldGrad)"
        strokeWidth="4"
        fill="none"
      />
      {/* Diagonal slash through the A */}
      <line
        x1="28"
        y1="65"
        x2="72"
        y2="35"
        stroke="url(#goldGrad)"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
