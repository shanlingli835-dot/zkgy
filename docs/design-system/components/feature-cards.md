# Feature Cards

- Source：用户提供的 21st.dev `feature-sections` 参考代码（非 Red Hat 上游元素）
- Source element：None
- Source status：Not applicable
- Local treatment：Adapted（只采用图上文下的板式，字体、颜色、圆角、间距全部换成本地 Token）
- Local status：Implemented
- Category：Content hierarchy

## Purpose

用「配图 → 标签 → 标题 → 描述」的等宽卡片行，并列呈现同一组产品能力，让读者先看图再读要点。

## Use / do not use

- Use：产品页「为什么选择 …」等 2–4 项并列能力说明；每项都有一张等价配图的场合。
- Do not use：需要展示真实界面证据时用 Evidence Section；需要展开/切换内容时用 Accordion 或 Tabs；
  纯文字要点用普通列表，不要为省事先套卡片。

## Anatomy and variants

卡片依次为：配图（必需，4:3，圆角裁切，无边框）、标签（可选，小号半粗体）、标题（必需）、
描述（必需）。列数默认取条目数，可用 `columns` 指定 2/3/4。桌面等宽网格，卡片不额外套背景。

## Behavior and states

Default 为静态内容。指针设备悬停时整卡上移 2px（300ms 内缓出），`prefers-reduced-motion`
时禁用该位移。卡片本身不可聚焦、不可点击；需要跳转时另放链接或按钮。Loading、Error、Selected、
Expanded、Disabled 对静态内容不适用。

## Content

标题与描述由页面原样提供，不新增或改写业务文案。标签为 2–4 字短词语义提示，不作为标题替代品。
配图替代文本用中文描述画面内容，不重复标题。禁止出现 Story 标签、实现说明或占位文案。

## Accessibility

原生 `ul` / `li` 列表语义，阅读顺序与视觉顺序一致。配图为内容图片，提供中文替代文本；
标签、标题、描述为普通文本，不引入多余焦点。悬停位移不作为唯一信息载体。

## Local implementation contract

- Canonical path：`src/components/ui/feature-cards.tsx` 与 `feature-cards.css`
- Public API：`items: { image: { src, alt }, tag?, title, desc }[]`、`columns?: 2 | 3 | 4`、`className?`
- 只使用语义 Token：`--ds-space-*`、`--ds-color-text-*`、`--ds-color-surface-subtle`、
  `--ds-radius-surface`、`--ds-font-size-*`、`--ds-font-weight-*`
- 参考代码中的 Poppins 字体注入、`* { font-family }` 全局覆盖、外部 CDN 示例图与 slate 色值一律不采用

## Asset exclusions

不使用 Red Hat 资产、`rh-*` Web Components、上游 Token 或一次性视觉数值；配图必须是
`brand-assets.md` 已登记的资产。

## Acceptance checklist

- [x] 目的、状态、语义与响应式行为已规定。
- [x] 1280px、390px 桌面与手机确认三列 → 两列 → 单列，无横向溢出。
- [x] 目录与本规范同步；实现仅使用语义 Token，未复制参考代码的字体与色值。
