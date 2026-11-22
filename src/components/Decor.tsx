import type { CSSProperties } from "react";

type Props = { className?: string; style?: CSSProperties };

export function Flower({ className, style, petal = "var(--pink)", center = "var(--gold)" }: Props & { petal?: string; center?: string }) {
  return (
    <svg className={className} style={style} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        {[0, 60, 120, 180, 240, 300].map((rot) => (
          <ellipse key={rot} cx="30" cy="16" rx="9" ry="14" fill={petal} transform={`rotate(${rot} 30 30)`} opacity="0.92" />
        ))}
        <circle cx="30" cy="30" r="7" fill={center} />
      </g>
    </svg>
  );
}

export function Heart({ className, style, fill = "var(--pink-deep)" }: Props & { fill?: string }) {
  return (
    <svg className={className} style={style} viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 26C16 26 2 17.6 2 8.8C2 4.2 5.6 1 9.6 1C12.6 1 14.8 2.6 16 5C17.2 2.6 19.4 1 22.4 1C26.4 1 30 4.2 30 8.8C30 17.6 16 26 16 26Z"
        fill={fill}
      />
    </svg>
  );
}

export function Sparkle({ className, style, fill = "var(--gold)" }: Props & { fill?: string }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 2C20.8 11 29 19.2 38 20C29 20.8 20.8 29 20 38C19.2 29 11 20.8 2 20C11 19.2 19.2 11 20 2Z"
        fill={fill}
      />
    </svg>
  );
}

export function Butterfly({ className, style, wing = "var(--lavender-deep)" }: Props & { wing?: string }) {
  return (
    <svg className={className} style={style} viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className="butterfly-wings">
        <path d="M30 22C26 8 10 4 4 10C-2 16 6 30 30 26" fill={wing} opacity="0.9" />
        <path d="M30 22C34 8 50 4 56 10C62 16 54 30 30 26" fill={wing} opacity="0.9" />
        <path d="M30 26C27 34 16 38 12 36C8 34 12 26 30 26" fill={wing} opacity="0.75" />
        <path d="M30 26C33 34 44 38 48 36C52 34 48 26 30 26" fill={wing} opacity="0.75" />
      </g>
      <line x1="30" y1="14" x2="30" y2="34" stroke="var(--mauve-deep)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Cloud({ className, style, fill = "var(--white-soft)" }: Props & { fill?: string }) {
  return (
    <svg className={className} style={style} viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="34" cy="38" rx="28" ry="18" fill={fill} />
      <ellipse cx="66" cy="30" rx="34" ry="22" fill={fill} />
      <ellipse cx="96" cy="40" rx="22" ry="15" fill={fill} />
      <rect x="10" y="38" width="100" height="18" rx="9" fill={fill} />
    </svg>
  );
}

export function Ribbon({ className, style, fill = "var(--pink-deep)" }: Props & { fill?: string }) {
  return (
    <svg className={className} style={style} viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 8L2 2L10 20L2 38L40 32" fill={fill} opacity="0.85" />
      <path d="M40 8L78 2L70 20L78 38L40 32" fill={fill} opacity="0.85" />
      <circle cx="40" cy="20" r="9" fill={fill} />
    </svg>
  );
}

export function WashiTape({ className, style, color = "var(--lavender)" }: Props & { color?: string }) {
  return (
    <div
      className={className}
      style={{
        background: `repeating-linear-gradient(135deg, ${color} 0 10px, color-mix(in srgb, ${color} 80%, white) 10px 20px)`,
        opacity: 0.85,
        ...style,
      }}
    />
  );
}

export function Star({ className, style, fill = "var(--pink-deep)" }: Props & { fill?: string }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 1L15.09 8.26L23 9.27L17 14.97L18.5 23L12 19.1L5.5 23L7 14.97L1 9.27L8.91 8.26L12 1Z"
        fill={fill}
      />
    </svg>
  );
}
