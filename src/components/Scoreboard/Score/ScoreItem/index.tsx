import React from "react";

interface ScoreItemProps {
  score: number;
}

export default function ScoreItem({ score }: ScoreItemProps) {
  return <div>{score}</div>
}