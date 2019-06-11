import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal">
      <div className="modal-content">
        <button
          className="modal-close-button"
          onClick={hide}
        >
          <span>&times;</span>
        </button>
        <p>
          I'm a modal
        </p>
      </div>
    </div>
  </React.Fragment>, document.body
) : null

export default Modal
