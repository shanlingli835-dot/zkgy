# Spacing and layout

状态：Implemented.

## Spacing scale

All margin, padding, and gap values resolve through these semantic scale names:

| Token            | Target value | Typical use                           |
| ---------------- | ------------ | ------------------------------------- |
| `--ds-space-0`   | `0`          | Reset                                 |
| `--ds-space-xs`  | `4px`        | Micro spacing                         |
| `--ds-space-sm`  | `8px`        | Tight elements                        |
| `--ds-space-md`  | `12px`       | Compact content and control interiors |
| `--ds-space-lg`  | `16px`       | Default component spacing             |
| `--ds-space-xl`  | `24px`       | Surface padding and form groups       |
| `--ds-space-2xl` | `32px`       | Module content groups                 |
| `--ds-space-3xl` | `48px`       | Page sections                         |
| `--ds-space-4xl` | `64px`       | Large sections                        |
| `--ds-space-5xl` | `96px`       | Wide-screen marketing rhythm          |

## Approved component-specific spacing

| Token                               | Value | Purpose                      |
| ----------------------------------- | ----- | ---------------------------- |
| `--ds-space-link-underline-default` | `5px` | Inline Link underline offset |
| `--ds-space-link-underline-hover`   | `6px` | Hover Link underline offset  |

These two Link values reproduce the approved Red Hat interaction treatment and must not be reused
as general layout spacing or replaced with route-level values.

## Radii

| Token                 | Target value | Purpose                                 |
| --------------------- | ------------ | --------------------------------------- |
| `--ds-radius-control` | `6px`        | Buttons and inputs                      |
| `--ds-radius-surface` | `8px`        | Cards, dialogs, and site modules        |
| `--ds-radius-round`   | `9999px`     | Avatars and circular icon controls only |

Do not create temporary `10px`, `14px`, or oversized pill radii in routes.

## Shadows

- Use a small semantic shadow only for menus or light floating layers.
- Use a medium semantic shadow for Dialog or Popover when needed.
- Default Cards use borders or surface contrast, not shadows.
- Page hierarchy cannot depend on multiple shadow levels.

## Container and grid

- Page content maximum width：`1280px` through `--ds-container-page`.
- Reading content maximum width：`720px` through `--ds-container-reading`.
- Page gutters：mobile `20px`, tablet `32px`, desktop `64px` through layout Tokens.
- Mobile starts at one column; desktop column count follows content relationships, not empty space.
- Do not force a three-column card layout merely to fill width.

## Breakpoints

Use `640px`, `768px`, `1024px`, and `1280px` through `--ds-breakpoint-sm/md/lg/xl` across
Tailwind mapping, CSS, and component behavior. Business code cannot add a new breakpoint for a
single page.

## Responsive behavior

- Define content order mobile-first.
- Button groups may stack when space is insufficient while preserving action priority.
- Tables use a readable list transformation or an explicit horizontal-scroll container.
- Do not hide a primary operation required to complete the task.
- Verify no horizontal overflow on representative mobile and desktop widths.
