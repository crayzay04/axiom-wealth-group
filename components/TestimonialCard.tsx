"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  descriptor: string;
  rating: number;
  index?: number;
}

export default function TestimonialCard({
  quote,
  name,
  descriptor,
  rating,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -6,
        boxShadow: "0 0 40px rgba(201,168,76,0.18)",
      }}
      className="group bg-card rounded-xl p-6 md:p-8 border border-border-gold hover:border-gold/50 transition-colors duration-300"
    >
      <Quote className="w-8 h-8 text-gold/40 mb-4 transition-all duration-300 group-hover:text-gold/70 group-hover:scale-110" />
      <p className="text-foreground/90 text-sm md:text-base leading-relaxed italic">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-1 mt-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 text-gold fill-gold"
          />
        ))}
      </div>
      <p className="text-muted text-sm mt-2">
        — {name}, <span className="text-gold/80">{descriptor}</span>
      </p>
    </motion.div>
  );
}
