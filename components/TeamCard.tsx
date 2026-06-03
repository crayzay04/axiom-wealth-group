"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface TeamCardProps {
  name: string;
  title: string;
  image: string;
  index?: number;
}

export default function TeamCard({
  name,
  title,
  image,
  index = 0,
}: TeamCardProps) {
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
      className="group bg-card rounded-xl p-6 text-center border border-border-gold hover:border-gold/50 transition-colors duration-300"
    >
      <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gold/30 transition-all duration-300 group-hover:border-gold/60 group-hover:shadow-[0_0_20px_rgba(201,168,76,0.25)]">
        <Image
          src={image}
          alt={name}
          width={112}
          height={112}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="text-lg font-heading font-semibold text-foreground">
        {name}
      </h3>
      <p className="text-gold text-sm mt-1">{title}</p>
      <a
        href="#"
        className="inline-flex items-center gap-1 text-gold/60 hover:text-gold text-sm mt-4 transition-colors"
      >
        <ExternalLink className="w-4 h-4" />
        LinkedIn
      </a>
    </motion.div>
  );
}
