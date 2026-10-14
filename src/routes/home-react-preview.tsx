import { createFileRoute } from "@tanstack/react-router";

import { HomeHero } from "@/components/site/home/HomeHero";

/**
 * Preview route for the React homepage migration (Stage A).
 *
 * Only Hero is migrated so far. Visit /home-react-preview to review the
 * <CybercoreBackground /> hero side-by-side with the live `/` (iframe
 * of public/source-site/index.html). Do not switch `/` until all
 * sections are migrated and reviewed.
 */
export const Route = createFileRoute("/home-react-preview")({
  head: () => ({
    meta: [
      { title: "首页预览 | 中科固源 SOURCEGUARD" },
      { name: "description", content: "中科固源 SOURCEGUARD 首页独立预览。" },
      { property: "og:title", content: "首页预览 | 中科固源 SOURCEGUARD" },
      { property: "og:description", content: "中科固源 SOURCEGUARD 安全产品首页预览。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: HomeReactPreview,
});

function HomeReactPreview() {
  return (
    <div>
      <HomeHero />
      <div
        style={{
          padding: "48px 24px",
          textAlign: "center",
          color: "var(--ds-color-text-muted)",
          fontSize: 14,
        }}
      >
        Stage A · 仅 Hero 已迁移为 React 组件。Hero 以下模块仍在
        <code style={{ margin: "0 6px" }}>public/source-site/index.html</code>
        中，将按 Story 分批迁移。
      </div>
    </div>
  );
}
