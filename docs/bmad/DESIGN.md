---
name: ZKSC Website Rebuild
description: Enterprise cybersecurity website design system for a source-faithful UI rebuild.
status: draft
sources:
  - {planning_artifacts}/prds/prd-company_workspace-2026-07-13/prd.md
  - {project_knowledge}/source-site/page-inventory.md
updated: 2026-07-14
colors:
  surface-base: '#F7F8F6'
  surface-raised: '#FFFFFF'
  surface-muted: '#EEF2F1'
  surface-inverse: '#121518'
  surface-inverse-soft: '#1C2226'
  ink-primary: '#15181C'
  ink-secondary: '#53606B'
  ink-muted: '#7A858E'
  ink-inverse: '#F5F7F6'
  border-subtle: '#D9DFE3'
  border-strong: '#AAB5BD'
  primary: '#0E5A5A'
  primary-foreground: '#FFFFFF'
  primary-soft: '#D9F0EE'
  accent: '#B23A2E'
  accent-foreground: '#FFFFFF'
  amber: '#B98217'
  amber-soft: '#F4E6C8'
  success: '#2F7D50'
  warning: '#A66812'
  danger: '#B42318'
typography:
  display-xl:
    fontFamily: 'Inter, PingFang SC, Microsoft YaHei, system-ui, sans-serif'
    fontSize: 56px
    fontWeight: '650'
    lineHeight: '1.08'
    letterSpacing: '0'
  display-lg:
    fontFamily: 'Inter, PingFang SC, Microsoft YaHei, system-ui, sans-serif'
    fontSize: 44px
    fontWeight: '650'
    lineHeight: '1.12'
    letterSpacing: '0'
  headline-md:
    fontFamily: 'Inter, PingFang SC, Microsoft YaHei, system-ui, sans-serif'
    fontSize: 30px
    fontWeight: '620'
    lineHeight: '1.24'
    letterSpacing: '0'
  headline-sm:
    fontFamily: 'Inter, PingFang SC, Microsoft YaHei, system-ui, sans-serif'
    fontSize: 22px
    fontWeight: '620'
    lineHeight: '1.35'
    letterSpacing: '0'
  body-lg:
    fontFamily: 'Inter, PingFang SC, Microsoft YaHei, system-ui, sans-serif'
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.72'
    letterSpacing: '0'
  body-md:
    fontFamily: 'Inter, PingFang SC, Microsoft YaHei, system-ui, sans-serif'
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.7'
    letterSpacing: '0'
  body-sm:
    fontFamily: 'Inter, PingFang SC, Microsoft YaHei, system-ui, sans-serif'
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label:
    fontFamily: 'Inter, PingFang SC, Microsoft YaHei, system-ui, sans-serif'
    fontSize: 13px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: '0'
rounded:
  sm: 4px
  md: 6px
  lg: 8px
  full: 9999px
spacing:
  '1': 4px
  '2': 8px
  '3': 12px
  '4': 16px
  '5': 24px
  '6': 32px
  '7': 48px
  '8': 64px
  '9': 96px
  gutter-mobile: 20px
  gutter-tablet: 32px
  gutter-desktop: 64px
  section-y-mobile: 56px
  section-y-desktop: 96px
components:
  button-primary:
    background: '{colors.primary}'
    foreground: '{colors.primary-foreground}'
    radius: '{rounded.md}'
    padding-x: '{spacing.5}'
    min-height: 44px
  button-secondary:
    background: '{colors.surface-raised}'
    foreground: '{colors.ink-primary}'
    border: '1px solid {colors.border-subtle}'
    radius: '{rounded.md}'
    min-height: 44px
  nav-shell:
    background: 'rgba(247, 248, 246, 0.92)'
    foreground: '{colors.ink-primary}'
    border: '1px solid {colors.border-subtle}'
  info-card:
    background: '{colors.surface-raised}'
    border: '1px solid {colors.border-subtle}'
    radius: '{rounded.lg}'
  section-band:
    background: '{colors.surface-base}'
    padding-y: '{spacing.9}'
  metric-block:
    background: '{colors.surface-muted}'
    foreground: '{colors.ink-primary}'
    radius: '{rounded.md}'
  tab-active:
    background: '{colors.primary}'
    foreground: '{colors.primary-foreground}'
---

# ZKSC Website Rebuild — DESIGN.md

## Brand & Style

本设计系统服务于中科数测官网 UI 重构。视觉基调是“可信的安全实验室 + 可落地的企业级产品体系”：冷静、专业、信息密度适中，强调安全能力、合规验证、工具链和工程可信度。

页面不做营销型夸张视觉，不做 PPT 式卡片堆叠，不用大面积渐变或装饰球体制造科技感。视觉表达以清晰的信息层级、真实产品/场景素材、稳定组件和可扫描模块为主。每个视觉改动都必须服务于源站内容的可理解性，而不是添加新内容或制造独立视觉故事。

## Colors

