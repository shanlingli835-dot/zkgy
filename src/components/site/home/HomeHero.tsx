import CybercoreBackground from "@/components/ui/cybercore-section-hero";

/**
 * HomeHero (Stage A of React migration)
 *
 * Uses the real 21st.dev component `<CybercoreBackground beamCount={70} />`
 * as an absolutely-positioned background layer, with the source-site's
 * original Chinese H1, description, and 「获取演示」→ /demo CTA rendered above.
 */
export function HomeHero() {
  return (
    <section
      aria-labelledby="home-hero-title"
      className="source-home-react-hero"
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "calc(100vh - var(--ds-size-header))",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--ds-color-text-inverse)",
        isolation: "isolate",
      }}
    >
      <CybercoreBackground beamCount={70} />

      <div
        style={{
          position: "relative",
          zIndex: 4,
          maxWidth: "var(--ds-container-page, 1200px)",
          padding:
            "clamp(96px, 14vh, 160px) var(--ds-gutter-desktop, 24px) clamp(96px, 14vh, 160px)",
          textAlign: "center",
        }}
      >
        <h1
          id="home-hero-title"
          style={{
            margin: 0,
            fontSize: "clamp(32px, 5.2vw, 64px)",
            lineHeight: 1.15,
            fontWeight: 700,
            letterSpacing: "var(--ds-letter-spacing-default)",
            color: "var(--ds-color-text-inverse)",
            textShadow: "0 2px 24px rgba(0, 229, 255, 0.25)",
          }}
        >
          为关键软件与智能设备构建安全验证能力
        </h1>

        <p
          style={{
            margin: "clamp(20px, 3vw, 28px) auto 0",
            maxWidth: 780,
            fontSize: "clamp(15px, 1.4vw, 18px)",
            lineHeight: 1.7,
            color: "var(--ds-color-text-inverse-secondary)",
          }}
        >
          面向网联汽车、工业控制与特种领域，融合模糊测试、代码审计、供应链分析与 AI
          安全检测，帮助团队发现高风险缺陷并完成可信交付。
        </p>

        <div
          style={{
            marginTop: "clamp(28px, 4vw, 40px)",
            display: "flex",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <a
            href="/demo"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 48,
              padding: "0 28px",
              borderRadius: "var(--ds-radius-control)",
              fontSize: 16,
              fontWeight: 600,
              color: "var(--ds-color-action-primary-foreground)",
              background: "var(--ds-color-action-primary)",
              textDecoration: "none",
            }}
          >
            获取演示
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
