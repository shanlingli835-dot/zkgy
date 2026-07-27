import type { CSSProperties, ReactNode } from "react";

import { GlobalHeader } from "@/components/site/GlobalHeader";
import { SiteShell } from "@/components/site/SiteShell";
import { SourceHomeEmbed } from "@/components/site/SourceHomeEmbed";

/**
 * 共享的产品/方案/服务/公司页脚 + CTA 区域。
 * 复用首页 public/source-site/index.html 的 .solution-cta-bar + .jasper-footer。
 * 其他首页模块通过 hiddenSelectors 隐藏，保证视觉一致。
 */
export const HOME_FOOTER_HIDDEN_SELECTORS = [
  "header.site-header",
  "main > .jasper-hero-shell",
  "main > .jasper-logo-marquee",
  "main > .integrations-three",
  "main > .why-tabs",
  "main > .platform-section",
  "main > .floating-icons-hero",
];

export const CTA_HREF = "/contact.html";

export function SitePageShell({ children }: { children: ReactNode }) {
  return (
    <SiteShell
      header={<GlobalHeader />}
      footer={
        <SourceHomeEmbed
          hiddenSelectors={HOME_FOOTER_HIDDEN_SELECTORS}
          title="页脚与行动号召"
        />
      }
    >
      {children}
    </SiteShell>
  );
}

/* ---------------- CTA buttons ---------------- */

const basePrimaryStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "var(--ds-size-control-min)",
  padding: "var(--ds-space-md) var(--ds-space-2xl)",
  backgroundColor: "var(--ds-color-action-primary)",
  color: "var(--ds-color-action-primary-foreground)",
  borderRadius: "var(--ds-radius-control)",
  fontSize: "var(--ds-font-size-md)",
  fontWeight: "var(--ds-font-weight-semibold)",
  textDecoration: "none",
};

const baseGhostStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "var(--ds-size-control-min)",
  padding: "var(--ds-space-md) var(--ds-space-2xl)",
  backgroundColor: "transparent",
  color: "var(--ds-color-text-inverse)",
  border:
    "var(--ds-border-width-default) solid var(--ds-color-border-inverse)",
  borderRadius: "var(--ds-radius-control)",
  fontSize: "var(--ds-font-size-md)",
  fontWeight: "var(--ds-font-weight-semibold)",
  textDecoration: "none",
};

export function PrimaryCta({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a href={href} style={basePrimaryStyle}>
      {children}
    </a>
  );
}

export function GhostCta({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a href={href} style={baseGhostStyle}>
      {children}
    </a>
  );
}

/* ---------------- Section wrapper ---------------- */

