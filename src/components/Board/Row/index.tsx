import React, { memo } from "react";
import "./Row.css";
import { ITile } from "../../../types/interfaces";
import Tile from "./Tile";

interface RowProps {
  row: ITile[];
  callback: (id: number) => void;
}

function Row({ row, callback }: RowProps) {
  return (
    <div className="board__row">
      {row.map((tile) => (
        <Tile id={tile.id} sign={tile.sign} callback={tile.sign ? undefined : callback} key={tile.id} />
      ))}
    </div>
  );
}

export default memo(Row);
