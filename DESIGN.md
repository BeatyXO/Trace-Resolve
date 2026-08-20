# Trace Resolve Design Specification

## Principle

The GenLayer mark must remain the visual focus.

No external element may be larger or more visually dominant than the mark.

## Canonical geometry

ViewBox:

```text
0 0 400 400
```

Left:

```text
183,33 20,372 179,310 122,279 183,152
```

Right:

```text
218,33 218,151 280,281 222,310 382,373
```

Core:

```text
200,195 166,265 200,283 235,266
```

## Palette

Logo gradient:

```text
#FF63D8
#E857F4
#C94DF1
```

Trace:

```text
#FFD6F3
#FFF4FC
#FFFFFF
```

## Timing

Default duration:

```text
1.65s
```

Resolve easing:

```text
ease-in-out
```

## Piece movement

Left:

```text
0%,100%   translate(-7px, 3px)
34%,76%   translate(0, 0)
```

Right:

```text
0%,100%   translate(7px, 3px)
34%,76%   translate(0, 0)
```

Core:

```text
0%,100%   translate(0, 6px)
34%,76%   translate(0, 0)
```

## Trace movement

The trace is clipped entirely inside the GenLayer mark.

```text
0%,33%    x = -260px / opacity 0
38%       opacity 1
68%       x = 520px / opacity 1
74%,100%  opacity 0
```

The trace uses a slight `skewX(-12deg)` to create a diagonal travelling highlight.

## Reduced motion

When `prefers-reduced-motion: reduce` is active:

- all mark pieces sit in their canonical resolved positions
- the trace is hidden
- the mark remains fully visible
