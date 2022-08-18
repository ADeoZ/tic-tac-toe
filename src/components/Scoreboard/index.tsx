import React from "react";
import "./Scoreboard.css";
import CurrentMove from "./CurrentMove";
import Players from "./Players";
import Score from "./Score";
import { IPlayer } from "../../types/interfaces";

interface ScoreboardProps {
  players: IPlayer[];
}

export default function Scoreboard({ players }: ScoreboardProps) {
  return (
    <div className="scoreboard">
      <Players players={players} />
      <CurrentMove />
      <Score />
    </div>
  );
}
