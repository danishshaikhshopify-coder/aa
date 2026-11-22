import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Starfield } from "../components/Starfield";
import { MoonIllustration } from "../components/MoonIllustration";
import { ClickReveal } from "../components/ClickReveal";
import { DrawnFlower } from "../components/DrawnFlower";
import { Butterfly } from "../components/Decor";
import { completeTask } from "../lib/progress";
import { easeDream } from "../lib/motion";
import { moonlightGarden } from "../content";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const pop = { hidden: { opacity: 0, y: 24, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: easeDream } } };

function SecretEnvelopeIcon() {
  return (
    <svg viewBox="0 0 80 56" width="70" height="50">
      <rect x="2" y="6" width="76" height="46" rx="6" fill="var(--rose-gold)" stroke="var(--pink-deep)" strokeWidth="2" />
      <path d="M2 10 L40 36 L78 10" fill="none" stroke="var(--pink-deep)" strokeWidth="2" />
    </svg>
  );
}

export function MoonlightGarden() {
  const [dim, setDim] = useState(false);
  const [moonMessage, setMoonMessage] = useState(false);

  function handleMoonClick() {
    setDim(true);
    setMoonMessage(true);
    completeTask("moon");
  }

  return (
    <section className="section section--moonlight-garden" id="moonlight-garden">
      <Starfield seed={6} count={50} />
      <Butterfly className="decor-item float-y" style={{ top: "12%", left: "10%", width: 50 }} />
      <Butterfly className="decor-item float-y" style={{ top: "18%", right: "12%", width: 40, animationDelay: "1.5s" }} />

      <div className="section-inner" style={{ maxWidth: 1000 }}>
        <span className="eyebrow eyebrow--dark">{moonlightGarden.eyebrow}</span>
        <h2 className="bubble-heading">{moonlightGarden.heading}</h2>
        <p className="sub-text">{moonlightGarden.sub}</p>

        <div className="moon-stage">
          <div style={{ width: 120 }}>
            <MoonIllustration dim={dim} onClick={handleMoonClick} style={{ width: 120, height: 120 }} />
          </div>
          <span className="sub-text">{moonlightGarden.moon.label} {moonlightGarden.moon.hint}</span>
          <AnimatePresence>
            {moonMessage && (
              <motion.p
                className="hand-text hand-text--dark"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ maxWidth: 420 }}
              >
                {moonlightGarden.moon.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <motion.div className="card-grid" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          {moonlightGarden.flowers.map((flower, i) => (
            <motion.div key={flower.id} variants={pop} onClick={() => completeTask("flower")}>
              <ClickReveal
                trigger={<DrawnFlower petal={flower.petal} delay={i * 0.15} style={{ width: 64, height: 64 }} />}
                label="tap to bloom"
                message={flower.message}
              />
            </motion.div>
          ))}
          <motion.div variants={pop} onClick={() => completeTask("secretEnvelope")}>
            <ClickReveal
              trigger={<SecretEnvelopeIcon />}
              label={moonlightGarden.secretEnvelope.label}
              message={moonlightGarden.secretEnvelope.message}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
