import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Starfield } from "../components/Starfield";
import { Envelope } from "../components/Envelope";
import { Flower, Sparkle } from "../components/Decor";
import { MusicToggle } from "../components/MusicToggle";
import { completeTask } from "../lib/progress";
import { secretRoom } from "../content";

export function SecretRoom() {
  const [opened, setOpened] = useState(false);

  return (
    <section className="section section--secret-room" id="secret-room">
      <Starfield seed={10} count={60} />
      <div className="section-inner">
        <span className="eyebrow eyebrow--dark">{secretRoom.eyebrow}</span>
        <div className="letter-stage">
          <Sparkle className="decor-item sparkle-pulse" style={{ top: "6%", left: "20%", width: 24 }} />
          <Sparkle className="decor-item sparkle-pulse" style={{ top: "10%", right: "18%", width: 20, animationDelay: "1s" }} />
          {!opened && (
            <Envelope
              opened={opened}
              onOpen={() => {
                setOpened(true);
                completeTask("finalLetter");
              }}
            />
          )}
          <AnimatePresence>
            {opened && (
              <motion.div
                className="paper letter-paper"
                initial={{ opacity: 0, y: 40, scale: 0.92, rotate: -1 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotate: -0.6 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <Flower className="decor-item" style={{ top: -18, right: -14, width: 44 }} />
                <Flower className="decor-item" petal="var(--lavender-deep)" style={{ bottom: -16, left: -16, width: 36 }} />
                <p className="hand-text letter-date">{secretRoom.heading}</p>
                <div className="letter-body">
                  {secretRoom.body.map((line, i) => (
                    <motion.p
                      key={i}
                      className="hand-text letter-line"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + i * 0.22 }}
                    >
                      {line}
                    </motion.p>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + secretRoom.body.length * 0.22 + 0.1 }}
                  >
                    <p className="hand-text" style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>{secretRoom.promisesIntro}</p>
                    <ul className="promise-list" style={{ listStyle: "none", padding: 0 }}>
                      {secretRoom.promises.map((p, i) => (
                        <li key={i} className="promise-item hand-text" style={{ fontSize: "1.2rem" }}>
                          <span>♡</span> <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.p
                    className="script-heading letter-signature"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + secretRoom.body.length * 0.22 + 0.6 }}
                  >
                    {secretRoom.signature}
                  </motion.p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {opened && (
            <motion.div
              className="closing-block"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + secretRoom.body.length * 0.22 + 1 }}
            >
              {secretRoom.closing.map((line, i) => (
                <p key={i} className="body-text" style={{ color: "var(--text-on-dark)", fontSize: "1.1rem" }}>
                  {line}
                </p>
              ))}
              <MusicToggle />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
