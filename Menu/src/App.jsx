import { useState } from 'react'
import Title from './components/Title'
import Menu from './components/Menu'
import menu from './data'
import Categories from './components/Categories'

// Getting all Unique catigories.
const allCategories = ['all', ...new Set(menu.map((item) => item.category))]

const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategories)

  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories items={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}
export default App
