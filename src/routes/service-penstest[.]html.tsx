import { createFileRoute } from "@tanstack/react-router";
import {
  Users,
  Workflow,
  Gauge,
  ShieldCheck,
  ClipboardList,
  Radar,
  Rocket,
  FileBarChart2,
} from "lucide-react";

import {
  CTA_HREF,
  CtaCard,
  FeatureGrid,
  ProductHero,
  Section,
  SitePageShell,
  StatRow,
  WorkflowStepper,
} from "@/components/site/ProductPageKit";

export const Route = createFileRoute("/service-penstest.html")({
  head: () => ({
    meta: [
      { title: "渗透测试服务 — 中科固源" },
      {
        name: "description",
        content:
          "面向整车及零部件的渗透测试与安全验证服务，模拟真实攻击手法，帮助客户在漏洞被利用之前发现并加固关键系统。",
      },
      {
        name: "keywords",
        content:
          "渗透测试服务，整车渗透测试，零部件安全验证，安全评估，模糊测试",
      },
      { property: "og:title", content: "渗透测试服务 — 中科固源" },
      {
        property: "og:description",
        content:
          "面向整车及零部件的渗透测试服务，构建可交付、可复现的系统级安全防御能力。",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/service-penstest.html" },
    ],
    links: [{ rel: "canonical", href: "/service-penstest.html" }],
  }),
  component: ServicePenPage,
});

function ServicePenPage() {
  return (
    <SitePageShell>
      <ProductHero
        eyebrow="技术服务 · 渗透测试"
        title="渗透测试服务"
        description="面向整车及零部件的渗透测试与安全验证服务。模拟真实攻击者的技战术，主动分析系统弱点、技术缺陷与漏洞，帮助客户在真实攻击发生前发现并加固关键系统。"
        primaryCta={{ label: "联系我们", href: CTA_HREF }}
        secondaryCta={{ label: "免费试用", href: CTA_HREF }}
      />

      <Section
        eyebrow="服务能力"
        title="面向整车及零部件的深度渗透测试"
        intro="通过模拟恶意黑客的攻击方法，评估整车及零部件在当前安全防护措施下抵抗入侵的能力，验证系统在真实攻击下的防御有效性。"
      >
        <StatRow
          stats={[
            { value: "100%", label: "测试覆盖率" },
            { value: "500+", label: "测试用例" },
            { value: "全流程", label: "准备 · 渗透 · 加固 · 复测" },
            { value: "专家陪伴", label: "全流程可视化与专家解答" },
          ]}
        />
      </Section>

      <Section
        surface="subtle"
        eyebrow="服务优势"
        title="以专业团队与流程化服务保障实效"
      >
        <FeatureGrid
          columns={3}
          variant="topbar"
          items={[
            {
              icon: <Users size={22} />,
              title: "专业团队",
              desc: "由大赛获奖、实战经验丰富的专家领衔，提供领先的专业技术实力保障。",
            },
            {
              icon: <Workflow size={22} />,
              title: "全流程服务",
              desc: "提供从准备、渗透到加固复测的完整可视化流程，并有专家全程解答陪伴。",
            },
            {
              icon: <Gauge size={22} />,
              title: "高效全面",
              desc: "测试周期快速，内容全面覆盖信息安全的各个层面与系统全生命周期，确保安全实效性。",
            },
          ]}
        />
      </Section>

      <Section
        eyebrow="服务流程"
        title="标准化的四阶段渗透测试流程"
      >
        <WorkflowStepper
          steps={[
            {
              title: "准备与建模",
              desc: "梳理测试范围与目标资产，明确规则、权限与验收标准，完成 TARA 与场景建模。",
            },
            {
              title: "渗透与验证",
              desc: "结合工具与人工深度渗透，覆盖协议、系统、接口与业务层，验证真实攻击路径。",
            },
            {
              title: "加固与复测",
              desc: "根据发现的问题提出可落地的加固建议，并对整改结果进行复测确认。",
            },
            {
              title: "报告与交付",
              desc: "输出面向研发、管理与合规的多层次报告，形成可持续的安全改进闭环。",
            },
          ]}
        />
      </Section>

      <Section
        surface="subtle"
        eyebrow="检测内容"
        title="覆盖整车及零部件的系统级安全评估"
      >
        <FeatureGrid
          columns={4}
          items={[
            {
              icon: <ShieldCheck size={22} />,
              title: "整车攻防评估",
              desc: "针对整车系统进行攻击面分析、攻击路径构建与安全防护有效性验证。",
            },
            {
              icon: <Radar size={22} />,
              title: "零部件安全测试",
              desc: "覆盖 ECU、TCU、网关等关键零部件，验证其接口、协议与固件安全。",
            },
            {
              icon: <Rocket size={22} />,
              title: "无线与通信测试",
              desc: "评估蜂窝、Wi-Fi、蓝牙、V2X 等无线通信通道的接入与协议安全。",
            },
            {
              icon: <ClipboardList size={22} />,
              title: "合规差距分析",
              desc: "对照国标与欧盟法规要求，识别当前安全防护与合规要求之间的差距。",
            },
            {
              icon: <Workflow size={22} />,
              title: "业务与后台",
              desc: "对车联网云端与后台运维接口进行 API 安全、鉴权与数据保护测试。",
            },
            {
              icon: <FileBarChart2 size={22} />,
              title: "结果度量",
              desc: "以可视化攻击链与风险矩阵呈现结果，便于研发与管理层快速决策。",
            },
          ]}
        />
      </Section>

      <CtaCard
        title="准备好为您的组织解锁 安全能力 了吗?"
        description="马上联系我们，为您的整车及零部件构建可持续的安全验证与加固能力。"
        primaryCta={{ label: "联系我们", href: CTA_HREF }}
      />
    </SitePageShell>
  );
}
