import { useState } from 'react'
import Values from 'values.js'
import { ToastContainer, toast } from 'react-toastify'

import ColorList from './components/ColorList'
import Form from './components/Form'

const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10))

  const addColorHandler = (color) => {
    try {
      const newColor = new Values(color).all(10)
      setColors(newColor)
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <main>
      <Form onAddColor={addColorHandler} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  )
}
export default App
