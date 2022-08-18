import React from "react";
import "./FormError.css";

interface FormErrorProps {
  text: string;
}

export default function FormError({ text }: FormErrorProps) {
  return <div className="form__error">{text}</div>;
}
