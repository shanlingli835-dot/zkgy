import { createFileRoute } from "@tanstack/react-router";
import {
  Radar,
  ShieldAlert,
  Workflow,
  FileBarChart2,
  Swords,
  Network,
  Crosshair,
  BellRing,
  Coins,
} from "lucide-react";

import swiftPentestAttackSurface from "@/assets/swift-pentest-attack-surface.png";
import swiftPentestTopology from "@/assets/swift-pentest-topology.png";
import swiftPentestAttackChain from "@/assets/swift-pentest-attack-chain.png";
import swiftPentestAttackConfig from "@/assets/swift-pentest-attack-config.png";
import swiftPentestKnowledgeAdd from "@/assets/swift-pentest-knowledge-add.png";
import swiftPentestExploitExec from "@/assets/swift-pentest-exploit-exec.png";
import swiftPentestDistributedNodes from "@/assets/swift-pentest-distributed-nodes.png";
import swiftPentestHeroVideo from "@/assets/swift-pentest-hero-intro.mp4.asset.json";
import pentestFinancePhoto from "@/assets/pentest-case-finance-photo.jpg.asset.json";
import pentestInfrastructurePhoto from "@/assets/pentest-case-infrastructure-photo.png.asset.json";
import pentestBankPhoto from "@/assets/pentest-case-bank-photo.jpg.asset.json";
import { AdvantageTriad } from "@/components/site/AdvantageTriad";
import { CenteredCarousel } from "@/components/site/CenteredCarousel";
import { HomeAccordion } from "@/components/site/HomeAccordion";
import {
  CTA_HREF,
  HeroVideo,
  ProductHero,
  SitePageShell,
} from "@/components/site/ProductPageKit";

const SEO_DESCRIPTION =
  "Swift Pentest结合 AI 与黑客技术，打造的一款自动化安全验证产品。 从攻击者的视角出发，为客户提供持续性网络安全验证服务，帮助用户验证网络资产安全性以及网络环境安全控制有效性，提升用户整体网络目标、系统目标的安全性。通过在真实环境中模拟“黑客攻击技战术”动态生成攻击杀伤链，对用户网络进行真实的渗透攻击，逐项排查网络中的脆弱点。";

export const Route = createFileRoute("/swiftpenstest.html")({
  head: () => ({
    meta: [
      { title: "Swift Pentest 自动化渗透测试 - 中科固源" },
      { name: "description", content: SEO_DESCRIPTION },
      {
        name: "keywords",
        content:
          "自动化渗透测试，渗透测试，漏扫，漏洞扫描，漏洞检测，漏洞验证，攻击利用，资产发现",
      },
      { property: "og:title", content: "Swift Pentest 自动化渗透测试 - 中科固源" },
      { property: "og:description", content: SEO_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/swiftpenstest.html" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/swiftpenstest.html" }],
  }),
  component: SwiftPenPage,
});

