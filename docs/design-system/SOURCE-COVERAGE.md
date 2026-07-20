# Red Hat source coverage

This inventory prevents missing upstream references and prevents upstream brand assets or
implementation APIs from being treated as local components.

## Source snapshot

- Upstream website version：Red Hat Design System `v4.2.0`
- Official elements：<https://ux.redhat.com/elements/>
- Official repository：<https://github.com/RedHat-UX/red-hat-design-system>
- Upstream color package：`@rhds/tokens@3.1.0`
- Local design-system version：`0.4.0-red-hat-colors`

## Local status terms

| Status              | Meaning                                                        | May Lovable use it in pages? |
| ------------------- | -------------------------------------------------------------- | ---------------------------- |
| Implemented         | Spec, canonical component, states, and checks completed        | Yes                          |
| Existing unreviewed | Code exists but has not passed the local contract              | No                           |
| Planned             | Relevant to future pages but not specified or implemented      | No                           |
| Reference only      | Upstream behavior may inform another component                 | No                           |
| Internal            | Only used inside another canonical component                   | No direct use                |
| Excluded            | Brand, asset, API, or domain-specific item outside local scope | No                           |

## Upstream inventory and local treatment

The inventory records the complete upstream source set. It does not claim that all items are
needed for the SOURCEGUARD website.

### Actions and links

| Element        | Local status        | Priority |
| -------------- | ------------------- | -------- |
| Back to top    | Planned             | Phase 2  |
| Button group   | Planned             | Phase 1  |
| Button         | Existing unreviewed | Phase 1  |
| Call to action | Planned             | Phase 1  |
| Menu dropdown  | Existing unreviewed | Phase 1  |
| Skip link      | Planned             | Phase 1  |

### Data and emphasis

| Element    | Local status        | Priority    |
| ---------- | ------------------- | ----------- |
| Badge      | Existing unreviewed | Phase 2     |
| Readtime   | Planned             | As needed   |
| Table      | Existing unreviewed | Phase 2     |
| Tag        | Planned             | Phase 2     |
| Timestamp  | Planned             | As needed   |
| Blockquote | Planned             | As needed   |
| Footnote   | Reference only      | Not adopted |
| Statistic  | Planned             | Phase 2     |

### Imagery and media

| Element      | Local status        | Priority                                  |
| ------------ | ------------------- | ----------------------------------------- |
| Avatar       | Existing unreviewed | As needed                                 |
| Icon         | Reference only      | Phase 1 rules; use approved local library |
| Audio player | Planned             | As needed                                 |
| Video embed  | Planned             | As needed                                 |

### Navigation

| Element              | Local status        | Priority  |
| -------------------- | ------------------- | --------- |
| Breadcrumb           | Existing unreviewed | Phase 1   |
| Footer               | Existing unreviewed | Phase 1   |
| Jump links           | Planned             | Phase 2   |
| Navigation link      | Existing unreviewed | Phase 1   |
| Navigation primary   | Existing unreviewed | Phase 1   |
| Navigation secondary | Planned             | Phase 2   |
| Navigation vertical  | Planned             | As needed |
| Pagination           | Existing unreviewed | Phase 2   |
| Progress stepper     | Planned             | As needed |
| Subnavigation        | Planned             | Phase 2   |

### Overlays and selection

| Element         | Local status        | Priority   |
| --------------- | ------------------- | ---------- |
| Dialog          | Existing unreviewed | Phase 2    |
| Popover         | Existing unreviewed | Phase 2    |
| Tooltip         | Existing unreviewed | Phase 2    |
| Chip            | Planned             | As needed  |
| Scheme dropdown | Excluded            | Light-only |
| Scheme toggle   | Excluded            | Light-only |
| Select          | Existing unreviewed | Phase 2    |
| Switch          | Existing unreviewed | As needed  |

### Status and structure

| Element      | Local status        | Priority                             |
| ------------ | ------------------- | ------------------------------------ |
| Alert        | Existing unreviewed | Phase 2                              |
| Health index | Excluded            | Upstream domain-specific             |
| Site status  | Planned             | Only if business content requires it |
| Skeleton     | Existing unreviewed | Phase 2                              |
| Spinner      | Planned             | Phase 2                              |
| Accordion    | Existing unreviewed | Phase 2                              |
| Announcement | Planned             | As needed                            |
| Card         | Existing unreviewed | Phase 1                              |
| Code block   | Planned             | As needed                            |
| Disclosure   | Existing unreviewed | Phase 2                              |
| Surface      | Planned             | Phase 1                              |
| Tabs         | Existing unreviewed | Phase 2                              |
| Tile         | Planned             | Phase 2                              |

### Internal source item

| Element | Local status | Priority                              |
| ------- | ------------ | ------------------------------------- |
| Menu    | Internal     | Only through approved menu components |

## Explicit exclusions

- Red Hat Logo, brand imagery, example screenshots, fonts, icons, and legal copy.
- Red Hat non-color Token categories, `<rh-*>` elements, and RH Elements package APIs.
- Dark theme and scheme switching unless explicitly requested later.
- Components that do not serve an identified SOURCEGUARD page requirement.

## Approved color exception

- `src/styles/red-hat-colors.css` directly preserves all 364 original `--rh-color-*` Token
  declarations from `@rhds/tokens@3.1.0`: 209 HEX declarations, 77 HSL channel declarations,
  77 RGB channel declarations, and 1 computed color declaration.
- The upstream MIT notice is preserved in `upstream/RED-HAT-TOKENS-LICENSE.md`.
- The snapshot contains 75 distinct HEX values and includes both `on-light` and `on-dark`
  upstream declarations; importing them does not activate a local Dark theme.
- Application code uses only `--ds-color-*`; `src/styles/tokens.css` owns the semantic mapping.

## Adoption rule

An item moves to `Implemented` only when all are true:

1. A local component specification exists.
2. The canonical React component exists at its documented path.
3. Applicable states, responsive behavior, and accessibility are verified.
4. It uses the single approved Token layer.
5. `components/README.md` and this file are updated in the same change.
