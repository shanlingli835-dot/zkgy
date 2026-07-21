import { useId } from "react";

import { CallToAction } from "@/components/ui/call-to-action";

import "./marketing-cta-band.css";

type MarketingCtaBandProps = {
  title: string;
  description?: string;
  action: {
    label: string;
    href: string;
  };
  headingId?: string;
};

/**
 * MarketingCtaBand
 *
 * Canonical compact CTA immediately before the global footer. Pages provide
 * source-approved copy and a single destination; layout and visual treatment
 * stay owned by this component.
 */
export function MarketingCtaBand({ action, description, headingId, title }: MarketingCtaBandProps) {
  const generatedId = useId();
  const titleId = headingId ?? `marketing-cta-band-${generatedId}`;

  return (
    <section className="marketing-cta-band" aria-labelledby={titleId}>
      <div className="marketing-cta-band__inner">
        <div className="marketing-cta-band__copy">
          <h2 id={titleId}>{title}</h2>
          {description && <p>{description}</p>}
        </div>
        <CallToAction to={action.href} hierarchy="primary" tone="marketing-band">
          {action.label}
        </CallToAction>
      </div>
    </section>
  );
}

export type { MarketingCtaBandProps };
