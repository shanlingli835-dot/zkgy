import { createFileRoute } from "@tanstack/react-router";
import type { CSSProperties, ReactNode } from "react";

import { SiteShell } from "@/components/site/SiteShell";
import { GlobalHeader } from "@/components/site/GlobalHeader";
import { GlobalFooter } from "@/components/site/GlobalFooter";

import { Link } from "@/components/ui/link";
import {
  homePage,
  homeHero,
  homeStats,
  homeCapabilities,
  homeProducts,
  homeSolutions,
  homeAbout,
  homeCases,
  homeBottomCta,
} from "@/content/pages/home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: homePage.title },
      { name: "description", content: homePage.description },
      { name: "keywords", content: homePage.keywords },
      { property: "og:title", content: homePage.title },
      { property: "og:description", content: homePage.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: homePage.route },
    ],
    links: [{ rel: "canonical", href: homePage.route }],
  }),
  component: HomeRoute,
});

/* ---------- Layout primitives ---------- */

const containerStyle: CSSProperties = {
  maxWidth: "var(--ds-container-page)",
  marginInline: "auto",
  paddingInline: "var(--ds-gutter-desktop)",
  width: "100%",
};

/**
 * Section
 * - 使用统一浅色基调，section 之间用 hairline 顶部分割线建立结构，
 *   而不是频繁交替背景色。
 * - `emphasis` 只控制垂直节奏（Hero 更大、常规 section 较紧、closing 更大），
 *   避免所有 section 视觉权重相同。
 */
function Section({
  id,
  labelledBy,
  index,
  eyebrow,
  divider = true,
  emphasis = "regular",
  children,
}: {
  id?: string;
  labelledBy?: string;
  index?: string;
  eyebrow?: string;
  divider?: boolean;
  emphasis?: "hero" | "regular" | "closing";
  children: ReactNode;
}) {
  const padClass =
    emphasis === "hero"
      ? "home-section home-section--hero"
      : emphasis === "closing"
        ? "home-section home-section--closing"
        : "home-section";

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={padClass}
      style={{
        backgroundColor: "var(--ds-color-canvas)",
        color: "var(--ds-color-text-primary)",
        borderTop: divider
          ? "var(--ds-border-width-default) solid var(--ds-color-border-subtle)"
          : "none",
      }}
    >
      <div style={containerStyle}>
        {(index || eyebrow) && (
          <div
            style={{
              display: "flex",
              gap: "var(--ds-space-lg)",
              marginBottom: "var(--ds-space-xl)",
              fontSize: "var(--ds-font-size-xs)",
              fontWeight: "var(--ds-font-weight-medium)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--ds-color-text-muted)",
            }}
          >
            {index ? <span aria-hidden>{index}</span> : null}
            {eyebrow ? <span>{eyebrow}</span> : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

function SectionTitle({
  id,
  children,
  align = "start",
}: {
  id: string;
  children: ReactNode;
  align?: "start" | "center";
}) {
  return (
    <h2
      id={id}
      style={{
        margin: 0,
        fontSize: "var(--ds-font-size-3xl)",
        lineHeight: "var(--ds-line-height-3xl)",
        fontWeight: "var(--ds-font-weight-semibold)",
        color: "var(--ds-color-text-primary)",
        maxWidth: "28ch",
        textAlign: align,
        letterSpacing: "-0.01em",
      }}
    >
      {children}
    </h2>
  );
}

/** 分类小标签：短红线 + 大写小字，替代圆角红 pill */
function CategoryLabel({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--ds-space-sm)",
        fontSize: "var(--ds-font-size-xs)",
        fontWeight: "var(--ds-font-weight-semibold)",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--ds-color-text-secondary)",
      }}
    >
      <span
        aria-hidden
        style={{
          display: "inline-block",
          width: "1.5rem",
          height: "var(--ds-border-width-strong)",
          background: "var(--ds-color-action-primary)",
        }}
      />
      {children}
    </span>
  );
}

