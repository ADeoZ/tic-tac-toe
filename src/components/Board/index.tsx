import React, { useContext, useState } from "react";
import "./Board.css";
import Tile from "./Tile";
import { IMoveContext, ITile, MoveType } from "../../types/interfaces";
import checkWin from "../../func/checkWin";
import { MoveContext } from "../../App";

interface BoardProps {
  size?: number;
  winCallback: () => void;
  drawCallback: () => void;
}

export default function Board({ size = 3, winCallback, drawCallback }: BoardProps) {
  // начальное поле размера size х size
  const initialBoard: ITile[][] = Array.from({ length: size }, (_, i) =>
    Array.from({ length: size }, (_, x) => {
      return { id: i * size + x, sign: "" };
    })
  );
  const [boardMatrix, setBoardMatrix] = useState<ITile[][]>(initialBoard);

  // два типа хода: нолик и крестик
  const moveTypes: MoveType[] = ["zero", "cross"];
  const { current, setCurrentMove } = useContext(MoveContext) as IMoveContext;

  // запись всех ходов
  const [allMoves, setAllMoves] = useState<number[]>([]);

  // расчёт после каждого хода
  const clickHandler = (id: number): void => {
    // заносим новый ход в матрицу
    const rowIndex = Math.floor(id / size);
    setBoardMatrix((prev) =>
      prev.map((row, i) =>
        i === rowIndex
          ? row.map((tile) => (tile.id === id ? { id, sign: moveTypes[current.move] } : tile))
          : row
      )
    );

    // записываем сделанный ход
    setAllMoves((prev) => [...prev, id]);

    // проверяем на победу
    if (checkWin(moveTypes[current.move], id, boardMatrix, size, size)) {
      setCurrentMove((prev) => {
        return { player: +!prev.player, move: 1 };
      });
      winCallback();
      setBoardMatrix(initialBoard);
      setAllMoves([]);

      // проверяем на ничью
    } else if (allMoves.length + 1 === size * size) {
      setCurrentMove((prev) => {
        return { player: +!prev.player, move: 1 };
      });
      drawCallback();
      setBoardMatrix(initialBoard);
      setAllMoves([]);

      // продолжаем игру
    } else {
      // меняем тип хода на противоположный
      setCurrentMove((prev) => {
        return { player: +!prev.player, move: +!prev.move };
      });
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
