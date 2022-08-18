import React from "react";
import "./PlayerName.css";

interface PlayerNameProps {
  name: string;
  active?: boolean;
}

export default function PlayerName({ name, active }: PlayerNameProps) {
  const playerNameClass = "scoreboard__playername" + (active ? " scoreboard__playername_active" : "");

  return <div className={playerNameClass}>{name}</div>
}