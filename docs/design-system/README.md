# SOURCEGUARD design system

版本：`0.3.0-tokens`

正式品牌：`中科固源 / SOURCEGUARD`

主题：Light only

当前状态：规范骨架与 Token 基础层已实现；canonical components 仍需逐项审核和实现。

## 目标

这套规范让 Lovable、开发者和代码代理在十几个官网页面中复用同一套视觉语言、
交互行为和组件实现，避免每个页面重新决定颜色、按钮、卡片、导航和表单样式。

Red Hat Design System 仅用于研究组件层级、交互状态、内容规则、响应式行为和
无障碍原则。项目使用自己的品牌资产、语义 Token 和 React 组件，不复制 Red Hat
品牌视觉或 API。

## 当前迁移状态

| Layer           | Source of truth                            | Status              | Page usage                                    |
| --------------- | ------------------------------------------ | ------------------- | --------------------------------------------- |
| Brand assets    | `docs/design-system/brand/brand-assets.md` | Implemented         | Approved assets only                          |
| Foundations     | `docs/design-system/foundations/`          | Implemented         | Required before related UI work               |
| Tokens          | `src/styles/tokens.css`                    | Implemented         | Required for all visual values                |
| UI primitives   | `src/components/ui/`                       | Existing unreviewed | Review before declaring canonical             |
| Site components | `src/components/site/`                     | Existing unreviewed | Compose from approved primitives after review |
| Patterns        | `docs/design-system/patterns/`             | Planned             | Not yet approved for page generation          |

`Implemented` for Foundations and Tokens means their executable values are available now. It
does not make an existing UI component canonical. Components remain unavailable to Lovable
until their own status changes to `Implemented`.

## Information architecture

- `foundations/`：principles, color, typography, spacing, motion, and accessibility.
- `components/`：component routing, shared rules, and approved component specifications.
- `patterns/`：multi-component website compositions.
- `templates/`：required template for adding a component specification.
- `SOURCE-COVERAGE.md`：Red Hat source inventory, exclusions, and local adoption status.
- `LOVABLE-USAGE.md`：short Project Knowledge and task prompt guidance.
- `src/styles/tokens.css`：single executable Token source.
- `src/components/ui/`：canonical React primitive source after per-component approval.

## Reading route

| Task                                 | Read                                                      |
| ------------------------------------ | --------------------------------------------------------- |
| Any UI task                          | `foundations/principles.md`, then this status table       |
| Color or hierarchy                   | `foundations/color.md`                                    |
| Layout or responsive spacing         | `foundations/spacing-layout.md`                           |
| Typography or public copy hierarchy  | `foundations/typography.md`                               |
| Interaction, focus, keyboard, motion | `foundations/motion-accessibility.md`                     |
| Any component work                   | `components/README.md`, then `_shared/component-rules.md` |
| Brand or Logo work                   | `brand/brand-assets.md`                                   |
| Multi-component composition          | `patterns/README.md`, then an implemented pattern spec    |

Do not ask Lovable to read the entire directory. A normal task should load this file, the
relevant foundation files, shared component rules, and no more than 1–5 component specs.

## Priority and conflict order

1. Root `AGENTS.md` hard rules.
2. This README's status and routing rules.
3. Foundation specifications.
4. Approved component specifications.
5. Approved pattern specifications.
6. A page-level request.

More specific documents may add detail but cannot override brand boundaries, accessibility,
Token reuse, or canonical component reuse.

## Canonical implementation contract

- Tokens：`src/styles/tokens.css`
- React primitives：`src/components/ui/`
- Site-wide compositions：`src/components/site/`
- Route and page composition：`src/routes/`

Existing shadcn/Radix files are technical starting points, not automatically approved design
system components. Each component becomes canonical only after its specification, API, states,
Token usage, and accessibility checks are completed and its catalog status is changed to
`Implemented`.

## Brand and asset boundary

- Public brand name：`中科固源 / SOURCEGUARD`.
- `ZKSC` and `中科数测` are legacy migration findings and must not appear in new public copy.
- Use only approved project Logo assets documented in `brand/brand-assets.md`.
- Do not import Red Hat Logo, imagery, fonts, icons, screenshots, copy, `--rh-*`, or `<rh-*>`.

## Maintenance

- Change Token values in `tokens.css`, then update affected foundation and component docs.
- Add a component only when it has a distinct semantic purpose, behavior, or API.
- Add variants only for documented use cases, not visual preference.
- Update `SOURCE-COVERAGE.md` and `components/README.md` when adoption status changes.
- Public pages must not expose Story numbers, implementation notes, placeholders, or build status.

## Upstream references

- <https://ux.redhat.com/elements/>
- <https://github.com/RedHat-UX/red-hat-design-system>
- <https://docs.lovable.dev/features/knowledge>
- <https://docs.lovable.dev/features/design-systems>
