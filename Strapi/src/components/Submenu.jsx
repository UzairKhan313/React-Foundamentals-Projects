import React, { useRef } from 'react'

import sublinks from '../data'
import { useGlobalContext } from '../store/store'
const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext()
  const submenuContainer = useRef()
  const currentPage = sublinks.find((item) => item.pageId === pageId)

  const mouseLeaveHanlder = (event) => {
    const subMenu = submenuContainer.current
    const { right, left, bottom } = subMenu.getBoundingClientRect()
    // setPageId(null)
    const { clientX, clientY } = event
    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null)
    }
  }

  return (
    <div
      className={`submenu ${currentPage?.links ? 'show-submenu' : ''}`}
      onMouseLeave={mouseLeaveHanlder}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links.length > 3 ? '1fr 1fr' : '1fr',
        }}
      >
        {currentPage?.links?.map((item) => {
          const { id, url, label, icon } = item
          return (
            <a href={url} key={id}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Submenu
