import { useEffect, useRef, type CSSProperties } from "react";
import gsap from "gsap";

const PETAL_D = "M30,30 C18,22 14,8 24,4 C34,0 40,14 30,30 Z";
const ANGLES = [0, 60, 120, 180, 240, 300];

export function DrawnFlower({
  className,
  style,
  petal = "var(--pink-deep)",
  center = "var(--gold)",
  delay = 0,
}: {
  className?: string;
  style?: CSSProperties;
  petal?: string;
  center?: string;
  delay?: number;
}) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    const paths = svg.querySelectorAll<SVGPathElement>("path");
    const dot = svg.querySelector<SVGCircleElement>("circle");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(paths, { fillOpacity: 0.95 });
      gsap.set(dot, { scale: 1, transformOrigin: "50% 50%" });
      return;
    }

    const lengths = Array.from(paths).map((p) => p.getTotalLength());

    paths.forEach((p, i) => {
      gsap.set(p, { strokeDasharray: lengths[i], strokeDashoffset: lengths[i], fillOpacity: 0 });
    });
    gsap.set(dot, { scale: 0, transformOrigin: "50% 50%" });

    const tl = gsap.timeline({ delay });
    paths.forEach((p, i) => {
      tl.to(p, { strokeDashoffset: 0, duration: 0.6, ease: "power2.inOut" }, i * 0.12);
      tl.to(p, { fillOpacity: 0.95, duration: 0.4, ease: "power1.out" }, i * 0.12 + 0.4);
    });
    tl.to(dot, { scale: 1, duration: 0.5, ease: "back.out(2)" });

    return () => {
      tl.kill();
    };
  }, [delay]);

  return (
    <svg ref={ref} className={className} style={style} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {ANGLES.map((rot) => (
        <path key={rot} d={PETAL_D} stroke={petal} strokeWidth="1.5" fill={petal} transform={`rotate(${rot} 30 30)`} />
      ))}
      <circle cx="30" cy="30" r="6" fill={center} />
    </svg>
  );
}
