# [Component name]

- Source：`https://ux.redhat.com/elements/[slug]/`
- Source element：`rh-[slug]`
- Source status：Ready / New / Planned / Internal
- Local treatment：Adapted / Reference only / Internal only
- Local status：Planned / Existing unreviewed / Implemented
- Category：

## Purpose

State the user problem this component solves in one sentence.

## Use / do not use

- Use：list 2–4 appropriate scenarios.
- Do not use：list confusing alternatives and the correct replacement.

## Anatomy and variants

Document required and optional parts. Keep only variants with distinct semantics or use cases.

## Behavior and states

Define applicable Default, Hover, Focus visible, Active, Disabled, Loading, Error, Selected,
and Expanded states, including responsive behavior.

## Content

Define labels, length, voice, localization, error messages, and prohibited internal copy.

## Accessibility

Define native semantics, keyboard behavior, focus, accessible names, announcements, and focus
return behavior.

## Local implementation contract

- Canonical path：`src/components/ui/[file].tsx`
- Public API：list allowed props and values.
- Tokens：list semantic Token categories; do not add page-level values.
- Dependencies：list behavior libraries without importing their default visual identity.
- Forbidden：`<rh-*>`, direct `--rh-color-*` usage, Red Hat assets, and duplicate route-level
  implementations.

## Asset exclusions

List logos, images, icons, fonts, screenshots, or brand content that must not be copied.

## Acceptance checklist

- [ ] Purpose and alternative components are clear.
- [ ] Applicable states are complete.
- [ ] Keyboard and screen-reader behavior is verified.
- [ ] Desktop and mobile behavior is verified.
- [ ] Only the approved Token layer and canonical component are used.
- [ ] Catalog and source-coverage statuses are updated.
