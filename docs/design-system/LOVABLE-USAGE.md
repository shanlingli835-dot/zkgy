# Lovable usage

## Context strategy

Do not ask Lovable to read every design-system document. Use this route:

```text
AGENTS.md
  -> docs/design-system/README.md
  -> task-relevant foundations
  -> components/README.md
  -> components/_shared/component-rules.md
  -> 1-5 relevant Implemented component specs
  -> a relevant Implemented pattern when needed
```

Files marked `Planned`, `Reference only`, `Internal`, or `Existing unreviewed` are not
instructions to generate those components.

## Project Knowledge

Add this short entry in Project settings -> Knowledge:

```text
The project's only UI specification is in docs/design-system/.
For every UI change, follow AGENTS.md and use docs/design-system/README.md to route to
only the relevant foundation, Implemented component, and Implemented pattern files.
Reuse src/components/ui and src/components/site; do not create one-off visual values or
duplicate components. Use only approved 中科固源 / SOURCEGUARD brand assets. Red Hat is
an upstream interaction and accessibility reference only; never use its brand assets,
fonts, icons, --rh-* tokens, or rh-* Web Components. Report the specification files used.
```

## Foundation migration prompt

```text
Read AGENTS.md and docs/design-system/README.md. This task is design-system migration,
not page redesign. Preserve public content, routes, CTA destinations, and module order.
Do not introduce a third Token system. At completion, list changed specifications,
canonical components, and remaining migration risks.
```

## Daily page prompt

```text
Modify [page or module]. First use docs/design-system/README.md and
components/README.md to locate only Implemented specifications for this task. Reuse
canonical components. Do not add one-off colors, spacing, radii, shadows, or button
variants. Remove internal notes and report which specifications were used.
```

## New component prompt

```text
Before implementing a new component or variant, check SOURCE-COVERAGE.md and
components/README.md. Try an approved composition first. If a new component is still
required, create its spec from templates/component-spec-template.md and wait for that
contract to exist before using it in a route.
```

## GitHub workflow

1. Keep design documents and implementation in the same connected repository.
2. Never rewrite published history; Lovable depends on the connected branch history.
3. Change specifications and affected implementation in the same commit.
4. Build and inspect desktop/mobile behavior before pushing to the connected branch.
5. Ask Lovable to report the files it read after each UI generation.
6. Do not hand-author `.lovable/rules/libraries/`; those files belong to an attached,
   separately released Lovable Design System project, which this repository is not using.
