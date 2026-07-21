# Page ending: Marketing CTA and Footer

状态：Implemented

## Purpose

The Page ending pattern keeps the final action and global site information identical across public
pages. It is the only approved composition after a page's last content section.

## Required order

1. Last page-specific content section.
2. One `MarketingCtaBand` when the page has an approved final action.
3. One `GlobalFooter` supplied through the `SiteShell` footer slot.

Do not insert a spacer, alternate CTA, newsletter form, or page-specific footer between these
parts unless a new pattern is specified first.

## Canonical implementation

```tsx
import { GlobalFooter } from "@/components/site/GlobalFooter";
import { MarketingCtaBand } from "@/components/site/MarketingCtaBand";
import { SiteShell } from "@/components/site/SiteShell";

export function ExamplePage() {
  return (
    <SiteShell footer={<GlobalFooter />}>
      <article>
        {/* Page-specific modules */}
        <MarketingCtaBand
          title="准备好为您的组织解锁安全能力了吗？"
          description="马上申请 30 天免费试用"
          action={{ label: "免费试用", href: "/contact.html" }}
        />
      </article>
    </SiteShell>
  );
}
```

If a typed page record already contains `bottomCta`, pass that object to `MarketingCtaBand` rather
than duplicating its copy in JSX.

## Component ownership

| Responsibility                                           | Canonical owner             | Page may provide                                              |
| -------------------------------------------------------- | --------------------------- | ------------------------------------------------------------- |
| CTA band structure, gradient, spacing, responsive layout | `MarketingCtaBand`          | Title, optional description, one action label and destination |
| CTA link states and navigation semantics                 | `CallToAction`              | Approved destination                                          |
| Footer structure, navigation, brand, legal presentation  | `GlobalFooter`              | Nothing; it reads shared navigation data                      |
| Footer destinations and labels                           | `src/content/navigation.ts` | Nothing; update shared data once                              |
| Header/main/footer landmarks                             | `SiteShell`                 | Page content in the main slot                                 |

## Responsive and accessibility requirements

- Desktop CTA copy and action share one row; mobile stacks them in the same reading order.
- Footer changes column count responsively but does not create a page-specific mobile footer.
- The page contains one main landmark, one footer landmark, and one final-action region.
- All destinations retain visible focus and canonical Link or Call to action semantics.
- Neither component may cause horizontal scrolling at supported breakpoints.

## Content and route rules

- CTA content must be source-approved for the page; use one primary task only.
- Internal destinations preserve the public `.html` route where applicable.
- Footer content is global. Change `src/content/navigation.ts` and the Footer specification in the
  same commit when a global destination changes.
- Do not publish placeholder contacts, legal labels containing “待确认”, or implementation notes.

## Required reading for future pages

1. `components/actions/marketing-cta-band.md`
2. `components/navigation/footer.md`
3. `components/actions/call-to-action.md`
4. This pattern

## Acceptance checklist

- [x] CTA and Footer order is explicit.
- [x] Canonical imports and a copy-ready implementation example are provided.
- [x] Page-owned and component-owned responsibilities are separated.
- [x] Desktop, mobile, keyboard, and landmark requirements are documented.
- [x] Wisdom validates the pattern at `/wisdom.html`.
