import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Starfield } from "../components/Starfield";
import { Envelope } from "../components/Envelope";
import { Heart, Sparkle } from "../components/Decor";
import { completeTask } from "../lib/progress";
import { easeDream } from "../lib/motion";
import { memoryGalaxy } from "../content";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const rise = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeDream } } };

function SocialAvatar({ letter }: { letter: string }) {
  return (
    <div className="social-card paper">
      <span className="script-heading" style={{ fontSize: "2rem", color: "var(--mauve-deep)", textShadow: "none" }}>{letter}</span>
    </div>
  );
}

function BehnWifeySwap({ before, after }: { before: string; after: string }) {
  const [swapped, setSwapped] = useState(false);
  return (
    <button className="label-swap" onClick={() => setSwapped((v) => !v)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={swapped ? after : before}
          initial={{ opacity: 0, y: -10, rotate: -4 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          exit={{ opacity: 0, y: 10, rotate: 4 }}
          transition={{ duration: 0.35 }}
        >
          "{swapped ? after : before}"
        </motion.span>
      </AnimatePresence>
      <Sparkle style={{ width: 20, height: 20 }} />
    </button>
  );
}

export function MemoryGalaxy() {
  const [opened, setOpened] = useState(false);
  const moments = memoryGalaxy.moments;

  return (
    <section className="section section--memory-galaxy" id="memory-galaxy">
      <Starfield seed={3} count={40} />
      <div className="section-inner" style={{ maxWidth: 720 }}>
        <span className="eyebrow eyebrow--dark">{memoryGalaxy.eyebrow}</span>
        <h2 className="bubble-heading">{memoryGalaxy.heading}</h2>
        <p className="sub-text">{memoryGalaxy.sub}</p>

        <motion.div className="timeline" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
          {/* tiktok */}
          <motion.div className="timeline-card paper" variants={rise}>
            <span className="timeline-label">{moments[0].label}</span>
            <div className="social-cards">
              <SocialAvatar letter="N" />
              <Heart style={{ width: 28, height: 24 }} />
              <SocialAvatar letter="D" />
            </div>
            <p className="hand-text" style={{ fontSize: "1.3rem" }}>{moments[0].caption}</p>
          </motion.div>

          {/* snapchat */}
          <motion.div className="timeline-card paper" variants={rise}>
            <span className="timeline-label">{moments[1].label}</span>
            <p className="hand-text" style={{ fontSize: "1.3rem" }}>{moments[1].caption}</p>
          </motion.div>

          {/* behn -> wifey */}
          <motion.div className="timeline-card paper" variants={rise} style={{ textAlign: "center" }}>
            <span className="timeline-label">{moments[2].label}</span>
            <BehnWifeySwap before={moments[2].before!} after={moments[2].after!} />
            <p className="hand-text" style={{ fontSize: "1.3rem" }}>{moments[2].caption}</p>
          </motion.div>

          {/* proposal */}
          <motion.div className="timeline-card paper" variants={rise} style={{ textAlign: "center" }}>
            <span className="timeline-label">{moments[3].label}</span>
            <p className="hand-text" style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>{moments[3].caption}</p>
            <div style={{ transform: "scale(0.7)", transformOrigin: "center" }}>
              {!opened && (
                <Envelope
                  opened={opened}
                  onOpen={() => {
                    setOpened(true);
                    completeTask("proposal");
                  }}
                />
              )}
            </div>
            <AnimatePresence>
              {opened && (
                <motion.p
                  className="hand-text surprise-reveal"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  style={{ fontSize: "1.3rem", marginTop: "0.5rem" }}
                >
                  {moments[3].envelopeMessage}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* support */}
          <motion.div className="timeline-card paper" variants={rise}>
            <span className="timeline-label">{moments[4].label}</span>
            <p className="hand-text" style={{ fontSize: "1.3rem" }}>{moments[4].caption}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
