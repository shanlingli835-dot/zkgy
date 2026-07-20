# Color system

状态：Implemented.

上游原始色板：`src/styles/red-hat-colors.css`

本地语义映射：`src/styles/tokens.css`

主题：Light only.

## Implementation boundary

`red-hat-colors.css` is a direct, complete copy of all 364 `--rh-color-*` declarations in
`@rhds/tokens@3.1.0`: 209 HEX declarations, 77 HSL channel declarations, 77 RGB channel
declarations, and 1 computed color declaration. It preserves all 75 distinct HEX values. Do not
edit, shorten, rename, reformat, or selectively replace that snapshot.

`tokens.css` maps the upstream colors to local `--ds-color-*` semantics. Components, routes,
Tailwind, and shadcn-compatible aliases consume only `--ds-*`; they must not couple directly to
upstream names. Legacy `--zksc-*` and default shadcn theme values remain removed.

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

The exact color values come directly from the approved Red Hat snapshot. Semantic selection and
component usage remain controlled by the SOURCEGUARD `--ds-color-*` layer.

## Current Light mapping

| Local purpose          | Red Hat source                                                                     |
| ---------------------- | ---------------------------------------------------------------------------------- |
| Primary action         | `--rh-color-brand-red-on-light`                                                    |
| Primary hover / active | `--rh-color-brand-red-dark` / `--rh-color-brand-red-darker`                        |
| Link and focus         | `--rh-color-interactive-primary-*`                                                 |
| Canvas and surfaces    | `--rh-color-canvas-*`, `--rh-color-surface-*`                                      |
| Text and borders       | `--rh-color-text-*-on-light`, `--rh-color-border-*-on-light`                       |
| Status                 | `--rh-color-status-*`, `--rh-color-surface-status-*`, `--rh-color-border-status-*` |

The copied `on-dark` declarations remain available because the user requested the complete
source palette. They do not activate a Dark theme.

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
- Direct `--rh-color-*` usage outside `tokens.css`.
- Editing or removing individual values from `red-hat-colors.css`.
- A Dark theme without an explicit project decision.
