import React from 'react'
import { graphql } from 'gatsby'
import CollectionListing from '../components/collections/collectionListing'
import Layout from '../components/layout'

const Collections = ({ data }) => {
  return (
    <Layout>
      <div>
        <CollectionListing collections={data} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query CollectionQuery($handle: String!) {
    shopifyCollection(handle: { eq: $handle }) {
      shopifyId
      handle
      products {
        handle
        id
        shopifyId
        title
        tags
        description
        options {
          id
          name
          values
        }
        priceRange {
          maxVariantPrice {
            amount
          }
          minVariantPrice {
            amount
          }
        }
        variants {
          id
          image {
            id
            originalSrc
          }
          sku
          shopifyId
          compareAtPriceV2 {
            amount
          }
          price
          priceV2 {
            amount
          }
          selectedOptions {
            name
            value
          }
          title
        }
      }
      title
    }
  }
`

export default Collections
