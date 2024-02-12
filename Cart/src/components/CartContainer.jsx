import CartItem from './CartItem'
import cartItems from '../data'
import { useGlobalContext } from '../store/store'

const CartContainer = () => {
  const { cart, clearCartHandler, totalCast } = useGlobalContext()

  // const cartArray = [...cartItems]
  // Converting cart which is Map() to Array.
  const cartArray = Array.from(cart.entries())

  if (cartArray.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map((cartItem) => {
          const [id, item] = cartItem
          return <CartItem key={id} {...item} />
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total <span>${totalCast.toFixed(2)}</span>
          </h5>
        </div>
        <button className="btn btn-hipster" onClick={clearCartHandler}>
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
