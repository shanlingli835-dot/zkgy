import { createFileRoute } from "@tanstack/react-router";
import {
  Radar,
  ShieldAlert,
  Workflow,
  FileBarChart2,
  Crosshair,
  BellRing,
  Coins,
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

export const Route = createFileRoute("/swiftpenstest.html")({
  head: () => ({
    meta: [
      { title: "Swift Pentest 自动化渗透测试 — 中科固源" },
      {
        name: "description",
        content:
          "Swift Pentest 结合 AI 与渗透攻防技术，自动化探析攻击链，优先定位高风险漏洞，帮助企业化被动防御为主动应对。",
      },
      {
        name: "keywords",
        content:
          "自动化渗透测试，渗透测试，漏洞扫描，漏洞验证，攻击利用，资产发现",
      },
      { property: "og:title", content: "Swift Pentest 自动化渗透测试 — 中科固源" },
      {
        property: "og:description",
        content:
          "基于 AI 的自动化渗透测试平台，从资产发现到攻击链利用形成安全验证闭环。",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/swiftpenstest.html" },
    ],
    links: [{ rel: "canonical", href: "/swiftpenstest.html" }],
  }),
  component: SwiftPenPage,
});

function SwiftPenPage() {
  return (
    <SitePageShell>
      <ProductHero
        eyebrow="产品 · 自动化渗透测试"
        title={
          <>
            Swift Pentest
            <br />
            自动化渗透测试平台
          </>
        }
        description="结合 AI 与渗透攻防技术，自动化探析攻击链，优先定位高风险漏洞，帮助您在真实环境中持续验证网络与系统安全，化被动防御为主动应对。"
        primaryCta={{ label: "免费试用", href: CTA_HREF }}
        secondaryCta={{ label: "联系我们", href: CTA_HREF }}
      />

      <Section
        eyebrow="关键能力"
        title="以攻击者视角，构建持续的安全验证"
      >
        <StatRow
          stats={[
            { value: "20 万+", label: "内置漏洞知识与利用组件" },
            { value: "全协议", label: "多端口 / 协议智能探测" },
            { value: "闭环", label: "发现 · 利用 · 横向 · 报告" },
            { value: "可扩展", label: "支持自定义场景与插件模块" },
          ]}
        />
      </Section>

      <Section
        surface="subtle"
        eyebrow="产品功能"
        title="从攻击面识别到风险报告的自动化闭环"
      >
        <FeatureGrid
          columns={4}
          items={[
            {
              icon: <Radar size={22} />,
              title: "攻击面识别",
              desc: "自动挖掘端口服务、Web 指纹、URL、后台登录入口、文件上传入口等攻击面信息。",
            },
            {
              icon: <ShieldAlert size={22} />,
              title: "漏洞扫描与验证",
              desc: "对系统漏洞、Web 应用漏洞等多种类型进行检测，并对可利用性进行验证。",
            },
            {
              icon: <Workflow size={22} />,
              title: "智能化渗透测试",
              desc: "自主分析并探索可能的攻击路径，自动进行多轮攻击尝试与横向渗透。",
            },
            {
              icon: <FileBarChart2 size={22} />,
              title: "风险报告生成",
              desc: "通过攻击链图直观呈现渗透路径，输出面向业务与合规的风险报告。",
            },
          ]}
        />
      </Section>

      <Section
        eyebrow="产品优势"
        title="为什么选择 Swift Pentest"
      >
        <FeatureGrid
          columns={3}
          variant="topbar"
          items={[
            {
              icon: <Crosshair size={22} />,
              title: "高精准",
              desc: "内置漏洞验证与利用组件，确保漏洞经过充分验证并可深入利用进行风险检查。",
            },
            {
              icon: <BellRing size={22} />,
              title: "自预警",
              desc: "通过攻击模拟与态势感知联动，主动检测并预警网络资产风险。",
            },
            {
              icon: <Coins size={22} />,
              title: "低成本",
              desc: "以自动化为主的人机结合模式，降低安全验证的人力依赖与实施成本。",
            },
          ]}
        />
      </Section>

      <CtaCard
        title="准备好为您的组织解锁 安全能力 了吗?"
        description="马上申请 30 天免费试用，用 Swift Pentest 建立持续的攻防验证能力。"
      />
    </SitePageShell>
  );
}
