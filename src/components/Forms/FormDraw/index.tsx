import React, { useContext } from "react";
import "../Forms.css";
import Button from "../Button";
import { ModalContext } from "../../Modal";

interface FormDrawProps {
  closeCallback: () => void;
}

export default function FormDraw({ closeCallback }: FormDrawProps) {
  const closeModal = useContext(ModalContext);

  const closeHandler = () => {
    closeCallback();
    closeModal();
  };

  return (
    <>
      <header className="form__title">Ничья</header>
      <Button text="Согласиться" callback={closeHandler} />
    </>
  );
}
