---
stepsCompleted:
  - step-01-validate-prerequisites
  - step-02-design-epics
  - step-03-create-stories
  - step-04-final-validation
inputDocuments:
  - /Users/mac/Documents/company_workspace/_bmad-output/planning-artifacts/prds/prd-company_workspace-2026-07-13/prd.md
  - /Users/mac/Documents/company_workspace/_bmad-output/planning-artifacts/ux-designs/ux-company_workspace-2026-07-14/DESIGN.md
  - /Users/mac/Documents/company_workspace/_bmad-output/planning-artifacts/ux-designs/ux-company_workspace-2026-07-14/EXPERIENCE.md
  - /Users/mac/Documents/company_workspace/_bmad-output/planning-artifacts/architecture/architecture-company_workspace-2026-07-14/ARCHITECTURE-SPINE.md
updated: 2026-07-14
---

# company_workspace - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for company_workspace, decomposing the requirements from the PRD, UX Design if it exists, and Architecture requirements into implementable stories.

本拆分用于中科数测官网 UI 重构。拆分边界以用户可感知的网站体验为主，而不是按技术层拆分；必要的工程基础、组件、数据结构和验收脚本放入最早需要它们的 Story 中。每个 Story 都包含目标、范围、验收标准、依赖、不可改动项。

## Requirements Inventory

### Functional Requirements

FR1: 重构项目必须覆盖已确认的 11 个源站页面；新增、删除、合并页面必须先确认。

FR2: 每个页面必须保留源站核心文案含义、产品定位、方案描述、服务描述和 CTA 文案。

FR3: 每个页面必须保留源站已盘点的主要模块，模块顺序默认不改变。

FR4: 全站导航结构必须保留源站产品、解决方案、服务、公司介绍和联系入口，文字和目标链接不得擅自改写。

FR5: 所有“免费试用”“联系我们”“咨询方案”“了解更多”等 CTA 必须保持源站业务含义和目标路径。

FR6: 页脚中的备案、外部社区/媒体链接、站内导航链接必须保留。

FR7: 首页必须重构视觉层级，保留公司定位、核心安全能力、产品矩阵、解决方案、公司介绍、成功案例和底部 CTA。

FR8: 六个产品详情页必须采用统一但可区分的详情页结构，保留各自产品能力重点、功能、优势、集成能力和底部 CTA。

FR9: 网联汽车和特种装备解决方案页必须突出方案概述、方案组成、价值优势、业务场景和咨询 CTA。

FR10: 渗透测试服务页必须保留服务定位、测试说明、服务优势、检测内容和联系 CTA。

FR11: 公司介绍页必须保留公司定位、关于公司、研发实力、企业文化、荣誉资质、公司分布地区、FAQ 和底部 CTA。

FR12: 必须形成统一的导航、按钮、卡片、标签、产品能力块、方案模块、数据指标、页脚和 CTA 组件样式。

FR13: 桌面端必须适配常见宽屏和笔记本视口，导航、首屏、产品卡片、方案内容和 CTA 不重叠、不溢出。

FR14: 移动端必须支持导航折叠、模块纵向阅读、按钮可点击、图片不遮挡文字、长标题自动换行、内容不横向溢出。

FR15: 导航展开、hover、按钮状态、tab 切换、FAQ 展开、CTA 点击等交互状态必须保持业务逻辑不变，并提升视觉反馈清晰度。

FR16: 新页面必须保留每页源站 SEO title、description、keywords；源站未识别项需列为待确认。

FR17: 源站图片、logo、产品截图、图标、客户/院校/行业 logo 等素材必须建立素材清单；替换必须确认不改变内容含义。

FR18: 新站默认保持 `.html` URL 结构和站内链接目标不变。

FR19: 源站 HTTPS 证书过期不属于 UI 重构功能需求，但上线前必须作为运维风险单独修复。

### NonFunctional Requirements

NFR1: 可访问性必须达到基础可用水平：文本对比度、按钮可点击区域、焦点状态、图片 alt、菜单/tab/FAQ 键盘操作和展开状态必须可用。

NFR2: 性能必须避免无意义大图、重复动画和阻塞脚本；首屏关键文字和主 CTA 应优先可见。

NFR3: 兼容性必须覆盖主流 Chrome、Safari、Edge；移动端覆盖 iOS Safari 和 Android Chrome。

NFR4: 可维护性必须通过页面模板、共享组件、集中颜色/字体/间距 token 和内容记录实现，避免每页复制一套样式。

NFR5: 可验收性必须支持旧站截图、页面盘点、链接清单、SEO 清单和移动端检查的逐页对照。

### Additional Requirements

- 首版实现采用静态站点生成，不新增 CMS、后台、数据库、权限或运行时接口。
- 架构种子为 Astro 7.x、Vite 8.x、TypeScript、CSS custom properties 和 component-scoped CSS。
- 构建产物必须输出或服务 11 个旧式 `.html` 路径，包括 `/index.html`、`/wisdom.html`、`/ai.html`、`/swiftcode.html`、`/lens.html`、`/sca.html`、`/swiftpenstest.html`、`/solution-auto.html`、`/solution-special.html`、`/service-penstest.html`、`/about.html`。
- 页面内容、SEO、链接、素材和模块顺序必须整理为 typed content records；组件不得硬编码页面专属文案。
- 页面模板边界固定为 `HomeTemplate`、`ProductTemplate`、`SolutionTemplate`、`ServiceTemplate`、`AboutTemplate`。
- 全局导航和页脚必须从同一份 navigation/footer data 读取，桌面端和移动端不得维护两份不同链接。
- 交互状态必须由 `MobileMenu`、`TabsOrAccordion`、`FAQList` 等组件本地管理，页面模板只传 data。
- 设计 token 必须从 DESIGN.md 派生为 `src/styles/tokens.css`，页面级样式不得覆写主色、字体栈、按钮形态、卡片圆角。
- 素材必须进入 asset registry，记录 `id`、`sourcePath`、`role`、`alt`、`sourcePage`、`replacementStatus`。
- 每个页面 Story 的 Definition of Done 必须包含 route 200、模块清单对照、CTA/link audit、SEO audit、desktop screenshot、mobile screenshot、横向滚动检查和交互状态检查。
- HTTPS 证书修复作为上线前运维风险跟踪，不由页面组件承担。

