import { useEffect, useRef, useState } from "react";
import { Star } from "./Decor";
import { completeTask } from "../lib/progress";
import { starGame } from "../content";

type FallingStar = { id: number; left: number; duration: number; size: number };
type Status = "idle" | "playing" | "won" | "timeup";

export function StarCatcherGame() {
  const [status, setStatus] = useState<Status>("idle");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(starGame.duration);
  const [stars, setStars] = useState<FallingStar[]>([]);
  const nextId = useRef(0);
  const spawnRef = useRef<number | undefined>(undefined);
  const tickRef = useRef<number | undefined>(undefined);
  const scoreRef = useRef(0);

  function stop() {
    window.clearInterval(spawnRef.current);
    window.clearInterval(tickRef.current);
  }

  function start() {
    setStatus("playing");
    setScore(0);
    scoreRef.current = 0;
    setTimeLeft(starGame.duration);
    setStars([]);

    spawnRef.current = window.setInterval(() => {
      setStars((prev) => [
        ...prev,
        { id: nextId.current++, left: 6 + Math.random() * 82, duration: 2.4 + Math.random() * 1.8, size: 26 + Math.random() * 16 },
      ]);
    }, 550);

    tickRef.current = window.setInterval(() => {
      setTimeLeft((t) => (t <= 1 ? 0 : t - 1));
    }, 1000);
  }

  function catchStar(id: number) {
    setStars((prev) => prev.filter((s) => s.id !== id));
    const next = scoreRef.current + 1;
    scoreRef.current = next;
    setScore(next);
    if (next >= starGame.target && status === "playing") {
      stop();
      setStatus("won");
      completeTask("starGame");
    }
  }

  function missStar(id: number) {
    setStars((prev) => prev.filter((s) => s.id !== id));
  }

  useEffect(() => {
    if (status === "playing" && timeLeft <= 0) {
      stop();
      setStatus(scoreRef.current >= starGame.target ? "won" : "timeup");
    }
  }, [timeLeft, status]);

  useEffect(() => stop, []);

  return (
    <div className="game-panel">
      <h3 className="bubble-heading" style={{ fontSize: "1.4rem" }}>{starGame.heading}</h3>
      <p className="sub-text">{starGame.sub}</p>
      <div className="game-hud">
        <span>⭐ {score} / {starGame.target}</span>
        <span>⏱ {timeLeft}s</span>
      </div>
      <div className="star-field">
        {stars.map((s) => (
          <button
            key={s.id}
            className="falling-star"
            style={{ left: `${s.left}%`, width: s.size, height: s.size, animationDuration: `${s.duration}s` }}
            onClick={() => catchStar(s.id)}
            onAnimationEnd={() => missStar(s.id)}
            aria-label="catch star"
          >
            <Star style={{ width: "100%", height: "100%" }} fill="var(--gold)" />
          </button>
        ))}

        {status !== "playing" && (
          <div className="game-overlay">
            {status === "idle" && <button className="btn" onClick={start}>{starGame.start}</button>}
            {status === "won" && (
              <>
                <p className="hand-text hand-text--dark">{starGame.winMessage}</p>
                <button className="btn btn-ghost" onClick={start}>{starGame.restart}</button>
              </>
            )}
            {status === "timeup" && (
              <>
                <p className="hand-text hand-text--dark">{starGame.timeUpMessage}</p>
                <button className="btn" onClick={start}>{starGame.restart}</button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
