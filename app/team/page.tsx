"use client";

import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import TeamCard from "@/components/TeamCard";
import { TEAM } from "@/lib/constants";

export default function TeamPage() {
  return (
    <>
      <HeroSection
        title="Meet Your Advisory Team"
        subtitle="Experienced advisors dedicated to your financial success."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Team", href: "/team" },
        ]}
      />

      <SectionWrapper className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((member, i) => (
              <TeamCard key={member.name} {...member} index={i} />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
