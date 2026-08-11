import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  Radar,
  FileBadge2,
  Rocket,
  Coins,
  ChevronRight,
} from "lucide-react";

import { SolutionShowcaseGrid } from "@/components/site/SolutionShowcaseGrid";
import { AdvantageTriad } from "@/components/site/AdvantageTriad";
import { ZigzagShowcase } from "@/components/site/ZigzagShowcase";
import {
  CTA_HREF,
  ProductHero,
  Section,
  SitePageShell,
} from "@/components/site/ProductPageKit";

export const Route = createFileRoute("/solution-special.html")({
  head: () => ({
    meta: [
      { title: "特种领域 网络安全实验解决方案 — 中科固源" },
      {
        name: "description",
        content:
          "面向研究所、测评中心与装备承制单位，以工具链 + 合规双引擎交付覆盖脆弱性、渗透性、生存性全指标的自主可控实验能力。",
      },
      {
        name: "keywords",
        content:
          "特种装备安全，网络安全实验，脆弱性测试，渗透性测试，生存性评估",
      },
      {
        property: "og:title",
        content: "特种领域 网络安全实验解决方案 — 中科固源",
      },
      {
        property: "og:description",
        content:
          "面向特种领域的自主可控网络安全实验平台，覆盖源码、固件、协议与整机全流程。",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/solution-special.html" },
    ],
    links: [{ rel: "canonical", href: "/solution-special.html" }],
  }),
  component: SolutionSpecialPage,
});

function SolutionSpecialPage() {
  return (
    <SitePageShell>
      <ProductHero
        eyebrow="解决方案 · 特种装备"
        title={
          <>
            特种领域 网络安全实验
            <br />
            解决方案
          </>
        }
        description="以“工具链 + 合规”双引擎，为研究所、测评中心、装备承制单位交付覆盖脆弱性、渗透性、生存性全指标的自主可控实验能力，一站式打造特种网络安全验证高地。"
        primaryCta={{ label: "咨询方案", href: CTA_HREF }}
        secondaryCta={{ label: "联系我们", href: CTA_HREF }}
      />

      <Section
        eyebrow="方案概述"
        title="面向特种领域的交钥匙级实验平台"
      >
        <div
          style={{
            maxWidth: 1250,
            aspectRatio: "1250 / 568",
            width: "100%",
            marginInline: "auto",
            backgroundColor: "var(--ds-color-surface-subtle)",
            borderRadius: "var(--ds-radius-surface)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--ds-color-text-muted)",
            fontSize: "var(--ds-font-size-lg)",
            overflow: "hidden",
          }}
        >
          <span>方案示意图占位</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "var(--ds-space-4xl)",
            marginTop: "var(--ds-space-3xl)",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1 1 28rem", maxWidth: "50rem" }}>
            <h3
              style={{
                fontSize: "var(--ds-font-size-2xl)",
                fontWeight: "var(--ds-font-weight-semibold)",
                lineHeight: 1.3,
                marginBottom: "var(--ds-space-md)",
                color: "var(--ds-color-text-primary)",
              }}
            >
              面向特种领域的交钥匙级实验平台
            </h3>
            <p
              style={{
                fontSize: "var(--ds-font-size-lg)",
                lineHeight: 1.65,
                color: "var(--ds-color-text-secondary)",
              }}
            >
              围绕特种领域网络安全实验评价体系，中科数测将自研国产代码静态扫描、固件漏洞挖掘、自主可控模糊测试、硬件侧信道分析等核心工具整合为“交钥匙”级实验平台。客户无需外购检测服务，即可在自有环境中完成从源码、固件、板卡到整机系统的脆弱性发现、渗透验证与生存性评估，实现“风险前置—整改闭环—合规举证”全周期管控。
            </p>
          </div>
          <a
            href="/solution-special.html"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--ds-space-sm)",
              color: "var(--ds-color-link-default)",
              fontSize: "var(--ds-font-size-md)",
              fontWeight: "var(--ds-font-weight-semibold)",
              textDecoration: "none",
              flexShrink: 0,
              marginTop: "var(--ds-space-xs)",
            }}
          >
            了解更多
            <ChevronRight size={18} aria-hidden />
          </a>
        </div>
      </Section>

      <SolutionShowcaseGrid
        title="方案组成"
        description="脆弱性、渗透性、生存性与合规知识中枢四位一体，覆盖特种装备网络安全实验全流程。"
        cards={[
          {
            icon: <Radar size={18} aria-hidden />,
            category: "脆弱性发现",
            items: [
              {
                title: "多引擎代码扫描平台",
                desc: "二十多种语言包含 C/C++、JAVA、汇编一站式静态分析，自动生成缺陷图谱与 GJB 代码合规报告。",
              },
              {
                title: "国产固件清点平台",
                desc: "一键拆解 BSP/驱动/FPGA 映像，输出 SBOM 与 CVE 映射，定位过期加密库与硬编码密钥。",
              },
            ],
          },
          {
            icon: <ShieldCheck size={18} aria-hidden />,
            category: "渗透性验证",
            items: [
              {
                title: "Wisdom 协议模糊测试机",
                desc: "覆盖 1553B、CAN-FD、以太网等装备总线，挖掘未知漏洞。",
              },
              {
                title: "硬件安全测试台",
                desc: "侧信道分析、故障注入、JTAG/SWD 扫描，验证安全启动、密钥存储、防熔断机制能否被绕过。",
              },
            ],
          },
          {
            icon: <Rocket size={18} aria-hidden />,
            category: "生存性评估",
            items: [
              {
                title: "实装半实物仿真机柜",
                desc: "可注入掉电、强电磁、断链、异常报文洪流，记录装备系统在降级模式下的功能连续性与数据完整性。",
              },
              {
                title: "攻击后恢复验证模块",
                desc: "模拟恶意更新、固件篡改、配置破坏，自动判别自恢复、日志留存与可信重启动是否满足任务关键要求。",
              },
            ],
          },
          {
            icon: <FileBadge2 size={18} aria-hidden />,
            category: "合规与知识中枢",
            items: [
              {
                title: "实验指标",
                desc: "内置“脆弱性→渗透性→生存性”评价模板，自动关联测试项并生成原始记录与差距清单。",
              },
              {
                title: "知识共享平台",
                desc: "持续推送漏洞情报、补丁策略、用例脚本，支撑人员培训与审计追溯。",
              },
            ],
          },
        ]}
      />

      <AdvantageTriad
        columns={4}
        title="自主可控、工具即合规"
        items={[
          {
            icon: <FileBadge2 size={36} strokeWidth={1.2} aria-hidden />,
            title: "工具即合规",
            desc: "所有工具通过相关比对验证，可直接生成具备评审效力的原始记录与报告。",
          },
          {
            icon: <ShieldCheck size={36} strokeWidth={1.2} aria-hidden />,
            title: "自主可控",
            desc: "核心模糊测试引擎与硬件分析模块完全国产化，支持源码级定制，保护核心知识产权。",
          },
          {
            icon: <Rocket size={36} strokeWidth={1.2} aria-hidden />,
            title: "一键自动化",
            desc: "从源码扫描、固件拆包到模糊测试、故障注入、报告输出全程脚本化，缩短 70% 实验周期。",
          },
          {
            icon: <Coins size={36} strokeWidth={1.2} aria-hidden />,
            title: "总拥有成本低",
            desc: "相比外购检测服务，3 年内可节省约 60% 实验支出，并支撑多型装备并行验证。",
          },
        ]}
      />


      <ZigzagShowcase
        title="从脆弱性到生存性的实验全景"
        items={[
          {
            title: "装备脆弱性测试",
            paragraphs: [
              "源码缺陷普查：对等关键软件进行一夜级扫描，定位缓冲区溢出、整数溢出、命令注入等高危缺陷。",
              "固件 SBOM 清点：自动提取装备的第三方组件与许可证，提前发现过期加密库、硬编码密钥。",
            ],
          },
          {
            title: "装备渗透性测试",
            paragraphs: [
              "利用 Wisdom 模糊平台对 1553B、CAN-FD、以太网等装备总线进行测试，验证消息校验、重放保护、访问控制的有效性。",
              "针对数据链等无线通道实施信号层劫持、协议层重放与应用层伪造，考核加密通道与证书链的鲁棒性。",
            ],
          },
          {
            title: "装备生存性测试",
            paragraphs: [
              "通过半实物仿真机柜注入掉电、异常复位、强电磁脉冲，检验装备系统在降级模式下核心功能的连续可用与数据完整性。",
              "模拟恶意更新、固件篡改、配置破坏，评估系统自恢复、日志留存与可信重启动机制，确保任务关键数据不丢失、不泄露。",
            ],
          },
        ]}
      />


    </SitePageShell>
  );
}
