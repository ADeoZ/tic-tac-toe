import React from "react";
import { IRatingPlayer } from "../../../types/interfaces";
import "./RatingPlayer.css";

interface RatingPlayerProps extends IRatingPlayer {
  active: boolean;
}

export default function RatingPlayer({ player, score, active }: RatingPlayerProps) {
  const RatingPlayerClass = "rating__player" + (active ? " rating__player_current" : "");

  return (
    <div className={RatingPlayerClass}>
      <div className="rating__name">{player}</div>
      <div className="rating__score">{score}</div>
    </div>
  );
}
