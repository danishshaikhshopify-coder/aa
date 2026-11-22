import { MotionConfig } from "framer-motion";
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

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="app">
        <Portal onEnter={scrollToMap} />
        <MagicalMap />
        <MemoryGalaxy />
        <FashionKingdom />
        <MysteryMansion />
        <MoonlightGarden />
        <RiceDisaster />
        <QuestBoardSection />
        <FutureConstellation />
        <SecretRoom />
      </div>
    </MotionConfig>
  );
}
