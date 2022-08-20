import React, { memo } from "react";
import { ITile } from "../../../../types/interfaces";
import "./Tile.css";

interface TileProps extends ITile {
  callback?: (id: number) => void;
}

function Tile({ id, sign, callback }: TileProps) {
  const clickHandler = () => {
    if (callback) {
      callback(id);
    }
  };

  const tileClass = "board__tile" + (sign ? " board__tile_" + sign : "");

  return <div className={tileClass} onClick={callback ? clickHandler : undefined}></div>;
}

export default memo(Tile);
