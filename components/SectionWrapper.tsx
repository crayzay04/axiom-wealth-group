"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  surface?: boolean;
}

// The only scroll-triggered animation on the site: a single fade-up on entry.
export default function SectionWrapper({
  children,
  className = "",
  id,
  surface = false,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`py-24 md:py-32 ${
        surface ? "bg-surface" : "bg-background"
      } ${className}`}
    >
      {children}
    </motion.section>
  );
}
