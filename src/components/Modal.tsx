import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import Button from "./Button";
import { IoCloseOutline } from "react-icons/io5";
import "@/styles/modal.scss";

function Modal({ isOpen, setOpen, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal">
      <div className="modal__body">
        {children}
        <Button
          variant="tertiary"
          onlyIcon
          icon={IoCloseOutline}
          classNames="modal__close"
          onClick={() => setOpen(false)}
        />
      </div>
      <div className="modal__overlay" onClick={() => setOpen(false)}></div>
    </div>,
    document.body
  );
}

export default Modal;
