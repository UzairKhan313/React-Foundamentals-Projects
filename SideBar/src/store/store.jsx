import { createContext, useContext, useState } from 'react'

const AppContext = createContext({
  sidebarIsOpen: false,
  modalIsOpen: false,
  openModal: () => {},
  openSidebar: () => {},
})

const AppProvider = ({ children }) => {
  const [isSidebarIsOpen, setIsSidebarIsOpen] = useState(false)
  const [isModalIsOpen, setModalIsOpen] = useState(false)

  const openSidebarHandler = () => {
    setIsSidebarIsOpen(true)
  }
  const closeSidebarHandler = () => {
    setIsSidebarIsOpen(false)
  }
  const openModalHandler = () => {
    setModalIsOpen(true)
  }
  const closeModalHandler = () => {
    setModalIsOpen(false)
  }

  const value = {
    sidebarIsOpen: isSidebarIsOpen,
    modalIsOpen: isModalIsOpen,
    openModal: openModalHandler,
    closeModal: closeModalHandler,
    openSidebar: openSidebarHandler,
    closeSidebar: closeSidebarHandler,
  }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppProvider
export const useGlobalContext = () => {
  return useContext(AppContext)
}
