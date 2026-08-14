import { createFileRoute } from "@tanstack/react-router";
import {
  Cpu,
  Wifi,
  ShieldCheck,
  CarFront,
  FileBadge2,
  Rocket,
  Users,
  Coins,
  ChevronRight,
} from "lucide-react";

import autoArchitecture from "@/assets/auto-arch.png.asset.json";

import {
  CTA_HREF,
  
  ProductHero,
  Section,
  SitePageShell,
} from "@/components/site/ProductPageKit";
import { SolutionShowcaseGrid } from "@/components/site/SolutionShowcaseGrid";
import { AdvantageTriad } from "@/components/site/AdvantageTriad";
import { GalleryHoverCarousel } from "@/components/site/GalleryHoverCarousel";


export const Route = createFileRoute("/solution-auto.html")({
  head: () => ({
    meta: [
      { title: "网联汽车 信息安全实验室解决方案 — 中科固源" },
      {
        name: "description",
        content:
          "面向汽车主机厂、检测机构与零部件厂商，以工具链 + 合规双轮驱动，交付覆盖 GB 44495 与 R155 全项检测的实验室能力。",
      },
      {
        name: "keywords",
        content:
          "网联汽车安全，GB 44495，UNECE R155，汽车信息安全实验室，OTA 安全，车载协议模糊测试",
      },
      {
        property: "og:title",
        content: "网联汽车 信息安全实验室解决方案 — 中科固源",
      },
      {
        property: "og:description",
        content:
          "覆盖固件、协议、整车与云端的一站式网联汽车信息安全实验室解决方案。",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/solution-auto.html" },
    ],
    links: [{ rel: "canonical", href: "/solution-auto.html" }],
  }),
  component: SolutionAutoPage,
});

function SolutionAutoPage() {
  return (
    <SitePageShell>
      <ProductHero
        eyebrow="解决方案 · 网联汽车"
        title={
          <>
            网联汽车 信息安全实验室
            <br />
            解决方案
          </>
        }
        description="以“工具链 + 合规”双轮驱动，为汽车主机厂、检测机构、零部件厂商一站式交付覆盖 GB 44495 与 UNECE R155 全项检测所需的实验能力，快速构建自主可控的信息安全验证中心。"
        primaryCta={{ label: "咨询方案", href: CTA_HREF }}
        secondaryCta={{ label: "联系我们", href: CTA_HREF }}
      />

      <Section
        eyebrow="方案概述"
        title="围绕 GB 44495 与 R155 构建交钥匙实验室"
      >
        <img
          src={autoArchitecture.url}
          alt=""
          style={{
            display: "block",
            width: "100%",
            maxWidth: 1250,
            height: "auto",
            borderRadius: "var(--ds-radius-surface)",
          }}
        />

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
              围绕 GB 44495 与 R155 构建交钥匙实验室
            </h3>
            <p
              style={{
                fontSize: "var(--ds-font-size-lg)",
                lineHeight: 1.65,
                color: "var(--ds-color-text-secondary)",
              }}
            >
              将固件漏洞扫描平台、Wisdom 模糊测试工具等旗舰产品整合为交钥匙级实验室工具链。客户无需外购检测服务，即可在自有环境中完成从威胁分析（TARA）到固件、协议、整车、云端的全栈安全验证。
            </p>
          </div>
          <a
            href="/solution-auto.html"
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
        description="覆盖全栈的网联汽车安全工具链"
        cards={[
          {
            icon: <ShieldCheck size={18} aria-hidden />,
            category: "OTA 与固件安全",
            items: [
              {
                title: "固件漏洞扫描平台",
                desc: "自动化拆解 ECU/TCU 固件，生成 SBOM，持续监测 CVE、许可证及加密合规。",
              },
            ],
          },
          {
            icon: <Wifi size={18} aria-hidden />,
            category: "通信与协议安全",
            items: [
              {
                title: "Wisdom 系列模糊测试机",
                desc: "覆盖 CAN/Ethernet/Bluetooth/Wi-Fi/DOIP/SOME IP 等全场景车载协议，支持协议已知漏洞和未知漏洞挖掘。",
              },
            ],
          },
          {
            icon: <Cpu size={18} aria-hidden />,
            category: "硬件与芯片安全",
            items: [
              {
                title: "硬件安全验证台",
                desc: "侧信道分析台、故障注入台、JTAG/SWD 接口扫描器，满足 R155 对硬件安全启动、密钥存储的验证要求。",
              },
            ],
          },
          {
            icon: <CarFront size={18} aria-hidden />,
            category: "整车台架攻防区",
            items: [
              {
                title: "整车接入机柜",
                desc: "实车网关、域控制器接入机柜，一键切换实验室与道路场景；集成无线信号屏蔽、车载以太网流量回放、OTA 升级沙箱。",
              },
            ],
          },
          {
            icon: <FileBadge2 size={18} aria-hidden />,
            category: "数据与合规管理",
            items: [
              {
                title: "TARA 威胁分析",
                desc: "内置 GB 44495 & R155 威胁库，自动输出风险评估报告与合规差距清单。",
              },
              {
                title: "知识共享平台",
                desc: "持续更新法规解读、攻击用例、补丁情报，支撑人员培训与审计追溯。",
              },
            ],
          },
        ]}
      />


      <AdvantageTriad
        columns={4}
        title="工具即合规，快速构建自主验证能力"
        items={[
          {
            icon: <FileBadge2 size={36} strokeWidth={1.2} aria-hidden />,
            title: "工具即合规",
            desc: "所有工具均通过 CNAS 框架下的比对验证，可直接生成具备认证效力的原始记录与报告。",
          },
          {
            icon: <Rocket size={36} strokeWidth={1.2} aria-hidden />,
            title: "一键自动化",
            desc: "从固件拆包、SBOM 生成到模糊测试、报告输出全程脚本化，平均缩短 70% 检测周期。",
          },
          {
            icon: <Users size={36} strokeWidth={1.2} aria-hidden />,
            title: "人才体系配套",
            desc: "提供 R155、GB 44495 测试工程师带教培训路径，帮助信息安全实验室快速通过 CNAS 评审。",
          },
          {
            icon: <Coins size={36} strokeWidth={1.2} aria-hidden />,
            title: "总拥有成本低",
            desc: "相比外购检测服务，3 年内可为企业节省约 60% 合规支出，并支撑多车型并行验证。",
          },
        ]}
      />


      <GalleryHoverCarousel
        eyebrow="业务场景"
        heading="覆盖国标 GB 44495 与欧盟 R155 双合规"
        items={[
          {
            id: "gb-external",
            tag: "GB 44495",
            title: "外部连接安全要求",
            summary:
              "蜂窝、蓝牙、Wi-Fi、NFC 等多模入口统一接入，支持信号层、协议层、应用层三步入侵检测，提前发现越权接入、中间人与重放攻击路径。",
          },
          {
            id: "gb-comm",
            tag: "GB 44495",
            title: "通信安全要求",
            summary:
              "覆盖车内总线与车外网络，提供加密一致性、证书有效性与握手鲁棒性验证，确保控车指令、远程诊断与 V2X 消息完整可信。",
          },
          {
            id: "gb-ota",
            tag: "GB 44495",
            title: "软件升级安全要求",
            summary:
              "针对 OTA 包、差分包、回滚包进行签名验证、防篡改校验与异常中断恢复测试，保障升级链路不可抵赖、不可降级。",
          },
          {
            id: "gb-data",
            tag: "GB 44495",
            title: "数据安全要求",
            summary:
              "对车端敏感数据的全生命周期进行加密强度、销毁深度与匿名化效果评估，防止个人信息、密钥素材及行驶数据被逆向还原。",
          },
          {
            id: "r155-csms",
            tag: "R155",
            title: "CSMS 技术验证",
            summary:
              "以 Wisdom 模糊测试平台对整车及零部件进行持续渗透测试，为主机厂 CSMS 审核提供技术证据。",
          },
          {
            id: "r155-vta",
            tag: "R155",
            title: "VTA 型式认证抽样",
            summary:
              "针对 TARA 高风险项（如网关、T-box）进行重点复测，生成认证机构认可的测试报告。",
          },
          {
            id: "r155-supply",
            tag: "R155",
            title: "供应链安全审查",
            summary:
              "利用固件分析技术对第三方固件进行 SBOM 与漏洞比对，帮助 OEM 向审核员展示供应链风险管理过程。",
          },
        ]}
      />


    </SitePageShell>
  );
}
