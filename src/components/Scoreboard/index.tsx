import React from "react";
import "./Scoreboard.css";
import CurrentMove from "./CurrentMove";
import Players from "./Players";
import Score from "./Score";

export default function Scoreboard() {
  return (
    <div className="scoreboard">
      <Players />
      <CurrentMove />
      <Score />
    </div>
  )
}