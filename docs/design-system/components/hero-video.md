# Hero Video

- Source: local SOURCEGUARD video requirements; native HTML video (no upstream asset).
- Local treatment: Adapted
- Local status: Implemented
- Category: Media

## Purpose

Show the approved product video completely, without distortion or loading layout shifts.

## Use / do not use

- Use for an approved 16:9 product video in a fluid content container.
- Do not use image crop behavior or fixed pixel heights for video.

## Anatomy and variants

Native video with source, accessible label and optional poster. No decorative variants.

## Behavior and states

- Default/loading: reserve 16:9 before metadata loads; width 100%, height auto, centered, maximum width 1920px, object-fit contain.
- All breakpoints scale continuously within the parent's available width, without horizontal overflow.
- Playback: muted, loop, playsInline; autoPlay only while visible and reduced motion is off. Leaving the viewport or hiding the document pauses playback.
- Changing system reduced-motion preference stops/permits automatic playback immediately.
- Error: retain poster when available; denied autoplay promises do not produce unhandled errors.
- Hover/focus/active/selected/expanded/disabled: not applicable to this noninteractive presentation video.

## Content and accessibility

Require a descriptive product-specific accessible label and preserve native fallback text. Reduced motion disables automatic playback, including before hydration.

## Local implementation contract

- Canonical path: `src/components/site/ProductPageKit.tsx`, `HeroVideo`.
- API: `label: string`, `src?: string`, `poster?: string`.
- ProductHero API: `visualAspectRatio?: "600 / 437.5" | "16 / 9"`; defaults to the existing image frame, video callers use 16:9.
- Tokens: semantic border, radius, inverse surface and video maximum width from `tokens.css`.
- Dependencies: React, native IntersectionObserver, matchMedia, video.
- Do not calculate dimensions in JavaScript or copy route-level video implementations.
- No Red Hat assets, fonts, icons, direct color tokens or web components.

## Acceptance checklist

- Verify desktop, tablet and mobile ratios and no overflow.
- Verify visibility/reduced-motion playback decisions and source/poster preservation.
- Preserve links, CTA destinations, module order and SEO.