import React from "react";
import { MoveType } from "../../../../types/interfaces";
import "./MoveSymbol.css";

interface MoveSymbolProps {
  type?: MoveType;
}

export default function MoveSymbol({ type }: MoveSymbolProps) {
  const moveTypeClass = "scoreboard__movetype" + (type ? " scoreboard__movetype_" + type : "");

  return <div className={moveTypeClass}></div>;
}
