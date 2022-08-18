import React, { useRef, useState } from "react";
import "../Forms.css";
import Button from "../Button";
import FormError from "../FormError";

interface FormNamesProps {
  callback: (player1: string, player2: string, boardSize: number) => void;
}

export default function FormNames({ callback }: FormNamesProps) {
  const [error, setError] = useState<boolean>(false);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const secondNameRef = useRef<HTMLInputElement>(null);
  const boardSizeRef = useRef<HTMLSelectElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (firstNameRef.current && secondNameRef.current && boardSizeRef.current) {
      if (firstNameRef.current.value && secondNameRef.current.value && boardSizeRef.current.value) {
        callback(firstNameRef.current.value, secondNameRef.current.value, +boardSizeRef.current.value);
      } else {
        setError(true);
      }
    }
  };

  return (
    <>
      <header className="form__title">Настройте игру</header>
      <form className="form__container" onSubmit={submitHandler}>
        <label className="form__label">
          <div className="form__label-title">Первый игрок:</div>
          <input
            ref={firstNameRef}
            type="text"
            name="firstname"
            className="form__input"
            placeholder="Введите имя"
          />
        </label>
        <label className="form__label">
          <div className="form__label-title">Второй игрок:</div>
          <input
            ref={secondNameRef}
            type="text"
            name="secondname"
            className="form__input"
            placeholder="Тут тоже введите"
          />
        </label>
        <label className="form__label">
          <div className="form__label-title">Размер поля:</div>
          <select ref={boardSizeRef} name="boardsize" className="form__select">
            <option value={3}>3 X 3</option>
            <option value={5}>5 X 5</option>
            <option value={10}>10 X 10</option>
          </select>
        </label>
        <Button text="Начать" />
      </form>
      {error && <FormError text={"Нужно всё заполнить!"} />}
    </>
  );
}
