import React, { memo } from "react";
import "./Score.css";
import ScoreItem from "./ScoreItem";

interface ScoreProps {
  scores: number[];
}

function Score({ scores }: ScoreProps) {
  return (
    <div className="scoreboard__score">
      <ScoreItem score={scores[0]} />
      <span>счёт</span>
      <ScoreItem score={scores[1]} />
    </div>
  );
}

export default memo(Score);
