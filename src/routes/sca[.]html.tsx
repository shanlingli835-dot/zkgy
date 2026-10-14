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

import scaOssAuditImage from "@/assets/sca-oss-audit.jpg";
import scaOssDepsImage from "@/assets/sca-oss-deps.jpg";
import scaOssFilterImage from "@/assets/sca-oss-filter.jpg";
import scaOssShareImage from "@/assets/sca-oss-share.jpg";
import scaSbomComponentsImage from "@/assets/sca-sbom-components.png";
import scaVulnManagementImage from "@/assets/sca-vuln-management.png";
import scaComplianceVerificationImage from "@/assets/sca-compliance-verification.png";
import scaIncidentResponseImage from "@/assets/sca-incident-response.png";
import scaHeroDashboard from "@/assets/sca-hero-dashboard.png";
import { AdvantageTriad } from "@/components/site/AdvantageTriad";
import { GalleryHoverCarousel } from "@/components/site/GalleryHoverCarousel";
import { HomeAccordion } from "@/components/site/HomeAccordion";
import OrbitingCirclesGlobe from "@/components/ui/orbiting-circles-globe";

import {
  CTA_HREF,

  ProductHero,
  Section,
  SitePageShell,
} from "@/components/site/ProductPageKit";

const SEO_DESCRIPTION =
  "固件漏洞挖掘工具是一款强大的二进制反汇编安全评估平台，旨在提供全面的IoT设备固件安全解决方案。我们自动进行二进制固件分析，提供项目数字孪生指纹工程、高度多属性检测引擎、特性自软件组成分析以及基于特征的智能漏洞过滤机制，全面保障您的软件供应链安全。我们支持20多种硬件架构和操作系统、60多种文件格式，能够精确地识别软件中的公开漏洞和潜在的二进制固件未知漏洞。";

export const Route = createFileRoute("/sca.html")({
  head: () => ({
    meta: [
      { title: "Swift SCA 软件成分分析 - 中科固源" },
      { name: "description", content: SEO_DESCRIPTION },
      {
        name: "keywords",
        content:
          "二进制固件分析、固件漏洞扫描、IoT设备固件安全、二进制反汇编安全评估平台、SCA",
      },
      { property: "og:title", content: "Swift SCA 软件成分分析 - 中科固源" },
      { property: "og:description", content: SEO_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/sca.html" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/sca.html" }],
  }),
  component: ScaPage,
});

