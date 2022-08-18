import React from "react";
import "./Modal.css";

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  return (
    <div className="modal modal_active">
      <div className="modal__container">
        {children}
      </div>
    </div>
  );
}