# Global Header

- Source：`https://ux.redhat.com/elements/navigation-primary/`
- Source element：`rh-navigation-primary` composition and responsive behavior
- Source status：Ready
- Local treatment：Adapted site composition
- Local status：Implemented
- Category：Navigation

## Purpose

Global Header gives every SOURCEGUARD page one persistent brand entry, primary navigation system,
and responsive route to the site's highest-priority destinations.

## Use / do not use

- Use exactly once in the `header` slot supplied by SiteShell.
- Use Desktop Navigation at the approved desktop breakpoint and Mobile Menu below it.
- Use the approved SOURCEGUARD Logo as the home destination.
- Do not create a page-specific header, second primary navigation bar, or route-level hamburger.
- Do not use Global Header for in-page tabs, filters, secondary navigation, or campaign artwork.

## Anatomy and variants

Required anatomy：sticky SiteShell header host, light surface, approved brand-home Link, Desktop
Navigation, desktop utility Links, icon-only mobile menu Button, and Mobile Menu.

There are no public variants. SiteShell supplies the native `header` landmark; Global Header owns
only the persistent content and responsive bar inside that landmark.

The desktop utility area contains the Contact navigation Link and one Free Trial Standalone Link.
Until Call to action is implemented, Free Trial must remain canonical Link styling and must not
recreate a red Button or CTA container.

## Behavior and states

- Default：the SiteShell header host keeps the light surface sticky at the top of every page with
  one subtle bottom boundary.
- Hover, Focus visible, and Active：Brand, utility Links, navigation items, and menu Button inherit
  their canonical component states without movement or layout shift.
- Current page：Desktop Navigation and Mobile Menu expose the current destination; the brand Link
  remains a stable home entry.
- Desktop：at `1024px` and wider, Desktop Navigation and utility Links are shown; the mobile Button
  is hidden.
- Mobile and tablet：below `1024px`, desktop navigation and utility Links are hidden; the menu
  Button is shown and exposes Mobile Menu.
- Expanded：the mobile Button uses `aria-expanded="true"`, changes its accessible label to
  “关闭菜单”, and displays the approved close icon.
- Route change：any open Mobile Menu closes. Mobile Menu also owns Escape, backdrop, focus trap,
  scroll lock, breakpoint cleanup, and focus return.

Page gutters change only at approved mobile, tablet, and desktop breakpoints. The bar preserves
Logo proportions, keeps all visible controls at least `44px` high, and must not cause horizontal
overflow at enlarged text or narrow widths.

## Content

- Use `src/content/navigation.ts` as the only source for labels and destinations.
- Preserve `中科固源 / SOURCEGUARD` as the official brand and preserve source-faithful `.html`
  destinations until their route migration is approved.
- The Logo home Link uses the accessible name `中科固源 首页`.
- Mobile Button labels are action-specific：`打开菜单` and `关闭菜单`.
- Do not expose Story numbers, build status, implementation terms, “更多”, or “点击这里”.

## Accessibility

- SiteShell supplies the single native `header` landmark; Global Header must not nest another
  `header` landmark.
- The Logo is decorative inside a labelled canonical Link, preventing duplicate accessible text.
- Desktop reading and focus order：brand home, primary navigation, Contact, Free Trial.
- Mobile reading and focus order：brand home, menu Button, then Mobile Menu content when open.
- The icon-only menu control is canonical Button with `aria-label`, `aria-expanded`, and
  `aria-controls`; Menu and X icons are decorative and come from Lucide.
- Links use native anchor semantics through canonical Link. Header navigation does not use
  `role="menu"` or custom arrow-key behavior.
- Sticky positioning must not cover the SiteShell skip link or remove visible focus indicators.

## Local implementation contract

- Canonical path：`src/components/site/GlobalHeader.tsx`
- Public API：none; reads router pathname and approved navigation data internally.
- Default values：Mobile Menu closed; desktop layout activates at the approved `lg` breakpoint.
- Tokens：canvas/surface, text, border, Link/action, spacing, container, header and Logo size,
  z-index, typography, focus, and motion Tokens.
- Dependencies：canonical Button and Link, BrandLogo, Desktop Navigation, Mobile Menu, TanStack
  Router, React state/effects, Lucide Menu and X, and `src/content/navigation.ts`.
- Owning composition：SiteShell renders Global Header in its sticky `header` slot and supplies the
  native landmark and navigation stacking layer.
- Forbidden：`<rh-navigation-primary>`, Red Hat Logo or icons, plain anchors, navigation rendered
  as Button, duplicated navigation data, raw visual values, inline responsive CSS, unapproved CTA
  styling, nested header landmarks, or page-level header forks.

## Asset exclusions

Do not copy Red Hat Logo, Summit promotion, screenshots, fonts, icons, example labels, or
cross-domain content. Use only the approved SOURCEGUARD Logo and project icon library.

## Acceptance checklist

- [x] Purpose and composition ownership are clear.
- [x] Default, Hover, Focus visible, Active, Expanded, Current, and route-change states are
      implemented through canonical children.
- [x] Keyboard order, accessible labels, navigation landmarks, and focus behavior are implemented.
- [x] Desktop, tablet, mobile, sticky, touch-target, text wrapping, and overflow behavior are
      implemented.
- [x] Only approved Tokens, assets, canonical components, and navigation data are used.
- [x] Catalog and source-coverage statuses are updated.
