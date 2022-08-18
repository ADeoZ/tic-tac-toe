import React from "react";
import "./Board.css";
import Tile from "./Tile";

interface BoardProps {
  size?: number;
}

export default function Board({ size = 3 }: BoardProps) {
  const boardMatrix = Array.from({ length: size }, () => Array(size).fill(""));

  // const boardMatrix = [
  //   ["", "zero", "","", "", "", "zero", "","", "",],
  //   ["", "zero", "","", "", "", "zero", "","", "",],
  //   ["", "zero", "","", "", "", "zero", "","", "",],
  // ];

console.log(boardMatrix);

  return (
    <div className="board">
      {boardMatrix.map((row, r) =>
        <div className="board__row" key={r}>
          {row.map((tile, t) =>
            <Tile sign={tile} key={t} />
          )}
        </div>
      )}
    </div>
  )
}