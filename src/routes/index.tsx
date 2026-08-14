import { createFileRoute } from "@tanstack/react-router";

import { GlobalHeader } from "@/components/site/GlobalHeader";
import { SourceHomeEmbed } from "@/components/site/SourceHomeEmbed";
import { HomeHero } from "@/components/site/home/HomeHero";
import {
  CtaBanner,
  CTA_HREF,
  HOME_FOOTER_HIDDEN_SELECTORS,
} from "@/components/site/ProductPageKit";

/** 首页正文：CTA 与页脚由共享组件接管，故在正文嵌入中隐藏。 */
const SOURCE_HOME_REACT_OWNED_SELECTORS = [
  ".site-header",
  ".nav-mega-scrim",
  "main > .jasper-hero-shell",
  ".solution-cta-bar",
  ".jasper-footer",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PathGuard | 中科固源网络安全测试工具供应商" },
      {
        name: "description",
        content:
          "面向网联汽车、工业控制与特种领域，提供模糊测试、代码审计、供应链分析与 AI 安全检测能力。",
      },
      { property: "og:title", content: "中科固源 | SOURCEGUARD" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomeRoute,
});

function HomeRoute() {
  return (
    <>
      <GlobalHeader />
      <HomeHero />
      <SourceHomeEmbed hiddenSelectors={SOURCE_HOME_REACT_OWNED_SELECTORS} fitContent />
      <CtaBanner
        title="为关键行业建立可验证、可交付、可复用的安全能力。"
        description="了解中科固源如何为您的业务提供专业安全测试产品与技术服务。"
        primaryCta={{ label: "免费试用", href: CTA_HREF }}
        secondaryCta={{ label: "联系我们", href: CTA_HREF }}
      />
      <SourceHomeEmbed
        hiddenSelectors={HOME_FOOTER_HIDDEN_SELECTORS}
        fitContent
        title="页脚"
      />
    </>
  );
}
