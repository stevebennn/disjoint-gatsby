import React from 'react'

export default function Quantity({ quantity, update }) {
  const increase = () => {
    update(quantity + 1)
  }
  const decrease = () => {
    if (quantity !== 1) {
      update(quantity - 1)
    }
  }
  return (
    <div className="flex gap-2">
      <button onClick={increase}>+</button>
      <p>{quantity}</p>
      <button onClick={decrease}>-</button>
    </div>
  )
}
