# Product detail pattern

状态：Implemented

## Purpose

The Product detail pattern gives the six security products one comparable structure while keeping
each product's source-approved positioning, capabilities, proof, integration content, and CTA.

## Required composition

1. SiteShell with one Global Header and one Footer.
2. Product Hero with product name/positioning, one Primary CTA, and a source-faithful process or
   product visual.
3. Why use/why choose section.
4. Product capabilities section.
5. Product advantages section.
6. Product-specific workflow, protocol, or proof section when present in the source inventory.
7. DevSecOps/integration section.
8. Compact Bottom CTA repeating the same page-level primary task in the approved homepage
   marketing-band treatment.

Module order, copy, CTA, metadata, and route come from a typed `ProductPageRecord`. The template
must not hardcode one product's content.

## Hierarchy and layout

- Use one `h1` in the Hero; section headings follow in order.
- Prefer explanatory rows, lists, and process blocks over a uniform card wall.
- The Hero is the only large inverse section. Bottom CTA uses the compact approved homepage
  marketing band; do not reuse that gradient elsewhere or alternate sections mechanically.
- Use semantic surface, border, type, spacing, and action Tokens only.
- Product differentiation comes from content and process structure, not new page colors.

## Actions and links

- The page has one primary task, normally the source-approved “免费试用” or “联系我们”.
- Prominent destinations use canonical Call to action; ordinary destinations use Link.
- CTA text and `.html` destination remain source-faithful.
- One action area cannot contain multiple Primary CTAs.

## Responsive behavior

- Start mobile-first and preserve source module order.
- Text/visual and text/list splits become one column below the approved desktop breakpoint.
- Capability and integration lists may use two columns; mobile is always one column.
- Primary CTA becomes full width on narrow screens; headings wrap without shrinking below the
  approved type scale.
- No module may cause horizontal scrolling.

## Accessibility and states

- SiteShell Skip Link targets the single main landmark.
- Section headings label their regions; ordered processes use native lists.
- CTA Default, Hover, Focus visible, and Active come from the canonical component.
- Decorative process numbers are hidden from assistive technology when they add no meaning.
- Motion is optional, explains state only, and respects reduced motion.

## Public-copy boundary

- Every claim must trace to `docs/source-site/page-inventory.md` or another approved product record.
- Do not add customers, metrics, certifications, capabilities, or integration claims.
- Public copy uses `中科固源 / SOURCEGUARD`; legacy company labels stay in migration records only.

## Local implementation contract

- Template：`src/components/site/ProductTemplate.tsx`
- Final action：`src/components/site/MarketingCtaBand.tsx`
- Layout styles：`src/components/site/product-template.css`
- Data contract：`src/content/pages/product.ts`
- Page records：`src/content/pages/*.ts`
- Route composition：`SiteShell + GlobalHeader + ProductTemplate + GlobalFooter`

## Acceptance checklist

- [x] Content order, primary task, and component ownership are defined.
- [x] Desktop and mobile behavior are implemented without page-level visual values.
- [x] Keyboard order, headings, lists, focus, and CTA semantics are preserved.
- [x] Product copy, SEO, links, and module order come from typed records.
- [x] Wisdom page validates the pattern at `/wisdom.html`.
