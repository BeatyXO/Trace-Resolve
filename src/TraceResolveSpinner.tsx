import { useId, type CSSProperties, type SVGProps } from "react";
import "./trace-resolve.css";

export type TraceResolveSpinnerProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
  duration?: string;
  label?: string;
};

export function TraceResolveSpinner({
  size = 24,
  duration = "1.65s",
  label = "Loading",
  style,
  className,
  ...props
}: TraceResolveSpinnerProps) {
  const uid = useId().replace(/:/g, "");
  const logoGradient = `gl-pink-logo-${uid}`;
  const sweepGradient = `gl-sweep-fill-${uid}`;
  const clipId = `gl-mark-clip-${uid}`;
  const resolvedSize = typeof size === "number" ? `${size}px` : size;

  const spinnerStyle = {
    "--gl-spinner-size": resolvedSize,
    "--gl-spinner-duration": duration,
    ...style,
  } as CSSProperties;

  return (
    <svg
      {...props}
      className={`genlayer-trace-resolve ${className ?? ""}`.trim()}
      viewBox="0 0 400 400"
      role="status"
      aria-label={label}
      style={spinnerStyle}
    >
      <defs>
        <linearGradient id={logoGradient} x1="70" y1="45" x2="330" y2="350" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF63D8" />
          <stop offset="52%" stopColor="#E857F4" />
          <stop offset="100%" stopColor="#C94DF1" />
        </linearGradient>

        <linearGradient id={sweepGradient} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFD6F3" stopOpacity="0" />
          <stop offset="22%" stopColor="#FFD6F3" stopOpacity=".55" />
          <stop offset="44%" stopColor="#FFF4FC" stopOpacity=".95" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="56%" stopColor="#FFF4FC" stopOpacity=".95" />
          <stop offset="78%" stopColor="#FFD6F3" stopOpacity=".55" />
          <stop offset="100%" stopColor="#FFD6F3" stopOpacity="0" />
        </linearGradient>

        <clipPath id={clipId}>
          <polygon points="183,33 20,372 179,310 122,279 183,152" />
          <polygon points="218,33 218,151 280,281 222,310 382,373" />
          <polygon points="200,195 166,265 200,283 235,266" />
        </clipPath>
      </defs>

      <g style={{ fill: `url(#${logoGradient})` }}>
        <polygon className="gl-piece gl-left" points="183,33 20,372 179,310 122,279 183,152" />
        <polygon className="gl-piece gl-right" points="218,33 218,151 280,281 222,310 382,373" />
        <polygon className="gl-piece gl-core" points="200,195 166,265 200,283 235,266" />
      </g>

      <g clipPath={`url(#${clipId})`}>
        <rect
          className="gl-sweep"
          x="0"
          y="-30"
          width="92"
          height="460"
          fill={`url(#${sweepGradient})`}
        />
      </g>
    </svg>
  );
}
