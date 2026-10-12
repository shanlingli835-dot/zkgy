# Evidence Section

- Source: Local native composition following upstream typography/layout principles
- Source element: None
- Source status: Not applicable
- Local treatment: Adapted
- Local status: Implemented
- Category: Content hierarchy

## Purpose
Present existing product rationale as asymmetric evidence and process, not stacked equal-weight blocks.

## Use / do not use
Use for an existing metric, ordered process and benefits. Not navigation or interactive workflows. No added claims or reordered content.

## Anatomy and variants
Desktop: heading and introduction share a row; metric left, process right; quieter benefits below. Mobile keeps heading → introduction → metric → process → benefits. No cards, variants or animation.

## Behavior and states
Default only. Hover, Focus, Active, Disabled, Loading, Error, Selected and Expanded are inapplicable to static content.

## Content and accessibility
Page supplies unchanged text. Native section/h2/h3, ol process, ul benefits. Presentational numbers and icons aria-hidden. No focusable static elements.

## Local implementation contract
Canonical: `src/components/ui/evidence-section.tsx` and `evidence-section.css`.
API: id, title, description, metric {value,suffix,title,description}, steps {title,description}[], benefits {icon,title,description}[].
Use semantic spacing, colors, borders, font sizes/weights and display metric token only. React with page-supplied icons.

## Asset exclusions
No Red Hat assets, web components, direct upstream tokens or raw visual values.

## Acceptance checklist
- [x] Purpose, states, semantics and responsive behavior specified.
- [ ] Desktop and mobile appearance verified.
- [x] Catalog updated; canonical implementation uses semantic tokens.
