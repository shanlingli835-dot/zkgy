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

Source-faithful rebuild of the official 中科固源 / SOURCEGUARD website.

- HeroVideo owns fluid sizing and motion-aware playback.
- `/contact.html` uses TrialRequestPage and canonical TrialField; keep CTA URLs and never fake submission delivery.

Before implementing anything, follow `docs/bmad/` (prd, DESIGN, EXPERIENCE,
ARCHITECTURE-SPINE, epics) and `docs/source-site/` (page-inventory, urls).

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
Red Hat supplies color and UI guidance, never public branding.

## Current Homepage Migration Source

- The user-approved homepage source is `public/source-site/index.html`; its stylesheet,
  scripts, product pages and image assets live under `public/source-site/`.
- The canonical `/` route renders that source through `SourceHomeEmbed` so Lovable displays the
  approved page without visually regenerating it.
- When the user requests a homepage edit, modify the files under `public/source-site/` unless the
  request explicitly asks to refactor the page into React components.
- Do not restore the earlier generated homepage from git history or replace the approved source
  with a new design direction.
- Overlap homepage product panels in one grid track; inactive panels stay invisible and inert to prevent tab shifts. Share `.pt-panel__title` wrapping without per-product breaks for consistent sizing.
- Keep image fallbacks; use canonical EvidenceSection to separate data and layout.

Before creating or modifying UI: read `docs/design-system/README.md` for adoption
status, only the task-relevant `foundations/` files, `components/README.md` plus
`components/_shared/component-rules.md` and the relevant component specs (a pattern
only when several components combine). Reuse the canonical implementation in
`src/components/ui/` and semantic tokens from `src/styles/tokens.css`; never duplicate
either in routes or business components.

### Mandatory boundaries

- Do not use or copy Red Hat logos, brand assets, images, icon files, fonts, or
  `rh-*` Web Components.
- `src/styles/red-hat-colors.css` is the only approved direct Red Hat copy. It must
  preserve the complete `@rhds/tokens@3.1.0` color snapshot without local edits.
- Components and routes must use `--ds-color-*`; direct `--rh-color-*` consumption is
  limited to the semantic mappings in `src/styles/tokens.css`.
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

If the system does not cover a requirement: try an approved component composition
first, never a temporary style in a route. When a new component or variant is
necessary, write its spec from `docs/design-system/templates/component-spec-template.md`
before implementing or adapting the canonical component.

### Completion checks

- Confirm desktop and mobile behavior without horizontal overflow or reordered tasks.
- Confirm applicable Default, Hover, Focus visible, Active, Disabled, Loading,
  Error, Selected, and Expanded states.
- Confirm labels, errors, dialog titles, and icon-only controls have correct
  accessible names and relationships.
- Remove internal notes, story labels, placeholder copy, and implementation status
  messages from public pages.