### UX Design Requirements

UX-DR1: 实现 DESIGN.md 的颜色 token，包括 surface、ink、primary、accent、amber、success、warning、danger，不新增额外主色。

UX-DR2: 实现系统无衬线字体栈和标题/正文/标签类型层级，中文 `letter-spacing` 保持 0。

UX-DR3: 实现 12 栅格、1200-1280px 最大内容宽度、桌面/平板/移动 gutter 和 section spacing。

UX-DR4: 实现克制圆角规则：按钮和 tab 6px，卡片/模块不超过 8px。

UX-DR5: 实现 Primary Button、Secondary Button、文本链接层级，保持源站 CTA 文案和目标。

UX-DR6: 实现 Global Navigation，桌面端显示主导航和联系入口，移动端折叠菜单覆盖全部源站导航链接。

UX-DR7: 实现 Footer Link Group，保留备案、外链、站内链接，移动端折行不隐藏。

UX-DR8: 实现 Product Summary 与 Product Capability Block，标题、说明、图标/截图至少保留标题和说明，不允许仅显示装饰图标。

UX-DR9: 实现 Solution Scenario Module / TabsOrAccordion，桌面可 tab，移动端改纵向分组或 accordion，禁止 hover-only。

UX-DR10: 实现 Metric Block，数字必须和解释文字同屏绑定，不用滚动数字噪声污染标题层级。

UX-DR11: 实现 FAQ Item，点击整行展开，键盘可操作，展开状态可识别。

UX-DR12: 首页模板必须保持源站业务顺序：首屏、合作生态、核心安全能力、核心产品、行业解决方案、关于公司、成功案例、底部 CTA。

UX-DR13: 产品页模板必须保持产品首屏、为什么需要/选择、产品功能、产品优势、DevSecOps/集成能力、底部 CTA。

UX-DR14: 解决方案页模板必须保持方案首屏、方案概述、方案组成、价值优势、业务场景、底部 CTA。

UX-DR15: 技术服务页模板必须保持服务首屏、服务说明、服务优势、检测内容、底部 CTA。

UX-DR16: 公司介绍页模板必须保持首屏、关于公司、研发实力/数据、企业文化、荣誉资质、公司分布地区、FAQ、底部 CTA。

UX-DR17: 状态模式必须覆盖默认加载、导航打开、CTA hover/focus、tab active、图片缺失、长标题、移动菜单、外部链接。

UX-DR18: 交互必须以 click/tap 为主，hover 只能增强；tab、accordion、FAQ、导航菜单必须支持键盘访问。

UX-DR19: 动效只用于状态转换、滚动进入、hover 反馈，时长 120-240ms；Reduce Motion 开启时关闭或降级。

UX-DR20: 响应式必须覆盖 `>=1200px`、`1024-1199px`、`768-1023px`、`<768px`；移动端不允许横向滚动，长标题必须换行。

UX-DR21: 页面拒绝 PPT 式卡片网格、纯黑白机械交替、无意义大面积渐变、带文字的生成图片和与业务无关的抽象素材。

### FR Coverage Map

FR1: Epic 1, 2, 3, 4, 5, 6 - 11 个页面逐步实现，并在 Epic 6 做全站覆盖验收。

FR2: Epic 1, 2, 3, 4, 5, 6 - 每个页面 Story 保留源站文案含义，并由 Epic 6 做内容对照。

FR3: Epic 1, 2, 3, 4, 5, 6 - 每个页面模板保留源站模块，Epic 6 做模块清单检查。

FR4: Epic 1, 6 - 全局导航在首页交付，最终全站检查。

FR5: Epic 1, 2, 3, 4, 5, 6 - 每个页面 CTA 保留，最终做 CTA/link audit。

FR6: Epic 1, 6 - 全局页脚在首页交付，最终全站检查。

FR7: Epic 1 - 首页完整 UI 重构。

FR8: Epic 2 - 六个产品详情页完整 UI 重构。

FR9: Epic 3 - 两个解决方案页完整 UI 重构。

FR10: Epic 4 - 渗透测试服务页完整 UI 重构。

FR11: Epic 5 - 公司介绍页完整 UI 重构。

FR12: Epic 1, 2, 3, 4, 5 - 组件规则随页面族逐步落地，最终全站一致。

FR13: Epic 1, 2, 3, 4, 5, 6 - 桌面端逐页验收，Epic 6 做全站复核。

FR14: Epic 1, 2, 3, 4, 5, 6 - 移动端逐页验收，Epic 6 做全站复核。

FR15: Epic 1, 2, 3, 4, 5, 6 - 导航、按钮、tab、FAQ 等交互逐步落地并最终复核。

FR16: Epic 1, 2, 3, 4, 5, 6 - 页面级 SEO 逐步录入，Epic 6 做全站 SEO audit。

FR17: Epic 1, 2, 3, 4, 5, 6 - 页面素材逐步登记，Epic 6 汇总资产 registry 和替换状态。

FR18: Epic 1, 2, 3, 4, 5, 6 - `.html` 路由逐页实现，Epic 6 做路由检查。

FR19: Epic 6 - 上线前风险清单记录 HTTPS 证书修复项。

## Epic List

### Epic 1: 首页与全站入口体验

访客可以打开 `/index.html`，快速理解公司定位、核心能力、产品矩阵、行业解决方案、可信证明，并通过保真的导航、页脚和 CTA 进入后续页面。

**FRs covered:** FR1, FR2, FR3, FR4, FR5, FR6, FR7, FR12, FR13, FR14, FR15, FR16, FR17, FR18

### Epic 2: 产品评估体验