function SwiftPenPage() {
  return (
    <SitePageShell>
      <ProductHero
        title="Swift Pentest 自动化渗透测试"
        description="结合AI与渗透攻防技术，自动化探析攻击链，优先定位高风险漏洞，化被动防御为主动应对。"
        primaryCta={{ label: "免费试用", href: CTA_HREF }}
        visualAspectRatio="16 / 9"
        visual={
          <HeroVideo
            label="Swift Pentest 自动化渗透测试产品演示"
            src={swiftPentestHeroVideo.url}
            poster={swiftPentestAttackSurface}
          />
        }
      />

      <HomeAccordion
        title="产品功能"
        items={[
          {
            icon: <Radar size={56} strokeWidth={1.25} aria-hidden />,
            title: "拓扑画像",
            desc: "支持对任务执行过程中收集到的关键信息生成拓扑图，将各节点中发现的风险进行标识，展示节点间的攻击关系，辅助管理员进行风险分析及研判。",
            image: {
              src: swiftPentestTopology,
              alt: "攻击拓扑图界面：左侧扫描节点沿连线指向被发现的目标主机，再按开放端口分出 Web 服务与数据库两条攻击路径，途经 PHP 配置风险、MySQL 弱口令、数据库用户凭证、文件写出等节点，最终汇聚到已获取权限的目标主机",
            },
          },
          {
            icon: <ShieldAlert size={56} strokeWidth={1.25} aria-hidden />,
            title: "攻击链路",
            desc: "从多个视角对目标系统风险进行主动探测、分析，形成多维度分析视图和攻击链路图等，能够展示具体的风险或漏洞从目标发现到攻击成功的完整链路，为业务人员呈现可能的黑客攻击路径。",
            image: {
              src: swiftPentestAttackChain,
              alt: "攻击链路图界面：顶部统计栏显示风险评分、存活目标、未存活目标、扩展目标、攻击面、攻击路径与攻击成果数量，主体从 VulnBot 扫描节点沿连线指向目标主机，再按端口与网络服务分出多条链路，红色节点标注 Docker Registry 未授权访问、Spring Cloud Config 路径穿越、Drupal 核心代码执行、Spring Boot 未授权访问、vsftpd 后门等漏洞",
            },
          },
          {
            icon: <Workflow size={56} strokeWidth={1.25} aria-hidden />,
            title: "攻击配置",
            desc: "在任务创建过程中，智能自动化攻击验证平台提供有危害模块的控制功能，来预防系统运行特殊攻击利用组件时，对用户的网络环境可能造成的服务不可用、服务重启、系统不可用、系统重启等潜在影响。",
            image: {
              src: swiftPentestAttackConfig,
              alt: "攻击配置界面：左侧为渗透测试说明与目标配置、情报搜集、攻击配置、插件配置四步流程，当前停在攻击配置；右侧依次是攻击策略开关（模糊匹配、漏洞利用、控制解除、横向移动）、账户配置的用户名与密码填写表、密码爆破弱口令勾选项（FTP、SQL Server、MySQL、postgresql、Redis、SMB、SSH、Telnet、SNMP、SMTP 服务弱口令）、可能造成危害的检测（Spring Framework 远程代码执行 CVE-2022-22965）与可能造成危害的利用（SMB 远程溢出永恒之蓝 MS17-010、Windows 远程桌面服务远程代码执行 CVE-2019-0708、Windows 域服务权限提升漏洞 CVE-2021-42287 与 CVE-2021-42278、SaltStack 任意文件写入 CVE-2021-25281），底部为后渗透攻击方式",
            },
          },
          {
            icon: <FileBarChart2 size={56} strokeWidth={1.25} aria-hidden />,
            title: "知识项添加",
            desc: "在任务执行过程中，智能自动化攻击验证平台支持为用户在原有目标的基础上，扩充检测知识项。可添加的知识项包括：目标、主机和网站类漏洞、端口攻击面、URL攻击面、站点攻击面以及凭证等知识项。",
            image: {
              src: swiftPentestKnowledgeAdd,
              alt: "创建知识弹窗界面：深蓝科技风格对话框标题为「创建知识」，表单自上而下依次为站点（必填）、标题、操作系统（已填写 centos）、CMS、中间件、编程语言、开发框架、是否为 CDN 开关与 WAF（显示「无」），右下角为「创建」按钮",
            },
          },
          {
            icon: <Swords size={56} strokeWidth={1.25} aria-hidden />,
            title: "漏洞利用",
            desc: "系统内的漏洞利用模型可调用海量的漏洞利用组件，对系统内已验证的漏洞点进行攻击利用，从而以黑客视角展示渗透攻击成功后可能带来的业务影响。",
            image: {
              src: swiftPentestExploitExec,
              alt: "创建攻击任务界面：左侧导航为攻击任务、漏洞利用组件、目标管理、攻击记录与报告中心；中部四步流程下可选本地攻击与横向攻击两种方式，下方漏洞利用组件表列出 SMB 远程代码执行、Tomcat 管理后台弱口令、MySQL UDF 提权、Redis 未授权命令执行、SSH 弱口令爆破等组件及其类型、适用场景与 CVE 编号；右侧为攻击目标列表与攻击路径预览",
            },
          },
          {
            icon: <Network size={56} strokeWidth={1.25} aria-hidden />,
            title: "分布式：多节点",
            desc: "智能自动化渗透测试平台采用服务端与多节点分布式架构，支持快速部署和灵活扩容，提升扫描效率与系统性能。",
            image: {
              src: swiftPentestDistributedNodes,
              alt: "分布式多节点架构示意图：VPC 1、VPC 2、VPC 3 三个虚拟私有云面板内各含一个 Agent 节点与两个 Server 节点，VPC 1 的 Agent 沿两条链路分别连向 VPC 2 与 VPC 3 的 Agent",
            },
          },
        ]}
      />

      <AdvantageTriad
        title="产品优势"
        items={[
          {
            icon: <Crosshair size={56} strokeWidth={1.25} aria-hidden />,
            title: "高精准",
            desc: "内置漏洞验证与利用组件，确保漏洞经过充分验证并可深入利用进行风险检查。",
          },
          {
            icon: <BellRing size={56} strokeWidth={1.25} aria-hidden />,
            title: "自预警",
            desc: "通过攻击模拟与态势感知联动，主动检测并预警网络资产风险。",
          },
          {
            icon: <Coins size={56} strokeWidth={1.25} aria-hidden />,
            title: "低成本",
            desc: "以自动化为主的人机结合模式，降低安全验证的人力依赖与实施成本。",
          },
        ]}
      />

      <CenteredCarousel
        title="典型案例"
        label="典型案例"
        items={[
          {
            id: "finance-telecom",
            image: { src: pentestFinancePhoto.url, alt: "真实摄影：现代商务区玻璃高楼，金融与通信行业场景示意" },
            title: "金融/通信行业案例",
            description: "面向金融、通信等资产密集型行业，智能扫描并识别企业网络资产，精准定位 IP 对应设备，发现遗漏及沉没资产，全面掌握资产状况，筑牢网络安全防线。",
          },
          {
            id: "infrastructure",
            image: { src: pentestInfrastructurePhoto.url, alt: "真实摄影：江边电厂航拍，蓝色暮光下的厂房与亮灯设施" },
            title: "关键基础设施行业案例",
            description: "煤炭、电力、房地产等关乎民生的国家支柱性行业，企业内软件系统体系庞大，安全要求极高，稍有不慎，就会产生巨大影响。",
          },
          {
            id: "bank-risk-validation",
            image: { src: pentestBankPhoto.url, alt: "真实摄影：城市商务区夜景，银行行业场景示意，非项目现场" },
            title: "某全国性股份制银行风险验证项目",
            description: "针对银行外网资产暴露、系统上线排查及持续安全检测需求，通过自动化模拟真实攻击场景，精准验证漏洞、识别攻击路径，实现漏洞验证与利用的自动化，提升安全检测效率及漏洞修复效率。",
          },
        ]}
      />
    </SitePageShell>
  );
}
