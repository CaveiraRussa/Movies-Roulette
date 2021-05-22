import "./App.css";
import { useState } from "react";

interface Movie {
  name: string;
  imageLocation: string;
  recommendedBy: string;
}

const movies: Movie[] = [
  {
    name: "Monty Python - E o busca pelo calice sagrado",
    imageLocation: "./img/mini1.jpg",
    recommendedBy: "Luiz Augusto"
  },
    {
    name: "Monty Python - Vida de Brian",
    imageLocation: "./img/mini2.jpg",
    recommendedBy: "Luiz Augusto"
  },
    {
    name: "Detroid Rock City",
    imageLocation: "./img/mini3.jpg",
    recommendedBy: "Luiz Augusto"
  },
    {
    name: "Cães de Aluguel",
    imageLocation: "./img/mini4.jpg",
    recommendedBy: "Luiz Augusto"
  },
    {
    name: "Sete homens e um destino",
    imageLocation: "./img/mini5.jpg",
    recommendedBy: "Luiz Augusto"
  },
    {
    name: "O contador",
    imageLocation: "./img/mini6.jpg",
    recommendedBy: "Bianca"
  },
   {
    name: "Shrek",
    imageLocation: "./img/mini7.jpg",
    recommendedBy: "Bianca"
  },
   {
    name: "Spirit O corcel Indomável",
    imageLocation: "./img/mini8.jpg",
    recommendedBy: "Bianca"
  },
   {
    name: "Fuja",
    imageLocation: "./img/mini9.jpg",
    recommendedBy: "Bianca"
  },
   {
    name: "O lobo de wallstreet",
    imageLocation: "./img/mini10.jpg",
    recommendedBy: "Bianca"
  },
  {
    name: "Tom and jerry",
    imageLocation: "./img/mini11.jpg",
    recommendedBy: "Suellen"
  },
  {
    name: "Sociedade da justiça segunda guerra mundial",
    imageLocation: "./img/mini12.jpg",
    recommendedBy: "Suellen"
  },
  {
    name: "Zack Snyder's Justice League",
    imageLocation: "./img/mini13.jpg",
    recommendedBy: "Suellen"
  },
  {
    name: "Scooby doo e a espada",
    imageLocation: "./img/mini14.jpg",
    recommendedBy: "Suellen"
  },
  {
    name: "Willy's Wonderland",
    imageLocation: "./img/mini15.jpg",
    recommendedBy: "Suellen"
  },
  {
	name: "Day of the dead (85)",
    imageLocation: "./img/mini16.jpg",
    recommendedBy: "Conrado"
  },
  {
    name: "Schools of Rock",
    imageLocation: "./img/mini17.jpg",
    recommendedBy: "Conrado"
  },
  {
	name: "Dead Society Poets",
    imageLocation: "./img/mini18.jpg",
    recommendedBy: "Conrado"
  },
  {
	name: "Scary Movie",
    imageLocation: "./img/mini19.jpg",
    recommendedBy: "Conrado"
  },
  {
   name: "Gremlins",
    imageLocation: "./img/mini20.jpg",
    recommendedBy: "Conrado"
  }
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
      <h3 className={isStart ? "title" : "hidden"}>Vencedor: {movies[index].name} </h3>
      <h3 className={isRotate ? "title" : "hidden"}>Rodando rodando</h3>
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
