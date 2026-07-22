import { createFileRoute } from "@tanstack/react-router";
import {
  Microscope,
  GitBranch,
  Bug,
  Gauge,
  Layers,
  Wrench,
  ShieldCheck,
} from "lucide-react";

import {
  CTA_HREF,
  CtaCard,
  FeatureGrid,
  ProductHero,
  Section,
  SitePageShell,
  StatRow,
} from "@/components/site/ProductPageKit";

export const Route = createFileRoute("/lens.html")({
  head: () => ({
    meta: [
      { title: "Wisdom Lens 灰盒模糊测试 — 中科固源" },
      {
        name: "description",
        content:
          "Wisdom Lens 基于代码覆盖引导的灰盒模糊测试平台，深入被测系统内部路径，高效挖掘深层未知漏洞。",
      },
      {
        name: "keywords",
        content:
          "灰盒模糊测试，Coverage-guided Fuzzing，AFL，代码覆盖，漏洞挖掘",
      },
      { property: "og:title", content: "Wisdom Lens 灰盒模糊测试 — 中科固源" },
      {
        property: "og:description",
        content:
          "覆盖引导型灰盒模糊测试平台，帮助团队在代码内部路径持续发现深层漏洞。",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/lens.html" },
    ],
    links: [{ rel: "canonical", href: "/lens.html" }],
  }),
  component: LensPage,
});

function LensPage() {
  return (
    <SitePageShell>
      <ProductHero
        eyebrow="产品 · 灰盒模糊测试"
        title={
          <>
            Wisdom Lens
            <br />
            灰盒模糊测试平台
          </>
        }
        description="基于代码覆盖引导的灰盒模糊测试平台，深入被测程序内部执行路径，帮助研发与安全团队在上线前系统性挖掘深层未知漏洞。"
        primaryCta={{ label: "免费试用", href: CTA_HREF }}
        secondaryCta={{ label: "联系我们", href: CTA_HREF }}
      />

      <Section
        eyebrow="为什么需要灰盒模糊测试"
        title="从入口探索到路径深挖，覆盖黑盒难以触达的漏洞"
        intro="灰盒模糊测试结合覆盖率反馈与智能变异，在真实运行环境中持续构造异常输入，暴露隐藏在深层分支中的漏洞。"
      >
        <StatRow
          stats={[
            { value: "覆盖引导", label: "利用运行时覆盖率指导用例进化" },
            { value: "深路径", label: "触达黑盒难以覆盖的分支与状态" },
            { value: "自动化", label: "持续运行，长期沉淀高价值语料" },
            { value: "可复现", label: "崩溃自动最小化，支持一键复现" },
          ]}
        />
      </Section>

      <Section
        surface="subtle"
        eyebrow="核心能力"
        title="面向研发与安全的灰盒能力"
      >
        <FeatureGrid
          columns={4}
          items={[
            {
              icon: <Microscope size={22} />,
              title: "覆盖率引导 Fuzzing",
              desc: "通过插桩获取分支/边覆盖率，智能引导变异策略持续探索新路径。",
            },
            {
              icon: <GitBranch size={22} />,
              title: "多种变异策略",
              desc: "结合位翻转、字典、结构化输入等多种变异，兼顾广度与深度。",
            },
            {
              icon: <Bug size={22} />,
              title: "崩溃分类与去重",
              desc: "自动对崩溃进行归类、去重与最小化，减少人工分析成本。",
            },
            {
              icon: <Gauge size={22} />,
              title: "实时可视化",
              desc: "覆盖率、路径数量、崩溃趋势实时可视化，支撑测试度量与决策。",
            },
          ]}
        />
      </Section>

      <Section
        eyebrow="接入范围"
        title="支持多种目标形态与接入方式"
        intro="覆盖服务、库、命令行工具与嵌入式程序等常见形态，可与 CI 与安全流水线协同工作。"
      >
        <FeatureGrid
          columns={3}
          variant="topbar"
          items={[
            {
              icon: <Layers size={22} />,
              title: "多种目标形态",
              desc: "支持 CLI 工具、库函数、服务端程序与嵌入式软件等多种被测形态。",
            },
            {
              icon: <Wrench size={22} />,
              title: "工程化对接",
              desc: "提供 SDK 与命令行工具，可与 CI/CD、缺陷跟踪系统无缝集成。",
            },
            {
              icon: <ShieldCheck size={22} />,
              title: "长期语料沉淀",
              desc: "持续积累高价值样本与语料库，用于回归测试与安全基线。",
            },
          ]}
        />
      </Section>

      <CtaCard
        title="准备好为您的组织解锁 安全能力 了吗?"
        description="马上申请 30 天免费试用，让 Wisdom Lens 帮助团队高效发现深层未知漏洞。"
      />
    </SitePageShell>
  );
}
