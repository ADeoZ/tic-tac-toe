import React from "react";
import "../Forms.css";
import "./FormWinner.css";
import Button from "../Button";

interface FormWinnerProps {
  playerName: string;
}

export default function FormWinner({ playerName }: FormWinnerProps) {
  return (
    <>
      <header className="form__title">Победил игрок</header>
      <div className="form__winner">{playerName}</div>
      <Button text="Признать" callback={() => {console.log('test')}} />
    </>
  )
}