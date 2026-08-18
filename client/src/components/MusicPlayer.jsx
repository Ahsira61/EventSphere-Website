import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Music2 } from "lucide-react";
import { motion } from "framer-motion";
import music from "../assets/event-luxury.mp3";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.16;
    audio.loop = true;

    return () => {
      audio.pause();
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        await audio.play();
        setPlaying(true);
      }
    } catch (error) {
      console.error("Music could not start:", error);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={music} preload="auto" />

      <motion.button
        className={`music-player ${playing ? "playing" : ""}`}
        onClick={toggleMusic}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.94 }}
        aria-label={playing ? "Turn music off" : "Turn music on"}
      >
        <span className="music-player-icon">
          {playing ? (
            <Volume2 size={17} />
          ) : (
            <VolumeX size={17} />
          )}
        </span>

        <span className="music-player-text">
          {playing ? "Music On" : "Ambient Sound"}
        </span>

        {playing && (
          <span className="music-bars">
            <i />
            <i />
            <i />
            <i />
          </span>
        )}

        {!playing && (
          <Music2 size={15} className="music-note" />
        )}
      </motion.button>
    </>
  );
}