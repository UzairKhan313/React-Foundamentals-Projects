import { useState } from 'react'
import { FaBars } from 'react-icons/fa'

import { links, social } from './data'
import Logo from './logo.svg'
import SocialLinks from './components/SocialLinks'

const App = () => {
  const [showLinks, setShowLinks] = useState(false)
  const toggleMenuHandler = () => {
    setShowLinks(!showLinks)
  }
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={Logo} alt="logo" />
          <button className="nav-toggle" onClick={toggleMenuHandler}>
            <FaBars />
          </button>
        </div>

        <div className={`links-container ${showLinks ? 'show-container' : ''}`}>
          <ul className="links">
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <SocialLinks social={social} />
      </div>
    </nav>
  )
}
export default App
