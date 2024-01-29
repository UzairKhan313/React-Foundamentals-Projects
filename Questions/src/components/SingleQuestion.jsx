import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const SingleQuestion = ({ id, title, info, activeId, onChangeToggleId }) => {
  const isActive = id === activeId
  //   const [showInfo, setShowInfo] = useState(false)

  return (
    <article className="question">
      <header>
        {title}
        <button className="question-btn" onClick={() => onChangeToggleId(id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  )
}

export default SingleQuestion
