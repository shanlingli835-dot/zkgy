/**
 * Global navigation & footer data (Story 1.2)
 *
 * 来源：docs/source-site/page-inventory.md 首页"按钮/链接/跳转"表 +
 * docs/bmad/epics.md Story 1.2 明确要求保留的未纳入页面链接
 * （contact.html / datacheck.html / softwareassess.html /
 * service-secas.html / integration.html）。
 *
 * 规则：
 * - 桌面导航与移动导航共享同一份数据源（本文件）。
 * - 所有目标路径保持源站 `.html` 后缀，不得改写。
 * - 未纳入本轮重构范围的页面链接以旧 `.html` 直接指向源站上线时的稳定路径，
 *   在后续 Story 建立自身路由前，仍作为 <a href> 保留可访问性。
 */

export type NavLink = {
  label: string;
  href: string;
  /** 源站盘点未纳入本轮重构范围的旧 .html 链接 */
  legacyOnly?: boolean;
  /** 简短说明，用于二级菜单下的辅助文字（可选） */
  description?: string;
};

export type NavGroup = {
  id: string;
  label: string;
  /** 一级入口自身若有对应页面（例：公司介绍 → /about.html），可点击 */
  href?: string;
  children?: NavLink[];
};

export const primaryNav: NavGroup[] = [
  {
    id: "products",
    label: "产品",
    children: [
      { label: "Wisdom 模糊测试", href: "/wisdom.html" },
      { label: "Swift AI 综合模型安全检测平台", href: "/ai.html" },
      { label: "Swift SCA 软件成分分析", href: "/sca.html" },
      { label: "Swift Code 源代码审计", href: "/swiftcode.html" },
      { label: "Wisdom Lens 灰盒模糊测试", href: "/lens.html" },
      { label: "Swift Pentest 自动化渗透测试", href: "/swiftpenstest.html" },
      { label: "数据标准规范检查系统", href: "/datacheck.html", legacyOnly: true },
      { label: "软件质量评估系统", href: "/softwareassess.html", legacyOnly: true },
    ],
  },
  {
    id: "solutions",
    label: "解决方案",
    children: [
      { label: "网联汽车", href: "/solution-auto.html" },
      { label: "特种装备", href: "/solution-special.html" },
    ],
  },
  {
    id: "services",
    label: "服务",
    children: [
      { label: "三方测评", href: "/service-secas.html", legacyOnly: true },
      { label: "渗透测试", href: "/service-penstest.html" },
      { label: "系统集成", href: "/integration.html", legacyOnly: true },
    ],
  },
  {
    id: "about",
    label: "公司介绍",
    href: "/about.html",
  },
  {
    id: "contact",
    label: "联系我们",
    href: "/contact.html",
  },
];

/** 主 CTA（源站首页多处"免费试用"均指向 /contact.html） */
export const primaryCta: NavLink = {
  label: "免费试用",
  href: "/contact.html",
};

/** 页脚内部导航（复用主导航结构，扁平呈现） */
export const footerNavGroups: NavGroup[] = primaryNav.filter((g) => g.id !== "contact");

/** 首页视觉体系使用的页脚分组；目的地仍来自全站公开路由。 */
export const footerHomepageNav: NavGroup[] = [
  {
    id: "footer-products",
    label: "安全测试工具",
    children: primaryNav
      .find((group) => group.id === "products")
      ?.children?.filter((item) => !item.legacyOnly),
  },
  {
    id: "footer-solutions",
    label: "行业场景",
    children: primaryNav.find((group) => group.id === "solutions")?.children,
  },
  {
    id: "footer-services",
    label: "技术服务",
    children: primaryNav
      .find((group) => group.id === "services")
      ?.children?.filter((item) => item.href !== "/integration.html"),
  },
  {
    id: "footer-company",
    label: "关于我们",
    children: [
      { label: "公司介绍", href: "/about.html" },
      { label: "联系销售", href: "/contact.html" },
      { label: "合作生态", href: "/" },
    ],
  },
];

export const footerAboutLinks: NavLink[] = [
  { label: "公司介绍", href: "/about.html" },
  { label: "客户案例", href: "/" },
  { label: "联系我们", href: "/contact.html" },
  { label: "加入我们", href: "/contact.html" },
];

export const footerUtilityLinks: NavLink[] = [
  { label: "联系邮箱", href: "/contact.html" },
  { label: "联系电话", href: "/contact.html" },
  { label: "合作生态", href: "/" },
  { label: "更多渠道", href: "/about.html" },
];

/** 页脚外部链接（源站页脚） */
export const footerExternalLinks: NavLink[] = [
  { label: "CSDN", href: "https://blog.csdn.net/2501_91003657?spm=1011.2480.3001.5343" },
  { label: "知乎", href: "https://www.zhihu.com/" },
  { label: "安全客", href: "https://www.anquanke.com" },
  { label: "开源中国", href: "https://www.oschina.net" },
  { label: "Freebuf", href: "https://www.freebuf.com/" },
  { label: "51CTO", href: "https://blog.51cto.com/" },
  { label: "百家号", href: "https://baijiahao.baidu.com/builder/theme/bjh/login" },
  { label: "今日头条", href: "https://www.toutiao.com/" },
];

/** 备案信息（源站页脚） */
export const footerBeian = {
  label: "京ICP备15067074号",
  href: "https://beian.miit.gov.cn/",
};

/** 品牌信息 */
export const brand = {
  name: "中科固源",
  short: "SOURCEGUARD",
  displayName: "中科固源 / SOURCEGUARD",
  homeHref: "/",
};