安全技术负责人可以通过统一但差异清楚的产品详情页评估 Wisdom、Swift AI、Swift Code、Wisdom Lens、Swift SCA、Swift Pentest，并进入咨询/试用路径。

**FRs covered:** FR1, FR2, FR3, FR5, FR8, FR12, FR13, FR14, FR15, FR16, FR17, FR18

### Epic 3: 解决方案咨询体验

行业客户可以在网联汽车和特种装备解决方案页理解场景、法规/标准、方案组成、价值优势和业务场景，并进入咨询方案路径。

**FRs covered:** FR1, FR2, FR3, FR5, FR9, FR12, FR13, FR14, FR15, FR16, FR17, FR18

### Epic 4: 技术服务转化体验

潜在线索用户可以在渗透测试服务页理解服务定位、服务优势、检测内容和联系路径。

**FRs covered:** FR1, FR2, FR3, FR5, FR10, FR12, FR13, FR14, FR15, FR16, FR17, FR18

### Epic 5: 公司可信度体验

访客可以在公司介绍页建立对公司能力、研发实力、文化、荣誉、分布地区和常见问题的信任，并找到联系路径。

**FRs covered:** FR1, FR2, FR3, FR5, FR11, FR12, FR13, FR14, FR15, FR16, FR17, FR18

### Epic 6: 全站源站保真与发布前验收

团队可以确认 11 个页面在内容、模块、链接、CTA、SEO、素材、桌面端和移动端上与源站要求一致，并识别上线前的运维风险。

**FRs covered:** FR1, FR2, FR3, FR4, FR5, FR6, FR13, FR14, FR15, FR16, FR17, FR18, FR19

## Epic 1: 首页与全站入口体验

访客可以打开 `/index.html`，快速理解公司定位、核心能力、产品矩阵、行业解决方案、可信证明，并通过保真的导航、页脚和 CTA 进入后续页面。

### Story 1.1: 建立首页静态站点骨架

As a 首次访问官网的企业访客,
I want 打开 `/index.html` 时看到稳定的页面外壳和基础首屏内容,
So that 我能确认这是中科数测官网的新版本入口。

**目标：** 创建静态站点骨架、首页路由、基础布局、基础 SEO 和 token 接入，为首页体验提供最小可运行版本。

**范围：** 初始化 Astro 静态站点结构；配置 `.html` 输出策略；创建 `SiteShell`、`src/pages/index.astro`、首页 page record、`tokens.css`、`base.css`；录入首页 title/description/keywords；建立构建和本地预览脚本。

**依赖：** 无。

**不可改动项：** 不新增 CMS、后台、数据库或运行时 API；首页路由必须保持 `/index.html`；不得改变首页公司定位含义和主 CTA 业务路径。

**Acceptance Criteria:**

**Given** 新项目代码位于官网重构目录中  
**When** 开发者执行构建命令  
**Then** 构建产物包含可访问的 `/index.html`  
**And** 页面 head 使用首页源站 SEO title、description、keywords 或把缺失项列为待确认  
**And** 页面引入 DESIGN.md 的基础颜色、字体、间距 token  
**And** 项目未引入 CMS、后台、数据库或运行时接口。

### Story 1.2: 实现全站导航与页脚入口

As a 官网访客,
I want 在桌面端和移动端都能通过导航和页脚进入源站保留的栏目,
So that 我不会因为视觉重构丢失产品、解决方案、服务、公司介绍或联系入口。

**目标：** 实现 `GlobalHeader`、`MobileMenu`、`GlobalFooter` 和 navigation/footer data。

**范围：** 录入源站导航、二级产品/解决方案/服务入口、联系入口、页脚备案和外部链接；实现桌面导航、移动折叠菜单、当前页状态、焦点状态、Esc/再次点击关闭。

**依赖：** Story 1.1。

**不可改动项：** 导航文字、层级和目标链接不得擅自改写；`contact.html`、`datacheck.html`、`softwareassess.html`、`service-secas.html`、`integration.html` 等未纳入页面的链接必须保留。

**Acceptance Criteria:**

**Given** 首页已能运行  
**When** 访客打开桌面端导航  
**Then** 产品、解决方案、服务、公司介绍、联系我们入口与源站一致  
**And** 二级入口可点击且目标链接保持 `.html` 路径  
**And** 移动端菜单覆盖同一份链接数据  
**And** 页脚保留备案、外部链接和站内导航  
**And** 焦点状态可见，菜单不依赖 hover 作为唯一入口。

### Story 1.3: 实现首页首屏与合作可信证明

As a 企业客户决策者,
I want 在首页首屏快速理解公司定位和可信证明,
So that 我能判断是否继续了解产品和方案。

**目标：** 重构首页首屏、主 CTA、合作生态/可信证明模块。

**范围：** 实现首页 hero 区段、公司定位文案、主 CTA、合作生态/客户/院校/行业 logo 或成果数据模块；使用真实或源站素材；建立相关 asset registry 条目。

**依赖：** Story 1.1、Story 1.2。

**不可改动项：** 首屏必须保留“致力于成为全球领先的低空与商业航天网络安全方案提供商”相关定位含义；合作生态/可信证明不得删除；不得使用带文字或 logo 错误的生成图替代源站素材。

**Acceptance Criteria:**

**Given** 访客打开 `/index.html`  
**When** 首屏加载完成  
**Then** 公司定位、主 CTA 和首屏核心价值在首屏可见  
**And** CTA 文案和目标路径保持源站业务含义  
**And** 合作生态/可信证明模块存在并使用登记过的素材  
**And** 桌面端和移动端首屏文字不遮挡、按钮不溢出、图片不压住文字。

### Story 1.4: 实现首页核心安全能力与产品入口

As a 安全技术负责人,
I want 在首页快速扫描核心安全能力和六个产品入口,
So that 我能进入符合需求的产品详情页。

**目标：** 实现首页核心安全能力、六个产品入口和复用的能力/产品摘要组件。

