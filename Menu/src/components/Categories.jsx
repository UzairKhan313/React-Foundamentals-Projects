import React from 'react'

const Categories = ({ items, onFilterItem }) => {
  return (
    <div className="btn-container">
      {items.map((category) => {
        return (
          <button
            type="button"
            className="btn"
            key={category}
            onClick={() => onFilterItem(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
