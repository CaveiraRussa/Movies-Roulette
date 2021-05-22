import "./App.css";
import { useState } from "react";

interface Movie {
  name: string;
  imageLocation: string;
  recommendedBy: string;
}

const movies: Movie[] = [
  {
    name: "Star Wars III",
    imageLocation: "./img/mini1.jpg",
    recommendedBy: "Luiz Augusto",
  },
];

function App() {

  const [isRotate, setIsRotate] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [index, setIndex] = useState(1);

  function startRotation() {
    setIsStart(false);
    setIsRotate(true);
  }

  function stopRotation() {
    setIsStart(true);
    setIsRotate(false);
    generateRandomIndex();
  }

  function generateRandomIndex() {
    setIndex(Math.floor(Math.random() * (20 - 1)) + 1);
  }

  function createManyPieces(n = 20) {
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
                width: "100%"
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
      <h3 className={isRotate ? "title" : "hidden"}>Rodando rodando</h3>
      <h3 className={isStart ? "title" : "hidden"}>Vencedor: {index} </h3>
      <Circle
        className={isRotate ? "start-rotate" : "start-rotate stop-rotate"}
      >
        <ul>{createManyPieces()}</ul>
      </Circle>
      <button className="spin-button" onClick={startRotation}>
        Gira a roleta!
      </button>

      <button className="spin-button" onClick={stopRotation}>
        PARA TUDO!
      </button>
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
