import type { CSSProperties } from "react";
import { motion } from "framer-motion";

export function MoonIllustration({
  className,
  style,
  dim = false,
  onClick,
}: {
  className?: string;
  style?: CSSProperties;
  dim?: boolean;
  onClick?: () => void;
}) {
  return (
    <motion.button
      className={className}
      style={{ background: "none", border: "none", padding: 0, ...style }}
      onClick={onClick}
      aria-label="the moon"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg viewBox="0 0 120 120" width="100%" height="100%" style={{ overflow: "visible" }}>
        <defs>
          <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--gold)" stopOpacity={dim ? 0.15 : 0.55} />
            <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="60" cy="60" r="56" fill="url(#moonGlow)" />
        <circle cx="60" cy="60" r="34" fill={dim ? "#d9cdb0" : "var(--cream-deep)"} opacity={dim ? 0.55 : 1} />
        <circle cx="48" cy="48" r="6" fill="var(--gold)" opacity="0.35" />
        <circle cx="70" cy="68" r="4" fill="var(--gold)" opacity="0.3" />
        <circle cx="62" cy="44" r="3" fill="var(--gold)" opacity="0.3" />
      </svg>
    </motion.button>
  );
}
