import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  Radar,
  Cpu,
  Server,
  FileBadge2,
  Rocket,
  Lock,
  Coins,
} from "lucide-react";

import {
  ArchitectureDiagram,
  CTA_HREF,
  CtaCard,
  FeatureGrid,
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
        intro="围绕特种领域网络安全实验评价体系，将国产代码静态扫描、固件漏洞挖掘、自主可控模糊测试、硬件侧信道分析等核心工具整合为“交钥匙”级实验平台，实现风险前置、整改闭环、合规举证全周期管控。"
      />

      <Section
        surface="subtle"
        eyebrow="方案组成"
        title="脆弱性、渗透性、生存性三位一体"
      >
        <FeatureGrid
          columns={3}
          items={[
            {
              icon: <Radar size={22} />,
              tag: "脆弱性发现",
              title: "多引擎代码扫描平台",
              desc: "支持 20 余种语言，涵盖 C/C++、Java、汇编等，一站式静态分析，自动生成缺陷图谱与 GJB 代码合规报告。",
            },
            {
              icon: <Server size={22} />,
              tag: "脆弱性发现",
              title: "国产固件清点平台",
              desc: "一键拆解 BSP / 驱动 / FPGA 映像，输出 SBOM 与 CVE 映射，定位过期加密库与硬编码密钥。",
            },
            {
              icon: <ShieldCheck size={22} />,
              tag: "渗透性验证",
              title: "Wisdom 协议模糊测试机",
              desc: "覆盖 1553B、CAN-FD、以太网等装备总线，挖掘未知协议漏洞。",
            },
            {
              icon: <Cpu size={22} />,
              tag: "渗透性验证",
              title: "硬件安全测试台",
              desc: "侧信道分析、故障注入、JTAG / SWD 扫描，验证安全启动、密钥存储、防熔断机制能否被绕过。",
            },
            {
              icon: <Rocket size={22} />,
              tag: "生存性评估",
              title: "半实物仿真机柜",
              desc: "可注入掉电、强电磁、断链、异常报文洪流，记录装备在降级模式下的功能连续性与数据完整性。",
            },
            {
              icon: <Lock size={22} />,
              tag: "生存性评估",
              title: "攻击后恢复验证",
              desc: "模拟恶意更新、固件篡改、配置破坏，评估自恢复、日志留存与可信重启动机制。",
            },
          ]}
        />
      </Section>

      <Section
        eyebrow="平台架构"
        title="面向特种装备的分层实验能力"
      >
        <ArchitectureDiagram
          layers={[
            {
              label: "评价与合规",
              items: ["脆弱性指标", "渗透性指标", "生存性指标", "合规报告"],
            },
            {
              label: "工具链层",
              items: ["代码扫描", "固件清点", "协议模糊测试", "硬件安全测试"],
            },
            {
              label: "目标层",
              items: ["源代码", "固件 / 驱动", "总线协议", "整机系统"],
            },
          ]}
        />
      </Section>

      <Section
        surface="subtle"
        eyebrow="价值优势"
        title="自主可控、工具即合规"
      >
        <FeatureGrid
          columns={4}
          variant="topbar"
          items={[
            {
              icon: <FileBadge2 size={22} />,
              title: "工具即合规",
              desc: "所有工具通过相关比对验证，可直接生成具备评审效力的原始记录与报告。",
            },
            {
              icon: <ShieldCheck size={22} />,
              title: "自主可控",
              desc: "核心模糊测试引擎与硬件分析模块完全国产化，支持源码级定制，保护核心知识产权。",
            },
            {
              icon: <Rocket size={22} />,
              title: "一键自动化",
              desc: "从源码扫描、固件拆包到模糊测试、故障注入、报告输出全程脚本化，缩短 70% 实验周期。",
            },
            {
              icon: <Coins size={22} />,
              title: "总拥有成本低",
              desc: "相比外购检测服务，3 年内可节省约 60% 实验支出，并支撑多型装备并行验证。",
            },
          ]}
        />
      </Section>

      <Section
        eyebrow="业务场景"
        title="从脆弱性到生存性的实验全景"
      >
        <FeatureGrid
          columns={3}
          items={[
            {
              tag: "装备脆弱性测试",
              title: "源码缺陷普查",
              desc: "对关键软件进行一夜级扫描，定位缓冲区溢出、整数溢出、命令注入等高危缺陷。",
            },
            {
              tag: "装备脆弱性测试",
              title: "固件 SBOM 清点",
              desc: "自动提取装备的第三方组件与许可证，提前发现过期加密库、硬编码密钥。",
            },
            {
              tag: "装备渗透性测试",
              title: "装备总线渗透",
              desc: "利用 Wisdom 模糊平台对 1553B、CAN-FD、以太网等装备总线进行测试，验证消息校验、重放保护与访问控制的有效性。",
            },
            {
              tag: "装备渗透性测试",
              title: "无线通道对抗",
              desc: "针对数据链等无线通道实施信号层劫持、协议层重放与应用层伪造，考核加密通道与证书链的鲁棒性。",
            },
            {
              tag: "装备生存性测试",
              title: "极端环境注入",
              desc: "通过半实物仿真机柜注入掉电、异常复位、强电磁脉冲，检验装备在降级模式下的可用性与数据完整性。",
            },
            {
              tag: "装备生存性测试",
              title: "恶意干扰恢复",
              desc: "模拟恶意更新、固件篡改与配置破坏，评估系统自恢复、日志留存与可信重启动机制。",
            },
          ]}
        />
      </Section>

      <CtaCard
        title="准备好为您的组织解锁 安全能力 了吗?"
        description="马上申请咨询，让专家为您的特种网络安全实验能力量身规划。"
        primaryCta={{ label: "咨询方案", href: CTA_HREF }}
      />
    </SitePageShell>
  );
}