function ScaPage() {
  return (
    <SitePageShell>
      <ProductHero
        title="Swift SCA 软件成分分析"
        description="精准检测软件供应链的漏洞与风险，保障组织应用安全与合规。"
        primaryCta={{ label: "免费试用", href: CTA_HREF }}
        secondaryCta={{ label: "免费试用", href: CTA_HREF }}
        visual={
          <img
            src={scaHeroDashboard}
            alt="Swift SCA 软件成分分析产品总览：项目总数 48、扫描次数 1.5K、发现数量总计 5K 与统计总数 8，按严重程度的发现数量和合规标准状态分布，以及依赖项、代码、高风险许可证发现数量统计"
            width={1404}
            height={1024}
            className="h-full w-full rounded-[var(--ds-radius-surface)] object-cover"
            fetchPriority="high"
          />
        }
      />

      <GalleryHoverCarousel
        eyebrow="OSS"
        heading="OSS 在整个软件开发生命周期中采用统一的开源政策"
        items={[
          {
            id: "oss-deps",
            tag: "100%",
            title: "全量依赖评估",
            image: scaOssDepsImage,
            summary: "评估源代码和二进制文件中存在的所有依赖。",
          },
          {
            id: "oss-share",
            tag: "90%+",
            title: "开源代码占比",
            image: scaOssShareImage,
            summary: "大多数代码库中超过90%的代码 来自开源软件。",
          },
          {
            id: "oss-filter",
            tag: "50%",
            title: "风险自动筛除",
            image: scaOssFilterImage,
            summary: "使用预构建的策略和最佳实践自动筛除 50%漏洞和风险。",
          },
          {
            id: "oss-audit",
            tag: "70%",
            title: "审计效率提升",
            image: scaOssAuditImage,
            summary: "安全审计平均时间减少 70%。",
          },
        ]}
      />

      <HomeAccordion
        title="产品功能"
        items={[
          {
            icon: <Boxes size={56} strokeWidth={1.25} aria-hidden />,
            title: "SBOM与资产管理",
            desc: "基于上传的二进制文件、源代码及SBOM文件，进行同源检测、相似性检测、许可证检测，生成高精度、完整的 SBOM 与资产清单。支持自动修复、验证及跨团队的审批流程管理。",
            image: {
              src: scaSbomComponentsImage,
              alt: "Swift SCA 产品界面截图：SBOM 探索页的组件列表，展示 1,028 个组件的名称、版本、CPE、PURL 与许可证信息",
            },
          },
          {
            icon: <ShieldAlert size={56} strokeWidth={1.25} aria-hidden />,
            title: "保障与漏洞管理",
            desc: "基于风险数据系统，自动识别并划分产品风险、漏洞和代码缺陷；并将结果与威胁建模、渗透测试和模糊测试相结合，利用人工智能加速修复与缓解。",
            image: {
              src: scaVulnManagementImage,
              alt: "Swift SCA 产品界面截图：漏洞管理页的漏洞列表，共 78 条分析结果，展示名称、风险分数、项目名称、版本与漏洞数量列，漏洞管理页签处于选中状态",
            },
          },
          {
            icon: <ClipboardCheck size={56} strokeWidth={1.25} aria-hidden />,
            title: "网络合规性",
            desc: "为 FDA PMA、ISO 21434、CRA 及组织自定义的政策框架，提供合规证据的管理与自动化生成。",
            image: {
              src: scaComplianceVerificationImage,
              alt: "Swift SCA 产品界面截图：需求验证评估列表，共 7 条记录，展示名称、通过率、要求、项目名称与版本列，需求验证页签处于选中状态",
            },
          },
          {
            icon: <AlarmClock size={56} strokeWidth={1.25} aria-hidden />,
            title: "安全事件响应",
            desc: "持续监测多重威胁源，提供上下文相关的预警信息，并支持调查分析，以确保您的产品在发布后长期保持安全。",
            image: {
              src: scaIncidentResponseImage,
              alt: "Swift SCA 产品界面截图：漏洞监控页，漏洞监控、受影响的项目、受影响的组件三张分布环形图，下方为筛选卡与漏洞列表（暂无数据），「监控」页签处于选中状态",
            },
          },
        ]}
      />

      <Section title="支持20多种硬件架构和操作系统、60多种文件格式">
        <OrbitingCirclesGlobe />
      </Section>




      <AdvantageTriad
        title="产品优势"
        items={[
          {
            icon: <Sparkles size={56} strokeWidth={1.25} aria-hidden />,
            title: "风险主动防御",
            desc: "快速发现、优先级排序并高效缓解最关键的网络风险、合规性违规及供应链威胁，覆盖您的所有产品线。",
          },
          {
            icon: <FileBadge2 size={56} strokeWidth={1.25} aria-hidden />,
            title: "合规保障",
            desc: "内置的法规策略与细致的安全评估深度结合，快速生成符合监管要求的报告，覆盖 ISO、FDA、UNECE 及 50+ 其他标准。",
          },
          {
            icon: <Database size={56} strokeWidth={1.25} aria-hidden />,
            title: "海量知识库",
            desc: "GitHub/Sourceforge 等开源库；10万+ 二进制/Jar 等闭源库；CVE/CNVD私有漏洞库，支持 GIT、SVN 及文件夹导入。",
          },
        ]}
      />

    </SitePageShell>
  );
}
