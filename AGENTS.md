<!-- LOVABLE:BEGIN -->

> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

<!-- LOVABLE:END -->

# Project Instructions

This project is a source-faithful UI rebuild for the official 中科固源 / SOURCEGUARD website.

Before implementing anything, follow:

- docs/bmad/prd.md
- docs/bmad/DESIGN.md
- docs/bmad/EXPERIENCE.md
- docs/bmad/ARCHITECTURE-SPINE.md
- docs/bmad/epics.md
- docs/source-site/page-inventory.md
- docs/source-site/urls.md

Rules:

- Do not add new business content.
- Do not change product positioning.
- Do not change CTA destinations.
- Preserve old .html routes.
- Preserve navigation, footer, SEO, source content meaning, and module order.
- Implement one Story at a time from docs/bmad/epics.md.
- After each Story, check desktop, mobile, links, CTA, SEO, and content completeness.

Legacy names such as `ZKSC` or `中科数测` are migration findings, not the current
public brand. Do not introduce them into new public-facing copy. Preserve source
meaning while normalizing the visible brand to `中科固源 / SOURCEGUARD`.

## Design System Instructions

`docs/design-system/` is the single routing source for UI design and implementation.
Red Hat Design System is an upstream reference for component hierarchy, behavior,
content guidance, responsive rules, and accessibility only. It is not the site brand.

Before creating or modifying UI:

1. Read `docs/design-system/README.md` and confirm the current adoption status.
2. Read only the task-relevant files under `docs/design-system/foundations/`.
3. Open `docs/design-system/components/README.md` to locate applicable components.
4. Read `components/_shared/component-rules.md` and the relevant component specs.
5. Read a pattern only when the task combines multiple components.
6. Reuse the canonical implementation in `src/components/ui/`; do not duplicate it
   in routes or business components.
7. Use semantic tokens from `src/styles/tokens.css`; do not create visual values in
   routes, business components, or one-off utility classes.

### Mandatory boundaries

- Do not use or copy Red Hat logos, brand assets, images, icon files, fonts,
  `--rh-*` tokens, or `rh-*` Web Components.
- Use only approved 中科固源 / SOURCEGUARD assets documented in
  `docs/design-system/brand/brand-assets.md`.
- Do not add one-off colors, spacing, radii, shadows, gradients, glass effects,
  glow effects, or new button variants in page code.
- Default to Light theme only. Do not create a Dark theme unless explicitly requested.
- A page has one clear primary action. One action area cannot contain multiple
  Primary or multiple Danger actions.
- Navigation uses links. Submit, create, save, close, and other in-place actions use
  buttons.
- Icon-only controls require accessible names. All interactive controls require
  keyboard support and visible focus.
- Do not treat `Planned`, `Reference only`, `Internal`, or `Existing unreviewed`
  components as approved page components.
- When token names or a component API changes, update its Markdown specification in
  the same change.

### Specification gaps

If the current system does not cover a requirement:

1. Try an approved component composition first.
2. Do not invent a temporary style in a route.
3. If a new component or variant is necessary, create its specification from
   `docs/design-system/templates/component-spec-template.md`.
4. Implement or adapt the canonical component only after the specification exists.

### Completion checks

- Confirm desktop and mobile behavior without horizontal overflow or reordered tasks.
- Confirm applicable Default, Hover, Focus visible, Active, Disabled, Loading,
  Error, Selected, and Expanded states.
- Confirm labels, errors, dialog titles, and icon-only controls have correct
  accessible names and relationships.
- Remove internal notes, story labels, placeholder copy, and implementation status
  messages from public pages.
