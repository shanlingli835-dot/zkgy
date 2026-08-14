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
  StatRow,
} from "@/components/site/ProductPageKit";

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

      <Section
        eyebrow="公司概况"
        title="始终保持创新的研发型安全团队"
        intro="依托中科星图集团“一体两翼”发展战略，整合集团在低空发展体系、商业航天发展体系与生态协同方面的资源优势，力争成为全球领先的低空及商业航天网络安全产品与解决方案提供商。"
      >
        <StatRow
          stats={[
            { value: "150+", label: "员工人数" },
            { value: "20%+", label: "硕士及以上学历" },
            { value: "60%+", label: "研发人员占比" },
            { value: "20+", label: "专利与软件著作权" },
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
