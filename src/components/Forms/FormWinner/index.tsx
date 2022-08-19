import React, { useContext } from "react";
import "../Forms.css";
import "./FormWinner.css";
import Button from "../Button";
import { ModalContext } from "../../Modal";

interface FormWinnerProps {
  playerName: string;
}

export default function FormWinner({ playerName }: FormWinnerProps) {
  const closeModal = useContext(ModalContext);

  return (
    <>
      <header className="form__title">Победил игрок</header>
      <div className="form__winner">{playerName}</div>
      <Button text="Признать" callback={closeModal} />
    </>
  )
}