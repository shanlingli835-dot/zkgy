
## 目标

按 `docs/source-site/page-inventory.md` 完成剩余 10 个页面（5 个产品详情页 + 2 个方案页 + 1 个服务页 + 1 个公司介绍页 + 首页的兜底路由）。UI 遵循 `docs/design-system` 与 tokens；文案、CTA 跳转、模块顺序对齐源站盘点。

## 产品页统一模块骨架（Wisdom 已交付，作为参考）

按“为什么 → 是什么 → 怎么用 → 谁在用 → 转化”的顺序：

1. **Hero**：品牌徽标 + H1 + 一句话价值 + 主 CTA「免费试用」+ 次 CTA「了解产品能力」+ 右侧可视化
2. **场景/痛点**（Why）：4 张卡片，展示为什么需要此类能力
3. **核心能力**（What）：3–4 张卡片 + 图标 / 简要说明
4. **产品架构 / 工作流程**（How）：架构图或流程图（见「素材策略」）
5. **技术优势**（Why us）：2–4 项差异化，图标 + 段落
6. **应用场景 / 支持范围**（Where）：行业或协议清单
7. **CTA 卡片**：深色渐变，一段行动号召 + 主 CTA
8. **底部 CTA + 页脚**：复用 `SourceHomeEmbed`（`.solution-cta-bar` + `.jasper-footer`），与首页一致

不是每个产品都刚好 8 个模块，以源站盘点为准。若盘点里没有「工作流程」模块，不硬加；若有独立特色（如 Swift AI 的模型评测矩阵），补充独立模块。

## 方案页 / 服务页 / 公司页骨架

- **方案页**（网联汽车、特种装备）：Hero → 行业背景 → 方案架构（架构图）→ 覆盖能力/合规项 → 交付物 → 案例引用 → CTA
- **服务页**（渗透测试）：Hero → 服务内容 → 服务流程（流程图）→ 交付成果 → 团队与资质 → CTA
- **公司页**：Hero → 关于我们 → 里程碑时间线 → 团队数据 → 资质/认证 → 合作伙伴 → CTA

## 素材策略：截图 / 架构图 / 流程图 / 缺素材

- **产品 UI 截图**：源站与 `public/source-site/img/` 未提供可复用截图 → **不虚构 UI 图**。以「结构化视觉占位」替代：SVG 网格 / 抽象 dashboard 骨架（纯 tokens 色），并在 alt 与旁白清晰标注为示意，不出现虚假指标数字。
- **产品架构图**：用内联 SVG 组件绘制（节点 + 箭头，纯 tokens 色），保证响应式、无需外部素材、可访问（`role="img"` + `<title>`）
- **工作流程图**：横向 4–6 步 stepper，SVG + 文字，遵循 tokens
- **合作伙伴 / 客户 Logo**：仅使用 `public/source-site/img/logo/` 中已存在的图片；缺失的 logo 位保持空占位或直接省略，不外链、不生成假 logo
- **图标**：统一使用 `lucide-react`，不引入第三方图标集
- **图片素材缺失**：绝不生成 AI 图冒充产品截图；用 SVG 抽象图 + 文字说明，并在页面数据里标注 `TODO: 待正式素材`（内部注释，不上前台）

## 执行顺序（按依赖 & 影响面）

先做 3 个高优先级产品页 → 再做剩余产品页 → 方案页 → 服务页 → 公司页。每个页面独立提交，逐个验收。

```text
Story 1  /ai.html            Swift AI
Story 2  /sca.html           Swift SCA
Story 3  /lens.html          Wisdom Lens
Story 4  /swiftcode.html     Swift Code
Story 5  /swiftpenstest.html Swift Pentest
Story 6  /solution-auto.html 网联汽车方案
Story 7  /solution-special.html 特种装备方案
Story 8  /service-penstest.html 渗透测试服务
Story 9  /about.html         公司介绍
Story 10 已存在页面回归检查（导航连通、SEO、CTA 一致性）
```

每个 Story 完成后自查：桌面/移动、CTA 跳转 `/contact.html`、SEO head 完整、导航连通、无源站信息缺失、Hero H1 与盘点一致。

## 技术细节

- 路由文件：`src/routes/{slug}[.]html.tsx`，`createFileRoute("/{slug}.html")`
- 复用组件：`SiteShell` + `GlobalHeader` + `SourceHomeEmbed`（作为 footer/CTA）
- 样式：只使用 `--ds-*` tokens；不新增一次性颜色/间距
- SEO head：title/description/keywords/og:* 全部按盘点录入；无 og:image 时省略而非填占位
- 架构图/流程图：新增 `src/components/site/diagrams/`，放可复用 SVG（`ProductArchitectureDiagram`, `WorkflowStepper` 等）
- 建议前先输出每页的模块清单让你确认，再进入代码

## 需要你确认

1. 是否按上述模块骨架 & 执行顺序推进？
2. 素材策略：接受「SVG 结构占位 + 不生成假产品截图」这个方案，还是希望我用图像生成工具补一批中性风格插画？
3. 是否要求我每完成一个页面就停下等验收，还是允许连续跑完 Story 1–3 后统一 review？
