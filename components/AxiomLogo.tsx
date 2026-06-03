"use client";

import Image from "next/image";

export default function AxiomLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <Image
        src="/logo-mark.png"
        alt="Axiom Wealth Group"
        fill
        sizes="48px"
        className="object-contain"
        priority
      />
    </span>
  );
}
