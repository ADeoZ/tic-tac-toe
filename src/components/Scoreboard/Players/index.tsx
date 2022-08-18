import React from "react";
import "./Players.css";
import PlayerName from "./PlayerName";

export default function Players() {
  return (
    <div className="scoreboard__players">
      <PlayerName name="Игрок 1" active />
      <span>vs.</span>
      <PlayerName name="Игрок 2" />
    </div>
  );
}