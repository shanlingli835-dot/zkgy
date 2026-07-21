# Call to action

- Source：`https://ux.redhat.com/elements/call-to-action/`
- Source element：`rh-cta`
- Source status：Ready
- Local treatment：Adapted
- Local status：Implemented
- Category：Actions and links

## Purpose

Call to action gives a destination link stronger hierarchy for the single primary marketing task
in a page or action area while retaining native navigation semantics.

## Use / do not use

- Use：free-trial, contact, consultation, or another source-approved high-priority destination.
- Use Secondary for a supporting destination in the same module.
- Do not use for submit, save, close, or another in-place operation; use Button.
- Do not use more than one Primary in the same action area or invent a page-level CTA style.

## Anatomy and variants

Required anatomy：native anchor destination and concise label.

| Hierarchy   | Use                                                    |
| ----------- | ------------------------------------------------------ |
| `primary`   | Highest-priority destination in a page or action area  |
| `secondary` | Supporting destination with less emphasis than Primary |

The component shares canonical Button geometry and interaction Tokens without rendering a
button or accepting Button-only states.

`tone="marketing-band"` is a contextual tone for the single action placed on the approved
homepage marketing band. It keeps Primary hierarchy and canonical geometry while remapping only
the Primary action color through `--ds-color-action-band-*`. It must not be used on ordinary page
surfaces.

## Behavior and states

- Default, Hover, Focus visible, and Active use corresponding action Tokens without movement.
- Visited does not change visual hierarchy because CTA priority must remain stable.
- Disabled and Loading are not CTA states. Remove an unavailable destination or use explanatory
  non-interactive text.
- Parent action areas stack on narrow screens without changing priority.

## Content

- Preserve source-approved labels such as “免费试用”, “联系我们”, or “咨询方案”.
- Use a short result-oriented phrase; do not use “点击这里”, “更多”, or implementation language.
- One action area cannot contain multiple Primary destinations.

## Accessibility

- Renders a native anchor through TanStack Router and supports `Tab`, `Shift + Tab`, and `Enter`.
- Focus remains visible and follows document order.
- New-tab behavior adds secure rel values and assistive text.
- Do not nest Button or another interactive element inside the CTA.

## Local implementation contract

- Canonical path：`src/components/ui/call-to-action.tsx`
- Public API：TanStack Router Link props using `to`; `hierarchy="primary | secondary"`;
  `tone="default | marketing-band"`; native anchor attributes; optional `newTabLabel`.
- Default values：`hierarchy="primary"`; current-tab navigation.
- Tokens：canonical Button action, focus, typography, spacing, radius, border, and motion Tokens.
- Dependencies：TanStack Router `createLink`, canonical `buttonVariants`, local `cn`.
- Forbidden：Button for navigation, `href` in route code, tertiary/danger CTA variants, direct
  `--rh-color-*`, raw visual values, or route-level CTA clones.

## Asset exclusions

Do not copy Red Hat CTA icons, screenshots, fonts, labels, Logo, or Web Component code.

## Acceptance checklist

- [x] Purpose and alternatives are clear.
- [x] Default, Hover, Focus visible, and Active are implemented.
- [x] Native link semantics and keyboard behavior are preserved.
- [x] Narrow-screen stacking and minimum control size are supported.
- [x] Only canonical action Tokens and shared geometry are used.
- [x] Catalog and source-coverage statuses are updated.
