<p align="center">
  <img src="assets/trace-resolve-preview.gif" alt="Trace Resolve GenLayer spinner preview" width="190" />
</p>

<h1 align="center">Trace Resolve: GenLayer Spinner</h1>

<p align="center"><b>The GenLayer mark resolves into alignment, then a pale pink-white highlight travels through the mark itself.</b></p>

<p align="center">
  <a href="https://beatyxo.github.io/Trace-Resolve/">Live Showcase</a> ·
  <a href="https://beatyxo.github.io/Trace-Resolve/loading.html">Loading States</a>
</p>

Trace Resolve is an original animated loading spinner for the GenLayer Portal community spinner task.

The design keeps the **GenLayer mark as the dominant visual element**. The three geometric pieces begin only a few pixels apart, align into a resolved state, and then a bright pink-white trace sweeps through the logo. The supporting motion never grows outside the mark or competes with it.

## Production files

| File | Purpose |
| --- | --- |
| `src/trace-resolve.svg` | Canonical standalone animated SVG |
| `src/trace-resolve.css` | Reusable CSS animation |
| `src/TraceResolveSpinner.tsx` | React + TypeScript wrapper |
| `docs/trace-resolve.svg` | Exact live production SVG |
| `docs/index.html` | GitHub Pages showcase |
| `docs/loading.html` | Real loading-state examples |
| `assets/trace-resolve-preview.gif` | Animated GitHub preview |
| `assets/trace-resolve-keyframes.png` | Motion keyframes |
| `DESIGN.md` | Motion and geometry specification |
| `SUBMISSION.md` | Ready-to-use submission copy |
| `DEPLOYMENT.md` | GitHub Pages deployment instructions |
| `SOURCE_INTEGRITY.md` | Canonical asset rules |
| `tests/validate.mjs` | Structural validation suite |
| `AGENT_PROMPT.md` | Exact handoff instructions for a coding agent |

## Visual direction

Base mark:

- `#FF63D8`
- `#E857F4`
- `#C94DF1`

Trace:

- pale pink `#FFD6F3`
- near-white `#FFF4FC`
- white `#FFFFFF`

The trace is intentionally much lighter than the mark so it is clearly visible.

## Motion

Default loop:

`1.65s`

Sequence:

1. the left mark section begins `7px` left and `3px` down
2. the right section begins `7px` right and `3px` down
3. the core begins `6px` down
4. all pieces resolve to their canonical positions by 34% of the cycle
5. the pale pink-white trace crosses the aligned mark
6. the trace disappears by 74%
7. the pieces release back to the initial offset positions
8. the loop repeats seamlessly

There is no continuous 360-degree rotation and no large external orbit.

## Sizes

The live showcase tests the exact SVG at:

- 16px
- 20px
- 24px
- 32px
- 48px
- 64px

## Light and dark support

One self-contained SVG is used on:

- white
- neutral grey
- near-black

No alternate asset is required.

## Reduced motion

`prefers-reduced-motion: reduce` disables the alignment animation and removes the travelling trace, leaving a clean static GenLayer mark.

## Standalone SVG

Use:

```html
<img src="/trace-resolve.svg" width="24" height="24" alt="Loading">
```

or embed the SVG directly.

## React

```tsx
import { TraceResolveSpinner } from "./src/TraceResolveSpinner";

<TraceResolveSpinner size={24} />
```

Custom:

```tsx
<TraceResolveSpinner
  size={32}
  duration="1.8s"
  label="Loading Portal"
/>
```

## Development

```bash
npm test
```

The package has no runtime dependencies for the standalone SVG or showcase pages.

## Deployment

GitHub Pages should publish from:

`main /docs`

See `DEPLOYMENT.md`.

## License

MIT.
