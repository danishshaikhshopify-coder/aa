import { motion } from "framer-motion";
import { Starfield } from "../components/Starfield";
import { useProgress } from "../lib/progress";
import { easeDream } from "../lib/motion";
import { questBoard } from "../content";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const rise = { hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeDream } } };

export function QuestBoardSection() {
  const progress = useProgress();
  const doneCount = questBoard.tasks.filter((t) => progress[t.id]).length;

  return (
    <section className="section section--quest-board" id="quest-board">
      <Starfield seed={8} count={30} />
      <div className="section-inner" style={{ maxWidth: 560 }}>
        <span className="eyebrow eyebrow--dark">{questBoard.eyebrow}</span>
        <h2 className="bubble-heading">{questBoard.heading}</h2>
        <p className="sub-text">{questBoard.sub}</p>
        <p className="sub-text" style={{ color: "var(--gold)" }}>{doneCount} / {questBoard.tasks.length} ✨</p>

        <motion.ul
          className="quest-list"
          style={{ listStyle: "none", padding: 0, margin: 0 }}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {questBoard.tasks.map((task) => {
            const done = !!progress[task.id];
            return (
              <motion.li key={task.id} className={`quest-item ${done ? "is-done" : ""}`} variants={rise}>
                <span className="quest-check">{done ? "✓" : ""}</span>
                {task.label}
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
