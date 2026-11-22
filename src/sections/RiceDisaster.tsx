import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Starfield } from "../components/Starfield";
import { completeTask } from "../lib/progress";
import { riceDisaster } from "../content";

export function RiceDisaster() {
  const [found, setFound] = useState(false);

  return (
    <section className="section section--rice-disaster" id="rice-disaster">
      <Starfield seed={7} count={30} />
      <div className="section-inner" style={{ maxWidth: 640 }}>
        <span className="eyebrow eyebrow--dark">{riceDisaster.eyebrow}</span>
        <h2 className="bubble-heading">{riceDisaster.heading}</h2>
        <p className="sub-text">{riceDisaster.sub}</p>
        <p className="sub-text">{riceDisaster.hint} ✨</p>

        <div className="kitchen-scene">
          <svg viewBox="0 0 320 240" style={{ width: "100%", height: "auto" }}>
            <rect x="20" y="190" width="280" height="14" rx="4" fill="var(--plum)" />
            <ellipse cx="160" cy="150" rx="70" ry="24" fill="var(--rose-gold)" />
            <rect x="90" y="110" width="140" height="44" rx="10" fill="var(--rose-gold)" />
            <ellipse cx="160" cy="110" rx="70" ry="18" fill="var(--cream-deep)" />
            <path d="M120 70 Q124 50 116 34" fill="none" stroke="var(--text-on-dark-soft)" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
            <path d="M160 64 Q164 44 156 28" fill="none" stroke="var(--text-on-dark-soft)" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
            <path d="M200 70 Q204 50 196 34" fill="none" stroke="var(--text-on-dark-soft)" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
          </svg>

          <button
            className="salt-hotspot"
            style={{ left: "72%", top: "18%", width: 36, height: 48 }}
            onClick={() => {
              setFound(true);
              completeTask("salt");
            }}
            aria-label="find the salt"
          >
            <svg viewBox="0 0 36 48" width="36" height="48">
              <rect x="6" y="10" width="24" height="34" rx="6" fill="var(--white-soft)" opacity={found ? 1 : 0.35} />
              <rect x="10" y="2" width="16" height="10" rx="3" fill="var(--mauve-deep)" opacity={found ? 1 : 0.35} />
              <circle cx="14" cy="22" r="1.4" fill="var(--mauve)" />
              <circle cx="20" cy="26" r="1.4" fill="var(--mauve)" />
              <circle cx="16" cy="32" r="1.4" fill="var(--mauve)" />
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {found && (
            <motion.p
              className="hand-text hand-text--dark"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {riceDisaster.revealMessage}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
