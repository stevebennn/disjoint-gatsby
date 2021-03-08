import React from 'react'
import ShopifyProvider from './src/context/ShopifyProvider'

export function wrapRootElement({ element }) {
  return <ShopifyProvider>{element}</ShopifyProvider>
}
