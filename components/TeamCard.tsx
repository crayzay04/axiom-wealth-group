import Image from "next/image";
import type { TeamMember } from "@/lib/constants";
import BrokerCheckLink from "./BrokerCheckLink";
import ConfirmText from "./ConfirmText";

interface TeamCardProps extends TeamMember {
  featured?: boolean;
}

export default function TeamCard({
  name,
  title,
  image,
  bio,
  credentials,
  brokerCheckUrl,
  featured = false,
}: TeamCardProps) {
  return (
    <article className="bg-card rounded-xl p-6 border border-line transition-colors duration-200 hover:border-line-gold">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-line">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 90vw, 400px"
          className="object-cover object-top"
        />
      </div>

      <h3
        className={`mt-5 font-heading font-semibold text-foreground ${
          featured ? "text-2xl" : "text-xl md:text-2xl"
        }`}
      >
        {name}
      </h3>
      <p className="mt-1 text-sm text-muted">{title}</p>
      {credentials.length > 0 && (
        <p className="mt-1 text-sm text-silver">{credentials.join(", ")}</p>
      )}
      <p className="mt-4 text-base leading-[1.7] text-foreground">
        <ConfirmText text={bio} />
      </p>
      <BrokerCheckLink name={name} url={brokerCheckUrl} className="mt-4" />
    </article>
  );
}
