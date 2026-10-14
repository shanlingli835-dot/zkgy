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

import swiftPentestAttackSurface from "@/assets/swift-pentest-attack-surface.png";
import swiftPentestAttackPath from "@/assets/swift-pentest-attack-path.jpg";
import swiftPentestHeroVideo from "@/assets/swift-pentest-hero-intro.mp4.asset.json";
import { AdvantageTriad } from "@/components/site/AdvantageTriad";
import { HomeAccordion } from "@/components/site/HomeAccordion";
import {
  CTA_HREF,
  HeroVideo,
  PrimaryCta,
  ProductHero,
  Section,
  SitePageShell,
} from "@/components/site/ProductPageKit";

const SEO_DESCRIPTION =
  "Swift Pentest结合 AI 与黑客技术，打造的一款自动化安全验证产品。 从攻击者的视角出发，为客户提供持续性网络安全验证服务，帮助用户验证网络资产安全性以及网络环境安全控制有效性，提升用户整体网络目标、系统目标的安全性。通过在真实环境中模拟“黑客攻击技战术”动态生成攻击杀伤链，对用户网络进行真实的渗透攻击，逐项排查网络中的脆弱点。";

export const Route = createFileRoute("/swiftpenstest.html")({
  head: () => ({
    meta: [
      { title: "Swift Pentest 自动化渗透测试 - 中科固源" },
      { name: "description", content: SEO_DESCRIPTION },
      {
        name: "keywords",
        content:
          "自动化渗透测试，渗透测试，漏扫，漏洞扫描，漏洞检测，漏洞验证，攻击利用，资产发现",
      },
      { property: "og:title", content: "Swift Pentest 自动化渗透测试 - 中科固源" },
      { property: "og:description", content: SEO_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/swiftpenstest.html" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/swiftpenstest.html" }],
  }),
  component: SwiftPenPage,
});

function SwiftPenPage() {
  return (
    <SitePageShell>
      <ProductHero
        title="Swift Pentest 自动化渗透测试"
        description="结合AI与渗透攻防技术，自动化探析攻击链，优先定位高风险漏洞，化被动防御为主动应对。"
        primaryCta={{ label: "免费试用", href: CTA_HREF }}
        visual={
          <HeroVideo
            label="Swift Pentest 自动化渗透测试产品演示"
            src={swiftPentestHeroVideo.url}
            poster={swiftPentestAttackSurface}
          />
        }
      />

      <HomeAccordion
        title="产品功能"
        items={[
          {
            icon: <Radar size={56} strokeWidth={1.25} aria-hidden />,
            title: "攻击面识别",
            desc: "支持自动挖掘各种攻击面信息，包括端口服务、WEB指纹、URL、后台登录入口、文件上传入口等。",
          },
          {
            icon: <ShieldAlert size={56} strokeWidth={1.25} aria-hidden />,
            title: "漏洞扫描与验证",
            desc: "支持对多种漏洞进行检测，包括系统漏洞、Web应用漏洞等，并对扫描出的漏洞进行验证。",
          },
          {
            icon: <Workflow size={56} strokeWidth={1.25} aria-hidden />,
            title: "智能化渗透测试",
            desc: "自主分析并探索可能的攻击路径，自动进行多轮攻击尝试与横向渗透。",
            image: {
              src: swiftPentestAttackPath,
              alt: "智能化渗透测试的攻击路径关系图界面：顶部统计栏显示风险评分、存活目标、攻击面、攻击路径与攻击成果数量，主体从攻击者节点沿连线串联多台内网主机与服务器，红色节点标注 SQL 注入漏洞、SMB 弱口令攻击、RDP 暴力破解等攻击成果",
            },
          },
          {
            icon: <FileBarChart2 size={56} strokeWidth={1.25} aria-hidden />,
            title: "风险报告生成",
            desc: "通过攻击链图的方式直观呈现渗透攻击路径。",
          },
        ]}
      />

      <AdvantageTriad
        title="产品优势"
        items={[
          {
            icon: <Crosshair size={56} strokeWidth={1.25} aria-hidden />,
            title: "高精准",
            desc: "内置漏洞验证与利用组件，确保漏洞经过充分验证并可深入利用进行风险检查。",
          },
          {
            icon: <BellRing size={56} strokeWidth={1.25} aria-hidden />,
            title: "自预警",
            desc: "通过攻击模拟与态势感知联动，主动检测并预警网络资产风险。",
          },
          {
            icon: <Coins size={56} strokeWidth={1.25} aria-hidden />,
            title: "低成本",
            desc: "以自动化为主的人机结合模式，降低安全验证的人力依赖与实施成本。",
          },
        ]}
      />

      <Section title="DevSecOps集成">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PrimaryCta href={CTA_HREF}>免费试用</PrimaryCta>
        </div>
      </Section>
    </SitePageShell>
  );
}
