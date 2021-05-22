import "./App.css";
import { useState } from "react";
//@ts-ignore
import Sound from "react-sound";
import roulette_sound from "./sound/bau-da-felicidade.mp3";
import { movies } from "./data/Movies";
import { Poster } from "./components/Poster";

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

  function createManyPieces(n: number) {
    function getTransform(angle: number, i: number) {
      if (n > 2) return `rotate(${angle * i}deg) skewY(${angle - 90}deg)`;
      else
        return (
          `rotate(${angle * i}deg) ` +
          `skewY(${angle - 90 - 0.001}deg) ` +
          `scaleY(1000000000)`
        );
    }

    const pieces = [];

    for (let i = 1; i <= n; i++) {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);

      const angle = 360 / n;

      pieces.push(
        <li
          style={{
            background: `#${randomColor}`,
            transform: getTransform(angle, i),
            overflow: "hidden",
            position: "absolute",
            top: "-10%",
            right: "-10%",
            width: "60%",
            height: "60%",
            transformOrigin: "0% 100%",
          }}
          key={i}
        >
          <img
            style={{
              overflow: "hidden",
              height: "auto",
              width: "100%",
            }}
            src={`./img/mini${i}.jpg`}
          />
        </li>
      );
    }

    return pieces;
  }

  return (
    <div>
      <h3 className="title">Noite de filme!</h3>
      <h3 className={isStart ? "title" : "hidden"}>Vencedor: {movies[index-1].name} </h3>
      <Poster className={isStart ? "title" : "hidden"}
        teste={index}/>
      <h3 className={isStart ? "title" : "hidden"}>Recomendado por: {movies[index-1].recommendedBy} </h3>
      <h3 className={isRotate ? "title" : "hidden"}>Rodando rodando</h3>
      <Circle
        className={isRotate ? "start-rotate" : "start-rotate stop-rotate"}
      >
        <ul>{createManyPieces(movies.length)}</ul>
      </Circle>
      <button className="spin-button" onClick={handleStartButton}>
        Gira a roleta!
      </button>

      <button className="spin-button" onClick={stopRotation}>
        PARA TUDO!
      </button>

      <Sound
        url={roulette_sound}
        playStatus={statusSound}
        playFromPosition={300 /* in milliseconds */}
      />
    </div>
  );
}

function Circle(props: any) {
  return (
    <div
      {...props}
      style={{
        width: "40em",
        height: "40em",
        border: "1px solid black",
        position: "relative",
        padding: 0,
        margin: "1em auto",
        borderRadius: "50%",
        listStyle: "none",
        overflow: "hidden",
      }}
    >
      {props.children}
    </div>
  );
}

export default App;
