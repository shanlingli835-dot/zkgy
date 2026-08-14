export type ZigzagItem = {
  title: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
};


type Props = {
  title: string;
  description?: string;
  items: ZigzagItem[];
};

export function ZigzagShowcase({ title, description, items }: Props) {
  return (
    <section style={{ padding: "var(--ds-section-y-desktop) var(--ds-gutter-desktop)" }}>
      <div style={{ maxWidth: "var(--ds-container-page)", margin: "0 auto" }}>
        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3.4vw, 2.5rem)",
              fontWeight: "var(--ds-font-weight-semibold)",
              lineHeight: 1.25,
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
                maxWidth: 780,
                color: "var(--ds-color-text-secondary)",
                fontSize: "var(--ds-font-size-md)",
                lineHeight: 1.6,
              }}
            >
              {description}
            </p>
          ) : null}
        </div>

        <div className="ds-zigzag">
          {items.map((item, i) => (
            <div key={item.title} className={`ds-zigzag-row${i % 2 === 1 ? " is-reverse" : ""}`}>
              {item.image ? (
                <img
                  className="ds-zigzag-media"
                  src={item.image}
                  alt={item.imageAlt ?? ""}
                  loading="lazy"
                  width={480}
                  height={360}
                />
              ) : (
                <div className="ds-zigzag-media" aria-hidden />
              )}
              <div className="ds-zigzag-text">
                <h3
                  style={{
                    fontSize: "var(--ds-font-size-lg)",
                    fontWeight: "var(--ds-font-weight-semibold)",
                    color: "var(--ds-color-text-primary)",
                    lineHeight: 1.35,
                  }}
                >
                  {item.title}
                </h3>
                {item.paragraphs.map((p) => (
                  <p
                    key={p}
                    style={{
                      marginTop: "var(--ds-space-md)",
                      fontSize: "var(--ds-font-size-sm)",
                      lineHeight: 1.7,
                      color: "var(--ds-color-text-secondary)",
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ds-zigzag {
          margin-top: var(--ds-space-4xl);
          display: grid;
          gap: var(--ds-space-5xl);
        }
        .ds-zigzag-row {
          display: grid;
          grid-template-columns: 480px minmax(0, 1fr);
          gap: var(--ds-space-3xl);
          align-items: center;
        }
        .ds-zigzag-row.is-reverse { grid-template-columns: minmax(0, 1fr) 480px; }
        .ds-zigzag-row.is-reverse .ds-zigzag-media { order: 2; }
        .ds-zigzag-row.is-reverse .ds-zigzag-text { order: 1; }
        .ds-zigzag-media {
          width: 480px;
          height: 360px;
          max-width: 100%;
          background-color: #F4F4F4;
          object-fit: cover;
          display: block;
        }
        .ds-zigzag-text { max-width: 520px; }
        @media (max-width: 1023px) {
          .ds-zigzag-row,
          .ds-zigzag-row.is-reverse { grid-template-columns: minmax(0, 1fr); gap: var(--ds-space-xl); }
          .ds-zigzag-row.is-reverse .ds-zigzag-media { order: 0; }
          .ds-zigzag-row.is-reverse .ds-zigzag-text { order: 0; }
          .ds-zigzag { gap: var(--ds-space-4xl); }
          .ds-zigzag-media { width: 100%; height: auto; aspect-ratio: 480 / 360; }
        }
      `}</style>
    </section>
  );
}

export default ZigzagShowcase;
