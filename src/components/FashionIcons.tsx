import type { CSSProperties } from "react";

type Props = { className?: string; style?: CSSProperties; color?: string };

export function DressIcon({ className, style, color = "var(--pink-deep)" }: Props) {
  return (
    <svg className={className} style={style} viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="18" r="12" fill="none" stroke={color} strokeWidth="3" />
      <path d="M44 28 L36 56 L20 150 L100 150 L84 56 L76 28" fill={color} opacity="0.9" />
      <path d="M44 28 C50 40 70 40 76 28" fill="none" stroke="var(--white-soft)" strokeWidth="2" opacity="0.6" />
      <path d="M20 150 Q60 140 100 150" fill="none" stroke="var(--white-soft)" strokeWidth="2" opacity="0.5" />
    </svg>
  );
}

export function HandbagIcon({ className, style, color = "var(--pink-deep)" }: Props) {
  return (
    <svg className={className} style={style} viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 26 Q28 6 40 6 Q52 6 52 26" fill="none" stroke={color} strokeWidth="4" />
      <rect x="12" y="26" width="56" height="38" rx="8" fill={color} />
      <circle cx="40" cy="42" r="4" fill="var(--white-soft)" opacity="0.8" />
    </svg>
  );
}

export function HeelIcon({ className, style, color = "var(--pink-deep)" }: Props) {
  return (
    <svg className={className} style={style} viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 38 C10 22 26 14 44 14 C54 14 58 10 62 4 L70 10 C66 16 66 22 70 28 L70 38 Z"
        fill={color}
      />
      <path d="M10 38 L70 38 L70 44 Q40 48 10 44 Z" fill={color} opacity="0.75" />
    </svg>
  );
}

export function SunglassesIcon({ className, style, color = "var(--mauve-deep)" }: Props) {
  return (
    <svg className={className} style={style} viewBox="0 0 90 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="18" r="16" fill={color} opacity="0.85" />
      <circle cx="68" cy="18" r="16" fill={color} opacity="0.85" />
      <path d="M38 16 L52 16" stroke={color} strokeWidth="3" />
      <path d="M6 14 L0 10" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M84 14 L90 10" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function NecklaceIcon({ className, style, color = "var(--gold)" }: Props) {
  return (
    <svg className={className} style={style} viewBox="0 0 90 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 6 Q45 56 84 6" fill="none" stroke={color} strokeWidth="2.5" />
      <circle cx="45" cy="48" r="7" fill={color} />
      <circle cx="45" cy="48" r="3" fill="var(--white-soft)" opacity="0.7" />
    </svg>
  );
}
