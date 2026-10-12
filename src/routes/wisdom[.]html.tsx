import { createFileRoute } from "@tanstack/react-router";
import type { CSSProperties, ReactNode } from "react";
import {
  ShieldCheck,
  Zap,
  Gauge,
  Layers,
  Activity,
  Repeat,
  Target,
  Sparkles,
  Fingerprint,
  AlertTriangle,
} from "lucide-react";

import protocolConsoleImage from "@/assets/wisdom-custom-protocol.png";
import protocolTemplatesImage from "@/assets/wisdom-protocol-templates.png";
import mutationAlgorithmsImage from "@/assets/wisdom-mutation-algorithm.png";
import targetMonitorImage from "@/assets/wisdom-target-monitor.png";
import vulnReplayImage from "@/assets/wisdom-vuln-replay.png";
import wisdomHeroLoop from "@/assets/wisdom-hero-loop.webm.asset.json";
import { AdvantageTriad } from "@/components/site/AdvantageTriad";
import { HomeAccordion } from "@/components/site/HomeAccordion";
import {
  HeroVideo,
  ProductHero,
  SitePageShell,
} from "@/components/site/ProductPageKit";

/**
 * Wisdom 模糊测试产品详情页 (/wisdom.html)
 *
 * 内容来源：docs/source-site/page-inventory.md 第 2 节。
 * 严格保留原页面模块顺序、H1/H2 语义、CTA 文案与跳转（/contact.html）。
 * 视觉与组件遵循 docs/design-system 与 tokens.css。
 */
export const Route = createFileRoute("/wisdom.html")({
  head: () => ({
    meta: [
      { title: "Wisdom 模糊测试 - 中科固源" },
      {
        name: "description",
        content:
          "Wisdom 工具专注于通讯协议安全，提供协议深度分析与漏洞检测，适用于汽车、物联网、工业控制等领域。立即了解产品详情与技术优势。",
      },
      {
        name: "keywords",
        content:
          "协议安全、网络安全模糊测试、软件漏洞挖掘、模糊测试解决方案、协议模糊测试、蓝牙模糊测试、WIFI 模糊测试、CAN 总线协议模糊测试、物联网协议模块、API 模糊测试",
      },
      { property: "og:title", content: "Wisdom 模糊测试 - 中科固源" },
      {
        property: "og:description",
        content:
          "面向协议、固件与工业控制场景，提供高覆盖、可复现的漏洞挖掘与安全检测能力。",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/wisdom.html" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/wisdom.html" }],
  }),
  component: WisdomPage,
});

const CTA_HREF = "/contact.html";

function WisdomPage() {
  return (
    <SitePageShell>
      <ProductHero
        title={
          <>
            在黑客攻击之前发现漏洞
            <br />
            <span style={{ color: "var(--ds-color-action-primary)" }}>Wisdom</span>{" "}
            守护您的协议安全
          </>
        }
        description="无需任何协议或模糊测试相关知识，开箱即用。轻松识别协议中的缺陷和零日漏洞，增强被测对象的安全性、健壮性、稳定性。"
        primaryCta={{ label: "免费试用", href: CTA_HREF }}
        visual={
          <HeroVideo label="Wisdom 模糊测试产品演示" src={wisdomHeroLoop.url} />
        }
      />
      <WhyFuzz />
      <Capabilities />
      <Advantages />
      <NoCustomization />
    </SitePageShell>
  );
}

/* ---------------- Sections ---------------- */


