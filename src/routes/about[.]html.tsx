import { createFileRoute } from "@tanstack/react-router";
import {
  Rocket,
  Users,
  BadgeCheck,
  MapPin,
  Phone,
} from "lucide-react";
import {
  CTA_HREF,
  FeatureGrid,
  ProductHero,
  Section,
  SitePageShell,
} from "@/components/site/ProductPageKit";
import { ZigzagShowcase } from "@/components/site/ZigzagShowcase";

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

const OFFICES = [
  {
    city: "无锡总部",
    address: "江苏省无锡市经开区雪浪小镇",
    phone: "010-82923621",
  },
  {
    city: "北京",
    address: "北京市海淀区中关村壹号 F1 座 7 楼",
    phone: "010-82923621",
  },
  {
    city: "上海",
    address: "上海市普陀区谈家渡路 28 号信息商务港 8 楼",
    phone: "021-52919537",
  },
  {
    city: "西安",
    address: "陕西省西安市国家民用航天产业基地",
    phone: "021-52919537",
  },
];


function AboutPage() {
  return (
    <SitePageShell>
      <ProductHero
        eyebrow="关于中科固源"
        title={
          <>
            致力于成为全球领先的
            <br />
            低空与商业航天网络安全方案提供商
          </>
        }
        description="中科数测科技有限公司（简称“中科数测”）是中科星图股份有限公司（股票代码：688568）的子公司，具备国家高新技术企业与省级专精特新企业资质，致力于构建低空与商业航天领域的网络安全底座。"
        primaryCta={{ label: "联系我们", href: CTA_HREF }}
      />

      <ZigzagShowcase
        title="公司概况"
        description="始终保持创新的研发型安全团队"
        items={[
          {
            title: "中科固源",
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
        surface="subtle"
        eyebrow="使命与愿景"
        title="驱动固源持续前行的价值主张"
      >
        <FeatureGrid
          columns={3}
          variant="topbar"
          items={[
            {
              title: "固源的使命",
              desc: "铸安全利器，御黑客攻击。",
            },
            {
              title: "固源的愿景",
              desc: "成为全球领先的模糊测试技术企业。",
            },
            {
              title: "核心价值观",
              desc: "价值源于客户，创新源于人才，实力源于技术。",
            },
          ]}
        />
      </Section>

      <Section
        surface="subtle"
        eyebrow="发展历程"
        title="从实验室认证到行业能力建设"
      >
        <FeatureGrid
          columns={3}
          variant="topbar"
          items={[
            {
              tag: "2022",
              title: "实验室建立",
              desc: "实验室建立，通过 CNAS 认证，正式对外提供测评服务。",
            },
            {
              tag: "2023",
              title: "集团化协同",
              desc: "融入中科星图测评体系，与集团业务协同深化行业能力建设。",
            },
            {
              tag: "持续演进",
              title: "产品与方案矩阵",
              desc: "沉淀 Wisdom、Swift 系列产品与行业解决方案，服务低空、商业航天与网联汽车等场景。",
            },
          ]}
        />
      </Section>


      <Section
        surface="subtle"
        eyebrow="公司分布"
        title="公司分布地区"
      >
        <div
          className="ds-grid-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "var(--ds-space-xl)",
          }}
        >
          {OFFICES.map((o) => (
            <article
              key={o.city}
              style={{
                padding: "var(--ds-space-2xl)",
                backgroundColor: "var(--ds-color-surface-default)",
                border:
                  "var(--ds-border-width-default) solid var(--ds-color-border-subtle)",
                borderRadius: "var(--ds-radius-surface)",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "var(--ds-space-sm)",
                  color: "var(--ds-color-action-primary)",
                  fontWeight: "var(--ds-font-weight-semibold)",
                }}
              >
                <MapPin size={18} /> {o.city}
              </div>
              <p
                style={{
                  marginTop: "var(--ds-space-md)",
                  color: "var(--ds-color-text-primary)",
                  lineHeight: 1.6,
                  fontSize: "var(--ds-font-size-md)",
                }}
              >
                {o.address}
              </p>
              <p
                style={{
                  marginTop: "var(--ds-space-sm)",
                  color: "var(--ds-color-text-secondary)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "var(--ds-space-xs)",
                  fontSize: "var(--ds-font-size-sm)",
                }}
              >
                <Phone size={16} /> {o.phone}
              </p>
            </article>
          ))}
        </div>
      </Section>


      <Section surface="subtle" eyebrow="资质与荣誉" title="持续被行业与客户认可">
        <FeatureGrid
          columns={3}
          variant="topbar"
          items={[
            {
              icon: <BadgeCheck size={22} />,
              title: "国家高新技术企业",
              desc: "具备国家高新技术企业资质，持续加大研发投入。",
            },
            {
              icon: <Rocket size={22} />,
              title: "省级专精特新企业",
              desc: "获得省级专精特新企业认定，深耕安全细分方向。",
            },
            {
              icon: <Users size={22} />,
              title: "CNAS 认证实验室",
              desc: "实验室通过 CNAS 认证，具备对外提供测评服务的能力。",
            },
          ]}
        />
      </Section>

    </SitePageShell>
  );
}
