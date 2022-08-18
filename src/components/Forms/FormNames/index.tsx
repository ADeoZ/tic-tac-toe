import React from "react";

export default function FormNames() {
  return (
    <>
      <header className="form__title">Введите имена игроков</header>
      <form>
        <label>
          Имя первого:
          <input type="text" />
        </label>
        <label>
          Имя второго:
          <input type="text" />
        </label>
        <button>Начать</button>
      </form>
    </>
  )
}