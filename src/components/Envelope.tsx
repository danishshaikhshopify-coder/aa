import { motion } from "framer-motion";

const HEART_PATH =
  "M16 26C16 26 2 17.6 2 8.8C2 4.2 5.6 1 9.6 1C12.6 1 14.8 2.6 16 5C17.2 2.6 19.4 1 22.4 1C26.4 1 30 4.2 30 8.8C30 17.6 16 26 16 26Z";

export function Envelope({ opened, onOpen }: { opened: boolean; onOpen: () => void }) {
  return (
    <motion.button
      className="envelope-btn"
      onClick={onOpen}
      aria-label="Open the letter"
      disabled={opened}
      animate={opened ? { opacity: 0, scale: 0.8, y: -20 } : { opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ pointerEvents: opened ? "none" : "auto" }}
      whileHover={!opened ? { y: -6, scale: 1.02 } : {}}
      whileTap={!opened ? { scale: 0.97 } : {}}
    >
      <svg viewBox="0 0 220 150" width="220" height="150" style={{ display: "block" }}>
        <rect x="4" y="18" width="212" height="128" rx="10" fill="var(--blush)" stroke="var(--pink-deep)" strokeWidth="2" />
        <path d="M4 24 L110 92 L216 24" fill="none" stroke="var(--pink-deep)" strokeWidth="2" strokeLinecap="round" />
        <motion.path
          d="M4 20 Q110 -6 216 20 L110 78 Z"
          fill="var(--pink)"
          stroke="var(--pink-deep)"
          strokeWidth="2"
          style={{ transformOrigin: "110px 20px" }}
          animate={opened ? { rotateX: 170 } : { rotateX: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        <g transform="translate(110 92)">
          <circle r="16" fill="var(--pink-deep)" />
          <path d={HEART_PATH} fill="var(--white-soft)" transform="translate(-8.96 -7.56) scale(0.56)" />
        </g>
      </svg>
      <span className="hand-text envelope-hint">tap to open</span>
    </motion.button>
  );
}
