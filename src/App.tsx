import "./App.css";
import React, { useState } from "react";
import Sound from "react-sound";
import roulette_sound from "./sound/bau-da-felicidade.mp3";
import { movies } from "./data/Movies";
import { Poster } from "./components/Poster";
import { Roulette } from "./components/Roulette";

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
    <div>
      <h3 className="title">Noite de filme!</h3>
      <h3 className={isStart ? "title" : "hidden"}>
        Vencedor: {movies[index - 1].name}{" "}
      </h3>

      <Poster className={isStart ? "title" : "hidden"} teste={index} />

      <h3 className={isStart ? "title" : "hidden"}>
        Recomendado por: {movies[index - 1].recommendedBy}{" "}
      </h3>
      <h3 className={isRotate ? "title" : "hidden"}>Rodando rodando</h3>

      <Roulette isRotate={isRotate} movies={movies} />

      <button className="spin-button" onClick={handleStartButton}>
        Gira a roleta!
      </button>

      <button className="spin-button" onClick={stopRotation}>
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
