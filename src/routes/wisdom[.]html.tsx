import { createFileRoute } from "@tanstack/react-router";

import { GlobalHeader } from "@/components/site/GlobalHeader";
import { SourceHomeEmbed } from "@/components/site/SourceHomeEmbed";

const WISDOM_REACT_OWNED_SELECTORS = [".site-header", ".nav-mega-scrim"];

export const Route = createFileRoute("/wisdom.html")({
  head: () => ({
    meta: [
      { title: "Wisdom 模糊测试 | 中科固源" },
      {
        name: "description",
        content:
          "Wisdom 模糊测试面向协议、固件与工业控制场景，提供高覆盖、可复现的漏洞挖掘与安全检测能力。",
      },
      { property: "og:title", content: "Wisdom 模糊测试 | 中科固源" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/wisdom.html" },
    ],
    links: [{ rel: "canonical", href: "/wisdom.html" }],
  }),
  component: WisdomRoute,
});

function WisdomRoute() {
  return (
    <>
      <GlobalHeader />
      <SourceHomeEmbed
        src="/source-site/products/wisdom-fuzzing.html"
        title="Wisdom 模糊测试产品详情页"
        hiddenSelectors={WISDOM_REACT_OWNED_SELECTORS}
      />
    </>
  );
}
