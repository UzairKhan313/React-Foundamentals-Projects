import { useState } from 'react'
import people from './data'

const App = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const nextPersonHandler = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % people.length
      return newIndex
    })
  }
  const prevPersonHandler = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + people.length) % people.length
      return newIndex
    })
  }

  const randomPersonHandler = () => {
    let randomIndex = Math.floor(Math.random() * people.length)
    if (randomIndex === index) {
      randomIndex = randomIndex + 1
    }
    const newIndex = randomIndex % people.length
    setIndex(newIndex)
  }

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">{/* TODO ICON WILL GO HERE */}</span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPersonHandler}>
            {/* ICON Go HERE */} previous
          </button>
          <button className="next-btn" onClick={nextPersonHandler}>
            {/* ICON Go HERE */} next
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPersonHandler}>
          surprise me
        </button>
      </article>
    </main>
  )
}
export default App
