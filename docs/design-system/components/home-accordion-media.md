# Home accordion visual media extension

- Source: project-owned accordion composition (`src/components/site/HomeAccordion.tsx`), no upstream imagery.
- Local status: Existing unreviewed; this extension does not approve the whole accordion.

## Purpose and use

Replace the neutral icon plus title/description placeholder inside the accordion's right-hand
visual panel with a route-owned product screenshot, without changing tab content, order, panel
dimensions, autoplay, or interactions. Do not present generated imagery as real product evidence;
actual product interfaces may be supplied here. Explicitly user-selected conceptual illustrations
may also be supplied when registered as illustrations, never as real product interface evidence.

## Anatomy and implementation

`HomeAccordionItem.image?: { src: string; alt: string }` supplies optional route-owned media.
When present, `renderVisual()` renders a single `<img class="ha-visual__media">` inside the existing
`.ha-visual` box instead of the neutral icon, title, and description; omission preserves the
existing placeholder on unrelated pages. Media arrives as a route-owned image or CDN pointer. No
duplicated route styling and no new tokens.

## Behavior and states

Lazy-loaded media uses `object-fit: cover` and `object-position: center`, so it fills the existing
panel edge to edge; route-owned screenshots are pre-cropped to the panel's measured 1.62/1 aspect so
the real interface reaches all four edges and no page background of its own shows. Where removing the
screenshot's own title bar would leave a white strip on another edge, that title bar stays as the
flush top edge. The panel clips the media to its own 8px corner radius, so a replaced screenshot
keeps the rounded corners the placeholder content had. The panel keeps
its current 900/610 frame and 1.62/1 inner card. Theme border, progress bar, autoplay, hover and focus pause,
mobile stacking, and reduced-motion handling are unchanged. No new actions or loading, error,
disabled, selected or expanded-control states.

## Content and accessibility

The visual panel stays `aria-hidden="true"`; the tab's own heading and description remain the
accessible source of the same information, so replacing the panel placeholder loses no content.
Chinese alternative text describes the screenshot. Media is noninteractive; keyboard focus and
reading order are unchanged. No Red Hat imagery, logos, fonts or components.

## Acceptance

The Wisdom page shows the protocol template library screenshot in the first panel, the mutator
list screenshot in the second panel, the vulnerability detail and test target screenshot in the
third panel, and the vulnerability replay dialog screenshot in the fourth panel, in category
order; every panel on that page now carries route-owned media. On the Swift AI page the supply
chain risk tracking panel carries the AI-BOM asset list screenshot, the multimodal adversarial
panel carries the deepfake detection console screenshot, and the LLM evaluation and protection
panel carries the firewall console screenshot, and the open-source model security optimization
panel carries the AI security platform core data overview screenshot. All four Swift AI panels
now carry route-owned media. Desktop and mobile preserve copy, dimensions, focus and no
horizontal overflow.

On Swift Code, four user-uploaded conceptual illustrations appear in order for code analysis,
dual-engine detection, software metrics, and clone detection. They are centered, pre-cropped
to 1.62/1, served through asset pointers, and identified as conceptual illustrations in alt text
and the asset registry. Existing responsive visibility and all interactions remain unchanged.
