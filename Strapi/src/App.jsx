import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { useGlobalContext } from './store/store'
import Submenu from './components/Submenu'

const App = () => {
  const { sidebarIsOpen } = useGlobalContext()
  return (
    <main>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </main>
  )
}
export default App
