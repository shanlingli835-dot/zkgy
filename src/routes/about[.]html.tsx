import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart } from "lucide-react";
import {
  CTA_HREF,
  ProductHero,
  Section,
  SitePageShell,
} from "@/components/site/ProductPageKit";
import { ZigzagShowcase } from "@/components/site/ZigzagShowcase";
import companyOverviewImage from "@/assets/about-company-overview.jpg";
import { TimelineTabs } from "@/components/site/TimelineTabs";
import { QualificationCarousel } from "@/components/site/QualificationCarousel";
import cert6 from "@/assets/qualifications/cert-6.png.asset.json";
import cert7 from "@/assets/qualifications/cert-7.png.asset.json";
import cert8 from "@/assets/qualifications/cert-8.png.asset.json";
import cert9 from "@/assets/qualifications/cert-9.png.asset.json";
import cert10 from "@/assets/qualifications/cert-10.png.asset.json";
import cert11 from "@/assets/qualifications/cert-11.png.asset.json";
import cert12 from "@/assets/qualifications/cert-12.png.asset.json";
import cert13 from "@/assets/qualifications/cert-13.png.asset.json";
import cert14 from "@/assets/qualifications/cert-14.png.asset.json";
import cert15 from "@/assets/qualifications/cert-15.png.asset.json";
import cert16 from "@/assets/qualifications/cert-16.png.asset.json";
import cert17 from "@/assets/qualifications/cert-17.png.asset.json";
import honor18 from "@/assets/honors/honor-18.png.asset.json";
import honor19 from "@/assets/honors/honor-19.png.asset.json";
import honor20 from "@/assets/honors/honor-20.png.asset.json";
import honor21 from "@/assets/honors/honor-21.png.asset.json";
import honor22 from "@/assets/honors/honor-22.png.asset.json";
import honor23 from "@/assets/honors/honor-23.png.asset.json";
import honor24 from "@/assets/honors/honor-24.png.asset.json";
import honor25 from "@/assets/honors/honor-25.png.asset.json";
import honor26 from "@/assets/honors/honor-26.png.asset.json";
import honor27 from "@/assets/honors/honor-27.png.asset.json";

const TIMELINE_GROUPS = [
  {
    label: "2025年",
    events: ["公司成立，启动Fuzzer技术研究。"],
  },
  {
    label: "2026年",
    events: [
      "第一代模糊漏洞挖掘产品《雨燕模糊测试工具系统V1.0》正式发布及商用销售。",
    ],
  },
  {
    label: "2020年",
    events: [
      "完成“固源科技”和“Swift Fuzzer”商标注册。",
      "完成多家检测机构、汽车领域行业客户的产品交付。",
      "获得国家高新技术认定。",
      "获得中关村高新技术企业认定。",
    ],
  },
  {
    label: "2021年",
    events: [
      "通过ISO9001质量管理体系认证。",
      "通过ISO27001信息安全管理体系认证。",
      "第二代模糊测试框架开发平台发布。",
      "基于第二代模糊测试框架开发的多款协议模糊产品发布并获得多家大型客户采购投入商用。",
    ],
  },
  {
    label: "2022年",
    events: [
      "中科数测固源科技（安徽）有限公司成立开启安全芯片研发。",
      "公司自动化模糊测试产品交付客户突破50家。",
    ],
  },
  {
    label: "2023年",
    events: [
      "源代码安全审计工具软件V2.0正式发布，并交付客户商用。",
      "与工信部五所质量安全检测中心联合成立“智能产品安全漏洞模糊测试技术应用研究联合实验室”。",
      "与西安电子科技大学联合成立“智能网联汽车通讯协议安全控制SoC芯片联合研发实验室”。",
    ],
  },
];

const QUALIFICATIONS = [
  { id: "cmmi5", name: "CMMI V2.0 成熟度五级证书", image: cert6.url },
  { id: "iso9001", name: "质量管理体系认证证书（ISO9001）", image: cert7.url },
  {
    id: "iso20000",
    name: "服务管理体系认证证书（ISO/IEC 20000-1）",
    image: cert8.url,
  },
  {
    id: "iso27001",
    name: "信息安全管理体系认证证书（ISO/IEC 27001）",
    image: cert9.url,
  },
  {
    id: "iso27017",
    name: "云服务信息安全管理体系认证证书（ISO/IEC 27017）",
    image: cert10.url,
  },
  {
    id: "iso27018",
    name: "公有云中个人可识别信息保护管理体系认证证书（ISO/IEC 27018）",
    image: cert11.url,
  },
  {
    id: "iso27701",
    name: "隐私信息管理体系认证证书（ISO/IEC 27701）",
    image: cert12.url,
  },
  { id: "publication", name: "出版物经营许可证", image: cert13.url },
  { id: "broadcast", name: "广播电视节目制作经营许可证", image: cert14.url },
  { id: "high-tech", name: "高新技术企业证书", image: cert15.url },
  { id: "credit-aaa", name: "企业信用等级证书", image: cert16.url },
  {
    id: "dcmm",
    name: "数据管理能力成熟度（DCMM）等级证书",
    image: cert17.url,
  },
];

