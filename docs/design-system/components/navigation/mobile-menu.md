# Mobile Menu

- Source：`https://ux.redhat.com/elements/navigation-primary/`
- Related source：`https://ux.redhat.com/elements/disclosure/`
- Source element：`rh-navigation-primary` responsive behavior and disclosure interaction
- Source status：Ready
- Local treatment：Adapted mobile subset
- Local status：Implemented
- Category：Navigation

## Purpose

Mobile Menu gives narrow-screen users complete access to SOURCEGUARD primary navigation without
changing the desktop information hierarchy or destination order.

## Use / do not use

- Use once through Global Header below the approved desktop breakpoint.
- Use a disclosure trigger for a top-level category with child destinations.
- Use a direct canonical Link when a top-level item has its own destination.
- Do not use for desktop dropdowns, in-page accordions, filters, or contextual action menus.
- Do not render a second mobile navigation or duplicate navigation data in a route.

## Anatomy and variants

Required anatomy：modal navigation layer, visible title, internal close Button, named `nav`
landmark, one top-level list, disclosure triggers, canonical child Links, and an optional primary
navigation Link.

There are no public visual variants. The local implementation supports:

- Direct item：navigates immediately.
- Disclosure item：reveals one child list below its trigger.
- Optional primary action：uses canonical Standalone Link until Call to action is implemented; it
  must not recreate CTA or Button styling.

Logo, external hamburger trigger, sticky header surface, and desktop layout belong to Global
Header. The mobile menu owns its modal layer, close control, navigation content, and focus cycle.

## Behavior and states

- Closed：not present in the accessibility tree and no internal state is retained.
- Open：appears below Global Header, locks page scrolling, and moves focus to its close Button.
- Default：all child groups are collapsed and the source navigation order is preserved.
- Hover：interactive rows use the approved subtle action surface without shifting layout.
- Focus visible：the global blue focus outline remains visible on every control and Link.
- Active：native Button and Link activation behavior is preserved.
- Expanded：only one child group may be open; its caret points upward and the trigger has the
  active red accent.
- Current page：the exact destination receives `aria-current="page"`, active color, weight, and
  left accent; its parent category also receives the active hierarchy.
- Close：the internal close Button, backdrop, Escape, following any destination, or crossing into
  the desktop breakpoint closes the layer. Closing resets all disclosure state and returns focus
  to the original trigger when it remains visible.

The owning Header exposes Mobile Menu below `1024px`. Content scrolls vertically inside the
available viewport; labels wrap and required links are never truncated or hidden.

## Content

- Use `src/content/navigation.ts` as the only data source and preserve its item order.
- Keep top-level labels within 20 characters and disclosure labels within 50 characters.
- Use destination-specific child labels; do not use “更多”, “点击这里”, or implementation terms.
- Preserve approved `.html` destinations until their route migration is explicitly approved.
- Keep the visible title concise and localized; default：`移动端导航`.

## Accessibility

- Uses `role="dialog"`, `aria-modal="true"`, a visible labelled title, and a named native `nav`.
- Moves focus to the internal close Button on open, traps Tab and Shift + Tab inside the layer,
  and restores focus to the opening control on close.
- Escape closes from any focused descendant. Body scrolling is restored during cleanup.
- Disclosure triggers are native Buttons with `aria-expanded` and `aria-controls`.
- Links remain native anchors through canonical Link; website navigation does not use
  `role="menu"`, `aria-haspopup`, or custom arrow-key navigation.
- Close is an icon-only canonical Button with an accessible name. Chevron and close icons come
  from the approved Lucide library and remain decorative to assistive technology.
- Rows maintain at least the project `44px` touch target and logical DOM order.

## Local implementation contract

- Canonical path：`src/components/site/MobileMenu.tsx`
- Public API：`id`; `items: NavGroup[]`; `open`; `pathname`; `onClose`; optional `ariaLabel` and
  `primaryAction: NavLink`.
- Default values：`ariaLabel="移动端导航"`; all groups collapsed; no primary action unless
  supplied.
- Tokens：surface, overlay, navigation, Link, action, text, border, spacing, typography, size,
  z-index, and motion Tokens.
- Dependencies：canonical Button and Link, React state/effects, Lucide icons, and
  `src/content/navigation.ts` types.
- Owning composition：Global Header supplies open state, router pathname, navigation items, and
  the optional primary navigation destination.
- Forbidden：`<rh-navigation-primary>`, copied Red Hat code or assets, plain route anchors,
  Button for navigation, direct `--rh-color-*`, raw visual values, duplicated navigation data,
  multiple open groups, missing focus return, or a route-level mobile drawer.

## Asset exclusions

Do not copy Red Hat Logo, navigation screenshots, event promotions, cross-domain content, fonts,
icons, or example labels. Use SOURCEGUARD navigation data and the approved local icon library.

## Acceptance checklist

- [x] Purpose and ownership boundaries are clear.
- [x] Closed, Open, Hover, Focus visible, Active, Expanded, and Current states are implemented.
- [x] Keyboard trap, Escape, focus return, screen-reader semantics, and scroll cleanup are
      implemented.
- [x] Narrow-screen viewport containment, touch targets, scrolling, and text wrapping are
      implemented.
- [x] Only approved Tokens, canonical Button/Link, and project navigation data are used.
- [x] Catalog and source-coverage statuses are updated.
