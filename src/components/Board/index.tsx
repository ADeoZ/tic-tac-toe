import React, { useContext, useState } from "react";
import "./Board.css";
import { IMoveContext, ITile, MoveType } from "../../types/interfaces";
import checkWin from "../../func/checkWin";
import { MoveContext } from "../../App";
import Row from "./Row";
import Undo from "./Undo";

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

  // отмена хода
  const undoHandler = () => {
    if (allMoves.length > 0) {
      // убираем последний ход из матрицы
      const id = allMoves[allMoves.length - 1];
      const rowIndex = Math.floor(id / size);
      setBoardMatrix((prev) =>
        prev.map((row, i) =>
          i === rowIndex
            ? row.map((tile) => (tile.id === id ? { id, sign: "" } : tile))
            : row
        )
      );

      // отменяем последний ход
      setAllMoves((prev) => prev.slice(0, -1));

      // меняем тип хода на противоположный
      setCurrentMove((prev) => {
        return { player: +!prev.player, move: +!prev.move };
      });
    }
  };

  // расчёт после каждого хода
  const moveHandler = (id: number): void => {
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
        <Row row={row} callback={moveHandler} key={r} />
      ))}
      <Undo callback={undoHandler} active={allMoves.length > 0} />
    </div>
  );
}
