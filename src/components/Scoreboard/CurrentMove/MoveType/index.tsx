import React from "react";
import "./MoveType.css"

interface MoveTypeProps {
  type?: "cross" | "zero";
}

export default function MoveType({ type }: MoveTypeProps) {
  const moveTypeClass = "scoreboard__movetype" + (type ? " scoreboard__movetype_" + type : "");
  return <div className={moveTypeClass}></div>
}