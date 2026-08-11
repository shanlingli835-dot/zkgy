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
  const [featured, ...rest] = cards;

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

        <div
          className="ds-showcase-grid"
          style={{
            marginTop: "var(--ds-space-4xl)",
            display: "grid",
            gridTemplateColumns: "1.6fr repeat(3, 1fr)",
            gap: "var(--ds-space-xl)",
            alignItems: "stretch",
          }}
        >
          {featured ? <Card card={featured} featured /> : null}
          {rest.map((card) => (
            <Card key={card.category} card={card} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1279px) {
          .ds-showcase-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        @media (max-width: 767px) {
          .ds-showcase-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function Card({ card, featured = false }: { card: ShowcaseCard; featured?: boolean }) {
  const inverse = featured;
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "var(--ds-radius-surface)",
        overflow: "hidden",
        border: inverse
          ? "var(--ds-border-width-default) solid var(--ds-color-surface-inverse)"
          : "var(--ds-border-width-default) solid var(--ds-color-border-subtle)",
        backgroundColor: inverse
          ? "var(--ds-color-surface-inverse)"
          : "var(--ds-color-surface-default)",
        boxShadow: "var(--ds-shadow-sm)",
      }}
    >
      <header
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--ds-space-md)",
          padding: "var(--ds-space-lg) var(--ds-space-xl)",
        }}
      >
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
          style={{
            fontSize: "var(--ds-font-size-md)",
            fontWeight: "var(--ds-font-weight-semibold)",
            color: inverse ? "var(--ds-color-text-inverse)" : "var(--ds-color-text-primary)",
          }}
        >
          {card.category}
        </h3>
      </header>

      <div
        style={{
          margin: "0 var(--ds-space-lg)",
          borderRadius: "var(--ds-radius-surface)",
          backgroundColor: inverse
            ? "var(--ds-color-surface-inverse-soft)"
            : "var(--ds-color-surface-subtle)",
          padding: "var(--ds-space-xl)",
          display: "grid",
          gap: "var(--ds-space-lg)",
          flex: 1,
          gridTemplateColumns: featured ? "repeat(2, minmax(0, 1fr))" : "1fr",
          alignContent: "start",
        }}
      >
        {card.items.map((item) => (
          <div
            key={item.title}
            style={{
              borderRadius: "var(--ds-radius-control)",
              backgroundColor: inverse
                ? "var(--ds-color-surface-inverse)"
                : "var(--ds-color-surface-default)",
              border: inverse
                ? "var(--ds-border-width-default) solid var(--ds-color-border-inverse)"
                : "var(--ds-border-width-default) solid var(--ds-color-border-subtle)",
              padding: "var(--ds-space-lg)",
            }}
          >
            <p
              style={{
                fontSize: "var(--ds-font-size-sm)",
                fontWeight: "var(--ds-font-weight-semibold)",
                color: inverse ? "var(--ds-color-text-inverse)" : "var(--ds-color-text-primary)",
              }}
            >
              {item.title}
            </p>
            <p
              style={{
                marginTop: "var(--ds-space-sm)",
                fontSize: "var(--ds-font-size-sm)",
                lineHeight: 1.7,
                color: inverse
                  ? "var(--ds-color-text-inverse-secondary)"
                  : "var(--ds-color-text-secondary)",
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <footer style={{ padding: "var(--ds-space-lg) var(--ds-space-xl)" }}>
        <p
          style={{
            fontSize: "var(--ds-font-size-sm)",
            color: inverse
              ? "var(--ds-color-text-inverse-secondary)"
              : "var(--ds-color-text-secondary)",
          }}
        >
          {card.items.length} 项能力
        </p>
      </footer>
    </article>
  );
}

export default SolutionShowcaseGrid;
