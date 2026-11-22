import { useMemo } from "react";

type Star = { left: number; top: number; size: number; delay: number; duration: number };

function seeded(seed: number, count: number): Star[] {
  const stars: Star[] = [];
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  for (let i = 0; i < count; i++) {
    stars.push({
      left: rand() * 100,
      top: rand() * 100,
      size: 1.5 + rand() * 2.5,
      delay: rand() * 5,
      duration: 2.5 + rand() * 3,
    });
  }
  return stars;
}

export function Starfield({ seed = 1, count = 50 }: { seed?: number; count?: number }) {
  const stars = useMemo(() => seeded(seed, count), [seed, count]);
  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((s, i) => (
        <span
          key={i}
          className="star-dot"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
