import {
  CLEAR_CART,
  REMOVE,
  DECREASE,
  INCREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './Actions'

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: new Map() }
    case REMOVE:
      const newCart = new Map(state.cart)
      newMap.delete(action.payload.id)
      return { ...state, cart: newCart }

    case INCREASE: {
      const newCartMap = new Map(state.cart)
      const itemId = action.payload.id
      let newCartItem = newCartMap.get(itemId)
      newCartItem = { ...newCartItem, amount: newCartItem.amount + 1 }
      newCartMap.set(itemId, newCartItem)
      return { ...state, cart: newCartMap }
    }

    case DECREASE: {
      const newCartMap = new Map(state.cart)
      const itemId = action.payload.id
      let newCartItem = newCartMap.get(itemId)

      newCartItem = { ...newCartItem, amount: newCartItem.amount - 1 }
      if (newCartItem.amount < 1) {
        newCartMap.delete(itemId)
        return { ...state, cart: newCartMap }
      }
      newCartMap.set(itemId, newCartItem)
      return { ...state, cart: newCartMap }
    }
    case LOADING: {
      return { ...state, loading: true }
    }
    case DISPLAY_ITEMS: {
      const newCart = new Map(
        action.payload.cart.map((item) => [item.id, item])
      )
      return { ...state, loading: false, cart: newCart }
    }
    default:
      throw new Error(`No matching action type : ${action.type}`)
  }
}

export default reducer
