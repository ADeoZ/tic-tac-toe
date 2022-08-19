import React, { useContext } from "react";
import { MoveContext } from "../../../App";
import { IMoveContext, MoveType } from "../../../types/interfaces";
import "./CurrentMove.css";
import MoveSymbol from "./MoveSymbol";

export default function CurrentMove() {
  const moveTypes: MoveType[] = ["zero", "cross"];
  const {current} = useContext(MoveContext) as IMoveContext;

  return (
    <div className="scoreboard__currentmove">
      <MoveSymbol type={current.player === 0 ? moveTypes[current.move] : undefined} />
      <span>ход</span>
      <MoveSymbol type={current.player === 1 ? moveTypes[current.move] : undefined}/>
    </div>
  );
}