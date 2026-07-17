import { createFileRoute, redirect } from "@tanstack/react-router";

/**
 * Legacy `/index.html` route (Story 1.1 / AD-3)
 *
 * 源站首页地址为 `/index.html`。为保留旧链接、SEO 与外部入口，
 * 在新站上以 301 语义 redirect 到规范首页 `/`。
 * 首页 canonical 和 og:url 都指向 `/`（见 src/routes/index.tsx），
 * 因此不会产生重复内容。
 */
export const Route = createFileRoute("/index.html")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
