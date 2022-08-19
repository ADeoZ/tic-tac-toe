import React, { createContext, useState } from "react";
import "./Modal.css";

interface ModalProps {
  show?: true;
  children: React.ReactNode;
}

type ModalContextType = () => void;


export const ModalContext = createContext<ModalContextType>(() => { });

export default function Modal({ show = true, children }: ModalProps) {

  const [showState, setShowState] = useState<boolean>(show);

  return (
    <>
      {showState &&
        <div className="modal modal_active">
          <div className="modal__container">
            <ModalContext.Provider value={() => setShowState(false)}>
              {children}
            </ModalContext.Provider>
          </div>
        </div>
      }
    </>
  );
}