# Source Integrity

## Canonical production asset

The canonical spinner is:

```text
src/trace-resolve.svg
```

The browser deployment uses:

```text
docs/trace-resolve.svg
```

These two files must remain byte-identical.

Run:

```bash
npm test
```

before every final push.

The validation suite checks:

- canonical SVG structure
- byte identity between `src` and `docs`
- pink/magenta palette
- visible white/pale-pink trace
- exact production SVG usage by showcase and loading pages
- target UI sizes
- light, neutral and dark surfaces
- reduced-motion support
