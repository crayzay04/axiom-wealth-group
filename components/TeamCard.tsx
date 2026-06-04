"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  title: string;
  image?: string;
  index?: number;
  featured?: boolean;
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
  featured = false,
}: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -8,
        boxShadow: "0 0 50px rgba(201,168,76,0.2)",
      }}
      className={`group bg-card rounded-2xl p-6 sm:p-7 text-center transition-colors duration-300 ${
        featured
          ? "border border-gold/40 hover:border-gold/70"
          : "border border-border-gold hover:border-gold/50"
      }`}
    >
      {/* Square photo slot */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-gold/30 transition-all duration-300 group-hover:border-gold/60 group-hover:shadow-[0_0_24px_rgba(201,168,76,0.25)]">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 90vw, 400px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-card to-background">
            <span className="font-heading text-6xl text-gold/50">
              {getInitials(name)}
            </span>
          </div>
        )}
      </div>

      <h3
        className={`mt-5 font-heading font-semibold text-foreground ${
          featured ? "text-2xl" : "text-xl"
        }`}
      >
        {name}
      </h3>
      <p
        className={`mt-1.5 text-gold ${featured ? "text-base" : "text-sm"}`}
      >
        {title}
      </p>
    </motion.div>
  );
}
