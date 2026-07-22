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
        intro="将固件漏洞扫描平台、Wisdom 模糊测试工具等旗舰产品整合为交钥匙级实验室工具链。客户无需外购检测服务，即可在自有环境中完成从威胁分析（TARA）到固件、协议、整车、云端的全栈安全验证。"
      />

      <Section
        surface="subtle"
        eyebrow="方案组成"
        title="覆盖全栈的网联汽车安全工具链"
      >
        <FeatureGrid
          columns={3}
          items={[
            {
              icon: <ShieldCheck size={22} />,
              title: "OTA 与固件安全",
              desc: "固件漏洞扫描平台：自动化拆解 ECU / TCU 固件，生成 SBOM，持续监测 CVE、许可证与加密合规。",
            },
            {
              icon: <Wifi size={22} />,
              title: "通信与协议安全",
              desc: "Wisdom 系列模糊测试机：覆盖 CAN、以太网、Bluetooth、Wi-Fi、DoIP、SOME/IP 等车载协议，挖掘已知与未知漏洞。",
            },
            {
              icon: <Cpu size={22} />,
              title: "硬件与芯片安全",
              desc: "侧信道分析台、故障注入台、JTAG / SWD 接口扫描器，满足 R155 对安全启动与密钥存储的验证要求。",
            },
            {
              icon: <CarFront size={22} />,
              title: "整车台架攻防区",
              desc: "实车网关与域控制器接入机柜，一键切换实验室与道路场景；集成信号屏蔽、以太网回放与 OTA 沙箱。",
            },
            {
              icon: <FileBadge2 size={22} />,
              title: "数据与合规管理",
              desc: "TARA 威胁分析：内置 GB 44495 与 R155 用例模板，支撑合规文档与证据链的自动化生成。",
            },
            {
              icon: <Rocket size={22} />,
              title: "云端与后台安全",
              desc: "面向车联网云端服务与远程运维通道，提供接口测试、纵深防御与 API 安全验证。",
            },
          ]}
        />
      </Section>

      <Section
        eyebrow="平台架构"
        title="从威胁分析到全栈验证的一体化实验室"
      >
        <ArchitectureDiagram
          layers={[
            {
              label: "合规与流程",
              items: ["TARA 威胁建模", "GB 44495 用例", "R155 CSMS", "证据链管理"],
            },
            {
              label: "测试与验证",
              items: ["模糊测试", "渗透测试", "SCA / SBOM", "硬件安全测试"],
            },
            {
              label: "目标层",
              items: ["ECU / TCU", "整车网关", "OTA 服务", "车联云端"],
            },
          ]}
        />
      </Section>

      <Section
        surface="subtle"
        eyebrow="价值优势"
        title="工具即合规，快速构建自主验证能力"
      >
        <FeatureGrid
          columns={4}
          variant="topbar"
          items={[
            {
              icon: <FileBadge2 size={22} />,
              title: "工具即合规",
              desc: "所有工具均通过 CNAS 框架下的比对验证，可直接生成具备认证效力的原始记录与报告。",
            },
            {
              icon: <Rocket size={22} />,
              title: "一键自动化",
              desc: "从固件拆包、SBOM 生成到模糊测试、报告输出全程脚本化，平均缩短 70% 检测周期。",
            },
            {
              icon: <Users size={22} />,
              title: "人才体系配套",
              desc: "提供 R155、GB 44495 测试工程师带教培训路径，帮助信息安全实验室快速通过 CNAS 评审。",
            },
            {
              icon: <Coins size={22} />,
              title: "总拥有成本低",
              desc: "相比外购检测服务，3 年内可为企业节省约 60% 合规支出，并支撑多车型并行验证。",
            },
          ]}
        />
      </Section>

      <Section
        eyebrow="业务场景"
        title="覆盖国标 GB 44495 与欧盟 R155 双合规"
      >
        <FeatureGrid
          columns={2}
          items={[
            {
              tag: "GB 44495",
              title: "外部连接安全要求",
              desc: "蜂窝、蓝牙、Wi-Fi、NFC 等多模入口统一接入，支持信号层、协议层、应用层三步入侵检测，提前发现越权接入、中间人与重放攻击路径。",
            },
            {
              tag: "GB 44495",
              title: "通信安全要求",
              desc: "覆盖车内总线与车外网络，提供加密一致性、证书有效性与握手鲁棒性验证，确保控车指令、远程诊断与 V2X 消息完整可信。",
            },
            {
              tag: "GB 44495",
              title: "软件升级安全要求",
              desc: "针对 OTA 包、差分包、回滚包进行签名验证、防篡改校验与异常中断恢复测试，保障升级链路不可抵赖、不可降级。",
            },
            {
              tag: "GB 44495",
              title: "数据安全要求",
              desc: "对车端敏感数据的全生命周期进行加密强度、销毁深度与匿名化效果评估，防止个人信息、密钥素材及行驶数据被逆向还原。",
            },
            {
              tag: "R155",
              title: "CSMS 技术验证",
              desc: "以 Wisdom 模糊测试平台对整车及零部件进行持续渗透测试，为主机厂 CSMS 审核提供技术证据。",
            },
            {
              tag: "R155",
              title: "全生命周期风险管理",
              desc: "支撑从开发、生产到售后的持续风险监测与合规证据链管理，满足欧盟法规要求。",
            },
          ]}
        />
      </Section>

      <CtaCard
        title="准备好为您的组织解锁 安全能力 了吗?"
        description="马上申请咨询，让专家为您的信息安全实验室量身设计工具链与合规路径。"
        primaryCta={{ label: "咨询方案", href: CTA_HREF }}
      />
    </SitePageShell>
  );
}
