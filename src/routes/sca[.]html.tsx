import { createFileRoute } from "@tanstack/react-router";
import {
  Boxes,
  ShieldAlert,
  ClipboardCheck,
  AlarmClock,
  Database,
  Sparkles,
  FileBadge2,
} from "lucide-react";

import {
  CTA_HREF,
  CtaCard,
  FeatureGrid,
  ProductHero,
  Section,
  SitePageShell,
  StatRow,
  TagCloud,
} from "@/components/site/ProductPageKit";

export const Route = createFileRoute("/sca.html")({
  head: () => ({
    meta: [
      { title: "Swift SCA 软件成分分析 — 中科固源" },
      {
        name: "description",
        content:
          "Swift SCA 精准检测软件供应链的漏洞与风险，支持二进制与源代码分析，覆盖 20+ 硬件架构、60+ 文件格式，保障应用安全与合规。",
      },
      {
        name: "keywords",
        content:
          "SCA，软件成分分析，二进制固件分析，SBOM，IoT 固件安全，供应链安全",
      },
      { property: "og:title", content: "Swift SCA 软件成分分析 — 中科固源" },
      {
        property: "og:description",
        content:
          "覆盖源代码与二进制的软件成分分析平台，帮助企业管理 SBOM、漏洞与合规。",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/sca.html" },
    ],
    links: [{ rel: "canonical", href: "/sca.html" }],
  }),
  component: ScaPage,
});

function ScaPage() {
  return (
    <SitePageShell>
      <ProductHero
        eyebrow="产品 · 软件成分分析"
        title={
          <>
            Swift SCA
            <br />
            软件成分分析平台
          </>
        }
        description="面向源代码、二进制与固件的成分分析平台，帮助组织识别开源与第三方组件、生成高精度 SBOM，全面守护软件供应链安全与合规。"
        primaryCta={{ label: "免费试用", href: CTA_HREF }}
        secondaryCta={{ label: "联系我们", href: CTA_HREF }}
      />

      <Section
        eyebrow="OSS 全生命周期"
        title="统一的开源治理策略，量化每一次决策"
        intro="以统一的开源政策贯穿 SDL 全流程，帮助团队在提交、构建、发布、运营各阶段量化风险与收益。"
      >
        <StatRow
          stats={[
            { value: "100%", label: "评估源代码与二进制中的全部依赖" },
            { value: "90%+", label: "多数代码库超过 90% 的代码来自开源" },
            { value: "50%", label: "预置策略自动筛除约 50% 漏洞与风险" },
            { value: "70%", label: "安全审计平均耗时减少 70%" },
          ]}
        />
      </Section>

      <Section
        surface="subtle"
        eyebrow="产品功能"
        title="从 SBOM 生成到事件响应的一体化能力"
      >
        <FeatureGrid
          columns={4}
          items={[
            {
              icon: <Boxes size={22} />,
              title: "SBOM 与资产管理",
              desc: "基于源代码、二进制与 SBOM 文件进行同源、相似度与许可证检测，生成高精度资产清单并支持审批流程。",
            },
            {
              icon: <ShieldAlert size={22} />,
              title: "漏洞与风险管理",
              desc: "自动识别与分级产品风险、漏洞与代码缺陷，与威胁建模、渗透测试和模糊测试联动加速修复。",
            },
            {
              icon: <ClipboardCheck size={22} />,
              title: "合规与法规管理",
              desc: "面向 FDA PMA、ISO 21434、CRA 及自定义策略框架，提供合规证据的自动化生成与集中管理。",
            },
            {
              icon: <AlarmClock size={22} />,
              title: "安全事件响应",
              desc: "持续监测多重威胁源，提供上下文相关的预警与调查支持，保障产品发布后的长期安全。",
            },
          ]}
        />
      </Section>

      <Section
        eyebrow="覆盖范围"
        title="支持 20+ 硬件架构和操作系统、60+ 文件格式"
        intro="从主流服务器到嵌入式设备，从源代码到已发布固件，均可被 Swift SCA 覆盖分析。"
      >
        <TagCloud
          tags={[
            "x86 / x86_64",
            "ARM / ARM64",
            "MIPS",
            "PowerPC",
            "RISC-V",
            "Linux",
            "Windows",
            "RTOS",
            "Android",
            "ELF / PE / Mach-O",
            "JAR / APK",
            "Docker Image",
            "固件镜像",
            "源代码仓库",
          ]}
        />
      </Section>

      <Section
        surface="subtle"
        eyebrow="产品优势"
        title="为什么选择 Swift SCA"
      >
        <FeatureGrid
          columns={3}
          variant="topbar"
          items={[
            {
              icon: <Sparkles size={22} />,
              title: "风险主动防御",
              desc: "快速发现、优先级排序并高效缓解最关键的网络风险、合规违规与供应链威胁，覆盖所有产品线。",
            },
            {
              icon: <FileBadge2 size={22} />,
              title: "合规保障",
              desc: "内置法规策略与安全评估深度结合，快速生成 ISO、FDA、UNECE 及 50+ 其他标准的合规报告。",
            },
            {
              icon: <Database size={22} />,
              title: "海量知识库",
              desc: "覆盖 GitHub / Sourceforge 等开源库、10 万+ 二进制/Jar 闭源库，以及 CVE/CNVD 私有漏洞库。",
            },
          ]}
        />
      </Section>

      <CtaCard
        title="准备好为您的组织解锁 安全能力 了吗?"
        description="马上申请 30 天免费试用，用 Swift SCA 构建可持续演进的软件供应链安全能力。"
      />
    </SitePageShell>
  );
}
