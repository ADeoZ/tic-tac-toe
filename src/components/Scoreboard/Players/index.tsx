import React from "react";
import "./Players.css";
import PlayerName from "./PlayerName";
import { IPlayer } from "../../../types/interfaces";

interface PlayersProps {
  players: IPlayer[];
}

export default function Players({ players }: PlayersProps) {
  return (
    <div className="scoreboard__players">
      <PlayerName name={players[0].name} active />
      <span>vs.</span>
      <PlayerName name={players[1].name} />
    </div>
  );
}
