# Component catalog and routing

The repository currently contains many shadcn/Radix-based files under `src/components/ui/`.
They are technical primitives, not automatically approved SOURCEGUARD components.

## Status rule

Only a component marked `Implemented` in both this catalog and `SOURCE-COVERAGE.md` may be
treated as canonical for new page work. `Existing unreviewed` means it must be reviewed and
adapted before reuse in new public UI.

## Required reading

1. Read `_shared/component-rules.md`.
2. Find the component in the table below.
3. If its status is not `Implemented`, do not improvise a page-level version.
4. Create its spec from `../templates/component-spec-template.md`, adapt the existing React
   implementation, and then update status.

## Phase 1 foundation components

| Component       | Canonical path                          | Local spec  | Status              |
| --------------- | --------------------------------------- | ----------- | ------------------- |
| Button          | `src/components/ui/button.tsx`          | Not created | Existing unreviewed |
| Button group    | To be confirmed                         | Not created | Planned             |
| Call to action  | To be confirmed                         | Not created | Planned             |
| Card            | `src/components/ui/card.tsx`            | Not created | Existing unreviewed |
| Surface         | To be confirmed                         | Not created | Planned             |
| Navigation menu | `src/components/ui/navigation-menu.tsx` | Not created | Existing unreviewed |
| Global header   | `src/components/site/GlobalHeader.tsx`  | Not created | Existing unreviewed |
| Mobile menu     | `src/components/site/MobileMenu.tsx`    | Not created | Existing unreviewed |
| Footer          | `src/components/site/GlobalFooter.tsx`  | Not created | Existing unreviewed |
| Breadcrumb      | `src/components/ui/breadcrumb.tsx`      | Not created | Existing unreviewed |
| Skip link       | To be confirmed                         | Not created | Planned             |

No component-specific Markdown files are linked yet because none has completed the local
contract. This is intentional and prevents Lovable from chasing nonexistent specifications.

## Phase 2 candidates

Accordion, Alert, Badge, Dialog, Disclosure, Form controls, Pagination, Popover, Select,
Skeleton, Tabs, Table, Tag, Tile, Tooltip, and only the media components required by actual
page content.

## Selection guidance

- Trigger an in-place action：Button.
- Navigate to another URL：Link or Call to action.
- Group related actions：Button group; keep one clear Primary.
- Group mixed content with optional actions：Card.
- Provide background context without creating a card：Surface.
- Expand one small region：Disclosure; multiple sections：Accordion; mutually exclusive views：Tabs.
- Block the user for a required decision：Dialog; supplementary non-blocking content：Popover;
  short nonessential help：Tooltip.
- Use Table for comparable structured data, never for page layout.

## Updating this catalog

When a component is implemented, add the spec path, change status to `Implemented`, and update
`../SOURCE-COVERAGE.md` in the same commit.
