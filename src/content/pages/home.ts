/**
 * Home page content record
 *
 * 来源：docs/source-site/page-inventory.md §1 首页
 * 保留源站文案含义、模块顺序、按钮文字与跳转地址。
 * 品牌名按 AGENTS.md 规范化为 "中科固源 / SOURCEGUARD"。
 */

export type PageRecord = {
  id: string;
  route: string;
  template: "home" | "product" | "solution" | "service" | "about";
  canonicalLegacyUrl: string;
  title: string;
  description: string;
  keywords: string;
  unresolved?: string[];
};

export const homePage: PageRecord = {
  id: "home",
  route: "/",
  template: "home",
  canonicalLegacyUrl: "/index.html",
  title: "中科固源 | SOURCEGUARD",
  description:
    "充分整合集团在低空发展体系、商业航天发展体系及生态协同方面的资源优势，致力于构建星图集团在低空与商业航天领域的安全底座，力争成为全球领先的低空及商业航天网络安全产品与解决方案提供商。",
  keywords: "代码安全、协议安全、供应链安全、AI安全、第三方测评能力。",
  unresolved: ["canonical (源站未识别，待确认)"],
};

/** 主 CTA — 全站统一「免费试用」→ /contact.html */
export const homeHero = {
  eyebrow: "中科固源 · SOURCEGUARD",
  title: "致力于成为全球领先的 低空与商业航天 网络安全方案提供商",
  description:
    "面向低空经济、商业航天、网联汽车、工业控制等领域，提供全栈安全与可信的解决方案。",
  primaryCta: { label: "免费试用", href: "/contact.html" },
};

export const homeStats = {
  title: "合作生态",
  items: [
    { value: "70%", label: "安全审计平均时间减少" },
    { value: "80%", label: "用户在使用我们解决方案后快速修复漏洞和缺陷" },
    { value: "90%", label: "用户降低了其整体应用风险" },
  ],
};

export const homeCapabilities = {
  title: "核心安全能力",
  items: [
    {
      name: "协议安全",
      description:
        "针对车载、航天、低空通信等专用私有协议进行安全分析与模糊测试，防御 DoS 攻击、中间人攻击、重放攻击等通信风险。",
    },
    {
      name: "智能安全",
      description:
        "围绕模型安全、数据安全、算法安全、智能体安全等核心方向构建 AI 安全保障体系。",
    },
    {
      name: "供应链安全",
      description:
        "识别第三方组件、开源依赖与外部模块的安全性，追踪漏洞来源与版本风险，防止供应链污染与隐患传播。",
    },
    {
      name: "代码安全",
      description:
        "面向多语言、多框架的源代码安全分析，覆盖静态检测、依赖分析与弱点识别，提升软件开发阶段的安全质量。",
    },
    {
      name: "应用安全",
      description:
        "对 Web、移动端类应用进行漏洞扫描与渗透测试，防御注入攻击、权限越界与接口风险。",
    },
    {
      name: "数据安全",
      description: "聚焦数据来源、存储与共享环节的安全防护，提供隐私合规检测。",
    },
  ],
};

export const homeProducts = {
  title: "核心产品介绍",
  items: [
    {
      name: "Wisdom 模糊测试",
      description: "识别协议中的缺陷和零日漏洞，增强被测对象的安全性、健壮性、稳定性。",
      href: "/wisdom.html",
    },
    {
      name: "Swift AI 综合模型安全检测平台",
      description:
        "专为智能应用设计的全方位模型安全检测平台，为组织提供模型应用全生命周期的安全保护。",
      href: "/ai.html",
    },
    {
      name: "Swift SCA 软件成分分析",
      description: "精准检测软件供应链的漏洞与风险，保障组织应用安全与合规。",
      href: "/sca.html",
    },
    {
      name: "Wisdom Lens 灰盒模糊测试",
      description: "基于灰盒测试技术，嵌入 DevSecOps 流程，自动捕获零日缺陷。",
      href: "/lens.html",
    },
    {
      name: "Swift Code 源代码审计",
      description:
        "利用多种技术自动识别语义缺陷、安全漏洞和编码规则等问题，适配国内编码标准和国产环境，支持灵活定制。",
      href: "/swiftcode.html",
    },
  ],
};

export const homeSolutions = {
  title: "行业解决方案",
  items: [
    {
      tag: "网联汽车",
      name: "网联汽车信息安全实验室解决方案",
      features:
        "「工具链 + 合规」双轮驱动，为汽车主机厂、检测机构、零部件厂商一站式交付覆盖 GB 44495 与 R155 全项检测所需的完整实验能力。",
      value: "工具即合规、一键自动化、开放可扩展、人才体系培养、低成本高收益。",
      href: "/solution-auto.html",
    },
    {
      tag: "特种领域",
      name: "特种领域网络安全实验解决方案",
      features:
        "「工具链 + 合规」双引擎，为研究所、测评中心、装备承制单位交付覆盖脆弱性、渗透性、生存性全指标的自主可控实验能力。",
      value: "工具即合规、自主可控、一键自动化、高扩展架构、低成本高收益。",
      href: "/solution-special.html",
    },
  ],
};

export const homeAbout = {
  title: "关于中科固源",
  body: "中科固源（原中科数测科技有限公司）是中科星图股份有限公司（股票代码：688568）的子公司，具备国家高新技术企业及省级专精特新企业资质。公司依托中科星图集团「一体两翼」发展战略，充分整合集团在低空发展体系、商业航天发展体系及生态协同方面的资源优势，致力于构建星图集团在低空与商业航天领域的安全底座，力争成为全球领先的低空及商业航天网络安全产品与解决方案提供商。",
  cta: { label: "了解更多", href: "/about.html" },
  stats: [
    { value: "150", label: "员工人数" },
    { value: "20%", label: "硕士以上学历" },
    { value: "60%", label: "研发占比" },
  ],
};

export const homeCases = {
  title: "成功案例",
  items: [
    {
      tag: "网联汽车",
      title: "成功中标零跑汽车信息安全漏洞扫描工具采购项目",
    },
    {
      tag: "高等院校",
      title: "成功中标西安电子科技大学通讯协议模糊测试漏洞挖掘教学实践平台项目",
    },
    {
      tag: "工业控制",
      title: "成功中标国内某头部光伏企业固件漏洞扫描工具采购项目",
    },
  ],
};

export const homeBottomCta = {
  title: "准备好为您的组织解锁 安全能力 了吗？",
  description: "马上申请 30 天免费试用",
  primaryCta: { label: "免费试用", href: "/contact.html" },
};
