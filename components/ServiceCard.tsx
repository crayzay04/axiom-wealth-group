"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";

interface ServiceCardProps {
  title: string;
  icon: string;
  description: string;
  offerings?: string[];
  expanded?: boolean;
  index?: number;
}

export default function ServiceCard({
  title,
  icon,
  description,
  offerings,
  expanded = false,
  index = 0,
}: ServiceCardProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (Icons as any)[icon] || Icons.Star;

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
      className="group bg-card rounded-xl p-6 md:p-8 border border-border-gold transition-colors duration-300 hover:border-gold/50"
    >
      <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-gold/20 group-hover:scale-110">
        <IconComponent className="w-6 h-6 text-gold transition-transform duration-300 group-hover:scale-110" />
      </div>
      <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted text-sm leading-relaxed">
        {description}
      </p>
      {expanded && offerings && (
        <ul className="mt-4 space-y-2">
          {offerings.map((item) => (
            <li
              key={item}
              className="text-sm text-muted flex items-start gap-2"
            >
              <span className="text-gold mt-0.5">•</span>
              {item}
            </li>
          ))}
        </ul>
      )}
      {expanded && (
        <button className="mt-6 text-sm text-gold border border-gold/30 rounded-lg px-4 py-2 hover:bg-gold/10 transition-colors">
          Learn More
        </button>
      )}
    </motion.div>
  );
}
