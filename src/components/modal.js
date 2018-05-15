import React from "react";

export const Modal = props => {
  return (
    <div
      className={`hamburger-menu ${
        props.formStatus === props.modalType ? "is-active" : ""
      }`}
    >
      <div className="hamburger-content">
      <p className="modal-title">{props.title}</p>
      <p className="modal-message">{props.message}</p>
        
        <button
          className={`hamburger  hamburger--slider ${
            props.formStatus === props.modalType ? "is-active" : "is-invisible"
          }`}
          type="button"
          aria-label="Menu"
          aria-controls="navigation"
          aria-expanded="true"
          onClick={props.close}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Modal;
