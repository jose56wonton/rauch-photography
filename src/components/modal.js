import React from 'react'


export const Modal = (props) => {
  return(
    <div
          className={`modal ${
            prop.formStatus === props.modalType ? "is-active" : ""
          }`}
        >
          <div className="modal-background" />
          <div className="modal-content">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">{props.title}</p>
              </header>
              <div className="card-content">
                {props.message}
              </div>
            </div>
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={props.close}
          />
        </div>
  )
}

export default Modal

