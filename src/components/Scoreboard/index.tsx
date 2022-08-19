import React from "react";
import "./Scoreboard.css";
import CurrentMove from "./CurrentMove";
import Players from "./Players";
import Score from "./Score";
import { IPlayer } from "../../types/interfaces";

interface ScoreboardProps {
  players: IPlayer[];
  scores: number[];
}

export default function Scoreboard({ players, scores }: ScoreboardProps) {
  return (
    <div className="scoreboard">
      <Players players={players} />
      <CurrentMove />
      <Score scores={scores} />
    </div>
  );
}
