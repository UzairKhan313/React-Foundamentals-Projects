import { createContext, useEffect, useContext, useReducer } from 'react'
import reducer from './reducers/reducer'
import cart from '../data'
import {
  CLEAR_CART,
  REMOVE,
  DECREASE,
  INCREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './reducers/Actions'
import { getCartTotal } from '../utils/CartUtils'

const url = 'https://www.course-api.com/react-useReducer-cart-project'

// const cartItems = cart.map((item) => [item.id, item])
// const cartMap = new Map(cartItems)

const AppContext = createContext({
  loading: false,
  cart: new Map(),
  totalAmount: 0,
  totalCast: 0,
  clearCartHandler: () => {},
  removeItemFromCartHandler: (id) => {},
  increaseAmountHandler: (id) => {},
  DecreaseAmountHandler: (id) => {},
})
const initialState = {
  loading: false,
  cart: new Map(),
}

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { totalAmount, totalCast } = getCartTotal(state.cart)

  const clearCartHandler = () => {
    dispatch({ type: CLEAR_CART })
  }
  const removeItemFromCartHandler = (id) => {
    dispatch({ type: REMOVE, payload: { id } })
  }

  const increaseAmountHandler = (id) => {
    dispatch({ type: INCREASE, payload: { id } })
  }
  const DecreaseAmountHandler = (id) => {
    dispatch({ type: DECREASE, payload: { id } })
  }

  const fetchData = async () => {
    dispatch({ type: LOADING })
    const response = await fetch(url)
    const data = await response.json()
    dispatch({ type: DISPLAY_ITEMS, payload: { cart: data } })
  }

  useEffect(() => {
    fetchData()
  }, [])
  const value = {
    ...state,
    totalAmount,
    totalCast,
    clearCartHandler,
    removeItemFromCartHandler,
    increaseAmountHandler,
    DecreaseAmountHandler,
  }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
