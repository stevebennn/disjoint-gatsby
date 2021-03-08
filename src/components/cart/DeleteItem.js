import React, { useContext } from 'react'
import { ShopifyContext } from '../../context/ShopifyProvider'

export default function DeleteItem({ itemId }) {
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(ShopifyContext)

  const handleDelete = () => {
    removeLineItem(client, checkout.id, itemId)
  }
  return (
    <button onClick={handleDelete} role="button">
      Delete
    </button>
  )
}