**范围：** 实现 `CapabilityBlock`、`ProductSummary` 或同等组件；录入协议安全、智能安全、供应链安全、代码安全、应用安全、数据安全能力；录入 Wisdom、Swift AI、Swift Code、Wisdom Lens、Swift SCA、Swift Pentest 入口。

**依赖：** Story 1.3。

**不可改动项：** 六个产品名称、入口路径和能力重点不得改写；不得把产品入口做成同质空泛卡片；不新增产品。

**Acceptance Criteria:**

**Given** 首页核心能力模块进入视口  
**When** 访客扫描模块内容  
**Then** 六类核心安全能力标题和说明清楚可读  
**And** 六个产品入口均存在并指向对应 `.html` 产品页  
**And** 同组产品入口高度稳定，不因文案长短造成明显跳动  
**And** 移动端纵向阅读无横向滚动。

### Story 1.5: 实现首页解决方案、关于公司、成功案例与底部 CTA

As a 行业客户或潜在线索用户,
I want 在首页继续看到行业解决方案、公司介绍、成功案例和最终联系入口,
So that 我能从首页自然进入方案或咨询路径。

**目标：** 完成首页后续模块和底部转化区。

**范围：** 实现行业解决方案入口、关于公司摘要、成功案例模块、底部 CTA；保留网联汽车、特种装备入口；复用 Button、SectionBand、MetricBlock、BottomCTA。

**依赖：** Story 1.4。

**不可改动项：** 行业解决方案入口不得删除；关于公司和成功案例模块不得删除；底部 CTA 路径不得改为无效锚点。

**Acceptance Criteria:**

**Given** 访客浏览首页后半部分  
**When** 访客查看解决方案、关于公司、成功案例和底部 CTA  
**Then** 源站对应模块均存在  
**And** 网联汽车和特种装备入口明确可点击  
**And** 关于公司和成功案例文案含义与源站一致  
**And** 底部 CTA 保持源站路径并在桌面端和移动端可见可点击。

### Story 1.6: 完成首页响应式、交互和页面级验收

As a 官网负责人,
I want 首页在桌面端和移动端都通过可验收检查,
So that 首页可以作为后续页面的实现基准。

**目标：** 对首页进行桌面端、移动端、链接、SEO、素材、交互状态和源站模块对照验收。

**范围：** 检查首页 route 200、导航展开、CTA hover/focus、移动菜单、长标题、图片缺失 fallback、desktop screenshot、mobile screenshot、横向滚动、SEO、资产 registry、模块清单。

**依赖：** Story 1.5。

**不可改动项：** 验收不得通过删除模块、缩短文案或隐藏 CTA 来解决视觉问题。

**Acceptance Criteria:**

**Given** 首页所有模块已实现  
**When** 执行首页验收清单  
**Then** `/index.html` 返回可访问页面  
**And** 首页模块与 page-inventory.md 对照完整  
**And** 所有首页 CTA 和导航/页脚链接可点击且目标正确  
**And** 桌面端无明显重叠、溢出、遮挡  
**And** 移动端无横向滚动，长标题正常换行  
**And** 首页截图被保存用于后续对照。

## Epic 2: 产品评估体验

安全技术负责人可以通过统一但差异清楚的产品详情页评估 Wisdom、Swift AI、Swift Code、Wisdom Lens、Swift SCA、Swift Pentest，并进入咨询/试用路径。

### Story 2.1: 建立产品详情页模板与内容数据契约

As a 安全技术负责人,
I want 六个产品页使用统一但可区分的页面结构,
So that 我能稳定比较产品，同时看清每个产品的不同能力重点。

**目标：** 实现 `ProductTemplate`、产品内容记录结构和产品页通用组件组合。

**范围：** 建立产品页 metadata、hero、场景/价值、功能、优势、DevSecOps/集成、底部 CTA 的数据结构；实现 ProductTemplate；创建产品页公共响应式规则；创建产品页素材 registry 字段。

**依赖：** Epic 1 完成。

**不可改动项：** 不得为了统一模板抹平六个产品差异；产品页不得新增未经确认的卖点、客户案例、数据或产品能力。

**Acceptance Criteria:**

**Given** 产品页模板被产品页面调用  
**When** 开发者传入不同产品 records  
**Then** 页面结构保持一致但内容重点由产品 record 决定  
**And** 模板包含首屏、价值/场景、功能、优势、集成/CTA、底部 CTA 区域  
**And** CTA、SEO、素材、模块顺序均来自内容记录  
**And** 组件不得硬编码某一个产品的文案。

### Story 2.2: 重构 Wisdom 模糊测试产品详情页

As a 协议安全负责人,
I want 查看 Wisdom 模糊测试产品详情页,
So that 我能评估其模糊测试、协议安全、漏洞发现和专有协议测试能力。

**目标：** 基于 ProductTemplate 实现 `/wisdom.html`。

**范围：** 录入 Wisdom 源站 SEO、产品定位、功能、优势、集成/CTA、素材；实现页面 route、页面 record 和必要模块。

**依赖：** Story 2.1。

**不可改动项：** 保留模糊测试、协议安全、漏洞发现、专有协议测试表达；CTA 路径保持源站目标；不新增未确认能力。

**Acceptance Criteria:**

**Given** 访客打开 `/wisdom.html`  
**When** 页面渲染完成  
**Then** Wisdom 产品名、定位和核心能力表达与源站含义一致  
**And** 产品功能、产品优势、集成/CTA 模块存在  
**And** SEO title、description、keywords 按源站记录或列为待确认  
**And** 桌面和移动端无文字重叠、按钮溢出、图片遮挡。

### Story 2.3: 重构 Swift AI 综合模型安全检测平台详情页

As a AI 安全负责人,
I want 查看 Swift AI 产品详情页,
So that 我能评估模型安全、多模态检测、LLM 安全评测与防护、合规评估能力。

**目标：** 基于 ProductTemplate 实现 `/ai.html`。

**范围：** 录入 Swift AI 源站 SEO、产品定位、模型安全功能、优势、集成/CTA、素材；实现页面 route 和模块。

**依赖：** Story 2.2。

