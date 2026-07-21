import { CallToAction } from "@/components/ui/call-to-action";
import type { ProductModule, ProductPageRecord } from "@/content/pages/product";

import { MarketingCtaBand } from "./MarketingCtaBand";
import "./product-template.css";

type ProductTemplateProps = {
  page: ProductPageRecord;
};

export function ProductTemplate({ page }: ProductTemplateProps) {
  return (
    <article className="product-page">
      <section className="product-hero" aria-labelledby="product-hero-title">
        <div className="product-container product-hero__layout">
          <div className="product-hero__copy">
            <p className="product-eyebrow product-eyebrow--inverse">{page.hero.eyebrow}</p>
            <h1 id="product-hero-title">{page.hero.title}</h1>
            <p className="product-hero__description">{page.hero.description}</p>
            <CallToAction to={page.hero.primaryCta.href} hierarchy="primary">
              {page.hero.primaryCta.label}
            </CallToAction>
            <ul className="product-hero__signals" aria-label={`${page.hero.eyebrow}产品特点`}>
              {page.hero.signals.map((signal) => (
                <li key={signal}>{signal}</li>
              ))}
            </ul>
          </div>

          <div className="product-flow" aria-label={`${page.hero.eyebrow}测试流程`}>
            <p className="product-flow__label">{page.hero.flowTitle}</p>
            <ol>
              {page.hero.flow.map((step, index) => (
                <li key={step}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {page.modules.map((module) => (
        <ProductModuleSection key={module.id} module={module} />
      ))}

      <MarketingCtaBand
        title={page.bottomCta.title}
        description={page.bottomCta.description}
        action={page.bottomCta.primaryCta}
      />
    </article>
  );
}

function ProductModuleSection({ module }: { module: ProductModule }) {
  switch (module.type) {
    case "value":
      return <ValueSection module={module} />;
    case "capabilities":
      return <CapabilitySection module={module} />;
    case "advantages":
      return <AdvantageSection module={module} />;
    case "protocol":
      return <ProtocolSection module={module} />;
    case "integration":
      return <IntegrationSection module={module} />;
  }
}

function SectionHeading({ module }: { module: ProductModule }) {
  return (
    <div className="product-section-heading">
      {module.eyebrow && <p className="product-eyebrow">{module.eyebrow}</p>}
      <h2 id={`${module.id}-title`}>{module.title}</h2>
      {module.description && <p>{module.description}</p>}
    </div>
  );
}

function ValueSection({ module }: { module: ProductModule }) {
  return (
    <section className="product-section" aria-labelledby={`${module.id}-title`}>
      <div className="product-container product-value__layout">
        <SectionHeading module={module} />
        <div className="product-value__list">
          {module.items.map((item) => (
            <article className="product-value__item" key={item.id}>
              <strong className="product-value__marker">{item.marker}</strong>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilitySection({ module }: { module: ProductModule }) {
  return (
    <section
      className="product-section product-section--surface"
      aria-labelledby={`${module.id}-title`}
    >
      <div className="product-container">
        <SectionHeading module={module} />
        <div className="product-capability-list">
          {module.items.map((item, index) => (
            <article key={item.id}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdvantageSection({ module }: { module: ProductModule }) {
  return (
    <section
      className="product-section product-section--muted"
      aria-labelledby={`${module.id}-title`}
    >
      <div className="product-container product-advantage__layout">
        <SectionHeading module={module} />
        <div className="product-advantage__list">
          {module.items.map((item) => (
            <article key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProtocolSection({ module }: { module: ProductModule }) {
  return (
    <section className="product-section" aria-labelledby={`${module.id}-title`}>
      <div className="product-container product-protocol__layout">
        <div>
          <SectionHeading module={module} />
          {module.cta && (
            <CallToAction to={module.cta.href} hierarchy="secondary">
              {module.cta.label}
            </CallToAction>
          )}
        </div>
        <ol className="product-protocol__steps">
          {module.items.map((item) => (
            <li key={item.id}>
              <span aria-hidden="true">{item.marker}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function IntegrationSection({ module }: { module: ProductModule }) {
  return (
    <section
      className="product-section product-section--surface"
      aria-labelledby={`${module.id}-title`}
    >
      <div className="product-container">
        <SectionHeading module={module} />
        <div className="product-integration__list">
          {module.items.map((item) => (
            <article key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
