import React, { MouseEventHandler } from "react";

import { FaTimes } from "react-icons/fa";

import "./styles.scss";

type Props = {
  handleClose: MouseEventHandler;
  show: boolean;
};

const rootClassName = "rick-morty-modal";

const Modal: React.FC<Props> = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "block" : "none";

  return (
    <div
      className={`${rootClassName} ${rootClassName}--${showHideClassName}`}
      onClick={handleClose}
      data-testid={"modal-body"}
    >
      <section
        className={`${rootClassName}__main`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <FaTimes
          onClick={handleClose}
          className={`${rootClassName}__close`}
          data-testid={"modal-close-btn"}
        />
      </section>
    </div>
  );
};

export default Modal;