**不可改动项：** 保留模型安全、多模态检测、LLM 安全评测与防护、合规评估表达；不添加未经确认的 AI 能力或行业承诺。

**Acceptance Criteria:**

**Given** 访客打开 `/ai.html`  
**When** 页面渲染完成  
**Then** Swift AI 的产品定位和能力重点与源站一致  
**And** 页面使用 ProductTemplate 而不是独立复制样式  
**And** CTA 目标保持源站路径  
**And** 移动端产品标题和英文缩写不会撑破容器。

### Story 2.4: 重构 Swift Code 源代码审计产品详情页

As a 研发安全负责人,
I want 查看 Swift Code 产品详情页,
So that 我能评估源代码审计、双引擎检测、多语言支持和产品优势。

**目标：** 基于 ProductTemplate 实现 `/swiftcode.html`。

**范围：** 录入 Swift Code 源站 SEO、产品定位、审计功能、优势、集成/CTA、素材；实现页面 route 和模块。

**依赖：** Story 2.3。

**不可改动项：** 保留源代码审计、双引擎检测、多语言支持、产品优势表达；不新增产品命名或能力描述。

**Acceptance Criteria:**

**Given** 访客打开 `/swiftcode.html`  
**When** 页面渲染完成  
**Then** Swift Code 的功能和优势表达与源站一致  
**And** 页面模块顺序符合产品页模板  
**And** 图片和图标有 asset registry 记录与 alt  
**And** 桌面端产品能力区不变成无节制卡片墙。

### Story 2.5: 重构 Wisdom Lens 灰盒模糊测试产品详情页

As a 测试负责人,
I want 查看 Wisdom Lens 产品详情页,
So that 我能评估灰盒模糊测试、覆盖率反馈、测试驱动生成和缺陷挖掘能力。

**目标：** 基于 ProductTemplate 实现 `/lens.html`。

**范围：** 录入 Wisdom Lens 源站 SEO、产品定位、功能、优势、集成/CTA、素材；实现页面 route 和模块。

**依赖：** Story 2.4。

**不可改动项：** 保留灰盒模糊测试、覆盖率反馈、测试驱动生成、缺陷挖掘表达；不把 Wisdom Lens 与 Wisdom 模糊测试混同。

**Acceptance Criteria:**

**Given** 访客打开 `/lens.html`  
**When** 页面渲染完成  
**Then** Wisdom Lens 的产品差异和能力重点清楚可见  
**And** 产品功能和优势模块与源站含义一致  
**And** CTA 保持源站目标  
**And** 移动端功能模块纵向展开且无横向滚动。

### Story 2.6: 重构 Swift SCA 软件成分分析产品详情页

As a 供应链安全负责人,
I want 查看 Swift SCA 产品详情页,
So that 我能评估 SBOM、漏洞管理、合规和供应链安全能力。

**目标：** 基于 ProductTemplate 实现 `/sca.html`。

**范围：** 录入 Swift SCA 源站 SEO、产品定位、SBOM/漏洞/合规/供应链安全模块、优势、集成/CTA、素材；实现页面 route 和模块。

**依赖：** Story 2.5。

**不可改动项：** 保留 SBOM、漏洞管理、合规、供应链安全表达；不改变 DevSecOps/集成含义。

**Acceptance Criteria:**

**Given** 访客打开 `/sca.html`  
**When** 页面渲染完成  
**Then** Swift SCA 的 SBOM、漏洞管理、合规、供应链安全内容完整呈现  
**And** 产品页 CTA 目标保持源站路径  
**And** 相关图示/截图登记到 asset registry  
**And** 桌面和移动端模块层级清楚，不出现文字遮挡。

### Story 2.7: 重构 Swift Pentest 自动化渗透测试产品详情页

As a 安全运营负责人,
I want 查看 Swift Pentest 产品详情页,
So that 我能评估攻击面识别、漏洞扫描与验证、智能化渗透测试和风险报告能力。

**目标：** 基于 ProductTemplate 实现 `/swiftpenstest.html`。

**范围：** 录入 Swift Pentest 源站 SEO、产品定位、攻击面/漏洞/渗透/报告模块、优势、集成/CTA、素材；实现页面 route 和模块。

**依赖：** Story 2.6。

**不可改动项：** 保留攻击面识别、漏洞扫描与验证、智能化渗透测试、风险报告表达；不新增未确认渗透能力。

**Acceptance Criteria:**

**Given** 访客打开 `/swiftpenstest.html`  
**When** 页面渲染完成  
**Then** Swift Pentest 的能力重点与源站一致  
**And** 页面使用产品页公共模板和 token  
**And** CTA、SEO、素材记录完整  
**And** 移动端按钮可点击区域不小于 44px。

### Story 2.8: 完成产品页统一验收

As a 官网负责人,
I want 六个产品页统一通过内容、视觉、响应式和链接验收,
So that 产品评估体验可以整体交付。

**目标：** 对六个产品页做统一验收和缺陷修正。

**范围：** 检查六个产品页 route 200、ProductTemplate 使用、产品差异、CTA/link、SEO、asset registry、desktop/mobile screenshots、横向滚动、长标题、tab/能力块状态。

**依赖：** Story 2.7。

**不可改动项：** 不得通过删除产品差异、隐藏模块、简化 CTA 来通过验收。

**Acceptance Criteria:**

**Given** 六个产品页均已实现  
**When** 执行产品页验收  
**Then** `/wisdom.html`、`/ai.html`、`/swiftcode.html`、`/lens.html`、`/sca.html`、`/swiftpenstest.html` 均可访问  
**And** 六个页面均使用 ProductTemplate 且能力重点不同  
**And** CTA、SEO、素材和模块清单全部完成对照  
**And** 桌面端和移动端无阻塞级视觉问题。

## Epic 3: 解决方案咨询体验

行业客户可以在网联汽车和特种装备解决方案页理解场景、法规/标准、方案组成、价值优势和业务场景，并进入咨询方案路径。

