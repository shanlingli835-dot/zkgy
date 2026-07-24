import { createFileRoute } from "@tanstack/react-router";
import type { CSSProperties, ReactNode } from "react";
import {
  ShieldCheck,
  Bug,
  Zap,
  Gauge,
  Layers,
  Activity,
  Repeat,
  Target,
  Radar,
  Sparkles,
  Fingerprint,
  AlertTriangle,
} from "lucide-react";

import { GlobalHeader } from "@/components/site/GlobalHeader";
import { HomeAccordion } from "@/components/site/HomeAccordion";
import { SiteShell } from "@/components/site/SiteShell";
import { SourceHomeEmbed } from "@/components/site/SourceHomeEmbed";

/**
 * 与首页保持一致的 CTA + 页脚区域。
 * 复用 public/source-site/index.html，仅显示 .solution-cta-bar 与 .jasper-footer，
 * 其余首页模块通过 hiddenSelectors 隐藏。
 */
const HOME_FOOTER_HIDDEN_SELECTORS = [
  "header.site-header",
  "main > .jasper-hero-shell",
  "main > .jasper-logo-marquee",
  "main > .integrations-three",
  "main > .why-tabs",
  "main > .platform-section",
  "main > .floating-icons-hero",
];

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
    <SiteShell
      header={<GlobalHeader />}
      footer={<SourceHomeEmbed hiddenSelectors={HOME_FOOTER_HIDDEN_SELECTORS} title="页脚与行动号召" />}
    >
      <Hero />
      <WhyFuzz />
      <Capabilities />
      <Advantages />
      <NoCustomization />
    </SiteShell>
  );
}

