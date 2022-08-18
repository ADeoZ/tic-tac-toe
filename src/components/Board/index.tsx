import React, { useState } from "react";
import "./Board.css";
import Tile from "./Tile";
import { ITile } from "../../types/interfaces";

interface BoardProps {
  size?: number;
}

export default function Board({ size = 3 }: BoardProps) {
  const boardMatrix: ITile[][] = Array.from({ length: size }, (_, i) =>
    Array.from({ length: size }, (_, x) => {
      return { id: i * size + x, sign: "" };
    })
  );

  const [boardSigns, setBoardSigns] = useState<ITile[][]>(boardMatrix);

  const clickHandler = (id: number): void => {
    const row = (id + 1) % size;
    setBoardSigns(boardMatrix);
  };

  console.log(boardMatrix);

  return (
    <div className="board">
      {boardMatrix.map((row, r) => (
        <div className="board__row" key={r}>
          {row.map((tile) => (
            <Tile id={tile.id} sign={tile.sign} callback={clickHandler} key={tile.id} />
          ))}
        </div>
      ))}
    </div>
  );
}
