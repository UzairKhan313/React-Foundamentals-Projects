export const getCartTotal = (cart) => {
  let totalAmount = 0
  let totalCast = 0

  for (let item of cart.values()) {
    const { amount, price } = item
    totalAmount += amount
    totalCast += price * amount
  }
  return { totalAmount, totalCast }
}
