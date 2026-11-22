import { motion } from "framer-motion";
import { Starfield } from "../components/Starfield";
import { useProgress } from "../lib/progress";
import { easeDream } from "../lib/motion";
import { map } from "../content";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const pop = { hidden: { opacity: 0, y: 24, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: easeDream } } };

export function MagicalMap() {
  const progress = useProgress();

  function isDone(key: string) {
    if (key === "mysteryMansion") return !!progress.starGame && !!progress.memoryMatch;
    return !!progress[key];
  }

  return (
    <section className="section section--map" id="map">
      <Starfield seed={2} count={40} />
      <div className="section-inner" style={{ maxWidth: 960 }}>
        <span className="eyebrow eyebrow--dark">{map.eyebrow}</span>
        <h2 className="bubble-heading">{map.heading}</h2>
        <p className="sub-text">{map.sub}</p>

        <motion.div
          className="destinations-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {map.destinations.map((d) => {
            const done = isDone(d.progressKey);
            return (
              <motion.button key={d.id} className="destination-card" variants={pop} onClick={() => scrollTo(d.anchor)}>
                <span className={`destination-status ${done ? "is-complete" : ""}`}>{done ? "✨ discovered" : "explore"}</span>
                <span className="destination-label script-heading" style={{ fontSize: "1.5rem" }}>{d.label}</span>
                <span className="sub-text destination-hint">{d.hint}</span>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