export function Section({
  id,
  eyebrow,
  title,
  intro,
  surface = "default",
  align = "center",
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  surface?: "default" | "subtle" | "inverse";
  align?: "center" | "start";
  children?: ReactNode;
}) {
  const bg =
    surface === "subtle"
      ? "var(--ds-color-surface-subtle)"
      : surface === "inverse"
        ? "var(--ds-color-surface-inverse)"
        : "var(--ds-color-surface-default)";
  const fg =
    surface === "inverse"
      ? "var(--ds-color-text-inverse)"
      : "var(--ds-color-text-primary)";
  const introColor =
    surface === "inverse"
      ? "var(--ds-color-text-inverse-secondary)"
      : "var(--ds-color-text-secondary)";
  return (
    <section
      id={id}
      style={{
        backgroundColor: bg,
        color: fg,
        padding: "var(--ds-section-y-desktop) var(--ds-gutter-desktop)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--ds-container-page)",
          margin: "0 auto",
        }}
      >
        {(eyebrow || title || intro) && (
          <header
            style={{
              textAlign: align,
              maxWidth: align === "center" ? 960 : "none",
              marginInline: align === "center" ? "auto" : undefined,
              marginBottom: "var(--ds-space-4xl)",
            }}
          >
            {eyebrow && (
              <div
                style={{
                  color: "var(--ds-color-action-primary)",
                  fontSize: "var(--ds-font-size-sm)",
                  fontWeight: "var(--ds-font-weight-semibold)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "var(--ds-space-md)",
                }}
              >
                {eyebrow}
              </div>
            )}
            {title && (
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  fontWeight: "var(--ds-font-weight-semibold)",
                  lineHeight: 1.3,
                }}
              >
                {title}
              </h2>
            )}
            {intro && (
              <p
                style={{
                  marginTop: "var(--ds-space-lg)",
                  fontSize: "var(--ds-font-size-lg)",
                  lineHeight: 1.65,
                  color: introColor,
                }}
              >
                {intro}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
      <style>{`
        @media (max-width: 1023px) {
          .ds-grid-4 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          .ds-grid-3 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          .ds-hero-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 639px) {
          .ds-grid-4, .ds-grid-3, .ds-grid-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ---------------- Hero ---------------- */

export function ProductHero({
  eyebrow,
  title,
  description,
  primaryCta = { label: "免费试用", href: CTA_HREF },
  secondaryCta,
  visual,
}: {
  eyebrow?: string;
  title: ReactNode;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  visual?: ReactNode;
}) {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "var(--ds-color-surface-inverse)",
        color: "var(--ds-color-text-inverse)",
        padding: "var(--ds-section-y-desktop) var(--ds-gutter-desktop)",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(1000px 500px at 15% 20%, color-mix(in srgb, var(--ds-color-action-primary) 28%, transparent), transparent 60%), radial-gradient(800px 400px at 85% 80%, color-mix(in srgb, #1e40af 30%, transparent), transparent 60%)",
          pointerEvents: "none",
        }}
      />
      <div
        className="ds-hero-grid"
        style={{
          position: "relative",
          maxWidth: "var(--ds-container-page)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: visual
            ? "minmax(0, 1.2fr) minmax(0, 1fr)"
            : "1fr",
          gap: "var(--ds-space-4xl)",
          alignItems: "center",
        }}
      >
        <div>
          {eyebrow && (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--ds-space-sm)",
                padding: "var(--ds-space-xs) var(--ds-space-md)",
                borderRadius: "var(--ds-radius-round)",
                border:
                  "var(--ds-border-width-default) solid var(--ds-color-border-inverse)",
                color: "var(--ds-color-text-inverse-secondary)",
                fontSize: "var(--ds-font-size-sm)",
              }}
            >
              {eyebrow}
            </div>
          )}
          <h1
            style={{
              marginTop: eyebrow ? "var(--ds-space-lg)" : undefined,
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              lineHeight: 1.15,
              fontWeight: "var(--ds-font-weight-semibold)",
              letterSpacing: "-0.01em",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              marginTop: "var(--ds-space-xl)",
              maxWidth: 640,
              color: "var(--ds-color-text-inverse-secondary)",
              fontSize: "var(--ds-font-size-lg)",
              lineHeight: 1.6,
            }}
          >
            {description}
          </p>
          <div
            style={{
              marginTop: "var(--ds-space-2xl)",
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--ds-space-md)",
            }}
          >
            <PrimaryCta href={primaryCta.href}>{primaryCta.label}</PrimaryCta>
            {secondaryCta && (
              <GhostCta href={secondaryCta.href}>{secondaryCta.label}</GhostCta>
            )}
          </div>
        </div>
        {visual}
      </div>
    </section>
  );
}

/* ---------------- Feature Grid ---------------- */

export type FeatureItem = {
  icon?: ReactNode;
  tag?: string;
  title: string;
  desc: string;
};

export function FeatureGrid({
  items,
  columns = 4,
  variant = "card",
}: {
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
  variant?: "card" | "topbar" | "row";
}) {
  const gridClass =
    columns === 4 ? "ds-grid-4" : columns === 3 ? "ds-grid-3" : "ds-grid-2";
  return (
    <div
      className={gridClass}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: "var(--ds-space-xl)",
      }}
    >
      {items.map((it) => (
        <article
          key={it.title}
          style={{
            backgroundColor: "var(--ds-color-surface-default)",
            border:
              variant === "topbar"
                ? undefined
                : "var(--ds-border-width-default) solid var(--ds-color-border-subtle)",
            borderTop:
              variant === "topbar"
                ? "var(--ds-border-width-accent) solid var(--ds-color-action-primary)"
                : undefined,
            borderRadius: "var(--ds-radius-surface)",
            padding: "var(--ds-space-2xl)",
            display: "flex",
            flexDirection: variant === "row" ? "row" : "column",
            gap: "var(--ds-space-md)",
            boxShadow: variant === "topbar" ? "var(--ds-shadow-sm)" : undefined,
          }}
        >
          {(it.icon || it.tag) && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flex: variant === "row" ? "0 0 auto" : undefined,
              }}
            >
              {it.icon && (
                <div
                  style={{
                    width: 44,
                    height: 44,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: "var(--ds-radius-control)",
                    backgroundColor: "var(--ds-color-action-primary-subtle)",
                    color: "var(--ds-color-action-primary)",
                  }}
                >
                  {it.icon}
                </div>
              )}
              {it.tag && (
                <span
                  style={{
                    fontSize: "var(--ds-font-size-sm)",
                    fontWeight: "var(--ds-font-weight-semibold)",
                    color: "var(--ds-color-action-primary)",
                  }}
                >
                  {it.tag}
                </span>
              )}
            </div>
          )}
          <div style={{ flex: 1 }}>
            <h3
              style={{
                fontSize: "var(--ds-font-size-lg)",
                fontWeight: "var(--ds-font-weight-semibold)",
                color: "var(--ds-color-text-primary)",
                lineHeight: 1.4,
              }}
            >
              {it.title}
            </h3>
            <p
              style={{
                marginTop: "var(--ds-space-sm)",
                fontSize: "var(--ds-font-size-sm)",
                color: "var(--ds-color-text-secondary)",
                lineHeight: 1.65,
              }}
            >
              {it.desc}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

/* ---------------- CTA Card ---------------- */

export function CtaCard({
  title,
  description,
  primaryCta = { label: "免费试用", href: CTA_HREF },
}: {
  title: string;
  description?: string;
  primaryCta?: { label: string; href: string };
}) {
  return (
    <Section>
      <div
        style={{
          borderRadius: "var(--ds-radius-surface)",
          padding: "clamp(2rem, 6vw, 4.5rem)",
          background:
            "linear-gradient(135deg, var(--ds-color-surface-inverse), color-mix(in srgb, var(--ds-color-action-primary) 35%, var(--ds-color-surface-inverse)))",
          color: "var(--ds-color-text-inverse)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3.2vw, 2.25rem)",
            fontWeight: "var(--ds-font-weight-semibold)",
            lineHeight: 1.3,
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {title}
        </h2>
        {description && (
          <p
            style={{
              marginTop: "var(--ds-space-lg)",
              maxWidth: 780,
              marginInline: "auto",
              color: "var(--ds-color-text-inverse-secondary)",
              fontSize: "var(--ds-font-size-lg)",
              lineHeight: 1.6,
            }}
          >
            {description}
          </p>
        )}
        <div style={{ marginTop: "var(--ds-space-2xl)" }}>
          <PrimaryCta href={primaryCta.href}>{primaryCta.label}</PrimaryCta>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Tag list (for "支持 20+ 语言" 类) ---------------- */

export function TagCloud({ tags }: { tags: string[] }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--ds-space-sm)",
        justifyContent: "center",
      }}
    >
      {tags.map((t) => (
        <span
          key={t}
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "var(--ds-space-sm) var(--ds-space-lg)",
            borderRadius: "var(--ds-radius-round)",
            border:
              "var(--ds-border-width-default) solid var(--ds-color-border-subtle)",
            backgroundColor: "var(--ds-color-surface-default)",
            fontSize: "var(--ds-font-size-sm)",
            color: "var(--ds-color-text-primary)",
            fontWeight: "var(--ds-font-weight-medium)",
          }}
        >
          {t}
        </span>
      ))}
    </div>
  );
}

/* ---------------- Stat Row ---------------- */

export function StatRow({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <div
      className="ds-grid-4"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))`,
        gap: "var(--ds-space-xl)",
      }}
    >
      {stats.map((s) => (
        <div
          key={s.label}
          style={{
            padding: "var(--ds-space-xl)",
            backgroundColor: "var(--ds-color-surface-default)",
            border:
              "var(--ds-border-width-default) solid var(--ds-color-border-subtle)",
            borderRadius: "var(--ds-radius-surface)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              fontWeight: "var(--ds-font-weight-semibold)",
              color: "var(--ds-color-action-primary)",
              lineHeight: 1.1,
            }}
          >
            {s.value}
          </div>
          <div
            style={{
              marginTop: "var(--ds-space-sm)",
              fontSize: "var(--ds-font-size-sm)",
              color: "var(--ds-color-text-secondary)",
              lineHeight: 1.5,
            }}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------------- Workflow Stepper (流程图 SVG-ish, flex-based) ---------------- */

export function WorkflowStepper({
  steps,
}: {
  steps: { title: string; desc?: string }[];
}) {
  return (
    <ol
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))`,
        gap: 0,
        counterReset: "step",
        listStyle: "none",
        padding: 0,
        margin: 0,
      }}
      className="ds-grid-4"
    >
      {steps.map((s, i) => (
        <li
          key={s.title}
          style={{
            position: "relative",
            padding: "var(--ds-space-xl)",
            borderTop:
              "var(--ds-border-width-accent) solid var(--ds-color-action-primary)",
            backgroundColor: "var(--ds-color-surface-default)",
          }}
        >
          <div
            style={{
              fontSize: "var(--ds-font-size-sm)",
              color: "var(--ds-color-action-primary)",
              fontWeight: "var(--ds-font-weight-semibold)",
              letterSpacing: "0.08em",
            }}
          >
            STEP {String(i + 1).padStart(2, "0")}
          </div>
          <h3
            style={{
              marginTop: "var(--ds-space-sm)",
              fontSize: "var(--ds-font-size-lg)",
              fontWeight: "var(--ds-font-weight-semibold)",
              lineHeight: 1.35,
            }}
          >
            {s.title}
          </h3>
          {s.desc && (
            <p
              style={{
                marginTop: "var(--ds-space-sm)",
                fontSize: "var(--ds-font-size-sm)",
                color: "var(--ds-color-text-secondary)",
                lineHeight: 1.6,
              }}
            >
              {s.desc}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
}

/* ---------------- Architecture Diagram (SVG-based, layered) ---------------- */

export function ArchitectureDiagram({
  title,
  layers,
}: {
  title?: string;
  layers: { label: string; items: string[] }[];
}) {
  return (
    <div
      role="img"
      aria-label={title ?? "产品架构示意图"}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--ds-space-md)",
        padding: "var(--ds-space-2xl)",
        backgroundColor: "var(--ds-color-surface-subtle)",
        border:
          "var(--ds-border-width-default) solid var(--ds-color-border-subtle)",
        borderRadius: "var(--ds-radius-surface)",
      }}
    >
      {layers.map((layer, idx) => (
        <div
          key={layer.label}
          style={{
            display: "grid",
            gridTemplateColumns: "160px 1fr",
            gap: "var(--ds-space-lg)",
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              display: "grid",
              placeItems: "center",
              padding: "var(--ds-space-md)",
              borderRadius: "var(--ds-radius-control)",
              backgroundColor:
                idx % 2 === 0
                  ? "var(--ds-color-action-primary-subtle)"
                  : "var(--ds-color-surface-default)",
              color: "var(--ds-color-text-primary)",
              fontWeight: "var(--ds-font-weight-semibold)",
              fontSize: "var(--ds-font-size-md)",
              border:
                "var(--ds-border-width-default) solid var(--ds-color-border-subtle)",
              textAlign: "center",
            }}
          >
            {layer.label}
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${layer.items.length}, minmax(0, 1fr))`,
              gap: "var(--ds-space-sm)",
            }}
            className="ds-grid-4"
          >
            {layer.items.map((item) => (
              <div
                key={item}
                style={{
                  display: "grid",
                  placeItems: "center",
                  padding: "var(--ds-space-md)",
                  borderRadius: "var(--ds-radius-control)",
                  backgroundColor: "var(--ds-color-surface-default)",
                  border:
                    "var(--ds-border-width-default) solid var(--ds-color-border-subtle)",
                  fontSize: "var(--ds-font-size-sm)",
                  color: "var(--ds-color-text-secondary)",
                  textAlign: "center",
                  minHeight: 56,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
