"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import AxiomLogo from "./AxiomLogo";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border-gold"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <AxiomLogo className="w-10 h-10" />
              <span
                className="text-foreground font-heading text-lg tracking-widest hidden sm:block"
                style={{ letterSpacing: "0.15em" }}
              >
                AXIOM WEALTH GROUP
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors hover:text-gold ${
                    pathname === link.href
                      ? "text-gold"
                      : "text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Client Portal + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="/portal"
                className="hidden sm:inline-flex text-sm border border-gold/40 text-gold px-5 py-2 rounded-lg hover:bg-gold/10 transition-colors"
              >
                Client Portal
              </Link>
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden text-foreground"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-4 h-20">
                <Link
                  href="/"
                  className="flex items-center gap-3"
                  onClick={() => setMobileOpen(false)}
                >
                  <AxiomLogo className="w-10 h-10" />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-foreground" />
                </button>
              </div>
              <div className="flex flex-col items-center justify-center flex-1 gap-8">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`text-2xl font-heading ${
                        pathname === link.href
                          ? "text-gold"
                          : "text-foreground hover:text-gold"
                      } transition-colors`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: NAV_LINKS.length * 0.05 }}
                >
                  <Link
                    href="/portal"
                    onClick={() => setMobileOpen(false)}
                    className="text-lg border border-gold/40 text-gold px-6 py-3 rounded-lg hover:bg-gold/10 transition-colors"
                  >
                    Client Portal
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
