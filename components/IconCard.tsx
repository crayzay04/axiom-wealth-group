import { ICONS } from "./icons";

interface IconCardProps {
  title: string;
  icon: string;
  description: string;
  children?: React.ReactNode;
}

// Base card for the design system: card fill, line border, silver icon.
export default function IconCard({
  title,
  icon,
  description,
  children,
}: IconCardProps) {
  const Icon = ICONS[icon];

  return (
    <div className="h-full bg-card rounded-xl p-6 md:p-8 border border-line transition-colors duration-200 hover:border-line-gold">
      {Icon && (
        <div className="w-12 h-12 rounded-lg border border-line flex items-center justify-center mb-5">
          <Icon className="w-5 h-5 text-silver" aria-hidden="true" />
        </div>
      )}
      <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-base leading-[1.7] text-foreground">{description}</p>
      {children}
    </div>
  );
}
