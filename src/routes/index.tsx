import { createFileRoute } from "@tanstack/react-router";
import type { CSSProperties, ReactNode } from "react";

import { SiteShell } from "@/components/site/SiteShell";
import { GlobalHeader } from "@/components/site/GlobalHeader";
import { GlobalFooter } from "@/components/site/GlobalFooter";
import { Button } from "@/components/ui/button";
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

function CardTile({
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
        borderRadius: "var(--ds-radius-surface)",
        height: "100%",
      }}
    >
      {tag ? (
        <span
          style={{
            alignSelf: "flex-start",
            padding: "var(--ds-space-xs) var(--ds-space-md)",
            fontSize: "var(--ds-font-size-xs)",
            fontWeight: "var(--ds-font-weight-medium)",
            color: "var(--ds-color-action-primary)",
            backgroundColor: "var(--ds-color-action-primary-subtle)",
            borderRadius: "var(--ds-radius-round)",
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
        <p
          style={{
            margin: 0,
            fontSize: "var(--ds-font-size-md)",
            lineHeight: "var(--ds-line-height-md)",
            color: "var(--ds-color-text-secondary)",
            flex: 1,
          }}
        >
          {description}
        </p>
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
        <a
          href={homeHero.primaryCta.href}
          style={{ textDecoration: "none", display: "inline-block" }}
        >
          <Button variant="primary">{homeHero.primaryCta.label}</Button>
        </a>
      </Section>

      {/* Stats / 合作生态 */}
      <Section labelledBy="home-stats-title" surface="subtle">
        <SectionHeading id="home-stats-title" title={homeStats.title} />
        <div style={gridStyle("240px")}>
          {homeStats.items.map((s) => (
            <div
              key={s.label}
              style={{
                padding: "var(--ds-space-2xl)",
                backgroundColor: "var(--ds-color-surface-default)",
                border:
                  "var(--ds-border-width-default) solid var(--ds-color-border-subtle)",
                borderRadius: "var(--ds-radius-surface)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "var(--ds-font-size-4xl)",
                  lineHeight: "var(--ds-line-height-4xl)",
                  fontWeight: "var(--ds-font-weight-semibold)",
                  color: "var(--ds-color-action-primary)",
                }}
              >
                {s.value}
              </p>
              <p
                style={{
                  margin: "var(--ds-space-md) 0 0",
                  fontSize: "var(--ds-font-size-md)",
                  color: "var(--ds-color-text-secondary)",
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 核心安全能力 */}
      <Section labelledBy="home-capabilities-title">
        <SectionHeading id="home-capabilities-title" title={homeCapabilities.title} />
        <div style={gridStyle("280px")}>
          {homeCapabilities.items.map((c) => (
            <CardTile key={c.name} title={c.name} description={c.description} />
          ))}
        </div>
      </Section>

      {/* 核心产品介绍 */}
      <Section labelledBy="home-products-title" surface="subtle">
        <SectionHeading id="home-products-title" title={homeProducts.title} />
        <div style={gridStyle("280px")}>
          {homeProducts.items.map((p) => (
            <CardTile
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

      {/* 行业解决方案 */}
      <Section labelledBy="home-solutions-title">
        <SectionHeading id="home-solutions-title" title={homeSolutions.title} />
        <div style={gridStyle("360px")}>
          {homeSolutions.items.map((s) => (
            <CardTile
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

      {/* 关于中科固源 */}
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
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--ds-space-3xl)" }}>
            {homeAbout.stats.map((s) => (
              <div key={s.label}>
                <p
                  style={{
                    margin: 0,
                    fontSize: "var(--ds-font-size-3xl)",
                    lineHeight: "var(--ds-line-height-3xl)",
                    fontWeight: "var(--ds-font-weight-semibold)",
                    color: "var(--ds-color-action-primary)",
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    margin: "var(--ds-space-xs) 0 0",
                    fontSize: "var(--ds-font-size-sm)",
                    color: "var(--ds-color-text-secondary)",
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <Link to={homeAbout.cta.href} variant="standalone">
            {homeAbout.cta.label}
          </Link>
        </div>
      </Section>

      {/* 成功案例 */}
      <Section labelledBy="home-cases-title">
        <SectionHeading id="home-cases-title" title={homeCases.title} />
        <div style={gridStyle("280px")}>
          {homeCases.items.map((c) => (
            <CardTile key={c.title} tag={c.tag} title={c.title} />
          ))}
        </div>
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
          <a
            href={homeBottomCta.primaryCta.href}
            style={{ textDecoration: "none", display: "inline-block" }}
          >
            <Button variant="primary">{homeBottomCta.primaryCta.label}</Button>
          </a>
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
