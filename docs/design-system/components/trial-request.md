# Trial request

- Source：User-approved trial page reference
- Source element：Native form composition
- Source status：Local
- Local treatment：Adapted
- Local status：Implemented
- Category：Forms / site composition

## Purpose

Provide the explicitly requested trial application page at the existing `/contact.html` CTA destination.

## Use / do not use

- Use for the logo-only, light-theme trial application page.
- Do not reuse the standard navigation, footer, dark hero, or marketing cards here.
- Do not claim successful delivery without a connected submission service.

## Anatomy and variants

Logo-only header, left large heading with four user-requested copy placeholders, right unframed pale-gray form region. The form uses the canonical TrialField primitive and Button with the existing tertiary variant. Fields: name, phone, email, organization, product select, message textarea. Product choices come from the existing product navigation.

## Behavior and states

Default controls are white with semantic borders. Hover strengthens borders; focus retains the global visible outline. Native select supplies selected/expanded and keyboard behavior. Required name, phone, email, organization and product fields are validated; message is optional. Errors expose `aria-invalid` and associated inline text, preserve input and focus the first invalid field. Disabled controls use disabled tokens. Loading is owned by canonical Button if submission is connected later. Presently valid submission reports that online delivery is unavailable, retains values, and never clears data or announces success.

## Content

Use the exact requested field labels. Four neutral copy placeholders are an explicit exception requested by the user; they make no new business claims. No fictional contact details or privacy promises.

## Accessibility

Native form, labels, inputs, select, textarea and submit button. Required fields expose native required state and visible markers. Error descriptions are linked by ID; submission status uses a polite live region. Logo links to homepage with an accessible name. Focus follows reading order.

## Local implementation contract

- Canonical path：`src/components/ui/trial-field.tsx`; composition `src/components/site/TrialRequestPage.tsx`.
- Public API：TrialField takes id, label, kind (`text | tel | email | select | textarea`), required, error, options, autoComplete, placeholder; forwards standard input behavior through native controls.
- Tokens：existing `--ds-color-*`, type, spacing, shape, page widths, minimum control size, and motion tokens; styles in `src/styles/trial-request.css`.
- Dependencies：React, canonical Button, BrandLogo, TanStack Link, existing navigation product data.
- Forbidden：Red Hat assets, direct `--rh-*`, raw visual values, duplicate route-level controls, fake successful submission, browser storage of personal data.

## Asset exclusions

Reference image is layout guidance only; do not embed it or use its branding.

## Acceptance checklist

- [x] Purpose and alternatives documented.
- [x] Applicable states implemented.
- [ ] Keyboard and screen-reader behavior verified.
- [ ] Desktop and mobile behavior verified.
- [x] Approved tokens and canonical components used.
- [ ] Catalog and coverage updated.