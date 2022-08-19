import React, { useContext } from "react";
import "./Players.css";
import PlayerName from "./PlayerName";
import { IMoveContext, IPlayer } from "../../../types/interfaces";
import { MoveContext } from "../../../App";

interface PlayersProps {
  players: IPlayer[];
}

export default function Players({ players }: PlayersProps) {
  const { current } = useContext(MoveContext) as IMoveContext;

  return (
    <div className="scoreboard__players">
      <PlayerName name={players[0].name} active={current.player === 0} />
      <span>vs.</span>
      <PlayerName name={players[1].name} active={current.player === 1} />
    </div>
  );
}
