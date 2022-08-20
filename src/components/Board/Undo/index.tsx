import React from "react";
import "./Undo.css";

interface UndoProps {
  callback: () => void;
  active: boolean;
}

export default function Undo({ callback, active }: UndoProps) {
  const UndoClass = "board__undo-button" + (active ? " board__undo-button_active" : "");

  return (
    <div className="board__undo">
      <button className={UndoClass} onClick={active ? callback : undefined}>
        передумать
      </button>
    </div>
  );
}