### Story 3.1: 建立解决方案页模板与场景交互

As a 行业客户,
I want 解决方案页先说明行业场景，再说明工具链和价值,
So that 我能判断方案是否适配自身建设需求。

**目标：** 实现 `SolutionTemplate` 和 `TabsOrAccordion` 场景组件。

**范围：** 建立方案页 metadata、hero、概述、组成、价值优势、业务场景、底部 CTA 数据结构；实现桌面 tab 与移动 accordion/纵向分组；建立法规/标准/工具链信息展示规则。

**依赖：** Epic 1 完成。

**不可改动项：** 方案页不得变成产品页；业务场景交互不得依赖 hover-only；咨询 CTA 路径不得改写。

**Acceptance Criteria:**

**Given** 方案页数据传入 SolutionTemplate  
**When** 页面渲染  
**Then** 页面包含方案首屏、概述、组成、价值优势、业务场景、底部 CTA  
**And** 桌面端业务场景可用 tab 或等效分组  
**And** 移动端业务场景改为纵向分组或 accordion  
**And** 键盘可以操作 tab/accordion 状态。

### Story 3.2: 重构网联汽车解决方案页

As a 网联汽车行业客户,
I want 查看网联汽车解决方案页,
So that 我能理解法规标准、实验室工具链、TARA 和固件/协议/整车/云端验证能力。

**目标：** 基于 SolutionTemplate 实现 `/solution-auto.html`。

**范围：** 录入网联汽车源站 SEO、方案首屏、GB 44495-2024、UNECE R155、实验室工具链、TARA、验证场景、咨询 CTA 和素材。

**依赖：** Story 3.1。

**不可改动项：** 必须保留 GB 44495-2024、UNECE R155、TARA、固件/协议/整车/云端验证；不得新增未确认法规或标准解释。

**Acceptance Criteria:**

**Given** 访客打开 `/solution-auto.html`  
**When** 页面渲染完成  
**Then** 网联汽车方案概述、方案组成、价值优势、业务场景和咨询 CTA 完整呈现  
**And** GB 44495-2024、UNECE R155、TARA 等专业术语保留  
**And** 业务场景交互在桌面和移动端均可操作  
**And** CTA 指向源站咨询路径。

### Story 3.3: 重构特种装备解决方案页

As a 特种装备行业客户,
I want 查看特种装备解决方案页,
So that 我能理解脆弱性、渗透性、生存性、自主可控实验能力、工具链和整改闭环。

**目标：** 基于 SolutionTemplate 实现 `/solution-special.html`。

**范围：** 录入特种装备源站 SEO、方案首屏、方案组成、价值优势、业务场景、咨询 CTA 和素材。

**依赖：** Story 3.2。

**不可改动项：** 必须保留脆弱性、渗透性、生存性、自主可控实验能力、工具链和整改闭环；不得将“特种装备”改写成泛行业解决方案。

**Acceptance Criteria:**

**Given** 访客打开 `/solution-special.html`  
**When** 页面渲染完成  
**Then** 特种装备方案概述、组成、价值优势、业务场景和咨询 CTA 完整呈现  
**And** 源站专业术语和业务含义未被泛化  
**And** 相关素材登记到 asset registry  
**And** 移动端无横向滚动和场景内容遮挡。

### Story 3.4: 完成解决方案页统一验收

As a 官网负责人,
I want 两个解决方案页统一通过视觉、交互和咨询路径验收,
So that 行业方案咨询体验可以整体交付。

**目标：** 对解决方案页做统一验收和缺陷修正。

**范围：** 检查两个方案页 route 200、SolutionTemplate 使用、专业术语、业务场景交互、CTA/link、SEO、素材、desktop/mobile screenshots、横向滚动。

**依赖：** Story 3.3。

**不可改动项：** 不得删除法规/标准/工具链/业务场景内容；不得把移动端 tab 做成 hover-only。

**Acceptance Criteria:**

**Given** 两个解决方案页均已实现  
**When** 执行方案页验收  
**Then** `/solution-auto.html` 和 `/solution-special.html` 均可访问  
**And** 方案概述、组成、价值优势、业务场景、咨询 CTA 均存在  
**And** 桌面端和移动端业务场景交互可用  
**And** CTA、SEO、素材、截图验收均完成。

## Epic 4: 技术服务转化体验

潜在线索用户可以在渗透测试服务页理解服务定位、服务优势、检测内容和联系路径。

### Story 4.1: 建立技术服务页模板和内容记录

As a 潜在线索用户,
I want 服务页按照“服务是什么、怎么做、为什么可信、怎么联系”组织,
So that 我能快速判断是否联系服务团队。

**目标：** 实现 `ServiceTemplate` 和渗透测试服务页数据结构。

**范围：** 建立服务页 metadata、hero、服务说明、服务优势、检测内容、底部 CTA 数据结构；实现服务页布局和基础响应式规则。

**依赖：** Epic 1 完成。

**不可改动项：** 不新增其他技术服务；不把服务页改成产品页或文章页；联系 CTA 路径保持源站目标。

**Acceptance Criteria:**

**Given** 服务页数据传入 ServiceTemplate  
**When** 页面渲染  
**Then** 页面包含服务首屏、服务说明、服务优势、检测内容、底部 CTA  
**And** 结构符合 EXPERIENCE.md 的技术服务页模板  
**And** CTA 和 SEO 来自内容 record  
**And** 服务页样式使用 DESIGN.md token。

### Story 4.2: 重构渗透测试服务页

As a 安全负责人,
I want 查看渗透测试服务页,
So that 我能理解服务定位、测试说明、服务优势、检测内容并联系团队。

**目标：** 基于 ServiceTemplate 实现 `/service-penstest.html`。

**范围：** 录入源站 SEO、服务定位、面向整车及零部件的测试价值、专业团队/全流程/高效全面优势、检测内容、联系 CTA、素材。

**依赖：** Story 4.1。

**不可改动项：** 保留服务定位、测试说明、服务优势、检测内容和联系 CTA；不得新增服务承诺或检测范围。

