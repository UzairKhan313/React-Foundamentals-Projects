import { useState } from 'react'

import data from './data'
const App = () => {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])

  const formSubmitHandler = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    setText(data.slice(0, amount))
  }
  return (
    <section className="section-center">
      <h4>tired of Boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={formSubmitHandler}>
        <label htmlFor="amount">Paragraphs : </label>
        <input
          type="number"
          name="amount"
          id="amount"
          min={'1'}
          step={'1'}
          max={'8'}
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
    </section>
  )
}
export default App
