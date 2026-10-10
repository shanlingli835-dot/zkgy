# Solution showcase media extension

- Source: project-owned existing site composition, no upstream imagery.
- Local status: Existing unreviewed; this extension does not approve the whole card.

## Purpose and use

Replace solution-card placeholders with category illustrations without changing content, order, dimensions or interactions. Do not present generated illustrations as real product evidence.

## Anatomy and implementation

`ShowcaseCard.image?: { src: string; alt: string }` supplies optional route-owned media to `src/components/site/SolutionShowcaseGrid.tsx`. Omission preserves the existing placeholder on unrelated pages. No duplicated route styling or new tokens.

## Behavior and states

Lazy-loaded centered cover images have explicit intrinsic dimensions. Preserve 230px desktop / 260px mobile height, existing radius, hover/focus scale and expansion, and reduced-motion handling. No new actions or loading, error, disabled, selected or expanded-control states.

## Content and accessibility

Chinese alternative text describes the illustration, not an actual device photograph. Media is noninteractive; keyboard focus and reading order are unchanged. No Red Hat imagery, logos, fonts or components.

## Acceptance

Five images load in category order on the automotive page; other pages retain existing appearance. Desktop and mobile preserve copy, dimensions, focus and no horizontal overflow.