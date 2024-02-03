import { useState } from 'react'
import Title from './components/Title'
import Menu from './components/Menu'
import menu from './data'

const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}
export default App
