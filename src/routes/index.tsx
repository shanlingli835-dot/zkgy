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

/* ---------- Layout primitives (tokens only) ---------- */

const CARD_RADIUS = "2px";

const containerStyle: CSSProperties = {
  maxWidth: "var(--ds-container-page)",
  marginInline: "auto",
  paddingInline: "var(--ds-gutter-desktop)",
  width: "100%",
};

function Section({
  id,
  labelledBy,
  surface = "canvas",
  children,
}: {
  id?: string;
  labelledBy?: string;
  surface?: "canvas" | "subtle" | "inverse";
  children: ReactNode;
}) {
  const bg =
    surface === "inverse"
      ? "var(--ds-color-surface-inverse)"
      : surface === "subtle"
        ? "var(--ds-color-surface-subtle)"
        : "var(--ds-color-canvas)";
  const fg =
    surface === "inverse"
      ? "var(--ds-color-text-inverse)"
      : "var(--ds-color-text-primary)";
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className="home-section"
      style={{
        backgroundColor: bg,
        color: fg,
        paddingBlock: "var(--ds-section-y-desktop)",
      }}
    >
      <div style={containerStyle}>{children}</div>
    </section>
  );
}

function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  inverse = false,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  inverse?: boolean;
}) {
  return (
    <header style={{ marginBottom: "var(--ds-space-3xl)", maxWidth: "60ch" }}>
      {eyebrow ? (
        <p
          style={{
            margin: 0,
            fontSize: "var(--ds-font-size-sm)",
            fontWeight: "var(--ds-font-weight-semibold)",
            color: inverse
              ? "var(--ds-color-text-inverse-secondary)"
              : "var(--ds-color-action-primary)",
          }}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        style={{
          margin: eyebrow ? "var(--ds-space-md) 0 0" : 0,
          fontSize: "var(--ds-font-size-3xl)",
          lineHeight: "var(--ds-line-height-3xl)",
          fontWeight: "var(--ds-font-weight-semibold)",
          color: inverse ? "var(--ds-color-text-inverse)" : "var(--ds-color-text-primary)",
        }}
      >
        {title}
      </h2>
      {description ? (
        <p
          style={{
            marginTop: "var(--ds-space-lg)",
            fontSize: "var(--ds-font-size-lg)",
            color: inverse
              ? "var(--ds-color-text-inverse-secondary)"
              : "var(--ds-color-text-secondary)",
          }}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}

/**
 * ClickableCard — reserved for independent, navigable, reusable entities only
 * (products, solutions). Flat surface, 2px radius, no shadow.
 */
function ClickableCard({
  title,
  description,
  footer,
  tag,
}: {
  title: string;
  description?: ReactNode;
  footer?: ReactNode;
  tag?: string;
}) {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--ds-space-lg)",
        padding: "var(--ds-space-2xl)",
        backgroundColor: "var(--ds-color-surface-default)",
        border: "var(--ds-border-width-default) solid var(--ds-color-border-subtle)",
        borderRadius: CARD_RADIUS,
        height: "100%",
      }}
    >
      {tag ? (
        <span
          style={{
            alignSelf: "flex-start",
            fontSize: "var(--ds-font-size-xs)",
            fontWeight: "var(--ds-font-weight-semibold)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: "var(--ds-color-action-primary)",
          }}
        >
          {tag}
        </span>
      ) : null}
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
      {description ? (
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
      ) : null}
      {footer ? <div>{footer}</div> : null}
    </article>
  );
}

const gridStyle = (min: string): CSSProperties => ({
  display: "grid",
  gap: "var(--ds-space-2xl)",
  gridTemplateColumns: `repeat(auto-fit, minmax(min(${min}, 100%), 1fr))`,
});

/* ---------- Route ---------- */

function HomeRoute() {
  return (
    <SiteShell header={<GlobalHeader />} footer={<GlobalFooter />}>
      {/* Hero */}
      <Section labelledBy="home-hero-title">
        <p
          style={{
            margin: 0,
            fontSize: "var(--ds-font-size-sm)",
            fontWeight: "var(--ds-font-weight-semibold)",
            color: "var(--ds-color-action-primary)",
          }}
        >
          {homeHero.eyebrow}
        </p>
        <h1
          id="home-hero-title"
          style={{
            margin: "var(--ds-space-lg) 0 var(--ds-space-xl)",
            fontSize: "var(--ds-font-size-4xl)",
            lineHeight: "var(--ds-line-height-4xl)",
            fontWeight: "var(--ds-font-weight-semibold)",
            color: "var(--ds-color-text-primary)",
            maxWidth: "22ch",
          }}
        >
          {homeHero.title}
        </h1>
        <p
          style={{
            margin: "0 0 var(--ds-space-2xl)",
            fontSize: "var(--ds-font-size-lg)",
            lineHeight: "var(--ds-line-height-lg)",
            color: "var(--ds-color-text-secondary)",
            maxWidth: "60ch",
          }}
        >
          {homeHero.description}
        </p>
        <Link to={homeHero.primaryCta.href} variant="standalone">
          {homeHero.primaryCta.label}
        </Link>
      </Section>

      {/* Stats / 合作生态 — inline stat band, no cards */}
      <Section labelledBy="home-stats-title" surface="subtle">
        <SectionHeading id="home-stats-title" title={homeStats.title} />
        <dl
          className="home-stat-band"
          style={{
            margin: 0,
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            borderTop:
              "var(--ds-border-width-default) solid var(--ds-color-border-subtle)",
            borderBottom:
              "var(--ds-border-width-default) solid var(--ds-color-border-subtle)",
          }}
        >
          {homeStats.items.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: "var(--ds-space-2xl) var(--ds-space-xl)",
                borderInlineStart:
                  i === 0
                    ? "none"
                    : "var(--ds-border-width-default) solid var(--ds-color-border-subtle)",
              }}
            >
              <dt
                style={{
                  fontSize: "var(--ds-font-size-4xl)",
                  lineHeight: "var(--ds-line-height-4xl)",
                  fontWeight: "var(--ds-font-weight-semibold)",
                  color: "var(--ds-color-action-primary)",
                }}
              >
                {s.value}
              </dt>
              <dd
                style={{
                  margin: "var(--ds-space-md) 0 0",
                  fontSize: "var(--ds-font-size-md)",
                  color: "var(--ds-color-text-secondary)",
                }}
              >
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* 核心安全能力 — descriptive grid, no cards */}
      <Section labelledBy="home-capabilities-title">
        <SectionHeading id="home-capabilities-title" title={homeCapabilities.title} />
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
            columnGap: "var(--ds-space-3xl)",
            rowGap: "var(--ds-space-2xl)",
          }}
        >
          {homeCapabilities.items.map((c) => (
            <li
              key={c.name}
              style={{
                paddingBlock: "var(--ds-space-lg)",
                borderTop:
                  "var(--ds-border-width-strong) solid var(--ds-color-text-primary)",
              }}
            >
              <h3
                style={{
                  margin: "0 0 var(--ds-space-md)",
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
            </li>
          ))}
        </ul>
      </Section>

      {/* 核心产品介绍 — cards justified: each item is independently navigable */}
      <Section labelledBy="home-products-title" surface="subtle">
        <SectionHeading id="home-products-title" title={homeProducts.title} />
        <div style={gridStyle("280px")}>
          {homeProducts.items.map((p) => (
            <ClickableCard
              key={p.name}
              title={p.name}
              description={p.description}
              footer={
                <Link to={p.href} variant="standalone">
                  了解更多
                </Link>
              }
            />
          ))}
        </div>
      </Section>

      {/* 行业解决方案 — cards justified: independent navigable entities */}
      <Section labelledBy="home-solutions-title">
        <SectionHeading id="home-solutions-title" title={homeSolutions.title} />
        <div style={gridStyle("360px")}>
          {homeSolutions.items.map((s) => (
            <ClickableCard
              key={s.name}
              tag={s.tag}
              title={s.name}
              description={
                <>
                  <strong
                    style={{
                      display: "block",
                      color: "var(--ds-color-text-primary)",
                      fontWeight: "var(--ds-font-weight-semibold)",
                      marginBottom: "var(--ds-space-xs)",
                    }}
                  >
                    方案特点
                  </strong>
                  <span style={{ display: "block", marginBottom: "var(--ds-space-lg)" }}>
                    {s.features}
                  </span>
                  <strong
                    style={{
                      display: "block",
                      color: "var(--ds-color-text-primary)",
                      fontWeight: "var(--ds-font-weight-semibold)",
                      marginBottom: "var(--ds-space-xs)",
                    }}
                  >
                    价值优势
                  </strong>
                  <span style={{ display: "block" }}>{s.value}</span>
                </>
              }
              footer={
                <Link to={s.href} variant="standalone">
                  了解更多
                </Link>
              }
            />
          ))}
        </div>
      </Section>

      {/* 关于中科固源 — inline stats grouped with body copy, no cards */}
      <Section labelledBy="home-about-title" surface="subtle">
        <SectionHeading
          id="home-about-title"
          title={homeAbout.title}
          description={homeAbout.body}
        />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--ds-space-2xl)",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "var(--ds-space-2xl)",
            borderTop:
              "var(--ds-border-width-default) solid var(--ds-color-border-subtle)",
          }}
        >
          <dl
            style={{
              margin: 0,
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--ds-space-4xl)",
            }}
          >
            {homeAbout.stats.map((s) => (
              <div key={s.label}>
                <dt
                  style={{
                    fontSize: "var(--ds-font-size-3xl)",
                    lineHeight: "var(--ds-line-height-3xl)",
                    fontWeight: "var(--ds-font-weight-semibold)",
                    color: "var(--ds-color-action-primary)",
                  }}
                >
                  {s.value}
                </dt>
                <dd
                  style={{
                    margin: "var(--ds-space-xs) 0 0",
                    fontSize: "var(--ds-font-size-sm)",
                    color: "var(--ds-color-text-secondary)",
                  }}
                >
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
          <Link to={homeAbout.cta.href} variant="standalone">
            {homeAbout.cta.label}
          </Link>
        </div>
      </Section>

      {/* 成功案例 — divided list, no cards (items are not navigable) */}
      <Section labelledBy="home-cases-title">
        <SectionHeading id="home-cases-title" title={homeCases.title} />
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            borderTop:
              "var(--ds-border-width-default) solid var(--ds-color-border-subtle)",
          }}
        >
          {homeCases.items.map((c) => (
            <li
              key={c.title}
              className="home-case-row"
              style={{
                display: "grid",
                gridTemplateColumns: "180px 1fr",
                gap: "var(--ds-space-2xl)",
                alignItems: "baseline",
                paddingBlock: "var(--ds-space-xl)",
                borderBottom:
                  "var(--ds-border-width-default) solid var(--ds-color-border-subtle)",
              }}
            >
              <span
                style={{
                  fontSize: "var(--ds-font-size-sm)",
                  fontWeight: "var(--ds-font-weight-semibold)",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "var(--ds-color-action-primary)",
                }}
              >
                {c.tag}
              </span>
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

      {/* Bottom CTA */}
      <Section labelledBy="home-bottom-cta-title" surface="inverse">
        <div style={{ maxWidth: "60ch" }}>
          <h2
            id="home-bottom-cta-title"
            style={{
              margin: 0,
              fontSize: "var(--ds-font-size-3xl)",
              lineHeight: "var(--ds-line-height-3xl)",
              fontWeight: "var(--ds-font-weight-semibold)",
              color: "var(--ds-color-text-inverse)",
            }}
          >
            {homeBottomCta.title}
          </h2>
          <p
            style={{
              margin: "var(--ds-space-lg) 0 var(--ds-space-2xl)",
              fontSize: "var(--ds-font-size-lg)",
              color: "var(--ds-color-text-inverse-secondary)",
            }}
          >
            {homeBottomCta.description}
          </p>
          <Link to={homeBottomCta.primaryCta.href} variant="standalone" tone="inverse">
            {homeBottomCta.primaryCta.label}
          </Link>
        </div>
      </Section>

      <style>{`
        @media (max-width: 767px) {
          .home-section {
            padding-block: var(--ds-section-y-mobile) !important;
          }
          .home-section > div {
            padding-inline: var(--ds-gutter-mobile) !important;
          }
          .home-stat-band {
            grid-template-columns: 1fr !important;
          }
          .home-stat-band > div {
            border-inline-start: none !important;
            border-top: var(--ds-border-width-default) solid var(--ds-color-border-subtle);
          }
          .home-stat-band > div:first-child {
            border-top: none;
          }
          .home-case-row {
            grid-template-columns: 1fr !important;
            gap: var(--ds-space-sm) !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .home-section > div {
            padding-inline: var(--ds-gutter-tablet) !important;
          }
        }
      `}</style>
    </SiteShell>
  );
}
