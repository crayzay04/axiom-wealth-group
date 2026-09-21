"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import AxiomLogo from "./AxiomLogo";
import { NAV_LINKS } from "@/lib/constants";

const FOCUS_RING =
  "rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // While the overlay is open: lock body scroll, close on Escape, and keep Tab
  // focus inside the menu.
  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        return;
      }
      if (e.key !== "Tab" || !overlayRef.current) return;

      const focusable =
        overlayRef.current.querySelectorAll<HTMLElement>("a[href], button");
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  // Move focus to the close button on open and back to the toggle on close.
  useEffect(() => {
    if (mobileOpen) {
      closeRef.current?.focus();
    } else if (wasOpen.current) {
      toggleRef.current?.focus();
    }
    wasOpen.current = mobileOpen;
  }, [mobileOpen]);

  return (
    <>
      <nav
        aria-label="Main"
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-line"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className={`flex items-center gap-3 ${FOCUS_RING}`}>
              <AxiomLogo className="w-10 h-10" />
              <span className="text-foreground font-heading text-lg tracking-[0.15em] hidden sm:block">
                AXIOM WEALTH GROUP
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`group relative text-sm tracking-wide transition-colors ${FOCUS_RING} ${
                      active
                        ? "text-foreground"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-silver transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Toggle */}
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden p-2 -mr-2 text-foreground ${FOCUS_RING}`}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={overlayRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-4 sm:px-6 h-20">
                <Link
                  href="/"
                  className={`flex items-center gap-3 ${FOCUS_RING}`}
                  onClick={() => setMobileOpen(false)}
                >
                  <AxiomLogo className="w-10 h-10" />
                </Link>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className={`p-2 -mr-2 text-foreground ${FOCUS_RING}`}
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
              <div className="flex flex-col items-center justify-center flex-1 gap-8">
                {NAV_LINKS.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`text-3xl font-heading transition-colors ${FOCUS_RING} ${
                        active
                          ? "text-foreground underline underline-offset-8 decoration-silver decoration-1"
                          : "text-muted hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
