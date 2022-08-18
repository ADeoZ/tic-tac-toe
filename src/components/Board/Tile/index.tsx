import React from "react";
import "./Tile.css";

interface TileProps {
  sign?: "cross" | "zero";
  // sign: string;
}

export default function Tile({ sign }: TileProps) {
  const tileClass = "board__tile" + (sign ? " board__tile_" + sign : "");
  return <div className={tileClass}></div>;
}