import React, { useState } from "react";
import "./Board.css";
import Tile from "./Tile";
import { ITile } from "../../types/interfaces";

interface BoardProps {
  size?: number;
}

export default function Board({ size = 3 }: BoardProps) {
  const initialBoard: ITile[][] = Array.from({ length: size }, (_, i) =>
    Array.from({ length: size }, (_, x) => {
      return { id: i * size + x, sign: "" };
    })
  );
  const [boardMatrix, setBoardMatrix] = useState<ITile[][]>(initialBoard);

  const moveTypes: ( "zero" | "cross" )[]= ["zero", "cross"];
  const [moveType, setMoveType] = useState(1);

  const clickHandler = (id: number): void => {
    const rowIndex = Math.floor(id / size);
    setBoardMatrix((prev) =>
      prev.map((row, i) =>
        i === rowIndex ? row.map((tile) => (tile.id === id ? { id, sign: moveTypes[moveType] } : tile)) : row
      )
    );
    setMoveType(prev => +!prev);
  };

  return (
    <div className="board">
      {boardMatrix.map((row, r) => (
        <div className="board__row" key={r}>
          {row.map((tile) => (
            <Tile
              id={tile.id}
              sign={tile.sign}
              callback={tile.sign ? undefined : clickHandler}
              key={tile.id}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
