# Skip link

- Source：`https://ux.redhat.com/elements/skip-link/`
- Source element：`rh-skip-link`
- Source status：Ready
- Local treatment：Adapted
- Local status：Implemented
- Category：Actions and links

## Purpose

Skip link lets keyboard users bypass repeated global navigation and move directly to the main
page content.

## Use / do not use

- Use exactly once near the start of SiteShell.
- Target the single main landmark id owned by SiteShell.
- Do not use for ordinary in-page navigation or as a replacement for correct heading structure.

## Anatomy and variants

Required anatomy：native same-page anchor and clear action label. There are no public variants.
The control is visually hidden until it receives keyboard focus.

## Behavior and states

- Default：visually hidden while remaining the first focusable control.
- Focus visible：appears below the fixed Header on a readable light surface with visible focus.
- Active：moves navigation to the main landmark.
- Disabled, Loading, Error, Selected, and Expanded do not apply.

## Content

Use the stable label “跳到主要内容”. Do not expose target ids or implementation terms.

## Accessibility

- Renders a native `<a href="#id">`.
- Appears before the Header in DOM and focus order.
- The destination id must exist exactly once on the page.
- Minimum visible target height uses the canonical control-size Token.

## Local implementation contract

- Canonical path：`src/components/ui/skip-link.tsx`
- Public API：`targetId`; text `children`.
- Tokens：surface, text, border, focus, spacing, radius, Header size, control size, and navigation
  stacking Tokens.
- Dependencies：React only.
- Forbidden：`<rh-skip-link>`, missing destination, route-level duplicate, raw visual values, or
  hiding the control while focused.

## Asset exclusions

No icon or brand asset is used. Do not copy upstream screenshots, fonts, or Web Component code.

## Acceptance checklist

- [x] Purpose and placement are clear.
- [x] Default, Focus visible, and Active behavior are implemented.
- [x] Native keyboard and same-page anchor semantics are preserved.
- [x] The visible state clears the Header and fits narrow screens.
- [x] Only approved Tokens are used.
- [x] Catalog and source-coverage statuses are updated.
