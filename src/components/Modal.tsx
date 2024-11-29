import { createPortal } from "react-dom";
import { useRef } from "react";
import Button from "./Button";
import { IoCloseOutline } from "react-icons/io5";
import "@/styles/modal.scss";
import useToggle from "@/hooks/useToggle";

function Modal({ id, state, children }) {
  const modalRef = useRef(null);
  const { isOpen, handleClose } = useToggle({
    id,
    state,
    elementRef: modalRef,
    closeOnClickOutside: false,
  });

  return createPortal(
    <div className={`modal ${isOpen ? "show" : "hidden"}`} ref={modalRef}>
      <div className="modal__body">
        {children}
        <Button
          variant="tertiary"
          onlyIcon
          icon={IoCloseOutline}
          classNames="modal__close"
          onClick={() => handleClose()}
        />
      </div>
      <div className="modal__overlay" onClick={() => handleClose()}></div>
    </div>,
    document.body
  );
}

export default Modal;
