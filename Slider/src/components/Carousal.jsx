import React, { useEffect, useState } from 'react'

import { FaQuoteRight } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { shortList, list, longList } from '../data'

const Carousal = () => {
  const [people, setPeople] = useState(list)
  const [currentPerson, setCurrentPerson] = useState(0)

  const prevSlideHandler = () => {
    setCurrentPerson((prevState) => {
      const result = (prevState - 1 + people.length) % people.length
      return result
    })
  }
  const nextSlideHandler = () => {
    setCurrentPerson((prevState) => {
      const result = (prevState + 1) % people.length
      return result
    })
  }

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlideHandler()
    }, 2000)

    return () => clearInterval(sliderId)
  }, [currentPerson])
  return (
    <section className="slider-container">
      {people.map((person, index) => {
        const { id, image, name, title, quote } = person
        return (
          <article
            key={id}
            className="slide"
            style={{
              transform: `translateX(${100 * (index - currentPerson)}%)`,
              opacity: index === currentPerson ? 1 : 0,
              visibility: index === currentPerson ? 'visible' : 'hidden',
            }}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        )
      })}
      <button type="button" className="prev" onClick={prevSlideHandler}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlideHandler}>
        <FiChevronRight />
      </button>
    </section>
  )
}

export default Carousal
