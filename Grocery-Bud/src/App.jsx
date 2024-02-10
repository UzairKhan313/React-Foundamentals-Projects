import { useState } from 'react'
import { nanoid } from 'nanoid'
import { ToastContainer, toast } from 'react-toastify'

import Form from './components/Form'
import ItemList from './components/ItemList'

const setLocalStorageItem = (items) => {
  localStorage.setItem('List', JSON.stringify(items))
}

const getLocalStorageItem = () => {
  let list = localStorage.getItem('List')
  if (list) {
    list = JSON.parse(localStorage.getItem('List'))
  } else {
    list = []
  }
  return list
}
const App = () => {
  const [items, setItems] = useState(getLocalStorageItem())

  const addItemHandler = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    }
    const newItems = [...items, newItem]
    setItems(newItems)
    setLocalStorageItem(newItems)
    toast.success('Item Successfully added to the list')
  }
  const removeItemHandler = (id) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
    setLocalStorageItem(newItems)
    toast.success('Item Remove  Successfully')
  }

  const editItemHandler = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed }
        return newItem
      }
      return item
    })
    setItems(newItems)
    setLocalStorageItem(newItems)
  }
  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form onAddItem={addItemHandler} />
      <ItemList
        items={items}
        onRemoveItem={removeItemHandler}
        onEdit={editItemHandler}
      />
    </section>
  )
}

export default App
