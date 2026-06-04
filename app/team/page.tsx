"use client";

import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import TeamCard from "@/components/TeamCard";
import { TEAM } from "@/lib/constants";

export default function TeamPage() {
  return (
    <>
      <HeroSection
        title="Meet Your Team"
        subtitle="Experienced professionals dedicated to your financial success."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Team", href: "/team" },
        ]}
      />

      <SectionWrapper className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 md:space-y-12">
          {/* Top — Founder */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <TeamCard {...TEAM[0]} index={0} featured />
            </div>
          </div>

          {/* Base row of three */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {TEAM.slice(1, 4).map((member, i) => (
              <TeamCard key={member.name} {...member} index={i + 1} />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
