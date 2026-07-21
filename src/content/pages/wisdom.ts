import type { ProductPageRecord } from "./product";

/**
 * Wisdom product content record.
 *
 * Source: docs/source-site/page-inventory.md, Wisdom product section.
 * The legacy company label is normalized to the approved public brand while
 * product positioning, module order, CTA labels, and destinations stay intact.
 */
export const wisdomPage = {
  id: "product-wisdom",
  route: "/wisdom.html",
  template: "product",
  sourcePage: "https://www.zksctest.com/wisdom.html",
  canonicalLegacyUrl: "https://www.zksctest.com/wisdom.html",
  metadata: {
    title: "Wisdom 模糊测试 - 中科固源",
    description:
      "Wisdom 工具专注于通讯协议安全，提供协议深度分析与漏洞检测，适用于汽车、物联网、工业控制等领域。立即了解产品详情与技术优势。",
    keywords:
      "协议安全、网络安全模糊测试、软件漏洞挖掘、模糊测试解决方案、协议模糊测试、蓝牙模糊测试、WIFI模糊测试、IPv4模糊测试、IPv6模糊测试、CAN总线协议模糊测试、文件模糊测试、物联网协议模块、API模糊测试",
    unresolved: ["源站未识别 canonical；当前保留旧站 URL 作为迁移记录"],
  },
  hero: {
    eyebrow: "Wisdom 模糊测试",
    title: "在黑客攻击之前发现漏洞，Wisdom 守护您的协议安全",
    description:
      "无需任何协议或模糊测试相关知识，开箱即用，轻松识别协议中的缺陷和零日漏洞，增强被测对象的安全性、健壮性与稳定性。",
    primaryCta: { label: "免费试用", href: "/contact.html" },
    signals: ["开箱即用", "持续自动测试", "缺陷可复现"],
    flowTitle: "持续模糊测试链路",
    flow: ["协议模板", "智能变异", "实时监测", "漏洞复现"],
  },
  modules: [
    {
      id: "why-fuzzing",
      type: "value",
      eyebrow: "测试价值",
      title: "为什么要使用模糊测试？",
      description:
        "把漏洞发现前移到产品上市之前，以高度自动化的方式持续探索常规测试难以覆盖的未知缺陷。",
      items: [
        {
          id: "find-early",
          marker: "早发现",
          title: "在程序开发时尽早发现漏洞",
          description: "集成到开发流程中进行自动测试，在产品上市之前发现漏洞和安全问题。",
        },
        {
          id: "zero-day",
          marker: "60%+",
          title: "黑客挖掘漏洞的主要方式",
          description:
            "超过 60% 的软件漏洞利用源于零日缺陷，模糊测试可以在黑客攻击之前发现未知问题。",
        },
        {
          id: "automation",
          marker: "高效",
          title: "使用成本低、见效快",
          description: "在没有人工干预的情况下持续运行，高效发现程序错误。",
        },
        {
          id: "black-box",
          marker: "价值",
          title: "发现其他测试方式难以发现的漏洞",
          description: "黑盒模糊测试更接近系统真实使用环境，能够发现常规测试方法无法发现的问题。",
        },
      ],
    },
    {
      id: "product-capabilities",
      type: "capabilities",
      eyebrow: "产品功能",
      title: "Wisdom 帮助组织快速发现并修复安全缺陷",
      items: [
        {
          id: "protocol-templates",
          title: "数百种协议模板",
          description: "支持用户自行定义协议结构和字段变异策略，灵活适配各类专有协议场景。",
        },
        {
          id: "mutation-engine",
          title: "先进的变异算法",
          description: "基于自研变异算法生成高覆盖率测试用例，模拟真实交互行为并触发潜在缺陷。",
        },
        {
          id: "target-monitoring",
          title: "实时监测目标",
          description: "实时监测目标行为变化，自动判断崩溃、异常响应等缺陷迹象，并追踪缺陷来源。",
        },
        {
          id: "reproduction",
          title: "快速复现漏洞",
          description: "通过多种方式重放测试用例、回溯交互记录，辅助定位问题并验证修复。",
        },
      ],
    },
    {
      id: "product-advantages",
      type: "advantages",
      eyebrow: "产品优势",
      title:
        "Wisdom 协议模糊测试以自研智能引擎为核心，在性能、检测覆盖度、可扩展性方面全面领先同类产品",
      items: [
        {
          id: "certification",
          title: "国际标准认证",
          description:
            "全球首款通过 ISO 21434 与 IEC 62443 国际安全标准认证的模糊测试工具，满足高等级安全需求行业的采购要求与合规标准。",
        },
        {
          id: "discovery-efficiency",
          title: "高效发现漏洞",
          description: "创新优选的变异算法可在相同时间内通过更少测试用例，精准发现更多真实缺陷。",
        },
        {
          id: "test-coverage",
          title: "全面的测试覆盖",
          description:
            "覆盖多种变异策略与交互状态模拟，探索协议测试的边界条件，提升测试深度与广度。",
        },
        {
          id: "reporting",
          title: "详细的测试报告",
          description:
            "每个漏洞附带触发用例、异常监控信息和可复现漏洞的复现包，帮助开发者快速修复。",
        },
      ],
    },
    {
      id: "proprietary-protocol",
      type: "protocol",
      eyebrow: "专有协议测试",
      title: "Wisdom 无需定制开发即可测试您的专有协议",
      description:
        "通过可视化协议建模快速搭建专有协议，并根据字段含义自动匹配变异算法，无需复杂配置即可开始测试。",
      items: [
        {
          id: "visual-modeling",
          marker: "01",
          title: "可视化协议建模",
          description: "在界面中快速搭建专有协议，清楚定义结构与字段。",
        },
        {
          id: "semantic-mutation",
          marker: "02",
          title: "语义理解变异",
          description: "根据字段含义自动匹配变异算法，减少人工配置。",
        },
        {
          id: "one-click-test",
          marker: "03",
          title: "一键开始测试",
          description: "无需定制开发即可持续执行测试并捕获异常。",
        },
      ],
      cta: { label: "免费试用", href: "/contact.html" },
    },
    {
      id: "tool-integration",
      type: "integration",
      eyebrow: "DevSecOps 与集成",
      title: "与您现有的工具和系统无缝集成",
      description: "把协议测试接入开发流程，以自动测试、缺陷回溯和修复验证形成持续运行的安全闭环。",
      items: [
        {
          id: "development-workflow",
          title: "开发流程",
          description: "集成到开发流程中进行自动测试，在产品上市之前发现安全问题。",
        },
        {
          id: "custom-structure",
          title: "自定义协议",
          description: "支持自行定义协议结构与字段变异策略，适配专有协议场景。",
        },
        {
          id: "evidence-loop",
          title: "复现与验证",
          description: "重放测试用例并回溯交互记录，辅助定位缺陷和验证修复。",
        },
      ],
    },
  ],
  bottomCta: {
    title: "准备好为您的组织解锁安全能力了吗？",
    description: "马上申请 30 天免费试用",
    primaryCta: { label: "免费试用", href: "/contact.html" },
  },
} as const satisfies ProductPageRecord;
