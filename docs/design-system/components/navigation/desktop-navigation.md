# Desktop Navigation

- Source：`https://ux.redhat.com/elements/navigation-primary/`
- Source element：`rh-navigation-primary` desktop behavior
- Source status：Ready
- Local treatment：Adapted desktop subset
- Local status：Implemented
- Category：Navigation

## Purpose

Desktop Navigation provides persistent access to the highest-level SOURCEGUARD pages and their
related destinations inside the site header.

## Use / do not use

- Use once inside Global Header at desktop widths.
- Use top-level direct links for destinations such as Company Introduction.
- Use a disclosure trigger when a top-level category contains child destinations.
- Do not use as the mobile fallback; Mobile Menu owns narrow-screen navigation.
- Do not use for tabs, filters, in-page actions, or a second navigation bar.

## Anatomy and variants

Required anatomy：`nav` landmark, one top-level list, top-level links or disclosure buttons, one
optional open panel, and a list of canonical Links inside that panel.

There are no visual variants. The local implementation supports:

- Direct item：navigates immediately through canonical Link.
- Disclosure item：opens a child panel through an internal native button.
- One-column panel：up to six child links.
- Two-column panel：more than six child links. The local subset never exceeds two columns.

Logo, contact link, primary marketing action, Mobile Menu, and the sticky header surface belong to
Global Header, not Desktop Navigation.

## Behavior and states

- Default：top-level labels use the approved navigation text Token.
- Hover：a collapsed disclosure receives the Red Hat gray accent and opens for pointer users.
- Expanded：only one panel may be open; its trigger receives a `4px` Red Hat brand-red accent and
  the caret rotates.
- Current page：the matching direct item or parent category uses the active red hierarchy and
  `aria-current="page"` is applied to the exact destination.
- Focus visible：the global blue focus outline remains visible; focus alone does not open a panel.
- Active：a trigger toggles with native Button Enter/Space behavior; links activate with Enter.
- Close：selecting the trigger again, following a child link, clicking outside, moving focus out,
  or pressing Escape closes the panel.
- Escape returns focus to the disclosure trigger that owned the open panel.

The component is rendered only at the desktop breakpoint by Global Header. Panel width stays
inside the viewport and child labels may wrap; no required destination is truncated or hidden.

## Content

- Use `src/content/navigation.ts` as the only navigation data source.
- Keep no more than five top-level items and keep each top-level label within 20 characters.
- Child labels describe their destination; do not use “更多” or “点击这里”.
- Preserve the existing source-faithful `.html` destinations until their route migration is
  explicitly approved.
- Optional descriptions must clarify the destination and must not repeat the label.

## Accessibility

- Uses a named native `nav` landmark and semantic unordered lists.
- Disclosure triggers are native `<button type="button">` elements with `aria-expanded` and
  `aria-controls`; they are internal navigation controls, not a new public Button variant.
- Child destinations remain native anchors through canonical Link.
- The website disclosure-navigation pattern uses normal Tab order rather than ARIA menu roles or
  custom arrow-key navigation.
- `Tab` and `Shift + Tab` follow visual order. When open, child Links follow their trigger in DOM
  order and the panel closes after focus leaves its item.
- Caret icons come from the approved Lucide library and are hidden from assistive technology.
- Every trigger and destination maintains at least the project `44px` control target where
  practical.

## Local implementation contract

- Canonical path：`src/components/site/DesktopNavigation.tsx`
- Public API：`items: NavGroup[]`; `currentPath: string`; optional `ariaLabel`.
- Default values：`ariaLabel="主要导航"`; no panel open.
- Tokens：navigation and Link colors; spacing, typography, radius, border, shadow, size, z-index,
  motion, and focus Tokens.
- Dependencies：canonical Link, React state/effects, Lucide `ChevronDown`, and
  `src/content/navigation.ts` types.
- Owning composition：Global Header supplies filtered navigation items and router pathname.
- Forbidden：`<rh-navigation-primary>`, `role="menu"`, copied Red Hat icons or assets, raw visual
  values, duplicated navigation data, multiple open panels, or route-level dropdown code.

## Asset exclusions

Do not copy Red Hat Logo, navigation screenshots, event promotions, cross-domain content, fonts,
icons, or example labels. Use SOURCEGUARD navigation data and the approved project icon library.

## Acceptance checklist

- [x] Purpose and ownership boundaries are clear.
- [x] Default, Hover, Focus visible, Active, Expanded, Current, and closed states are implemented.
- [x] Native keyboard, Escape, focus return, and screen-reader semantics are implemented.
- [x] Desktop viewport containment and text wrapping are implemented.
- [x] Only approved Tokens, canonical Link, and project navigation data are used.
- [x] Catalog and source-coverage statuses are updated.
