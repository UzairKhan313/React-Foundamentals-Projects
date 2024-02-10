import React, { useState } from 'react'

const Form = ({ onAddColor }) => {
  const [color, setColor] = useState('')
  const formSubmitHandler = (e) => {
    e.preventDefault()
    onAddColor(color)
  }
  return (
    <section className="container">
      <h4>Color Generator</h4>
      <form className="color-form" onSubmit={formSubmitHandler}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"
        />
        <button className="btn" type="submit" style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  )
}

export default Form
