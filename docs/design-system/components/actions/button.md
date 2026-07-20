# Button

- Source：`https://ux.redhat.com/elements/button/`
- Source element：`rh-button`
- Source status：Ready
- Local treatment：Adapted
- Local status：Implemented
- Category：Actions

## Purpose

Button triggers an immediate page, interface, or form action using a native HTML button.

## Use / do not use

- Use：submit a form, save or create data, open or close an interface, start a current-page task.
- Use Primary only for the highest-priority action; keep one Primary per page or action area.
- Use Danger only for destructive or difficult-to-reverse operations.
- Do not use Button to navigate to another URL; use the canonical Link or CTA after those
  components are implemented.
- Do not use Button as a checkbox, switch, or two-state control.

## Anatomy and variants

Required anatomy：native button container and a concise action label. One optional project-approved
icon may appear before or after the label. Icon-only controls use `size="icon"` and an accessible
name.

| Variant     | Hierarchy and use                                                                     |
| ----------- | ------------------------------------------------------------------------------------- |
| `primary`   | Highest-priority action; one per page or action area                                  |
| `secondary` | General supporting action with less emphasis than Primary                             |
| `tertiary`  | Lowest-emphasis action that still requires a button container                         |
| `danger`    | Destructive or difficult-to-reverse action; do not use as a general red accent button |

`link`, `play`, and `close` are not local Button variants. Link is a separate semantic component;
media play and dismiss controls will be specified with their owning patterns if required.

The local Primary uses `--ds-color-action-primary`, currently mapped to the copied Red Hat brand
red scale by explicit project direction. This differs from the upstream example's blue Primary
while preserving the upstream hierarchy, interaction-state model, and exact Red Hat color values.

## Behavior and states

- Default：enabled and ready to activate.
- Hover：uses the documented variant hover surface, foreground, and border Tokens without moving
  or resizing the control.
- Focus visible：matches the hover treatment and retains the global blue focus outline.
- Active：uses the documented active Token and does not translate or scale the control.
- Disabled：native `disabled`; uses dedicated disabled surface, text, and border Tokens rather
  than opacity and is removed from the tab order.
- Loading：sets `aria-busy="true"`, disables repeat activation, preserves dimensions, and shows a
  reduced-motion-safe spinner. `loadingText` may replace the visible label with a short status.

Buttons keep a minimum `44px` height. They may grow horizontally with content but labels remain on
one line. A parent action group may stack buttons on narrow screens without changing priority.

## Content

- Use a unique verb or short verb phrase that describes the result, such as “提交申请” or “保存”.
- Target no more than three words or 30 characters; avoid punctuation and articles when possible.
- Do not use ambiguous labels such as “点击这里”, “更多”, or implementation terminology.
- Use no more than one icon. Do not create icons from typed symbols.
- `loadingText` describes the current operation, such as “正在提交”, rather than a generic
  “Loading”.

## Accessibility

- Renders a native `<button>` and supports `Tab`, `Shift + Tab`, `Enter`, and `Space` without
  custom keyboard handlers.
- Defaults to `type="button"`; form submission must explicitly set `type="submit"`.
- Icon-only buttons require `aria-label`; a decorative icon remains hidden from assistive
  technology through the icon library's normal treatment.
- Do not nest links, inputs, or other interactive controls inside Button.
- Loading exposes `aria-busy`; disabled and loading controls cannot be activated repeatedly.
- Focus order follows DOM and visual order. Focus styling must never be removed by route classes.

## Local implementation contract

- Canonical path：`src/components/ui/button.tsx`
- Public API：native button props; `variant="primary | secondary | tertiary | danger"`;
  `size="default | icon"`; `loading`; `loadingText`.
- Default values：`variant="primary"`, `size="default"`, `type="button"`, `loading=false`.
- Tokens：`--ds-color-action-*`, `--ds-color-focus`, `--ds-size-control-min`, typography, spacing,
  radius, border, and motion Tokens.
- Dependencies：React, class-variance-authority, local `cn`; project-approved icons may be passed as
  children.
- Internal adapters that must reproduce Button geometry import `buttonVariants` from
  `src/components/ui/button-variants.ts`. New route code imports only `<Button>` from the canonical
  path.
- Forbidden：`asChild`, navigation rendered as Button, `<rh-button>`, direct `--rh-color-*`, Red Hat
  assets, raw visual values, opacity-only disabled styling, or route-level variants.

## Asset exclusions

Do not copy Red Hat button screenshots, icons, fonts, labels, Logo, or Web Component code. Use only
the approved project icon library and SOURCEGUARD content.

## Acceptance checklist

- [x] Purpose and alternative components are clear.
- [x] Default, Hover, Focus visible, Active, Disabled, and Loading are implemented.
- [x] Native keyboard and screen-reader semantics are preserved.
- [x] Minimum touch target and narrow-screen growth behavior are implemented.
- [x] Only approved Tokens and the canonical component are used.
- [x] Catalog and source-coverage statuses are updated.
