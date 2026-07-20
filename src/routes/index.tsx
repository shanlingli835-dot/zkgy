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
        aria-labelledby="home-title"
        className="home-intro"
        style={{
          maxWidth: "var(--ds-container-page)",
          margin: "0 auto",
          padding: "var(--ds-section-y-desktop) var(--ds-gutter-desktop)",
        }}
      >
        <p
          style={{
            fontSize: "var(--ds-font-size-sm)",
            fontWeight: "var(--ds-font-weight-semibold)",
            letterSpacing: "var(--ds-letter-spacing-default)",
            color: "var(--ds-color-action-primary)",
            margin: 0,
          }}
        >
          中科固源 · SOURCEGUARD
        </p>
        <h1
          id="home-title"
          style={{
            fontSize: "var(--ds-font-size-4xl)",
            fontWeight: "var(--ds-font-weight-semibold)",
            lineHeight: "var(--ds-line-height-4xl)",
            letterSpacing: "var(--ds-letter-spacing-default)",
            color: "var(--ds-color-text-primary)",
            margin: "var(--ds-space-lg) 0 var(--ds-space-xl)",
            maxWidth: "24ch",
          }}
        >
          致力于成为全球领先的低空与商业航天网络安全方案提供商
        </h1>
        <p
          style={{
            fontSize: "var(--ds-font-size-lg)",
            color: "var(--ds-color-text-secondary)",
            maxWidth: "60ch",
            margin: 0,
          }}
        >
          {homePage.description}
        </p>
      </section>
      <style>{`
        @media (max-width: 767px) {
          .home-intro {
            padding: var(--ds-section-y-mobile) var(--ds-gutter-mobile) !important;
          }
        }
      `}</style>
    </SiteShell>
  );
}
