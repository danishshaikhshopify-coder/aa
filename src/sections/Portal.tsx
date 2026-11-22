import { useState } from "react";
import { motion } from "framer-motion";
import { Starfield } from "../components/Starfield";
import { MoonIllustration } from "../components/MoonIllustration";
import { Sparkle, Star, Heart } from "../components/Decor";
import { easeDream } from "../lib/motion";
import { portal } from "../content";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
};

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeDream } },
};

export function Portal({ onEnter }: { onEnter: () => void }) {
  const [entering, setEntering] = useState(false);

  function handleEnter() {
    setEntering(true);
    window.setTimeout(onEnter, 500);
  }

  return (
    <section className="section section--portal" id="portal">
      <Starfield seed={1} count={70} />
      <Star className="decor-item float-y" style={{ top: "10%", left: "8%", width: 22, opacity: 0.8 }} />
      <Sparkle className="decor-item sparkle-pulse" style={{ top: "20%", right: "12%", width: 30 }} />
      <Heart className="decor-item float-y" style={{ bottom: "16%", left: "16%", width: 24, opacity: 0.7, animationDelay: "1.5s" }} />
      <Sparkle className="decor-item sparkle-pulse" style={{ bottom: "26%", right: "18%", width: 20, animationDelay: "1s" }} />

      <motion.div
        className="portal-ring"
        animate={entering ? { scale: 1.6, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: easeDream }}
      >
        <div className="spin-slow" style={{ position: "absolute", inset: 0 }}>
          <svg viewBox="0 0 200 200" width="100%" height="100%">
            <defs>
              <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--pink-deep)" />
                <stop offset="100%" stopColor="var(--lavender-deep)" />
              </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="92" fill="none" stroke="url(#ringGrad)" strokeWidth="3" strokeDasharray="10 14" opacity="0.8" />
          </svg>
        </div>
        <div style={{ position: "absolute", inset: "22%" }}>
          <MoonIllustration />
        </div>
      </motion.div>

      <motion.div
        className="section-inner"
        variants={container}
        initial="hidden"
        animate={entering ? "hidden" : "show"}
      >
        <motion.span className="eyebrow eyebrow--dark" variants={rise}>{portal.eyebrow}</motion.span>
        <motion.h1 className="script-heading" variants={rise}>{portal.heading}</motion.h1>
        <motion.p className="hand-text hand-text--dark" variants={rise}>{portal.line1}</motion.p>
        <motion.p className="hand-text hand-text--dark" variants={rise}>{portal.line2}</motion.p>
        <motion.button className="btn" variants={rise} onClick={handleEnter} whileTap={{ scale: 0.95 }} disabled={entering}>
          {portal.cta} ✨
        </motion.button>
      </motion.div>
    </section>
  );
}
