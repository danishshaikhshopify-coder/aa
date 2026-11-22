import { MotionConfig } from "framer-motion";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Portal } from "./sections/Portal";
import { MagicalMap } from "./sections/MagicalMap";
import { MemoryGalaxy } from "./sections/MemoryGalaxy";
import { FashionKingdom } from "./sections/FashionKingdom";
import { MysteryMansion } from "./sections/MysteryMansion";
import { MoonlightGarden } from "./sections/MoonlightGarden";
import { RiceDisaster } from "./sections/RiceDisaster";
import { QuestBoardSection } from "./sections/QuestBoardSection";
import { FutureConstellation } from "./sections/FutureConstellation";
import { SecretRoom } from "./sections/SecretRoom";

function scrollToMap() {
  document.getElementById("map")?.scrollIntoView({ behavior: "smooth" });
}

const SECTIONS: Array<{ label: string; node: React.ReactNode }> = [
  { label: "portal", node: <Portal onEnter={scrollToMap} /> },
  { label: "map", node: <MagicalMap /> },
  { label: "memory-galaxy", node: <MemoryGalaxy /> },
  { label: "fashion-kingdom", node: <FashionKingdom /> },
  { label: "mystery-mansion", node: <MysteryMansion /> },
  { label: "moonlight-garden", node: <MoonlightGarden /> },
  { label: "rice-disaster", node: <RiceDisaster /> },
  { label: "quest-board", node: <QuestBoardSection /> },
  { label: "future-constellation", node: <FutureConstellation /> },
  { label: "secret-room", node: <SecretRoom /> },
];

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="app">
        {SECTIONS.map(({ label, node }) => (
          <ErrorBoundary key={label} label={label}>
            {node}
          </ErrorBoundary>
        ))}
      </div>
    </MotionConfig>
  );
}