**Acceptance Criteria:**

**Given** 访客打开 `/service-penstest.html`  
**When** 页面渲染完成  
**Then** 服务定位、服务说明、服务优势、检测内容和底部 CTA 完整呈现  
**And** 联系 CTA 目标保持源站路径  
**And** 页面使用 ServiceTemplate 和共享组件  
**And** 桌面端内容层级清楚，不出现同质卡片堆叠。

### Story 4.3: 完成服务页响应式和转化验收

As a 官网负责人,
I want 服务页在桌面端和移动端都能清楚引导联系,
So that 服务线索路径不会因重构受损。

**目标：** 对服务页做响应式、链接、SEO 和转化路径验收。

**范围：** 检查 `/service-penstest.html` route 200、CTA/link、SEO、素材、desktop/mobile screenshots、横向滚动、按钮触控区域、长标题和图片状态。

**依赖：** Story 4.2。

**不可改动项：** 不得隐藏联系 CTA；不得删减检测内容以适配移动端。

**Acceptance Criteria:**

**Given** 服务页已实现  
**When** 执行服务页验收  
**Then** `/service-penstest.html` 可访问  
**And** 关键 CTA 在桌面端和移动端均可见可点击  
**And** SEO、素材和模块清单对照完成  
**And** 移动端无横向滚动，按钮触控区域不小于 44px。

## Epic 5: 公司可信度体验

访客可以在公司介绍页建立对公司能力、研发实力、文化、荣誉、分布地区和常见问题的信任，并找到联系路径。

### Story 5.1: 建立公司介绍页模板和 FAQ 交互

As a 访客,
I want 公司介绍页以可信度信息为主，并能展开 FAQ,
So that 我能确认公司背景并找到进一步联系路径。

**目标：** 实现 `AboutTemplate`、`FAQList` 和公司介绍页数据结构。

**范围：** 建立公司介绍 metadata、hero、关于公司、研发实力/数据、企业文化、荣誉资质、公司分布地区、FAQ、底部 CTA 数据结构；实现 FAQ 点击整行展开、键盘操作和展开状态。

**依赖：** Epic 1 完成。

**不可改动项：** 公司介绍页不得变成招聘页或品牌故事页；FAQ 文案含义和 CTA 路径不得擅自改写。

**Acceptance Criteria:**

**Given** 公司介绍数据传入 AboutTemplate  
**When** 页面渲染  
**Then** 页面包含首屏、关于公司、研发实力/数据、企业文化、荣誉资质、公司分布地区、FAQ、底部 CTA  
**And** FAQ 支持点击整行展开和键盘操作  
**And** 展开状态可识别  
**And** 页面使用共享 token 和组件。

### Story 5.2: 重构公司介绍主体可信度模块

As a 企业客户决策者,
I want 查看公司介绍、研发实力、企业文化、荣誉资质和分布地区,
So that 我能建立对公司组织和能力的基本信任。

**目标：** 实现公司介绍页主体模块。

**范围：** 录入源站公司定位、关于公司、研发实力/数据、企业文化、荣誉资质、公司分布地区、素材和指标内容；实现对应模块视觉。

**依赖：** Story 5.1。

**不可改动项：** 不重新定位公司品牌；不新增资质、数据或城市信息；源站公司介绍文本含义必须保留。

**Acceptance Criteria:**

**Given** 访客打开 `/about.html`  
**When** 页面主体模块加载完成  
**Then** 关于公司、研发实力/数据、企业文化、荣誉资质、公司分布地区均存在  
**And** 数字指标和说明文字绑定显示  
**And** 荣誉资质素材登记到 asset registry  
**And** 文案不包含内部备注或实现说明。

### Story 5.3: 完成 FAQ 和底部联系路径

As a 访客,
I want 在公司介绍页通过 FAQ 和底部 CTA 找到答案或联系入口,
So that 我能继续咨询解决方案、报价或试用。

**目标：** 实现公司介绍页 FAQ、底部 CTA 和联系路径。

**范围：** 录入 FAQ 问题/答案、底部 CTA、联系路径；实现 FAQ hover/focus/expanded 状态和移动端纵向布局。

**依赖：** Story 5.2。

**不可改动项：** FAQ 不得新增未经确认问题；底部 CTA 目标不得改写；FAQ 不得依赖 hover-only。

**Acceptance Criteria:**

**Given** 访客浏览到公司介绍页 FAQ  
**When** 访客点击或键盘操作 FAQ 项  
**Then** 对应答案展开且状态可识别  
**And** 焦点顺序与视觉顺序一致  
**And** 底部 CTA 可见并指向源站联系路径  
**And** 移动端 FAQ 不遮挡后续内容。

### Story 5.4: 完成公司介绍页验收

As a 官网负责人,
I want 公司介绍页通过可信度、FAQ、响应式和 SEO 验收,
So that 公司可信度体验可以交付。

**目标：** 对公司介绍页做完整验收和缺陷修正。

**范围：** 检查 `/about.html` route 200、AboutTemplate 使用、模块清单、FAQ、CTA/link、SEO、素材、desktop/mobile screenshots、横向滚动、长标题和指标模块。

**依赖：** Story 5.3。

**不可改动项：** 不得删除公司介绍、文化、荣誉、分布地区或 FAQ 来通过视觉验收。

**Acceptance Criteria:**

**Given** 公司介绍页已实现  
**When** 执行公司介绍页验收  
**Then** `/about.html` 可访问  
**And** 公司介绍、文化、荣誉、分布地区、FAQ 和联系入口均保留  
**And** FAQ 交互在桌面端和移动端可用  
**And** SEO、素材、截图和响应式检查均通过。

## Epic 6: 全站源站保真与发布前验收

团队可以确认 11 个页面在内容、模块、链接、CTA、SEO、素材、桌面端和移动端上与源站要求一致，并识别上线前的运维风险。

### Story 6.1: 汇总源站内容与素材 registry

