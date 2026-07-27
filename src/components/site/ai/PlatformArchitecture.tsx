/**
 * PlatformArchitecture
 *
 * Swift AI 平台整体架构图（分层堆叠式）。
 * 结构参考：顶部产品胶囊 -> 主能力层（多列，含子项）-> 支撑层 -> 底座层。
 * 仅消费 tokens.css 中的语义 token，不引入一次性视觉值。
 */

type Column = {
  title: string;
  badge?: string;
  items: string[];
};

export type PlatformArchitectureProps = {
  productName: string;
  mainLayer: { title: string; columns: Column[] };
  bands: { title: string; items: string[] }[];
  ariaLabel?: string;
};

export function PlatformArchitecture({
  productName,
  mainLayer,
  bands,
  ariaLabel,
}: PlatformArchitectureProps) {
  return (
    <div
      role="img"
      aria-label={ariaLabel ?? `${productName} 平台整体架构示意图`}
      className="sg-arch"
    >
      <style>{`
        .sg-arch {
          position: relative;
          margin-top: var(--ds-space-2xl);
          padding: var(--ds-space-2xl);
          padding-top: calc(var(--ds-space-2xl) + var(--ds-space-xl));
          border-radius: var(--ds-radius-surface);
          border: var(--ds-border-width-default) solid var(--ds-color-border-subtle);
          background:
            radial-gradient(120% 90% at 8% 0%, color-mix(in oklab, var(--ds-color-action-primary) 16%, transparent) 0%, transparent 60%),
            radial-gradient(110% 90% at 92% 8%, color-mix(in oklab, var(--ds-color-accent, var(--ds-color-action-primary)) 12%, transparent) 0%, transparent 62%),
            var(--ds-color-surface-subtle);
          display: flex;
          flex-direction: column;
          gap: var(--ds-space-lg);
        }
        .sg-arch__pill {
          position: absolute;
          top: calc(-1 * var(--ds-space-xl));
          left: 50%;
          transform: translateX(-50%);
          display: inline-flex;
          align-items: center;
          gap: var(--ds-space-sm);
          padding: var(--ds-space-md) var(--ds-space-xl);
          border-radius: var(--ds-radius-surface);
          background: var(--ds-color-surface-default);
          border: var(--ds-border-width-default) solid var(--ds-color-border-subtle);
          box-shadow: var(--ds-shadow-sm, 0 6px 18px rgba(0,0,0,0.06));
          font-size: var(--ds-font-size-lg);
          font-weight: var(--ds-font-weight-semibold);
          color: var(--ds-color-text-primary);
          white-space: nowrap;
        }
        .sg-arch__panel {
          background: color-mix(in oklab, var(--ds-color-surface-default) 88%, transparent);
          border: var(--ds-border-width-default) solid var(--ds-color-border-subtle);
          border-radius: var(--ds-radius-surface);
          padding: var(--ds-space-xl);
        }
        .sg-arch__panel-title {
          margin: 0 0 var(--ds-space-lg);
          text-align: center;
          font-size: var(--ds-font-size-lg);
          font-weight: var(--ds-font-weight-semibold);
          color: var(--ds-color-text-primary);
        }
        .sg-arch__cols {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0;
        }
        .sg-arch__col {
          padding: 0 var(--ds-space-lg);
          border-left: var(--ds-border-width-default) solid var(--ds-color-border-subtle);
          text-align: center;
        }
        .sg-arch__col:first-child { border-left: none; }
        .sg-arch__badge {
          display: inline-block;
          margin-bottom: var(--ds-space-xs);
          font-size: var(--ds-font-size-xs, 12px);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ds-color-text-secondary);
        }
        .sg-arch__col-title {
          margin: 0 0 var(--ds-space-sm);
          font-size: var(--ds-font-size-md);
          font-weight: var(--ds-font-weight-semibold);
          color: var(--ds-color-text-primary);
        }
        .sg-arch__item {
          font-size: var(--ds-font-size-sm);
          line-height: var(--ds-line-height-sm, 1.6);
          color: var(--ds-color-text-secondary);
        }
        .sg-arch__band {
          background: color-mix(in oklab, var(--ds-color-surface-default) 88%, transparent);
          border: var(--ds-border-width-default) solid var(--ds-color-border-subtle);
          border-radius: var(--ds-radius-surface);
          padding: var(--ds-space-lg) var(--ds-space-xl);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: var(--ds-space-sm) var(--ds-space-md);
          text-align: center;
        }
        .sg-arch__band-title {
          font-size: var(--ds-font-size-lg);
          font-weight: var(--ds-font-weight-semibold);
          color: var(--ds-color-text-primary);
          margin-right: var(--ds-space-md);
        }
        .sg-arch__chip {
          padding: var(--ds-space-xs) var(--ds-space-md);
          border-radius: var(--ds-radius-control);
          background: var(--ds-color-surface-subtle);
          border: var(--ds-border-width-default) solid var(--ds-color-border-subtle);
          font-size: var(--ds-font-size-sm);
          color: var(--ds-color-text-secondary);
        }
        @media (max-width: 900px) {
          .sg-arch { padding: var(--ds-space-lg); padding-top: calc(var(--ds-space-2xl) + var(--ds-space-md)); }
          .sg-arch__pill { font-size: var(--ds-font-size-md); padding: var(--ds-space-sm) var(--ds-space-lg); }
          .sg-arch__cols { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--ds-space-lg) 0; }
          .sg-arch__col:nth-child(odd) { border-left: none; }
          .sg-arch__band-title { width: 100%; margin-right: 0; }
        }
        @media (max-width: 560px) {
          .sg-arch__cols { grid-template-columns: minmax(0, 1fr); }
          .sg-arch__col { border-left: none; }
        }
      `}</style>

      <span className="sg-arch__pill">{productName}</span>

      <div className="sg-arch__panel">
        <p className="sg-arch__panel-title">{mainLayer.title}</p>
        <div className="sg-arch__cols">
          {mainLayer.columns.map((col) => (
            <div key={col.title} className="sg-arch__col">
              {col.badge ? (
                <span className="sg-arch__badge">{col.badge}</span>
              ) : null}
              <p className="sg-arch__col-title">{col.title}</p>
              {col.items.map((item) => (
                <p key={item} className="sg-arch__item">
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {bands.map((band) => (
        <div key={band.title} className="sg-arch__band">
          <span className="sg-arch__band-title">{band.title}</span>
          {band.items.map((item) => (
            <span key={item} className="sg-arch__chip">
              {item}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
