"use client";

import { motion } from "framer-motion";
import AxiomLogo from "@/components/AxiomLogo";

export default function PortalPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md bg-card rounded-xl border border-border-gold p-8 md:p-10"
      >
        <div className="flex justify-center mb-6">
          <AxiomLogo className="w-14 h-14" />
        </div>
        <h1 className="text-2xl font-heading font-bold text-foreground text-center mb-2">
          Client Portal
        </h1>
        <p className="text-muted text-sm text-center mb-8">
          Securely access your financial dashboard.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="space-y-5"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-muted mb-1.5"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className="w-full bg-background border border-border-gold rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm text-muted mb-1.5"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              className="w-full bg-background border border-border-gold rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full gold-gradient-bg text-background font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            Sign In
          </button>
        </form>

        <div className="text-center mt-4">
          <a
            href="#"
            className="text-xs text-muted hover:text-gold transition-colors"
          >
            Forgot Password?
          </a>
        </div>
        <p className="text-muted/50 text-[10px] text-center mt-6">
          Portal access is provided to active Axiom Wealth Group clients only.
        </p>
      </motion.div>
    </div>
  );
}
