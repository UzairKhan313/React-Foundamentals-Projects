import React from 'react'

const Categories = ({ items }) => {
  return (
    <div className="btn-container">
      {items.map((category) => {
        return (
          <button type="button" className="btn" key={category}>
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
