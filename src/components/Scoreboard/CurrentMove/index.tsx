import React from "react";
import "./CurrentMove.css";
import MoveType from "./MoveType";

export default function CurrentMove() {
  return (
    <div className="scoreboard__currentmove">
      <MoveType type="zero" />
      <span>ход</span>
      <MoveType />
    </div>
  );
}