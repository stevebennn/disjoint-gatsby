import React, { useContext } from 'react'
import { ShopifyContext } from '../../context/ShopifyProvider'

export default function AddToCart({ variant, quantity }) {
  const { addVariantToCart } = useContext(ShopifyContext)
  const handleClick = () => {
    if (variant) {
      addVariantToCart(variant.shopifyId, quantity)
    }
  }
  return (
    <button
      className="px-4 py-2 rounded-sm bg-pink-200 text-pink-800"
      role="button"
      onClick={handleClick}
    >
      Add to cart
    </button>
  )
}
