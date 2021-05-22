import "./App.css";
import React, { useState } from "react";
import Sound from "react-sound";
import roulette_sound from "./sound/bau-da-felicidade.mp3";
import { movies } from "./data/Movies";
import { Poster } from "./components/Poster";
import { Roulette } from "./components/Roulette";
import { PosterContainer } from "./containers/PosterContainer";

function App() {
  const [isRotate, setIsRotate] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [index, setIndex] = useState(1);
  const [statusSound, setStatusSound] = useState(Sound.status.STOPPED);

  function startRotation() {
    setIsStart(false);
    setIsRotate(true);
  }

  function stopRotation() {
    setIsStart(true);
    setIsRotate(false);
    stopSound();
    generateRandomIndex(movies.length);
  }

  function generateRandomIndex(count: number) {
    setIndex(Math.floor(Math.random() * count) + 1);
  }

  function handleStartButton() {
    startRotation();
    startSound();
  }

  function startSound() {
    setStatusSound(Sound.status.PLAYING);
  }

  function stopSound() {
    setStatusSound(Sound.status.STOPPED);
  }

  return (
    <div className="screen">
      <PosterContainer
        index={index}
        isRotate={isRotate}
        isStart={isStart}
        movies={movies}
      />
      <div className={isStart ? "hidden" : "title"}>
      <Roulette  isRotate={isRotate} movies={movies} />
      </div>
      <button className={isRotate ? "disble-button" :"spin-button"} onClick={handleStartButton} disabled={isRotate}>
        Gira a roleta!
      </button>

      <button className={isRotate ? "spin-button" :"disble-button"} onClick={stopRotation} disabled={!isRotate}>
        PARA TUDO!
      </button>

      <Sound
        url={roulette_sound}
        playStatus={statusSound}
        playFromPosition={300}
      />
    </div>
  );
}

export default App;
