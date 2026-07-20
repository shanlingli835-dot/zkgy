# Motion and accessibility

状态：Motion Tokens implemented; component verification pending.

## Motion Tokens

| Token                  | Target value                 | Purpose                        |
| ---------------------- | ---------------------------- | ------------------------------ |
| `--ds-duration-fast`   | `120ms`                      | Hover, color, border           |
| `--ds-duration-normal` | `180ms`                      | Expansion and control feedback |
| `--ds-duration-slow`   | `240ms`                      | Dialog and larger transitions  |
| `--ds-ease-standard`   | `cubic-bezier(0.2, 0, 0, 1)` | Default easing                 |

## Motion rules

- Motion explains a state change; it is not continuous decoration.
- Hover must not move elements in ways that shift layout or click targets.
- Page entry avoids large bounce, rotation, or long staggered animation.
- Loading preserves layout dimensions.
- `prefers-reduced-motion: reduce` removes nonessential movement while preserving immediate
  state feedback.

## Focus

- Every interactive element has visible `:focus-visible` styling.
- The target focus treatment uses `--ds-color-focus` with sufficient separation from adjacent
  surfaces.
- Do not use `outline: none` without an equivalent visible replacement in the same rule.
- Focus order matches reading and visual order.

## Keyboard

- `Tab` and `Shift + Tab` move through focusable controls in order.
- `Enter` activates a link, button, or current submit action as appropriate.
- `Space` activates buttons without also scrolling the page.
- `Escape` closes a dismissible Dialog, Menu, or Popover and returns focus to its trigger.
- Do not simulate a Button with an unsemantic `div`.

## Semantics and screen readers

- Inputs require visible labels; placeholders do not replace labels.
- Error text is associated with its field and invalid fields expose invalid state.
- Icon-only buttons require accessible names.
- Dialogs require a title, description when needed, focus management, and focus return.
- Status updates use an appropriate live region; do not make every message assertive.
- Purposeful images have accurate alternative text; decorative images use empty alt text.

## Responsive accessibility

- Mobile navigation exposes all required links and a clear close action.
- Zoom and text enlargement must not cause loss of content or controls.
- Touch target and spacing decisions must not depend on pointer precision.
