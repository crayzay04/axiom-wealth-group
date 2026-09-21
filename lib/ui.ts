// Shared class strings for the two button styles in the design system.
const BUTTON_BASE =
  "inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60 disabled:cursor-not-allowed";

export const BUTTON_PRIMARY = `${BUTTON_BASE} bg-gold text-background hover:bg-gold-deep`;

export const BUTTON_SECONDARY = `${BUTTON_BASE} border border-silver text-foreground hover:bg-surface`;

export const CONTAINER = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";

export const BODY_TEXT = "text-base md:text-[17px] leading-[1.7] text-foreground";
