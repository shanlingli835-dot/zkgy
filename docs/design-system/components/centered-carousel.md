# Centered Carousel

- Source：External reference `https://www.adobe.com/`（Customer Testimonials Carousel）；非 Red Hat 组件。
- Source element：无（本项目自有构图）
- Source status：Reference only
- Local treatment：Adapted
- Local status：Implemented
- Category：Marketing media composition

## Purpose

在产品页等宽幅区域以居中主卡的形式轮播能力/案例卡片：主卡片水平居中，左右露出相邻卡片的一角，用箭头、拖拽或触摸切换。

## Use / do not use

- Use：产品页需要横向展示 3–6 张图上文卡片的场景。
- Do not use：需要逐项展开阅读的内容（用 Accordion）；仅一两个条目（直接用静态模块）；需要点击展开详情的图集（用 Gallery 或卡片网格）。

## Anatomy and variants

- 区域根元素：全宽 section，垂直方向使用 section 间距，水平不加内边距。
- 视口（viewport）：`overflow: hidden`，宽度 100%。
- 轨道（container）：flex 行排列，每个 slide 含一张卡片。
- 卡片：16:7 统一宽高比，`border-radius: 0.75rem`（组件级 Token，超出 surface 8px 的既定例外），背景图为 `object-fit: cover` 的已批准摄影、插图或截图。Swift Pentest 行业案例只使用真实摄影。
- 卡片叠加层：左深右浅的渐变遮罩（由 `--ds-color-surface-inverse` color-mix 生成）保证左侧文字可读；非当前卡片额外叠加约 28% 暗色遮罩。
- 卡片内容：标题、描述、可选 CTA 按钮（Primary variant），左对齐、垂直居中。
- 箭头：视口左右两侧的圆形图标按钮（48px 命中区），调用 `scrollPrev()` / `scrollNext()`。

## Behavior and states

- 初始状态主卡片居中（Embla `align: "center"`）；`loop: true` 保证首尾卡片同样可居中，循环不跳动。
- 箭头切换：轨道位移约一个卡片宽度，动画时长约 600ms（Embla `duration: 30`，物理摩擦模型，曲线近似目标缓动 `cubic-bezier(0.22, 1, 0.36, 1)`；Embla 该版本不支持自定义缓动，接受此近似）。
- 动画进行中忽略重复点击（`settle` 事件后恢复）。
- 默认关闭自动轮播；支持鼠标拖拽与移动端触摸滑动。
- 卡片宽度（视口百分比）：
  - ≥ 1440px：`min(70vw, 90rem)`
  - 1024–1439px：`78vw`
  - 768–1023px：`86vw`
  - < 768px：`92vw`，内容最大宽度放宽到 88%。
- 卡片比例：≥ 577px 保持 16:7；< 577px 高度放不下文案，改为固定 `height: 24rem`（384px），确保标题、描述与 CTA 不溢出。
- 容器尺寸变化由 Embla 内置 ResizeObserver（`watchResize` 默认实现）重新计算吸附位置；卡片宽度本身由 CSS 变量驱动，无需 JS 重算。
- States：Default；Hover（箭头底色加深）；Focus visible（2px `--ds-color-focus` 描边）；Active（箭头按下）；非当前卡片暗化；Disabled 未使用（循环轮播箭头始终可用）。

## Content

- 卡片承载完整行业案例标题与描述；图片必须有描述画面的中文 alt。桌面内容最大宽度为 `min(42rem, 62%)`。
- Swift Pentest 行业案例为三张卡片，不设置 CTA；示意摄影不得暗示为客户项目现场。
- CTA 遵循站内跳转目标规则（当前各页均为「免费试用」→ `/contact.html`）。
- 公共文案不出现实现状态、占位说明等内部注释。

## Accessibility

- 区域：`role="region"` + `aria-roledescription="轮播"`；另有一个不可见的 h2 提供模块语义。
- Slide：`role="group"`、`aria-roledescription="幻灯片"`、`aria-label="第 n 项，共 m 项"`。
- 箭头：真实 button，含可见的 `aria-label="上一张/下一张"`，键盘可聚焦、Enter/Space 生效。
- 状态播报：`role="status"` 的不可见段落播报「第 n 张，共 m 张」。
- 焦点顺序与视觉顺序一致；不使用 `outline: none`。
- 尊重 `prefers-reduced-motion`：无自动播放；用户触发的切换动画保留（状态反馈）。

## Local implementation contract

- Canonical path：`src/components/site/CenteredCarousel.tsx` + `src/components/site/CenteredCarousel.css`
- Public API：`items: { id; image: {src, alt}; title; description; cta?: {label, href} }[]`、`label?: string`。
- Tokens：颜色全部走 `--ds-color-*`；间距走 `--ds-space-*` / section 间距；组件级例外 Token：`--ds-carousel-radius: 0.75rem`、`--ds-carousel-gap: var(--ds-space-2xl)`、`--ds-carousel-slide-w`。
- Dependencies：`embla-carousel-react`（已安装）；`lucide-react` 箭头图标；`buttonVariants` 提供 CTA。
- Forbidden：`<rh-*>`、直接 `--rh-color-*`、Red Hat 资产、路由级重复实现。

## Asset exclusions

- 不得使用 Adobe Logo、页面截图或其文案素材；卡片配图使用品牌已登记的插图或经批准的资产。

## Acceptance checklist

- [x] 1920 / 1440 / 1280 / 768 / 375px 宽度下布局无横向滚动条，主卡片居中。
- [x] 箭头点击后下一张卡片准确居中；动画中重复点击不产生错位。
- [x] 图片不变形、文字不溢出（窄屏 min-height 兜底）。
- [x] 键盘与读屏语义通过；触摸滑动可用。
- [x] 仅使用 Token 层与既有 Button variant。
