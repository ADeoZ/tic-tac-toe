import React from "react";
import "./MoveSymbol.css"

interface MoveSymbolProps {
  type?: "cross" | "zero";
}

export default function MoveSymbol({ type }: MoveSymbolProps) {
  const moveTypeClass = "scoreboard__movetype" + (type ? " scoreboard__movetype_" + type : "");
  return <div className={moveTypeClass}></div>
}