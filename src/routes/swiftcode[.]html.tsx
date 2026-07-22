import { createFileRoute } from "@tanstack/react-router";
import {
  Code2,
  ShieldCheck,
  GitPullRequestArrow,
  Cpu,
  FileText,
  Workflow,
} from "lucide-react";

import {
  CTA_HREF,
  CtaCard,
  FeatureGrid,
  ProductHero,
  Section,
  SitePageShell,
  TagCloud,
} from "@/components/site/ProductPageKit";

export const Route = createFileRoute("/swiftcode.html")({
  head: () => ({
    meta: [
      { title: "Swift Code 源代码审计 — 中科固源" },
      {
        name: "description",
        content:
          "Swift Code 是面向 20 余种编程语言的静态代码审计平台，帮助研发团队在提交与构建阶段发现安全缺陷与合规问题。",
      },
      {
        name: "keywords",
        content:
          "源代码审计，静态分析，SAST，代码缺陷检测，GJB 合规",
      },
      { property: "og:title", content: "Swift Code 源代码审计 — 中科固源" },
      {
        property: "og:description",
        content:
          "多语言静态代码审计平台，覆盖研发从提交到发布的安全与合规能力。",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/swiftcode.html" },
    ],
    links: [{ rel: "canonical", href: "/swiftcode.html" }],
  }),
  component: SwiftCodePage,
});

function SwiftCodePage() {
  return (
    <SitePageShell>
      <ProductHero
        eyebrow="产品 · 源代码审计"
        title={
          <>
            Swift Code
            <br />
            源代码安全审计平台
          </>
        }
        description="面向 20 余种编程语言的多引擎静态分析平台，覆盖安全缺陷、代码质量与合规规则，帮助研发团队在提交与构建阶段发现并修复问题。"
        primaryCta={{ label: "免费试用", href: CTA_HREF }}
        secondaryCta={{ label: "联系我们", href: CTA_HREF }}
      />

      <Section
        eyebrow="核心能力"
        title="多引擎静态分析，覆盖研发全链路"
      >
        <FeatureGrid
          columns={4}
          items={[
            {
              icon: <Code2 size={22} />,
              title: "多引擎融合分析",
              desc: "融合数据流、控制流、污点分析等多种引擎，对代码进行深度语义级检测。",
            },
            {
              icon: <ShieldCheck size={22} />,
              title: "安全缺陷检测",
              desc: "覆盖注入、越权、内存安全、加密误用等主流安全漏洞类型。",
            },
            {
              icon: <FileText size={22} />,
              title: "编码规范与合规",
              desc: "支持 GJB、CERT、MISRA 等编码规范与自定义合规规则检查。",
            },
            {
              icon: <GitPullRequestArrow size={22} />,
              title: "DevSecOps 集成",
              desc: "与 Git、CI/CD 与缺陷跟踪系统无缝集成，支持增量与全量扫描。",
            },
          ]}
        />
      </Section>

      <Section
        surface="subtle"
        eyebrow="支持范围"
        title="覆盖 20+ 编程语言与主流构建体系"
        intro="从系统底层到业务应用，从传统单体到微服务与嵌入式，均可纳入统一的静态审计能力。"
      >
        <TagCloud
          tags={[
            "C / C++",
            "Java",
            "Go",
            "Python",
            "JavaScript / TypeScript",
            "C#",
            "Rust",
            "Kotlin",
            "Swift",
            "Objective-C",
            "PHP",
            "Ruby",
            "Scala",
            "汇编",
            "Makefile / CMake",
            "Maven / Gradle",
          ]}
        />
      </Section>

      <Section
        eyebrow="产品优势"
        title="为研发与安全团队打造的静态审计"
      >
        <FeatureGrid
          columns={3}
          variant="topbar"
          items={[
            {
              icon: <Cpu size={22} />,
              title: "高精度低误报",
              desc: "语义级分析结合可配置规则集，帮助团队关注真正需要处理的高价值缺陷。",
            },
            {
              icon: <Workflow size={22} />,
              title: "工程化扫描",
              desc: "支持增量扫描与并行分析，兼顾大型代码库的性能与开发者体验。",
            },
            {
              icon: <FileText size={22} />,
              title: "可交付报告",
              desc: "自动生成研发、管理与合规视角的多层次报告，支撑评审与整改闭环。",
            },
          ]}
        />
      </Section>

      <CtaCard
        title="准备好为您的组织解锁 安全能力 了吗?"
        description="马上申请 30 天免费试用，让 Swift Code 融入您的 DevSecOps 全流程。"
      />
    </SitePageShell>
  );
}
