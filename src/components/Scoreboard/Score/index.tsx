import React from "react";
import "./Score.css";
import ScoreItem from "./ScoreItem";

export default function Score() {
  return (
    <div className="scoreboard__score">
      <ScoreItem score={0} />
      <span>счёт</span>
      <ScoreItem score={2} />
    </div>
  )
}