import React from 'react'
import { graphql } from 'gatsby'
import ProductDetail from '../components/products/productDetail'
import Layout from '../components/layout'

const ProductPage = ({ pageContext, data: { shopifyProduct } }) => {
  return (
    <Layout>
      <div>
        <ProductDetail product={shopifyProduct} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProductQuery($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      shopifyId
      handle
      description
      variants {
        title
        id
        compareAtPrice
        price
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      availableForSale
      id
      title
      options {
        name
        values
      }
    }
  }
`

export default ProductPage
