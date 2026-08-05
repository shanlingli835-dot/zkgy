import { createFileRoute } from "@tanstack/react-router";
import { Code2, Cpu, Gauge, Copy, Target, ListChecks, FileBadge2 } from "lucide-react";

import { AdvantageTriad } from "@/components/site/AdvantageTriad";
import { HomeAccordion } from "@/components/site/HomeAccordion";
import {
  CTA_HREF,
  PrimaryCta,
  ProductHero,
  Section,
  SitePageShell,
} from "@/components/site/ProductPageKit";

const SEO_DESCRIPTION =
  "Swift Code是一款专业的源代码审计和安全检测工具。支持20多种开发语言，自动识别150多种代码文件，自带3000多条检测规则，开放扫描规则源代码，支持用户自定义，提供SCM事件驱动、计划任务、Open API接口等多种CI/CD集成工具，为软件开发全生命周期提供全面的安全检测服务。";

export const Route = createFileRoute("/swiftcode.html")({
  head: () => ({
    meta: [
      { title: "Swift Code 源代码审计 - 中科固源" },
      { name: "description", content: SEO_DESCRIPTION },
      {
        name: "keywords",
        content: "源代码审计、源代码安全检测、白盒安全测试、SAST安全测试工具",
      },
      { property: "og:title", content: "Swift Code 源代码审计 - 中科固源" },
      { property: "og:description", content: SEO_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/swiftcode.html" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/swiftcode.html" }],
  }),
  component: SwiftCodePage,
});

function SwiftCodePage() {
  return (
    <SitePageShell>
      <ProductHero
        title="Swift Code 源代码审计"
        description="利用多种技术自动识别语义缺陷、安全漏洞和编码规则等问题，适配国内编码标准和国产环境，支持灵活定制。"
        primaryCta={{ label: "免费试用", href: CTA_HREF }}
        visual={
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Swift Code 源代码审计产品演示"
            poster="/source-site/assets/secops-dashboard-placeholder.svg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "var(--ds-radius-surface)",
              border:
                "var(--ds-border-width-default) solid var(--ds-color-border-inverse)",
              backgroundColor: "#0a0a0a",
            }}
          >
            <source
              src="https://www.getharvest.com/hubfs/Imported_Blog_Media/Harvest_HeroVideo_1700x1080_20s_Webm_EN.webm"
              type="video/webm"
            />
            您的浏览器不支持视频播放。
          </video>
        }
      />

      <HomeAccordion
        title="产品功能"
        items={[
          {
            icon: <Code2 size={56} strokeWidth={1.25} aria-hidden />,
            title: "代码分析",
            desc: "根据用户指定的任意内容，自动生成函数间调用关系图、控制流图，代码审计等。",
          },
          {
            icon: <Cpu size={56} strokeWidth={1.25} aria-hidden />,
            title: "双引擎检测",
            desc: "基本检测引擎支持到达值分析、前支配分析、后支配分析、活跃变量分析等；人工智能检测引擎支持代码基因图谱分析、修改影响分析、类继承关系分析、多态分析等。",
          },
          {
            icon: <Gauge size={56} strokeWidth={1.25} aria-hidden />,
            title: "软件全方位度量",
            desc: "提供圈复杂度、函数扇入、函数扇出、代码注释率、代码行数、循环嵌套深度、循环数目、面向对象度量集等指标。",
          },
          {
            icon: <Copy size={56} strokeWidth={1.25} aria-hidden />,
            title: "代码克隆检测",
            desc: "精准识别并定位重复代码，减少冗余和潜在缺陷。",
          },
        ]}
      />

      <Section title="支持20多种开发语言">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PrimaryCta href={CTA_HREF}>免费试用</PrimaryCta>
        </div>
      </Section>

      <AdvantageTriad
        title="产品优势"
        items={[
          {
            icon: <Target size={22} />,
            title: "精度与效率平衡",
            desc: "采用了多项国际先进静态分析技术，能够进行路径敏感、上下文敏感、对象敏感分析，检测效率达到了平均每小时150万行。",
          },
          {
            icon: <ListChecks size={22} />,
            title: "检测类型全面",
            desc: "兼顾了漏洞、缺陷及编码规则等全部类型的检测，全面发现代码中的各类问题。",
          },
          {
            icon: <FileBadge2 size={22} />,
            title: "专业标准符合度高",
            desc: "支持 MISRA 系列、CERT系列、ISO17961、CN-CERT 、 GJB 5369 、GJB 8114 、航天921等质量及安全编码标准。",
          },
        ]}
      />
    </SitePageShell>
  );
}
