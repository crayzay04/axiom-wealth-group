"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export default function StatCounter({
  value,
  prefix = "",
  suffix = "",
  label,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const step = value / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start * 10) / 10);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const displayValue =
    value % 1 !== 0 ? count.toFixed(1) : Math.floor(count).toString();

  return (
    <motion.div
      ref={ref}
      className="text-center px-6 py-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-3xl md:text-4xl font-heading font-bold text-gold">
        {prefix}
        {displayValue}
        {suffix}
      </p>
      <p className="text-muted text-sm mt-1 tracking-wide uppercase" style={{ letterSpacing: "0.15em" }}>
        {label}
      </p>
    </motion.div>
  );
}
