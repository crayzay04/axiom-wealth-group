import { BROKERCHECK_URL } from "@/lib/constants";
import ConfirmText from "./ConfirmText";

interface BrokerCheckLinkProps {
  name: string;
  url: string | null;
  className?: string;
}

// Per-person BrokerCheck reference (FINRA Rule 2210(d)(8)). Falls back to the
// BrokerCheck home page until the person's profile URL is supplied.
export default function BrokerCheckLink({
  name,
  url,
  className = "",
}: BrokerCheckLinkProps) {
  return (
    <p className={`text-sm text-muted ${className}`}>
      <a
        href={url ?? BROKERCHECK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-silver underline underline-offset-4 decoration-line hover:text-foreground transition-colors"
        aria-label={`Check the background of ${name} on FINRA's BrokerCheck`}
      >
        BrokerCheck
      </a>
      {!url && (
        <>
          {" "}
          <ConfirmText
            text={`[[CONFIRM: BrokerCheck URL or CRD number for ${name}]]`}
          />
        </>
      )}
    </p>
  );
}
