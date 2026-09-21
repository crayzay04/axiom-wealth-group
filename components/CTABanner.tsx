import Link from "next/link";
import SectionWrapper from "./SectionWrapper";
import { BUTTON_PRIMARY, CONTAINER, BODY_TEXT } from "@/lib/ui";

export default function CTABanner({ surface = false }: { surface?: boolean }) {
  return (
    <SectionWrapper surface={surface}>
      <div className={CONTAINER}>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between border-t border-line pt-12">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground">
              Start with a conversation.
            </h2>
            <p className={`mt-4 ${BODY_TEXT}`}>
              A first meeting costs nothing and carries no obligation. In person
              in Bakersfield, or virtual.
            </p>
          </div>
          <Link href="/contact#book" className={`${BUTTON_PRIMARY} shrink-0`}>
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
