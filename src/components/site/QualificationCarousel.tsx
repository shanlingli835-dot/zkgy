export type QualificationItem = {
  id: string;
  name: string;
  image?: string;
};

type Props = {
  title: string;
  items: QualificationItem[];
};

export function QualificationCarousel({ title, items }: Props) {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "var(--ds-section-y-desktop) var(--ds-gutter-desktop)",
      }}
    >
      <div style={{ maxWidth: "var(--ds-container-page)", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)",
            fontWeight: "var(--ds-font-weight-semibold)",
            lineHeight: 1.2,
            color: "var(--ds-color-text-primary)",
            marginBottom: "var(--ds-space-3xl)",
          }}
        >
          {title}
        </h2>

        <div className="ds-qual-grid">
          {items.map((item) => (
            <figure key={item.id} className="ds-qual-item">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="ds-qual-media ds-qual-image"
                />
              ) : (
                <div className="ds-qual-media" aria-hidden />
              )}

              <figcaption className="ds-qual-caption">{item.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <style>{`
        .ds-qual-grid {
          --ds-qual-columns: 6;
          --ds-qual-gap-x: var(--ds-space-xl);
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: var(--ds-space-2xl) var(--ds-qual-gap-x);
        }
        .ds-qual-item {
          flex: 0 1
            calc(
              (100% - (var(--ds-qual-columns) - 1) * var(--ds-qual-gap-x)) /
                var(--ds-qual-columns)
            );
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--ds-space-md);
        }
        .ds-qual-media {
          width: 100%;
          aspect-ratio: 3 / 4;
          border-radius: var(--ds-radius-surface);
          background: #ffffff;
          border: 1px solid #d9d9d9;
        }
        .ds-qual-image {
          object-fit: contain;
          display: block;
        }
        .ds-qual-caption {
          text-align: center;
          font-size: var(--ds-font-size-sm);
          line-height: 1.5;
          color: var(--ds-color-text-primary);
        }
        @media (max-width: 1024px) {
          .ds-qual-grid { --ds-qual-columns: 3; }
        }
        @media (max-width: 640px) {
          .ds-qual-grid { --ds-qual-columns: 2; }
        }
      `}</style>
    </section>
  );
}
