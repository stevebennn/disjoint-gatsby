import React from 'react'
import Layout from 'components/layout'

const ProductDetail = ({ product }) => {
  return (
    <Layout>
      <div>
        <h1>{product.description}</h1>
      </div>
    </Layout>
  )
}

export default ProductDetail
