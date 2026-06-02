import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Wealth management, retirement, investment advisory, tax, estate, and insurance planning — comprehensive strategies tailored to your goals.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
