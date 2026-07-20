# Shared component rules

Every public canonical component inherits these rules. A component specification documents only
its semantic purpose, API, states, content, responsive behavior, and exceptions.

## Implementation

- Implement project-owned semantic React + TypeScript components.
- Prefer native HTML semantics; add ARIA only when native semantics cannot express behavior.
- Keep canonical primitives in `src/components/ui/` and site-wide compositions in
  `src/components/site/`.
- Routes cannot copy component classes or inline styles to create a second implementation.
- Do not output `<rh-*>` or install Red Hat assets. Component styles depend on `--ds-color-*`;
  only `tokens.css` may map those semantics to the copied `--rh-color-*` snapshot.
- Existing shadcn/Radix code may provide behavior, but its default visual variants are not
  approved until adapted to the local contract.

## Required states

Cover every applicable state: Default, Hover, Focus visible, Active, Disabled, Loading, Error,
Selected, and Expanded. An unavailable state must define behavior and semantics, not only color.

## Accessibility

- All operations must work by keyboard with focus order matching reading and visual order.
- Focus must remain visible.
- Icon-only controls require an accessible name.
- Do not use color as the only signal.
- Dynamic updates use an appropriate live region without defaulting everything to assertive.
- Touch targets should be at least `44px x 44px` where practical.
- Overlays restore focus to their trigger when closed.

## Content

- Labels are short, unique, and describe the result.
- Do not use context-free labels such as “click here” or “more”.
- Errors state the problem and the recovery action.
- Public UI uses `中科固源 / SOURCEGUARD`; do not introduce legacy brand labels.
- Remove Story labels, build status, internal notes, and implementation explanations.

## Responsive behavior

- Preserve content and task priority on mobile.
- Reflow or stack controls when space is insufficient; do not truncate critical actions.
- Keep overlays inside the viewport.
- Navigation must provide keyboard- and touch-accessible narrow-screen behavior.
- Do not hide an action required to complete the task.

## Asset boundary

- Use only assets approved in `../../brand/brand-assets.md`.
- Use the project's approved icon library; never copy Red Hat icon files.
- Replace upstream example content with real, source-faithful SOURCEGUARD content.
