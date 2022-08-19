import { ITile, MoveType } from "../types/interfaces";

// считаем выигрыш в зависимости от текущего хода, размера доски и необходимой суммы знаков для выигрыша
// функция длинная, потому что универсальная для количества знаков и размера доски
export default function checkWin(move: MoveType, id: number, boardMatrix: ITile[][], boardSize: number, toWin: number) {
  const columnIndex = id % boardSize;
  const rowIndex = Math.floor(id / boardSize);

  // проверка по горизонтали
  const rowToCalc = boardMatrix[rowIndex];
  let sumHorizontal = 1;
  // считаем налево
  for (let i = columnIndex - 1; i >= 0; i--) {
    if (rowToCalc[i].sign === move) { sumHorizontal++; } else break;
    if (sumHorizontal >= toWin) return true;
  }  
  // считаем направо
  for (let i = columnIndex + 1; i < boardSize; i++) {
    if (rowToCalc[i].sign === move) { sumHorizontal++; } else break;
    if (sumHorizontal >= toWin) return true;
  }  
  
  // проверка по вертикали
  let sumVertical = 1;
  // считаем наверх
  for (let i = rowIndex - 1; i >= 0; i--) {
    if (boardMatrix[i][columnIndex].sign === move) { sumVertical++; } else break;
    if (sumVertical >= toWin) return true;
  }  
  // считаем вниз
  for (let i = rowIndex + 1; i < boardSize; i++) {
    if (boardMatrix[i][columnIndex].sign === move) { sumVertical++; } else break;
    if (sumVertical >= toWin) return true;
  }  

  // проверка по диагонали слева сверху -> вниз направо
  // снизу вверх налево
  let upDownDiagonal = 1;
  for (let x = rowIndex - 1, y = columnIndex - 1; x >= 0 && y >= 0; x--, y--) {
    if (boardMatrix[x][y].sign === move) { upDownDiagonal++; } else break;
    if (upDownDiagonal >= toWin) return true;
  }  
  // сверху вниз направо
  for (let x = rowIndex + 1, y = columnIndex + 1; x < boardSize && y < boardSize; x++, y++) {
    if (boardMatrix[x][y].sign === move) { upDownDiagonal++; } else break;
    if (upDownDiagonal >= toWin) return true;
  }  

  // проверка по диагонали слева снизу -> вверх направо
  // снизу вверх направо
  let downUpDiagonal = 1;
  for (let x = rowIndex - 1, y = columnIndex + 1; x >= 0 && y < boardSize; x--, y++) {
    if (boardMatrix[x][y].sign === move) { downUpDiagonal++; } else break;
    if (downUpDiagonal >= toWin) return true;
  }  
  // сверху вниз налево
  for (let x = rowIndex + 1, y = columnIndex - 1; x < boardSize && y >= 0; x++, y--) {
    if (boardMatrix[x][y].sign === move) { downUpDiagonal++; } else break;
    if (downUpDiagonal >= toWin) return true;
  }  

  return false;
}
