import type { ReactNode } from "react";
import "./evidence-section.css";

type EvidenceText = { title: string; description: string };
type EvidenceSectionProps = {
  id: string;
  title: string;
  description: string;
  metric: EvidenceText & { value: string; suffix: string };
  steps: EvidenceText[];
  benefits: (EvidenceText & { icon: ReactNode })[];
};

export function EvidenceSection({ id, title, description, metric, steps, benefits }: EvidenceSectionProps) {
  return (
    <section className="ds-evidence" id={id} aria-labelledby={`${id}-title`}>
      <div className="ds-evidence__inner">
        <header className="ds-evidence__header">
          <h2 id={`${id}-title`}>{title}</h2>
          <p>{description}</p>
        </header>
        <div className="ds-evidence__main">
          <div className="ds-evidence__metric">
            <div className="ds-evidence__number">{metric.value}<span>{metric.suffix}</span></div>
            <h3>{metric.title}</h3>
            <p>{metric.description}</p>
          </div>
          <ol className="ds-evidence__steps">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span className="ds-evidence__index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{step.title}</h3><p>{step.description}</p></div>
              </li>
            ))}
          </ol>
        </div>
        <ul className="ds-evidence__benefits">
          {benefits.map((benefit) => (
            <li key={benefit.title}>
              <span className="ds-evidence__icon" aria-hidden="true">{benefit.icon}</span>
              <div><h3>{benefit.title}</h3><p>{benefit.description}</p></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}