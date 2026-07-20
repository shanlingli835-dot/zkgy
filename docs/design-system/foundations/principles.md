# Design principles

状态：Target specification; implementation migration pending.

## Clarity first

- Define one primary task for each page before choosing its visual hierarchy.
- Explain what users can do and what happens next.
- Do not substitute decoration for structure or use color as the only signal.

## System consistency

- The same action uses the same component, hierarchy, and content pattern.
- Visual values come from semantic Tokens; routes do not define raw visual values.
- Do not add a variant or near-duplicate when an approved component can express the need.

## Restrained hierarchy

- Each page has one clear primary action.
- Use type, whitespace, alignment, and content order before borders, shadows, or cards.
- A Card is a content-grouping tool, not the default layout container.
- Avoid slide-deck-like card walls and mechanical light/dark section alternation.

## Accessibility by default

- Keyboard users can complete the same tasks as pointer users.
- Focus remains visible.
- Labels, errors, dialog titles, and icon-only controls have correct semantic relationships.
- Motion respects `prefers-reduced-motion`.

## Responsive task order

- Mobile may change layout but not information or action priority.
- Action areas may stack on narrow screens while the Primary remains clear.
- Touch targets should be at least `44px x 44px` where practical.

## Brand boundary

- The official brand is `中科固源 / SOURCEGUARD`.
- Use only approved brand assets documented in `../brand/brand-assets.md`.
- Red Hat is the approved complete color-token, behavior, and accessibility source; it is not
  the public brand or asset source.
- Future brand evolution should primarily change Tokens and approved assets, not fork components.

## Prohibited patterns

- Public UI that exposes Story numbers, build status, implementation notes, or placeholders.
- Page-level HEX/RGB values, arbitrary spacing, radii, shadows, or button variants.
- Multiple Primary or Danger actions in the same action area.
- Buttons used for navigation or text links used for submit/save actions.
- Status communicated only by red/green color.
- Decorative gradients, glass effects, glow, oversaturated accents, or repeated cards added only
  to make a page appear richer.
