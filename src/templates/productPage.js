import React from 'react'
import { graphql } from 'gatsby'
import ProductDetail from '../components/products/ProductDetail'
import Layout from '../components/layout'

const ProductPage = ({ data }) => {
  return (
    <Layout>
      <div>
        <ProductDetail product={data.shopifyProduct} />
      </div>
    </Layout>
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

export default ProductPage