- **Surface Base `{colors.surface-base}`** 是默认页面底色，避免纯白造成的信息疲劳。
- **Surface Raised `{colors.surface-raised}`** 用于导航、重要模块、产品能力块和表单/FAQ 区域。
- **Surface Inverse `{colors.surface-inverse}`** 只用于首屏、页脚或需要强调安全实验室气质的深色区段，不允许黑白区段机械交替。
- **Primary Teal `{colors.primary}`** 是主操作色，用于主按钮、当前导航、活动 tab 和关键强调线。
- **Accent Red `{colors.accent}`** 用于高风险、安全验证、重要提示和少量视觉强调，不用于大面积背景。
- **Amber `{colors.amber}`** 用于合规、标准、认证和实验室能力的辅助标识。
- **Ink Primary `{colors.ink-primary}`** 用于主要文字；`{colors.ink-secondary}` 用于说明文字；`{colors.ink-muted}` 用于弱提示。

不要引入额外主色。页面可以用产品图片、架构图、真实截图形成内容差异，不靠每个页面换一种颜色制造区分。

## Typography

使用系统无衬线字体栈：`Inter, PingFang SC, Microsoft YaHei, system-ui, sans-serif`。中文官网需要优先保证可读性和专业感，不使用装饰字体。

- 首屏标题使用 `{typography.display-xl}` 或 `{typography.display-lg}`，移动端降级为 34-40px。
- 页面章节标题使用 `{typography.headline-md}`。
- 卡片/模块标题使用 `{typography.headline-sm}`。
- 正文使用 `{typography.body-md}`，长段说明可使用 `{typography.body-lg}`。
- 标签、导航、按钮使用 `{typography.label}`。

所有中文文字 `letter-spacing` 保持 0。不要使用负字距、过窄行高或全大写英文标签来制造“高级感”。

## Layout & Spacing

整体布局采用企业官网可扫描的 12 栅格，最大内容宽度建议 1200-1280px。页面区段必须有稳定节奏：首屏、能力说明、产品/方案内容、证明材料、CTA 分层清晰。

- 桌面端外边距使用 `{spacing.gutter-desktop}`。
- 平板端外边距使用 `{spacing.gutter-tablet}`。
- 移动端外边距使用 `{spacing.gutter-mobile}`。
- 桌面端大区段上下间距使用 `{spacing.section-y-desktop}`。
- 移动端大区段上下间距使用 `{spacing.section-y-mobile}`。

产品页和解决方案页禁止变成同质卡片墙。模块应在“说明文字、结构图、能力列表、数据/标准、CTA”之间建立清晰主次。

## Elevation & Depth

深度主要通过色块层级、边框和留白建立。阴影只能用于导航浮层、下拉菜单、轻量卡片 hover，不作为主要层级语言。

- 默认模块使用 `1px solid {colors.border-subtle}`。
- 高亮模块可使用 `{colors.surface-muted}` 背景。
- 深色区段必须承载首屏、页脚或关键 CTA，不作为纯装饰分隔。

## Shapes

组件圆角保持克制：小控件 `{rounded.sm}`，按钮和 tab `{rounded.md}`，卡片与模块 `{rounded.lg}`。卡片圆角不得超过 8px。除标签或头像类元素外，不使用大药丸形状。

图片、产品截图、结构图容器跟随所在模块圆角，不允许出现不一致裁切。

## Components

- **Global Navigation**：半透明浅色背景或稳定纯色背景，滚动后保持可读。桌面端显示主导航与联系入口；移动端折叠菜单必须覆盖全部源站导航链接。
- **Primary Button**：使用 `{components.button-primary}`。用于“免费试用”“联系我们”“咨询方案”等主要 CTA。按钮文案保持源站含义。
- **Secondary Button**：使用 `{components.button-secondary}`。用于“了解更多”、次级跳转或深色背景上的反向按钮。
- **Product Capability Block**：用于产品功能、产品优势、检测能力。每块必须包含明确标题、短说明和可识别图标/截图，不做空泛装饰。
- **Solution Scenario Module**：用于网联汽车、特种装备业务场景。支持 tab/锚点，但移动端必须变成清晰的纵向分组。
- **Metric Block**：用于 70%、80%、90%、研发占比等数字。数字必须和解释文字同屏出现，避免滚动数字噪声影响标题层级。
- **FAQ Item**：用于公司介绍页 FAQ。展开/收起状态清楚，焦点可见。
- **Footer**：保留备案和外部链接。视觉上克制，不删减链接。

## Do's and Don'ts

| Do | Don't |
|---|---|
| 保留源站页面、模块、文案含义和 CTA 路径 | 为了好看新增业务内容或改写产品定位 |
| 使用真实产品截图、架构图、合规标准和场景信息承载视觉 | 使用无意义抽象图、文字生成图、装饰球体或大面积渐变 |
| 让首页、产品页、方案页有不同信息结构 | 把所有内容做成同一种卡片网格 |
| 桌面和移动端都保持清晰阅读节奏 | 只做桌面端视觉，移动端靠自动堆叠 |
| 保持按钮、导航、页脚、CTA 全站一致 | 每页单独发明按钮、颜色或卡片样式 |
| 先依据 DESIGN.md 和 EXPERIENCE.md 再实现 | 直接从某个参考站复制颜色、图标和布局 |
