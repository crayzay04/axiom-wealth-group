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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Tier 1 — Founder */}
          <div className="flex justify-center">
            <div className="w-full sm:w-72">
              <TeamCard {...TEAM[0]} index={0} />
            </div>
          </div>

          {/* Tier 2 */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {TEAM.slice(1, 3).map((member, i) => (
              <div key={member.name} className="w-full sm:w-72">
                <TeamCard {...member} index={i + 1} />
              </div>
            ))}
          </div>

          {/* Tier 3 */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {TEAM.slice(3, 6).map((member, i) => (
              <div key={member.name} className="w-full sm:w-72">
                <TeamCard {...member} index={i + 3} />
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
