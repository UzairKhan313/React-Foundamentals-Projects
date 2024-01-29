import React from 'react'
import SingleQuestion from './SingleQuestion'

const Questions = ({ questions, activeId, onChangeToggleId }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => (
        <SingleQuestion
          key={question.id}
          {...question}
          activeId={activeId}
          onChangeToggleId={onChangeToggleId}
        />
      ))}
    </section>
  )
}

export default Questions
