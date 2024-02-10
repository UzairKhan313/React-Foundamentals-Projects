import React from 'react'
import { FaTimes } from 'react-icons/fa'

import { useGlobalContext } from '../store/store'
import logo from '../logo.svg'
import { links, social } from '../data'

const Sidebar = () => {
  const { sidebarIsOpen, closeSidebar } = useGlobalContext()
  return (
    <aside className={` sidebar ${sidebarIsOpen ? 'show-sidebar' : ''}`}>
      <div className={`sidebar-header`}>
        <img src={logo} alt="coding-addict" className="logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className="social-links">
        {social.map((social) => {
          const { id, url, icon } = social
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
