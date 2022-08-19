import React, { useState } from "react";
import "./Board.css";
import Tile from "./Tile";
import { ITile, MoveType } from "../../types/interfaces";
import checkWin from "../../func/checkWin";

interface BoardProps {
  size?: number;
  winCallback: () => void;
}

export default function Board({ size = 3, winCallback }: BoardProps) {
  // начальное поле размера size
  const initialBoard: ITile[][] = Array.from({ length: size }, (_, i) =>
    Array.from({ length: size }, (_, x) => {
      return { id: i * size + x, sign: "" };
    })
  );
  const [boardMatrix, setBoardMatrix] = useState<ITile[][]>(initialBoard);

  // два типа хода: нолик и крестик
  const moveTypes: MoveType[] = ["zero", "cross"];
  const [currentMove, setCurrentMove] = useState(1);

  // расчёт после каждого хода
  const clickHandler = (id: number): void => {
    // заносим новый ход в матрицу
    const rowIndex = Math.floor(id / size);
    setBoardMatrix((prev) =>
      prev.map((row, i) =>
        i === rowIndex ? row.map((tile) => (tile.id === id ? { id, sign: moveTypes[currentMove] } : tile)) : row
      )
    );

    // проверяем на победу
    if (checkWin(moveTypes[currentMove], id, boardMatrix, size, size)) {
      winCallback();
      setCurrentMove(1);
    } else {
      // меняем тип хода на противоположный
      setCurrentMove(prev => +!prev);
    }
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
