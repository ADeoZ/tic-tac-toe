import React from "react";
import "./Button.css";

interface ButtonProps {
  text: string;
  callback?: () => void;
}

export default function Button({ text, callback }: ButtonProps) {
  return (
    <button className="form__button" onClick={callback}>
      {text}
    </button>
  );
}
