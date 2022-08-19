import React from "react";
import "./Score.css";
import ScoreItem from "./ScoreItem";

interface ScoreProps {
  scores: number[];
}

export default function Score({ scores }: ScoreProps) {
  return (
    <div className="scoreboard__score">
      <ScoreItem score={scores[0]} />
      <span>счёт</span>
      <ScoreItem score={scores[1]} />
    </div>
  );
}
