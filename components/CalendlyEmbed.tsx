import ConfirmText from "./ConfirmText";
import { SITE } from "@/lib/constants";

// Calendly inline embed. Set NEXT_PUBLIC_CALENDLY_URL to the booking link
// (for example https://calendly.com/your-handle/consultation).
function buildEmbedUrl(raw: string): string | null {
  try {
    const url = new URL(raw);
    if (url.protocol !== "https:") return null;
    url.searchParams.set("embed_domain", new URL(SITE.url).host);
    url.searchParams.set("embed_type", "Inline");
    url.searchParams.set("hide_gdpr_banner", "1");
    url.searchParams.set("background_color", "1a1816");
    url.searchParams.set("text_color", "f1ede4");
    url.searchParams.set("primary_color", "cfb16b");
    return url.toString();
  } catch {
    return null;
  }
}

export default function CalendlyEmbed() {
  const embedUrl = buildEmbedUrl(process.env.NEXT_PUBLIC_CALENDLY_URL ?? "");

  if (!embedUrl) {
    return (
      <div className="bg-card rounded-xl border border-line p-10">
        <p className="text-base leading-[1.7] text-foreground">
          <ConfirmText text="[[CONFIRM: Calendly or booking link]]" />
        </p>
        <p className="mt-3 text-sm text-muted">
          Online booking appears here once the link is set. Until then, use the
          form below or call {SITE.phone}.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-card">
      <iframe
        title="Book a time with Axiom Wealth Group"
        src={embedUrl}
        className="block h-[700px] w-full border-0"
        loading="lazy"
      />
    </div>
  );
}
