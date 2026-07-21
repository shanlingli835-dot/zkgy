# Footer

- Source：`https://ux.redhat.com/elements/footer/`
- Source element：`rh-footer`
- Source status：Ready
- Local treatment：Adapted site composition
- Local status：Implemented
- Category：Navigation

## Purpose

Footer provides consistent final navigation, contact, community, legal, and brand information on
every SOURCEGUARD public page.

## Use / do not use

- Use exactly once in the SiteShell footer slot.
- Read all destinations from `src/content/navigation.ts`.
- Do not remove legacy destinations because their pages are outside the current rebuild.
- Do not create a page-specific footer or duplicate footer navigation data.

## Anatomy and variants

Required anatomy：approved reverse Logo in a separated brand row; icon-labelled utility Links;
four grouped internal navigation columns; about copy and approved company Links; current-language
display; copyright; filing Link.

There are no public variants. Footer is an approved inverse surface in the Light-only system.

## Behavior and states

- Link Default, Hover, Focus visible, Active, and Visited states use canonical inverse Link.
- External community and filing links open in a new tab with secure rel and assistive text.
- Desktop follows the current homepage five-column composition; tablet and mobile reflow without
  hiding destinations.
- Disabled, Loading, Error, Selected, and Expanded do not apply.

## Content

- Use `中科固源 / SOURCEGUARD` brand assets and public naming.
- Preserve approved internal targets, filing text, and contact destination.
- Do not expose Story numbers, implementation notes, or legacy public brand labels.

## Accessibility

- SiteShell supplies the single native footer landmark.
- Each navigation group has a distinct accessible label and a visible heading.
- Brand Logo is decorative inside a labelled home Link.
- Reading and focus order follow visual group order; all links remain keyboard accessible.

## Local implementation contract

- Canonical path：`src/components/site/GlobalFooter.tsx`
- Public API：none; reads approved navigation data internally.
- Tokens：inverse surface/text/border, Link, spacing, container, typography, focus, and responsive
  layout Tokens.
- Dependencies：canonical Link, BrandLogo, `global-footer.css`, and
  `src/content/navigation.ts`.
- Owning composition：SiteShell footer slot.
- Owning pattern：`docs/design-system/patterns/page-ending.md`; routes do not render a separate
  footer inside page content.
- Forbidden：plain anchors, duplicated link data, Red Hat assets, direct `--rh-color-*`, raw visual
  values, placeholder legal copy, or page-level footer forks.

## Asset exclusions

Do not copy Red Hat Logo, social icons, screenshots, fonts, legal copy, or Web Component code. Use
only approved SOURCEGUARD Logo assets.

## Acceptance checklist

- [x] Purpose, anatomy, and composition ownership are clear.
- [x] Applicable Link states and responsive reflow are implemented.
- [x] Navigation labels, external-link semantics, and keyboard order are preserved.
- [x] Mobile does not hide required destinations or overflow horizontally.
- [x] Only approved Tokens, assets, data, and canonical Link are used.
- [x] Catalog and source-coverage statuses are updated.
