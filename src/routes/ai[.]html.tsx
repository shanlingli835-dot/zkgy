import { createFileRoute } from "@tanstack/react-router";

import {
  CTA_HREF,
  FeatureGrid,
  PrimaryCta,
  ProductHero,
  Section,
  SitePageShell,
} from "@/components/site/ProductPageKit";

const SEO_DESCRIPTION =
  "Swift AI提供全方位的AI安全防护，能够有效检测和防御文本、图像、音频等多模态对抗样本攻击，并对大模型的“幻觉”、“越狱”等问题进行专项评估。同时，它全面分析算法透明度与代码安全，并对智能体开展行为测评，帮助各领域用户在AI应用全周期管控风险、满足合规，构建安全可靠的AI未来。";

export const Route = createFileRoute("/ai.html")({
  head: () => ({
    meta: [
      { title: "Swift AI 综合模型安全检测平台 - 中科固源" },
      { name: "description", content: SEO_DESCRIPTION },
      {
        name: "keywords",
        content:
          "大模型安全检测、大模型安全防御、幻觉攻击、模型越狱、逃逸攻击、投毒攻击、提示词注入、鲁棒性检测、对抗攻击检测、智能体测评、AI供应链安全",
      },
      {
        property: "og:title",
        content: "Swift AI 综合模型安全检测平台 - 中科固源",
      },
      { property: "og:description", content: SEO_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ai.html" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/ai.html" }],
  }),
  component: AiPage,
});

function AiPage() {
  return (
    <SitePageShell>
      <ProductHero
        title="Swift AI 综合模型安全检测平台"
        description="专为智能应用设计的全方位模型安全检测平台，为组织提供模型应用全生命周期的安全保护。"
        primaryCta={{ label: "免费试用", href: CTA_HREF }}
      />

      <Section title="为什么选择Swift AI？">
        <FeatureGrid
          columns={3}
          items={[
            {
              tag: "全周期",
              title: "全生命周期模型安全检测",
              desc: "覆盖训练前、上线前、运行阶段的全链路安全检测体系。",
            },
            {
              tag: "多模态",
              title: "多模态统一风险检测引擎",
              desc: "统一标准的多模态风险检测引擎，支持文本、图像、音频、视频与大模型。",
            },
            {
              tag: "合规",
              title: "对齐监管标准的合规评估体系",
              desc: "自动生成AI-BOM、风险报告与审计材料，覆盖国内外21+监管规范。",
            },
          ]}
        />
      </Section>

      <Section
        surface="subtle"
        title="Swift AI 帮助组织全面了解其模型应用的安全状况，及时发现并修复潜在风险"
      >
        <FeatureGrid
          columns={4}
          items={[
            {
              title: "供应链风险追踪",
              desc: "自动化检测AI组件、数据与模型资产，进行物料清单管理、溯源追踪、安全评估与防护，识别供应链风险，生成完整AI-BOM与安全追踪报告。",
            },
            {
              title: "多模态对抗提升",
              desc: "通过对抗样本、可解释性与公平性评估，开展视觉、文本、音频等多模态对抗测试与模型运行监控，提升AI模型鲁棒性与安全性。",
            },
            {
              title: "LLM安全评测与防护",
              desc: "基于LLM安全评测与防护体系，结合LLM防火墙、沙箱与RAG防护，实现大模型全链路安全监测与态势可视化管理。",
            },
            {
              title: "开源大模型安全优化",
              desc: "基于开源大模型安全优化框架，开展安全对齐与对抗训练、隐私保护微调及安全知识注入，实现模型韧性防护、持续学习安全与合规评估。",
            },
          ]}
        />
      </Section>

      <Section
        title="评测覆盖热力图"
        intro="标准化的安全评估能力。Swift AI 基于国家标准体系与自研多模态安全引擎，为组织提供从数据到模型到框架的全链路安全评估。"
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PrimaryCta href={CTA_HREF}>免费试用</PrimaryCta>
        </div>
      </Section>
    </SitePageShell>
  );
}
