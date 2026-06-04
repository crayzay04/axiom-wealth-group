"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ShaderAnimation = dynamic(
  () => import("@/components/ui/shader-lines").then((m) => m.ShaderAnimation),
  { ssr: false }
);

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href: string }[];
  showCTA?: boolean;
  showScroll?: boolean;
  fullHeight?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  breadcrumb,
  showCTA = false,
  showScroll = false,
  fullHeight = false,
}: HeroSectionProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className={`relative ${
        fullHeight ? "min-h-screen" : "pt-32 pb-20"
      } flex items-center justify-center overflow-hidden`}
    >
      {/* Shader animation background (home hero only) */}
      {fullHeight && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.18,
            filter: "sepia(0.6) hue-rotate(10deg) saturate(1.4)",
            mixBlendMode: "screen",
          }}
        >
          <ShaderAnimation />
        </div>
      )}

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px]" />
      </div>

      {/* Floating geometric grid (sub-pages only) */}
      {!fullHeight && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute border border-gold/5 rounded-sm animate-float"
              style={{
                width: `${20 + Math.random() * 30}px`,
                height: `${20 + Math.random() * 30}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {breadcrumb && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            {breadcrumb.map((item, i) => (
              <span key={item.label} className="text-sm text-muted">
                {i > 0 && <span className="mx-2">›</span>}
                <a
                  href={item.href}
                  className="hover:text-gold transition-colors"
                >
                  {item.label}
                </a>
              </span>
            ))}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`font-heading font-bold leading-tight ${
            fullHeight
              ? "text-4xl sm:text-5xl md:text-7xl gold-shimmer"
              : "text-3xl sm:text-4xl md:text-5xl text-foreground"
          }`}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted text-base md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {showCTA && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="/contact"
              className="gold-gradient-bg text-background font-semibold px-8 py-3.5 rounded-lg text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(201,168,76,0.4)] active:scale-[0.98]"
            >
              Schedule a Consultation
            </a>
            <a
              href="/services"
              className="border border-gold/25 text-gold/70 px-6 py-3 rounded-lg text-xs tracking-wide transition-all duration-200 hover:bg-gold/10 hover:text-gold hover:border-gold/50 hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore Our Services
            </a>
          </motion.div>
        )}
      </div>

      {showScroll && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: scrolled ? 0 : 1 }}
          transition={{ delay: scrolled ? 0 : 1.2, duration: 0.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-6 h-6 text-gold/50" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
