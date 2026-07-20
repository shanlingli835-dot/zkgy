# Color system

状态：Implemented.

实现位置：`src/styles/tokens.css`

主题：Light only.

## Implementation boundary

`src/styles/tokens.css` is the single executable source. Tailwind and shadcn-compatible aliases
in `src/styles.css` map to `--ds-*`; they do not declare another palette. Legacy `--zksc-*`
variables and the default shadcn Light/Dark values have been removed from executable source.

## Principles

- Components and routes use semantic Tokens, never palette HEX values directly.
- Color hierarchy must also be expressed with text, icons, borders, or layout.
- Status colors are reserved for their state and not used as large decorative surfaces.
- Brand updates keep semantic names stable and change values only after contrast validation.

## Semantic groups

| Group               | Names                                       | Purpose                                                  |
| ------------------- | ------------------------------------------- | -------------------------------------------------------- |
| Canvas and surfaces | `--ds-color-canvas`, `--ds-color-surface-*` | Page and container layers                                |
| Text                | `--ds-color-text-*`                         | Primary, secondary, muted, inverse, disabled             |
| Borders             | `--ds-color-border-*`                       | Subtle, default, strong, disabled                        |
| Actions             | `--ds-color-action-*`                       | Primary, hover, active, subtle, danger                   |
| Focus               | `--ds-color-focus`                          | Visible focus ring                                       |
| Status              | `--ds-color-status-*`                       | Info, success, warning, danger foreground/surface/border |

The current values are derived from the approved SOURCEGUARD brand direction, not the Red Hat
palette. Exact values remain centralized in `tokens.css`; documentation records semantics and
usage rather than duplicating an editable palette.

## Disabled states

- Disabled text, surface, and border use dedicated semantic Tokens.
- Do not rely only on opacity; opacity produces unpredictable contrast across surfaces.

## Contrast

- Body and control text must meet WCAG AA against its background.
- Control boundaries and focus indicators must remain distinguishable from adjacent colors.
- Revalidate Button, Input, Alert, navigation, and Dialog after changing a semantic value.

## Not allowed

- New raw color values in JSX, TSX, or route CSS.
- Palette names such as `blue-500` or `gray-200` used as component semantics.
- Duplicate semantic names for the same purpose.
- Red Hat palette values, `--rh-*`, or a Red Hat-branded theme.
- A Dark theme without an explicit project decision.
