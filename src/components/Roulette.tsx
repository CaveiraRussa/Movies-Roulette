import React from "react";
import { Movie } from "../data/Movies";

interface RouletteProps {
  movies: Movie[];
  isRotate: boolean;
}

export function Roulette({ movies, isRotate }: RouletteProps) {
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
    <Circle className={isRotate ? "start-rotate" : "start-rotate stop-rotate"}>
      <ul>{createManyPieces(movies.length)}</ul>
    </Circle>
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
