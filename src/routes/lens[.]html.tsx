import { createFileRoute } from "@tanstack/react-router";
import { Gauge, Wrench, Bug, FileText, Sparkles, Repeat, Search } from "lucide-react";

import { HomeAccordion } from "@/components/site/HomeAccordion";
import {
  CTA_HREF,
  FeatureGrid,
  ProductHero,
  Section,
  SitePageShell,
} from "@/components/site/ProductPageKit";

const SEO_DESCRIPTION =
  "Wisdom Lens专为发现二进制和源代码中的深层漏洞而设计。它通过插桩实时捕获代码覆盖情况，智能引导测试用例触发更多执行路径。结合强大的变异算法，可自动、持续地挖掘崩溃和内存破坏等关键安全缺陷，显著提升漏洞发现效率，是软件开发与安全测试环节中保障软件质量的利器。";

export const Route = createFileRoute("/lens.html")({
  head: () => ({
    meta: [
      { title: "Wisdom Lens 灰盒模糊测试 - 中科固源" },
      { name: "description", content: SEO_DESCRIPTION },
      {
        name: "keywords",
        content: "模糊测试，灰盒模糊，二进制模糊，动态插桩，自动生存测试驱动",
      },
      { property: "og:title", content: "Wisdom Lens 灰盒模糊测试 - 中科固源" },
      { property: "og:description", content: SEO_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/lens.html" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/lens.html" }],
  }),
  component: LensPage,
});

function LensPage() {
  return (
    <SitePageShell>
      <ProductHero
        title="Wisdom Lens 灰盒模糊测试"
        description="基于灰盒测试技术，嵌入DevSecOps流程，自动捕获零日缺陷。"
        primaryCta={{ label: "免费试用", href: CTA_HREF }}
      />

      <HomeAccordion
        title="产品功能"
        items={[
          {
            icon: <Gauge size={56} strokeWidth={1.25} aria-hidden />,
            title: "覆盖率反馈和优化",
            desc: "支持代码覆盖率反馈和智能优化，提升测试全面性。",
          },
          {
            icon: <Wrench size={56} strokeWidth={1.25} aria-hidden />,
            title: "测试驱动生成",
            desc: "对被测对象进行静态分析，基于大模型自动生成测试驱动。",
          },
          {
            icon: <Bug size={56} strokeWidth={1.25} aria-hidden />,
            title: "缺陷挖掘与定位",
            desc: "具备自动挖掘和精准定位缺陷的能力，帮助开发者提升代码质量。",
          },
          {
            icon: <FileText size={56} strokeWidth={1.25} aria-hidden />,
            title: "提供修复建议",
            desc: "生成详细的测试报告，内容涵盖缺陷的类型和触发缺陷的用例；基于大语言模型提供修复建议并自动生成修复代码，提升修复效率。",
          },
        ]}
      />

      <Section surface="subtle" title="产品优势">
        <FeatureGrid
          columns={3}
          variant="topbar"
          items={[
            {
              icon: <Sparkles size={22} />,
              title: "智能化测试用例构建",
              desc: "基于 AI 大模型自动生成高质量的测试用例，提升漏洞检测的覆盖率与准确性。",
            },
            {
              icon: <Repeat size={22} />,
              title: "漏洞自动复现与 PoC 生成",
              desc: "自动生成最小化输入用例和 PoC 脚本，快速验证漏洞可行性，提升复现效率。",
            },
            {
              icon: <Search size={22} />,
              title: "可视化报告与根因定位",
              desc: "展示漏洞相关的函数、调用栈和源代码片段，直观定位问题。",
            },
          ]}
        />
      </Section>
    </SitePageShell>
  );
}
