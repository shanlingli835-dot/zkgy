import type { ReactNode } from "react";

export type ShowcaseSubItem = {
  title: string;
  desc: string;
};

export type ShowcaseCard = {
  icon: ReactNode;
  category: string;
  items: ShowcaseSubItem[];
};

type Props = {
  title: string;
  description?: string;
  cards: ShowcaseCard[];
};

export function SolutionShowcaseGrid({ title, description, cards }: Props) {
  return (
    <section
      style={{ padding: "var(--ds-section-y-desktop) var(--ds-gutter-desktop)" }}
    >
      <div style={{ maxWidth: "var(--ds-container-page)", margin: "0 auto" }}>
        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(1.875rem, 3.6vw, 2.75rem)",
              fontWeight: "var(--ds-font-weight-semibold)",
              lineHeight: 1.2,
              color: "var(--ds-color-text-primary)",
            }}
          >
            {title}
          </h2>
          {description ? (
            <p
              style={{
                marginTop: "var(--ds-space-lg)",
                marginInline: "auto",
                maxWidth: 680,
                color: "var(--ds-color-text-secondary)",
                fontSize: "var(--ds-font-size-md)",
                lineHeight: 1.6,
              }}
            >
              {description}
            </p>
          ) : null}
        </div>

        <div className="ds-showcase-row">
          {cards.map((card, index) => (
            <Card key={card.category} card={card} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        .ds-showcase-row {
          margin-top: var(--ds-space-4xl);
          display: flex;
          flex-wrap: nowrap;
          gap: var(--ds-space-lg);
          align-items: stretch;
        }
        .ds-showcase-card {
          flex: 1 1 0;
          min-width: 0;
          display: flex;
          flex-direction: column;
          border-radius: var(--ds-radius-surface);
          background-color: var(--ds-color-surface-subtle);
          border: var(--ds-border-width-default) solid var(--ds-color-border-subtle);
          overflow: hidden;
          will-change: flex-grow;
          transition: flex-grow 420ms cubic-bezier(0.2, 0.7, 0.2, 1),
            background-color 260ms ease, border-color 260ms ease,
            box-shadow 260ms ease, color 260ms ease;
        }
        /* Neighbours shrink evenly so the row width stays fixed and nothing reflows. */
        .ds-showcase-row:hover .ds-showcase-card,
        .ds-showcase-row:focus-within .ds-showcase-card {
          flex-grow: 0.86;
        }
        .ds-showcase-row .ds-showcase-card:hover,
        .ds-showcase-row .ds-showcase-card:focus-within {
          flex-grow: 1.42;
          background-color: var(--ds-color-surface-inverse);
          border-color: var(--ds-color-surface-inverse);
          box-shadow: var(--ds-shadow-md);
        }
        @media (prefers-reduced-motion: reduce) {
          .ds-showcase-card,
          .ds-showcase-media img { transition-duration: 1ms; }
        }

        .ds-showcase-head {
          height: 72px;
          display: flex;
          align-items: center;
          gap: var(--ds-space-md);
          padding: 0 var(--ds-space-lg);
        }
        .ds-showcase-media {
          margin: 0 var(--ds-space-lg);
          height: 394px;
          border-radius: var(--ds-radius-surface);
          overflow: hidden;
          position: relative;
        }
        .ds-showcase-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 420ms cubic-bezier(0.2, 0.7, 0.2, 1);
        }
        .ds-showcase-card:hover .ds-showcase-media img,
        .ds-showcase-card:focus-within .ds-showcase-media img {
          transform: scale(1.04);
        }
        .ds-showcase-title,
        .ds-showcase-item-title {
          color: var(--ds-color-text-primary);
        }
        .ds-showcase-item-desc {
          color: var(--ds-color-text-secondary);
        }
        .ds-showcase-card:hover .ds-showcase-title,
        .ds-showcase-card:focus-within .ds-showcase-title,
        .ds-showcase-card:hover .ds-showcase-item-title,
        .ds-showcase-card:focus-within .ds-showcase-item-title {
          color: var(--ds-color-text-inverse);
        }
        .ds-showcase-card:hover .ds-showcase-item-desc,
        .ds-showcase-card:focus-within .ds-showcase-item-desc {
          color: var(--ds-color-text-inverse-secondary);
        }
        @media (max-width: 1279px) {
          .ds-showcase-row { flex-wrap: wrap; justify-content: center; }
          .ds-showcase-card { flex: 0 1 calc(50% - var(--ds-space-lg)); }
          .ds-showcase-card:hover, .ds-showcase-card:focus-within { flex-grow: 0; }
        }
        @media (max-width: 767px) {
          .ds-showcase-card { flex: 1 1 100%; }
          .ds-showcase-media { height: 260px; }
        }
      `}</style>
    </section>
  );
}

const PLACEHOLDERS = [
  "linear-gradient(160deg, #B23A2E 0%, #6E1F18 100%)",
  "linear-gradient(160deg, #0E5A5A 0%, #093838 100%)",
  "linear-gradient(160deg, #2B3A55 0%, #121518 100%)",
  "linear-gradient(160deg, #C2703A 0%, #7A3E16 100%)",
];

function Card({ card, index }: { card: ShowcaseCard; index: number }) {
  return (
    <article className="ds-showcase-card" tabIndex={0}>
      <header className="ds-showcase-head">
        <span
          aria-hidden
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 32,
            height: 32,
            borderRadius: "var(--ds-radius-control)",
            backgroundColor: "var(--ds-color-action-primary)",
            color: "var(--ds-color-action-primary-foreground)",
            flexShrink: 0,
          }}
        >
          {card.icon}
        </span>
        <h3
          className="ds-showcase-title"
          style={{
            fontSize: "var(--ds-font-size-md)",
            fontWeight: "var(--ds-font-weight-semibold)",
          }}
        >
          {card.category}
        </h3>
      </header>

      <div
        className="ds-showcase-media"
        style={{ background: PLACEHOLDERS[index % PLACEHOLDERS.length] }}
        aria-hidden
      />

      <div
        style={{
          padding: "var(--ds-space-lg)",
          display: "grid",
          gap: "var(--ds-space-lg)",
          alignContent: "start",
        }}
      >
        {card.items.map((item) => (
          <div key={item.title}>
            <p
              className="ds-showcase-item-title"
              style={{
                fontSize: "var(--ds-font-size-sm)",
                fontWeight: "var(--ds-font-weight-semibold)",
              }}
            >
              {item.title}
            </p>
            <p
              className="ds-showcase-item-desc"
              style={{
                marginTop: "var(--ds-space-sm)",
                fontSize: "var(--ds-font-size-sm)",
                lineHeight: 1.7,
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default SolutionShowcaseGrid;
