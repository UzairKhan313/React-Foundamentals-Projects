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

  const filterItemsHandler = (category) => {
    if (category === 'all') {
      setMenuItems(menuItems)
      return
    }
    const filterItems = menu.filter((item) => item.category === category)
    setMenuItems(filterItems)
  }
  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories items={categories} onFilterItem={filterItemsHandler} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}
export default App
