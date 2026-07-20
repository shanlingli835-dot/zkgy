import { createFileRoute } from "@tanstack/react-router";

import { SiteShell } from "@/components/site/SiteShell";
import { GlobalHeader } from "@/components/site/GlobalHeader";
import { GlobalFooter } from "@/components/site/GlobalFooter";
import { homePage } from "@/content/pages/home";

/**
 * Home route (Story 1.1)
 *
 * 只交付首页最小可运行骨架：
 * - SEO title / description / keywords 来自源站页面盘点 §1
 * - SiteShell + tokens 已接入
 * - 首屏 hero、合作生态、核心能力、产品入口、方案、案例、底部 CTA
 *   将由 Story 1.3 – 1.5 逐步实现；这里只留占位标题以让 route 200 且不空白。
 * - CTA 路径（例："免费试用" → /contact.html）在 Story 1.3 引入前不渲染，
 *   避免用错误链接冒充源站行为。
 */
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

function HomeRoute() {
  return (
    <SiteShell header={<GlobalHeader />} footer={<GlobalFooter />}>
      <section
        aria-labelledby="home-skeleton-title"
        style={{
          maxWidth: "var(--zksc-content-max-width)",
          margin: "0 auto",
          padding:
            "var(--zksc-section-y-desktop) var(--zksc-gutter-desktop)",
        }}
      >
        <p
          style={{
            fontSize: "var(--zksc-font-size-label)",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "var(--zksc-primary)",
            margin: 0,
          }}
        >
          中科数测 · ZKSC
        </p>
        <h1
          id="home-skeleton-title"
          style={{
            fontSize: "var(--zksc-font-size-display-lg)",
            fontWeight: 650,
            lineHeight: "var(--zksc-line-height-display)",
            letterSpacing: "var(--zksc-letter-spacing)",
            color: "var(--zksc-ink-primary)",
            margin: "var(--zksc-space-4) 0 var(--zksc-space-5)",
            maxWidth: "24ch",
          }}
        >
          官网首页骨架已就绪
        </h1>
        <p
          style={{
            fontSize: "var(--zksc-font-size-body-lg)",
            color: "var(--zksc-ink-secondary)",
            maxWidth: "60ch",
            margin: 0,
          }}
        >
          Story 1.1：静态首页外壳、设计 tokens 和基础 SEO 已接入。
          首屏、合作生态、核心安全能力、产品入口、行业解决方案、成功案例与底部 CTA
          将由后续 Story（1.2 – 1.5）按源站盘点逐步落地。
        </p>
      </section>
    </SiteShell>
  );
}
