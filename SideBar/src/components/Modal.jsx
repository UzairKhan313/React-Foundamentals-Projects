import React from 'react'
import { FaTimes } from 'react-icons/fa'

import { useGlobalContext } from '../store/store'

const Modal = () => {
  const { modalIsOpen, closeModal } = useGlobalContext()
  console.log(modalIsOpen)
  return (
    <div className={`modal-overlay ${modalIsOpen ? 'show-modal' : ''}`}>
      <div className="modal-container ">
        <h3>Modal Content</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default Modal
