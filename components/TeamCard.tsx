"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  title: string;
  image?: string;
  index?: number;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
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
      className="group bg-card rounded-xl p-4 text-center border border-border-gold hover:border-gold/50 transition-colors duration-300"
    >
      {/* Square photo slot */}
      <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-gold/30 transition-all duration-300 group-hover:border-gold/60 group-hover:shadow-[0_0_20px_rgba(201,168,76,0.25)]">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, 280px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-card to-background">
            <span className="font-heading text-5xl text-gold/50">
              {getInitials(name)}
            </span>
          </div>
        )}
      </div>

      <h3 className="mt-4 text-lg font-heading font-semibold text-foreground">
        {name}
      </h3>
      <p className="mt-1 text-gold text-sm">{title}</p>
    </motion.div>
  );
}
