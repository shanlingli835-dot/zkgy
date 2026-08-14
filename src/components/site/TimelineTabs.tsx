import { useState } from "react";

export type TimelineGroup = {
  label: string;
  events: string[];
};

type Props = {
  title: string;
  description?: string;
  groups: TimelineGroup[];
};

export function TimelineTabs({ title, description, groups }: Props) {
  const [active, setActive] = useState(0);
  const current = groups[active];

  return (
    <section
      style={{
        backgroundColor: "var(--ds-color-surface-inverse)",
        paddingBlock: "var(--ds-section-y-desktop)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--ds-container-page)",
          margin: "0 auto",
          paddingInline: "var(--ds-gutter-desktop)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.75rem, 3.2vw, 2.25rem)",
            fontWeight: "var(--ds-font-weight-semibold)",
            lineHeight: 1.3,
            color: "var(--ds-color-text-inverse)",
          }}
        >
          {title}
        </h2>
        {description ? (
          <p
            style={{
              marginTop: "var(--ds-space-lg)",
              marginInline: "auto",
              maxWidth: 640,
              fontSize: "var(--ds-font-size-sm)",
              lineHeight: 1.7,
              color: "var(--ds-color-text-inverse-secondary)",
            }}
          >
            {description}
          </p>
        ) : null}
      </div>

      <div
        className="ds-timeline-tabs"
        role="tablist"
        aria-label={title}
        style={{ borderBottom: "1px solid var(--ds-color-border-inverse)" }}
      >
        {groups.map((group, i) => (
          <button
            key={group.label}
            type="button"
            role="tab"
            id={`timeline-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`timeline-panel-${i}`}
            onClick={() => setActive(i)}
            className={`ds-timeline-tab${active === i ? " is-active" : ""}${group.label === "2025年" ? " is-year-2025" : ""}`}
          >
            {group.label}
          </button>
        ))}
      </div>

      <div
        style={{
          maxWidth: "var(--ds-container-page)",
          margin: "0 auto",
          paddingInline: "var(--ds-gutter-desktop)",
          paddingTop: "var(--ds-space-4xl)",
        }}
      >
        <div
          role="tabpanel"
          id={`timeline-panel-${active}`}
          aria-labelledby={`timeline-tab-${active}`}
          className="ds-timeline-panel"
        >
          {current.events.map((event) => (
            <div key={event}>
              <h3
                style={{
                  fontSize: "var(--ds-font-size-2xl)",
                  fontWeight: "var(--ds-font-weight-semibold)",
                  color: "var(--ds-color-text-inverse)",
                  lineHeight: 1.3,
                }}
              >
                {current.label}
              </h3>
              <p
                style={{
                  marginTop: "var(--ds-space-lg)",
                  fontSize: "var(--ds-font-size-sm)",
                  lineHeight: 1.7,
                  color: "var(--ds-color-text-inverse-secondary)",
                }}
              >
                {event}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ds-timeline-tabs {
          margin-top: var(--ds-space-4xl);
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: var(--ds-space-2xl);
          padding-inline: var(--ds-gutter-desktop);
        }
        .ds-timeline-tab {
          appearance: none;
          background: none;
          border: 0;
          border-bottom: 2px solid transparent;
          margin-bottom: -1px;
          padding: var(--ds-space-md) var(--ds-space-xs);
          font-size: var(--ds-font-size-sm);
          font-weight: var(--ds-font-weight-medium);
          color: var(--ds-color-text-inverse-muted);
          cursor: pointer;
          transition: color var(--ds-duration-fast) var(--ds-ease-standard);
        }
        .ds-timeline-tab:hover { color: var(--ds-color-text-inverse); }
        .ds-timeline-tab:focus-visible {
          outline: 2px solid rgb(20, 115, 230);
          outline-offset: 2px;
        }
        .ds-timeline-tab.is-active {
          color: rgb(20, 115, 230);
          font-weight: var(--ds-font-weight-semibold);
          border-bottom-color: rgb(20, 115, 230);
        }
        .ds-timeline-tab.is-year-2025.is-active {
          color: var(--ds-color-text-inverse);
          border-bottom-color: rgb(20, 115, 230);
        }
        .ds-timeline-panel {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: var(--ds-space-3xl) var(--ds-space-2xl);
          text-align: left;
        }
        @media (max-width: 1023px) {
          .ds-timeline-panel { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .ds-timeline-tabs { gap: var(--ds-space-lg); padding-inline: var(--ds-gutter-mobile); }
        }
        @media (max-width: 639px) {
          .ds-timeline-panel { grid-template-columns: minmax(0, 1fr); }
        }
      `}</style>
    </section>
  );
}

export default TimelineTabs;
