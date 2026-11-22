import { motion } from "framer-motion";
import { Starfield } from "../components/Starfield";
import { easeDream } from "../lib/motion";
import { future } from "../content";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } };
const rise = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeDream } } };

export function FutureConstellation() {
  return (
    <section className="section section--future" id="future">
      <Starfield seed={9} count={60} />
      <div className="section-inner" style={{ maxWidth: 640 }}>
        <span className="eyebrow eyebrow--dark">{future.eyebrow}</span>
        <h2 className="bubble-heading">{future.heading}</h2>
        <p className="sub-text">{future.sub}</p>

        <div className="constellation-stage">
          <svg viewBox="0 0 200 160" style={{ width: "100%", height: "auto" }}>
            <polyline
              points="20,20 70,40 130,30 180,20"
              fill="none"
              stroke="var(--gold)"
              strokeWidth="1"
              strokeDasharray="3 5"
              opacity="0.5"
            />
            {[
              [20, 20],
              [70, 40],
              [130, 30],
              [180, 20],
            ].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="2.5" fill="var(--gold)" />
            ))}

            <path d="M150 28 A10 10 0 1 1 142 14 A14 14 0 1 0 150 28 Z" fill="var(--gold)" opacity="0.85" />

            <path d="M50 150 L50 100 Q100 70 150 100 L150 150 Z" fill="var(--white-soft)" opacity="0.95" />
            <path d="M92 150 L92 118 Q100 108 108 118 L108 150 Z" fill="var(--plum)" />
            <circle cx="100" cy="92" r="9" fill="none" stroke="var(--mauve-deep)" strokeWidth="2.5" />
          </svg>
          <p className="hand-text hand-text--dark" style={{ marginTop: "0.5rem" }}>Makkah • Madina</p>
        </div>

        <motion.div className="future-lines" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          {future.lines.map((line, i) => (
            <motion.p key={i} className="body-text" style={{ color: "var(--text-on-dark)", maxWidth: 520 }} variants={rise}>
              {line}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
