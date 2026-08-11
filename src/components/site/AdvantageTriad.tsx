import type { ReactNode } from "react";

export type AdvantageTriadItem = {
  icon: ReactNode;
  title: string;
  desc: string;
};

type AdvantageTriadProps = {
  title: string;
  description?: string;
  items: AdvantageTriadItem[];
  columns?: 3 | 4;
};

export function AdvantageTriad({ title, description, items, columns = 3 }: AdvantageTriadProps) {
  return (
    <section
      style={{
        padding: "var(--ds-section-y-desktop) var(--ds-gutter-desktop)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--ds-container-page)",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.75rem, 3.4vw, 2.5rem)",
            fontWeight: "var(--ds-font-weight-semibold)",
            lineHeight: 1.25,
            color: "var(--ds-color-text-primary)",
            maxWidth: 960,
            margin: "0 auto",
          }}
        >
          {title}
        </h2>
        {description ? (
          <p
            style={{
              marginTop: "var(--ds-space-lg)",
              maxWidth: 780,
              marginInline: "auto",
              color: "var(--ds-color-text-secondary)",
              fontSize: "var(--ds-font-size-md)",
              lineHeight: 1.6,
            }}
          >
            {description}
          </p>
        ) : null}

        <div
          className="ds-adv-triad-grid"
          style={{
            marginTop: "var(--ds-space-4xl)",
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "var(--ds-space-4xl)",
            textAlign: "left",
          }}
        >
          {items.map((it) => (
            <div
              key={it.title}
              style={{ display: "flex", flexDirection: "column", gap: "var(--ds-space-lg)" }}
            >
              <div style={{ color: "var(--ds-color-text-primary)" }}>{it.icon}</div>
              <h3
                style={{
                  fontSize: "var(--ds-font-size-lg)",
                  fontWeight: "var(--ds-font-weight-semibold)",
                  color: "var(--ds-color-text-primary)",
                }}
              >
                {it.title}
              </h3>
              <p
                style={{
                  fontSize: "var(--ds-font-size-md)",
                  color: "var(--ds-color-text-secondary)",
                  lineHeight: 1.7,
                }}
              >
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 1023px) {
          .ds-adv-triad-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        @media (max-width: 639px) {
          .ds-adv-triad-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default AdvantageTriad;
