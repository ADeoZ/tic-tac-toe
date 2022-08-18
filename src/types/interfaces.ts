export interface IGame {
  players: IPlayer[];
  boardSize: number;  
}

export interface IPlayer {
  name: string;
}

export interface ITile {
  id: number;
  sign: "cross" | "zero" | "";
}