/* ---------------- Sections ---------------- */

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "var(--ds-color-surface-inverse)",
        color: "var(--ds-color-text-inverse)",
        padding: "var(--ds-section-y-desktop) var(--ds-gutter-desktop)",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(1000px 500px at 15% 20%, color-mix(in srgb, var(--ds-color-action-primary) 28%, transparent), transparent 60%), radial-gradient(800px 400px at 85% 80%, color-mix(in srgb, #1e40af 30%, transparent), transparent 60%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          maxWidth: "var(--ds-container-page)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
          gap: "var(--ds-space-4xl)",
          alignItems: "center",
        }}
        className="wisdom-hero-grid"
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--ds-space-sm)",
              padding: "var(--ds-space-xs) var(--ds-space-md)",
              borderRadius: "var(--ds-radius-round)",
              border:
                "var(--ds-border-width-default) solid var(--ds-color-border-inverse)",
              color: "var(--ds-color-text-inverse-secondary)",
              fontSize: "var(--ds-font-size-sm)",
            }}
          >
            <ShieldCheck size={14} aria-hidden />
            协议安全 · Wisdom
          </div>
          <h1
            style={{
              marginTop: "var(--ds-space-lg)",
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              lineHeight: 1.15,
              fontWeight: "var(--ds-font-weight-semibold)",
              letterSpacing: "-0.01em",
            }}
          >
            在黑客攻击之前发现漏洞
            <br />
            <span style={{ color: "var(--ds-color-action-primary)" }}>Wisdom</span>{" "}
            守护您的协议安全
          </h1>
          <p
            style={{
              marginTop: "var(--ds-space-xl)",
              maxWidth: 640,
              color: "var(--ds-color-text-inverse-secondary)",
              fontSize: "var(--ds-font-size-lg)",
              lineHeight: 1.6,
            }}
          >
            无需任何协议或模糊测试相关知识，开箱即用。轻松识别协议中的缺陷和零日漏洞，
            增强被测对象的安全性、健壮性、稳定性。
          </p>
          <div
            style={{
              marginTop: "var(--ds-space-2xl)",
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--ds-space-md)",
            }}
          >
            <PrimaryCta href={CTA_HREF}>免费试用</PrimaryCta>
            <GhostCta href="#wisdom-capabilities">了解产品能力</GhostCta>
          </div>
        </div>

        <HeroVisual />
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .wisdom-hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function HeroVisual() {
  const rings = [
    { label: "协议模板", icon: <Layers size={16} aria-hidden /> },
    { label: "变异算法", icon: <Sparkles size={16} aria-hidden /> },
    { label: "目标监测", icon: <Radar size={16} aria-hidden /> },
    { label: "漏洞复现", icon: <Repeat size={16} aria-hidden /> },
  ];
  return (
    <div
      aria-hidden
      style={{
        position: "relative",
        aspectRatio: "1 / 1",
        maxWidth: 480,
        marginInline: "auto",
        borderRadius: "var(--ds-radius-round)",
        background:
          "radial-gradient(circle at center, color-mix(in srgb, var(--ds-color-action-primary) 24%, transparent), transparent 65%)",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div
        style={{
          width: "62%",
          aspectRatio: "1 / 1",
          borderRadius: "var(--ds-radius-round)",
          border:
            "var(--ds-border-width-default) solid var(--ds-color-border-inverse)",
          display: "grid",
          placeItems: "center",
          background:
            "color-mix(in srgb, var(--ds-color-surface-inverse) 60%, transparent)",
        }}
      >
        <Bug size={64} color="var(--ds-color-action-primary)" aria-hidden />
      </div>
      {rings.map((r, i) => {
        const angle = (i / rings.length) * Math.PI * 2 - Math.PI / 2;
        const radius = 42;
        const x = 50 + Math.cos(angle) * radius;
        const y = 50 + Math.sin(angle) * radius;
        return (
          <div
            key={r.label}
            style={{
              position: "absolute",
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--ds-space-xs)",
              padding: "var(--ds-space-xs) var(--ds-space-md)",
              borderRadius: "var(--ds-radius-round)",
              backgroundColor:
                "color-mix(in srgb, var(--ds-color-surface-inverse) 70%, transparent)",
              border:
                "var(--ds-border-width-default) solid var(--ds-color-border-inverse)",
              fontSize: "var(--ds-font-size-sm)",
              color: "var(--ds-color-text-inverse)",
            }}
          >
            {r.icon}
            {r.label}
          </div>
        );
      })}
    </div>
  );
}

function WhyFuzz() {
  const cardStyle: React.CSSProperties = {
    backgroundColor: "var(--ds-color-surface-default)",
    border:
      "var(--ds-border-width-default) solid var(--ds-color-border-subtle)",
    borderRadius: "var(--ds-radius-surface)",
  };
  const iconBox: React.CSSProperties = {
    width: 44,
    height: 44,
    display: "grid",
    placeItems: "center",
    borderRadius: "var(--ds-radius-control)",
    backgroundColor: "var(--ds-color-action-primary-subtle)",
    color: "var(--ds-color-action-primary)",
    flexShrink: 0,
  };
  const smallCardTitle: React.CSSProperties = {
    fontSize: "var(--ds-font-size-lg)",
    fontWeight: "var(--ds-font-weight-semibold)",
    color: "var(--ds-color-text-primary)",
    lineHeight: 1.4,
    margin: 0,
  };
  const smallCardDesc: React.CSSProperties = {
    fontSize: "var(--ds-font-size-sm)",
    color: "var(--ds-color-text-secondary)",
    lineHeight: 1.65,
    margin: 0,
  };

  const bottomCards = [
    {
      icon: <Zap size={22} aria-hidden />,
      title: "开发阶段提前发现",
      desc: "集成到开发流程中进行自动测试,在产品上市之前就发现漏洞和安全问题。",
    },
    {
      icon: <Gauge size={22} aria-hidden />,
      title: "自动运行,高效低成本",
      desc: "高度自动化,在无人工干预的情况下持续运行,高效地发现程序中的错误。",
    },
    {
      icon: <Target size={22} aria-hidden />,
      title: "补足传统测试盲区",
      desc: "黑盒模糊测试更接近系统的真实使用环境,能够发现常规测试方法无法发现的问题。",
    },
  ];

  const flowSteps = [
    { label: "异常输入生成", desc: "变异 / 生成海量测试用例" },
    { label: "目标程序执行", desc: "驱动被测目标持续运行" },
    { label: "崩溃 · 超时 · 漏洞", desc: "捕获异常并复现定位", accent: true },
  ];

  return (
    <section
      style={{
        backgroundColor: "var(--ds-color-surface-subtle)",
        padding: "var(--ds-section-y-desktop) var(--ds-gutter-desktop)",
      }}
    >
      <div style={{ maxWidth: "var(--ds-container-page)", margin: "0 auto" }}>
        <header style={{ marginBottom: "var(--ds-space-3xl)", textAlign: "left" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: "var(--ds-font-weight-semibold)",
              lineHeight: 1.3,
              color: "var(--ds-color-text-primary)",
              margin: 0,
            }}
          >
            为什么要使用模糊测试?
          </h2>
          <p
            style={{
              marginTop: "var(--ds-space-md)",
              fontSize: "var(--ds-font-size-md)",
              color: "var(--ds-color-text-secondary)",
              lineHeight: 1.65,
              maxWidth: "72ch",
            }}
          >
            模糊测试通过持续投递异常输入,自动化触发被测目标的崩溃、超时与未知漏洞,是传统测试难以覆盖的深层缺陷发现手段。
          </p>
        </header>

      <style>{`
        .wf-wrap { display: grid; gap: 20px; }
        .wf-hero {
          display: grid;
          grid-template-columns: 45fr 55fr;
          min-height: 400px;
        }
        .wf-hero__left, .wf-hero__right {
          padding: var(--ds-space-3xl);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .wf-hero__right {
          border-left: var(--ds-border-width-default) solid var(--ds-color-border-subtle);
          background: var(--ds-color-surface-subtle);
        }
        .wf-stat {
          font-size: clamp(64px, 8vw, 96px);
          font-weight: var(--ds-font-weight-bold, 700);
          color: var(--ds-color-action-primary);
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .wf-flow { display: grid; gap: 14px; }
        .wf-flow__step {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 16px 18px;
          background: var(--ds-color-surface-default);
          border: var(--ds-border-width-default) solid var(--ds-color-border-subtle);
          border-radius: var(--ds-radius-control);
        }
        .wf-flow__idx {
          width: 28px; height: 28px; flex-shrink: 0;
          display: grid; place-items: center;
          border-radius: 9999px;
          background: var(--ds-color-action-primary-subtle);
          color: var(--ds-color-action-primary);
          font-weight: var(--ds-font-weight-semibold);
          font-size: 13px;
        }
        .wf-flow__step.is-accent { border-color: var(--ds-color-action-primary); }
        .wf-arrow {
          justify-self: start;
          margin-left: 13px;
          width: 2px; height: 14px;
          background: var(--ds-color-border-subtle);
        }
        .wf-bottom {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }
        .wf-bottom__card {
          min-height: 200px;
          padding: var(--ds-space-2xl);
          display: flex; flex-direction: column; gap: var(--ds-space-md);
        }
        @media (max-width: 1024px) {
          .wf-hero { grid-template-columns: 1fr; min-height: 0; }
          .wf-hero__right { border-left: 0; border-top: var(--ds-border-width-default) solid var(--ds-color-border-subtle); }
          .wf-bottom { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .wf-bottom__card:last-child { grid-column: 1 / -1; }
        }
        @media (max-width: 640px) {
          .wf-bottom { grid-template-columns: 1fr; }
          .wf-bottom__card:last-child { grid-column: auto; }
        }
      `}</style>

      <div className="wf-wrap">
        <article className="wf-hero" style={cardStyle}>
          <div className="wf-hero__left">
            <div className="wf-stat">60%+</div>
            <h3
              style={{
                marginTop: "var(--ds-space-lg)",
                fontSize: "var(--ds-font-size-xl)",
                fontWeight: "var(--ds-font-weight-semibold)",
                color: "var(--ds-color-text-primary)",
                lineHeight: 1.35,
              }}
            >
              黑客挖掘漏洞的主要方式
            </h3>
            <p
              style={{
                marginTop: "var(--ds-space-md)",
                fontSize: "var(--ds-font-size-md)",
                color: "var(--ds-color-text-secondary)",
                lineHeight: 1.7,
                maxWidth: "44ch",
              }}
            >
              超过 60% 的软件漏洞利用源于零日缺陷。模糊测试可以在攻击者之前,
              自动化地暴露未知缺陷,构建主动防御能力。
            </p>
          </div>
          <div className="wf-hero__right">
            <div
              style={{
                fontSize: "var(--ds-font-size-sm)",
                fontWeight: "var(--ds-font-weight-semibold)",
                color: "var(--ds-color-text-secondary)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "var(--ds-space-lg)",
              }}
            >
              模糊测试工作流
            </div>
            <div className="wf-flow">
              {flowSteps.map((s, i) => (
                <div key={s.label}>
                  <div className={`wf-flow__step${s.accent ? " is-accent" : ""}`}>
                    <div className="wf-flow__idx">{i + 1}</div>
                    <div>
                      <div
                        style={{
                          fontSize: "var(--ds-font-size-md)",
                          fontWeight: "var(--ds-font-weight-semibold)",
                          color: s.accent
                            ? "var(--ds-color-action-primary)"
                            : "var(--ds-color-text-primary)",
                          lineHeight: 1.35,
                        }}
                      >
                        {s.label}
                      </div>
                      <div
                        style={{
                          marginTop: 4,
                          fontSize: "var(--ds-font-size-sm)",
                          color: "var(--ds-color-text-secondary)",
                          lineHeight: 1.55,
                        }}
                      >
                        {s.desc}
                      </div>
                    </div>
                  </div>
                  {i < flowSteps.length - 1 && <div className="wf-arrow" />}
                </div>
              ))}
            </div>
          </div>
        </article>

        <div className="wf-bottom">
          {bottomCards.map((c) => (
            <article key={c.title} className="wf-bottom__card" style={cardStyle}>
              <div style={iconBox}>{c.icon}</div>
              <h3 style={smallCardTitle}>{c.title}</h3>
              <p style={smallCardDesc}>{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Capabilities() {
  const items = [
    {
      icon: <Layers size={56} strokeWidth={1.25} aria-hidden />,
      title: "数百种协议模板",
      desc: "支持用户自行定义协议结构和字段变异策略,灵活适配各类专有协议场景。",
    },
    {
      icon: <Sparkles size={56} strokeWidth={1.25} aria-hidden />,
      title: "先进的变异算法",
      desc: "基于自研的变异算法生成高覆盖率测试用例,模拟真实交互行为触发潜在缺陷。",
    },
    {
      icon: <Activity size={56} strokeWidth={1.25} aria-hidden />,
      title: "实时监测目标",
      desc: "实时监测目标行为变化,自动判断崩溃、异常响应等缺陷迹象,并追踪缺陷来源。",
    },
    {
      icon: <Repeat size={56} strokeWidth={1.25} aria-hidden />,
      title: "快速复现漏洞",
      desc: "多种方式重放测试用例、回溯交互记录,辅助用户定位问题与验证修复。",
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
  const items = [
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
  ];
  return (
    <section
      style={{
        backgroundColor: "var(--ds-color-surface-subtle)",
        padding: "var(--ds-section-y-desktop) var(--ds-gutter-desktop)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--ds-container-page)",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.75rem, 3.4vw, 2.5rem)",
            fontWeight: "var(--ds-font-weight-semibold)",
            lineHeight: 1.25,
            color: "var(--ds-color-text-primary)",
            maxWidth: 960,
            margin: "0 auto",
          }}
        >
          以自研智能引擎为核心,全面领先同类产品
        </h2>
        <p
          style={{
            marginTop: "var(--ds-space-lg)",
            maxWidth: 780,
            marginInline: "auto",
            color: "var(--ds-color-text-secondary)",
            fontSize: "var(--ds-font-size-md)",
            lineHeight: 1.6,
          }}
        >
          Wisdom 协议模糊测试在性能、检测覆盖度与可扩展性方面全面领先,
          通过国际认证与创新算法为组织提供高可信的安全检测能力。
        </p>

        <div
          className="wisdom-adv-grid"
          style={{
            marginTop: "var(--ds-space-4xl)",
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "var(--ds-space-4xl)",
            textAlign: "left",
          }}
        >
          {items.map((it) => (
            <div key={it.title} style={{ display: "flex", flexDirection: "column", gap: "var(--ds-space-lg)" }}>
              <div style={{ color: "var(--ds-color-text-primary)" }}>{it.icon}</div>
              <h3
                style={{
                  fontSize: "var(--ds-font-size-lg)",
                  fontWeight: "var(--ds-font-weight-semibold)",
                  color: "var(--ds-color-text-primary)",
                }}
              >
                {it.title}
              </h3>
              <p
                style={{
                  fontSize: "var(--ds-font-size-md)",
                  color: "var(--ds-color-text-secondary)",
                  lineHeight: 1.7,
                }}
              >
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 1023px) {
          .wisdom-adv-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        @media (max-width: 639px) {
          .wisdom-adv-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function NoCustomization() {
  return (
    <Section>
      <div
        style={{
          borderRadius: "var(--ds-radius-surface)",
          padding: "clamp(2rem, 6vw, 4.5rem)",
          background:
            "linear-gradient(135deg, var(--ds-color-surface-inverse), color-mix(in srgb, var(--ds-color-action-primary) 35%, var(--ds-color-surface-inverse)))",
          color: "var(--ds-color-text-inverse)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3.2vw, 2.25rem)",
            fontWeight: "var(--ds-font-weight-semibold)",
            lineHeight: 1.3,
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          Wisdom 无需定制开发即可测试您的专有协议
        </h2>
        <p
          style={{
            marginTop: "var(--ds-space-lg)",
            maxWidth: 780,
            marginInline: "auto",
            color: "var(--ds-color-text-inverse-secondary)",
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

function GhostCta({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} style={ghostCtaStyle}>
      {children}
    </a>
  );
}
