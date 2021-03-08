import React, { useContext } from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import CardList from '../components/modules/card/card'
import ImageGallery from '../components/sections/imageGallery/imageGallery'
import Hero from '../components/sections/hero/hero'
import { ShopifyContext } from '../context/ShopifyProvider'
import Cart from '../components/cart/Cart'
// import Image from '../components/image'

const IndexPage = ({
  data: {
    allShopifyProduct: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="Home" />

      {/* <Hero />
    <ImageGallery /> */}
      <Cart />
      <CardList edges={edges} />

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allShopifyProduct {
      edges {
        node {
          title
          description
          handle
          variants {
            shopifyId
          }
        }
      }
    }
  }
`
