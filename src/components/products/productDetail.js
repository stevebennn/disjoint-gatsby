import React, { useState } from 'react'
import Cart from '../cart/Cart'
import Quantity from '../modules/quantity/Quantity'
import AddToCart from './AddToCart'
// import PdpQuantity from './PdpQuantity'
import ProductOptions from './ProductOptions'

const ProductDetail = ({ product }) => {
  const [variant, setVariant] = useState(null)
  const [quantity, setQuantity] = useState(1)

  return (
    <div>
      <div className="bg-gray-300 p-6">
        <p>Cart for testing purpose</p>
        <Cart />
      </div>
      <div className="bg-gray-100 p-6">
        <p className="text-2xl text-gray-800">{product.title}</p>
        <p className="text-gray-600">{product.description}</p>
        <ProductOptions
          variants={product.variants}
          setVariant={setVariant}
          options={product.options}
        />
        <Quantity quantity={quantity} update={setQuantity} />
        <AddToCart variant={variant} quantity={quantity} />
      </div>
    </div>
  )
}

export default ProductDetail
