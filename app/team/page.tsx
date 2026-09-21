import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import TeamCard from "@/components/TeamCard";
import { TEAM } from "@/lib/constants";
import { CONTAINER } from "@/lib/ui";

export default function TeamPage() {
  return (
    <>
      <HeroSection
        title="Meet Your Team"
        subtitle="The people who will know your plan by name."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Team", href: "/team" },
        ]}
      />

      <SectionWrapper surface>
        <div className={`${CONTAINER} space-y-8`}>
          {/* Top: founder */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <TeamCard {...TEAM[0]} featured />
            </div>
          </div>

          {/* Base row of three */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.slice(1, 4).map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
