import { createFileRoute } from "@tanstack/react-router";

import { CybercoreHero } from "@/components/site/CybercoreHero";
import { GlobalFooter } from "@/components/site/GlobalFooter";
import { GlobalHeader } from "@/components/site/GlobalHeader";
import { SiteShell } from "@/components/site/SiteShell";

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
    <SiteShell header={<GlobalHeader />} footer={<GlobalFooter />}>
      <CybercoreHero />
    </SiteShell>
  );
}
