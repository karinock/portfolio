# Design plan

**Direction:** editorial, spacious, quiet. One accent color; hierarchy comes from type scale, whitespace, and hairlines, not decoration.

**Palette:** page `#fbfbfd`, surface `#f5f5f7`, ink `#1d1d1f`, muted `#6e6e73` (AA on both backgrounds), hairline `#d2d2d7`, accent forest green `#0b6b4d` (AA on white), and a soft amber (`#fdf3dc`) reserved for "modeled / not realized" labels so projections never look like results.

**Type:** system font stack (SF Pro on Apple devices, Segoe UI elsewhere). Large, tight-tracked headlines (weight 650), 17px body, sentence-case labels, no all-caps eyebrows.

**Layout:** 1120px container. Home: hero, 2×2 work cards (one honest number each), About, Contact. Case studies: sticky sub-nav plus a two-column row pattern (sticky label left, content right) that collapses to one column on mobile.

**Visual language for evidence:** metric cards (solid = personal result, dashed = organization result, amber = model), before/after pair, timelines, a five-step research flow, stacked and horizontal bars, an SVG line chart, and a formula strip.

**Motion:** one hero entrance; scroll reveals; number counters; bar fills; subtle portrait drift; card hover lift. All disabled under `prefers-reduced-motion`, and content is fully visible without JavaScript.

**Accessibility:** skip link, visible focus rings, semantic landmarks, descriptive alt text, `role="img"` + labels on charts, tap targets of 44px or more.
