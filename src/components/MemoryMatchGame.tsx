import { useEffect, useRef, useState } from "react";
import { Heart, Star, Flower, Butterfly } from "./Decor";
import { completeTask } from "../lib/progress";
import { memoryGame } from "../content";

function MoonIcon() {
  return (
    <svg viewBox="0 0 40 40" width="100%" height="100%">
      <circle cx="20" cy="20" r="16" fill="var(--gold)" />
      <circle cx="26" cy="15" r="13" fill="var(--white-soft)" />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg viewBox="0 0 40 30" width="100%" height="100%">
      <rect x="2" y="3" width="36" height="24" rx="4" fill="var(--pink-deep)" />
      <path d="M2 5 L20 18 L38 5" fill="none" stroke="var(--white-soft)" strokeWidth="2.5" />
    </svg>
  );
}

const ICONS = [
  { type: "heart", Comp: () => <Heart style={{ width: "60%", height: "60%" }} /> },
  { type: "star", Comp: () => <Star style={{ width: "60%", height: "60%" }} /> },
  { type: "flower", Comp: () => <Flower style={{ width: "60%", height: "60%" }} /> },
  { type: "butterfly", Comp: () => <Butterfly style={{ width: "70%", height: "60%" }} /> },
  { type: "moon", Comp: MoonIcon },
  { type: "envelope", Comp: EnvelopeIcon },
];

type Card = { id: number; type: string };

function shuffledDeck(): Card[] {
  const deck = [...ICONS, ...ICONS].map((icon, i) => ({ id: i, type: icon.type }));
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

export function MemoryMatchGame() {
  const [cards, setCards] = useState<Card[]>(() => shuffledDeck());
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [moves, setMoves] = useState(0);
  const won = matched.size === cards.length && cards.length > 0;
  const completedRef = useRef(false);

  useEffect(() => {
    if (flipped.length !== 2) return;
    const [a, b] = flipped;
    if (cards[a].type === cards[b].type) {
      const timeout = window.setTimeout(() => {
        setMatched((prev) => new Set(prev).add(a).add(b));
        setFlipped([]);
      }, 450);
      return () => window.clearTimeout(timeout);
    }
    const timeout = window.setTimeout(() => setFlipped([]), 900);
    return () => window.clearTimeout(timeout);
  }, [flipped, cards]);

  useEffect(() => {
    if (won && !completedRef.current) {
      completedRef.current = true;
      completeTask("memoryMatch");
    }
  }, [won]);

  function flip(i: number) {
    if (flipped.length === 2 || flipped.includes(i) || matched.has(i)) return;
    if (flipped.length === 1) setMoves((m) => m + 1);
    setFlipped((prev) => [...prev, i]);
  }

  function reset() {
    setCards(shuffledDeck());
    setFlipped([]);
    setMatched(new Set());
    setMoves(0);
    completedRef.current = false;
  }

  return (
    <div className="game-panel">
      <h3 className="bubble-heading" style={{ fontSize: "1.4rem" }}>{memoryGame.heading}</h3>
      <p className="sub-text">{memoryGame.sub}</p>
      <div className="game-hud">
        <span>moves: {moves}</span>
        <span>matched: {matched.size / 2} / {ICONS.length}</span>
      </div>
      <div className="memory-grid">
        {cards.map((card, i) => {
          const isFlipped = flipped.includes(i) || matched.has(i);
          const Comp = ICONS.find((icon) => icon.type === card.type)!.Comp;
          return (
            <button
              key={card.id}
              className={`memory-card ${isFlipped ? "is-flipped" : ""} ${matched.has(i) ? "is-matched" : ""}`}
              onClick={() => flip(i)}
              aria-label="memory card"
            >
              <div className="memory-card-inner">
                <div className="memory-card-face memory-card-back" />
                <div className="memory-card-face memory-card-front">
                  <Comp />
                </div>
              </div>
            </button>
          );
        })}
      </div>
      {won && (
        <>
          <p className="hand-text hand-text--dark" style={{ textAlign: "center" }}>{memoryGame.winMessage}</p>
          <button className="btn btn-ghost" onClick={reset}>{memoryGame.reset}</button>
        </>
      )}
      {!won && (
        <button className="btn btn-ghost" onClick={reset}>{memoryGame.reset}</button>
      )}
    </div>
  );
}
