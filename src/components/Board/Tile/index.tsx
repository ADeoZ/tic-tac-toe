import React from "react";
import { ITile } from "../../../types/interfaces";
import "./Tile.css";

interface TileProps extends ITile {
  callback: (id: number) => void;
}

export default function Tile({ id, sign, callback }: TileProps) {
  const clickHandler = () => {
    callback(id);
  };

  const tileClass = "board__tile" + (sign ? " board__tile_" + sign : "");

  return <div className={tileClass} onClick={clickHandler}></div>;
}
