# Marketing CTA band

- Source：current public homepage `.solution-cta-bar`
- Source element：project-owned composition of canonical Call to action
- Source status：Approved local reference
- Local treatment：Adapted site composition
- Local status：Implemented
- Category：Actions and links

## Purpose

Marketing CTA band provides one compact, visually consistent final action immediately before the
global Footer on public marketing and product pages.

## Use / do not use

- Use once at the end of a marketing, solution, service, or product page when a final destination
  is source-approved.
- Use the page's existing primary task and destination.
- Do not use inside page content, between ordinary sections, or as a decorative divider.
- Do not recreate its gradient, layout, or button styling in route CSS.

## Anatomy and variants

Required anatomy：semantic `section`; `h2` title; optional short description; exactly one Primary
Call to action.

There are no public visual variants. The marketing-band treatment is fixed to the approved current
homepage presentation.

## Behavior and states

- The CTA receives Default, Hover, Focus visible, and Active states from canonical Call to action
  with `tone="marketing-band"`.
- Desktop displays copy and action in one centered row.
- Narrow screens stack copy above a full-width action without changing reading or focus order.
- Disabled, Loading, Error, Selected, and Expanded do not apply.

## Content

- Title and description must come from approved page content; do not add unsupported claims.
- Keep one concise action label such as “免费试用”, “获取方案”, or “联系我们”.
- Do not expose implementation notes, temporary email addresses, or placeholder legal text.

## Accessibility

- The component renders a native labelled section and a native anchor through Call to action.
- `headingId` is optional; a stable React ID is generated when it is omitted.
- Keyboard order is title, optional description, then action; focus remains visible.
- Color is not the only hierarchy signal because the action has label, shape, and position.

## Local implementation contract

- Canonical path：`src/components/site/MarketingCtaBand.tsx`
- Public API：`title`; optional `description`; `action: { label, href }`; optional `headingId`.
- Tokens：approved marketing gradient, action-band states, inverse text, spacing, container,
  typography, radius, focus, and responsive gutter Tokens.
- Dependencies：canonical Call to action and `marketing-cta-band.css`.
- Forbidden：plain anchors, multiple actions, route-level gradient CSS, raw visual values, direct
  `--rh-color-*`, or a second page-specific implementation.

## Asset exclusions

This component has no image or icon dependency. Do not add Red Hat or third-party brand assets,
fonts, screenshots, or decorative artwork.

## Acceptance checklist

- [x] Purpose and alternative components are clear.
- [x] Applicable states are complete.
- [x] Keyboard and screen-reader behavior is verified.
- [x] Desktop and mobile behavior is verified.
- [x] Only the approved Token layer and canonical component are used.
- [x] Catalog and source-coverage statuses are updated.