const HONORS = [
  { id: "honor-1", name: "国家高新技术企业" },
  { id: "honor-2", name: "中关村高新技术企业" },
  { id: "honor-3", name: "安徽省专精特新中小企业" },
  { id: "honor-4", name: "合肥市大数据企业" },
  { id: "honor-5", name: "科技型中小企业" },
  { id: "honor-6", name: "创新型中小企业" },
  { id: "honor-7", name: "软件企业" },
  { id: "honor-8", name: "软件产品" },
  { id: "honor-9", name: "网络安全优秀创新成果" },
  { id: "honor-10", name: "模糊测试技术创新奖" },
  { id: "honor-11", name: "车联网安全优秀实践案例" },
  { id: "honor-12", name: "工业互联网安全优秀案例" },
];



const MISSION_CARDS = [
  {
    icon: <Target size={32} strokeWidth={1.5} aria-hidden />,
    iconColor: "var(--ds-color-status-success)",
    title: "固源的使命",
    statement: "铸安全利器，御黑客攻击。",
  },
  {
    icon: <Eye size={32} strokeWidth={1.5} aria-hidden />,
    iconColor: "var(--ds-color-status-info)",
    title: "固源的愿景",
    statement: "成为全球领先的模糊测试技术企业。",
  },
  {
    icon: <Heart size={32} strokeWidth={1.5} aria-hidden />,
    iconColor: "var(--ds-color-status-info)",
    title: "核心价值观",
    statement: "价值源于客户，创新源于人才，实力源于技术。",
  },
];


export const Route = createFileRoute("/about.html")({
  head: () => ({
    meta: [
      { title: "公司介绍 — 中科固源" },
      {
        name: "description",
        content:
          "中科固源致力于成为全球领先的低空与商业航天网络安全方案提供商，构建覆盖检测、模糊测试与自动化验证的一体化安全能力。",
      },
      {
        name: "keywords",
        content: "中科固源，公司介绍，网络安全，低空经济，商业航天",
      },
      { property: "og:title", content: "公司介绍 — 中科固源" },
      {
        property: "og:description",
        content:
          "了解中科固源的定位、能力与团队，及其在低空与商业航天领域的网络安全战略。",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about.html" },
    ],
    links: [{ rel: "canonical", href: "/about.html" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SitePageShell>
      <ProductHero
        title="成为全球领先的模糊测试技术企业"
        description="中科固源产品及解决方案已应用于智能网联汽车、工业控制、智能医疗、科研院所、检测机构等领域，凭借高效、稳定、精准的检测能力，为不同行业客户提供专业的网络安全测试产品与技术服务。"
        primaryCta={{ label: "联系我们", href: CTA_HREF }}
      />

      <ZigzagShowcase
        title="公司概况"
        description="始终保持创新的研发型安全团队"
        items={[
          {
            title: "中科固源",
            image: companyOverviewImage,
            imageAlt: "冷白光网络安全实验室环境，展示扫描仪、多屏检测仪表板、电路板与网络设备，无人物出现",
            paragraphs: [
              "中科数测固源科技（安徽）有限公司成立于2022年8月，公司简称“中科固源”，是一家专注于网络安全测试与软件质量保障的高新技术企业。",
              "公司围绕协议安全、软件安全、固件安全、人工智能安全及供应链安全等方向持续开展技术研发，形成了覆盖多类安全测试场景的产品体系，主要包括通讯协议模糊测试漏洞检测工具 Swift Fuzzer、通讯协议安全性与兼容性测试平台 Wisdom、二进制固件安全检测产品 Cybllum、AI 安全对抗检测产品 Swift AI、APP 漏洞扫描工具 Swift APP、软件成分分析工具 Swift SCA 等。",
              "中科固源产品及解决方案已应用于智能网联汽车、工业控制、智能医疗、科研院所、检测机构等领域，凭借高效、稳定、精准的检测能力，为不同行业客户提供专业的网络安全测试产品与技术服务。",
              "公司坚持技术创新与自主研发，持续完善网络安全测试产品与解决方案体系，致力于成为国内领先、具有国际竞争力的网络安全测试工具与技术服务提供商。",
            ],
          },
        ]}
      />

      <Section
        surface="default"
        eyebrow="使命与愿景"
        title="驱动固源持续前行的价值主张"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--ds-space-xl)",
          }}
        >
          {MISSION_CARDS.map((card) => (
            <article
              key={card.title}
              style={{
                padding: "var(--ds-space-2xl)",
                backgroundColor: "var(--ds-color-surface-subtle)",
                borderRadius: "var(--ds-radius-surface)",
              }}
            >
              <div
                style={{
                  color: card.iconColor,
                  marginBottom: "var(--ds-space-lg)",
                }}
              >
                {card.icon}
              </div>
              <h3
                style={{
                  fontSize: "var(--ds-font-size-lg)",
                  fontWeight: "var(--ds-font-weight-semibold)",
                  color: "var(--ds-color-text-primary)",
                  marginBottom: "var(--ds-space-md)",
                  lineHeight: 1.3,
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: "var(--ds-font-size-xl)",
                  fontWeight: "var(--ds-font-weight-semibold)",
                  lineHeight: 1.4,
                  color: "var(--ds-color-text-primary)",
                }}
              >
                {card.statement}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <TimelineTabs
        title="发展历程"
        description="从公司成立与 Fuzzer 技术研究起步，逐步完成产品化、资质认证与行业联合实验室建设。"
        groups={TIMELINE_GROUPS}
      />

      <QualificationCarousel title="企业资质" items={QUALIFICATIONS} />

      <QualificationCarousel title="荣誉奖项" items={HONORS} />


    </SitePageShell>
  );
}
