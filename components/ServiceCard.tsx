import IconCard from "./IconCard";

interface ServiceCardProps {
  title: string;
  icon: string;
  description: string;
  offerings: string[];
}

export default function ServiceCard({
  title,
  icon,
  description,
  offerings,
}: ServiceCardProps) {
  return (
    <IconCard title={title} icon={icon} description={description}>
      <ul className="mt-5 space-y-2 border-t border-line pt-5">
        {offerings.map((item) => (
          <li key={item} className="text-sm text-muted flex items-start gap-3">
            <span
              aria-hidden="true"
              className="mt-[9px] h-px w-3 shrink-0 bg-silver"
            />
            {item}
          </li>
        ))}
      </ul>
    </IconCard>
  );
}
