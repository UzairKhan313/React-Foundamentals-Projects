import { createContext, useContext, useState } from 'react'

const AppContext = createContext({
  sidebarIsOpen: false,
  pageId: null,
  setPageId: () => {},
  openSidebar: () => {},
  closeSidebar: () => {},
})

export const AppContextProvider = ({ children }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const [pageId, setPageId] = useState(null)

  const openSidebarHandler = () => {
    setSidebarIsOpen(true)
  }
  const closeSidebarHandler = () => {
    setSidebarIsOpen(false)
  }

  const value = {
    sidebarIsOpen,
    pageId,
    setPageId,
    openSidebar: openSidebarHandler,
    closeSidebar: closeSidebarHandler,
  }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
