import React from "react";

interface FormWinnerProps {
  playerName: string;
}

export default function FormWinner({ playerName }: FormWinnerProps) {
  return (
    <>
      <header className="form__title">Победил игрок</header>
      <div className="form__winner">{playerName}</div>
      <button>Признать</button>
    </>
  )
}