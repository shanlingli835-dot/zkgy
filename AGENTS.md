<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Project Instructions

This project is a source-faithful UI rebuild of the existing ZKSC website.

Before implementing anything, follow:

- docs/bmad/prd.md
- docs/bmad/DESIGN.md
- docs/bmad/EXPERIENCE.md
- docs/bmad/ARCHITECTURE-SPINE.md
- docs/bmad/epics.md
- docs/source-site/page-inventory.md
- docs/source-site/urls.md

Rules:
- Do not add new business content.
- Do not change product positioning.
- Do not change CTA destinations.
- Preserve old .html routes.
- Preserve navigation, footer, SEO, source content meaning, and module order.
- Implement one Story at a time from docs/bmad/epics.md.
- After each Story, check desktop, mobile, links, CTA, SEO, and content completeness.
