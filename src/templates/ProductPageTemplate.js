import React from 'react'
import { graphql } from 'gatsby'
import ProductDetail from '../components/Products/ProductDetail'

const ProductPageTemplate = ({ data }) => {
  return (
    <div>
      <ProductDetail product={data.shopifyProduct} />
    </div>
  )
}

export const query = graphql`
  query ProductQuery($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      shopifyId
      handle
      id
      description
    }
  }
`

export default ProductPageTemplate