/** 可点击产品/方案卡片（仅可点击内容使用卡片） */
function ClickableCard({
  eyebrow,
  title,
  description,
  href,
  ctaLabel = "了解更多",
}: {
  eyebrow?: string;
  title: string;
  description: ReactNode;
  href: string;
  ctaLabel?: string;
}) {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--ds-space-lg)",
        padding: "var(--ds-space-2xl)",
        backgroundColor: "var(--ds-color-surface-default)",
        border:
          "var(--ds-border-width-default) solid var(--ds-color-border-subtle)",
        borderRadius: "var(--ds-radius-surface)",
        height: "100%",
      }}
    >
      {eyebrow ? <CategoryLabel>{eyebrow}</CategoryLabel> : null}
      <h3
        style={{
          margin: 0,
          fontSize: "var(--ds-font-size-xl)",
          lineHeight: "var(--ds-line-height-xl)",
          fontWeight: "var(--ds-font-weight-semibold)",
          color: "var(--ds-color-text-primary)",
        }}
      >
        {title}
      </h3>
      <div
        style={{
          margin: 0,
          fontSize: "var(--ds-font-size-md)",
          lineHeight: "var(--ds-line-height-md)",
          color: "var(--ds-color-text-secondary)",
          flex: 1,
        }}
      >
        {description}
      </div>
      <div>
        <Link to={href} variant="standalone">
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
}

const gridStyle = (min: string, gap = "var(--ds-space-2xl)"): CSSProperties => ({
  display: "grid",
  gap,
  gridTemplateColumns: `repeat(auto-fit, minmax(min(${min}, 100%), 1fr))`,
});

/* ---------- Route ---------- */

