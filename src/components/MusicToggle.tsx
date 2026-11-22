import { useRef, useState } from "react";

export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [missing, setMissing] = useState(false);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }
    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => setMissing(true));
  };

  return (
    <div className="music-toggle">
      <audio ref={audioRef} src={`${import.meta.env.BASE_URL}music.mp3`} loop onError={() => setMissing(true)} />
      <button className="btn btn-ghost" onClick={toggle} aria-pressed={playing}>
        {playing ? "⏸ pause music" : "♪ play music"}
      </button>
      {missing && <p className="sub-text music-hint">add a track at public/music.mp3 to enable this</p>}
    </div>
  );
}
