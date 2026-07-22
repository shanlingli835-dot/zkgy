import { createFileRoute } from "@tanstack/react-router";
import {
  Brain,
  ShieldCheck,
  Radar,
  Layers,
  FileCheck2,
  Bot,
  Workflow,
  BadgeCheck,
} from "lucide-react";

import {
  ArchitectureDiagram,
  CTA_HREF,
  CtaCard,
  FeatureGrid,
  ProductHero,
  Section,
  SitePageShell,
  StatRow,
} from "@/components/site/ProductPageKit";

export const Route = createFileRoute("/ai.html")({
  head: () => ({
    meta: [
      { title: "Swift AI 综合模型安全检测平台 — 中科固源" },
      {
        name: "description",
        content:
          "Swift AI 面向大模型与多模态 AI 应用，提供从模型安全评估、对抗测试到全生命周期防护的一体化安全检测能力。",
      },
      {
        name: "keywords",
        content:
          "AI安全检测，大模型安全，多模态安全，对抗样本，模型鲁棒性，模型合规",
      },
      { property: "og:title", content: "Swift AI 综合模型安全检测平台 — 中科固源" },
      {
        property: "og:description",
        content:
          "覆盖文本、图像、音频、代码的模型安全评估与对抗测试平台，帮助企业构建可信 AI。",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/ai.html" },
    ],
    links: [{ rel: "canonical", href: "/ai.html" }],
  }),
  component: AiPage,
});

function AiPage() {
  return (
    <SitePageShell>
      <ProductHero
        eyebrow="产品 · AI 安全"
        title={
          <>
            Swift AI
            <br />
            综合模型安全检测平台
          </>
        }
        description="面向大语言模型、多模态与生成式 AI 系统，构建从模型安全评估、对抗攻击测试、内容合规到运行时防护的全生命周期能力，帮助您安全、合规地释放 AI 价值。"
        primaryCta={{ label: "免费试用", href: CTA_HREF }}
        secondaryCta={{ label: "联系我们", href: CTA_HREF }}
      />

      <Section
        eyebrow="产品定位"
        title="从模型到应用的一体化 AI 安全底座"
        intro="覆盖训练前的数据与模型审查、上线前的鲁棒性与合规检测、以及运行时的输入输出防护，形成端到端的可信 AI 能力。"
      >
        <StatRow
          stats={[
            { value: "8+", label: "支持的核心攻击/评测类别" },
            { value: "多模态", label: "覆盖文本、图像、音频、代码" },
            { value: "全周期", label: "训练前 · 上线前 · 运行时" },
            { value: "可扩展", label: "支持接入自研与开源模型" },
          ]}
        />
      </Section>

      <Section
        surface="subtle"
        eyebrow="核心能力"
        title="四大核心能力，构建可信 AI"
      >
        <FeatureGrid
          columns={4}
          items={[
            {
              icon: <Brain size={22} />,
              title: "模型安全评估",
              desc: "面向大模型与多模态模型，提供鲁棒性、公平性、隐私风险等多维度的安全画像。",
            },
            {
              icon: <Radar size={22} />,
              title: "对抗攻击测试",
              desc: "覆盖越狱、注入、投毒、绕过等主流攻击手法，量化模型在真实攻击下的抗压能力。",
            },
            {
              icon: <ShieldCheck size={22} />,
              title: "内容安全与合规",
              desc: "对模型输入输出进行多维度安全审查，覆盖违规、偏见、有害内容与合规要求。",
            },
            {
              icon: <Bot size={22} />,
              title: "AI 应用运行防护",
              desc: "提供智能体、RAG、多轮对话等场景的运行时护栏，防止指令注入与敏感数据泄漏。",
            },
          ]}
        />
      </Section>

      <Section
        eyebrow="产品架构"
        title="Swift AI 平台整体架构"
        intro="以统一评测引擎为核心，分层承载数据、模型、应用与合规能力，帮助团队按需组合部署。"
      >
        <ArchitectureDiagram
          layers={[
            {
              label: "应用与场景",
              items: ["智能问答", "AI 助手 / Agent", "RAG 检索", "内容生成"],
            },
            {
              label: "安全能力层",
              items: ["模型评测", "对抗测试", "内容审查", "运行时护栏"],
            },
            {
              label: "评测与知识库",
              items: ["测试用例库", "攻击样本", "合规规则", "风险知识图谱"],
            },
            {
              label: "接入层",
              items: ["开源模型", "自研模型", "云端 API", "私有部署"],
            },
          ]}
        />
      </Section>

      <Section
        surface="subtle"
        eyebrow="产品优势"
        title="为什么选择 Swift AI"
      >
        <FeatureGrid
          columns={3}
          variant="topbar"
          items={[
            {
              icon: <Layers size={22} />,
              title: "覆盖广",
              desc: "覆盖大模型、多模态、生成式与传统 AI 场景，一套平台满足多种业务形态。",
            },
            {
              icon: <Workflow size={22} />,
              title: "可扩展",
              desc: "评测用例、攻击方法、内容策略均可自定义扩展，随业务与合规要求持续演进。",
            },
            {
              icon: <FileCheck2 size={22} />,
              title: "合规就绪",
              desc: "对齐国内外 AI 治理与内容合规要求，帮助企业形成可提交的评估与审计证据。",
            },
            {
              icon: <BadgeCheck size={22} />,
              title: "工程化落地",
              desc: "与 CI/CD、MLOps 流水线无缝对接，让 AI 安全成为可持续运营的工程能力。",
            },
            {
              icon: <Radar size={22} />,
              title: "实战化用例",
              desc: "沉淀真实业务与攻防对抗中的用例，评测结果贴近生产环境的实际风险表现。",
            },
            {
              icon: <ShieldCheck size={22} />,
              title: "端到端闭环",
              desc: "从检测、复现、修复建议到复测形成闭环，帮助团队持续改进模型安全性。",
            },
          ]}
        />
      </Section>

      <CtaCard
        title="准备好为您的组织解锁 AI 安全能力 了吗?"
        description="马上申请 30 天免费试用，让 Swift AI 帮助您评估、加固并持续守护关键 AI 系统。"
      />
    </SitePageShell>
  );
}
