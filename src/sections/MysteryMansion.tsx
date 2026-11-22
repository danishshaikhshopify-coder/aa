import { Starfield } from "../components/Starfield";
import { Castle } from "../components/Castle";
import { StarCatcherGame } from "../components/StarCatcherGame";
import { MemoryMatchGame } from "../components/MemoryMatchGame";
import { mysteryMansion } from "../content";

export function MysteryMansion() {
  return (
    <section className="section section--mystery-mansion" id="mystery-mansion">
      <Starfield seed={5} count={40} />
      <div className="section-inner" style={{ maxWidth: 1000 }}>
        <span className="eyebrow eyebrow--dark">{mysteryMansion.eyebrow}</span>
        <h2 className="bubble-heading">{mysteryMansion.heading}</h2>
        <p className="sub-text">{mysteryMansion.sub}</p>

        <Castle style={{ width: "min(220px, 50vw)", opacity: 0.85, margin: "0.5rem 0" }} />

        <StarCatcherGame />
        <div style={{ height: "1px", width: "min(440px, 90%)", background: "rgba(255,255,255,0.12)", margin: "1rem 0" }} />
        <MemoryMatchGame />
      </div>
    </section>
  );
}
