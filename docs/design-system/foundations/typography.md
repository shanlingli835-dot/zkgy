# Typography

状态：Implemented.

## Font strategy

Use the approved system sans-serif stack and prioritize Chinese readability:

```css
font-family:
  Inter,
  "PingFang SC",
  "Microsoft YaHei",
  ui-sans-serif,
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;
```

Do not import a Red Hat font. If Inter is unavailable, use the platform system font.

## Type hierarchy

| Token                | Size / line-height | Purpose                               |
| -------------------- | ------------------ | ------------------------------------- |
| `--ds-font-size-xs`  | `12px / 18px`      | Timestamp and short auxiliary content |
| `--ds-font-size-sm`  | `14px / 20px`      | Supporting content and form help      |
| `--ds-font-size-md`  | `16px / 24px`      | Body and controls                     |
| `--ds-font-size-lg`  | `18px / 28px`      | Emphasized body or small heading      |
| `--ds-font-size-xl`  | `20px / 28px`      | Section subheading                    |
| `--ds-font-size-2xl` | `24px / 32px`      | Secondary page heading                |
| `--ds-font-size-3xl` | `30px / 38px`      | Page title                            |
| `--ds-font-size-4xl` | `40px / 48px`      | Marketing Hero title                  |

The executable Token layer maps current project typography to these semantic levels without
changing source content meaning or introducing Red Hat typography.

## Weight

- Regular `400`：body and explanation.
- Medium `500`：buttons, labels, and navigation.
- Semibold `600`：headings and emphasis.
- Do not use weights above `700` unless a future brand decision requires it.

## Usage

- Each page has one `h1`; heading levels follow document structure.
- Body defaults to the medium level; essential information cannot use the smallest level.
- Button and form labels remain concise; body text must be allowed to wrap.
- Marketing body line length should stay around `60–72ch`.
- Chinese text uses normal letter spacing; do not add negative tracking for visual effect.
- English buttons use sentence case.

## Public voice

- Use concise, professional, action-oriented language.
- State outcomes rather than interface mechanics.
- Error text states the problem and recovery action.
- Use `中科固源 / SOURCEGUARD`; do not expose legacy names or implementation terminology.
