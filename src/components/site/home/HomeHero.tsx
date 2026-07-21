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
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        color: "var(--ds-color-text-inverse)",
        backgroundColor: "var(--bg-color)",
      }}
    >
      <CybercoreBackground beamCount={70} />

      <div
        className="content-wrapper"
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <main
          className="hero-section"
          style={{
            width: "100%",
            maxWidth: "var(--ds-container-page)",
            margin: "0 auto",
            minHeight: "100vh",
            padding: "0 var(--ds-gutter-desktop)",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            id="home-hero-title"
            style={{
              margin: 0,
              fontSize: "clamp(40px, 8vw, 88px)",
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "var(--ds-letter-spacing-default)",
              color: "var(--ds-color-text-inverse)",
              textShadow:
                "0 0 25px var(--glow-color-1), 0 0 50px var(--glow-color-2)",
            }}
          >
            为关键软件与智能设备构建安全验证能力
          </h1>

          <p
            style={{
              margin: "var(--ds-space-xl) 0 0",
              maxWidth: 780,
              fontSize: "clamp(16px, 3vw, 20px)",
              lineHeight: 1.6,
              color: "var(--ds-color-text-inverse-secondary)",
            }}
          >
            面向网联汽车、工业控制与特种领域，融合模糊测试、代码审计、供应链分析与 AI
            安全检测，帮助团队发现高风险缺陷并完成可信交付。
          </p>

          <div
            style={{
              marginTop: "var(--ds-space-2xl)",
              display: "flex",
              justifyContent: "center",
              gap: "var(--ds-space-lg)",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/demo"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "var(--ds-size-control-min)",
                padding: "0 var(--ds-space-2xl)",
                borderRadius: "var(--ds-radius-control)",
                fontSize: "var(--ds-font-size-md)",
                fontWeight: "var(--ds-font-weight-semibold)",
                color: "var(--bg-color)",
                backgroundColor: "var(--light-color)",
                border: "var(--ds-border-width-strong) solid var(--light-color)",
                boxShadow: "0 0 15px var(--glow-color-1), 0 0 30px var(--glow-color-2)",
                textDecoration: "none",
              }}
            >
              获取演示
            </a>
          </div>
        </main>
      </div>
    </section>
  );
}

export default HomeHero;
