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
import qual01 from "@/assets/qualifications/qual-01.png.asset.json";
import qual02 from "@/assets/qualifications/qual-02.png.asset.json";
import qual03 from "@/assets/qualifications/qual-03.png.asset.json";
import qual04 from "@/assets/qualifications/qual-04.png.asset.json";
import qual05 from "@/assets/qualifications/qual-05.png.asset.json";
import qual06 from "@/assets/qualifications/qual-06.png.asset.json";
import qual07 from "@/assets/qualifications/qual-07.webp.asset.json";
import qual08 from "@/assets/qualifications/qual-08.png.asset.json";
import qual09 from "@/assets/qualifications/qual-09.png.asset.json";
import qual10 from "@/assets/qualifications/qual-10.png.asset.json";
import qual11 from "@/assets/qualifications/qual-11.png.asset.json";
import qual12 from "@/assets/qualifications/qual-12.png.asset.json";
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
import honor28 from "@/assets/honors/image-28.png.asset.json";
import honor29 from "@/assets/honors/image-29.png.asset.json";
import honor30 from "@/assets/honors/honor-30.png.asset.json";
import honor31 from "@/assets/honors/honor-31.png.asset.json";
import honor32 from "@/assets/honors/honor-32.png.asset.json";
import honor33 from "@/assets/honors/honor-33.png.asset.json";
import honor34 from "@/assets/honors/honor-34.png.asset.json";
import honor35 from "@/assets/honors/honor-35.png.asset.json";
import honor36 from "@/assets/honors/honor-36.png.asset.json";
import honor37 from "@/assets/honors/honor-37.png.asset.json";
import honor38 from "@/assets/honors/honor-38.png.asset.json";

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
  { id: "iso27001", name: "信息安全管理体系认证证书", image: qual01.url },
  { id: "high-tech", name: "高新技术企业证书", image: qual02.url },
  { id: "invention-patent", name: "发明专利证书", image: qual03.url },
  { id: "mgmt-system", name: "管理体系认证证书", image: qual04.url },
  { id: "iso9001", name: "质量管理体系认证证书", image: qual05.url },
  { id: "tuv-rheinland", name: "莱茵认证证书", image: qual06.url },
  { id: "tech-sme", name: "国家级科技型中小企业", image: qual07.url },
  {
    id: "auto-security-provider",
    name: "汽车安全产品提供商",
    image: qual08.url,
  },
  { id: "autosec-2023", name: "AutoSec2023", image: qual09.url },
  {
    id: "vehicle-cloud-fuzzing",
    name: "车路云一体化智汇创新fuzzing",
    image: qual10.url,
  },
  {
    id: "fuzzing-provider-2024",
    name: "2024年度优秀模糊测试产品提供商",
    image: qual11.url,
  },
  {
    id: "atc-gold-award",
    name: "2024第三届ATC汽车软件与安全“金辕奖”行业贡献奖",
    image: qual12.url,
  },
];

const HONORS = [
  { id: "honor-18", name: "2024数字化转型十大贡献企业", image: honor18.url },
  { id: "honor-19", name: "2024年度最佳数据赋能解决方案", image: honor19.url },
  { id: "honor-20", name: "粤港澳大湾区上市公司品牌价值榜 TOP100", image: honor20.url },
  { id: "honor-21", name: "2023新型实体企业 TOP100", image: honor21.url },
  { id: "honor-22", name: "数字化转型标杆企业", image: honor22.url },
  { id: "honor-23", name: "2023年上市公司社会责任评选奖项", image: honor23.url },
  { id: "honor-24", name: "中国信息技术服务卓越奖", image: honor24.url },
  { id: "honor-25", name: "2023 DAMA 数据治理最佳实践奖", image: honor25.url },
  { id: "honor-26", name: "哈佛商业评论数字化创新奖", image: honor26.url },
  { id: "honor-27", name: "数字经济企业 TOP500", image: honor27.url },
  { id: "honor-28", name: "北京民营企业百强", image: honor28.url },
  { id: "honor-29", name: "广东省百强民营企业 2023", image: honor29.url },
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

      <QualificationCarousel
        title="企业资质与产品技术能力认证"
        items={QUALIFICATIONS}
      />

      <QualificationCarousel
        title="行业荣誉与赛事成果"
        items={[...HONORS, ...HONORS]}
      />




    </SitePageShell>
  );
}
