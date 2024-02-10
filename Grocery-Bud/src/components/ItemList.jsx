import React from 'react'
import SingleItem from './SingleItem'

const ItemList = ({ items, onRemoveItem, onEdit }) => {
  return (
    <div className="items">
      {items.map((item) => (
        <SingleItem
          key={item.id}
          item={item}
          onRemoveItem={onRemoveItem}
          editItemHandler={onEdit}
        />
      ))}
    </div>
  )
}

export default ItemList
