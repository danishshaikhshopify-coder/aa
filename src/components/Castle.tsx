import type { CSSProperties } from "react";

export function Castle({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="100" width="240" height="110" rx="6" fill="var(--white-soft)" />
      <rect x="20" y="70" width="60" height="140" rx="4" fill="var(--pink)" />
      <path d="M20 70 L50 30 L80 70 Z" fill="var(--pink-deep)" />
      <rect x="240" y="70" width="60" height="140" rx="4" fill="var(--lavender)" />
      <path d="M240 70 L270 30 L300 70 Z" fill="var(--lavender-deep)" />
      <rect x="110" y="50" width="100" height="160" rx="6" fill="var(--blush)" />
      <path d="M100 50 L160 10 L220 50 Z" fill="var(--pink-deep)" />
      <circle cx="160" cy="95" r="22" fill="var(--white-soft)" stroke="var(--pink-deep)" strokeWidth="3" />
      <circle cx="160" cy="95" r="22" fill="none" stroke="var(--pink-deep)" strokeWidth="1" opacity="0.5" />
      <line x1="160" y1="73" x2="160" y2="117" stroke="var(--pink-deep)" strokeWidth="1.5" opacity="0.5" />
      <line x1="138" y1="95" x2="182" y2="95" stroke="var(--pink-deep)" strokeWidth="1.5" opacity="0.5" />
      <path d="M142 210 L142 160 Q160 144 178 160 L178 210 Z" fill="var(--mauve)" />
      <circle cx="50" cy="110" r="10" fill="var(--white-soft)" />
      <circle cx="270" cy="110" r="10" fill="var(--white-soft)" />
      <rect x="156" y="2" width="4" height="16" fill="var(--mauve-deep)" />
      <path d="M160 2 L178 8 L160 14 Z" fill="var(--pink-deep)" />
    </svg>
  );
}
