import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DressIcon, HandbagIcon, HeelIcon, SunglassesIcon, NecklaceIcon } from "../components/FashionIcons";
import { Starfield } from "../components/Starfield";
import { completeTask } from "../lib/progress";
import { fashionKingdom } from "../content";

export function FashionKingdom() {
  const [dress, setDress] = useState(fashionKingdom.dresses[0]);
  const [bag, setBag] = useState(fashionKingdom.bags[0]);
  const [heel, setHeel] = useState(fashionKingdom.heelColors[0]);
  const [glasses, setGlasses] = useState(false);
  const [necklace, setNecklace] = useState(false);
  const [finished, setFinished] = useState(false);

  return (
    <section className="section section--fashion-kingdom" id="fashion-kingdom">
      <Starfield seed={4} count={40} />
      <div className="section-inner" style={{ maxWidth: 1000 }}>
        <span className="eyebrow eyebrow--dark">{fashionKingdom.eyebrow}</span>
        <h2 className="bubble-heading">{fashionKingdom.heading}</h2>
        <p className="sub-text">{fashionKingdom.sub}</p>

        <div className="boutique-layout">
          <div className="mannequin-board paper">
            {necklace && <NecklaceIcon className="mannequin-necklace" />}
            <DressIcon className="mannequin-dress" color={dress.color} />
            {glasses && <SunglassesIcon className="mannequin-glasses" />}
            <HandbagIcon className="mannequin-bag" color={bag.color} />
            <HeelIcon className="mannequin-heel mannequin-heel--left" color={heel.color} />
            <HeelIcon className="mannequin-heel mannequin-heel--right" color={heel.color} style={{ transform: "scaleX(-1)" }} />
          </div>

          <div className="styling-panel">
            <SwatchRow label="Dress" options={fashionKingdom.dresses} value={dress.id} onPick={(id) => setDress(fashionKingdom.dresses.find((d) => d.id === id)!)} />
            <SwatchRow label="Bag" options={fashionKingdom.bags} value={bag.id} onPick={(id) => setBag(fashionKingdom.bags.find((d) => d.id === id)!)} />
            <SwatchRow label="Heels" options={fashionKingdom.heelColors} value={heel.id} onPick={(id) => setHeel(fashionKingdom.heelColors.find((d) => d.id === id)!)} />

            <div className="toggle-row">
              <button className={`toggle-chip ${glasses ? "is-active" : ""}`} onClick={() => setGlasses((v) => !v)}>
                sunglasses
              </button>
              <button className={`toggle-chip ${necklace ? "is-active" : ""}`} onClick={() => setNecklace((v) => !v)}>
                necklace
              </button>
            </div>

            <button
              className="btn"
              style={{ alignSelf: "flex-start" }}
              onClick={() => {
                setFinished(true);
                completeTask("styling");
              }}
            >
              {fashionKingdom.finishLabel}
            </button>

            <AnimatePresence>
              {finished && (
                <motion.p
                  className="hand-text hand-text--dark"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {fashionKingdom.compliment}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function SwatchRow({ label, options, value, onPick }: { label: string; options: { id: string; label: string; color: string }[]; value: string; onPick: (id: string) => void }) {
  return (
    <div className="swatch-row">
      <span className="sub-text swatch-label">{label}</span>
      <div className="swatch-options">
        {options.map((opt) => (
          <button
            key={opt.id}
            className={`swatch ${value === opt.id ? "is-active" : ""}`}
            style={{ background: opt.color }}
            aria-label={opt.label}
            onClick={() => onPick(opt.id)}
          />
        ))}
      </div>
    </div>
  );
}
