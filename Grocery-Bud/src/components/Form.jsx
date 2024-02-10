import React, { useState } from 'react'

import { toast } from 'react-toastify'

const Form = ({ onAddItem }) => {
  const [newItem, setNewItem] = useState('')
  const formSubmitHandler = (e) => {
    e.preventDefault()
    if (!newItem) {
      toast.error('Please provide a valid value')
      return
    }
    onAddItem(newItem)
    setNewItem('')
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
        />
        <button className="btn" type="submit">
          Add Item
        </button>
      </div>
    </form>
  )
}
export default Form
