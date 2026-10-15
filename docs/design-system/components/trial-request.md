# Trial request

- Source：User-approved trial page reference
- Source element：Native form composition
- Source status：Local
- Local treatment：Adapted
- Local status：Implemented
- Category：Forms / site composition

## Purpose

Provide the explicitly requested demo/trial application page at the existing `/contact.html` CTA destination. Since 2026-10-14 the page content follows the user's draft (`截屏2026-10-14_17.52.51.png`): “预约产品演示”.

## Use / do not use

- Use for the logo-only, light-theme demo booking page.
- Do not reuse the standard navigation, footer, dark hero, or marketing cards here.
- Do not claim successful delivery without a connected submission service.

## Anatomy and variants

Logo-only white header with the logo left-aligned inside the standard page container, off-white page carrying a small brand-colour glow confined to the bottom-right corner (about 3% of the canvas). Left column: small uppercase eyebrow “PRODUCT DEMO”, large heading “预约产品演示”, intro sentence, section heading “在演示中，您将了解” with a three-item checklist (green success-surface check circles, lucide `Check`; each item is a bold title line above a secondary description line), and a muted footer note “面向企业安全团队、研发团队与检测机构”. No product image on this page. Right white framed form with the semantic shadow: centered heading “获取专属产品演示”, subtitle “填写信息，我们将与您联系。”, five fields in one column (name, 企业邮箱 email, 公司名称, 联系电话, product select), centered Primary submit “提交申请”, and the small note “提交信息即表示您同意我们的隐私政策。” The form uses canonical TrialField and Button with the `primary` variant. Product choices come from the existing product navigation. No reference brand, dark header, purple arrow or unsupported customer quote is copied.

## Behavior and states

Default controls are white with semantic borders. Hover strengthens borders; focus retains the global visible outline. Native select supplies selected/expanded and keyboard behavior. Required name, 企业邮箱, 公司名称, 联系电话 and product fields are validated. Errors expose `aria-invalid` and associated inline text, preserve input and focus the first invalid field. Disabled controls use disabled tokens. Submission is not connected: valid submissions report that online delivery is unavailable, retain values, and never clear data or announce success.

## Content

Copy comes from the user's 2026-10-14 draft verbatim: eyebrow, heading, intro, checklist items (核心产品能力 / 真实业务流程 / 专属解决方案, each with the user's description sentence), footer note, form heading, subtitle, placeholders (请输入姓名, name@company.com, 请输入公司名称, 请输入联系电话, 请选择产品), privacy note. No new business claims beyond this draft.

## Accessibility

Native form, labels, inputs, select and submit button. Required fields expose native required state and visible markers. Error descriptions are linked by ID; submission status uses a polite live region. Logo links to homepage with an accessible name. The checklist is a plain list with decorative, `aria-hidden` check icons. Focus follows reading order.

## Local implementation contract

- Canonical path：`src/components/ui/trial-field.tsx`; composition `src/components/site/TrialRequestPage.tsx`.
- Public API：TrialField takes id, label, kind (`text | tel | email | select | textarea`), required, error, options, autoComplete, placeholder; forwards standard input behavior through native controls.
- Tokens：existing `--ds-color-*` (including `--ds-color-status-success*` for the checklist and `--ds-color-text-secondary` for the footer note), the page-canvas tokens `--ds-color-trial-canvas` and `--ds-color-trial-glow` (the latter derived from `--ds-color-action-primary`, the brand red) in `src/styles/tokens.css`, type, spacing, shape, page widths, minimum control size, and motion tokens; styles in `src/styles/trial-request.css`.
- Dependencies：React, canonical Button, BrandLogo, TanStack Link, lucide `Check`, existing navigation product data.
- Forbidden：Red Hat assets, direct `--rh-*`, raw visual values, duplicate route-level controls, fake successful submission, browser storage of personal data.


## Asset exclusions

Reference image is layout guidance only; do not embed it or use its branding.

## Acceptance checklist

- [x] Purpose and alternatives documented.
- [x] Applicable states implemented.
- [x] Native labels, error relationships, first-invalid-field focus and form interaction verified.
- [x] Desktop and mobile behavior verified at 375, 768, 1280 and 1547px.
- [x] Approved tokens and canonical components used.
- [x] Catalog and coverage updated.