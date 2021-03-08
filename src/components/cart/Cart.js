import React, { useContext } from 'react'
import { ShopifyContext } from '../../context/ShopifyProvider'
import LineItem from './LineItem'

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(ShopifyContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  // console.log(checkout)

  return (
    <div>
      {checkout.lineItems.map(item => (
        <LineItem key={item.id} item={item} />
      ))}
      <h2>Subtotal</h2>
      <p>$ {checkout.subtotalPrice}</p>
      <br />
      <h2>Taxes</h2>
      <p>$ {checkout.totalTax}</p>
      <br />
      <h2>Total</h2>
      <p>$ {checkout.totalPrice}</p>
      <br />
      <button
        type="button"
        onClick={handleCheckout}
        disabled={checkout.lineItems.length === 0}
      >
        Check out
      </button>
    </div>
  )
}

export default Cart