function HomeRoute() {
  const totalSections = 8;
  const idx = (n: number) => `${String(n).padStart(2, "0")} / ${String(totalSections).padStart(2, "0")}`;

  return (
    <SiteShell header={<GlobalHeader />} footer={<GlobalFooter />}>
      {/* 01 Hero — 唯一主焦点 */}
      <Section
        labelledBy="home-hero-title"
        index={idx(1)}
        eyebrow="中科固源 · SOURCEGUARD"
        divider={false}
        emphasis="hero"
      >
        <div className="home-hero-grid">
          <div>
            <h1
              id="home-hero-title"
              style={{
                margin: 0,
                fontSize: "clamp(2.25rem, 4vw + 1rem, 4rem)",
                lineHeight: 1.1,
                fontWeight: "var(--ds-font-weight-semibold)",
                color: "var(--ds-color-text-primary)",
                letterSpacing: "-0.02em",
              }}
            >
              {homeHero.title}
            </h1>
          </div>
          <div>
            <p
              style={{
                margin: "0 0 var(--ds-space-2xl)",
                fontSize: "var(--ds-font-size-lg)",
                lineHeight: "var(--ds-line-height-lg)",
                color: "var(--ds-color-text-secondary)",
                maxWidth: "48ch",
              }}
            >
              {homeHero.description}
            </p>
            <Link to={homeHero.primaryCta.href} variant="standalone">
              {homeHero.primaryCta.label}
            </Link>
          </div>
        </div>
      </Section>

      {/* 02 合作生态 — 内嵌 stats，不使用卡片 */}
      <Section labelledBy="home-stats-title" index={idx(2)} eyebrow={homeStats.title}>
        <SectionTitle id="home-stats-title">用数据支撑的安全成效</SectionTitle>
        <div className="home-stats-row">
          {homeStats.items.map((s, i) => (
            <div
              key={s.label}
              className="home-stat-cell"
              style={{
                paddingBlock: "var(--ds-space-lg)",
                paddingInline: i === 0 ? 0 : "var(--ds-space-2xl)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  lineHeight: 1,
                  fontWeight: "var(--ds-font-weight-semibold)",
                  color: "var(--ds-color-text-primary)",
                  letterSpacing: "-0.02em",
                }}
              >
                {s.value}
              </p>
              <p
                style={{
                  margin: "var(--ds-space-lg) 0 0",
                  fontSize: "var(--ds-font-size-sm)",
                  lineHeight: "var(--ds-line-height-sm)",
                  color: "var(--ds-color-text-secondary)",
                  maxWidth: "28ch",
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 03 核心安全能力 — 编号列表 + hairline 分割，无卡片 */}
      <Section
        labelledBy="home-capabilities-title"
        index={idx(3)}
        eyebrow={homeCapabilities.title}
      >
        <SectionTitle id="home-capabilities-title">
          覆盖研发、通信、供应链与运行环境的安全能力
        </SectionTitle>
        <ol
          className="home-capabilities-list"
          style={{ listStyle: "none", padding: 0, margin: "var(--ds-space-3xl) 0 0" }}
        >
          {homeCapabilities.items.map((c, i) => (
            <li
              key={c.name}
              style={{
                display: "grid",
                gridTemplateColumns: "auto minmax(0, 1fr)",
                gap: "var(--ds-space-2xl)",
                paddingBlock: "var(--ds-space-xl)",
                borderTop:
                  "var(--ds-border-width-default) solid var(--ds-color-border-subtle)",
              }}
            >
              <span
                aria-hidden
                style={{
                  fontFeatureSettings: "'tnum'",
                  fontSize: "var(--ds-font-size-sm)",
                  fontWeight: "var(--ds-font-weight-medium)",
                  color: "var(--ds-color-text-muted)",
                  letterSpacing: "0.08em",
                  paddingTop: "0.25rem",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div
                className="home-capability-body"
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 1fr) minmax(0, 2fr)",
                  gap: "var(--ds-space-2xl)",
                  alignItems: "baseline",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: "var(--ds-font-size-lg)",
                    lineHeight: "var(--ds-line-height-lg)",
                    fontWeight: "var(--ds-font-weight-semibold)",
                    color: "var(--ds-color-text-primary)",
                  }}
                >
                  {c.name}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: "var(--ds-font-size-md)",
                    lineHeight: "var(--ds-line-height-md)",
                    color: "var(--ds-color-text-secondary)",
                  }}
                >
                  {c.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* 04 核心产品 — 可点击，保留卡片 */}
      <Section
        labelledBy="home-products-title"
        index={idx(4)}
        eyebrow={homeProducts.title}
      >
        <SectionTitle id="home-products-title">面向专用场景的安全产品线</SectionTitle>
        <div style={{ ...gridStyle("280px"), marginTop: "var(--ds-space-3xl)" }}>
          {homeProducts.items.map((p) => (
            <ClickableCard
              key={p.name}
              title={p.name}
              description={p.description}
              href={p.href}
            />
          ))}
        </div>
      </Section>

      {/* 05 行业解决方案 — 可点击，保留卡片 */}
      <Section
        labelledBy="home-solutions-title"
        index={idx(5)}
        eyebrow={homeSolutions.title}
      >
        <SectionTitle id="home-solutions-title">面向重点行业的一体化方案</SectionTitle>
        <div style={{ ...gridStyle("380px"), marginTop: "var(--ds-space-3xl)" }}>
          {homeSolutions.items.map((s) => (
            <ClickableCard
              key={s.name}
              eyebrow={s.tag}
              title={s.name}
              href={s.href}
              description={
                <dl style={{ margin: 0, display: "grid", gap: "var(--ds-space-lg)" }}>
                  <div>
                    <dt
                      style={{
                        fontSize: "var(--ds-font-size-xs)",
                        fontWeight: "var(--ds-font-weight-semibold)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--ds-color-text-muted)",
                        marginBottom: "var(--ds-space-xs)",
                      }}
                    >
                      方案特点
                    </dt>
                    <dd style={{ margin: 0 }}>{s.features}</dd>
                  </div>
                  <div>
                    <dt
                      style={{
                        fontSize: "var(--ds-font-size-xs)",
                        fontWeight: "var(--ds-font-weight-semibold)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--ds-color-text-muted)",
                        marginBottom: "var(--ds-space-xs)",
                      }}
                    >
                      价值优势
                    </dt>
                    <dd style={{ margin: 0 }}>{s.value}</dd>
                  </div>
                </dl>
              }
            />
          ))}
        </div>
      </Section>

      {/* 06 关于中科固源 — 正文用 reading 宽度，stats 内嵌 */}
      <Section labelledBy="home-about-title" index={idx(6)} eyebrow={homeAbout.title}>
        <div className="home-about-grid">
          <div>
            <SectionTitle id="home-about-title">
              低空与商业航天的安全底座
            </SectionTitle>
          </div>
          <div>
            <p
              style={{
                margin: 0,
                fontSize: "var(--ds-font-size-md)",
                lineHeight: "1.7",
                color: "var(--ds-color-text-secondary)",
                maxWidth: "var(--ds-container-reading)",
              }}
            >
              {homeAbout.body}
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--ds-space-3xl)",
                marginTop: "var(--ds-space-3xl)",
                paddingTop: "var(--ds-space-2xl)",
                borderTop:
                  "var(--ds-border-width-default) solid var(--ds-color-border-subtle)",
              }}
            >
              {homeAbout.stats.map((s) => (
                <div key={s.label}>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "var(--ds-font-size-3xl)",
                      lineHeight: 1,
                      fontWeight: "var(--ds-font-weight-semibold)",
                      color: "var(--ds-color-text-primary)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {s.value}
                  </p>
                  <p
                    style={{
                      margin: "var(--ds-space-sm) 0 0",
                      fontSize: "var(--ds-font-size-sm)",
                      color: "var(--ds-color-text-secondary)",
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "var(--ds-space-2xl)" }}>
              <Link to={homeAbout.cta.href} variant="standalone">
                {homeAbout.cta.label}
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* 07 成功案例 — 有序列表，非可点击不使用卡片 */}
      <Section labelledBy="home-cases-title" index={idx(7)} eyebrow={homeCases.title}>
        <SectionTitle id="home-cases-title">在关键行业交付的项目</SectionTitle>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "var(--ds-space-3xl) 0 0",
          }}
        >
          {homeCases.items.map((c) => (
            <li
              key={c.title}
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1fr) minmax(0, 3fr)",
                gap: "var(--ds-space-2xl)",
                paddingBlock: "var(--ds-space-xl)",
                borderTop:
                  "var(--ds-border-width-default) solid var(--ds-color-border-subtle)",
                alignItems: "baseline",
              }}
              className="home-case-row"
            >
              <CategoryLabel>{c.tag}</CategoryLabel>
              <p
                style={{
                  margin: 0,
                  fontSize: "var(--ds-font-size-lg)",
                  lineHeight: "var(--ds-line-height-lg)",
                  color: "var(--ds-color-text-primary)",
                }}
              >
                {c.title}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* 08 Bottom CTA — 保持浅色，用强顶部分割线取代反色块 */}
      <Section
        labelledBy="home-bottom-cta-title"
        index={idx(8)}
        eyebrow="联系我们"
        emphasis="closing"
      >
        <div
          className="home-cta-grid"
          style={{
            paddingTop: "var(--ds-space-3xl)",
            borderTop:
              "var(--ds-border-width-strong) solid var(--ds-color-text-primary)",
          }}
        >
          <h2
            id="home-bottom-cta-title"
            style={{
              margin: 0,
              fontSize: "clamp(1.75rem, 2.5vw + 1rem, 2.75rem)",
              lineHeight: 1.15,
              fontWeight: "var(--ds-font-weight-semibold)",
              color: "var(--ds-color-text-primary)",
              letterSpacing: "-0.01em",
              maxWidth: "22ch",
            }}
          >
            {homeBottomCta.title}
          </h2>
          <div>
            <p
              style={{
                margin: "0 0 var(--ds-space-2xl)",
                fontSize: "var(--ds-font-size-lg)",
                color: "var(--ds-color-text-secondary)",
              }}
            >
              {homeBottomCta.description}
            </p>
            <Link to={homeBottomCta.primaryCta.href} variant="standalone">
              {homeBottomCta.primaryCta.label}
            </Link>
          </div>
        </div>
      </Section>

      <style>{`
        .home-section {
          padding-block: var(--ds-section-y-desktop);
        }
        .home-section--hero {
          padding-block: calc(var(--ds-section-y-desktop) * 1.4) calc(var(--ds-section-y-desktop) * 1.2);
        }
        .home-section--closing {
          padding-block: calc(var(--ds-section-y-desktop) * 1.1);
        }

        .home-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
          gap: var(--ds-space-4xl);
          align-items: end;
        }

        .home-about-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
          gap: var(--ds-space-4xl);
          align-items: start;
        }

        .home-cta-grid {
          display: grid;
          grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
          gap: var(--ds-space-4xl);
          align-items: start;
        }

        .home-stats-row {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0;
          margin-top: var(--ds-space-3xl);
        }
        .home-stat-cell + .home-stat-cell {
          border-left: var(--ds-border-width-default) solid var(--ds-color-border-subtle);
        }

        @media (max-width: 1023px) {
          .home-section > div {
            padding-inline: var(--ds-gutter-tablet) !important;
          }
          .home-hero-grid,
          .home-about-grid,
          .home-cta-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: var(--ds-space-2xl);
            align-items: start;
          }
          .home-capability-body {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: var(--ds-space-sm) !important;
          }
          .home-case-row {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: var(--ds-space-sm) !important;
          }
          .home-stats-row {
            grid-template-columns: minmax(0, 1fr);
          }
          .home-stat-cell + .home-stat-cell {
            border-left: none;
            border-top: var(--ds-border-width-default) solid var(--ds-color-border-subtle);
          }
          .home-stat-cell {
            padding-inline: 0 !important;
          }
        }

        @media (max-width: 767px) {
          .home-section {
            padding-block: var(--ds-section-y-mobile) !important;
          }
          .home-section--hero {
            padding-block: calc(var(--ds-section-y-mobile) * 1.3) var(--ds-section-y-mobile) !important;
          }
          .home-section > div {
            padding-inline: var(--ds-gutter-mobile) !important;
          }
        }
      `}</style>
    </SiteShell>
  );
}