function WhyFuzz() {
  const flowSteps = [
    { label: "异常输入生成", desc: "变异 / 生成海量测试用例" },
    { label: "目标程序执行", desc: "驱动被测目标持续运行" },
    { label: "崩溃 · 超时 · 漏洞", desc: "捕获异常并复现定位", accent: true },
  ];

  const points = [
    {
      icon: <Zap size={44} strokeWidth={1.25} aria-hidden />,
      title: "开发阶段提前发现",
      desc: "集成到开发流程中进行自动测试,在产品上市之前就发现漏洞和安全问题。",
    },
    {
      icon: <Gauge size={44} strokeWidth={1.25} aria-hidden />,
      title: "自动运行,高效低成本",
      desc: "高度自动化,在无人工干预的情况下持续运行,高效地发现程序中的错误。",
    },
    {
      icon: <Target size={44} strokeWidth={1.25} aria-hidden />,
      title: "补足传统测试盲区",
      desc: "黑盒模糊测试更接近系统的真实使用环境,能够发现常规测试方法无法发现的问题。",
    },
  ];

  return (
    <section
      style={{
        padding: "var(--ds-section-y-desktop) var(--ds-gutter-desktop)",
      }}
    >
      <div style={{ maxWidth: "var(--ds-container-page)", margin: "0 auto" }}>
        <header
          style={{
            textAlign: "center",
            maxWidth: 820,
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3.4vw, 2.5rem)",
              fontWeight: "var(--ds-font-weight-semibold)",
              lineHeight: 1.25,
              color: "var(--ds-color-text-primary)",
              margin: 0,
            }}
          >
            为什么要使用模糊测试?
          </h2>
          <p
            style={{
              marginTop: "var(--ds-space-lg)",
              fontSize: "var(--ds-font-size-md)",
              color: "var(--ds-color-text-secondary)",
              lineHeight: 1.7,
              marginInline: "auto",
            }}
          >
            模糊测试通过持续投递异常输入,自动化触发被测目标的崩溃、超时与未知漏洞,是传统测试难以覆盖的深层缺陷发现手段。
          </p>
        </header>

        <div className="wf-stat-row">
          <div className="wf-stat">60%+</div>
          <div className="wf-stat__body">
            <h3>黑客挖掘漏洞的主要方式</h3>
            <p>
              超过 60% 的软件漏洞利用源于零日缺陷。模糊测试可以在攻击者之前,
              自动化地暴露未知缺陷,构建主动防御能力。
            </p>
          </div>
        </div>

        <div className="wf-flow">
          {flowSteps.map((s, i) => (
            <div key={s.label} className="wf-flow__step">
              <span className="wf-flow__idx">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <div
                  className="wf-flow__label"
                  style={
                    s.accent ? { color: "var(--ds-color-action-primary)" } : undefined
                  }
                >
                  {s.label}
                </div>
                <div className="wf-flow__desc">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="wf-points">
          {points.map((p) => (
            <div key={p.title} className="wf-points__item">
              <div className="wf-points__icon">{p.icon}</div>
              <h3 className="wf-points__title">{p.title}</h3>
              <p className="wf-points__desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .wf-stat-row {
          margin-top: var(--ds-space-4xl);
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          gap: var(--ds-space-3xl);
          align-items: center;
        }
        .wf-stat {
          font-size: clamp(56px, 8vw, 96px);
          font-weight: var(--ds-font-weight-bold, 700);
          color: var(--ds-color-action-primary);
          line-height: 1;
          letter-spacing: -0.02em;
          white-space: nowrap;
        }
        .wf-stat__body h3 {
          margin: 0;
          font-size: var(--ds-font-size-xl);
          font-weight: var(--ds-font-weight-semibold);
          color: var(--ds-color-text-primary);
          line-height: 1.35;
        }
        .wf-stat__body p {
          margin: var(--ds-space-md) 0 0;
          font-size: var(--ds-font-size-md);
          color: var(--ds-color-text-secondary);
          line-height: 1.7;
          max-width: 62ch;
        }
        .wf-flow {
          margin-top: var(--ds-space-4xl);
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: var(--ds-space-2xl);
        }
        .wf-flow__step {
          border-top: var(--ds-border-width-default) solid var(--ds-color-border-subtle);
          padding-top: var(--ds-space-lg);
          display: flex;
          align-items: flex-start;
          gap: var(--ds-space-md);
        }
        .wf-flow__idx {
          font-size: var(--ds-font-size-sm);
          font-weight: var(--ds-font-weight-semibold);
          color: var(--ds-color-text-secondary);
          letter-spacing: 0.08em;
          line-height: 1.7;
        }
        .wf-flow__label {
          font-size: var(--ds-font-size-md);
          font-weight: var(--ds-font-weight-semibold);
          color: var(--ds-color-text-primary);
          line-height: 1.4;
        }
        .wf-flow__desc {
          margin-top: 4px;
          font-size: var(--ds-font-size-sm);
          color: var(--ds-color-text-secondary);
          line-height: 1.6;
        }
        .wf-points {
          margin-top: var(--ds-space-4xl);
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: var(--ds-space-4xl);
        }
        .wf-points__item {
          display: flex;
          flex-direction: column;
          gap: var(--ds-space-md);
        }
        .wf-points__icon {
          color: var(--ds-color-text-primary);
        }
        .wf-points__title {
          margin: 0;
          font-size: var(--ds-font-size-lg);
          font-weight: var(--ds-font-weight-semibold);
          color: var(--ds-color-text-primary);
        }
        .wf-points__desc {
          margin: 0;
          font-size: var(--ds-font-size-md);
          color: var(--ds-color-text-secondary);
          line-height: 1.7;
        }
        @media (max-width: 1023px) {
          .wf-flow { grid-template-columns: 1fr; gap: var(--ds-space-lg); }
          .wf-points { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--ds-space-2xl); }
        }
        @media (max-width: 639px) {
          .wf-stat-row { grid-template-columns: 1fr; gap: var(--ds-space-lg); align-items: start; }
          .wf-points { grid-template-columns: 1fr; gap: var(--ds-space-lg); }
        }
      `}</style>
    </section>
  );
}

function Capabilities() {
  const items = [
    {
      icon: <Layers size={56} strokeWidth={1.25} aria-hidden />,
      title: "数百种协议模板",
      desc: "支持用户自行定义协议结构和字段变异策略,灵活适配各类专有协议场景。",
      image: {
        src: protocolTemplatesImage,
        alt: "Wisdom 协议模糊模块的协议模板库界面，按无线、网络、文件、工业控制等分类展示数百个协议测试套件卡片",
      },
    },
    {
      icon: <Sparkles size={56} strokeWidth={1.25} aria-hidden />,
      title: "先进的变异算法",
      desc: "基于自研的变异算法生成高覆盖率测试用例,模拟真实交互行为触发潜在缺陷。",
      image: {
        src: mutationAlgorithmsImage,
        alt: "Wisdom 基础组件的变异器列表界面，展示变异算法名称、类型、数据类型、标签与 CWE 编号等字段",
      },
    },
    {
      icon: <Activity size={56} strokeWidth={1.25} aria-hidden />,
      title: "实时监测目标",
      desc: "实时监测目标行为变化,自动判断崩溃、异常响应等缺陷迹象,并追踪缺陷来源。",
      image: {
        src: targetMonitorImage,
        alt: "Wisdom 漏洞详情与测试目标信息界面，展示严重程度、确认状态、CWE 编号、测试用例和目标服务",
      },
    },
    {
      icon: <Repeat size={56} strokeWidth={1.25} aria-hidden />,
      title: "快速复现漏洞",
      desc: "多种方式重放测试用例、回溯交互记录,辅助用户定位问题与验证修复。",
      image: {
        src: vulnReplayImage,
        alt: "Wisdom 漏洞重现弹窗界面，展示当前用例编号、起始执行条数、链接发送次数与数据包发送次数，以及取消与确认按钮",
      },
    },
  ];
  return (
    <HomeAccordion
      title="Wisdom 帮助组织快速发现并修复安全缺陷"
      items={items}
    />
  );
}

function Advantages() {
  return (
    <AdvantageTriad
      title="以自研智能引擎为核心,全面领先同类产品"
      description="Wisdom 协议模糊测试在性能、检测覆盖度与可扩展性方面全面领先, 通过国际认证与创新算法为组织提供高可信的安全检测能力。"
      items={[
        {
          icon: <Fingerprint size={56} strokeWidth={1.25} aria-hidden />,
          title: "国际标准认证",
          desc: "全球首款通过 ISO 21434 与 IEC 62443 国际安全标准认证的模糊测试工具,满足高等级安全需求行业的采购要求与合规标准。",
        },
        {
          icon: <ShieldCheck size={56} strokeWidth={1.25} aria-hidden />,
          title: "高效发现漏洞",
          desc: "创新优选的变异算法,可以在相同时间内,通过更少的测试用例,精准发现更多的真实缺陷。",
        },
        {
          icon: <AlertTriangle size={56} strokeWidth={1.25} aria-hidden />,
          title: "全面的测试覆盖",
          desc: "覆盖多种变异策略与交互状态模拟,实现对协议测试场景的全覆盖与边界条件的极致探索,全面提升测试深度与广度。",
        },
      ]}
    />
  );
}

function NoCustomization() {
  return (
    <Section>
      <div style={{ textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(1.75rem, 3.6vw, 2.75rem)",
            fontWeight: "var(--ds-font-weight-semibold)",
            lineHeight: 1.25,
            color: "var(--ds-color-text-primary)",
            margin: 0,
          }}
        >
          Wisdom 无需定制开发即可测试您的专有协议
        </h2>
        <p
          style={{
            marginTop: "var(--ds-space-lg)",
            maxWidth: 780,
            marginInline: "auto",
            color: "var(--ds-color-text-secondary)",
            fontSize: "var(--ds-font-size-lg)",
            lineHeight: 1.6,
          }}
        >
          可视化协议建模,可以在界面上快速搭建专有协议;基于语义理解的变异方式,
          根据字段含义自动匹配变异算法,无需配置一键开始测试。
        </p>
        <div style={{ marginTop: "var(--ds-space-2xl)" }}>
          <PrimaryCta href={CTA_HREF}>免费试用</PrimaryCta>
        </div>
      </div>

      <div
        style={{
          marginTop: "clamp(2rem, 5vw, 4rem)",
          borderRadius: "var(--ds-radius-surface)",
          overflow: "hidden",
          border: "1px solid var(--ds-color-border-subtle)",
          backgroundColor: "var(--ds-color-surface-default)",
          boxShadow: "0 24px 60px rgba(28, 30, 34, 0.12)",
        }}
      >
        <img
          src={protocolConsoleImage}
          alt="Wisdom 协议模型设计界面，展示左侧消息树、中间模型元素字段层级与右侧元素属性面板"
          loading="lazy"
          style={{ display: "block", width: "100%", height: "auto" }}
        />
      </div>
    </Section>
  );
}


/* ---------------- Shared ---------------- */

function Section({
  id,
  title,
  surface = "default",
  children,
}: {
  id?: string;
  title?: string;
  surface?: "default" | "subtle";
  children: ReactNode;
}) {
  const bg =
    surface === "subtle"
      ? "var(--ds-color-surface-subtle)"
      : "var(--ds-color-surface-default)";
  return (
    <section
      id={id}
      style={{
        backgroundColor: bg,
        padding: "var(--ds-section-y-desktop) var(--ds-gutter-desktop)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--ds-container-page)",
          margin: "0 auto",
        }}
      >
        {title ? (
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: "var(--ds-font-weight-semibold)",
              lineHeight: 1.3,
              textAlign: "center",
              maxWidth: 960,
              margin: "0 auto var(--ds-space-4xl)",
              color: "var(--ds-color-text-primary)",
            }}
          >
            {title}
          </h2>
        ) : null}
        {children}
      </div>
      <style>{`
        @media (max-width: 1023px) {
          .wisdom-4col { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        @media (max-width: 639px) {
          .wisdom-4col, .wisdom-2col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const primaryCtaStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "var(--ds-size-control-min)",
  padding: "var(--ds-space-md) var(--ds-space-2xl)",
  backgroundColor: "var(--ds-color-action-primary)",
  color: "var(--ds-color-action-primary-foreground)",
  borderRadius: "var(--ds-radius-control)",
  fontSize: "var(--ds-font-size-md)",
  fontWeight: "var(--ds-font-weight-semibold)",
  textDecoration: "none",
};

const ghostCtaStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "var(--ds-size-control-min)",
  padding: "var(--ds-space-md) var(--ds-space-2xl)",
  backgroundColor: "transparent",
  color: "var(--ds-color-text-inverse)",
  border:
    "var(--ds-border-width-default) solid var(--ds-color-border-inverse)",
  borderRadius: "var(--ds-radius-control)",
  fontSize: "var(--ds-font-size-md)",
  fontWeight: "var(--ds-font-weight-semibold)",
  textDecoration: "none",
};

function PrimaryCta({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} style={primaryCtaStyle}>
      {children}
    </a>
  );
}

