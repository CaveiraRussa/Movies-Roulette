import React from "react";
import { Poster } from "../components/Poster";
import { Movie } from "../data/Movies";
import Blink from "react-blink-text";

interface PosterContainerProps {
  movies: Movie[];
  index: number;
  isStart: boolean;
  isRotate: boolean;
}

export function PosterContainer({
  movies,
  index,
  isStart,
  isRotate,
}: PosterContainerProps) {
  return (
    <>
      {" "}
      <h3 className="text">Noite de filme!</h3>
      <h3 className={isStart ? "text" : "hidden"}>
        Vencedor: {movies[index - 1].name}{" "}
      </h3>
      <Poster className={isStart ? "title" : "hidden"} index={index} />
      <h3 className={isStart ? "text" : "hidden"}>
        Recomendado por: {movies[index - 1].recommendedBy}{" "}
      </h3>
      <h3 className={isRotate ? "" : "hidden"}>
        <Blink
          color="white"
          text="Rodando rodando"
          fontSize="8"
          fontFamily="Roboto"
        ></Blink>
      </h3>
    </>
  );
}
