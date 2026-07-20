/**
 * Home page content record (Story 1.1)
 *
 * 来源：docs/source-site/page-inventory.md §1 首页
 *
 * 这里只承载 Story 1.1 需要的最小字段：route / template / SEO / legacy URL。
 * 首页模块（hero / capabilities / products / solutions / cases / bottom CTA）
 * 会在 Story 1.3–1.5 逐步补齐。CTA 目标路径必须回查页面盘点，不得改写。
 */

export type PageRecord = {
  /** 内部稳定 kebab-case id */
  id: string;
  /** 页面路由（新站；`/` 与旧 `/index.html` 均映射到首页） */
  route: string;
  /** 页面模板类型（AD-4） */
  template: "home" | "product" | "solution" | "service" | "about";
  /** 源站旧路由，用于向后兼容和 canonical 归档 */
  canonicalLegacyUrl: string;
  /** SEO */
  title: string;
  description: string;
  keywords: string;
  /** 未从源站识别到的字段 */
  unresolved?: string[];
};

export const homePage: PageRecord = {
  id: "home",
  route: "/",
  template: "home",
  canonicalLegacyUrl: "/index.html",
  // SEO 三项均来自源站页面盘点 §1
  title: "中科固源 | SOURCEGUARD",
  description:
    "充分整合集团在低空发展体系、商业航天发展体系及生态协同方面的资源优势，致力于构建星图集团在低空与商业航天领域的安全底座，力争成为全球领先的低空及商业航天网络安全产品与解决方案提供商。",
  keywords: "代码安全、协议安全、供应链安全、AI安全、第三方测评能力。",
  // 源站盘点标注：Canonical 未识别 → 记为待确认
  unresolved: ["canonical (源站未识别，待确认)"],
};
