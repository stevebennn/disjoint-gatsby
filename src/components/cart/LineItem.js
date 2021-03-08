import React, { useContext } from 'react'
import { ShopifyContext } from '../../context/ShopifyProvider'
import Quantity from '../modules/quantity/Quantity'
import DeleteItem from './DeleteItem'

export default function LineItem({ item }) {
  const {
    updateLineItem,
    store: { client, checkout },
  } = useContext(ShopifyContext)

  const updateQuantity = qty => {
    updateLineItem(client, checkout.id, item.id, qty)
  }

  return (
    <div className="flex justify-between" key={item.id.toString()}>
      <p>{item.title}</p>
      <p>{item.variant.title}</p>
      <Quantity quantity={item.quantity} update={updateQuantity} />
      <DeleteItem itemId={item.id} />
    </div>
  )
}
