import { useEffect } from "react";
import style from "./Modal.module.css";
import { createPortal } from "react-dom";

type ModalProps = {
  children?: React.ReactNode;
  onClose: () => void;
};

const modalEl = document.querySelector("#modal") as HTMLElement;
export const Modal = ({ children, onClose }: ModalProps) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e: KeyboardEvent): void => {
    if (e.code === "Escape") {
      onClose();
    }
  };
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={style.overlay} onClick={handleOverlayClick}>
      <div className={style.modalCard}>{children}</div>
    </div>,
    modalEl
  );
};
