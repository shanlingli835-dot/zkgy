# Link

- Source：`https://ux.redhat.com/foundations/interactions/links/`
- Source element：native `<a>` interaction foundation
- Source status：Ready
- Local treatment：Adapted
- Local status：Implemented
- Category：Actions and links

## Purpose

Link moves users to another page, resource, or location while preserving native anchor semantics.

## Use / do not use

- Use：internal page navigation, external resources, downloads, or a location on the current page.
- Use Button for submit, save, create, close, or another action in the current interface.
- Use CTA, after it is implemented, for prominent marketing navigation with supporting hierarchy.
- Do not create a link without a destination. Render unavailable navigation as non-interactive
  text rather than inventing a disabled Link.

## Anatomy and variants

Required anatomy：destination and descriptive link text. One optional project-approved icon may
accompany a Standalone link when it clarifies the destination.

| Variant      | Use                                                                                    |
| ------------ | -------------------------------------------------------------------------------------- |
| `inline`     | Link inside a sentence, paragraph, or content list; dashed underline and visited state |
| `standalone` | Independent text link or link-with-icon outside prose; no underline until interaction  |
| `navigation` | Menu, breadcrumb, pagination, or another visually distinct navigation grouping         |

`tone="default"` is used on light surfaces. `tone="inverse"` is allowed only on an approved
inverse surface such as the site footer; it does not enable a Dark theme.

## Behavior and states

- Default：uses the copied Red Hat interactive blue and, for Inline, a dashed gray underline.
- Hover：uses the Red Hat hover blue; Inline underline offset changes from `5px` to `6px` without
  moving layout.
- Focus visible：retains the global focus outline; inverse links use the approved on-dark focus
  color.
- Active：uses the Red Hat interactive active color.
- Visited：Inline and Standalone use the Red Hat visited purple values. Navigation does not change
  from browser history; router-active Navigation uses the local brand-red action hierarchy.
- Disabled, Loading, Error, Selected, and Expanded are not Link states. Use a semantic component
  that owns that behavior.

Link text may wrap on narrow screens and at enlarged text sizes. Do not truncate a destination
needed to understand or complete a task. Inline links are exempt from the `44px` target when they
must remain within prose; standalone and navigation layouts provide adequate surrounding space.

## Content

- Describe the destination or result, such as “查看低空安全解决方案”.
- Do not use “点击这里”, “更多”, a raw URL, or a full paragraph as link text.
- Keep independent link labels concise; surrounding context may provide additional meaning.
- Do not append punctuation to a standalone label unless it belongs to the sentence.
- Use no more than one functional icon and do not create icons from typed symbols.

## Accessibility

- Renders a native `<a href>` through TanStack Router and supports `Tab`, `Shift + Tab`, and
  `Enter` without custom keyboard handlers.
- Focus order follows DOM and visual order. Route code must not remove the focus outline.
- External links remain in the current tab by default. `target="_blank"` is reserved for a
  justified user need; the component automatically adds `noopener noreferrer` and screen-reader
  text announcing the new tab.
- Adjacent links require distinct accessible names when their destinations differ.
- An icon that repeats the label is decorative; meaningful icon context must be included in the
  accessible name.

## Local implementation contract

- Canonical path：`src/components/ui/link.tsx`
- Public API：TanStack Router Link props using `to`; `variant="inline | standalone | navigation"`;
  `tone="default | inverse"`; native anchor attributes; optional `newTabLabel`.
- Default values：`variant="inline"`, `tone="default"`; external links use the current tab.
- Tokens：`--ds-color-link-*`, `--ds-color-focus`, typography, border, spacing, radius, and motion
  Tokens.
- Dependencies：React, TanStack Router `createLink`, class-variance-authority, and local `cn`.
- Forbidden：Button for navigation, `href` on the canonical component, nested interactive
  controls, direct `--rh-color-*`, raw visual values, Red Hat icons or assets, forced new tabs, or
  route-level Link variants.

## Asset exclusions

Do not copy Red Hat link screenshots, icons, fonts, labels, Logo, or example content. Use only the
approved project icon library and SOURCEGUARD content.

## Acceptance checklist

- [x] Purpose and alternatives are clear.
- [x] Default, Hover, Focus visible, Active, Visited, and router-active behavior are implemented.
- [x] Native keyboard and screen-reader semantics are preserved.
- [x] Wrapping and mobile text enlargement behavior are implemented.
- [x] Only approved Tokens and the canonical component are used.
- [x] Catalog and source-coverage statuses are updated.
