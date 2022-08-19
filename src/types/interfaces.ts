export interface IGame {
  players: IPlayer[];
  boardSize: number;  
}

export interface IPlayer {
  name: string;
}

export interface ITile {
  id: number;
  sign: MoveType | "";
}

export type MoveType = "cross" | "zero";

export type ModalContextType = () => void;

export interface IMoveContext {
  current: ICurrentMove;
  setCurrentMove: React.Dispatch<React.SetStateAction<ICurrentMove>>;
}

export interface ICurrentMove {
  player: number;
  move: number;
}