As a 官网维护团队,
I want 看到全站内容、SEO、CTA、素材和替换状态的统一清单,
So that 后续维护不会丢失源站保真边界。

**目标：** 汇总并校准 11 页 content records、asset registry、CTA 清单和待确认项。

**范围：** 检查 `content/pages.ts`、`navigation.ts`、`assets.ts`、各页面 modules；补齐 `sourcePage`、`alt`、`replacementStatus`、`canonicalLegacyUrl`；输出待确认清单。

**依赖：** Epic 1-5 完成。

**不可改动项：** 不得把未登记素材直接放进页面；替换素材必须标记 `needs-approval` 直到确认。

**Acceptance Criteria:**

**Given** 11 个页面均已实现  
**When** 维护团队查看内容和素材 registry  
**Then** 每个页面都有 route、SEO、模块、CTA、素材记录  
**And** 每个素材都有 sourcePath、role、alt、sourcePage、replacementStatus  
**And** 源站缺失 SEO 或需要人工确认的内容进入待确认清单  
**And** 无页面直接引用未登记素材。

### Story 6.2: 执行全站路由、导航、页脚和 CTA 链接检查

As a 官网负责人,
I want 确认所有旧 URL、导航、页脚和 CTA 都可达,
So that 重构不会破坏 SEO、外部入口或转化路径。

**目标：** 执行全站 route/link/CTA audit。

**范围：** 检查 11 个 `.html` 路由、所有站内导航、页脚、产品入口、方案入口、CTA、未纳入重构页面链接、外部链接标记。

**依赖：** Story 6.1。

**不可改动项：** 不得删除指向未纳入重构页面的旧链接；不得把旧 `.html` 改成新路由。

**Acceptance Criteria:**

**Given** 全站构建产物已生成  
**When** 执行链接检查  
**Then** 11 个目标 `.html` 页面均返回可访问页面  
**And** 导航、页脚、CTA、产品入口和方案入口目标正确  
**And** `contact.html`、`datacheck.html`、`softwareassess.html`、`service-secas.html`、`integration.html` 等旧链接被保留  
**And** 检查结果输出失败项和修复状态。

### Story 6.3: 执行全站 SEO 和模块保真检查

As a 内容负责人,
I want 确认每页 SEO、模块和文案含义都保留,
So that 视觉重构不会变成内容重写。

**目标：** 执行 SEO audit、模块清单对照和源站文案含义检查。

**范围：** 对照 PRD、page-inventory.md、content records 检查每页 title、description、keywords、模块存在性、CTA 文案、产品/方案/服务重点。

**依赖：** Story 6.2。

**不可改动项：** 不得为了统一模板删减模块；不得为 SEO 擅自新增业务承诺。

**Acceptance Criteria:**

**Given** 11 个页面的内容记录已汇总  
**When** 执行 SEO 和模块保真检查  
**Then** 每页 title、description、keywords 已保留或列为待确认  
**And** 每页主要模块与 PRD 和 page-inventory.md 对照完整  
**And** 六个产品页的能力重点没有被统一成空泛卖点  
**And** 两个方案页的法规/标准/工具链/业务场景信息保留。

### Story 6.4: 执行桌面端和移动端视觉验收

As a 视觉负责人,
I want 逐页检查桌面端和移动端截图,
So that 文字重叠、溢出、遮挡和横向滚动在上线前被发现。

**目标：** 执行全站 desktop/mobile screenshot QA 和响应式问题修复。

**范围：** 为 11 个页面生成桌面端和移动端截图；检查 1200+、1024-1199、768-1023、<768 行为；检查长标题、按钮、图片、tab/FAQ/menu、横向滚动、Reduce Motion。

**依赖：** Story 6.3。

**不可改动项：** 不得通过隐藏源站内容、删除 CTA、缩小到不可读字体来解决响应式问题。

**Acceptance Criteria:**

**Given** 11 个页面均可本地预览  
**When** 执行桌面端和移动端视觉验收  
**Then** 每个页面都有桌面端和移动端截图  
**And** 无明显文字重叠、按钮溢出、图片遮挡、横向滚动  
**And** 移动端导航、tab/accordion、FAQ 可操作  
**And** Reduce Motion 开启时动画关闭或降级。

### Story 6.5: 整理发布前风险与交付清单

As a 项目负责人,
I want 在交付前看到剩余风险、待确认项和上线前检查清单,
So that 我能决定是否进入实现验收或部署准备。

**目标：** 汇总最终验收结论、待确认项、运维风险和后续工作建议。

**范围：** 输出全站验收摘要、未解决 bug、SEO 待确认、素材替换待确认、未纳入页面链接、HTTPS 证书风险项、部署前检查清单。

**依赖：** Story 6.4。

**不可改动项：** HTTPS 证书修复不混入 UI 页面开发；未纳入范围页面不在本 Story 中重构。

**Acceptance Criteria:**

**Given** 全站链接、SEO、模块、视觉验收均已执行  
**When** 项目负责人查看发布前清单  
**Then** 清单包含通过项、失败项、待确认项和责任边界  
**And** HTTPS 证书过期被列为独立运维风险  
**And** 未纳入页面保持链接可达但不被本次重构实现  
**And** 文档明确下一步可进入实现排期或 BMAD sprint planning。

## Final Validation

- FR1-FR19 均已映射到至少一个 Epic，并在对应 Story 的目标、范围或验收标准中体现。
- UX-DR1-UX-DR21 均被 Epic 1-6 覆盖：token、组件、模板、状态、响应式、可访问性和反模式约束已进入 Story。
- Epics 按用户价值组织，而不是按纯技术层组织。
- Story 顺序只依赖前置 Story 或前置 Epic，不依赖同一 Epic 的未来 Story。
- 每个 Story 都包含目标、范围、验收标准、依赖、不可改动项。
- 架构约束 AD-1 至 AD-12 已进入相应 Story：源站保真、静态生成、`.html` 路由、模板/组件边界、token、导航页脚、交互状态、响应式、SEO、素材 registry、验收门禁、HTTPS 风险。
